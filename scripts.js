/* =====================================================================
   TRAUMA PREMIUM · scripts.js
   - Hash router
   - Sidebar com efeito fluido (slide + blur progressivo)
   - Header inteligente (some ao rolar para baixo, aparece ao rolar para cima)
   - Modo claro/escuro persistente
   - Injeção dinâmica de seções (sectionRoot ou sections-*.js)
   - Quizzes, flashcards, calculadoras, simuladores genéricos
   ===================================================================== */

(function () {
  "use strict";

  /* ========== 0.0 MODULE STATE (must be declared before any function call) ==========
     These are used by helpers in section 7.10 / 7.11 which are invoked during the
     first synchronous renderRoute() call below. Hoisting `const`/`let` via TDZ
     would crash with "Cannot access X before initialization" if placed near the
     bottom of the IIFE. Keeping the state objects at the top eliminates that risk. */
  const _revealState = { observer: null };

  function _prefersReducedMotion() {
    return !!(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  }

  /* ========== 0. ROUTES MAP — ordem da sidebar ========== */
  const ROUTES = [
    // Bloco 0 — Entrada
    { id: "hero",                    title: "Início",                          letter: "•", color: "accent",  group: "Entrada" },
    { id: "casos-integradores",      title: "Casos integradores",              letter: "C", color: "c",       group: "Entrada" },
    { id: "atls10-vs-atls11",        title: "ATLS 10 vs ATLS 11",              letter: "11", color: "ok",      group: "Entrada" },

    // Bloco 1 — Visão geral
    { id: "xabcde-visao-geral",      title: "XABCDE — visão geral",             letter: "X", color: "x",       group: "Manejo inicial" },
    { id: "seguranca-mecanismo",     title: "Segurança da cena & mecanismo",    letter: "1", color: "e",       group: "Manejo inicial" },

    // Bloco 2 — X
    { id: "x-exsanguinacao",         title: "X — Controle de exsanguinação",   letter: "x", color: "x",       group: "X · Exsanguinação" },

    // Bloco 3 — A
    { id: "a-via-aerea",             title: "A — Via aérea + cervical",        letter: "A", color: "a",       group: "A · Via aérea" },
    { id: "a-via-aerea-dificil",     title: "Via aérea difícil — algoritmo",   letter: "↻", color: "a",       group: "A · Via aérea" },

    // Bloco 4 — B
    { id: "b-respiracao",            title: "B — Respiração e ventilação",     letter: "B", color: "b",       group: "B · Respiração" },
    { id: "b-pneumotorax",           title: "Pneumotórax (3 tipos)",            letter: "♁", color: "b",       group: "B · Respiração" },
    { id: "b-hemotorax",             title: "Hemotórax",                        letter: "♥", color: "b",       group: "B · Respiração" },
    { id: "b-flail-contusao",        title: "Tórax instável & contusão",        letter: "≋", color: "b",       group: "B · Respiração" },

    // Bloco 5 — C
    { id: "c-choque",                title: "C — Circulação e choque",         letter: "C", color: "c",       group: "C · Circulação" },
    { id: "c-tamponamento-aorta",    title: "Tamponamento & lesão de aorta",   letter: "♥", color: "c",       group: "C · Circulação" },

    // Bloco 6 — D, E
    { id: "d-neuro",                 title: "D — Disfunção neurológica",       letter: "D", color: "d",       group: "D & E" },
    { id: "e-exposicao",             title: "E — Exposição & hipotermia",      letter: "E", color: "e",       group: "D & E" },

    // Ferramentas
    { id: "simulador-xabcde",        title: "Simulador XABCDE completo",       letter: "▶", color: "x",       group: "Ferramentas" },
    { id: "calculadoras",            title: "Calculadoras (ABC · IC · Glasgow)", letter: "Σ", color: "c",     group: "Ferramentas" },
    { id: "tabelas-referencia",      title: "Tabelas de referência",            letter: "≡", color: "info",    group: "Ferramentas" },

    // Revisão
    { id: "pegadinhas-banca",        title: "Pegadinhas de banca",              letter: "!", color: "warn",    group: "Revisão" },
    { id: "flashcards",              title: "Flashcards",                       letter: "↻", color: "a",       group: "Revisão" },
    { id: "quiz-geral",              title: "Quiz geral",                       letter: "?", color: "c",       group: "Revisão" },

    // Glossário
    { id: "glossario",               title: "Glossário & terminologia",         letter: "Aa",color: "mute",    group: "Apêndices" }
  ];

  // mapeamento color → CSS color var name
  const COLOR_TO_VAR = {
    x: "var(--c-x)", a: "var(--c-a)", b: "var(--c-b)", c: "var(--c-c)",
    d: "var(--c-d)", e: "var(--c-e)", ok: "var(--ok)", warn: "var(--warn)",
    info: "var(--info)", err: "var(--err)", mute: "var(--txt-3)",
    accent: "var(--accent)"
  };

  // letter color in step-pill (for trilha)
  const LETTER_COLOR_FOR_PROGRESS = id => {
    const r = ROUTES.find(r => r.id === id);
    return r ? r.color : "accent";
  };

  /* ========== 1. THEME ========== */
  const themeBtn = document.getElementById("themeBtn");
  const STORAGE_THEME = "trauma-premium:theme";
  function applyTheme(t) {
    document.body.setAttribute("data-theme", t);
    try { localStorage.setItem(STORAGE_THEME, t); } catch (e) {}
    // update theme-color meta
    const tc = document.querySelector('meta[name="theme-color"]');
    if (tc) tc.setAttribute("content", t === "dark" ? "#0c0a09" : "#7f1d1d");
  }
  function initTheme() {
    let t;
    try { t = localStorage.getItem(STORAGE_THEME); } catch (e) {}
    if (!t) {
      t = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "dark"; // padrão dark
    }
    applyTheme(t);
  }
  themeBtn?.addEventListener("click", () => {
    const cur = document.body.getAttribute("data-theme");
    applyTheme(cur === "dark" ? "light" : "dark");
  });
  initTheme();

  /* ========== 1.1 PREFS — translucidez ajustável + modo aurora ==========
     Persistência:
       - trauma-premium:glass-blur     · valor em px (0..36, default 22)
       - trauma-premium:glass-saturate · valor em % (100..200, default 160)
       - trauma-premium:aurora-mode    · "on" | "calm" | "off" (default "on")
  */
  const STORAGE_BLUR    = "trauma-premium:glass-blur";
  const STORAGE_SAT     = "trauma-premium:glass-saturate";
  const STORAGE_AURORA  = "trauma-premium:aurora-mode";
  const PREFS_DEFAULTS  = { blur: 22, sat: 160, aurora: "on" };

  function _readNum(key, fallback, min, max) {
    try {
      const raw = localStorage.getItem(key);
      if (raw == null) return fallback;
      const n = parseFloat(raw);
      if (!Number.isFinite(n)) return fallback;
      return Math.min(max, Math.max(min, n));
    } catch (e) { return fallback; }
  }
  function _readEnum(key, allowed, fallback) {
    try {
      const raw = localStorage.getItem(key);
      return allowed.includes(raw) ? raw : fallback;
    } catch (e) { return fallback; }
  }

  function applyGlass(blurPx, satPct) {
    const root = document.documentElement;
    root.style.setProperty("--glass-blur", blurPx + "px");
    root.style.setProperty("--glass-saturate", satPct + "%");
    try {
      localStorage.setItem(STORAGE_BLUR, String(blurPx));
      localStorage.setItem(STORAGE_SAT, String(satPct));
    } catch (e) {}
  }
  function applyAuroraMode(mode) {
    document.body.setAttribute("data-aurora", mode);
    try { localStorage.setItem(STORAGE_AURORA, mode); } catch (e) {}
  }

  // Init from storage (or defaults) before first paint
  const initBlur   = _readNum(STORAGE_BLUR, PREFS_DEFAULTS.blur, 0, 36);
  const initSat    = _readNum(STORAGE_SAT,  PREFS_DEFAULTS.sat,  100, 200);
  const initAurora = _readEnum(STORAGE_AURORA, ["on", "calm", "off"], PREFS_DEFAULTS.aurora);
  applyGlass(initBlur, initSat);
  applyAuroraMode(initAurora);

  // Wire UI (popover) — only if elements exist (graceful no-op otherwise)
  const prefsBtn    = document.getElementById("prefsBtn");
  const prefsPanel  = document.getElementById("prefsPanel");
  const prefsBlur   = document.getElementById("prefsBlur");
  const prefsBlurOut= document.getElementById("prefsBlurOut");
  const prefsSat    = document.getElementById("prefsSat");
  const prefsSatOut = document.getElementById("prefsSatOut");
  const prefsReset  = document.getElementById("prefsReset");
  const prefsSegBtns = document.querySelectorAll(".prefs-seg-btn");

  function _updateSliderFill(slider) {
    if (!slider) return;
    const min = parseFloat(slider.min) || 0;
    const max = parseFloat(slider.max) || 100;
    const val = parseFloat(slider.value) || 0;
    const pct = ((val - min) / (max - min)) * 100;
    slider.style.setProperty("--prefs-fill", pct + "%");
  }
  function _syncPrefsUI() {
    if (prefsBlur)    { prefsBlur.value = String(initBlur);   _updateSliderFill(prefsBlur); }
    if (prefsBlurOut) { prefsBlurOut.textContent = initBlur + " px"; }
    if (prefsSat)     { prefsSat.value = String(initSat);     _updateSliderFill(prefsSat); }
    if (prefsSatOut)  { prefsSatOut.textContent = initSat + "%"; }
    prefsSegBtns.forEach(btn => {
      const on = btn.dataset.auroraMode === initAurora;
      btn.setAttribute("aria-checked", on ? "true" : "false");
    });
  }
  _syncPrefsUI();

  function _setAuroraSeg(mode) {
    prefsSegBtns.forEach(btn => {
      btn.setAttribute("aria-checked", btn.dataset.auroraMode === mode ? "true" : "false");
    });
  }

  // Open / close popover (click-outside + Escape)
  function openPrefs() {
    if (!prefsPanel) return;
    prefsPanel.hidden = false;
    prefsBtn?.setAttribute("aria-expanded", "true");
  }
  function closePrefs() {
    if (!prefsPanel) return;
    prefsPanel.hidden = true;
    prefsBtn?.setAttribute("aria-expanded", "false");
  }
  prefsBtn?.addEventListener("click", (e) => {
    e.stopPropagation();
    if (prefsPanel?.hidden) openPrefs(); else closePrefs();
  });
  document.addEventListener("click", (e) => {
    if (!prefsPanel || prefsPanel.hidden) return;
    if (prefsPanel.contains(e.target) || prefsBtn?.contains(e.target)) return;
    closePrefs();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && prefsPanel && !prefsPanel.hidden) closePrefs();
  });

  // Sliders — apply on input (live), persist on change
  prefsBlur?.addEventListener("input", () => {
    const v = parseFloat(prefsBlur.value) || 0;
    document.documentElement.style.setProperty("--glass-blur", v + "px");
    if (prefsBlurOut) prefsBlurOut.textContent = v + " px";
    _updateSliderFill(prefsBlur);
  });
  prefsBlur?.addEventListener("change", () => {
    const v = parseFloat(prefsBlur.value) || 0;
    try { localStorage.setItem(STORAGE_BLUR, String(v)); } catch (e) {}
  });
  prefsSat?.addEventListener("input", () => {
    const v = parseFloat(prefsSat.value) || 100;
    document.documentElement.style.setProperty("--glass-saturate", v + "%");
    if (prefsSatOut) prefsSatOut.textContent = v + "%";
    _updateSliderFill(prefsSat);
  });
  prefsSat?.addEventListener("change", () => {
    const v = parseFloat(prefsSat.value) || 100;
    try { localStorage.setItem(STORAGE_SAT, String(v)); } catch (e) {}
  });

  // Aurora segmented control
  prefsSegBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      const mode = btn.dataset.auroraMode;
      if (!mode) return;
      applyAuroraMode(mode);
      _setAuroraSeg(mode);
    });
  });

  // Reset to defaults
  prefsReset?.addEventListener("click", () => {
    applyGlass(PREFS_DEFAULTS.blur, PREFS_DEFAULTS.sat);
    applyAuroraMode(PREFS_DEFAULTS.aurora);
    if (prefsBlur)    { prefsBlur.value = String(PREFS_DEFAULTS.blur);   _updateSliderFill(prefsBlur); }
    if (prefsBlurOut) { prefsBlurOut.textContent = PREFS_DEFAULTS.blur + " px"; }
    if (prefsSat)     { prefsSat.value = String(PREFS_DEFAULTS.sat);     _updateSliderFill(prefsSat); }
    if (prefsSatOut)  { prefsSatOut.textContent = PREFS_DEFAULTS.sat + "%"; }
    _setAuroraSeg(PREFS_DEFAULTS.aurora);
  });

  /* ========== 2. SIDEBAR ========== */
  const app = document.querySelector(".app");
  const sidebar = document.getElementById("sidebar");
  const scrim = document.getElementById("scrim");
  const menuBtn = document.getElementById("menuBtn");
  const sidebarCloseBtn = document.getElementById("sidebarCloseBtn");
  const topCollapseBtn = document.getElementById("topCollapseBtn");

  const STORAGE_SIDEBAR = "trauma-premium:sidebar-collapsed";

  function openSidebarMobile()  { app.classList.add("sidebar-open"); }
  function closeSidebarMobile() { app.classList.remove("sidebar-open"); }
  function toggleCollapseDesktop() {
    app.classList.toggle("sidebar-collapsed");
    try { localStorage.setItem(STORAGE_SIDEBAR, app.classList.contains("sidebar-collapsed") ? "1" : "0"); } catch (e) {}
  }
  try {
    if (localStorage.getItem(STORAGE_SIDEBAR) === "1" && window.innerWidth > 900) {
      app.classList.add("sidebar-collapsed");
    }
  } catch (e) {}

  menuBtn?.addEventListener("click", openSidebarMobile);
  sidebarCloseBtn?.addEventListener("click", closeSidebarMobile);
  scrim?.addEventListener("click", closeSidebarMobile);
  topCollapseBtn?.addEventListener("click", toggleCollapseDesktop);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") closeSidebarMobile();
  });

  /* ========== 3. NAV BUILD ========== */
  function buildNav() {
    const nav = document.getElementById("nav");
    if (!nav) return;
    nav.innerHTML = "";
    const groupOrder = [];
    const groups = new Map();
    ROUTES.forEach(r => {
      if (!groups.has(r.group)) { groups.set(r.group, []); groupOrder.push(r.group); }
      groups.get(r.group).push(r);
    });
    groupOrder.forEach(g => {
      const gEl = document.createElement("div");
      gEl.className = "nav-group";
      gEl.innerHTML = `<div class="nav-group__title">${g}</div>`;
      groups.get(g).forEach((r, i) => {
        const a = document.createElement("a");
        a.href = `#${r.id}`;
        a.className = "nav-link";
        a.dataset.id = r.id;
        a.style.setProperty("--nav-color", COLOR_TO_VAR[r.color] || "var(--accent)");
        const idx = ROUTES.findIndex(x => x.id === r.id) + 1;
        a.innerHTML = `
          <span class="nav-link__letter">${r.letter}</span>
          <span class="nav-link__txt">${r.title}</span>
          <span class="nav-link__num">${String(idx).padStart(2,"0")}</span>`;
        a.addEventListener("click", () => {
          if (window.innerWidth <= 900) closeSidebarMobile();
        });
        gEl.appendChild(a);
      });
      nav.appendChild(gEl);
    });
  }
  buildNav();

  /* ========== 4. HEADER INTELIGENTE ==========
     - Esconde ao rolar para baixo, aparece ao rolar para cima (após HIDE_AFTER)
     - Blur progressivo: --tb-blur cresce de 14px a 26px conforme scroll
     - Barra de progresso de leitura: --read-progress (0..1) reflete % da página
  */
  const topbar = document.getElementById("topbar");
  let lastScroll = 0;
  let scrollAccum = 0;
  let scrollTicking = false;
  const HIDE_AFTER = 80;     // px após o topo
  const DELTA = 6;           // sensibilidade

  // Blur progressivo: clamp em px conforme avanço do scroll
  const TB_BLUR_MIN = 14;
  const TB_BLUR_MAX = 26;
  const TB_BLUR_RANGE = 360; // px de scroll necessários para atingir o máximo

  function _applyScrollState() {
    scrollTicking = false;
    const y = window.scrollY || document.documentElement.scrollTop;

    // 4.1 hide/show smart header
    if (y < HIDE_AFTER) {
      topbar.classList.remove("is-hidden");
      topbar.classList.toggle("is-floating", y > 4);
    } else {
      const delta = y - lastScroll;
      scrollAccum = Math.abs(delta) > DELTA ? scrollAccum + delta : scrollAccum;
      if (scrollAccum > 24) { topbar.classList.add("is-hidden"); scrollAccum = 0; }
      else if (scrollAccum < -24) { topbar.classList.remove("is-hidden"); scrollAccum = 0; }
      topbar.classList.toggle("is-floating", y > 4);
    }

    // 4.2 blur progressivo
    const blurT = Math.min(1, Math.max(0, y / TB_BLUR_RANGE));
    const blurPx = TB_BLUR_MIN + (TB_BLUR_MAX - TB_BLUR_MIN) * blurT;
    topbar.style.setProperty("--tb-blur", blurPx.toFixed(1) + "px");

    // 4.3 progresso de leitura (% scrollado da página atual)
    const doc = document.documentElement;
    const scrollable = Math.max(1, (doc.scrollHeight || 0) - (window.innerHeight || 0));
    const progress = Math.min(1, Math.max(0, y / scrollable));
    topbar.style.setProperty("--read-progress", progress.toFixed(4));

    lastScroll = y;
  }

  function onScroll() {
    if (scrollTicking) return;
    scrollTicking = true;
    requestAnimationFrame(_applyScrollState);
  }
  window.addEventListener("scroll", onScroll, { passive: true });
  window.addEventListener("resize", onScroll, { passive: true });

  /* ========== 5. PROGRESS PILL ========== */
  const progFill = document.getElementById("progFill");
  const progCount = document.getElementById("progCount");
  function updateProgress(id) {
    const idx = Math.max(0, ROUTES.findIndex(r => r.id === id));
    const total = ROUTES.length;
    const pct = ((idx + 1) / total) * 100;
    if (progFill) progFill.style.width = pct + "%";
    if (progCount) progCount.textContent = `${idx + 1} / ${total}`;
  }

  /* ========== 6. ROUTER ========== */
  const pageHost = document.getElementById("pageHost");
  const sectionRoot = document.getElementById("sectionRoot");

  function getRoute() {
    const h = (location.hash || "").replace(/^#\/?/, "");
    return h && ROUTES.find(r => r.id === h) ? h : "hero";
  }

  function setActiveLink(id) {
    document.querySelectorAll(".nav-link").forEach(a => {
      const isActive = a.dataset.id === id;
      a.classList.toggle("active", isActive);
      // a11y · aria-current="page" sinaliza ao leitor de tela qual rota está ativa
      if (isActive) a.setAttribute("aria-current", "page");
      else a.removeAttribute("aria-current");
    });
  }

  function getSectionElement(id) {
    // 1) procurar dentro do sectionRoot inline (HTML estático)
    const fromRoot = sectionRoot?.querySelector(`section[data-id="${id}"]`);
    if (fromRoot) return fromRoot.cloneNode(true);
    // 2) procurar em window.TRAUMA_SECTIONS (definidas em sections-*.js)
    if (window.TRAUMA_SECTIONS && typeof window.TRAUMA_SECTIONS[id] === "function") {
      const html = window.TRAUMA_SECTIONS[id]();
      const wrap = document.createElement("div");
      wrap.innerHTML = html.trim();
      const sec = wrap.querySelector(`section[data-id="${id}"]`) || wrap.firstElementChild;
      return sec || null;
    }
    return null;
  }

  function renderRoute() {
    const id = getRoute();
    const route = ROUTES.find(r => r.id === id);
    pageHost.innerHTML = "";
    let sec = getSectionElement(id);
    if (!sec) {
      sec = document.createElement("section");
      sec.className = "section";
      sec.dataset.id = id;
      sec.innerHTML = `
        <div class="block-head">
          <div class="block-head__letter">…</div>
          <div class="block-head__copy">
            <h2>Página em construção</h2>
            <p>O conteúdo de <strong>${route?.title || id}</strong> será carregado em breve.</p>
          </div>
        </div>`;
    }
    pageHost.appendChild(sec);

    // ---------- inject: bloco de questões "Teste seu gabarito" ----------
    // Reutiliza markup .quiz já tratado por bindInteractions(); só injeta
    // se houver banco para a rota atual (páginas didáticas).
    try {
      if (window.TRAUMA_QUIZ_EXTRA
          && typeof window.TRAUMA_QUIZ_EXTRA.has === "function"
          && window.TRAUMA_QUIZ_EXTRA.has(id)) {
        const html = window.TRAUMA_QUIZ_EXTRA.render(id);
        if (html) {
          const wrap = document.createElement("div");
          wrap.innerHTML = html.trim();
          while (wrap.firstChild) pageHost.appendChild(wrap.firstChild);
        }
      }
    } catch (_) { /* fail-soft · nunca derruba a rota */ }

    // ---------- inject: navegação inferior (anterior / próxima) ----------
    try {
      if (window.TRAUMA_PAGE_NAV && typeof window.TRAUMA_PAGE_NAV.render === "function") {
        const html = window.TRAUMA_PAGE_NAV.render(id);
        if (html) {
          const wrap = document.createElement("div");
          wrap.innerHTML = html.trim();
          while (wrap.firstChild) pageHost.appendChild(wrap.firstChild);
        }
      }
    } catch (_) { /* fail-soft */ }

    setActiveLink(id);
    updateProgress(id);
    // topbar copy
    const topCopy = document.getElementById("topbarCopy");
    if (topCopy && route) {
      topCopy.innerHTML = `
        <span class="topbar-eyebrow">${route.group}</span>
        <span class="topbar-title">${route.title}</span>`;
    }
    // scroll to top, focus host
    window.scrollTo({ top: 0, behavior: "instant" in window ? "instant" : "auto" });
    pageHost.focus({ preventScroll: true });
    // bind interactions · usa pageHost como root para incluir blocos
    // injetados após a section (quiz-extra "Teste seu gabarito", page-nav etc.)
    bindInteractions(pageHost);
    // recompute scroll-driven state (--tb-blur, --read-progress) after layout settles
    requestAnimationFrame(() => requestAnimationFrame(_applyScrollState));
  }

  window.addEventListener("hashchange", renderRoute);
  if (!location.hash) location.hash = "#hero";
  renderRoute();

  /* ========== 7. INTERACTIONS BINDING ========== */

  function bindInteractions(root) {
    // 7.1 quizzes (data-quiz with data-correct)
    root.querySelectorAll(".quiz").forEach(quiz => {
      const alts = quiz.querySelectorAll(".quiz__alt");
      const correctIdx = parseInt(quiz.getAttribute("data-correct") || "-1", 10);
      alts.forEach((alt, i) => {
        alt.addEventListener("click", (ev) => {
          if (quiz.classList.contains("is-revealed")) return;
          // Ripple no item clicado — tinta verde se correto, vermelha se errado
          const rippleColor = (i === correctIdx)
            ? "var(--ok)"
            : "var(--err)";
          spawnRipple(alt, ev, rippleColor);
          alts.forEach((a, j) => {
            a.setAttribute("disabled", "");
            if (j === correctIdx) a.classList.add("is-correct");
            else if (j === i) a.classList.add("is-wrong");
          });
          quiz.classList.add("is-revealed");
          // Confetti minimalista só em acerto, ancorado no item correto
          if (i === correctIdx) {
            const target = alts[correctIdx];
            spawnConfetti(quiz, target);
          }
        });
      });
    });

    // 7.2 flashcards (click to flip)
    root.querySelectorAll(".flash").forEach(card => {
      card.addEventListener("click", () => card.classList.toggle("is-flipped"));
    });

    // 7.3 generic choice rows with [data-choice-correct]
    root.querySelectorAll("[data-choice-group]").forEach(group => {
      const correct = group.getAttribute("data-choice-correct");
      const fb = group.querySelector(".sim__feedback");
      const sim = group.closest(".sim");
      group.querySelectorAll(".choice").forEach(btn => {
        btn.addEventListener("click", (ev) => {
          if (group.dataset.locked === "1") return;
          group.dataset.locked = "1";
          const right = btn.getAttribute("data-value") === correct;
          // Ripple no botão clicado
          spawnRipple(btn, ev, right ? "var(--ok)" : "var(--err)");
          group.querySelectorAll(".choice").forEach(b => {
            b.setAttribute("disabled", "");
            const v = b.getAttribute("data-value");
            if (v === correct) b.classList.add("is-correct");
            else if (b === btn) b.classList.add("is-wrong");
          });
          if (fb) {
            const fbRight = fb.getAttribute("data-feedback-correct") || "";
            const fbWrong = fb.getAttribute("data-feedback-wrong") || "";
            fb.innerHTML = right ? `<strong>Acertou.</strong> ${fbRight}` : `<strong>Não foi.</strong> ${fbWrong}`;
            sim?.classList.add("is-feedback");
          }
          // Confetti em acerto, ancorado no botão correto
          if (right) {
            const correctBtn = group.querySelector(`.choice[data-value="${correct}"]`) || btn;
            const host = group.closest(".sim__step-card") || group.closest(".sim") || group;
            spawnConfetti(host, correctBtn);
          }
        });
      });
    });

    // 7.4 Glasgow calculator
    root.querySelectorAll(".calc-glasgow").forEach(c => initGlasgow(c));

    // 7.5 Score ABC calculator
    root.querySelectorAll(".calc-abc").forEach(c => initScoreABC(c));

    // 7.6 Shock index
    root.querySelectorAll(".calc-shock-index").forEach(c => initShockIndex(c));

    // 7.7 TXA timer
    root.querySelectorAll(".timer-txa").forEach(t => initTimerTXA(t));

    // 7.8 6-hour tourniquet timer
    root.querySelectorAll(".timer-tourniquet").forEach(t => initTimerTourniquet(t));

    // 7.9 XABCDE simulator (multi-step)
    root.querySelectorAll(".sim-xabcde").forEach(s => initSimXabcde(s));

    // 7.10 cursor-following spotlight on .card (powers .card::after via --mx/--my)
    bindCardSpotlight(root);

    // 7.11 scroll reveal (auto-tag + IntersectionObserver with stagger)
    bindScrollReveal(root);
  }

  /* ========== 7.10 CARD SPOTLIGHT ========== */
  function bindCardSpotlight(root) {
    if (_prefersReducedMotion()) return;
    root.querySelectorAll(".card").forEach(card => {
      if (card.dataset.spotlightBound === "1") return;
      card.dataset.spotlightBound = "1";

      let raf = 0;
      let pendingX = 50, pendingY = 50;

      const apply = () => {
        raf = 0;
        card.style.setProperty("--mx", pendingX + "%");
        card.style.setProperty("--my", pendingY + "%");
      };

      card.addEventListener("pointermove", (e) => {
        const r = card.getBoundingClientRect();
        if (r.width === 0 || r.height === 0) return;
        pendingX = ((e.clientX - r.left) / r.width) * 100;
        pendingY = ((e.clientY - r.top) / r.height) * 100;
        if (!raf) raf = requestAnimationFrame(apply);
      }, { passive: true });

      card.addEventListener("pointerleave", () => {
        if (raf) { cancelAnimationFrame(raf); raf = 0; }
        // smooth return to center via CSS transition on ::after (driven by var changes)
        card.style.setProperty("--mx", "50%");
        card.style.setProperty("--my", "50%");
      }, { passive: true });
    });
  }

  /* ========== 7.10b RIPPLE & CONFETTI (feedback states) ========== */
  // Spawn a radial ripple at the click point inside `host`. Auto-cleans after 540ms.
  function spawnRipple(host, ev, colorVar) {
    if (_prefersReducedMotion()) return;
    if (!host) return;
    // Ensure host can position the ripple absolutely.
    const cs = window.getComputedStyle(host);
    if (cs.position === "static") host.style.position = "relative";

    const r = host.getBoundingClientRect();
    let x = r.width / 2, y = r.height / 2;
    if (ev && typeof ev.clientX === "number") {
      x = ev.clientX - r.left;
      y = ev.clientY - r.top;
    }

    const span = document.createElement("span");
    span.className = "ripple";
    span.style.setProperty("--rx", x + "px");
    span.style.setProperty("--ry", y + "px");
    if (colorVar) span.style.setProperty("--ripple-c", colorVar);
    host.appendChild(span);
    // Remove after animation. Fallback timeout in case animationend doesn't fire.
    const cleanup = () => { span.remove(); };
    span.addEventListener("animationend", cleanup, { once: true });
    setTimeout(cleanup, 700);
  }

  // Spawn a small burst of confetti particles inside `host`, originating near `anchor`.
  // Minimalist: 12 particles, semantic colors, fade out quickly.
  function spawnConfetti(host, anchor) {
    if (_prefersReducedMotion()) return;
    if (!host) return;
    // Ensure host can position the confetti container absolutely.
    const cs = window.getComputedStyle(host);
    if (cs.position === "static") host.style.position = "relative";

    // Compute origin (cx, cy) relative to host, centered on anchor.
    let cx = "50%", cy = "50%";
    if (anchor) {
      const hr = host.getBoundingClientRect();
      const ar = anchor.getBoundingClientRect();
      cx = (ar.left + ar.width / 2 - hr.left) + "px";
      cy = (ar.top + ar.height / 2 - hr.top) + "px";
    }

    const layer = document.createElement("span");
    layer.className = "confetti";
    layer.setAttribute("aria-hidden", "true");

    // Semantic palette · matches XABCDE colors
    const palette = [
      "var(--ok)",
      "var(--c-x)",
      "var(--c-a)",
      "var(--c-b)",
      "var(--c-c)",
      "var(--c-d)",
      "var(--c-e)",
    ];
    const COUNT = 12;
    for (let i = 0; i < COUNT; i++) {
      const p = document.createElement("span");
      p.className = "confetti__p";
      // Spread: arc from -70deg to +70deg around vertical, distance 60–110px
      const ang = (-Math.PI / 2) + ((Math.random() - 0.5) * (140 * Math.PI / 180));
      const dist = 60 + Math.random() * 50;
      const dx = Math.cos(ang) * dist;
      const dy = Math.sin(ang) * dist;
      const rot = (Math.random() < 0.5 ? -1 : 1) * (90 + Math.random() * 270);
      const dur = 700 + Math.random() * 280;
      const delay = Math.floor(Math.random() * 90);
      const color = palette[Math.floor(Math.random() * palette.length)];
      // Mix of square (rotated) and round particles for variety
      const isRound = Math.random() < 0.4;
      p.style.setProperty("--cx", cx);
      p.style.setProperty("--cy", cy);
      p.style.setProperty("--cdx", dx.toFixed(1) + "px");
      p.style.setProperty("--cdy", dy.toFixed(1) + "px");
      p.style.setProperty("--crot", rot.toFixed(0) + "deg");
      p.style.setProperty("--cdur", dur.toFixed(0) + "ms");
      p.style.setProperty("--cdelay", delay + "ms");
      p.style.setProperty("--ch", color);
      p.style.setProperty("--cr", isRound ? "50%" : "2px");
      // Slightly varied sizes
      const size = 5 + Math.floor(Math.random() * 4);
      p.style.width = size + "px";
      p.style.height = size + "px";
      layer.appendChild(p);
    }
    host.appendChild(layer);
    // Cleanup after the longest animation could finish
    setTimeout(() => layer.remove(), 1300);
  }

  /* ========== 7.11 SCROLL REVEAL ========== */
  // _revealState is declared at the top of this IIFE (section 0.0) to avoid TDZ.

  // Auto-tag selectors: components that should fade-in on scroll.
  function _revealSelectors() {
    return [
      ".card",
      ".callout",
      ".flash",
      ".block",
      ".sim__step-card",
      ".table-compare",
      ".quiz",
    ].join(",");
  }

  function _ensureRevealObserver() {
    if (_revealState.observer) return _revealState.observer;
    if (!("IntersectionObserver" in window)) return null;
    _revealState.observer = new IntersectionObserver((entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");
          _revealState.observer.unobserve(entry.target);
        }
      }
    }, {
      root: null,
      rootMargin: "0px 0px -8% 0px",
      threshold: 0.08,
    });
    return _revealState.observer;
  }

  function bindScrollReveal(root) {
    // No-op if reduced motion: CSS already forces visible state.
    if (_prefersReducedMotion()) {
      // Still mark as revealed so any [data-reveal] authored by hand becomes visible.
      root.querySelectorAll("[data-reveal]").forEach(el => el.classList.add("is-revealed"));
      return;
    }
    if (!("IntersectionObserver" in window)) {
      // Graceful fallback: just reveal everything immediately.
      root.querySelectorAll("[data-reveal]").forEach(el => el.classList.add("is-revealed"));
      return;
    }

    const observer = _ensureRevealObserver();
    if (!observer) {
      root.querySelectorAll("[data-reveal]").forEach(el => el.classList.add("is-revealed"));
      return;
    }

    const sel = _revealSelectors();

    // Auto-tag: walk each section, group siblings by parent, assign --rv-i index.
    const sections = root.matches?.(".section") ? [root] : Array.from(root.querySelectorAll(".section"));
    const targets = sections.length ? sections : [root];

    targets.forEach(section => {
      // Collect all reveal-eligible elements in this section.
      const candidates = section.querySelectorAll(sel);
      // Group by parent so stagger resets per container (grid row, flex row, etc).
      const perParent = new Map();
      candidates.forEach(el => {
        if (el.dataset.revealBound === "1") return;
        // Skip nested cards (e.g., .card inside .callout) — only the outer wrapper animates.
        if (el.parentElement && el.parentElement.closest("[data-reveal]")) return;
        const p = el.parentElement || section;
        if (!perParent.has(p)) perParent.set(p, []);
        perParent.get(p).push(el);
      });

      perParent.forEach(list => {
        list.forEach((el, i) => {
          el.dataset.revealBound = "1";
          if (!el.hasAttribute("data-reveal")) el.setAttribute("data-reveal", "");
          // Cap stagger index so very long lists don't accumulate excessive delay.
          el.style.setProperty("--rv-i", String(Math.min(i, 8)));
          observer.observe(el);
        });
      });
    });

    // Also pick up any hand-authored [data-reveal] not matched above.
    root.querySelectorAll("[data-reveal]").forEach(el => {
      if (el.dataset.revealBound === "1") return;
      el.dataset.revealBound = "1";
      observer.observe(el);
    });
  }

  /* ========== 8. CALC: GLASGOW ========== */
  function initGlasgow(root) {
    const groups = root.querySelectorAll(".calc-block[data-glasgow]");
    const sumEl = root.querySelector(".calc-result__num");
    const lblEl = root.querySelector(".calc-result__lbl");
    function refresh() {
      let total = 0;
      let allChosen = true;
      groups.forEach(g => {
        const sel = g.querySelector(".calc-opt.is-selected");
        if (!sel) { allChosen = false; return; }
        total += parseInt(sel.getAttribute("data-score"), 10);
      });
      if (!allChosen) {
        sumEl.textContent = "–";
        lblEl.innerHTML = `Selecione abertura ocular, resposta verbal e resposta motora.`;
        return;
      }
      sumEl.textContent = total;
      let cls = "Leve";
      let action = "Sem indicação automática de via aérea definitiva apenas pelo Glasgow.";
      let pillC = "p-ok";
      if (total <= 8) {
        cls = "Grave"; action = "Glasgow ≤ 8 → indicação imediata de via aérea definitiva (IOT).";
        pillC = "p-err";
      } else if (total <= 12) {
        cls = "Moderado"; action = "TCE moderado — observação rigorosa; reavaliar.";
        pillC = "p-warn";
      } else {
        cls = "Leve"; pillC = "p-ok";
      }
      lblEl.innerHTML = `<span class="pill ${pillC}">${cls}</span> · ${action}`;
    }
    groups.forEach(g => {
      g.querySelectorAll(".calc-opt").forEach(o => {
        o.addEventListener("click", () => {
          g.querySelectorAll(".calc-opt").forEach(x => x.classList.remove("is-selected"));
          o.classList.add("is-selected");
          refresh();
        });
      });
    });
  }

  /* ========== 9. CALC: SCORE ABC ========== */
  function initScoreABC(root) {
    const items = root.querySelectorAll("[data-abc]");
    const sumEl = root.querySelector(".calc-result__num");
    const lblEl = root.querySelector(".calc-result__lbl");
    function refresh() {
      let total = 0;
      items.forEach(i => { if (i.classList.contains("is-on")) total++; });
      sumEl.textContent = total;
      let pillC, msg;
      if (total >= 2) {
        pillC = "p-err"; msg = `Score ABC ≥ 2 → <strong>indica iniciar Protocolo de Transfusão Maciça (PTM)</strong> com proporção 1:1:1.`;
      } else {
        pillC = "p-ok"; msg = `Score ABC < 2 → não há indicação automática de PTM. Reavaliar resposta a cristaloide e necessidade persistente de transfusão.`;
      }
      lblEl.innerHTML = `<span class="pill ${pillC}">${total}/4</span> · ${msg}`;
    }
    items.forEach(i => {
      i.addEventListener("click", () => { i.classList.toggle("is-on"); i.classList.toggle("is-selected"); refresh(); });
    });
  }

  /* ========== 10. CALC: SHOCK INDEX ========== */
  function initShockIndex(root) {
    const fc = root.querySelector("[data-si='fc']");
    const pas = root.querySelector("[data-si='pas']");
    const sumEl = root.querySelector(".calc-result__num");
    const lblEl = root.querySelector(".calc-result__lbl");
    function refresh() {
      const f = parseFloat(fc.value); const p = parseFloat(pas.value);
      if (!f || !p) { sumEl.textContent = "–"; lblEl.innerHTML = "Insira FC (bpm) e PAS (mmHg) para calcular."; return; }
      const si = (f / p);
      sumEl.textContent = si.toFixed(2);
      let pillC, msg;
      if (si >= 1.0) {
        pillC = "p-err"; msg = `Índice ≥ 1,0 → choque <strong>franco</strong>. Forte sugestão de PTM e busca ativa do foco.`;
      } else if (si >= 0.8) {
        pillC = "p-warn"; msg = `Índice ≥ 0,8 → <strong>sugere</strong> necessidade de PTM. Antecipar hemoderivados.`;
      } else {
        pillC = "p-ok"; msg = `Índice < 0,8 → fora da faixa de gatilho do PTM. Reavaliar a cada bólus e por classe de choque.`;
      }
      lblEl.innerHTML = `<span class="pill ${pillC}">IC ${si.toFixed(2)}</span> · ${msg}`;
    }
    fc?.addEventListener("input", refresh); pas?.addEventListener("input", refresh);
  }

  /* ========== 11. TIMER TXA (3h window) ========== */
  function initTimerTXA(root) {
    const startBtn = root.querySelector("[data-act='start']");
    const resetBtn = root.querySelector("[data-act='reset']");
    const num = root.querySelector(".timer-num");
    const status = root.querySelector("[data-status]");
    let t0 = null, raf = null;
    function tick() {
      if (!t0) return;
      const elapsedMs = Date.now() - t0;
      const remaining = 3 * 3600 * 1000 - elapsedMs;
      const sign = remaining < 0 ? "–" : "";
      const abs = Math.abs(remaining);
      const h = Math.floor(abs / 3600000);
      const m = Math.floor((abs % 3600000) / 60000);
      const s = Math.floor((abs % 60000) / 1000);
      num.textContent = `${sign}${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
      if (remaining > 0) {
        status.innerHTML = `<span class="pill p-ok">Janela aberta</span> Administrar TXA é seguro educacionalmente. Esquema: 1 g em 10 min + 1 g em 8 h, ou 2 g dose única precoce.`;
      } else {
        status.innerHTML = `<span class="pill p-err">Janela fechada (>3 h)</span> Fora da janela: <strong>pode aumentar mortalidade</strong>. Não administrar TXA — buscar outras estratégias do PTM.`;
      }
      raf = requestAnimationFrame(tick);
    }
    startBtn?.addEventListener("click", () => { t0 = Date.now(); cancelAnimationFrame(raf); tick(); });
    resetBtn?.addEventListener("click", () => { t0 = null; cancelAnimationFrame(raf); num.textContent = "03:00:00"; status.innerHTML = `<span class="pill p-mute">Aguardando</span> Pressione <em>Iniciar</em> para simular o cronômetro do trauma.`; });
  }

  /* ========== 12. TIMER TORNIQUETE (6h limit) ========== */
  function initTimerTourniquet(root) {
    const startBtn = root.querySelector("[data-act='start']");
    const resetBtn = root.querySelector("[data-act='reset']");
    const num = root.querySelector(".timer-num");
    const status = root.querySelector("[data-status]");
    let t0 = null, raf = null;
    function tick() {
      if (!t0) return;
      const elapsedMs = Date.now() - t0;
      const limit = 6 * 3600 * 1000;
      const h = Math.floor(elapsedMs / 3600000);
      const m = Math.floor((elapsedMs % 3600000) / 60000);
      const s = Math.floor((elapsedMs % 60000) / 1000);
      num.textContent = `${String(h).padStart(2,"0")}:${String(m).padStart(2,"0")}:${String(s).padStart(2,"0")}`;
      if (elapsedMs < limit * 0.5) {
        status.innerHTML = `<span class="pill p-ok">Membro viável</span> Documente a hora exata; reavalie após avaliação primária. Não troque o torniquete bem aplicado pelo leigo — apenas reavalie.`;
      } else if (elapsedMs < limit) {
        status.innerHTML = `<span class="pill p-warn">Atenção: > 3 h</span> Risco crescente de isquemia e síndrome de reperfusão. Centro especializado, planejar liberação cuidadosa.`;
      } else {
        status.innerHTML = `<span class="pill p-err">> 6 h — risco de amputação</span> Membro sob risco de isquemia irreversível e síndrome de reperfusão. Decisão multidisciplinar antes de afrouxar.`;
      }
      raf = requestAnimationFrame(tick);
    }
    startBtn?.addEventListener("click", () => { t0 = Date.now(); cancelAnimationFrame(raf); tick(); });
    resetBtn?.addEventListener("click", () => { t0 = null; cancelAnimationFrame(raf); num.textContent = "00:00:00"; status.innerHTML = `<span class="pill p-mute">Aguardando</span> Pressione <em>Iniciar</em> para simular o relógio do torniquete.`; });
  }

  /* ========== 13. SIMULADOR XABCDE (multi-step) ========== */
  function initSimXabcde(root) {
    const steps = root.querySelectorAll(".sim__step-card");
    const stepLbl = root.querySelector(".sim__step");
    const total = steps.length;
    let idx = 0;
    let score = 0;
    function show(i) {
      steps.forEach((s, j) => s.style.display = j === i ? "block" : "none");
      stepLbl.textContent = `Passo ${i + 1} / ${total}`;
    }
    show(0);
    steps.forEach((step, i) => {
      const choices = step.querySelectorAll(".choice");
      const correct = step.getAttribute("data-correct");
      const fb = step.querySelector(".sim__feedback");
      const next = step.querySelector("[data-act='next']");
      choices.forEach(c => {
        c.addEventListener("click", () => {
          if (step.dataset.locked === "1") return;
          step.dataset.locked = "1";
          choices.forEach(x => {
            x.setAttribute("disabled", "");
            const v = x.getAttribute("data-value");
            if (v === correct) x.classList.add("is-correct");
            else if (x === c) x.classList.add("is-wrong");
          });
          const right = c.getAttribute("data-value") === correct;
          if (right) score++;
          if (fb) {
            fb.innerHTML = right
              ? `<strong>Decisão correta.</strong> ${fb.getAttribute("data-feedback-correct") || ""}`
              : `<strong>Não foi essa a melhor decisão.</strong> ${fb.getAttribute("data-feedback-wrong") || ""}`;
            step.classList.add("is-feedback");
          }
          if (next) next.style.display = "inline-flex";
        });
      });
      next?.addEventListener("click", () => {
        if (i < total - 1) { idx = i + 1; show(idx); }
        else {
          const summary = root.querySelector(".sim__summary");
          if (summary) {
            summary.style.display = "block";
            summary.querySelector("[data-score]").textContent = `${score} / ${total}`;
          }
        }
      });
    });
  }

  /* ========== 14. PUBLIC API ========== */
  window.TRAUMA_APP = { ROUTES, renderRoute, applyTheme };

  /* ========== 15. SERVICE WORKER REGISTRATION ==========
     Registra o SW após `load` para não competir com o paint inicial.
     Evita registros em ambientes não-seguros (file:// ou http inseguro).
     Detecta atualização disponível e expõe TRAUMA_APP.swState para a UI da Subetapa 4.3.
  */
  const SW_URL = "./sw.js";
  const swState = {
    supported: "serviceWorker" in navigator,
    registered: false,
    updateReady: false,
    registration: null,
    waiting: null,
    onUpdateReady: null, // callback opcional · setado pela UI da Subetapa 4.3
  };
  window.TRAUMA_APP.swState = swState;

  function _swNotify() {
    try { swState.onUpdateReady && swState.onUpdateReady(swState); } catch (e) {}
  }

  function _swTrackWaiting(reg) {
    // Caso 1: já existe um waiting no momento do registro
    if (reg.waiting && navigator.serviceWorker.controller) {
      swState.waiting = reg.waiting;
      swState.updateReady = true;
      _swNotify();
    }
    // Caso 2: novo SW chegou via updatefound → installing → installed
    reg.addEventListener("updatefound", () => {
      const installing = reg.installing;
      if (!installing) return;
      installing.addEventListener("statechange", () => {
        if (installing.state === "installed" && navigator.serviceWorker.controller) {
          swState.waiting = installing;
          swState.updateReady = true;
          _swNotify();
        }
      });
    });
  }

  function registerSW() {
    if (!swState.supported) return;
    // Só protocolos seguros (https) ou localhost
    const isSecure = location.protocol === "https:" ||
                     location.hostname === "localhost" ||
                     location.hostname === "127.0.0.1";
    if (!isSecure) return;
    navigator.serviceWorker.register(SW_URL, { scope: "./" })
      .then(reg => {
        swState.registered = true;
        swState.registration = reg;
        _swTrackWaiting(reg);
        // Recarrega a página quando o novo SW assume o controle
        // (guard contra reload duplo via flag _swReloading)
        let _swReloading = false;
        navigator.serviceWorker.addEventListener("controllerchange", () => {
          if (_swReloading) return;
          _swReloading = true;
          window.location.reload();
        });
      })
      .catch(err => {
        // Falha de registro não pode bloquear a app · apenas log silencioso
        // (ex: extensions de privacidade que bloqueiam SW)
        console.warn("[SW] register failed:", err && err.message);
      });
  }

  // Aceita ativar o waiting via API pública (chamado pela UI da Subetapa 4.3)
  window.TRAUMA_APP.swActivateWaiting = function () {
    if (swState.waiting) {
      try { swState.waiting.postMessage({ type: "SKIP_WAITING" }); } catch (e) {}
    }
  };

  /* ========== 15.1 UPDATE TOAST UI ==========
     Conectado a swState.onUpdateReady · sessão-scoped dismiss para não
     incomodar o usuário em recargas dentro da mesma sessão. */
  const updateToast       = document.getElementById("updateToast");
  const updateToastAction = document.getElementById("updateToastAction");
  const updateToastClose  = document.getElementById("updateToastClose");
  const STORAGE_DISMISS_VER = "trauma-premium:update-dismissed-ver";

  function _showUpdateToast() {
    if (!updateToast) return;
    // Não re-exibe se o usuário já dispensou esta versão específica nesta sessão
    let dismissedVer = null;
    try { dismissedVer = sessionStorage.getItem(STORAGE_DISMISS_VER); } catch (e) {}
    // Pergunta a versão do SW waiting (assíncrono, mas não bloqueia)
    if (swState.waiting) {
      try { swState.waiting.postMessage({ type: "GET_VERSION" }); } catch (e) {}
    }
    if (dismissedVer && dismissedVer === (swState._waitingVersion || "")) return;
    updateToast.hidden = false;
    updateToast.classList.remove("is-leaving");
  }

  function _hideUpdateToast(persistDismiss) {
    if (!updateToast) return;
    updateToast.classList.add("is-leaving");
    setTimeout(() => {
      updateToast.hidden = true;
      updateToast.classList.remove("is-leaving");
    }, 260);
    if (persistDismiss) {
      try { sessionStorage.setItem(STORAGE_DISMISS_VER, swState._waitingVersion || "1"); } catch (e) {}
    }
  }

  // Hook · UI reage ao SW waiting
  swState.onUpdateReady = () => _showUpdateToast();

  // Captura version response do SW (vem via message do worker)
  if ("serviceWorker" in navigator) {
    navigator.serviceWorker.addEventListener("message", (ev) => {
      const data = ev.data || {};
      if (data.type === "VERSION") {
        swState._waitingVersion = data.version || "";
      }
    });
  }

  updateToastAction?.addEventListener("click", () => {
    // Anima saída e ativa o waiting · controllerchange dispara reload
    _hideUpdateToast(false);
    window.TRAUMA_APP.swActivateWaiting();
  });
  updateToastClose?.addEventListener("click", () => {
    _hideUpdateToast(true); // dispensa persistente para esta sessão
  });

  /* ========== 16. INSTALL PROMPT ==========
     Dois fluxos paralelos:
       - Chromium (Chrome/Edge/Android/Samsung): captura `beforeinstallprompt`,
         bloqueia o banner nativo, e mostra UI custom · botão chama prompt() do evento.
       - iOS Safari: não suporta o evento. Detectamos plataforma e mostramos
         instruções (Compartilhar → Adicionar à Tela de Início).

     Persistência: dismiss em localStorage (se o user dispensou, respeita por 14 dias). */
  const STORAGE_INSTALL_DISMISS = "trauma-premium:install-dismissed-at";
  const INSTALL_DISMISS_DAYS = 14;

  const installToast       = document.getElementById("installToast");
  const installToastAction = document.getElementById("installToastAction");
  const installToastClose  = document.getElementById("installToastClose");
  const installToastSub    = document.getElementById("installToastSub");
  const iosHint            = document.getElementById("iosHint");
  const iosHintClose       = document.getElementById("iosHintClose");
  const iosHintOk          = document.getElementById("iosHintOk");

  let _deferredInstallPrompt = null;

  // Detecta se já está rodando como app instalado (display-mode standalone)
  function _isStandalone() {
    return (
      (window.matchMedia && window.matchMedia("(display-mode: standalone)").matches) ||
      window.navigator.standalone === true // iOS legacy
    );
  }

  // Detecta iOS (iPad moderno se identifica como Mac, então também checamos touch)
  function _isIOS() {
    const ua = window.navigator.userAgent || "";
    if (/iPad|iPhone|iPod/.test(ua) && !window.MSStream) return true;
    // iPadOS 13+ mascara como Mac · checa touch + plataforma
    if (/Macintosh/.test(ua) && navigator.maxTouchPoints > 1) return true;
    return false;
  }

  // Detecta Safari (no iOS, queremos só Safari · WebViews/Chrome iOS não suportam A2HS)
  function _isSafari() {
    const ua = window.navigator.userAgent || "";
    return /^((?!chrome|android|crios|fxios|edgios).)*safari/i.test(ua);
  }

  function _wasRecentlyDismissed() {
    try {
      const raw = localStorage.getItem(STORAGE_INSTALL_DISMISS);
      if (!raw) return false;
      const at = parseInt(raw, 10);
      if (!Number.isFinite(at)) return false;
      const ageMs = Date.now() - at;
      return ageMs < INSTALL_DISMISS_DAYS * 24 * 60 * 60 * 1000;
    } catch (e) { return false; }
  }
  function _markDismissedNow() {
    try { localStorage.setItem(STORAGE_INSTALL_DISMISS, String(Date.now())); } catch (e) {}
  }

  function _showInstallToast(mode) {
    if (!installToast) return;
    if (_isStandalone() || _wasRecentlyDismissed()) return;
    if (mode === "ios" && installToastSub) {
      installToastSub.textContent = "Toque para ver como instalar no iPhone.";
    }
    installToast.dataset.mode = mode || "native";
    installToast.hidden = false;
    installToast.classList.remove("is-leaving");
  }
  function _hideInstallToast() {
    if (!installToast) return;
    installToast.classList.add("is-leaving");
    setTimeout(() => {
      installToast.hidden = true;
      installToast.classList.remove("is-leaving");
    }, 260);
  }

  function _showIosHint() {
    if (!iosHint) return;
    iosHint.hidden = false;
    iosHint.classList.remove("is-leaving");
  }
  function _hideIosHint() {
    if (!iosHint) return;
    iosHint.classList.add("is-leaving");
    setTimeout(() => {
      iosHint.hidden = true;
      iosHint.classList.remove("is-leaving");
    }, 240);
  }

  // 16.1 · Chromium · captura beforeinstallprompt
  window.addEventListener("beforeinstallprompt", (e) => {
    // Bloqueia banner nativo · armazena para uso na UI custom
    e.preventDefault();
    _deferredInstallPrompt = e;
    _showInstallToast("native");
  });

  // 16.2 · Quando instala (Android), navegador dispara appinstalled
  window.addEventListener("appinstalled", () => {
    _deferredInstallPrompt = null;
    _hideInstallToast();
    _markDismissedNow();
  });

  // 16.3 · Botão "Instalar" — fluxo nativo OU abre hint iOS
  installToastAction?.addEventListener("click", async () => {
    const mode = installToast?.dataset.mode || "native";
    if (mode === "ios") {
      _hideInstallToast();
      _showIosHint();
      return;
    }
    if (!_deferredInstallPrompt) return;
    try {
      _deferredInstallPrompt.prompt();
      const choice = await _deferredInstallPrompt.userChoice;
      if (choice && choice.outcome === "dismissed") _markDismissedNow();
    } catch (e) {}
    _deferredInstallPrompt = null;
    _hideInstallToast();
  });

  installToastClose?.addEventListener("click", () => {
    _markDismissedNow();
    _hideInstallToast();
  });

  // iOS hint controls
  iosHintClose?.addEventListener("click", _hideIosHint);
  iosHintOk?.addEventListener("click", _hideIosHint);
  iosHint?.addEventListener("click", (e) => {
    // Clique no backdrop fecha · clique dentro do card não
    if (e.target === iosHint) _hideIosHint();
  });
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && iosHint && !iosHint.hidden) _hideIosHint();
  });

  // 16.4 · Sniff inicial para iOS Safari (que nunca dispara beforeinstallprompt)
  // Mostra o toast com mode=ios após 4s · só na primeira sessão · respeita dismiss
  if (_isIOS() && _isSafari() && !_isStandalone() && !_wasRecentlyDismissed()) {
    setTimeout(() => _showInstallToast("ios"), 4000);
  }

  // API pública para forçar prompt (debug · ex: TRAUMA_APP.installPrompt())
  window.TRAUMA_APP.installPrompt = () => {
    if (_isIOS() && _isSafari()) { _showIosHint(); return; }
    if (_deferredInstallPrompt) { _deferredInstallPrompt.prompt(); return; }
    _showInstallToast("native");
  };

  if (document.readyState === "complete") {
    registerSW();
  } else {
    window.addEventListener("load", registerSW, { once: true });
  }
})();
