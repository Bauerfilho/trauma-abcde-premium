/* =====================================================================
   TRAUMA PREMIUM · service worker
   Estratégia híbrida:
     - app shell (HTML/CSS/JS/icons/manifest) → stale-while-revalidate
     - sections-*.js                          → stale-while-revalidate
     - rsms.me/inter (fontes)                 → cache-first long-TTL
     - navegação (document)                   → network-first + offline fallback
     - resto                                  → network-only (passthrough)

   Versionamento: bump SW_VERSION para invalidar todos os caches antigos.
   ===================================================================== */

const SW_VERSION   = "v1.0.0";
const SHELL_CACHE  = `tp-shell-${SW_VERSION}`;
const RUNTIME_CACHE= `tp-runtime-${SW_VERSION}`;
const FONT_CACHE   = `tp-fonts-${SW_VERSION}`;

/* Pré-cache do app shell — inclui tudo que renderiza a casca ANTES de qualquer rota */
const APP_SHELL = [
  "./",
  "./index.html",
  "./styles.css",
  "./scripts.js",
  "./content-data.js",
  "./sections-1.js",
  "./sections-2.js",
  "./sections-3.js",
  "./manifest.json",
  "./icons/icon-192.svg",
  "./icons/icon-512.svg",
  "./icons/icon-maskable-512.svg",
  "./icons/icon-monochrome.svg",
  "./icons/apple-touch-icon.svg",
];

/* ---------- 1. INSTALL — pre-cache do shell ---------- */
self.addEventListener("install", (event) => {
  event.waitUntil((async () => {
    const cache = await caches.open(SHELL_CACHE);
    // addAll falha se QUALQUER recurso falhar — usamos add individual com try/catch
    // para resiliência (um SVG ausente não pode bloquear o registro do SW).
    await Promise.all(APP_SHELL.map(async (url) => {
      try {
        await cache.add(new Request(url, { cache: "reload" }));
      } catch (err) {
        // log silencioso · não bloqueia install
        console.warn("[SW] precache miss:", url, err && err.message);
      }
    }));
    // Não chamamos skipWaiting aqui — deixamos o cliente decidir (via mensagem)
    // para evitar atualização forçada no meio de uma sessão de estudo.
  })());
});

/* ---------- 2. ACTIVATE — limpa caches de versões antigas ---------- */
self.addEventListener("activate", (event) => {
  event.waitUntil((async () => {
    const keys = await caches.keys();
    const obsolete = keys.filter(k =>
      k.startsWith("tp-") &&
      k !== SHELL_CACHE && k !== RUNTIME_CACHE && k !== FONT_CACHE
    );
    await Promise.all(obsolete.map(k => caches.delete(k)));
    await self.clients.claim();
  })());
});

/* ---------- 3. MESSAGE — comunicação cliente → SW ---------- */
self.addEventListener("message", (event) => {
  const data = event.data || {};
  if (data.type === "SKIP_WAITING") {
    self.skipWaiting();
  }
  if (data.type === "GET_VERSION") {
    event.source?.postMessage({ type: "VERSION", version: SW_VERSION });
  }
});

/* ---------- 4. FETCH — roteamento por estratégia ---------- */
self.addEventListener("fetch", (event) => {
  const req = event.request;

  // Apenas GET é cacheável
  if (req.method !== "GET") return;

  const url = new URL(req.url);

  // 4.1 navegação (HTML document) → network-first + offline fallback
  if (req.mode === "navigate" || (req.headers.get("accept") || "").includes("text/html")) {
    event.respondWith(handleNavigate(req));
    return;
  }

  // 4.2 fontes externas (rsms.me/inter) → cache-first long-TTL
  if (url.hostname === "rsms.me") {
    event.respondWith(handleFont(req));
    return;
  }

  // 4.3 mesmo origem (CSS, JS, SVG, manifest) → stale-while-revalidate
  if (url.origin === self.location.origin) {
    event.respondWith(handleStaleWhileRevalidate(req));
    return;
  }

  // 4.4 outras origens → network-only (passthrough, sem cache)
  // (não precisa respondWith — deixa o navegador gerenciar)
});

/* ---------- 5. STRATEGIES ---------- */

// 5.1 navegação · network-first com fallback offline
async function handleNavigate(req) {
  try {
    const fresh = await fetch(req);
    // Atualiza shell cache silenciosamente
    const cache = await caches.open(SHELL_CACHE);
    cache.put(req, fresh.clone()).catch(() => {});
    return fresh;
  } catch (err) {
    // Offline · serve index.html como fallback (SPA shell)
    const cache = await caches.open(SHELL_CACHE);
    const cached = await cache.match("./index.html") || await cache.match("./");
    if (cached) return cached;
    // Último recurso · resposta minimalista
    return new Response(
      "<!doctype html><meta charset=utf-8><title>Offline</title>" +
      "<body style='font-family:system-ui;padding:32px;background:#0a0908;color:#f5f3ef'>" +
      "<h1>Offline</h1><p>Conecte-se à internet para carregar a Trauma Premium pela primeira vez.</p></body>",
      { status: 503, headers: { "Content-Type": "text/html; charset=utf-8" } }
    );
  }
}

// 5.2 fontes · cache-first
async function handleFont(req) {
  const cache = await caches.open(FONT_CACHE);
  const cached = await cache.match(req);
  if (cached) return cached;
  try {
    const fresh = await fetch(req);
    if (fresh && fresh.ok) cache.put(req, fresh.clone()).catch(() => {});
    return fresh;
  } catch (err) {
    // Sem fontes? O CSS tem fallback `Inter, system-ui` — degrada com graça.
    return cached || new Response("", { status: 504 });
  }
}

// 5.3 mesmo origem · stale-while-revalidate
async function handleStaleWhileRevalidate(req) {
  const cache = await caches.open(RUNTIME_CACHE);
  const cached = await cache.match(req);
  // Atualização em background (não bloqueia resposta)
  const networkPromise = fetch(req).then(fresh => {
    if (fresh && fresh.ok && fresh.type !== "opaque") {
      cache.put(req, fresh.clone()).catch(() => {});
    }
    return fresh;
  }).catch(() => null);

  // Se há cache, retorna imediatamente; senão espera a network
  if (cached) return cached;
  const fresh = await networkPromise;
  if (fresh) return fresh;
  // Sem cache e sem network · 504
  return new Response("", { status: 504, statusText: "Offline" });
}
