# Trauma Premium · Atendimento Inicial & ABCDE

> Plataforma autoral de estudo ativo para residência médica brasileira sobre **XABCDE**, **ATLS 11ª edição (2025)** e **Sabiston 22ª edição**.

[![Static](https://img.shields.io/badge/build-static-blue)]() [![ATLS](https://img.shields.io/badge/ATLS-11ª%20(2025)-7f1d1d)]() [![Sabiston](https://img.shields.io/badge/Sabiston-22ª-1e3a8a)]() [![No build step](https://img.shields.io/badge/no--build-vanilla%20JS-22c55e)]() [![GitHub Pages ready](https://img.shields.io/badge/deploy-GitHub%20Pages-181717)]()

---

## 1. O que é

Trauma Premium é um **app educacional estático** (HTML + CSS + JS, sem build), pensado para preparação para provas brasileiras de residência médica (ENARE, SUS-SP, USP, UNIFESP, AMP, Einstein) com foco em **trauma e atendimento inicial**.

A diferença para um material clássico:

- **Não resume** — reestrutura o conteúdo em **estudo ativo, dinâmico e interativo**.
- **23 rotas didáticas** organizadas em sequência XABCDE.
- **5 ferramentas funcionais**: Glasgow, Score ABC, Índice de Choque, timer TXA (3 h), timer Torniquete (6 h).
- **Simulador XABCDE de 6 passos** com feedback por decisão.
- **30 flashcards** com flip 3D, **25 questões autorais** com feedback educacional, **25 pegadinhas de banca** organizadas por letra, **glossário com ~40 termos** e cross-references.
- **Aurora ambient + glassmorfismo + header inteligente + sidebar com translucidez ajustável** — tudo discreto e fluido.

## 2. Quick start

```bash
# Clone / extraia o projeto, depois:
cd trauma-abcde-premium

# Servidor estático local (qualquer um serve):
python3 -m http.server 8080
# ou:
npx serve .
# ou:
php -S localhost:8080

# Abra:  http://localhost:8080
```

**Não há etapa de build, bundler, transpilação nem dependências de runtime.** É um site estático puro — basta servir os arquivos.

## 3. Deploy (GitHub Pages)

```bash
git push origin main
# Em Settings → Pages, escolha branch: main, /(root). Pronto.
```

O arquivo `.nojekyll` na raiz desliga o processamento Jekyll do GitHub Pages, permitindo arquivos com `_underscore` e estrutura plana.

## 4. Estrutura

```
trauma-abcde-premium/
├── index.html              # Shell premium (aurora, sidebar, topbar, hero monitor)
├── styles.css              # Design system (~50 KB) — light/dark, aurora, glass, semânticas
├── scripts.js              # Hash router + smart header + sidebar + interações (~24 KB)
├── content-data.js         # Stub de metadados
├── sections-1.js           # Rotas: hero, casos, ATLS 10×11, X overview, segurança, X
├── sections-2.js           # Rotas: A (via aérea + difícil), B (resp + 3 PNX + hemo + flail)
├── sections-3.js           # Rotas: C, tampo/aorta, D, E, simulador, calc, tabelas,
│                           #         pegadinhas, flashcards, quiz, glossário (~204 KB)
├── docs/                   # ← Você está aqui
│   ├── README.md           # Este arquivo
│   ├── ARCHITECTURE.md     # Arquitetura técnica (router, injeção, interações)
│   ├── CONTENT-MAP.md      # Mapa das 23 rotas — o que tem em cada uma
│   ├── STYLE-GUIDE.md      # Design system, cores semânticas, componentes
│   ├── CHEAT-SHEET.md      # Cola clínica: todos os números/critérios
│   ├── CONTRIBUTING.md     # Como adicionar uma nova página/rota
│   └── CHANGELOG.md        # Etapas e subetapas concluídas
├── source-materials/       # Material de referência (RTF/PDF convertido — somente leitura)
├── tools/
│   └── rtf_to_text.py      # Conversor RTF → UTF-8
├── .gitignore
└── .nojekyll               # Flag GitHub Pages (não usar Jekyll)
```

## 5. Documentação

| Arquivo | Para quem |
|---|---|
| **[README.md](./README.md)** (este) | Visão geral, quick start, deploy |
| **[ARCHITECTURE.md](./ARCHITECTURE.md)** | Como o código está montado: router, injeção, header, interações |
| **[CONTENT-MAP.md](./CONTENT-MAP.md)** | As 23 rotas e o que cada uma cobre |
| **[STYLE-GUIDE.md](./STYLE-GUIDE.md)** | Design tokens, classes utilitárias, componentes |
| **[CHEAT-SHEET.md](./CHEAT-SHEET.md)** | Cola clínica para a última semana antes da prova |
| **[CONTRIBUTING.md](./CONTRIBUTING.md)** | Como criar uma nova rota/página |
| **[CHANGELOG.md](./CHANGELOG.md)** | Histórico de Etapas e Subetapas |

## 6. Compatibilidade

| Browser | Versão mínima | Observações |
|---|---|---|
| Chrome / Edge | 105+ | `color-mix(in oklab)` e `:has()` |
| Firefox | 113+ | `color-mix(in oklab)` |
| Safari | 16.4+ | iOS 16.4+ para `color-mix` |
| Mobile | iOS 16.4 / Android 10+ | Aurora cai elegantemente |

> Em browsers antigos sem `color-mix(in oklab)`, as cores semânticas ainda são lidas das custom properties — a paleta apenas perde o blending suave.

## 7. Filosofia editorial

- **Espinha dorsal:** o roteiro autoral do criador (`source-materials/Roteiro_trauma.txt`) tem prioridade máxima sobre todas as outras fontes.
- **Sobreposição:** ATLS 11 (2025) é a referência operacional; Sabiston 22ª complementa fisiopatologia e cirurgia definitiva.
- **Sem cópia:** todas as questões, vinhetas e armadilhas são autorais, inspiradas no estilo de provas brasileiras — nunca cópia direta.
- **Não resumir:** cada conteúdo é reestruturado para **leitura ativa** (decisões → feedback, perguntas → resposta, número → conduta).

## 8. Disclaimers

- Material **educacional**. Não substitui orientação médica, ATLS oficial ou protocolo institucional local.
- Datas e números refletem ATLS 11ª (2025) e Sabiston 22ª (2025) na data da publicação. Confirme atualizações.
- Tributo aos rótulos clínicos clássicos (Beck, Cushing, Damoiseau, Wallace, Gustilo) — nomes próprios são da literatura médica, não pertencem a esta plataforma.

## 9. Licença & uso

Este código e conteúdo foram preparados como ferramenta pessoal de estudo. Para uso em outras plataformas (educacional, residência, monografia), entre em contato com o autor para alinhamento.

---

**Voltar para:** [Índice da documentação](./README.md) ·
**Próximo:** [ARCHITECTURE.md](./ARCHITECTURE.md)
