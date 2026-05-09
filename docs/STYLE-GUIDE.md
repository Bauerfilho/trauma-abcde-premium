# Style Guide · Trauma Premium

> Design system, design tokens e classes utilitárias. **313 classes CSS** organizadas em ~22 seções no `styles.css`.

---

## 1. Filosofia visual

- **Aurora ambient**: 4 layers de gradiente animados em fundo fixo (vermelho exsanguinação + vinho choque + ciano via aérea + grão sutil). Discreto, fluido, não atrapalha leitura.
- **Glassmorfismo leve**: superfícies translúcidas com `backdrop-filter: blur()` em sidebar, topbar, cards-flutuantes.
- **Cards luminosos por cor semântica**: cada card herda o glow da letra que representa (no hover, intensifica).
- **Header inteligente**: fade no scroll-down, reaparece no scroll-up (HIDE_AFTER=80, DELTA=6).
- **Sidebar com 3 modos**: desktop aberta / desktop colapsada (76px) / mobile drawer com scrim.
- **Tipografia**: Inter var em sans, SF Mono em mono. `font-feature-settings: "cv11","ss01","ss03"` para variantes refinadas.

## 2. Design tokens (`:root`)

### Paleta primária — trauma
```
--blood-50  →  --blood-950   (escala 11 níveis · #fef2f2 → #450a0a)
--carbon-0  →  --carbon-950  (escala 12 níveis · #fafaf9 → #050403)
```

### Cores semânticas XABCDE
| Letra | Token | Hex | Soft | Deep | Significado |
|---|---|---|---|---|---|
| **X** | `--c-x` | `#ef4444` | `--c-x-soft` | `--c-x-deep` | exsanguinação · vermelho intenso |
| **A** | `--c-a` | `#06b6d4` | `--c-a-soft` | `--c-a-deep` | via aérea · ciano clínico |
| **B** | `--c-b` | `#3b82f6` | `--c-b-soft` | `--c-b-deep` | respiração · azul respiratório |
| **C** | `--c-c` | `#9f1239` | `--c-c-soft` | `--c-c-deep` | circulação · vinho/bordô |
| **D** | `--c-d` | `#8b5cf6` | `--c-d-soft` | `--c-d-deep` | neuro · roxo |
| **E** | `--c-e` | `#f59e0b` | `--c-e-soft` | `--c-e-deep` | exposição · âmbar |

### Feedback
```
--ok    #10b981   (verde clínico)
--warn  #f59e0b   (âmbar)
--err   #ef4444   (vermelho)
--info  #1d4ed8   (azul info)
```
Cada uma tem variante `*-soft` para fundos.

### Shape (raios)
```
--r-xs 6px · --r-sm 10px · --r-md 14px · --r-lg 20px · --r-xl 28px · --r-2xl 36px
```

### Sombras
```
--sh-1   leve            (cards normais)
--sh-2   média           (hover, flutuantes)
--sh-3   profunda        (modais, hero)
--sh-glow-{x,a,b,c,d,e}  glow semântico (hover de cards letrados)
```

### Timing & easing
```
--t-fast  160ms     (hover, micro-interações)
--t-med   240ms     (transições normais)
--t-slow  420ms     (header, sidebar, flashcard flip)
--ease           cubic-bezier(.22,.61,.36,1)   (padrão suave)
--ease-out-back  cubic-bezier(.34,1.56,.64,1)  (com pequeno overshoot)
```

### Layout
```
--topbar-h           64px
--sidebar-w          296px
--sidebar-w-collapsed 76px
--max-w              1180px
```

## 3. Temas (light / dark)

Switch via `body[data-theme="light"|"dark"]`. Padrão: dark (combina com aurora). Tokens semânticos ficam em cada bloco:

```css
[data-theme="light"] {
  --bg: #f8f6f4;          --surface: #ffffff;
  --txt: #1c1917;         --txt-2: #44403c;
  --glass-bg: rgba(255,255,255,.72);
  --aurora-grain: 0.025;
}

[data-theme="dark"] {
  --bg: #0a0908;          --surface: #181513;
  --txt: #f5f3ef;         --txt-2: #d6d3d1;
  --glass-bg: rgba(20,16,14,.62);
  --aurora-grain: 0.045;
}
```

## 4. Componentes — referência rápida

### 4.1 Cabeçalho de seção
```html
<div class="block-head block-c">
  <div class="block-head__letter">C</div>
  <div class="block-head__copy">
    <h2>Título da seção</h2>
    <p>Lead/descrição.</p>
  </div>
</div>
```
Variantes: `.block-x`, `.block-a`, `.block-b`, `.block-c`, `.block-d`, `.block-e` (cor de borda + glow).

### 4.2 Cards letrados
```html
<article class="card card-c">
  <header class="card__head">
    <span class="badge badge-c">Etiqueta</span>
    <h3 class="card__title">Título</h3>
  </header>
  <div class="card__body">
    <p>Conteúdo.</p>
  </div>
</article>
```
- `card-x/a/b/c/d/e` → glow + borda da letra no hover
- `card.compact` → padding reduzido
- `.grid-2`, `.grid-3`, `.grid-4` → containers em grid responsivo

### 4.3 Callouts
```html
<div class="callout fisiopato">
  <strong class="callout__title">Por quê</strong>
  <p>Explicação fisiopatológica.</p>
</div>
```
Variantes:
- `.callout` (genérica)
- `.callout.fisiopato` (sangue + fisiopato)
- `.callout.aviso` (warn — armadilha)
- `.callout.dica` (ok — orientação prática)
- `.callout-gabarito` (details/summary expansível)

### 4.4 Quiz
```html
<article class="quiz" data-correct="2">
  <div class="quiz__head">
    <span class="quiz__num">Q01</span>
    <span class="badge badge-c quiz__tag">C · choque</span>
  </div>
  <p class="quiz__stem">Stem clínico…</p>
  <div class="quiz__alts">
    <button class="quiz__alt"><span class="quiz__alt-letter">A</span><span class="quiz__alt-txt">Alternativa A</span></button>
    <button class="quiz__alt"><span class="quiz__alt-letter">B</span><span class="quiz__alt-txt">Alternativa B</span></button>
    <button class="quiz__alt"><span class="quiz__alt-letter">C</span><span class="quiz__alt-txt">Alternativa C — correta</span></button>
    <button class="quiz__alt"><span class="quiz__alt-letter">D</span><span class="quiz__alt-txt">Alternativa D</span></button>
  </div>
  <div class="quiz__feedback">Feedback educacional explicando…</div>
</article>
```
JS aplica `.is-correct`/`.is-wrong` em `.quiz__alt` e `.is-revealed` no `.quiz`.

### 4.5 Flashcard (flip 3D)
```html
<div class="flash">
  <div class="flash__inner">
    <div class="flash__face">
      <div class="flash__head"><span class="badge badge-x">X</span><span class="flash__hint">clique para virar</span></div>
      <p class="flash__q">Pergunta?</p>
    </div>
    <div class="flash__face flash__face--back">
      <div class="flash__head"><span class="badge badge-x">X</span></div>
      <p class="flash__a"><strong>Resposta.</strong></p>
    </div>
  </div>
</div>
```
Classe pai `.flash-deck.grid-3` (ou grid-2) agrupa cards.

### 4.6 Choice row (sim genérico)
```html
<div data-choice-group data-choice-correct="b">
  <button class="choice" data-value="a">Opção A</button>
  <button class="choice" data-value="b">Opção B (correta)</button>
  <button class="choice" data-value="c">Opção C</button>
  <div class="sim__feedback"
       data-feedback-correct="explicação correta"
       data-feedback-wrong="explicação errada"></div>
</div>
```

### 4.7 Simulador XABCDE multi-step
```html
<div class="sim sim-xabcde">
  <div class="sim__step-card" data-correct="2">
    <h4 class="sim__step-title">Passo 1 — X</h4>
    <p class="sim__step-stem">Cenário…</p>
    <div class="choice-row">
      <button class="choice" data-value="0">Opção 0</button>
      <button class="choice" data-value="1">Opção 1</button>
      <button class="choice" data-value="2">Opção 2 (correta)</button>
    </div>
    <div class="sim__feedback">Feedback…</div>
  </div>
  <!-- ... outros steps -->
</div>
```

### 4.8 Calculadoras
| Classe raiz | Função | Markup interno |
|---|---|---|
| `.calc-glasgow` | Glasgow 3–15 | 3× `.calc-block[data-glasgow]` > `.calc-opt[data-score]` |
| `.calc-abc` | Score ABC 0–4 | 4× toggles `[data-abc]` |
| `.calc-shock-index` | FC/PAS | 2× `<input>` `[data-si-fc]` `[data-si-pas]` |
| `.timer-txa` | Timer 3 h | `.timer__start`, `.timer__display` |
| `.timer-tourniquet` | Timer 6 h | `.timer__start`, `.timer__display` |

Todas as calculadoras compartilham `.calc-result` + `.calc-result__num` + `.calc-result__lbl`.

### 4.9 Tabelas
```html
<div class="table-wrap">
  <table class="table-compare">
    <thead><tr><th>Coluna</th><th>Coluna</th></tr></thead>
    <tbody><tr><td>cel</td><td>cel</td></tr></tbody>
  </table>
</div>
```
Variante `.table-compare` tem zebra-stripe + borda hairline + sticky header.

### 4.10 Badges, chips, tags
| Classe | Uso |
|---|---|
| `.badge` | etiqueta neutra dentro de `.card__head` |
| `.badge.badge-x/a/b/c/d/e` | etiqueta colorida da letra |
| `.chip` | pílula clicável (filtros, mini-nav) |
| `.tag` | tag horizontal no hero |
| `.kbd` | tecla/atalho |
| `.pill p-ok / p-warn / p-err / p-info` | pílula de status |

### 4.11 Listas
- `.list-tight` → `<ul>` com espaçamento reduzido entre itens
- `.list-num` → numerada em estilo monospace
- `.list-check` → marcador ✔ verde

### 4.12 Utilitários de espaçamento
```
.gap-sm    8px
.gap-md   16px
.gap-lg   24px
.mt-2  .mt-3  .mt-4
.section__sub  (h3 dentro de uma section)
```

## 5. Aurora — anatomia

```html
<div class="aurora" aria-hidden="true">
  <span class="aurora__layer aurora__layer--x"></span>  <!-- vermelho · top-left -->
  <span class="aurora__layer aurora__layer--c"></span>  <!-- vinho · right -->
  <span class="aurora__layer aurora__layer--d"></span>  <!-- ciano · bottom -->
  <span class="aurora__grain"></span>                    <!-- ruído SVG inline -->
</div>
```

- 4 layers em `position: fixed; inset: 0; z-index: 0; pointer-events: none`
- Cada layer = `radial-gradient` blur 90 px com `mix-blend-mode: screen` (dark) ou `multiply` (light)
- Animadas via `@keyframes aurora-drift-1/2/3` com duração 28–36s
- `.aurora__grain` = SVG `feTurbulence` inline (sem requisição extra)

## 6. Header inteligente

```css
.topbar.is-hidden  { transform: translateY(-100%); }
.topbar.is-floating { box-shadow: var(--sh-2); }
```
JS adiciona/remove `is-hidden` baseado em scroll acumulado. Transição via `--t-slow`.

## 7. Sidebar — 3 modos

```css
/* Desktop aberta (padrão) */
.sidebar { width: var(--sidebar-w); }   /* 296px */

/* Desktop colapsada */
.app.sidebar-collapsed .sidebar { width: var(--sidebar-w-collapsed); }   /* 76px */

/* Mobile drawer */
@media (max-width: 900px) {
  .sidebar { transform: translateX(-100%); }
  .app.sidebar-open .sidebar { transform: translateX(0); }
  .app.sidebar-open .scrim   { opacity: 1; pointer-events: auto; }
}
```

## 8. Acessibilidade

- Foco visível: `:focus-visible { outline: 2px solid var(--accent); outline-offset: 2px; }`
- Contraste WCAG AA garantido nos dois temas
- `aria-hidden`, `aria-label` em elementos decorativos / nav
- `prefers-reduced-motion`: respeitado em animações principais
- Tap targets ≥ 40×40 px (mobile)

## 9. Print CSS

`styles.css` inclui um bloco `@media print` que:
- Remove aurora, sidebar, topbar
- Usa serif para texto principal
- Mantém badges/etiquetas em escala de cinza
- Quebra `.section` em nova página
- Ideal para imprimir `tabelas-referencia` e `pegadinhas-banca` na última semana

## 10. Quando usar o quê

| Você quer… | Componente |
|---|---|
| Página da letra (X, A, B, C, D, E) | `block-head.block-X` + `card.card-X` + `callout.fisiopato` |
| Comparar 2 ou 3 condutas | `table-compare` ou `grid-2/3` de cards |
| Pergunta com gabarito | `quiz[data-correct]` (1 alternativa correta de 4) |
| Revisão Anki | `flash-deck` com `flash` |
| Caso clínico passo-a-passo | `sim sim-xabcde` com `sim__step-card[data-correct]` |
| Decisão única com feedback | `[data-choice-group]` com `.choice[data-value]` |
| Cálculo médico | uma das 5 calc-classes (Glasgow, ABC, IC, TXA, torniquete) |
| Armadilha de prova | `card.card-{letra}` em formato 3-partes (banca diz / reflexo / vale ponto) |
| Definição rápida | `card.compact` com badge da letra + cross-ref `↗` |

---

**Voltar:** [README.md](./README.md) · **Próximo:** [CHEAT-SHEET.md](./CHEAT-SHEET.md)
