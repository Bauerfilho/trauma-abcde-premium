# Mapa de conteúdo · Trauma Premium

> As **23 rotas** organizadas por bloco didático. Cada uma tem um arquivo-fonte, classes CSS dominantes e os componentes interativos que a habitam.

---

## Visão geral em uma tabela

| # | Rota (`#/...`) | Bloco | Letra | Cor | Arquivo | Interativos |
|---|---|---|---|---|---|---|
| 01 | `hero` | Entrada | • | accent | sections-1.js | hero monitor animado |
| 02 | `casos-integradores` | Entrada | C | c | sections-1.js | 4 vinhetas didáticas |
| 03 | `atls10-vs-atls11` | Entrada | 11 | ok | sections-1.js | tabela comparativa 16 linhas |
| 04 | `xabcde-visao-geral` | Manejo inicial | X | x | sections-1.js | mapa de letras + chips |
| 05 | `seguranca-mecanismo` | Manejo inicial | 1 | e | sections-1.js | AMPLE/SAMPLE, cinemática |
| 06 | `x-exsanguinacao` | X | x | x | sections-1.js | timer torniquete (6 h) |
| 07 | `a-via-aerea` | A | A | a | sections-2.js | LEMON, 3-3-2, plano A→D |
| 08 | `a-via-aerea-dificil` | A | ↻ | a | sections-2.js | algoritmo CICO |
| 09 | `b-respiracao` | B | B | b | sections-2.js | ATOMIC + 6 ameaças |
| 10 | `b-pneumotorax` | B | ♁ | b | sections-2.js | 3 tipos comparados |
| 11 | `b-hemotorax` | B | ♥ | b | sections-2.js | critério toracotomia |
| 12 | `b-flail-contusao` | B | ≋ | b | sections-2.js | flail × contusão |
| 13 | `c-choque` | C | C | c | sections-3.js | Score ABC + IC + TXA timer |
| 14 | `c-tamponamento-aorta` | C | ♥ | c | sections-3.js | Beck + SVS I–IV |
| 15 | `d-neuro` | D | D | d | sections-3.js | Glasgow calc + NEXUS + canadense |
| 16 | `e-exposicao` | E | E | e | sections-3.js | 5 sinais uretra + Wallace + Parkland |
| 17 | `simulador-xabcde` | Ferramentas | ▶ | x | sections-3.js | sim 6 passos com feedback |
| 18 | `calculadoras` | Ferramentas | Σ | c | sections-3.js | hub das 5 ferramentas |
| 19 | `tabelas-referencia` | Ferramentas | ≡ | info | sections-3.js | 11 tabelas didáticas |
| 20 | `pegadinhas-banca` | Revisão | ! | warn | sections-3.js | 25 armadilhas |
| 21 | `flashcards` | Revisão | ↻ | a | sections-3.js | 30 cards flip 3D |
| 22 | `quiz-geral` | Revisão | ? | c | sections-3.js | 25 questões autorais |
| 23 | `glossario` | Apêndices | Aa | mute | sections-3.js | ~40 termos com cross-ref |

**Total:** 23 rotas, 5 calculadoras, 1 simulador, 30 flashcards, 25 questões, 25 pegadinhas, ~40 termos de glossário, 11 tabelas de referência.

---

## Bloco 0 — Entrada

### `#/hero`
Hero monitor animado (BPM, SpO₂, PA, ETCO₂ pulsando), claim, 3 CTAs (começar XABCDE / casos / quiz). Funciona como porta de entrada e lembrete da estética clínica.

### `#/casos-integradores`
**4 vinhetas** que percorrem o XABCDE inteiro:
1. Motociclista AAT 80 km/h — abre o curso
2. FAB precordial — antecipa Beck/tamponamento
3. Queimadura 35% SCQ + IOT — Parkland + via aérea
4. TCE grave + politrauma — alvos do D

Cada vinheta tem callout "no que esta vinheta vai te ensinar".

### `#/atls10-vs-atls11`
**Tabela comparativa de 16 linhas** com mudanças do ATLS 11ª (2025):
- TXA dose/janela
- Cristaloide ≤ 1 L (era 2)
- Descompressão 5º EIC LAM (era 2º LMC)
- Parkland 2 mL (era 4)
- REBOA inclusion
- pelve binder posicionamento
- e mais 10 itens

---

## Bloco 1 — Manejo inicial

### `#/xabcde-visao-geral`
Mapa visual das 6 letras com cores semânticas. Cada letra tem chip clicável → leva à página específica. Reforça o conceito **cíclico**.

### `#/seguranca-mecanismo`
- Segurança da cena (3 S: Self, Scene, Survivor)
- Cinemática: AAT, queda, FAF, FAB, explosão
- AMPLE / SAMPLE
- Triagem START

---

## Bloco 2 — X (exsanguinação)

### `#/x-exsanguinacao`
- Stepper de 5 passos (compressão → curativo → torniquete → REBOA/embolização → CC)
- **Timer de torniquete 6 h** funcional (start/reset, alerta amarelo > 4 h, vermelho > 5,5 h)
- Pelve em livro aberto: cinta sobre trocânteres
- TXA dentro de 3 h (referência cruzada para C)
- MARCH (TCCC)

---

## Bloco 3 — A (via aérea)

### `#/a-via-aerea`
- Mantra: "A sem proteção cervical não existe" (MILS)
- Dispositivos: orofaríngea, nasofaríngea (contraindicações), LMA, IOT, cricotireoidostomia
- Cricotireoidostomia: punção em < 12 a, cirúrgica em ≥ 12 a
- Glasgow ≤ 8 = IOT

### `#/a-via-aerea-dificil`
- LEMON
- Regra 3-3-2
- Plano A→B→C→D (DAS / Vortex)
- BURP, sniffing position
- CICO ("cannot intubate, cannot oxygenate")

---

## Bloco 4 — B (respiração)

### `#/b-respiracao`
- ATOMIC (6 ameaças torácicas)
- Inspeção, palpação, percussão, ausculta — focada em trauma
- Curva de Damoiseau, frêmito, hipersonoridade

### `#/b-pneumotorax`
3 tipos comparados em **table-compare**:
- Simples: ≥ 3,5 cm → drenar
- Aberto ("sucking chest wound"): 3 lados
- Hipertensivo: clínico, 5º EIC LAM ATLS 11

### `#/b-hemotorax`
- Critérios de toracotomia:
  - 1500 mL inicial
  - **≥ 200 mL/h × 2–4 h** (ATLS 11)
  - instabilidade persistente
- Dreno 28–32 Fr, 5º EIC LAM
- Hemotórax retido → toracoscopia

### `#/b-flail-contusao`
- Flail = ≥ 2 fx em ≥ 2 costelas adjacentes
- Problema é a **contusão pulmonar** subjacente
- Conduta: analgesia agressiva, fisio, IOT por fadiga
- Carbonarcose como diagnóstico diferencial

---

## Bloco 5 — C (circulação)

### `#/c-choque`
- Classes I–IV (com disclaimer pediátrico)
- **Score ABC** funcional (4 toggles, ≥ 2 → PTM)
- **Índice de Choque** funcional (FC/PAS, alertas em 0,7 / 0,9 / 1,0)
- **Timer TXA** funcional (3 h, alerta amarelo > 2 h)
- Cristaloide ≤ 1 L (ATLS 11)
- PTM 1:1:1
- Hipotensão permissiva (com exceção do TCE)

### `#/c-tamponamento-aorta`
- Tríade de Beck + pulso paradoxal
- Janela pericárdica subxifoide × pericardiocentese × toracotomia de reanimação
- Aorta torácica: hematoma mediastinal, capping apical
- **Classificação SVS I–IV** com conduta (TEVAR em III–IV)
- Controle pressórico: PAS ≤ 120, FC ≤ 80

---

## Bloco 6 — D & E

### `#/d-neuro`
- AVDI → Glasgow
- **Calculadora Glasgow** funcional (3 grupos, classificação leve/moderada/grave, alerta IOT)
- GCS-P (Glasgow + pontuação pupilar)
- Anisocoria, Cushing tardio
- Alvos no TCE: PAS ≥ 110, SpO₂ ≥ 94%, PaCO₂ 35–40, T° 36–37, cabeceira 30°
- Hipertônica 3% × manitol
- NEXUS + regra canadense (coluna cervical)

### `#/e-exposicao`
- Despir totalmente, log roll, períneo, dorso
- **5 sinais de lesão de uretra** (não sondar)
- Hipotermia: sala 28 °C, fluidos a 39 °C, manta de ar forçado
- **Regra dos 9 de Wallace** (adulto + criança)
- **Parkland modificado** 2 mL/kg/% (ATLS 11)
- Gustilo-Anderson + ATB < 1 h

---

## Bloco 7 — Ferramentas

### `#/simulador-xabcde`
**Caso clínico de 6 passos** (motociclista, AAT lateral 80 km/h, sangramento pulsátil):
- Cada passo cobre uma letra (X → A → B → C → D → E)
- Cada passo tem 3–4 escolhas com `.choice[data-value]`
- Feedback educacional após decisão
- Pontuação visual no fim

### `#/calculadoras`
Hub das 5 ferramentas em uma página única (cards expandíveis):
1. Glasgow
2. Score ABC
3. Índice de Choque
4. Timer TXA (3 h)
5. Timer Torniquete (6 h)

### `#/tabelas-referencia`
**11 tabelas didáticas** para a última semana:
1. Drogas RSI (etomidato, cetamina, succinilcolina, rocurônio)
2. Drogas vasoativas no C (NA, vasopressina, dobutamina)
3. Classes de choque I–IV
4. Glasgow detalhado (3-15) + GCS-P
5. Score ABC (4 critérios + ponto de corte)
6. SVS aorta I–IV + conduta
7. Gustilo-Anderson I–IIIC + ATB
8. Wallace adulto + criança
9. 6 ameaças torácicas (ATOMIC)
10. 5 sinais lesão de uretra
11. Semiologia de equimoses (Battle, guaxinim, perineal, escrotal)

---

## Bloco 8 — Revisão

### `#/pegadinhas-banca`
**25 armadilhas** organizadas por letra (X 3, A 4, B 4, C 5, D 3, E 4, transversais 2). Formato:
- "A banca diz" (enunciado)
- "Reflexo errado" (alternativa-isca)
- "O que vale ponto" (conduta correta + número/critério)

### `#/flashcards`
**30 cards Anki-like** com flip 3D (clique para virar) em 6 blocos:
- X (3): TXA, torniquete, MARCH
- A (6): LEMON, 3-3-2, GCS≤8, plano, < 12 a, AMPLE
- B (5): ATOMIC, 5º EIC, toracotomia, 3 lados, 3,5 cm
- C (7): ABC, IC, ≤ 1 L, Beck, tríade letal, classe III pediátrica, SVS
- D (5): AVDI, Cushing, alvos TCE, NEXUS, canadense
- E + transversais (4): 5 sinais, Wallace, Parkland, Gustilo + 1:1:1 + cíclico

### `#/quiz-geral`
**25 questões autorais** estilo ENARE/SUS-SP/USP/UNIFESP/AMP/Einstein, em 7 blocos (X, A, B, C, D, E/queimadura/orto, integração). Cada questão tem:
- Stem clínico
- 4 alternativas (`.quiz__alt`)
- `data-correct="N"` no `.quiz`
- Feedback educacional explicando por que cada distrator está errado
- Tag de bloco no canto superior direito

Gabarito comentado compactado no final.

---

## Bloco 9 — Apêndices

### `#/glossario`
**~40 termos** em ordem alfabética (A → X), categorizados:
- A: Acidose, AMPLE, Anisocoria, Angio-TC, AVDI, ATOMIC
- B: Beck, Battle, BURP
- C: Canadense, Capping apical, Carbonarcose, Choque (classes), Cushing
- D: Damage control, Damoiseau
- E: e-FAST
- F: FAST, Flail chest
- G: Glasgow / GCS-P, Gustilo-Anderson
- H: High-riding prostate, Hipotensão permissiva, Hipotermia
- I: Índice de choque
- L: LEMON
- M: MARCH, MILS
- N: NEXUS
- P: Parkland, PTM 1:1:1, Pulso paradoxal
- R: REBOA
- S: Sniffing position, Score ABC, SVS aorta
- T: TCCC, TXA, Tríade letal, Torniquete
- U: Uretrocistografia retrógrada
- W: Wallace
- X: XABCDE

Cada verbete tem **definição operacional** + **link `↗` para a página onde decide conduta**.

---

**Voltar:** [README.md](./README.md) · **Próximo:** [STYLE-GUIDE.md](./STYLE-GUIDE.md)
