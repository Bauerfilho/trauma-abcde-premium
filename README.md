# Trauma Premium · Atendimento Inicial & ABCDE

> Plataforma autoral de estudo ativo para residência médica brasileira sobre **XABCDE**, **ATLS 11ª edição (2025)** e **Sabiston 22ª edição**.

[![Static](https://img.shields.io/badge/build-static-blue)]() [![ATLS](https://img.shields.io/badge/ATLS-11ª%20(2025)-7f1d1d)]() [![Sabiston](https://img.shields.io/badge/Sabiston-22ª-1e3a8a)]() [![No build step](https://img.shields.io/badge/no--build-vanilla%20JS-22c55e)]() [![GitHub Pages ready](https://img.shields.io/badge/deploy-GitHub%20Pages-181717)]()

---

## Quick start

```bash
# Servidor estático local (qualquer um serve):
python3 -m http.server 8080
# ou:  npx serve .
# ou:  php -S localhost:8080

# Abra:  http://localhost:8080
```

**Sem build step.** Apenas HTML5 + CSS3 + JS ES2020 nativos. Compatível com GitHub Pages.

## Visão rápida

- **23 rotas didáticas** organizadas em sequência XABCDE (ver [docs/CONTENT-MAP.md](./docs/CONTENT-MAP.md))
- **5 ferramentas funcionais**: Glasgow, Score ABC, Índice de Choque, timer TXA (3 h), timer Torniquete (6 h)
- **Simulador XABCDE de 6 passos** com feedback por decisão
- **30 flashcards** com flip 3D, **25 questões autorais** com feedback educacional, **25 pegadinhas de banca** organizadas por letra, **glossário com ~40 termos** e cross-references
- **Aurora ambient + glassmorfismo + header inteligente + sidebar com translucidez ajustável** — discreto e fluido

## Documentação completa

A documentação detalhada está em [`/docs`](./docs/README.md):

| Arquivo | Para |
|---|---|
| [docs/README.md](./docs/README.md) | Visão geral · quick start · deploy |
| [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) | Arquitetura técnica (router, injeção, header, interações) |
| [docs/CONTENT-MAP.md](./docs/CONTENT-MAP.md) | Mapa das 23 rotas |
| [docs/STYLE-GUIDE.md](./docs/STYLE-GUIDE.md) | Design system + 313 classes CSS |
| [docs/CHEAT-SHEET.md](./docs/CHEAT-SHEET.md) | Cola clínica para a última semana |
| [docs/CONTRIBUTING.md](./docs/CONTRIBUTING.md) | Como adicionar rotas/componentes |
| [docs/CHANGELOG.md](./docs/CHANGELOG.md) | Histórico de Etapas e Subetapas |

## Estrutura

```
trauma-abcde-premium/
├── index.html              # Shell premium (aurora, sidebar, topbar, hero monitor)
├── styles.css              # Design system (~50 KB)
├── scripts.js              # Router + interações (~24 KB)
├── content-data.js         # Stub de metadados
├── sections-1.js           # Hero, casos, ATLS 10×11, X overview, segurança, X (~46 KB)
├── sections-2.js           # A (via aérea + difícil), B (4 páginas) (~66 KB)
├── sections-3.js           # C, tampo/aorta, D, E, sim, calc, tabelas, pegadinhas,
│                           #   flashcards, quiz, glossário (~204 KB)
├── docs/                   # Documentação completa
├── source-materials/       # Material de referência (somente leitura)
├── tools/
│   └── rtf_to_text.py      # Conversor RTF → UTF-8
├── .gitignore
└── .nojekyll               # Flag GitHub Pages (sem Jekyll)
```

## Filosofia editorial

- **Espinha dorsal:** o roteiro autoral em `source-materials/Roteiro_trauma.txt` tem prioridade máxima.
- **Sobreposição:** ATLS 11 (2025) é referência operacional; Sabiston 22ª complementa fisiopatologia e cirurgia definitiva.
- **Sem cópia:** todas as questões, vinhetas e armadilhas são autorais, inspiradas no estilo de provas brasileiras (ENARE, SUS-SP, USP, UNIFESP, AMP, Einstein) — nunca cópia direta.
- **Não resumir:** cada conteúdo é reestruturado para **leitura ativa** (decisões → feedback, perguntas → resposta, número → conduta).

## Deploy (GitHub Pages)

```bash
git push origin main
# Settings → Pages → Branch: main, /(root). Pronto.
```

O `.nojekyll` na raiz desliga o Jekyll, permitindo arquivos com `_underscore` e estrutura plana.

## Compatibilidade

| Browser | Versão mínima |
|---|---|
| Chrome / Edge | 105+ |
| Firefox | 113+ |
| Safari | 16.4+ |

> Em browsers antigos, as cores semânticas ainda funcionam — perdem apenas o blending suave do `color-mix(in oklab)`.

## Disclaimers

Material **educacional**. Não substitui orientação médica, ATLS oficial ou protocolo institucional local. Datas e números refletem ATLS 11ª (2025) e Sabiston 22ª na data da publicação.

---

Próximo passo: ler [docs/README.md](./docs/README.md) para a visão completa.
