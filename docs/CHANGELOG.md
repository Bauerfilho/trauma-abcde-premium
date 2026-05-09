# Changelog · Trauma Premium

> Histórico de Etapas e Subetapas. Formato inspirado em [Keep a Changelog](https://keepachangelog.com/pt-BR/1.1.0/).

---

## [Etapa 2 · Subetapa 2.10] — Documentação `/docs`

### Adicionado
- `docs/README.md` — visão geral, quick start, deploy, estrutura
- `docs/ARCHITECTURE.md` — arquitetura técnica (router, injeção, header inteligente, interações genéricas)
- `docs/CONTENT-MAP.md` — mapa das 23 rotas com bloco didático, letra, cor, arquivo-fonte e componentes interativos
- `docs/STYLE-GUIDE.md` — design system, 313 classes CSS, tokens, componentes, temas
- `docs/CHEAT-SHEET.md` — cola clínica para a última semana (todos os números/critérios)
- `docs/CONTRIBUTING.md` — como adicionar rota, quiz, flashcard, simulador, calculadora
- `docs/CHANGELOG.md` — este arquivo

---

## [Etapa 2 · Subetapa 2.9] — Pegadinhas + Flashcards + Quiz + Glossário

### Adicionado
- `#/pegadinhas-banca` — **25 armadilhas** organizadas por letra (X 3, A 4, B 4, C 5, D 3, E 4, transversais 2) no formato tríplice "A banca diz → Reflexo errado → Vale ponto"
- `#/flashcards` — **30 cards Anki-like** com flip 3D em 6 blocos (X, A, B, C, D, E + transversais)
- `#/quiz-geral` — **25 questões autorais** estilo ENARE/SUS-SP/USP/UNIFESP/AMP/Einstein com feedback educacional por questão + gabarito comentado
- `#/glossario` — **~40 termos** alfabéticos (A → X) com definição operacional + cross-references `↗`

### Modificado
- `sections-3.js` — 97 383 → **203 606 chars** (+106 KB)

### Validado
- `node --check sections-3.js` → OK
- PlaywrightConsoleCapture nas 4 rotas → **0 console errors**

---

## [Etapa 2 · Subetapa 2.8] — Simulador + Calculadoras + Tabelas

### Adicionado
- `#/simulador-xabcde` — **caso clínico de 6 passos** (motociclista, AAT lateral 80 km/h, sangramento pulsátil) cobrindo todas as letras com `.sim__step-card[data-correct]` e `.choice[data-value]`
- `#/calculadoras` — hub das 5 ferramentas em uma página (Glasgow, Score ABC, IC, TXA timer 3 h, Torniquete timer 6 h)
- `#/tabelas-referencia` — **11 tabelas didáticas** (RSI, vasoativos, classes choque, Glasgow detalhado, Score ABC, SVS aorta, Gustilo, Wallace, ATOMIC, 5 sinais uretra, semiologia equimoses)

### Validado
- 0 console errors em todas as 3 rotas
- Page load 8.7–8.8 s

---

## [Etapa 2 · Subetapa 2.7] — D & E

### Adicionado
- `#/d-neuro` — AVDI, calculadora Glasgow funcional, GCS-P, anisocoria, Cushing tardio, alvos TCE (PAS ≥ 110, SpO₂ ≥ 94%, PaCO₂ 35–40, T° 36–37, cabeceira 30°), hipertônica × manitol, NEXUS + canadense
- `#/e-exposicao` — despir total, log roll, **5 sinais de lesão de uretra**, hipotermia (sala 28 °C, fluidos a 39 °C), Wallace adulto + criança, Parkland modificado **2 mL/kg/%** (ATLS 11), Gustilo I–IIIC + ATB &lt; 1 h

---

## [Etapa 2 · Subetapa 2.6] — C (choque + tamponamento + aorta)

### Adicionado
- `#/c-choque` — classes I–IV, calculadora Score ABC, calculadora Índice de Choque, timer TXA (3 h), cristaloide ≤ 1 L (ATLS 11), PTM 1:1:1, hipotensão permissiva (com exceção do TCE)
- `#/c-tamponamento-aorta` — tríade de Beck, pulso paradoxal, janela pericárdica × pericardiocentese × toracotomia de reanimação, classificação **SVS I–IV** com TEVAR em III–IV

---

## [Etapa 2 · Subetapa 2.5] — B (4 páginas)

### Adicionado
- `#/b-respiracao` — ATOMIC + 6 ameaças torácicas
- `#/b-pneumotorax` — 3 tipos comparados (simples ≥ 3,5 cm / aberto 3 lados / hipertensivo clínico **5º EIC LAM** ATLS 11)
- `#/b-hemotorax` — critérios atualizados de toracotomia (1500 mL inicial **ou ≥ 200 mL/h × 2–4 h** ou instabilidade)
- `#/b-flail-contusao` — flail = ≥ 2 fx em ≥ 2 costelas adjacentes; problema é a **contusão pulmonar** subjacente

---

## [Etapa 2 · Subetapa 2.4] — A (via aérea)

### Adicionado
- `#/a-via-aerea` — MILS, dispositivos, contraindicação de nasofaríngea com Battle, Glasgow ≤ 8 = IOT, cricotireoidostomia (punção em &lt; 12 a)
- `#/a-via-aerea-dificil` — LEMON, regra 3-3-2, plano A→B→C→D, BURP, sniffing position, CICO

---

## [Etapa 2 · Subetapa 2.3] — X

### Adicionado
- `#/x-exsanguinacao` — stepper de 5 passos (compressão → curativo → torniquete → REBOA/embolização → CC), **timer torniquete 6 h** funcional, pelve em livro aberto (cinta sobre trocânteres), TXA &lt; 3 h, MARCH

---

## [Etapa 2 · Subetapa 2.2] — Visão geral

### Adicionado
- `#/xabcde-visao-geral` — mapa visual das 6 letras com cores semânticas, conceito cíclico
- `#/seguranca-mecanismo` — 3 S (Self, Scene, Survivor), cinemática, AMPLE/SAMPLE, triagem START

---

## [Etapa 2 · Subetapa 2.1] — Casos integradores + ATLS 10×11

### Adicionado
- `#/casos-integradores` — 4 vinhetas didáticas (motociclista AAT, FAB precordial, queimadura 35% + IOT, TCE grave + politrauma)
- `#/atls10-vs-atls11` — tabela comparativa de **16 linhas** com mudanças do ATLS 11ª (2025)

### Modificado
- `styles.css` — acrescentado: `badge` variants, `chips`, `table-compare`, `callout-gabarito`, `grid-4`, `gap-md/lg`, `card.compact`, `callout.aviso/dica`

---

## [Etapa 1 · Foundation]

### Adicionado
- `index.html` — shell premium com aurora ambient, sidebar (3 modos), topbar com smart-hide, hero monitor animado (BPM/SpO₂/PA/ETCO₂)
- `styles.css` — design system completo (~50 KB, 313 classes)
  - Aurora 4 layers + grain SVG inline
  - Glassmorfismo com `backdrop-filter`
  - 6 cores semânticas XABCDE em `oklab` color-mix
  - Header inteligente (HIDE_AFTER=80, DELTA=6)
  - Sidebar 3 modos (aberta / colapsada / drawer)
  - Light/dark com `[data-theme]`
  - Print CSS otimizado
- `scripts.js` — hash router, smart header, sidebar logic, `bindInteractions()` com handlers para:
  - Quizzes (`.quiz[data-correct]`)
  - Flashcards (`.flash` com flip 3D)
  - Choice rows genéricos (`[data-choice-group]`)
  - Glasgow calc (`.calc-glasgow`)
  - Score ABC (`.calc-abc`)
  - Shock Index (`.calc-shock-index`)
  - Timer TXA (`.timer-txa`, 3 h)
  - Timer Torniquete (`.timer-tourniquet`, 6 h)
  - Sim XABCDE (`.sim-xabcde` com `.sim__step-card`)
- `content-data.js` — stub `window.TRAUMA_DATA` com metadados
- `sections-1.js` / `sections-2.js` / `sections-3.js` — 23 rotas com placeholders
- `tools/rtf_to_text.py` — conversor RTF → UTF-8
- `source-materials/*.txt` — material de referência (incluindo `Roteiro_trauma.txt` 59 KB — espinha dorsal)
- `.nojekyll` — flag GitHub Pages
- `.gitignore`

### Validado
- HTTP 200 em todas as 23 rotas
- 0 console errors no shell

---

## [Etapa 0 · Briefing]

### Lido
- 5 prompts (GEN 01, 2, 3, 5, 6)
- Roteiro trauma (RTF → UTF-8) — espinha dorsal de prioridade máxima
- Material complementar ATLS 11ª e Sabiston 22ª

### Decidido
- Aesthetic premium: aurora, glow semântico, header inteligente, sidebar com translucidez
- Stack: HTML/CSS/JS estático (compatível GitHub Pages, sem build)
- 23 rotas em 9 grupos didáticos
- 5 ferramentas funcionais
- 6 cores semânticas (X red, A cyan, B blue, C wine, D purple, E amber)

---

## Roadmap

### [Etapa 3] — Refinamento visual premium (Prompt 3) · pendente
- Polimento de micro-interações
- Easing refinado em transições críticas
- Variantes de glow no hover
- Sons de feedback (opt-in)
- Otimização do scroll progressivo

### [Etapa 4] — PWA (Prompt 5) · pendente
- `manifest.json` (icons 192/512, theme_color, display standalone)
- Service worker (cache-first para assets, network-first para HTML)
- Offline-first
- Install prompt
- Lighthouse PWA badge

### [Etapa 5] — Auditoria final (Prompt 6) · pendente
- Lighthouse 100/100/100/100 (perf/a11y/best/SEO)
- axe-core: 0 violations
- Validação cruzada de todos os números/critérios com:
  - ATLS 11ª (2025) original
  - Sabiston 22ª original
  - `source-materials/Roteiro_trauma.txt`
- Revisão ortográfica e padronização final
- README de release

---

**Voltar:** [README.md](./README.md)
