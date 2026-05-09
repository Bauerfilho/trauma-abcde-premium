# Arquitetura técnica · Trauma Premium

> Como o código está montado. Leia depois do [README.md](./README.md) e antes de [CONTRIBUTING.md](./CONTRIBUTING.md).

---

## 1. Princípios

1. **Zero build step.** O navegador roda os arquivos diretamente. Sem npm, sem webpack, sem TypeScript — apenas HTML5 + CSS3 + JS ES2020.
2. **Hash routing client-side.** Compatível com GitHub Pages (que não suporta rewrites). Toda rota é `#/<id>` ou `#<id>`.
3. **Injeção dinâmica de seções.** Cada página é uma função em `window.TRAUMA_SECTIONS[id]` que retorna uma string HTML.
4. **Interações genéricas.** O `bindInteractions()` em `scripts.js` é chamado a cada navegação e religa **todos** os componentes via seletores CSS — quizzes, flashcards, calculadoras e simuladores funcionam só ao colocar o markup correto.
5. **CSS-first.** Toda a estética (aurora, glass, header inteligente, sidebar, transições) é variável CSS + classes utilitárias. JS só liga/desliga estados.

## 2. Pipeline de carregamento

```
index.html
  ├─ <head>: meta, theme-color, favicon SVG inline, Inter font, styles.css
  └─ <body data-theme="dark">
       ├─ .aurora       (4 layers absolute, animadas via @keyframes)
       ├─ .scrim        (overlay mobile da sidebar)
       └─ .app
            ├─ aside.sidebar    (nav, sem inicial — buildNav() preenche)
            ├─ header.topbar    (smart-hide via classes)
            └─ main.content
                 ├─ article#sectionRoot  (host das seções)
                 └─ footer

       <script src="content-data.js"></script>
       <script src="sections-1.js"></script>
       <script src="sections-2.js"></script>
       <script src="sections-3.js"></script>
       <script src="scripts.js"></script>
```

`scripts.js` carrega **por último**: ele assume que `window.TRAUMA_SECTIONS` já foi populado pelos três `sections-*.js`. Cada um deles é um IIFE que recebe `S = window.TRAUMA_SECTIONS = window.TRAUMA_SECTIONS || {}` e adiciona suas rotas.

## 3. Hash router

Em `scripts.js`:

```js
const ROUTES = [ /* 23 entradas: id, title, letter, color, group */ ];

window.addEventListener("hashchange", renderRoute);
if (!location.hash) location.hash = "#hero";
renderRoute();

function renderRoute() {
  const id = (location.hash.replace(/^#\/?/, "") || "hero");
  const sec = window.TRAUMA_SECTIONS[id];
  pageHost.innerHTML = typeof sec === "function" ? sec() : fallbackHTML(id);
  bindInteractions(pageHost);
  highlightNav(id);
  updateProgress(id);
  window.scrollTo({ top: 0 });
}
```

Aceita ambos os formatos: `#hero` e `#/hero`. A sidebar usa `#hero`, mas links cross-section dentro do conteúdo usam `#/glossario` por convenção visual.

## 4. Smart header (HIDE_AFTER=80, DELTA=6)

```js
const HIDE_AFTER = 80;     // só esconde após 80 px do topo
const DELTA = 6;           // sensibilidade — ignora micro-rolagens
let scrollAccum = 0;

function onScroll() {
  const y = window.scrollY;
  if (y < HIDE_AFTER) { topbar.classList.remove("is-hidden"); return; }
  const delta = y - lastScroll;
  scrollAccum = Math.abs(delta) > DELTA ? scrollAccum + delta : scrollAccum;
  if (scrollAccum > 24)       topbar.classList.add("is-hidden");
  else if (scrollAccum < -24) topbar.classList.remove("is-hidden");
  topbar.classList.toggle("is-floating", y > 4);
  lastScroll = y;
}
```

- Acumula `delta` para evitar tremor em scroll por trackpad.
- `is-floating` adiciona blur/sombra quando saiu do topo.
- `is-hidden` aplica `transform: translateY(-100%)` com transição.

## 5. Sidebar — 3 modos

| Modo | Trigger | Estado CSS no `.app` |
|---|---|---|
| **Aberta (desktop)** | padrão em ≥ 900 px | (nenhum) |
| **Recolhida (desktop)** | botão `topCollapseBtn` | `.sidebar-collapsed` (persiste em `localStorage`) |
| **Drawer (mobile)** | botão `menuBtn` em < 900 px | `.sidebar-open` + scrim visível |

Tudo via CSS — JS só toca classes. `Esc` fecha o drawer. Click no scrim fecha. Click em qualquer link fecha automaticamente em mobile.

## 6. Injeção de seções — contrato

Cada `sections-N.js` é um IIFE:

```js
(function (S) {
  S["minha-rota"] = () => `
    <section class="section" data-id="minha-rota">
      <div class="block-head block-c">
        <div class="block-head__letter">C</div>
        <div class="block-head__copy">
          <h2>Título</h2>
          <p>Lead.</p>
        </div>
      </div>
      ...
    </section>`;
})(window.TRAUMA_SECTIONS = window.TRAUMA_SECTIONS || {});
```

Regras:

- **Função, não string.** Permite cálculos no momento da renderização (datas, randomização, etc.).
- **Um único `<section class="section">` raiz** com `data-id` igual ao id da rota.
- **`block-head` + `block-head__letter` + `block-head__copy`** é o padrão de cabeçalho.
- HTML pode usar todas as classes do `styles.css` (ver [STYLE-GUIDE.md](./STYLE-GUIDE.md)).

## 7. `bindInteractions(root)` — religador

Chamado a cada `renderRoute()`. É **agnóstico de rota** — só lê seletores. Quem precisa de interação deve usar a sintaxe correta:

| Componente | Markup | JS |
|---|---|---|
| **Quiz** | `.quiz[data-correct="N"]` com `.quiz__alts` > `.quiz__alt` | `scripts.js:271–285` |
| **Flashcard** | `.flash` > `.flash__inner` > `.flash__face` × 2 (front/back) | `scripts.js:287–290` |
| **Choice row** (sim) | `[data-choice-group][data-choice-correct]` > `.choice[data-value]` | `scripts.js:292–316` |
| **Glasgow** | `.calc-glasgow` com `.calc-block[data-glasgow]` > `.calc-opt[data-score]` | `scripts.js:338+` |
| **Score ABC** | `.calc-abc` com `[data-abc]` toggles | `scripts.js:382+` |
| **Shock Index** | `.calc-shock-index` com inputs `[data-si-fc]` `[data-si-pas]` | `scripts.js:404+` |
| **Timer TXA (3 h)** | `.timer-txa` com botão `.timer__start` | `scripts.js:427+` |
| **Timer Torniquete (6 h)** | `.timer-tourniquet` com botão `.timer__start` | `scripts.js:456+` |
| **Sim XABCDE** | `.sim-xabcde` com `.sim__step-card[data-correct]` > `.choice[data-value]` | `scripts.js:485+` |

**Adicionar uma página nova com qualquer combinação destes componentes não exige JS adicional** — basta seguir o markup.

## 8. Tema (light/dark)

- Padrão: **dark** (combina com aurora).
- Persistido em `localStorage["trauma-premium:theme"]`.
- Toggle via botão `#themeBtn` no topbar.
- Tudo via custom property no `body[data-theme]`. Ver `styles.css` seção 1 (`:root`) e seção 2 (`[data-theme="light"]`).

## 9. Aurora ambient

4 layers absolute em `<body>`, com `mix-blend-mode: screen` (dark) ou `multiply` (light), animados via `@keyframes float-slow` (~30s loop). Layer dedicada por cor crítica:

```html
<div class="aurora" aria-hidden="true">
  <span class="aurora__layer aurora__layer--x"></span>  <!-- vermelho exsanguinação -->
  <span class="aurora__layer aurora__layer--c"></span>  <!-- vinho choque -->
  <span class="aurora__layer aurora__layer--d"></span>  <!-- roxo neuro -->
  <span class="aurora__grain"></span>                    <!-- ruído sutil -->
</div>
```

`pointer-events: none` — não interfere com cliques.

## 10. Performance

- **Sem dependências de runtime** — tudo nativo.
- **Lazy mental**: cada rota só renderiza HTML quando navegada.
- **Sem re-render desnecessário** — só `pageHost.innerHTML = ...` na troca de hash.
- **Animações via CSS transform/opacity** (compositor-friendly, sem reflow).
- Tamanho total: ~400 KB de assets de texto (HTML+CSS+JS) → cacheável agressivamente.

## 11. Acessibilidade

- `lang="pt-BR"` no `<html>`.
- `aria-label` em sidebar, nav, scrim.
- Foco gerenciado: `pageHost.focus({ preventScroll: true })` após navegação.
- Contraste WCAG AA mantido em ambos os temas (testar com DevTools).
- Atalhos: `Esc` fecha sidebar mobile.

## 12. O que **não** está aqui

- ❌ Service worker / PWA (vem na **Etapa 4**)
- ❌ Autenticação / sync entre dispositivos (fora de escopo)
- ❌ Backend (não há — tudo client-side)
- ❌ Tracking / analytics (intencional)

---

**Voltar:** [README.md](./README.md) · **Próximo:** [CONTENT-MAP.md](./CONTENT-MAP.md)
