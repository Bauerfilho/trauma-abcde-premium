# Como contribuir / estender · Trauma Premium

> Guia prático para adicionar uma nova rota, componente ou ferramenta. Leia depois de [ARCHITECTURE.md](./ARCHITECTURE.md) e [STYLE-GUIDE.md](./STYLE-GUIDE.md).

---

## 1. Adicionar uma nova rota (página)

São **3 passos** independentes. Não é necessário tocar `index.html` nem `styles.css`.

### Passo 1 — registrar a rota em `scripts.js`

Edite o array `ROUTES` (linha ~15) e acrescente:

```js
{ id: "minha-rota", title: "Título da página", letter: "M", color: "c", group: "Manejo inicial" },
```

| Campo | Tipo | Valores |
|---|---|---|
| `id` | string | slug usado em `#/<id>` (sem espaços, kebab-case) |
| `title` | string | exibido na sidebar |
| `letter` | string | 1–2 chars no badge à esquerda do link |
| `color` | string | `x`, `a`, `b`, `c`, `d`, `e`, `ok`, `warn`, `info`, `err`, `mute`, `accent` |
| `group` | string | nome do grupo na sidebar (cria automaticamente se não existir) |

> A ordem do array determina a ordem visual e o número da página (`01`, `02`, …).

### Passo 2 — escrever a seção em `sections-N.js`

Escolha um dos 3 arquivos (preferencialmente o que já cobre o bloco temático, ou crie `sections-4.js` e referencie em `index.html`):

```js
S["minha-rota"] = () => `
<section class="section" data-id="minha-rota">
  <div class="block-head block-c">
    <div class="block-head__letter">M</div>
    <div class="block-head__copy">
      <h2>Título completo</h2>
      <p>Lead da página explicando o objetivo.</p>
    </div>
  </div>

  <div class="callout fisiopato">
    <strong class="callout__title">Por que isto importa</strong>
    <p>Explicação fisiopatológica.</p>
  </div>

  <h3 class="section__sub">1. Tópico</h3>
  <article class="card card-c">
    <header class="card__head">
      <span class="badge badge-c">Etiqueta</span>
      <h3 class="card__title">Subtítulo</h3>
    </header>
    <div class="card__body">
      <p>Conteúdo.</p>
    </div>
  </article>
</section>`;
```

### Passo 3 — validar

```bash
node --check sections-3.js   # ou o arquivo que você editou
python3 -m http.server 8080
# abra http://localhost:8080/#/minha-rota
```

Se a sidebar não atualizar, faça hard reload (Cmd+Shift+R / Ctrl+F5).

---

## 2. Adicionar um quiz

Markup em qualquer ponto da seção:

```html
<article class="quiz" data-correct="2">
  <div class="quiz__head">
    <span class="quiz__num">Q01</span>
    <span class="badge badge-c quiz__tag">C · choque</span>
  </div>
  <p class="quiz__stem">Stem clínico com <strong>contexto</strong>…</p>
  <div class="quiz__alts">
    <button class="quiz__alt"><span class="quiz__alt-letter">A</span><span class="quiz__alt-txt">Opção A</span></button>
    <button class="quiz__alt"><span class="quiz__alt-letter">B</span><span class="quiz__alt-txt">Opção B</span></button>
    <button class="quiz__alt"><span class="quiz__alt-letter">C</span><span class="quiz__alt-txt">Opção C — correta</span></button>
    <button class="quiz__alt"><span class="quiz__alt-letter">D</span><span class="quiz__alt-txt">Opção D</span></button>
  </div>
  <div class="quiz__feedback">
    Feedback educacional. Explique <strong>por que cada distrator está errado</strong>, não só por que o gabarito está certo.
  </div>
</article>
```

**Regras:**
- `data-correct` é o **índice 0-based** da alternativa correta (0 = A, 1 = B, 2 = C, 3 = D).
- Sempre escreva 4 alternativas plausíveis. Distratores baratos viciam o estudo.
- Feedback **deve explicar por que cada errada está errada** — esse é o diferencial do estudo ativo.

---

## 3. Adicionar flashcards

```html
<div class="flash-deck grid-3">
  <div class="flash">
    <div class="flash__inner">
      <div class="flash__face">
        <div class="flash__head">
          <span class="badge badge-x">X</span>
          <span class="flash__hint">clique para virar</span>
        </div>
        <p class="flash__q">Pergunta concisa?</p>
      </div>
      <div class="flash__face flash__face--back">
        <div class="flash__head"><span class="badge badge-x">X</span></div>
        <p class="flash__a"><strong>Resposta destacada.</strong> Detalhes.</p>
      </div>
    </div>
  </div>
  <!-- mais cards… -->
</div>
```

**Regras:**
- 1 fato por card. Múltiplos fatos → vira releitura passiva.
- Frente: pergunta única e direta.
- Verso: 1–3 frases. Se passar disso, divida em 2 cards.
- Sempre incluir um **número/critério** ou **mnemônico** — não definições genéricas.

---

## 4. Adicionar um simulador multi-step

```html
<div class="sim sim-xabcde">
  <div class="sim__step-card" data-correct="1">
    <h4 class="sim__step-title">Passo 1 — X · Exsanguinação</h4>
    <p class="sim__step-stem">Cenário do passo…</p>
    <div class="choice-row">
      <button class="choice" data-value="0">Opção 0</button>
      <button class="choice" data-value="1">Opção 1 (correta)</button>
      <button class="choice" data-value="2">Opção 2</button>
    </div>
    <div class="sim__feedback">Feedback do passo.</div>
  </div>

  <div class="sim__step-card" data-correct="2">
    <h4 class="sim__step-title">Passo 2 — A · Via aérea</h4>
    <!-- … -->
  </div>
</div>
```

`initSimXabcde()` em `scripts.js:485+` cuida de:
- Bloquear escolhas após decisão
- Marcar `.is-correct` / `.is-wrong`
- Mostrar feedback
- Avançar visualmente para o próximo step

---

## 5. Adicionar uma calculadora

Se for **uma das 5 já existentes** (Glasgow, ABC, IC, TXA, torniquete), basta colocar o markup correto numa página nova — `bindInteractions()` religa automaticamente.

### Exemplo: incluir Score ABC numa página
```html
<div class="calc calc-abc">
  <h4>Score ABC</h4>
  <button class="abc-toggle" data-abc>Mecanismo penetrante</button>
  <button class="abc-toggle" data-abc>PAS ≤ 90 mmHg</button>
  <button class="abc-toggle" data-abc>FC ≥ 120 bpm</button>
  <button class="abc-toggle" data-abc>FAST positivo</button>
  <div class="calc-result">
    <span class="calc-result__num">0</span>
    <span class="calc-result__lbl">Marque os critérios.</span>
  </div>
</div>
```

### Criar uma nova calculadora

Se o componente é novo, edite `scripts.js`:

1. Adicione um seletor único no markup: `class="calc-meu-calc"`.
2. Em `bindInteractions(root)`, adicione:
   ```js
   root.querySelectorAll(".calc-meu-calc").forEach(c => initMeuCalc(c));
   ```
3. Implemente `initMeuCalc(root)` em uma seção numerada do `scripts.js` (siga o padrão das existentes — leia inputs, calcule, atualize `.calc-result__num/lbl`).

---

## 6. Convenções editoriais

### O que **não** fazer
- ❌ **Resumir** o material — reestruture em **estudo ativo** (questão, decisão, feedback).
- ❌ **Copiar** questão de prova — sempre autoral, inspirada no estilo.
- ❌ Inventar números/critérios — confronte com `source-materials/Roteiro_trauma.txt`, ATLS 11 e Sabiston 22.
- ❌ Adicionar dependências (npm, CDN externa). Tudo nativo.
- ❌ Usar imagens não-livres. SVG inline > PNG/JPG.

### O que **fazer**
- ✅ Cada conteúdo novo deve ter um **número, critério ou conduta** que decida prova.
- ✅ Use **cores semânticas** corretas (X vermelho, A ciano, B azul, C vinho, D roxo, E âmbar).
- ✅ Faça **cross-reference** com glossário (`<a href="#/glossario">↗</a>`).
- ✅ Inclua **callout aviso** quando há armadilha clássica.
- ✅ Inclua **callout dica** com técnica de estudo.

### Padrão de transcrição
- **Glasgow** (G maiúsculo)
- **FAST / e-FAST / NEXUS / TCCC / RSI** sempre em maiúsculas
- **TXA** abreviação preferida (ácido tranexâmico no 1º uso)
- **1500 mL** com espaço (não "1500ml")
- **5º EIC LAM** abreviado após 1ª menção como "linha axilar média"
- **ATLS 11ª (2025)** com numeral ordinal e ano

---

## 7. Validação antes de commitar

```bash
# 1. Sintaxe JS
node --check sections-1.js
node --check sections-2.js
node --check sections-3.js
node --check scripts.js
node --check content-data.js

# 2. Servidor local
python3 -m http.server 8080

# 3. Console limpo (DevTools) em todas as 23 rotas
#    Idealmente: 0 errors, 0 warnings.

# 4. Print preview (Ctrl+P) — checa se @media print não quebrou
```

## 8. Estrutura de uma PR

Mensagem sugerida:

```
content(C): adicionar página sobre dano cardíaco contuso

- Nova rota #/c-dano-cardiaco-contuso em sections-3.js
- 3 cards card-c, 1 callout fisiopato, 2 flashcards, 1 quiz
- Cross-ref para tamponamento e tabelas-referencia
- Atualiza ROUTES em scripts.js (após c-tamponamento-aorta)
```

Ou para correção:

```
fix(quiz-geral): Q14 — corrigir gabarito SVS III (era II)

- data-correct="3" → "3" (estava marcando alternativa errada)
- Atualizar feedback educacional
```

---

## 9. Roadmap pós-conteúdo

Itens fora desta etapa, planejados para o futuro:

- **Etapa 3** — Refinamento visual premium (Prompt 3): polimento de animações, micro-interações, easing refinado, sons de feedback (opt-in).
- **Etapa 4** — PWA (Prompt 5): service worker, manifest.json, ícones, instalável offline-first.
- **Etapa 5** — Auditoria final (Prompt 6): Lighthouse 100/100/100/100, axe-core, validação cruzada de números com fontes oficiais.

Cada uma ganhará seu próprio bloco em [CHANGELOG.md](./CHANGELOG.md).

---

**Voltar:** [README.md](./README.md) · **Próximo:** [CHANGELOG.md](./CHANGELOG.md)
