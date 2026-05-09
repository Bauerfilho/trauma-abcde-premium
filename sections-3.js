/* =====================================================================
   TRAUMA PREMIUM · sections-3.js
   Bloco de seções: C, D, E, ferramentas, revisão, glossário
   ===================================================================== */
window.TRAUMA_SECTIONS = window.TRAUMA_SECTIONS || {};

(function (S) {
  function placeholder(id, letter, blockClass, title, sub) {
    return `
<section class="section" data-id="${id}">
  <div class="block-head ${blockClass || ''}">
    <div class="block-head__letter">${letter}</div>
    <div class="block-head__copy">
      <h2>${title}</h2>
      <p>${sub}</p>
    </div>
  </div>
  <div class="callout ative">
    <strong class="callout__title">Conteúdo médico completo na Etapa 2</strong>
    <p>Estrutura técnica preparada. Conteúdo autoral será injetado na próxima etapa.</p>
  </div>
</section>`;
  }

  S["c-choque"] = () => `
<section class="section" data-id="c-choque">
  <div class="block-head block-c">
    <div class="block-head__letter">C</div>
    <div class="block-head__copy">
      <h2>C — Circulação e choque</h2>
      <p>Em trauma, <strong>hipotensão é sangramento até prova em contrário</strong>. O C não é sobre PA — é sobre <em>perfusão</em>. E perfusão se mede em pulso, pele, consciência e diurese, nem sempre na pressão.</p>
    </div>
  </div>

  <div class="callout fisiopato">
    <strong class="callout__title">Choque em trauma — definição funcional</strong>
    <p>Choque é <strong>oferta inadequada de O₂ aos tecidos</strong>. PA pode estar normal e o paciente já estar em choque (compensação). PA caída, o choque já está instalado. <strong>FC, perfusão capilar, consciência</strong> e <strong>débito urinário</strong> chegam antes da PA. Em trauma, &gt; 90% dos choques são <em>hipovolêmicos por hemorragia</em> — aqui é o nosso foco.</p>
  </div>

  <h3 class="section__sub">Tipos de choque no trauma — diferencial</h3>
  <div class="grid grid-4 gap-md">
    <article class="card card-x compact">
      <header class="card__head"><span class="badge badge-x">90%</span><h4 class="card__title">Hipovolêmico</h4></header>
      <div class="card__body"><p><strong>Hemorrágico</strong>. Pele fria, taquicardia, hipotensão. Tratar a causa (fonte) + repor.</p></div>
    </article>
    <article class="card card-c compact">
      <header class="card__head"><span class="badge badge-c">Tórax</span><h4 class="card__title">Obstrutivo</h4></header>
      <div class="card__body"><p>Pneumotórax hipertensivo, tamponamento, embolia gasosa. Jugular <strong>túrgida</strong>.</p></div>
    </article>
    <article class="card card-d compact">
      <header class="card__head"><span class="badge badge-d">Medula</span><h4 class="card__title">Neurogênico</h4></header>
      <div class="card__body"><p>Lesão medular alta (T6 acima). <strong>Bradicardia</strong> + hipotensão + pele <strong>quente</strong>. Vasopressor.</p></div>
    </article>
    <article class="card card-b compact">
      <header class="card__head"><span class="badge badge-b">Coração</span><h4 class="card__title">Cardiogênico</h4></header>
      <div class="card__body"><p>Contusão miocárdica grave, IAM no idoso. Raro como causa primária no trauma.</p></div>
    </article>
  </div>

  <div class="callout naoconfunda" style="margin-top:1rem">
    <strong class="callout__title">Choque hipovolêmico × neurogênico</strong>
    <p><strong>Hipovolêmico:</strong> taquicardia + pele <em>fria, pegajosa</em> + vasoconstrição.<br>
    <strong>Neurogênico:</strong> bradicardia (perda do simpático) + pele <em>quente, seca</em> + vasodilatação. Hipotensão sem taquicardia em politraumatizado: pensar em medula.<br>
    <strong>Pegadinha:</strong> os dois podem coexistir. Bradicardia e pele quente <em>não excluem</em> sangramento — sempre buscar foco.</p>
  </div>

  <h3 class="section__sub">Classes de choque hipovolêmico (ATLS)</h3>
  <p class="muted">Estimativa baseada em adulto de 70 kg (≈ 5 L de volemia). FC e PA chegam <em>tarde</em> em jovens; criança e gestante mascaram pior ainda.</p>

  <div class="table-wrap">
    <table class="table-compare">
      <thead>
        <tr>
          <th>Classe</th>
          <th>Perda</th>
          <th>FC</th>
          <th>PA</th>
          <th>FR</th>
          <th>Diurese</th>
          <th>Mental</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="pill p-ok">I</span></td>
          <td>&lt; 750 mL (&lt; 15%)</td>
          <td>&lt; 100</td>
          <td>Normal</td>
          <td>14–20</td>
          <td>&gt; 30 mL/h</td>
          <td>Levemente ansioso</td>
        </tr>
        <tr>
          <td><span class="pill p-warn">II</span></td>
          <td>750–1500 mL (15–30%)</td>
          <td>100–120</td>
          <td>Normal (PP↓)</td>
          <td>20–30</td>
          <td>20–30 mL/h</td>
          <td>Ansioso, agitado</td>
        </tr>
        <tr>
          <td><span class="pill p-err">III</span></td>
          <td>1500–2000 mL (30–40%)</td>
          <td>120–140</td>
          <td><strong>Caída</strong></td>
          <td>30–40</td>
          <td>5–15 mL/h</td>
          <td>Confuso</td>
        </tr>
        <tr>
          <td><span class="pill p-err">IV</span></td>
          <td>&gt; 2000 mL (&gt; 40%)</td>
          <td>&gt; 140</td>
          <td>Muito caída</td>
          <td>&gt; 35</td>
          <td>Anúria</td>
          <td>Letárgico</td>
        </tr>
      </tbody>
    </table>
  </div>

  <div class="callout pegadinha" style="margin-top:1rem">
    <strong class="callout__title">Sinais que a banca esconde</strong>
    <ul class="list-tight">
      <li><strong>Pressão de pulso (PA sistólica − diastólica) reduzida</strong> aparece já na <strong>classe II</strong>, antes da PAS cair. Vasoconstrição aumenta a diastólica antes de a sistólica reduzir.</li>
      <li>Em <strong>jovem hígido</strong>, PA cai só na classe III — antes disso a compensação simpática segura.</li>
      <li>Em <strong>idoso β-bloqueado</strong>, FC pode <em>não</em> subir; vá pelo lactato e pelo nível de consciência.</li>
      <li><strong>Criança</strong> mantém PA até perder ~30–45% da volemia — quando cai, é <em>tarde</em>.</li>
      <li><strong>Atleta jovem</strong> tem FC basal 50–60; FC 100 em atleta = taquicardia significativa.</li>
    </ul>
  </div>

  <h3 class="section__sub">Resposta à reposição — 3 padrões</h3>
  <div class="grid grid-3 gap-md">
    <article class="card card-b compact">
      <header class="card__head"><span class="badge badge-b">Rápido</span><h4 class="card__title">Respondedor rápido</h4></header>
      <div class="card__body"><p>Estabiliza após bolus inicial e <em>permanece</em> estável. Perda &lt; 20%, sangramento provavelmente parou. Investigar com calma (TC).</p></div>
    </article>
    <article class="card card-c compact">
      <header class="card__head"><span class="badge badge-c">Transitório</span><h4 class="card__title">Respondedor transitório</h4></header>
      <div class="card__body"><p>Melhora com bolus e <strong>volta a deteriorar</strong>. <em>Sangrando agora</em>. Cirurgia (laparotomia/toracotomia/embolização).</p></div>
    </article>
    <article class="card card-x compact">
      <header class="card__head"><span class="badge badge-x">Não responde</span><h4 class="card__title">Não-respondedor</h4></header>
      <div class="card__body"><p>PA não sobe com bolus. Sangramento <em>massivo</em> ativo, ou choque <em>não-hemorrágico</em> não tratado (tamponamento, pneumotórax hipertensivo).</p></div>
    </article>
  </div>

  <h3 class="section__sub">Reposição — ATLS 11 (2025)</h3>
  <article class="card card-c">
    <header class="card__head"><span class="badge">Como repor</span><h3 class="card__title">Pequenos bolus, aquecidos, antecipando hemoderivados</h3></header>
    <div class="card__body">
      <ul class="list-tight">
        <li><strong>250–500 mL</strong> de cristaloide isotônico (Ringer lactato preferencialmente) <strong>aquecido a 39 °C</strong>, em bolus rápido. Reavaliar a cada bolus.</li>
        <li><strong>Não</strong> infundir 1–2 L "de rotina" (10ª edição). Excesso de cristaloide diluí coagulação, agrava hipotermia, edema pulmonar e abdominal.</li>
        <li>Acesso confiável: 2 acessos periféricos calibrosos <strong>OU</strong> intraósseo (equivalente em emergência).</li>
        <li><strong>Hipotensão permissiva</strong>: em trauma <em>penetrante sem TCE</em>, alvo PAS ~80–90 mmHg até controle do foco. Em trauma <em>contuso com TCE</em>: alvo PAS ≥ 110 mmHg (perfusão cerebral).</li>
        <li><strong>PTM antecipado</strong> guiado por <strong>Score ABC ≥ 2</strong> ou <strong>Índice de Choque ≥ 0,8</strong>.</li>
        <li><strong>Hemocomponentes 1:1:1</strong> (CH:PFC:plaquetas). Reduz coagulopatia e mortalidade.</li>
        <li><strong>TXA 1 g IV</strong> em 10 min em até 3 h do trauma + 1 g em 8 h (CRASH-2/3).</li>
        <li><strong>Cálcio</strong>: hemocomponentes citratam. Repor cálcio iônico em PTM.</li>
      </ul>
    </div>
  </article>

  <h3 class="section__sub">Calculadora · Score ABC (Assessment of Blood Consumption)</h3>
  <p class="muted">Score ATLS 11 para indicar PTM precoce. Cada item vale 1 ponto. <strong>≥ 2 pontos → ativar PTM</strong>. Sensibilidade ~75%, especificidade ~85%.</p>

  <div class="calc-abc card card-c" style="padding:18px 20px; margin: 14px 0">
    <div class="calc-grid" style="grid-template-columns: repeat(2, 1fr); gap: 10px">
      <div class="calc-block calc-opt" data-abc style="cursor:pointer">
        <strong>Mecanismo penetrante</strong>
        <p class="muted" style="font-size:12px; margin:.2em 0 0">FAB ou FAF (não contuso).</p>
      </div>
      <div class="calc-block calc-opt" data-abc style="cursor:pointer">
        <strong>FC ≥ 120 bpm</strong>
        <p class="muted" style="font-size:12px; margin:.2em 0 0">Na chegada ao PS.</p>
      </div>
      <div class="calc-block calc-opt" data-abc style="cursor:pointer">
        <strong>PAS ≤ 90 mmHg</strong>
        <p class="muted" style="font-size:12px; margin:.2em 0 0">Na chegada.</p>
      </div>
      <div class="calc-block calc-opt" data-abc style="cursor:pointer">
        <strong>FAST positivo</strong>
        <p class="muted" style="font-size:12px; margin:.2em 0 0">Líquido livre em qualquer janela.</p>
      </div>
    </div>
    <div class="calc-result" style="margin-top:14px">
      <span class="calc-result__num" style="font-size:28px; font-weight:700">0</span>
      <span class="calc-result__lbl" style="margin-left:10px"><span class="pill p-mute">0/4</span> · Toque os critérios presentes para ver o veredicto.</span>
    </div>
  </div>

  <h3 class="section__sub">Calculadora · Índice de Choque</h3>
  <p class="muted">IC = FC ÷ PAS. Detecta choque oculto antes da queda da PA. <strong>≥ 0,8 sugere PTM</strong>; <strong>≥ 1,0 = choque franco</strong>. Em adulto normal: 0,5–0,7.</p>

  <div class="calc-shock-index card card-c" style="padding:18px 20px; margin: 14px 0">
    <div class="row" style="gap:14px; flex-wrap:wrap">
      <label style="display:flex; flex-direction:column; gap:4px">
        <span class="muted" style="font-size:12px">FC (bpm)</span>
        <input type="number" data-si="fc" placeholder="ex.: 132" style="padding:8px 12px; border-radius:8px; border:1px solid var(--hairline); background:var(--surface); color:var(--txt); width:140px">
      </label>
      <label style="display:flex; flex-direction:column; gap:4px">
        <span class="muted" style="font-size:12px">PAS (mmHg)</span>
        <input type="number" data-si="pas" placeholder="ex.: 92" style="padding:8px 12px; border-radius:8px; border:1px solid var(--hairline); background:var(--surface); color:var(--txt); width:140px">
      </label>
    </div>
    <div class="calc-result" style="margin-top:14px">
      <span class="calc-result__num" style="font-size:28px; font-weight:700">–</span>
      <span class="calc-result__lbl" style="margin-left:10px">Insira FC (bpm) e PAS (mmHg) para calcular.</span>
    </div>
  </div>

  <h3 class="section__sub">Cronômetro do TXA — janela de 3 h</h3>
  <p class="muted">Após 3 h, ácido tranexâmico <strong>aumenta mortalidade</strong> (CRASH-2). Antes, reduz. Conheça a janela.</p>

  <div class="timer-txa card card-c" style="padding:18px 20px; margin: 14px 0">
    <div class="row" style="align-items:center; gap:16px; margin-bottom:10px">
      <div class="timer-box" style="font-size:22px">
        <span class="dot"></span>
        <span class="timer-num">03:00:00</span>
        <span class="timer-lbl">restante</span>
      </div>
      <button type="button" class="btn btn-primary" data-act="start">Iniciar</button>
      <button type="button" class="btn btn-ghost" data-act="reset">Reiniciar</button>
    </div>
    <div data-status>
      <span class="pill p-mute">Aguardando</span> Pressione <em>Iniciar</em> para simular o cronômetro do trauma.
    </div>
  </div>

  <h3 class="section__sub">Recurso limitado × recurso completo</h3>
  <div class="grid grid-2 gap-lg">
    <article class="card card-d">
      <header class="card__head"><span class="badge">Limitado</span><h3 class="card__title">PS sem banco de sangue / sem TXA</h3></header>
      <div class="card__body">
        <ul class="list-tight">
          <li>Cristaloide aquecido 250–500 mL bolus, reavaliando.</li>
          <li>Compressão direta de focos externos; tamponamento de pelve com lençol amarrado em quadril (cinta pélvica improvisada).</li>
          <li>Acionar transferência <strong>antes</strong> de instabilidade refratária; tempo é volume.</li>
          <li>FAST com aparelho portátil quando disponível — guia decisão de transferência.</li>
          <li>Manter euvolemia <em>permissiva</em>; não buscar PAS 130 a qualquer custo.</li>
        </ul>
      </div>
    </article>
    <article class="card card-a">
      <header class="card__head"><span class="badge">Completo</span><h3 class="card__title">Centro de trauma com PTM</h3></header>
      <div class="card__body">
        <ul class="list-tight">
          <li>Score ABC ≥ 2 ou IC ≥ 0,8 → <strong>acionar PTM 1:1:1</strong> imediatamente.</li>
          <li>TXA 1 g IV bolus + 1 g em 8 h se &lt; 3 h do trauma.</li>
          <li>Cálcio iônico de rotina em PTM.</li>
          <li>Fonte de sangramento: FAST → laparotomia se +; e-FAST → tórax; rx pelve → fixação externa/embolização.</li>
          <li>Cirurgia de <strong>controle de danos</strong> (damage control): controlar sangramento e contaminação primeiro, reconstruir depois.</li>
          <li>Reaquecimento ativo (mantas térmicas, fluidos a 39 °C, sala aquecida).</li>
        </ul>
      </div>
    </article>
  </div>

  <div class="callout atls11" style="margin-top:1rem">
    <strong class="callout__title">O que mudou na 11ª — resumo do C</strong>
    <ul class="list-tight">
      <li><strong>Cristaloide</strong>: 250–500 mL aquecido em bolus pequenos, não 1–2 L.</li>
      <li><strong>PTM antecipado</strong> guiado por Score ABC ≥ 2 ou IC ≥ 0,8.</li>
      <li><strong>Razão 1:1:1</strong> (CH:PFC:plaquetas) consolidada.</li>
      <li><strong>TXA</strong> &lt; 3 h obrigatório; depois, contraindicado.</li>
      <li><strong>Hipotensão permissiva</strong> em penetrante sem TCE.</li>
      <li><strong>Acesso</strong> confiável (intraósseo equivalente) — fim do "Jelco grosso obrigatório".</li>
      <li><strong>e-FAST</strong> ampliado, substitui janela pericárdica diagnóstica.</li>
    </ul>
  </div>

  <div class="callout pegadinha" style="margin-top:1rem">
    <strong class="callout__title">Pegadinhas do C</strong>
    <ul class="list-tight">
      <li>"FC normal exclui choque" → <strong>errado</strong>; idoso β-bloqueado, atleta, criança compensam.</li>
      <li>"PA normal = paciente estável" → <strong>errado</strong>; pressão de pulso reduzida já indica classe II.</li>
      <li>"Bolus de 1–2 L de cristaloide" → <strong>desatualizado</strong> (10ª); ATLS 11 é 250–500 mL.</li>
      <li>"TXA em qualquer momento ajuda" → <strong>errado</strong>; após 3 h aumenta mortalidade.</li>
      <li>"Hipotensão permissiva em todo paciente" → <strong>errado</strong>; <em>não</em> em TCE (precisa PAS ≥ 110).</li>
      <li>"Score ABC só serve quando os 4 critérios estão presentes" → <strong>errado</strong>; ≥ 2 já ativa PTM.</li>
      <li>"Bradicardia + hipotensão = só pensar em neurogênico" → <strong>errado</strong>; podem coexistir com sangramento.</li>
    </ul>
  </div>

  <div class="callout banca" style="margin-top:1rem">
    <strong class="callout__title">Como a banca testa o C</strong>
    <p>Cenário típico: politraumatizado, FC 130, PAS 88, FAST+, mecanismo penetrante. Pergunta: "qual a melhor estratégia inicial de reposição?". Distratores: "Ringer 2 L em bolus", "soro fisiológico até PA &gt; 130", "esperar bolsa cruzada antes de iniciar". Resposta: <strong>cristaloide aquecido 250–500 mL + ativar PTM 1:1:1 + TXA 1 g (se &lt; 3 h)</strong>. Para o paciente respondedor transitório com FAST+: <strong>laparotomia</strong>, não TC.</p>
  </div>
</section>`;

  S["c-tamponamento-aorta"] = () => `
<section class="section" data-id="c-tamponamento-aorta">
  <div class="block-head block-c">
    <div class="block-head__letter">♥</div>
    <div class="block-head__copy">
      <h2>Tamponamento cardíaco &amp; lesão de aorta torácica</h2>
      <p>Duas emergências do C que <em>não</em> são choque hipovolêmico — são <strong>obstrutivo</strong> (tamponamento) e <strong>vascular catastrófico</strong> (aorta). Reposição volêmica generosa <em>piora</em> ambas. O diagnóstico é fino, o tempo é curto.</p>
    </div>
  </div>

  <h3 class="section__sub">1. Tamponamento cardíaco</h3>
  <div class="callout fisiopato">
    <strong class="callout__title">Fisiopato — por que pouco sangue mata</strong>
    <p>O <strong>pericárdio é inelástico</strong>. Acúmulo agudo de <strong>apenas 100–200 mL</strong> de sangue pode comprimir as câmaras direitas (baixa pressão) → reduz pré-carga → cai débito. Não é o volume absoluto, é a <strong>velocidade do acúmulo</strong>. Em derrame crônico, &gt; 1500 mL pode ser tolerado; agudo, 150 mL mata.</p>
  </div>

  <article class="card card-c">
    <header class="card__head"><span class="badge badge-c">Quadro</span><h3 class="card__title">Tríade de Beck e além</h3></header>
    <div class="card__body">
      <p><strong>Tríade de Beck:</strong> hipotensão + bulhas abafadas + turgência jugular. Presente em ~30% dos casos — não esperar todos os 3.</p>
      <ul class="list-tight">
        <li><strong>Pulso paradoxal</strong>: queda da PAS &gt; 10 mmHg na inspiração (na verdade, exagero do fenômeno fisiológico).</li>
        <li><strong>Sinal de Kussmaul</strong>: turgência jugular que <em>aumenta</em> na inspiração (ao contrário do normal).</li>
        <li>Taquicardia, hipotensão, dispneia, agitação.</li>
        <li><strong>Sem</strong> alteração da ausculta pulmonar (diferencia de pneumotórax hipertensivo).</li>
        <li>Em PCR traumática por penetrante torácico: tamponamento até prova em contrário.</li>
      </ul>
    </div>
  </article>

  <h3 class="section__sub">Diagnóstico — FAST subxifoide</h3>
  <article class="card card-c">
    <div class="card__body">
      <p>O <strong>FAST subxifoide</strong> é o exame que mais muda conduta no C. Janela ecocardiográfica subxifoide visualiza líquido pericárdico (anecoico, em volta do coração). Sensibilidade &gt; 95% para hemopericárdio em mãos treinadas.</p>
      <ul class="list-tight">
        <li><strong>FAST + </strong> + paciente <em>instável</em> + ferida penetrante na "caixa cardíaca" → <strong>toracotomia</strong> (centro cirúrgico ou de reanimação se PCR/peri-PCR).</li>
        <li><strong>FAST +</strong> + paciente <em>estável</em> → <strong>janela pericárdica</strong> em centro cirúrgico (diagnóstica e terapêutica).</li>
        <li><strong>ATLS 11:</strong> e-FAST substituiu a janela pericárdica <em>diagnóstica</em> em muitos serviços.</li>
        <li><strong>Pericardiocentese</strong>: ponte em ambiente <em>sem cirurgião disponível</em> — alivia agudamente, mas é <em>temporária</em>. Nunca substitui cirurgia.</li>
      </ul>
    </div>
  </article>

  <h3 class="section__sub">Conduta — escala progressiva</h3>
  <div class="stepper">
    <div class="stepper__item" style="--step-c: var(--c-c)">
      <div class="stepper__num">1</div>
      <div class="stepper__body">
        <h4>Volume como ponte</h4>
        <p>Bolus rápido de cristaloide aquecido <strong>aumenta a pré-carga</strong> e ganha tempo até a cirurgia. Não é tratamento — é ponte. Excesso piora congestão direita.</p>
      </div>
    </div>
    <div class="stepper__item" style="--step-c: var(--c-c)">
      <div class="stepper__num">2</div>
      <div class="stepper__body">
        <h4>Pericardiocentese subxifoide (se sem cirurgião)</h4>
        <p>Agulha angulada 45° em direção ao ombro esquerdo, sob a apêndice xifoide, guiada por eco. Aspirar até melhora hemodinâmica. <strong>Cateter pigtail</strong> pode ser deixado para descompressão repetida.</p>
        <p class="muted">Mesmo 20–30 mL aspirados podem reverter o choque. Mas o sangue volta — é <em>ponte</em>, não solução.</p>
      </div>
    </div>
    <div class="stepper__item" style="--step-c: var(--c-x)">
      <div class="stepper__num">3</div>
      <div class="stepper__body">
        <h4>Toracotomia / janela pericárdica</h4>
        <p><strong>Tratamento definitivo.</strong> Em paciente <em>instável</em>: toracotomia anterolateral esquerda (4º–5º EIC) ou esternotomia. Em paciente <em>estável</em>: janela pericárdica subxifoide diagnóstica/terapêutica.</p>
        <p class="muted">Identificar e reparar a lesão cardíaca (sutura miocárdica). Mortalidade em ferida cardíaca alcança 80–90% em PCR; ~50% em chegada com pulso.</p>
      </div>
    </div>
    <div class="stepper__item" style="--step-c: var(--c-x)">
      <div class="stepper__num">4</div>
      <div class="stepper__body">
        <h4>Toracotomia de reanimação</h4>
        <p>Se PCR durante atendimento ou na chegada <strong>com sinais recentes de vida</strong>, em ferimento penetrante torácico → toracotomia anterolateral esquerda à beira do leito. Permite liberar tamponamento, ocluir orifício, clampear aorta, massagem direta.</p>
      </div>
    </div>
  </div>

  <h3 class="section__sub">2. Lesão de aorta torácica</h3>
  <div class="callout fisiopato">
    <strong class="callout__title">Fisiopato — por que no istmo</strong>
    <p>Em mecanismo de <strong>desaceleração brusca</strong> (AAT alta velocidade, queda de altura, ejeção), a aorta descendente continua em movimento enquanto a aorta proximal está <strong>fixada pelo ligamento arterioso</strong> (resíduo do ducto arterial). A força de cisalhamento produz lesão preferencialmente <strong>logo distal à origem da subclávia esquerda</strong>, no istmo aórtico. ~90% das lesões aórticas estão aí.</p>
  </div>

  <article class="card card-c">
    <header class="card__head"><span class="badge badge-c">Suspeição</span><h3 class="card__title">Mecanismo + sinais sutis</h3></header>
    <div class="card__body">
      <p>A grande maioria morre na cena (hemorragia maciça). Quem chega vivo tem <strong>hematoma contido</strong> pelo pleura/adventícia — janela curta, mas há janela.</p>
      <p><strong>Mecanismo suspeito:</strong></p>
      <ul class="list-tight">
        <li>AAT &gt; 50 km/h, sobretudo lateral.</li>
        <li>Queda &gt; 6 m.</li>
        <li>Ejeção do veículo, capotamento.</li>
        <li>Atropelamento por veículo em alta velocidade.</li>
      </ul>
      <p><strong>Achados clínicos sutis (podem estar todos ausentes):</strong></p>
      <ul class="list-tight">
        <li>Hipertensão paradoxal de membros superiores com hipotensão de membros inferiores.</li>
        <li>Sopro interescapular novo.</li>
        <li>Diferença de PA entre os braços.</li>
        <li>Dor torácica ou interescapular.</li>
      </ul>
    </div>
  </article>

  <h3 class="section__sub">Achados radiológicos — rx de tórax</h3>
  <div class="grid grid-3 gap-md">
    <article class="card card-c compact">
      <header class="card__head"><span class="badge badge-c">1</span><h4 class="card__title">Alargamento mediastinal</h4></header>
      <div class="card__body"><p>Mediastino superior &gt; 8 cm em rx em pé (ou &gt; 25% da largura do tórax). <strong>Sinal mais sensível</strong>.</p></div>
    </article>
    <article class="card card-c compact">
      <header class="card__head"><span class="badge badge-c">2</span><h4 class="card__title">Apagamento do botão aórtico</h4></header>
      <div class="card__body"><p>Perda do contorno do arco aórtico no perfil esquerdo do mediastino. Sinal específico.</p></div>
    </article>
    <article class="card card-c compact">
      <header class="card__head"><span class="badge badge-c">3</span><h4 class="card__title">Derrame pleural à esquerda</h4></header>
      <div class="card__body"><p>Hemotórax esquerdo "<em>capping</em>" apical, ou velamento basal. Sangue do hematoma rompido.</p></div>
    </article>
    <article class="card card-c compact">
      <header class="card__head"><span class="badge badge-c">4</span><h4 class="card__title">Desvio de traqueia/SNG à direita</h4></header>
      <div class="card__body"><p>O hematoma desloca estruturas mediastinais para a direita.</p></div>
    </article>
    <article class="card card-c compact">
      <header class="card__head"><span class="badge badge-c">5</span><h4 class="card__title">Rebaixamento do brônquio E</h4></header>
      <div class="card__body"><p>Brônquio principal esquerdo deprimido pelo hematoma sobre ele.</p></div>
    </article>
    <article class="card card-c compact">
      <header class="card__head"><span class="badge badge-c">6</span><h4 class="card__title">Fratura 1ª/2ª costela</h4></header>
      <div class="card__body"><p>Marcador de <strong>alta energia</strong>. Não é específico, mas reforça a busca.</p></div>
    </article>
  </div>

  <p class="muted">Confirmação: <strong>angio-TC de tórax</strong> (padrão-ouro atual). Sensibilidade e especificidade &gt; 98%. Aortografia hoje raramente usada.</p>

  <h3 class="section__sub">Classificação Society for Vascular Surgery (SVS) — ATLS 11</h3>
  <div class="table-wrap">
    <table class="table-compare">
      <thead>
        <tr>
          <th>Grau</th>
          <th>Lesão</th>
          <th>Conduta</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><span class="pill p-ok">I</span></td>
          <td><strong>Flap intimal</strong> (íntima rota, sem hematoma).</td>
          <td><strong>Conservador</strong>: controle pressórico + imagem seriada.</td>
        </tr>
        <tr>
          <td><span class="pill p-warn">II</span></td>
          <td><strong>Hematoma intramural</strong> (média + íntima, sem rotura adventícia).</td>
          <td><strong>TEVAR</strong> (endovascular) eletivo precoce, com controle pressórico.</td>
        </tr>
        <tr>
          <td><span class="pill p-err">III</span></td>
          <td><strong>Pseudoaneurisma</strong> (rotura contida pela adventícia).</td>
          <td><strong>TEVAR</strong> precoce (geralmente em 24 h). Cirurgia aberta se anatomia desfavorável.</td>
        </tr>
        <tr>
          <td><span class="pill p-err">IV</span></td>
          <td><strong>Rotura livre</strong> (sangramento ativo no mediastino/pleura).</td>
          <td><strong>Cirurgia aberta de emergência</strong>. Mortalidade alta. TEVAR em centros experientes.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 class="section__sub">Controle pressórico — esmolol</h3>
  <article class="card card-c">
    <header class="card__head"><span class="badge">Anti-impulse therapy</span><h3 class="card__title">Reduz dP/dt da aorta</h3></header>
    <div class="card__body">
      <p>Em qualquer grau, enquanto o reparo definitivo não acontece, o objetivo é <strong>reduzir o estresse de cisalhamento</strong> sobre a aorta lesada. Não basta baixar PA — precisa baixar a <em>variação de pressão por tempo</em> (dP/dt).</p>
      <ul class="list-tight">
        <li><strong>Esmolol IV em infusão contínua</strong> (β-bloqueador cardiosseletivo, meia-vida ~9 min — titulável).</li>
        <li><strong>Alvos:</strong> <strong>PAS &lt; 120 mmHg</strong> e <strong>FC &lt; 80 bpm</strong>.</li>
        <li>Se FC já controlada e PAS persistente: associar <strong>nitroprussiato</strong> ou <strong>nicardipina</strong>.</li>
        <li><strong>Não</strong> usar vasodilatador isolado: causa taquicardia reflexa que <em>aumenta</em> dP/dt.</li>
        <li>Analgesia adequada (a dor sobe PA e FC).</li>
      </ul>
      <details class="callout-gabarito">
        <summary>Ver o que muda o gabarito</summary>
        <p>Em prova ATLS 11, esmolol é a <strong>primeira escolha</strong>. Distrator clássico: "nitroprussiato isolado para reduzir PA". Errado — sem β-bloqueio prévio, taquicardia reflexa piora a lesão. A sequência: <strong>β-bloquear → reduzir PAS → reparar</strong>.</p>
      </details>
    </div>
  </article>

  <div class="callout naoconfunda" style="margin-top:1rem">
    <strong class="callout__title">Tamponamento × Pneumotórax hipertensivo</strong>
    <p>Os 2 cursam com <strong>jugular túrgida + hipotensão</strong>. A diferença está na <strong>ausculta e percussão</strong>:<br>
    <strong>Pneumotórax hipertensivo:</strong> MV ausente unilateral + hipertimpanismo + desvio de traqueia.<br>
    <strong>Tamponamento:</strong> ausculta pulmonar normal + bulhas abafadas + sem desvio de traqueia.<br>
    O FAST subxifoide diferencia rapidamente. Se ambos coexistem: descomprime o tórax primeiro (mais letal a curto prazo).</p>
  </div>

  <div class="callout pegadinha" style="margin-top:1rem">
    <strong class="callout__title">Pegadinhas</strong>
    <ul class="list-tight">
      <li>"Tríade de Beck completa em todo tamponamento" → <strong>errado</strong>; presente em ~30%.</li>
      <li>"Pericardiocentese é tratamento definitivo" → <strong>errado</strong>; é ponte; cirurgia é definitiva.</li>
      <li>"Aorta lesada → operar imediatamente" → <strong>nem sempre</strong>; grau I é conservador, II–III TEVAR <em>eletivo precoce</em>, IV emergência.</li>
      <li>"Nitroprussiato em monoterapia para baixar PA na lesão de aorta" → <strong>errado</strong>; precisa β-bloqueio antes (esmolol).</li>
      <li>"Rx normal exclui lesão de aorta" → <strong>errado</strong>; até 7% têm rx normal. Mecanismo suspeito → <strong>angio-TC</strong>.</li>
      <li>"Mortalidade alta = não vale a pena tentar reparar" → <strong>errado</strong>; quem chega vivo, com hematoma contido, tem chance significativa com TEVAR.</li>
    </ul>
  </div>

  <div class="callout banca" style="margin-top:1rem">
    <strong class="callout__title">Como a banca testa</strong>
    <p>Tamponamento: paciente com FAB precordial, tríade de Beck + FAST subxifoide com líquido pericárdico → resposta = <strong>toracotomia/janela pericárdica</strong>; pericardiocentese só como ponte.<br>
    Aorta: AAT alta velocidade, alargamento de mediastino em rx, paciente estável → próxima conduta = <strong>angio-TC de tórax</strong>; iniciar <strong>esmolol</strong> com alvo PAS &lt; 120 e FC &lt; 80; reparo conforme grau SVS.</p>
  </div>
</section>`;

  S["d-neuro"] = () => `
<section class="section" data-id="d-neuro">
  <div class="block-head block-d">
    <div class="block-head__letter">D</div>
    <div class="block-head__copy">
      <h2>D — Disfunção neurológica</h2>
      <p>O D é o exame neurológico <em>focado</em> — em ≤ 60 segundos: <strong>nível de consciência + pupilas + lateralização</strong>. Não é hora de exame neurológico completo. É hora de decidir: <strong>preciso intubar agora? preciso operar a cabeça?</strong></p>
    </div>
  </div>

  <div class="callout fisiopato">
    <strong class="callout__title">Fisiopato — TCE primário × secundário</strong>
    <p><strong>Lesão primária</strong> = ocorreu no impacto, é irreversível.<br>
    <strong>Lesão secundária</strong> = ocorre <em>depois</em>, e <em>pode ser prevenida</em>: hipóxia, hipotensão, hipercapnia, hipertermia, hipoglicemia, hipertensão intracraniana descontrolada. Nosso trabalho no D não é "tratar o TCE primário" (não dá), é <strong>impedir o secundário</strong> mantendo PAS ≥ 110, SpO₂ ≥ 94%, EtCO₂ 35–40, normotermia, glicemia 140–180.</p>
  </div>

  <h3 class="section__sub">AVDI — triagem em 5 segundos</h3>
  <p class="muted">Mais rápido que Glasgow. Útil em pré-hospitalar e como avaliação inicial. <em>Não substitui</em> Glasgow no PS.</p>
  <div class="grid grid-4 gap-md">
    <article class="card card-d compact">
      <header class="card__head"><span class="badge badge-d">A</span><h4 class="card__title">Alerta</h4></header>
      <div class="card__body"><p>Acordado, responde espontaneamente. ≈ Glasgow 14–15.</p></div>
    </article>
    <article class="card card-d compact">
      <header class="card__head"><span class="badge badge-d">V</span><h4 class="card__title">Verbal</h4></header>
      <div class="card__body"><p>Responde ao chamado. ≈ Glasgow 12–13.</p></div>
    </article>
    <article class="card card-c compact">
      <header class="card__head"><span class="badge badge-c">D</span><h4 class="card__title">Dor</h4></header>
      <div class="card__body"><p>Responde apenas ao estímulo doloroso. ≈ Glasgow 8.</p></div>
    </article>
    <article class="card card-x compact">
      <header class="card__head"><span class="badge badge-x">I</span><h4 class="card__title">Inconsciente</h4></header>
      <div class="card__body"><p>Sem resposta a nenhum estímulo. ≈ Glasgow 3.</p></div>
    </article>
  </div>

  <h3 class="section__sub">Glasgow — pontuação detalhada</h3>
  <p class="muted">3 componentes, 15 pontos. Sempre relatar <em>desagregado</em> (ex.: O4V5M6 = 15), não só o total. <strong>Em paciente intubado, a parte verbal vira "T" (tubo)</strong>; máximo é O4M6T = 11 + T.</p>

  <div class="grid grid-3 gap-md">
    <article class="card card-d">
      <header class="card__head"><span class="badge badge-d">O</span><h3 class="card__title">Abertura ocular (4)</h3></header>
      <div class="card__body">
        <ul class="list-tight">
          <li><strong>4 — Espontânea</strong></li>
          <li><strong>3 — Ao chamado</strong> (estímulo verbal)</li>
          <li><strong>2 — À dor</strong> (estímulo nociceptivo)</li>
          <li><strong>1 — Ausente</strong></li>
        </ul>
        <p class="muted" style="font-size:12px">Em edema palpebral grave ou trauma facial: anotar &quot;NT&quot; (não testável) e justificar.</p>
      </div>
    </article>
    <article class="card card-d">
      <header class="card__head"><span class="badge badge-d">V</span><h3 class="card__title">Resposta verbal (5)</h3></header>
      <div class="card__body">
        <ul class="list-tight">
          <li><strong>5 — Orientada</strong> (sabe quem, onde, quando)</li>
          <li><strong>4 — Confusa</strong> (frases coerentes, conteúdo errado)</li>
          <li><strong>3 — Palavras inadequadas</strong> (palavras soltas, sem frase)</li>
          <li><strong>2 — Sons incompreensíveis</strong> (geme, grunhe)</li>
          <li><strong>1 — Ausente</strong></li>
        </ul>
        <p class="muted" style="font-size:12px">Em IOT: anotar como &quot;T&quot;.</p>
      </div>
    </article>
    <article class="card card-d">
      <header class="card__head"><span class="badge badge-d">M</span><h3 class="card__title">Resposta motora (6)</h3></header>
      <div class="card__body">
        <ul class="list-tight">
          <li><strong>6 — Obedece comando</strong></li>
          <li><strong>5 — Localiza dor</strong> (mão acima do mamilo)</li>
          <li><strong>4 — Retira à dor</strong> (foge do estímulo)</li>
          <li><strong>3 — Flexão anormal</strong> (decorticação)</li>
          <li><strong>2 — Extensão anormal</strong> (descerebração)</li>
          <li><strong>1 — Ausente</strong></li>
        </ul>
        <p class="muted" style="font-size:12px">É o componente <strong>mais preditivo de prognóstico</strong> em TCE.</p>
      </div>
    </article>
  </div>

  <h3 class="section__sub">Calculadora · Glasgow interativo</h3>
  <p class="muted">Selecione um item de cada componente. O cálculo e a classificação aparecem automaticamente.</p>

  <div class="calc-glasgow card card-d" style="padding:18px 20px; margin: 14px 0">
    <div class="calc-grid" style="grid-template-columns: repeat(3, 1fr); gap: 14px">
      <div class="calc-block" data-glasgow="O">
        <strong>Abertura ocular (O)</strong>
        <div class="calc-opt" data-score="4" style="cursor:pointer; padding:6px 10px; border-radius:6px; margin-top:4px">4 · Espontânea</div>
        <div class="calc-opt" data-score="3" style="cursor:pointer; padding:6px 10px; border-radius:6px">3 · Ao chamado</div>
        <div class="calc-opt" data-score="2" style="cursor:pointer; padding:6px 10px; border-radius:6px">2 · À dor</div>
        <div class="calc-opt" data-score="1" style="cursor:pointer; padding:6px 10px; border-radius:6px">1 · Ausente</div>
      </div>
      <div class="calc-block" data-glasgow="V">
        <strong>Resposta verbal (V)</strong>
        <div class="calc-opt" data-score="5" style="cursor:pointer; padding:6px 10px; border-radius:6px; margin-top:4px">5 · Orientada</div>
        <div class="calc-opt" data-score="4" style="cursor:pointer; padding:6px 10px; border-radius:6px">4 · Confusa</div>
        <div class="calc-opt" data-score="3" style="cursor:pointer; padding:6px 10px; border-radius:6px">3 · Palavras inadequadas</div>
        <div class="calc-opt" data-score="2" style="cursor:pointer; padding:6px 10px; border-radius:6px">2 · Sons incompreensíveis</div>
        <div class="calc-opt" data-score="1" style="cursor:pointer; padding:6px 10px; border-radius:6px">1 · Ausente</div>
      </div>
      <div class="calc-block" data-glasgow="M">
        <strong>Resposta motora (M)</strong>
        <div class="calc-opt" data-score="6" style="cursor:pointer; padding:6px 10px; border-radius:6px; margin-top:4px">6 · Obedece comando</div>
        <div class="calc-opt" data-score="5" style="cursor:pointer; padding:6px 10px; border-radius:6px">5 · Localiza dor</div>
        <div class="calc-opt" data-score="4" style="cursor:pointer; padding:6px 10px; border-radius:6px">4 · Retira à dor</div>
        <div class="calc-opt" data-score="3" style="cursor:pointer; padding:6px 10px; border-radius:6px">3 · Flexão anormal</div>
        <div class="calc-opt" data-score="2" style="cursor:pointer; padding:6px 10px; border-radius:6px">2 · Extensão anormal</div>
        <div class="calc-opt" data-score="1" style="cursor:pointer; padding:6px 10px; border-radius:6px">1 · Ausente</div>
      </div>
    </div>
    <div class="calc-result" style="margin-top:14px">
      <span class="calc-result__num" style="font-size:32px; font-weight:700">–</span>
      <span class="calc-result__lbl" style="margin-left:10px">Selecione abertura ocular, resposta verbal e resposta motora.</span>
    </div>
  </div>

  <h3 class="section__sub">Classificação por Glasgow</h3>
  <div class="grid grid-3 gap-md">
    <article class="card card-x compact">
      <header class="card__head"><span class="badge badge-x">≤ 8</span><h4 class="card__title">TCE grave</h4></header>
      <div class="card__body"><p><strong>IOT obrigatória</strong> — proteção de via aérea + controle da PIC. TC de crânio + neurocirurgia. UTI.</p></div>
    </article>
    <article class="card card-c compact">
      <header class="card__head"><span class="badge badge-c">9–12</span><h4 class="card__title">TCE moderado</h4></header>
      <div class="card__body"><p>Observação rigorosa, TC de crânio, internação. Reavaliar Glasgow a cada 30 min — <em>queda</em> indica IOT.</p></div>
    </article>
    <article class="card card-b compact">
      <header class="card__head"><span class="badge badge-b">13–15</span><h4 class="card__title">TCE leve</h4></header>
      <div class="card__body"><p>TC se critérios canadenses/Nova Orleans. Observação ≥ 6 h. Orientações de alta com sinais de alarme.</p></div>
    </article>
  </div>

  <h3 class="section__sub">Pupilas — pista de herniação</h3>
  <article class="card card-x">
    <header class="card__head"><span class="badge badge-x">Anisocoria</span><h3 class="card__title">Diferença &gt; 1 mm + Glasgow caindo</h3></header>
    <div class="card__body">
      <p>Em TCE, <strong>anisocoria + Glasgow baixo = herniação uncal até prova em contrário</strong>. O lobo temporal é empurrado contra o III nervo craniano (oculomotor) → midríase paralítica <em>ipsilateral</em> à lesão.</p>
      <ul class="list-tight">
        <li><strong>Pupila dilatada e fixa unilateral</strong> = herniação ipsilateral.</li>
        <li><strong>Bilateral, fixa, midriática</strong> = herniação bilateral, sofrimento de tronco; mau prognóstico.</li>
        <li><strong>Mióticas puntiformes</strong> = lesão de ponte ou opioides/colinérgicos.</li>
        <li><strong>Anisocoria fisiológica</strong>: existe em ~20% das pessoas (até 1 mm), <em>com pupilas reativas e Glasgow normal</em>. Não confunda.</li>
      </ul>
      <details class="callout-gabarito">
        <summary>Ver o que muda o gabarito</summary>
        <p>A combinação que muda conduta: <strong>anisocoria + Glasgow ≤ 8 + lateralização</strong>. Resposta = <strong>TC de crânio imediato + neurocirurgia para drenagem de hematoma</strong>. Manitol 0,25–1 g/kg ou solução salina hipertônica 3% como ponte. Hiperventilação <em>moderada</em> (EtCO₂ 30–35) só se sinais de herniação franca, e por <em>tempo limitado</em>.</p>
      </details>
    </div>
  </article>

  <h3 class="section__sub">Tríade de Cushing — HIC iminente</h3>
  <article class="card card-x">
    <header class="card__head"><span class="badge badge-x">Tardio</span><h3 class="card__title">Hipertensão + bradicardia + respiração irregular</h3></header>
    <div class="card__body">
      <p>Sinal <strong>tardio</strong> de hipertensão intracraniana descontrolada. Quando aparece, a herniação está acontecendo. <strong>Não é o momento de "esperar TC"</strong> — é o momento de tratar:</p>
      <ul class="list-tight">
        <li>Cabeceira a 30°.</li>
        <li>IOT + sedação + analgesia adequadas.</li>
        <li>Manitol 0,25–1 g/kg ou salina hipertônica 3%.</li>
        <li>Hiperventilação leve transitória (EtCO₂ 30–35) — só como ponte para cirurgia.</li>
        <li>Neurocirurgia <strong>imediata</strong>.</li>
      </ul>
    </div>
  </article>

  <div class="callout naoconfunda" style="margin-top:1rem">
    <strong class="callout__title">Tríades — não confunda</strong>
    <p><strong>Cushing</strong> (HIC iminente): HAS + bradicardia + respiração irregular.<br>
    <strong>Beck</strong> (tamponamento): hipotensão + bulhas abafadas + jugular túrgida.<br>
    <strong>Letal do trauma</strong>: hipotermia + acidose + coagulopatia.<br>
    A banca <em>adora</em> misturar as 3 num enunciado de TCE complicado.</p>
  </div>

  <div class="callout pegadinha" style="margin-top:1rem">
    <strong class="callout__title">Pegadinhas do D</strong>
    <ul class="list-tight">
      <li><strong>Hipoglicemia</strong>, <strong>álcool</strong>, <strong>drogas</strong> e <strong>hipóxia</strong> simulam TCE. Sempre dosar glicemia capilar antes de assumir TCE como causa do rebaixamento.</li>
      <li>Glasgow <strong>9</strong>: <em>não</em> é indicação automática de IOT pelo Glasgow (corte é &lt;8). Mas se está <em>caindo</em>, prepare.</li>
      <li>Anisocoria fisiológica em ~20% das pessoas → pupilas reativas + Glasgow normal não preocupam.</li>
      <li><strong>Cushing</strong> é sinal <em>tardio</em> de HIC; não esperar para tratar.</li>
      <li>Em paciente IOT, registrar Glasgow como O+M+T (verbal não testável).</li>
      <li>Tríade letal do trauma <em>não</em> é HAS+bradi+respiração irregular (essa é Cushing).</li>
      <li><strong>TCE leve</strong> (Glasgow 13–15) não é "sem TCE"; precisa avaliar pela <em>regra canadense</em> ou de <em>Nova Orleans</em> para TC.</li>
    </ul>
  </div>

  <div class="callout banca" style="margin-top:1rem">
    <strong class="callout__title">Como a banca testa o D</strong>
    <p>Cenário típico: paciente pós-AAT, Glasgow 7, anisocoria à direita, hemiparesia à esquerda. Pergunta: "qual a próxima conduta?". Distrator: "TC de crânio antes de qualquer outra conduta". Resposta certa: <strong>IOT + medidas de PIC + TC + neurocirurgia</strong> — a IOT vem <em>antes</em> da TC, porque Glasgow ≤ 8 = via aérea desprotegida. Outro cenário: paciente com Glasgow 14 que decai a 11 em 30 min → <strong>TC imediato + reavaliar IOT</strong>; tendência negativa importa mais que valor absoluto.</p>
  </div>
</section>`;

  S["e-exposicao"] = () => `
<section class="section" data-id="e-exposicao">
  <div class="block-head block-e">
    <div class="block-head__letter">E</div>
    <div class="block-head__copy">
      <h2>E — Exposição &amp; controle do ambiente</h2>
      <p>O E não é "tirar a roupa e acabou". É <strong>despir totalmente</strong> (não escapa nenhuma região do corpo), <strong>rolar em bloco</strong> para examinar o dorso e o períneo, e em seguida <strong>cobrir e aquecer</strong> antes que a hipotermia se instale. É o último passo da primária — e o primeiro a ser <em>esquecido</em> em prova.</p>
    </div>
  </div>

  <div class="callout fisiopato">
    <strong class="callout__title">Por que o E mata silenciosamente</strong>
    <p>Lesões críticas se escondem onde ninguém olha: <strong>dorso, axilas, períneo, pregas glúteas, couro cabeludo, plantas dos pés</strong>. Um FAB lombar com hemoperitônio fica indetectável se você não rolar o paciente. E enquanto isso, em sala fria, com roupas molhadas e fluidos sem aquecer, a temperatura cai de 36,5 para 34 °C em &lt; 30 min. <strong>Cada 1 °C abaixo de 35 °C piora a coagulação em ~10%</strong> — alimenta a tríade letal.</p>
  </div>

  <h3 class="section__sub">1. Despir totalmente</h3>
  <article class="card card-e">
    <header class="card__head"><span class="badge">Roupas fora</span><h3 class="card__title">Sem exceção</h3></header>
    <div class="card__body">
      <ul class="list-tight">
        <li><strong>Cortar</strong> as roupas com tesoura de trauma (rasgar pode mascarar trajetos de FAB/FAF — preservar evidência forense em alguns serviços).</li>
        <li>Remover <strong>capacete</strong> com técnica de 2 operadores (um estabiliza cervical, outro abre/remove).</li>
        <li>Remover <strong>colar cervical</strong> apenas com estabilização manual em linha.</li>
        <li>Retirar relógios, anéis, pulseiras, brincos — edema pós-trauma pode causar isquemia.</li>
        <li>Atenção a <strong>roupas molhadas</strong>: amplificam hipotermia por evaporação. Trocar.</li>
      </ul>
    </div>
  </article>

  <h3 class="section__sub">2. Rolamento em bloco (log roll)</h3>
  <article class="card card-e">
    <header class="card__head"><span class="badge">3–4 operadores</span><h3 class="card__title">Coluna em eixo</h3></header>
    <div class="card__body">
      <p>Manobra que permite examinar dorso, períneo, glúteos, regiões posteriores das pernas. Mantém <strong>cabeça-tórax-pelve em alinhamento neutro</strong>. Operador 1: cabeça/cervical (líder, conta o tempo). Operador 2: ombros/tórax. Operador 3: pelve/quadril. Operador 4 (se disponível): inspeciona/palpa enquanto rolado.</p>
      <p><strong>Procurar:</strong></p>
      <ul class="list-tight">
        <li>Ferimentos penetrantes ocultos (FAF/FAB no dorso, axila, períneo).</li>
        <li>Equimoses, hematomas, abrasões.</li>
        <li>Deformidades / "step-off" da coluna vertebral (palpação dos processos espinhosos).</li>
        <li>Tônus do esfíncter anal e sangramento retal (toque retal indicado).</li>
        <li>Sangue em meato uretral, hematoma perineal/escrotal.</li>
      </ul>
    </div>
  </article>

  <h3 class="section__sub">3. Sinais de lesão de uretra — não passar sonda!</h3>
  <article class="card card-x">
    <header class="card__head"><span class="badge badge-x">5 sinais</span><h3 class="card__title">Contraindicam sondagem vesical</h3></header>
    <div class="card__body">
      <p>Antes de passar sonda em politraumatizado, examine o períneo. <strong>Qualquer um destes 5 sinais</strong> contraindica sondagem de rotina — passar a sonda pode <em>completar</em> uma lesão parcial de uretra.</p>
      <ul class="list-tight">
        <li><strong>1. Uretrorragia</strong> — sangue no meato uretral.</li>
        <li><strong>2. Hematoma perineal</strong> ("em borboleta").</li>
        <li><strong>3. Próstata elevada / flutuante</strong> ao toque retal ("high-riding prostate").</li>
        <li><strong>4. Equimose escrotal ou de grandes lábios</strong>.</li>
        <li><strong>5. Fratura instável de pelve</strong> (especialmente em livro aberto).</li>
      </ul>
      <p><strong>Conduta:</strong> <em>uretrocistografia retrógrada</em> antes da sondagem. Em caso de lesão confirmada: <strong>cistostomia suprapúbica</strong> em vez de sondagem transuretral.</p>
      <details class="callout-gabarito">
        <summary>Ver o que muda o gabarito</summary>
        <p>Distrator clássico: "passar sonda Foley, mesmo com sangue no meato, com cuidado". <strong>Errado</strong>. A resposta correta é <strong>uretrocistografia retrógrada</strong> (em paciente estável) ou <strong>cistostomia suprapúbica</strong> (em paciente instável que precisa monitorar débito urinário). Em prova de cirurgia, esses 5 sinais caem com frequência altíssima.</p>
      </details>
    </div>
  </article>

  <h3 class="section__sub">4. Prevenção e tratamento da hipotermia</h3>
  <article class="card card-b">
    <header class="card__head"><span class="badge badge-b">Aquecimento ativo</span><h3 class="card__title">A próxima manobra depois de despir é <em>cobrir</em></h3></header>
    <div class="card__body">
      <p>Hipotermia em trauma <strong>nunca é "incidental"</strong>: alimenta acidose e coagulopatia (tríade letal). Definida por temperatura central &lt; 36 °C; grave &lt; 32 °C.</p>
      <p><strong>Medidas em escala:</strong></p>
      <ul class="list-tight">
        <li><strong>Sala aquecida</strong> a 28–30 °C (sim, parece desconfortável para a equipe — é para o paciente).</li>
        <li><strong>Mantas térmicas</strong> (manta refletora isotérmica + cobertor convencional sobreposto).</li>
        <li><strong>Ar quente forçado</strong> (Bair Hugger ou similar) — padrão-ouro de aquecimento de superfície.</li>
        <li><strong>Fluidos cristaloides aquecidos a 39 °C</strong> (aquecedor de bolsa em série).</li>
        <li><strong>Hemocomponentes aquecidos</strong> em transfusão maciça (banho-maria controlado, aquecedor de fluido específico).</li>
        <li><strong>Cobertura precoce</strong> de feridas com curativos limpos — reduz perda evaporativa.</li>
        <li>Em hipotermia grave (&lt; 32 °C) ou refratária: <strong>aquecimento central</strong> (lavagem peritoneal/pleural com soro a 40–42 °C, hemodiálise venovenosa, ECMO em centros especializados).</li>
      </ul>
      <p class="muted"><strong>Não esquecer o "P" do conforto</strong>: trocar lençóis molhados, cobrir entre exames, não deixar exposto sem necessidade.</p>
    </div>
  </article>

  <h3 class="section__sub">5. Achados que se descobrem no E</h3>
  <div class="grid grid-3 gap-md">
    <article class="card card-e compact">
      <header class="card__head"><span class="badge badge-e">Cinto</span><h4 class="card__title">Sinal do cinto</h4></header>
      <div class="card__body"><p>Equimose abdominal transversa = perfuração de víscera oca + fratura de Chance lombar (compressão anterior + distração posterior).</p></div>
    </article>
    <article class="card card-e compact">
      <header class="card__head"><span class="badge badge-e">Cullen</span><h4 class="card__title">Equimose periumbilical</h4></header>
      <div class="card__body"><p>Sangramento intraperitoneal/retroperitoneal. Em trauma, sugere lesão visceral ou pancreática.</p></div>
    </article>
    <article class="card card-e compact">
      <header class="card__head"><span class="badge badge-e">Grey-Turner</span><h4 class="card__title">Equimose flancos</h4></header>
      <div class="card__body"><p>Sangramento retroperitoneal. Suspeitar de lesão de duodeno, pâncreas, rim, grandes vasos.</p></div>
    </article>
    <article class="card card-e compact">
      <header class="card__head"><span class="badge badge-e">Battle</span><h4 class="card__title">Equimose retroauricular</h4></header>
      <div class="card__body"><p>Fratura de base de crânio (fossa posterior). Contraindica sonda nasogástrica/nasofaríngea.</p></div>
    </article>
    <article class="card card-e compact">
      <header class="card__head"><span class="badge badge-e">Guaxinim</span><h4 class="card__title">Equimose periorbital bilateral</h4></header>
      <div class="card__body"><p>Fratura de base de crânio (fossa anterior). Sem trauma direto na órbita = pista forte.</p></div>
    </article>
    <article class="card card-e compact">
      <header class="card__head"><span class="badge badge-e">Otorraquia</span><h4 class="card__title">Líquor pelo ouvido/nariz</h4></header>
      <div class="card__body"><p>Halo sign no papel: gota com anel claro periférico. Confirma fratura de base com fístula liquórica.</p></div>
    </article>
  </div>

  <h3 class="section__sub">6. Síndrome compartimental — atenção no E</h3>
  <article class="card card-x">
    <header class="card__head"><span class="badge badge-x">6 P</span><h3 class="card__title">Pain · Pallor · Paresthesia · Paralysis · Pulselessness · Poikilothermia</h3></header>
    <div class="card__body">
      <p>Pressão dentro de um compartimento muscular &gt; 30 mmHg → isquemia. <strong>Pulso ausente é sinal tardio</strong>; quando aparece, o tecido já está sofrendo. Confiar em <strong>dor desproporcional</strong> ao trauma e <strong>dor à extensão passiva</strong> dos dedos do membro acometido — sinais precoces.</p>
      <ul class="list-tight">
        <li>Locais clássicos: perna (4 compartimentos), antebraço (3), coxa (3), pé.</li>
        <li>Mecanismos: fratura fechada, esmagamento, queimadura circunferencial, reperfusão pós-torniquete prolongado.</li>
        <li><strong>Conduta:</strong> aliviar o compartimento (remover gesso, aliviar tração) → <strong>medir pressão</strong> → se &gt; 30 mmHg ou clínica clara: <strong>fasciotomia urgente</strong>.</li>
      </ul>
    </div>
  </article>

  <h3 class="section__sub">7. Queimaduras no E</h3>
  <article class="card card-e">
    <header class="card__head"><span class="badge badge-e">Atenção dupla</span><h3 class="card__title">Via aérea (A) + superfície (E)</h3></header>
    <div class="card__body">
      <ul class="list-tight">
        <li>Avaliar superfície queimada pela <strong>regra dos 9</strong> (Wallace): cabeça 9%, cada MS 9%, cada MI 18%, tronco anterior 18%, posterior 18%, períneo 1%.</li>
        <li>Em criança, cabeça pesa mais (~18%) e MMII menos.</li>
        <li>Profundidade: 1º grau (eritema), 2º superficial (bolha), 2º profundo (pálida, sensibilidade reduzida), 3º grau (escara, sem dor).</li>
        <li><strong>Reposição volêmica:</strong> fórmula de Parkland — Ringer lactato 4 mL × kg × % SCQ, metade nas primeiras 8 h (do trauma, não da chegada), metade nas 16 h seguintes.</li>
        <li>Queimadura circunferencial em tórax/membro: <strong>escarotomia</strong> se restrição ventilatória/perfusional.</li>
        <li><strong>Sinais de lesão inalatória</strong> (fuligem em narinas, queimadura facial, escarro carbonáceo, voz rouca, queimadura em ambiente fechado): <strong>IOT precoce</strong> — antes do edema fechar a via aérea.</li>
      </ul>
    </div>
  </article>

  <div class="callout naoconfunda" style="margin-top:1rem">
    <strong class="callout__title">Equimoses periorbitais — não confunda</strong>
    <p><strong>Sinal do guaxinim</strong> (raccoon eyes): equimose periorbitária <em>bilateral</em>, sem trauma direto na órbita = fratura de fossa anterior.<br>
    <strong>Equimose periorbital traumática direta</strong>: unilateral, com trauma local visível, sem outros sinais de fratura de base.<br>
    Em prova: bilateral, sem trauma local, em politrauma → fratura de base, contraindica nasofaríngea/SNG.</p>
  </div>

  <div class="callout pegadinha" style="margin-top:1rem">
    <strong class="callout__title">Pegadinhas do E</strong>
    <ul class="list-tight">
      <li>"Passar sonda Foley em paciente politraumatizado de rotina" → <strong>errado</strong> se há sinais de lesão uretral.</li>
      <li>"Sonda nasogástrica em paciente com sinal do guaxinim/Battle" → <strong>contraindicada</strong> (passar oral).</li>
      <li>"Pulso ausente é sinal precoce de síndrome compartimental" → <strong>errado</strong>; é tardio. A dor desproporcional vem antes.</li>
      <li>"Fórmula de Parkland: metade nas primeiras 8 h da chegada" → <strong>errado</strong>; é desde o <em>trauma</em>.</li>
      <li>"Não despir totalmente para evitar hipotermia" → <strong>errado</strong>; despe-se sim, mas <em>cobre depois</em>. Não despir = lesões ocultas.</li>
      <li>"Aquecer só com cobertor" → insuficiente em hipotermia grave; precisa ar quente forçado e fluidos a 39 °C.</li>
      <li>"Anel apertado em dedo edemaciado: deixar para depois" → <strong>errado</strong>; pode causar isquemia. Cortar/retirar logo.</li>
      <li>"Equimose periumbilical (Cullen) é sinal precoce" → <strong>errado</strong>; aparece após horas; útil mas tardio.</li>
    </ul>
  </div>

  <div class="callout banca" style="margin-top:1rem">
    <strong class="callout__title">Como a banca testa o E</strong>
    <p>Cenário típico: queda de altura, paciente instável, FAST+, equimose perineal "em borboleta", uretrorragia. Pergunta: "qual a próxima conduta?". Distrator: "passar sonda vesical para monitorar débito urinário". Resposta: <strong>cistostomia suprapúbica + laparotomia</strong>. Outro cenário: politraumatizado em sala fria, temperatura 33,5 °C, em PTM. Pergunta: "qual prioridade no manejo?". Resposta: <strong>aquecimento ativo (Bair Hugger + fluidos a 39 °C + hemocomponentes aquecidos)</strong> — <em>antes</em> que a tríade letal feche o ciclo.</p>
  </div>

  <div class="callout atls11" style="margin-top:1rem">
    <strong class="callout__title">Resumo do XABCDE — fechando o protocolo</strong>
    <p><strong>x</strong>: sangrou externo arterial → torniquete + curativo hemostático.<br>
    <strong>A</strong>: pérvia × segura → IOT se Glasgow ≤ 8 ou risco; capnografia obrigatória; LMA como ponte.<br>
    <strong>B</strong>: as 6 ameaças → toracocentese 5º EIC LAM, drenagem 28–32 Fr, curativo de 3 pontas, fixação de costelas ampliada.<br>
    <strong>C</strong>: 250–500 mL aquecido + PTM 1:1:1 + TXA &lt; 3 h; ABC ≥ 2 ou IC ≥ 0,8.<br>
    <strong>D</strong>: Glasgow desagregado, pupilas, lateralização; ≤ 8 → IOT; Cushing → tratar HIC.<br>
    <strong>E</strong>: despir + log roll + 5 sinais uretra + aquecer ativamente. Tríade letal evitada.</p>
  </div>
</section>`;

  S["simulador-xabcde"] = () => `
<section class="section" data-id="simulador-xabcde">
  <div class="block-head block-x">
    <div class="block-head__letter">▶</div>
    <div class="block-head__copy">
      <h2>Simulador XABCDE — caso interativo</h2>
      <p>Um caso real, passo a passo. Em cada letra, escolha a melhor conduta. Feedback imediato ao final de cada decisão. Ao terminar, você verá seu desempenho global. <strong>Não há cronômetro real</strong> — pense, releia, decida.</p>
    </div>
  </div>

  <div class="callout dica">
    <strong class="callout__title">Como usar</strong>
    <p>Leia a vinheta inicial. Em cada passo, clique em <em>uma</em> alternativa. O simulador mostra qual era a correta e por quê. Avance com <em>Próximo</em>. No final, revise os erros — eles valem mais do que os acertos.</p>
  </div>

  <div class="sim sim-xabcde">
    <div class="sim__head">
      <div class="sim__title">Caso · Politrauma por AAT em alta velocidade</div>
      <div class="sim__step">Passo 1 / 6</div>
    </div>

    <div class="sim__panel" style="margin-bottom:14px">
      <p><strong>Vinheta inicial:</strong> Homem, 32 anos, condutor de motocicleta sem capacete, colisão lateral com veículo a ~80 km/h. Chega ao PS em maca, gemendo. <strong>Sangramento pulsátil em jato</strong> em coxa direita por fratura exposta. Capacete não usado. À chegada: PA <strong>92×60</strong>, FC <strong>128</strong>, FR <strong>26</strong>, SatO₂ <strong>94%</strong> em ar ambiente, Glasgow <strong>13</strong> (O3 V4 M6). Pele fria e pegajosa. Recursos completos disponíveis (centro de trauma).</p>
    </div>

    <!-- PASSO 1: x -->
    <div class="sim__step-card" data-correct="torniquete">
      <h4 style="margin:0 0 8px"><span class="badge badge-x">x</span> Qual a primeira conduta?</h4>
      <div class="choice-row">
        <button type="button" class="choice" data-value="iot">Garantir via aérea pérvia com IOT imediata</button>
        <button type="button" class="choice" data-value="bolus">Iniciar bolus de Ringer 1 L para corrigir hipotensão</button>
        <button type="button" class="choice" data-value="torniquete">Compressão direta seguida de torniquete proximal à lesão</button>
        <button type="button" class="choice" data-value="rx">Solicitar rx de coxa para avaliar a fratura</button>
      </div>
      <div class="sim__feedback"
        data-feedback-correct="ATLS 11: o <strong>x minúsculo</strong> precede o A. Sangramento externo arterial mata em &lt; 3 min. Conduta: compressão direta → curativo compressivo → torniquete 5–8 cm proximal, sobre a pele, anotar a hora."
        data-feedback-wrong="O sangramento pulsátil é exsanguinante e tem prioridade <em>antes</em> do A. Em ATLS 11 isso é o &quot;x&quot; do XABCDE. Bolus generoso e IOT viriam depois — primeiro estanque o jato.">
      </div>
      <button type="button" class="btn btn-primary" data-act="next" style="display:none; margin-top:10px">Próximo →</button>
    </div>

    <!-- PASSO 2: A -->
    <div class="sim__step-card" data-correct="confirma">
      <p class="muted" style="margin-bottom:6px">Após torniquete aplicado em coxa direita (15:42), sangramento controlado. Paciente fala em frases curtas, sem estridor, sem trauma facial.</p>
      <h4 style="margin:0 0 8px"><span class="badge badge-a">A</span> Conduta no A?</h4>
      <div class="choice-row">
        <button type="button" class="choice" data-value="iot-ja">IOT imediata — todo politrauma deve ser intubado</button>
        <button type="button" class="choice" data-value="confirma">Manter em estabilização cervical manual em linha + monitorar; sem IOT neste momento</button>
        <button type="button" class="choice" data-value="crico">Cricotireoidostomia profilática</button>
        <button type="button" class="choice" data-value="naso">Cânula nasofaríngea para garantir patência</button>
      </div>
      <div class="sim__feedback"
        data-feedback-correct="Via aérea está <strong>pérvia</strong> (fala) e o paciente colabora — não há indicação imediata de IOT. Glasgow 13 não fecha critério (corte é ≤ 8). Mantém-se a estabilização cervical manual e reavalia continuamente."
        data-feedback-wrong="Glasgow 13 com fala preservada não indica IOT automática. Crico e nasofaríngea são exageros aqui. Em ATLS 11, &quot;todo politrauma intuba&quot; é mito. Reavalie continuamente — se Glasgow cair, mude o plano.">
      </div>
      <button type="button" class="btn btn-primary" data-act="next" style="display:none; margin-top:10px">Próximo →</button>
    </div>

    <!-- PASSO 3: B -->
    <div class="sim__step-card" data-correct="toracocentese">
      <p class="muted" style="margin-bottom:6px">Em 5 min, paciente piora: dispneia intensa, agitação, SatO₂ cai para 84% mesmo com O₂ 15 L/min. Ausculta: <strong>MV ausente à esquerda</strong>, <strong>hipertimpânico</strong>, <strong>jugular túrgida</strong>, traqueia desviada à direita. PA agora 78×50.</p>
      <h4 style="margin:0 0 8px"><span class="badge badge-b">B</span> Próxima conduta?</h4>
      <div class="choice-row">
        <button type="button" class="choice" data-value="rx-confirma">Solicitar rx de tórax urgente para confirmar</button>
        <button type="button" class="choice" data-value="toracocentese">Toracocentese de alívio no 5º EIC linha axilar média à esquerda</button>
        <button type="button" class="choice" data-value="iot-vm">IOT + VM com PEEP elevado</button>
        <button type="button" class="choice" data-value="dreno-direto">Dreno torácico em selo d'água, sem descomprimir antes</button>
      </div>
      <div class="sim__feedback"
        data-feedback-correct="<strong>Pneumotórax hipertensivo</strong> é diagnóstico clínico — não esperar rx. Em ATLS 11, sítio é <strong>5º EIC linha axilar média/anterior em qualquer idade</strong>, cateter ≥ 5 cm. Após alívio: drenagem formal."
        data-feedback-wrong="Esperar rx em pneumotórax hipertensivo é <strong>erro grave</strong> — diagnóstico é clínico. IOT + VM com PEEP <em>piora</em> a hipertensão. Dreno em selo d'água sem descompressão prévia perde tempo. A conduta é toracocentese de alívio imediata.">
      </div>
      <button type="button" class="btn btn-primary" data-act="next" style="display:none; margin-top:10px">Próximo →</button>
    </div>

    <!-- PASSO 4: C -->
    <div class="sim__step-card" data-correct="ptm">
      <p class="muted" style="margin-bottom:6px">Após toracocentese: SatO₂ sobe a 96%, dispneia melhora. Mas PA mantém-se em 84×54, FC 130, perfusão capilar &gt; 4 s, paciente sonolento. FAST: líquido livre em Morrison. Score ABC: penetrante (não), FC ≥ 120 (sim), PAS ≤ 90 (sim), FAST+ (sim) = <strong>3 pontos</strong>.</p>
      <h4 style="margin:0 0 8px"><span class="badge badge-c">C</span> Estratégia de reposição?</h4>
      <div class="choice-row">
        <button type="button" class="choice" data-value="ringer-2l">Ringer lactato 2 L em bolus rápido + reavaliar em 15 min</button>
        <button type="button" class="choice" data-value="cruzar-sangue">Aguardar bolsa cruzada antes de transfundir</button>
        <button type="button" class="choice" data-value="ptm">Acionar PTM 1:1:1 + cristaloide 250–500 mL aquecido + TXA 1 g IV</button>
        <button type="button" class="choice" data-value="vasopressor">Iniciar noradrenalina para subir a PA</button>
      </div>
      <div class="sim__feedback"
        data-feedback-correct="Score ABC ≥ 2 + IC (130/84 ≈ 1,5) ≥ 1,0 = <strong>PTM antecipado obrigatório</strong>. ATLS 11: cristaloide 250–500 mL aquecido a 39 °C (não 1–2 L), 1:1:1 (CH:PFC:plaquetas), TXA 1 g IV em bolus &lt; 3 h. Cálcio iônico de rotina."
        data-feedback-wrong="Bolus de 2 L de Ringer é desatualizado (10ª edição) — dilui coagulação e piora hipotermia. Aguardar bolsa cruzada em respondedor transitório/não-respondedor com FAST+ atrasa o cuidado. Vasopressor sem repor volume mascara o choque hipovolêmico.">
      </div>
      <button type="button" class="btn btn-primary" data-act="next" style="display:none; margin-top:10px">Próximo →</button>
    </div>

    <!-- PASSO 5: D -->
    <div class="sim__step-card" data-correct="iot-tc">
      <p class="muted" style="margin-bottom:6px">Após bolus + 1ª unidade de hemoderivados, PA sobe a 96×62 (respondedor parcial). Mas Glasgow agora é <strong>7</strong> (O2 V2 M3) — caiu de 13 para 7 em 20 min. Pupila direita <strong>midriática</strong> (5 mm), esquerda 3 mm. Hemiparesia esquerda.</p>
      <h4 style="margin:0 0 8px"><span class="badge badge-d">D</span> Próxima conduta?</h4>
      <div class="choice-row">
        <button type="button" class="choice" data-value="tc-direto">TC de crânio imediatamente, antes de qualquer outra conduta</button>
        <button type="button" class="choice" data-value="iot-tc">IOT com sequência rápida + medidas de PIC + TC de crânio + neurocirurgia</button>
        <button type="button" class="choice" data-value="manitol-so">Manitol 1 g/kg e observar resposta antes de IOT</button>
        <button type="button" class="choice" data-value="hiper">Hiperventilar agressivamente até EtCO₂ 25</button>
      </div>
      <div class="sim__feedback"
        data-feedback-correct="Glasgow ≤ 8 + anisocoria + lateralização = <strong>herniação uncal</strong> até prova em contrário. Sequência: <strong>IOT primeiro</strong> (proteger via aérea), medidas de PIC (cabeceira 30°, salina hipertônica 3% ou manitol), depois TC e <strong>neurocirurgia imediata</strong>. Hiperventilação só transitória (EtCO₂ 30–35), não a 25."
        data-feedback-wrong="Levar paciente Glasgow 7 com via aérea desprotegida ao TC é arriscado — broncoaspira. Manitol isolado sem proteção de via aérea é incompleto. Hiperventilação a EtCO₂ 25 causa vasoconstrição cerebral excessiva, piora a isquemia. Sequência correta: IOT → PIC → TC.">
      </div>
      <button type="button" class="btn btn-primary" data-act="next" style="display:none; margin-top:10px">Próximo →</button>
    </div>

    <!-- PASSO 6: E -->
    <div class="sim__step-card" data-correct="cisto">
      <p class="muted" style="margin-bottom:6px">Paciente intubado, em PTM. No log roll, você descobre: equimose perineal &quot;em borboleta&quot;, sangue no meato uretral, próstata elevada ao toque retal. Temperatura central: 34,2 °C. Equipe pede sonda Foley para monitorar débito urinário.</p>
      <h4 style="margin:0 0 8px"><span class="badge badge-e">E</span> Conduta no E?</h4>
      <div class="choice-row">
        <button type="button" class="choice" data-value="foley-cuidado">Passar sonda Foley com técnica delicada</button>
        <button type="button" class="choice" data-value="cisto">Cistostomia suprapúbica + aquecimento ativo (Bair Hugger + fluidos a 39 °C + hemocomponentes aquecidos)</button>
        <button type="button" class="choice" data-value="esperar">Não monitorar diurese — paciente já está em PTM</button>
        <button type="button" class="choice" data-value="naso-ng">Passar sonda nasogástrica para descompressão</button>
      </div>
      <div class="sim__feedback"
        data-feedback-correct="Os <strong>5 sinais de lesão de uretra</strong> contraindicam sondagem: uretrorragia, hematoma perineal, próstata elevada, equimose escrotal/labial, fratura de bacia. Com 3 dos 5 presentes: <strong>cistostomia suprapúbica</strong>. Hipotermia (34,2 °C) alimenta a tríade letal — aquecer já. (SNG seria contraindicada se houvesse sinal do guaxinim/Battle.)"
        data-feedback-wrong="Passar Foley com sinais de lesão de uretra pode <strong>completar uma lesão parcial</strong> — erro grave. Não monitorar diurese em paciente em PTM perde marcador essencial de perfusão. SNG aqui é menos prioritária; sem sinais de fratura de base, é tolerável, mas o foco é cistostomia + aquecimento.">
      </div>
      <button type="button" class="btn btn-primary" data-act="next" style="display:none; margin-top:10px">Próximo →</button>
    </div>

    <!-- SUMMARY -->
    <div class="sim__summary callout atls11" style="display:none; margin-top:14px">
      <strong class="callout__title">Resultado final</strong>
      <p>Sua pontuação: <strong data-score>– / 6</strong></p>
      <p><strong>Releia as decisões erradas.</strong> O simulador acaba aqui, mas o aprendizado começa no próximo passo: voltar à seção de cada letra (X · A · B · C · D · E) e revisitar exatamente os tópicos onde você errou. <em>Erro com feedback imediato é a forma mais rápida de fixar o protocolo</em>.</p>
      <p class="muted">Recarregue a página para repetir o caso ou navegue para outro caso integrador.</p>
    </div>
  </div>

  <div class="callout banca" style="margin-top:1rem">
    <strong class="callout__title">O que esse caso testa</strong>
    <p>Este caso integra <strong>todas as 6 letras</strong> em um cenário plausível de prova: x (sangramento arterial), A (não intubar Glasgow 13 estável), B (pneumotórax hipertensivo clínico), C (Score ABC e PTM antecipado), D (Glasgow caindo + anisocoria = herniação), E (5 sinais de lesão uretra + hipotermia). É exatamente o tipo de vinheta que aparece em ENARE, USP, UNIFESP, AMP, Einstein.</p>
  </div>
</section>`;

  S["calculadoras"] = () => `
<section class="section" data-id="calculadoras">
  <div class="block-head block-c">
    <div class="block-head__letter">Σ</div>
    <div class="block-head__copy">
      <h2>Calculadoras educacionais</h2>
      <p>Hub das 5 ferramentas interativas reunidas em uma página. <strong>Uso educacional</strong> — todas reproduzem critérios atuais (ATLS 11ª ed., 2025). Em prática clínica, sempre confirmar com referência atualizada e julgamento do plantonista.</p>
    </div>
  </div>

  <div class="callout aviso">
    <strong class="callout__title">Aviso de uso</strong>
    <p>Estas calculadoras são <strong>didáticas</strong>. Os resultados refletem critérios da literatura para apoio ao raciocínio — <em>não</em> substituem decisão clínica nem são software médico certificado.</p>
  </div>

  <h3 class="section__sub">1 · Glasgow Coma Scale</h3>
  <p class="muted">Selecione um item de cada componente (O · V · M). Classifica automaticamente em leve (13–15), moderado (9–12) ou grave (≤ 8) com ação imediata.</p>
  <div class="calc-glasgow card card-d" style="padding:18px 20px; margin: 14px 0">
    <div class="calc-grid" style="grid-template-columns: repeat(3, 1fr); gap: 14px">
      <div class="calc-block" data-glasgow="O">
        <strong>Abertura ocular (O)</strong>
        <div class="calc-opt" data-score="4" style="cursor:pointer; padding:6px 10px; border-radius:6px; margin-top:4px">4 · Espontânea</div>
        <div class="calc-opt" data-score="3" style="cursor:pointer; padding:6px 10px; border-radius:6px">3 · Ao chamado</div>
        <div class="calc-opt" data-score="2" style="cursor:pointer; padding:6px 10px; border-radius:6px">2 · À dor</div>
        <div class="calc-opt" data-score="1" style="cursor:pointer; padding:6px 10px; border-radius:6px">1 · Ausente</div>
      </div>
      <div class="calc-block" data-glasgow="V">
        <strong>Resposta verbal (V)</strong>
        <div class="calc-opt" data-score="5" style="cursor:pointer; padding:6px 10px; border-radius:6px; margin-top:4px">5 · Orientada</div>
        <div class="calc-opt" data-score="4" style="cursor:pointer; padding:6px 10px; border-radius:6px">4 · Confusa</div>
        <div class="calc-opt" data-score="3" style="cursor:pointer; padding:6px 10px; border-radius:6px">3 · Palavras inadequadas</div>
        <div class="calc-opt" data-score="2" style="cursor:pointer; padding:6px 10px; border-radius:6px">2 · Sons incompreensíveis</div>
        <div class="calc-opt" data-score="1" style="cursor:pointer; padding:6px 10px; border-radius:6px">1 · Ausente</div>
      </div>
      <div class="calc-block" data-glasgow="M">
        <strong>Resposta motora (M)</strong>
        <div class="calc-opt" data-score="6" style="cursor:pointer; padding:6px 10px; border-radius:6px; margin-top:4px">6 · Obedece comando</div>
        <div class="calc-opt" data-score="5" style="cursor:pointer; padding:6px 10px; border-radius:6px">5 · Localiza dor</div>
        <div class="calc-opt" data-score="4" style="cursor:pointer; padding:6px 10px; border-radius:6px">4 · Retira à dor</div>
        <div class="calc-opt" data-score="3" style="cursor:pointer; padding:6px 10px; border-radius:6px">3 · Flexão anormal</div>
        <div class="calc-opt" data-score="2" style="cursor:pointer; padding:6px 10px; border-radius:6px">2 · Extensão anormal</div>
        <div class="calc-opt" data-score="1" style="cursor:pointer; padding:6px 10px; border-radius:6px">1 · Ausente</div>
      </div>
    </div>
    <div class="calc-result" style="margin-top:14px">
      <span class="calc-result__num" style="font-size:32px; font-weight:700">–</span>
      <span class="calc-result__lbl" style="margin-left:10px">Selecione abertura ocular, resposta verbal e resposta motora.</span>
    </div>
  </div>

  <h3 class="section__sub">2 · Score ABC (Assessment of Blood Consumption)</h3>
  <p class="muted">Score do ATLS para indicar PTM antecipado. Cada item vale 1 ponto. <strong>≥ 2 pontos → ativar PTM 1:1:1</strong>.</p>
  <div class="calc-abc card card-c" style="padding:18px 20px; margin: 14px 0">
    <div class="calc-grid" style="grid-template-columns: repeat(2, 1fr); gap: 10px">
      <div class="calc-block calc-opt" data-abc style="cursor:pointer">
        <strong>Mecanismo penetrante</strong>
        <p class="muted" style="font-size:12px; margin:.2em 0 0">FAB ou FAF (não contuso).</p>
      </div>
      <div class="calc-block calc-opt" data-abc style="cursor:pointer">
        <strong>FC ≥ 120 bpm</strong>
        <p class="muted" style="font-size:12px; margin:.2em 0 0">Na chegada ao PS.</p>
      </div>
      <div class="calc-block calc-opt" data-abc style="cursor:pointer">
        <strong>PAS ≤ 90 mmHg</strong>
        <p class="muted" style="font-size:12px; margin:.2em 0 0">Na chegada.</p>
      </div>
      <div class="calc-block calc-opt" data-abc style="cursor:pointer">
        <strong>FAST positivo</strong>
        <p class="muted" style="font-size:12px; margin:.2em 0 0">Líquido livre em qualquer janela.</p>
      </div>
    </div>
    <div class="calc-result" style="margin-top:14px">
      <span class="calc-result__num" style="font-size:28px; font-weight:700">0</span>
      <span class="calc-result__lbl" style="margin-left:10px"><span class="pill p-mute">0/4</span> · Toque os critérios presentes para ver o veredicto.</span>
    </div>
  </div>

  <h3 class="section__sub">3 · Índice de Choque (Shock Index)</h3>
  <p class="muted">IC = FC ÷ PAS. Detecta choque oculto antes da queda da PA. Adulto normal: 0,5–0,7 · ≥ 0,8 sugere PTM · ≥ 1,0 choque franco.</p>
  <div class="calc-shock-index card card-c" style="padding:18px 20px; margin: 14px 0">
    <div class="row" style="gap:14px; flex-wrap:wrap">
      <label style="display:flex; flex-direction:column; gap:4px">
        <span class="muted" style="font-size:12px">FC (bpm)</span>
        <input type="number" data-si="fc" placeholder="ex.: 132" style="padding:8px 12px; border-radius:8px; border:1px solid var(--hairline); background:var(--surface); color:var(--txt); width:140px">
      </label>
      <label style="display:flex; flex-direction:column; gap:4px">
        <span class="muted" style="font-size:12px">PAS (mmHg)</span>
        <input type="number" data-si="pas" placeholder="ex.: 92" style="padding:8px 12px; border-radius:8px; border:1px solid var(--hairline); background:var(--surface); color:var(--txt); width:140px">
      </label>
    </div>
    <div class="calc-result" style="margin-top:14px">
      <span class="calc-result__num" style="font-size:28px; font-weight:700">–</span>
      <span class="calc-result__lbl" style="margin-left:10px">Insira FC (bpm) e PAS (mmHg) para calcular.</span>
    </div>
  </div>

  <h3 class="section__sub">4 · Cronômetro do TXA — janela de 3 h</h3>
  <p class="muted">Após 3 h, ácido tranexâmico <strong>aumenta mortalidade</strong> (CRASH-2). Antes, reduz. Cronômetro educativo da janela.</p>
  <div class="timer-txa card card-c" style="padding:18px 20px; margin: 14px 0">
    <div class="row" style="align-items:center; gap:16px; margin-bottom:10px">
      <div class="timer-box" style="font-size:22px">
        <span class="dot"></span>
        <span class="timer-num">03:00:00</span>
        <span class="timer-lbl">restante</span>
      </div>
      <button type="button" class="btn btn-primary" data-act="start">Iniciar</button>
      <button type="button" class="btn btn-ghost" data-act="reset">Reiniciar</button>
    </div>
    <div data-status>
      <span class="pill p-mute">Aguardando</span> Pressione <em>Iniciar</em> para simular o cronômetro do trauma.
    </div>
  </div>

  <h3 class="section__sub">5 · Cronômetro do torniquete — limite de 6 h</h3>
  <p class="muted">Visualizar tempo decorrido com marcos clínicos: membro viável (&lt; 3 h), atenção (3–6 h), risco de amputação (&gt; 6 h).</p>
  <div class="timer-tourniquet card card-x" style="padding:18px 20px; margin: 14px 0">
    <div class="row" style="align-items:center; gap:16px; margin-bottom:10px">
      <div class="timer-box" style="font-size:22px">
        <span class="dot"></span>
        <span class="timer-num">00:00:00</span>
        <span class="timer-lbl">decorrido</span>
      </div>
      <button type="button" class="btn btn-primary" data-act="start">Iniciar</button>
      <button type="button" class="btn btn-ghost" data-act="reset">Reiniciar</button>
    </div>
    <div data-status>
      <span class="pill p-mute">Aguardando</span> Pressione <em>Iniciar</em> para simular o relógio do torniquete.
    </div>
  </div>

  <div class="callout banca" style="margin-top:1rem">
    <strong class="callout__title">Por que essas 5 ferramentas?</strong>
    <p>São as decisões binárias que aparecem em <strong>quase toda questão de trauma</strong> em provas de residência: <em>intuba ou não? aciona PTM ou não? administra TXA ou não? espera ou opera?</em>. Treinar com essas calculadoras é treinar a banca — porque os critérios numéricos delas são exatamente o que a alternativa correta usa.</p>
  </div>
</section>`;

  S["tabelas-referencia"] = () => `
<section class="section" data-id="tabelas-referencia">
  <div class="block-head">
    <div class="block-head__letter">≡</div>
    <div class="block-head__copy">
      <h2>Tabelas de referência</h2>
      <p>Tabelas didáticas de drogas, doses, classificações e mnemônicos. Tudo o que se cobra em prova, organizado para revisão rápida pré-prova.</p>
    </div>
  </div>

  <div class="callout aviso">
    <strong class="callout__title">Uso educacional</strong>
    <p>Doses listadas têm caráter <strong>didático</strong>, baseadas em literatura atual (ATLS 11ª, Sabiston 22ª). Em prática clínica, sempre confirmar com referência atualizada e ajustar à condição do paciente.</p>
  </div>

  <h3 class="section__sub">1 · Drogas da intubação em sequência rápida (RSI)</h3>
  <div class="table-wrap">
    <table class="table-compare">
      <thead>
        <tr><th>Droga</th><th>Classe</th><th>Dose IV</th><th>Comentários</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>Etomidato</strong></td><td>Indutor (imidazol)</td><td>0,3 mg/kg</td><td>Estabilidade hemodinâmica. Cuidado com supressão adrenal em uso prolongado/repetido.</td></tr>
        <tr><td><strong>Cetamina</strong></td><td>Indutor dissociativo</td><td>1–2 mg/kg</td><td>Preserva ventilação espontânea. Boa em choque (libera catecolaminas). Atenção em TCE com HIC franca.</td></tr>
        <tr><td><strong>Propofol</strong></td><td>Indutor (alquilfenol)</td><td>1–2 mg/kg</td><td>Hipotensor — evitar em choque. Útil em TCE estável (reduz PIC).</td></tr>
        <tr><td><strong>Midazolam</strong></td><td>Benzodiazepínico</td><td>0,1–0,3 mg/kg</td><td>Mais lento; raramente 1ª escolha em RSI no trauma.</td></tr>
        <tr><td><strong>Succinilcolina</strong></td><td>BNM despolarizante</td><td>1–2 mg/kg</td><td>Início ~45 s. Contraindicações: queimadura &gt; 24 h, lesão medular &gt; 72 h, hipercalemia, hipertermia maligna, denervação crônica.</td></tr>
        <tr><td><strong>Rocurônio</strong></td><td>BNM não-despolarizante</td><td>1,0–1,2 mg/kg</td><td>Início ~60 s. Alternativa à succinilcolina sem hipercalemia. Reversão com sugamadex.</td></tr>
      </tbody>
    </table>
  </div>

  <h3 class="section__sub">2 · Drogas-chave do C (circulação)</h3>
  <div class="table-wrap">
    <table class="table-compare">
      <thead>
        <tr><th>Droga</th><th>Indicação</th><th>Dose</th><th>Janela / cuidado</th></tr>
      </thead>
      <tbody>
        <tr><td><strong>TXA (ácido tranexâmico)</strong></td><td>Antifibrinolítico em sangramento traumático</td><td>1 g IV em 10 min + 1 g em 8 h</td><td><strong>Janela ≤ 3 h</strong> do trauma. &gt; 3 h <em>aumenta mortalidade</em>.</td></tr>
        <tr><td><strong>Cristaloide aquecido (Ringer lactato)</strong></td><td>Reposição inicial</td><td>250–500 mL em bolus a 39 °C</td><td>ATLS 11. Não 1–2 L "de rotina". Reavaliar a cada bolus.</td></tr>
        <tr><td><strong>CH:PFC:plaquetas</strong></td><td>PTM 1:1:1</td><td>1 unidade : 1 unidade : 1 unidade</td><td>Acionar em ABC ≥ 2 ou IC ≥ 0,8.</td></tr>
        <tr><td><strong>Cálcio iônico (gluconato 10%)</strong></td><td>Hipocalcemia em PTM (citrato dos hemocomponentes)</td><td>1 g IV após cada 4 unidades de hemoderivados</td><td>Cálcio é cofator da cascata de coagulação.</td></tr>
        <tr><td><strong>Esmolol</strong></td><td>Anti-impulse therapy em lesão de aorta</td><td>Bolus 250–500 µg/kg → infusão 25–300 µg/kg/min</td><td>Alvo PAS &lt; 120, FC &lt; 80. Meia-vida ~9 min, titulável.</td></tr>
        <tr><td><strong>Nitroprussiato / Nicardipina</strong></td><td>Adjuvante em aorta após β-bloqueio</td><td>Conforme protocolo</td><td>Nunca isolado — taquicardia reflexa piora dP/dt.</td></tr>
        <tr><td><strong>Manitol 20%</strong></td><td>HIC com sinais de herniação</td><td>0,25–1 g/kg IV em 15 min</td><td>Alternativa: salina hipertônica 3%, 250 mL ou 5 mL/kg.</td></tr>
        <tr><td><strong>Noradrenalina</strong></td><td>Choque distributivo / neurogênico após volemia</td><td>Infusão 0,05–0,5 µg/kg/min titulada</td><td>Não substitui controle do sangramento em hipovolêmico.</td></tr>
      </tbody>
    </table>
  </div>

  <h3 class="section__sub">3 · Classes de choque hipovolêmico (ATLS)</h3>
  <div class="table-wrap">
    <table class="table-compare">
      <thead>
        <tr><th>Classe</th><th>Perda</th><th>FC</th><th>PA</th><th>FR</th><th>Diurese</th><th>Mental</th></tr>
      </thead>
      <tbody>
        <tr><td><span class="pill p-ok">I</span></td><td>&lt; 750 mL (&lt; 15%)</td><td>&lt; 100</td><td>Normal</td><td>14–20</td><td>&gt; 30 mL/h</td><td>Levemente ansioso</td></tr>
        <tr><td><span class="pill p-warn">II</span></td><td>750–1500 mL (15–30%)</td><td>100–120</td><td>Normal (PP↓)</td><td>20–30</td><td>20–30 mL/h</td><td>Ansioso</td></tr>
        <tr><td><span class="pill p-err">III</span></td><td>1500–2000 mL (30–40%)</td><td>120–140</td><td>Caída</td><td>30–40</td><td>5–15 mL/h</td><td>Confuso</td></tr>
        <tr><td><span class="pill p-err">IV</span></td><td>&gt; 2000 mL (&gt; 40%)</td><td>&gt; 140</td><td>Muito caída</td><td>&gt; 35</td><td>Anúria</td><td>Letárgico</td></tr>
      </tbody>
    </table>
  </div>

  <h3 class="section__sub">4 · Glasgow Coma Scale + classificação</h3>
  <div class="table-wrap">
    <table class="table-compare">
      <thead>
        <tr><th>Componente</th><th>Pontuação</th><th>Resposta</th></tr>
      </thead>
      <tbody>
        <tr><td rowspan="4"><strong>Abertura ocular (4)</strong></td><td>4</td><td>Espontânea</td></tr>
        <tr><td>3</td><td>Ao chamado</td></tr>
        <tr><td>2</td><td>À dor</td></tr>
        <tr><td>1</td><td>Ausente</td></tr>
        <tr><td rowspan="5"><strong>Verbal (5)</strong></td><td>5</td><td>Orientada</td></tr>
        <tr><td>4</td><td>Confusa</td></tr>
        <tr><td>3</td><td>Palavras inadequadas</td></tr>
        <tr><td>2</td><td>Sons incompreensíveis</td></tr>
        <tr><td>1</td><td>Ausente · &quot;T&quot; em paciente intubado</td></tr>
        <tr><td rowspan="6"><strong>Motora (6)</strong></td><td>6</td><td>Obedece comando</td></tr>
        <tr><td>5</td><td>Localiza dor</td></tr>
        <tr><td>4</td><td>Retira à dor</td></tr>
        <tr><td>3</td><td>Flexão anormal (decorticação)</td></tr>
        <tr><td>2</td><td>Extensão anormal (descerebração)</td></tr>
        <tr><td>1</td><td>Ausente</td></tr>
      </tbody>
    </table>
  </div>
  <p class="muted" style="margin-top:6px"><strong>Classificação:</strong> ≤ 8 grave (IOT) · 9–12 moderado · 13–15 leve.</p>

  <h3 class="section__sub">5 · Score ABC (PTM)</h3>
  <div class="table-wrap">
    <table class="table-compare">
      <thead><tr><th>Critério</th><th>Pontos</th><th>Cutoff</th></tr></thead>
      <tbody>
        <tr><td>Mecanismo penetrante</td><td>1</td><td>FAB / FAF</td></tr>
        <tr><td>FC à chegada</td><td>1</td><td>≥ 120 bpm</td></tr>
        <tr><td>PAS à chegada</td><td>1</td><td>≤ 90 mmHg</td></tr>
        <tr><td>FAST positivo</td><td>1</td><td>Líquido livre em qualquer janela</td></tr>
      </tbody>
    </table>
  </div>
  <p class="muted" style="margin-top:6px"><strong>≥ 2 pontos → ativar PTM 1:1:1.</strong> Sensibilidade ~75%, especificidade ~85%.</p>

  <h3 class="section__sub">6 · Classificação SVS de lesão de aorta</h3>
  <div class="table-wrap">
    <table class="table-compare">
      <thead><tr><th>Grau</th><th>Lesão</th><th>Conduta</th></tr></thead>
      <tbody>
        <tr><td><span class="pill p-ok">I</span></td><td>Flap intimal</td><td>Conservador + esmolol + imagem seriada</td></tr>
        <tr><td><span class="pill p-warn">II</span></td><td>Hematoma intramural</td><td>TEVAR eletivo precoce + esmolol</td></tr>
        <tr><td><span class="pill p-err">III</span></td><td>Pseudoaneurisma</td><td>TEVAR em ~24 h (cirurgia aberta se anatomia desfavorável)</td></tr>
        <tr><td><span class="pill p-err">IV</span></td><td>Rotura livre</td><td>Cirurgia aberta de emergência</td></tr>
      </tbody>
    </table>
  </div>

  <h3 class="section__sub">7 · Gustilo-Anderson (fraturas expostas)</h3>
  <div class="table-wrap">
    <table class="table-compare">
      <thead><tr><th>Tipo</th><th>Descrição</th><th>Manejo</th></tr></thead>
      <tbody>
        <tr><td><span class="pill p-ok">I</span></td><td>Ferida &lt; 1 cm, limpa, energia baixa</td><td>Lavagem + antibiótico + redução</td></tr>
        <tr><td><span class="pill p-warn">II</span></td><td>Ferida 1–10 cm, lesão moderada de partes moles</td><td>Lavagem + ATB + fixação adequada</td></tr>
        <tr><td><span class="pill p-err">IIIA</span></td><td>Ferida &gt; 10 cm, alta energia, cobertura óssea preservada</td><td>Lavagem + ATB de amplo espectro + fixação externa</td></tr>
        <tr><td><span class="pill p-err">IIIB</span></td><td>Perda de cobertura óssea</td><td>+ retalho de cobertura</td></tr>
        <tr><td><span class="pill p-err">IIIC</span></td><td>Lesão arterial associada</td><td>+ reparo vascular emergencial</td></tr>
      </tbody>
    </table>
  </div>
  <p class="muted" style="margin-top:6px">ATB profilático: cefazolina (I–II); cefalosporina + aminoglicosídeo (III); + penicilina se contaminação por solo/fezes. Janela ideal &lt; 6 h.</p>

  <h3 class="section__sub">8 · Regra dos 9 (Wallace) — % SCQ adulto</h3>
  <div class="table-wrap">
    <table class="table-compare">
      <thead><tr><th>Região</th><th>Adulto</th><th>Criança (1 ano)</th></tr></thead>
      <tbody>
        <tr><td>Cabeça/pescoço</td><td>9%</td><td>18%</td></tr>
        <tr><td>Cada membro superior</td><td>9% (4,5 ant + 4,5 post)</td><td>9%</td></tr>
        <tr><td>Tronco anterior</td><td>18%</td><td>18%</td></tr>
        <tr><td>Tronco posterior</td><td>18%</td><td>18%</td></tr>
        <tr><td>Cada membro inferior</td><td>18%</td><td>14%</td></tr>
        <tr><td>Períneo</td><td>1%</td><td>1%</td></tr>
      </tbody>
    </table>
  </div>
  <p class="muted" style="margin-top:6px"><strong>Parkland:</strong> Ringer lactato 4 mL × kg × % SCQ — metade nas 1as 8 h <em>desde o trauma</em>, metade nas 16 h seguintes. Apenas 2º profundo e 3º grau entram no cálculo.</p>

  <h3 class="section__sub">9 · 6 ameaças letais do tórax</h3>
  <div class="table-wrap">
    <table class="table-compare">
      <thead><tr><th>Ameaça</th><th>Diagnóstico</th><th>Conduta</th></tr></thead>
      <tbody>
        <tr><td>Pneumotórax hipertensivo</td><td>Clínico (não rx)</td><td>Toracocentese 5º EIC LAM/LAA</td></tr>
        <tr><td>Pneumotórax aberto</td><td>Ferida soprante</td><td>Curativo de 3 pontas + dreno em outro sítio</td></tr>
        <tr><td>Hemotórax maciço</td><td>Drenagem &gt; 1500 mL inicial OU &gt; 200 mL/h × 2–4 h</td><td>Toracotomia</td></tr>
        <tr><td>Tórax instável + contusão</td><td>≥ 2 arcos × 2 pontos + paradoxal</td><td>Analgesia + suporte; SSRF se refratário</td></tr>
        <tr><td>Tamponamento cardíaco</td><td>Beck + FAST subxifoide</td><td>Toracotomia / janela pericárdica</td></tr>
        <tr><td>Obstrução de via aérea</td><td>Estridor / silêncio em esforço</td><td>Manobras / IOT / crico</td></tr>
      </tbody>
    </table>
  </div>

  <h3 class="section__sub">10 · 5 sinais de lesão de uretra</h3>
  <div class="table-wrap">
    <table class="table-compare">
      <thead><tr><th>#</th><th>Sinal</th><th>Significado</th></tr></thead>
      <tbody>
        <tr><td>1</td><td>Uretrorragia</td><td>Sangue no meato uretral</td></tr>
        <tr><td>2</td><td>Hematoma perineal &quot;em borboleta&quot;</td><td>Extravasamento perineal</td></tr>
        <tr><td>3</td><td>Próstata elevada / flutuante</td><td>Toque retal — &quot;high-riding&quot;</td></tr>
        <tr><td>4</td><td>Equimose escrotal/labial</td><td>Hematoma genital externo</td></tr>
        <tr><td>5</td><td>Fratura instável de bacia</td><td>Especialmente em livro aberto</td></tr>
      </tbody>
    </table>
  </div>
  <p class="muted" style="margin-top:6px"><strong>Conduta:</strong> uretrocistografia retrógrada (estável) ou cistostomia suprapúbica (instável). Não passar Foley.</p>

  <h3 class="section__sub">11 · Equimoses-pista (semiologia do E)</h3>
  <div class="table-wrap">
    <table class="table-compare">
      <thead><tr><th>Sinal</th><th>Localização</th><th>Significado</th></tr></thead>
      <tbody>
        <tr><td>Cullen</td><td>Periumbilical</td><td>Sangramento intra/retroperitoneal</td></tr>
        <tr><td>Grey-Turner</td><td>Flancos</td><td>Sangramento retroperitoneal (pâncreas, duodeno, rim)</td></tr>
        <tr><td>Battle</td><td>Retroauricular</td><td>Fratura de fossa posterior</td></tr>
        <tr><td>Guaxinim</td><td>Periorbital bilateral</td><td>Fratura de fossa anterior</td></tr>
        <tr><td>Sinal do cinto</td><td>Abdome transverso</td><td>Lesão víscera oca + Chance lombar</td></tr>
        <tr><td>Otorraquia / rinorraquia</td><td>Ouvido / nariz</td><td>Fratura de base com fístula liquórica</td></tr>
      </tbody>
    </table>
  </div>

  <div class="callout banca" style="margin-top:1rem">
    <strong class="callout__title">Como usar antes da prova</strong>
    <p>Estas tabelas são pensadas para a <strong>última semana</strong>. Imprima (CSS de impressão já está configurado), grife os números que você sempre confunde (1500 mL, 200 mL/h × 2–4 h, ≥ 2 ABC, 0,8 IC, 3 h TXA, 6 h torniquete, 39 °C, 1:1:1, ≤ 8 IOT, 5–8 cm proximal, 5º EIC LAM, 3,5 cm pneumotórax). São esses números que decidem a alternativa.</p>
  </div>
</section>`;

  S["pegadinhas-banca"] = () => `
<section class="section" data-id="pegadinhas-banca">
  <div class="block-head">
    <div class="block-head__letter">!</div>
    <div class="block-head__copy">
      <h2>Pegadinhas de banca — armadilhas clássicas</h2>
      <p>As ~25 armadilhas que <strong>decidem a alternativa</strong> em ENARE, SUS-SP, USP, UNIFESP, AMP e Einstein. Estão organizadas <strong>letra por letra do XABCDE</strong> — cada cartão mostra a <em>casca</em> da pegadinha, o que a banca <em>quer</em> que você marque, e o que <strong>realmente</strong> dá ponto. Foque nos números: 1500 mL, 200 mL/h × 2–4 h, 0,8, 3 h, 6 h, 39 °C, ≤ 8, 5–8 cm, 5º EIC LAM, 3,5 cm, 1:1:1.</p>
    </div>
  </div>

  <div class="callout aviso">
    <strong class="callout__title">Como ler estas armadilhas</strong>
    <p>Cada cartão tem 3 partes: <strong>"A banca diz"</strong> (o enunciado típico), <strong>"O reflexo errado"</strong> (a alternativa que parece certa) e <strong>"O que vale ponto"</strong> (a conduta correta com o número/critério atual). Treine identificar a casca <em>antes</em> de olhar o gabarito.</p>
  </div>

  <h3 class="section__sub">X — Exsanguinação externa</h3>
  <div class="grid-2">
    <article class="card card-x">
      <header class="card__head"><span class="badge badge-x">P-01</span><h3 class="card__title">Torniquete "só em emergência extrema"</h3></header>
      <div class="card__body">
        <p><strong>A banca diz:</strong> "compressão direta foi insuficiente após 5 min".</p>
        <p><strong>Reflexo errado:</strong> "elevar membro + curativo compressivo" ou "clampear o vaso na cena".</p>
        <p><strong>Vale ponto:</strong> <strong>torniquete</strong> 5–8 cm proximal à lesão, apertar até <em>cessar o sangramento</em> (não só "diminuir"), <strong>marcar a hora</strong>, janela <strong>≤ 6 h</strong>. ATLS 11 promoveu o torniquete para <em>1ª linha</em> em hemorragia exsanguinante de membro.</p>
      </div>
    </article>
    <article class="card card-x">
      <header class="card__head"><span class="badge badge-x">P-02</span><h3 class="card__title">Pelve em livro aberto = "operar agora"</h3></header>
      <div class="card__body">
        <p><strong>A banca diz:</strong> hipotenso + pelve instável + FAST negativo.</p>
        <p><strong>Reflexo errado:</strong> "laparotomia exploradora imediata".</p>
        <p><strong>Vale ponto:</strong> <strong>cinta pélvica (binder)</strong> sobre os trocânteres → reposição com PTM 1:1:1 → <strong>angioembolização</strong> ou <strong>REBOA zona III</strong> se persistir choque. Laparotomia só se houver sangramento <em>intra-abdominal</em>.</p>
      </div>
    </article>
    <article class="card card-x">
      <header class="card__head"><span class="badge badge-x">P-03</span><h3 class="card__title">TXA "sempre que houver sangramento"</h3></header>
      <div class="card__body">
        <p><strong>A banca diz:</strong> politrauma há 5 horas, sangramento ativo.</p>
        <p><strong>Reflexo errado:</strong> "1 g de ácido tranexâmico em 10 min".</p>
        <p><strong>Vale ponto:</strong> TXA <strong>só dentro de 3 h</strong> do trauma. Após 3 h, estudo CRASH-2 mostrou <strong>aumento de mortalidade</strong>. Marcar a hora do evento, não a hora da admissão.</p>
      </div>
    </article>
  </div>

  <h3 class="section__sub">A — Via aérea &amp; coluna cervical</h3>
  <div class="grid-2">
    <article class="card card-a">
      <header class="card__head"><span class="badge badge-a">P-04</span><h3 class="card__title">Cânula nasofaríngea + Battle</h3></header>
      <div class="card__body">
        <p><strong>A banca diz:</strong> rebaixado, sangue na orofaringe, equimose mastóidea.</p>
        <p><strong>Reflexo errado:</strong> "passar cânula nasofaríngea".</p>
        <p><strong>Vale ponto:</strong> <strong>contraindicada</strong> — sinal de Battle / olhos de guaxinim / otorragia / rinorreia liquórica = suspeita de <em>fratura de base de crânio</em>. Cânula pode entrar no SNC. Use orofaríngea (se sem reflexo) ou IOT.</p>
      </div>
    </article>
    <article class="card card-a">
      <header class="card__head"><span class="badge badge-a">P-05</span><h3 class="card__title">Glasgow ≤ 8 = "intubar imediatamente"</h3></header>
      <div class="card__body">
        <p><strong>A banca diz:</strong> Glasgow 7, mantém saturação 96%, paciente "tranquilo".</p>
        <p><strong>Reflexo errado:</strong> "monitorar e reavaliar em 30 min".</p>
        <p><strong>Vale ponto:</strong> <strong>≤ 8 = IOT</strong>, sem exceção, mesmo com saturação boa. Não é sobre oxigenação — é sobre <em>proteção</em> da via aérea contra aspiração.</p>
      </div>
    </article>
    <article class="card card-a">
      <header class="card__head"><span class="badge badge-a">P-06</span><h3 class="card__title">"Não pode mexer no pescoço"</h3></header>
      <div class="card__body">
        <p><strong>A banca diz:</strong> trauma grave, suspeita de lesão cervical, IOT difícil.</p>
        <p><strong>Reflexo errado:</strong> "manter colar cervical durante toda a IOT".</p>
        <p><strong>Vale ponto:</strong> <strong>retirar a parte anterior do colar</strong> e fazer <strong>estabilização manual em linha</strong> (MILS) por um operador dedicado. Colar fechado <em>impede</em> a abertura da boca e piora a laringoscopia.</p>
      </div>
    </article>
    <article class="card card-a">
      <header class="card__head"><span class="badge badge-a">P-07</span><h3 class="card__title">Cricotireoidostomia em criança &lt; 12 anos</h3></header>
      <div class="card__body">
        <p><strong>A banca diz:</strong> criança 8 anos, "cannot intubate, cannot oxygenate".</p>
        <p><strong>Reflexo errado:</strong> "cricotireoidostomia cirúrgica".</p>
        <p><strong>Vale ponto:</strong> em <strong>&lt; 12 anos</strong>, fazer <strong>cricotireoidostomia por punção</strong> (jet ventilation transitória) e converter para definitiva no centro cirúrgico. Cartilagem cricoide é o anel mais estreito — risco de estenose com cirúrgica.</p>
      </div>
    </article>
  </div>

  <h3 class="section__sub">B — Respiração &amp; ventilação</h3>
  <div class="grid-2">
    <article class="card card-b">
      <header class="card__head"><span class="badge badge-b">P-08</span><h3 class="card__title">Curativo de 4 lados em FAB de tórax</h3></header>
      <div class="card__body">
        <p><strong>A banca diz:</strong> FAB com aspiração ("sucking chest wound").</p>
        <p><strong>Reflexo errado:</strong> "ocluir nos 4 lados com filme plástico".</p>
        <p><strong>Vale ponto:</strong> <strong>3 lados</strong> (válvula unidirecional) ou <strong>vent-chest seal comercial</strong>. 4 lados → vira <strong>pneumotórax hipertensivo</strong> em minutos.</p>
      </div>
    </article>
    <article class="card card-b">
      <header class="card__head"><span class="badge badge-b">P-09</span><h3 class="card__title">Toracocentese antes da radiografia</h3></header>
      <div class="card__body">
        <p><strong>A banca diz:</strong> hipotenso, jugular distendida, hipersonoridade direita, MV abolido.</p>
        <p><strong>Reflexo errado:</strong> "solicitar radiografia de tórax".</p>
        <p><strong>Vale ponto:</strong> <strong>diagnóstico clínico</strong> — descompressão imediata por <strong>punção em 5º EIC LAM</strong> (ATLS 10/11 mudaram do 2º EIC LMC), seguida de <strong>drenagem definitiva</strong>. Rx <em>não</em> faz parte do diagnóstico.</p>
      </div>
    </article>
    <article class="card card-b">
      <header class="card__head"><span class="badge badge-b">P-10</span><h3 class="card__title">"1500 mL de drenagem inicial = toracotomia"</h3></header>
      <div class="card__body">
        <p><strong>A banca diz:</strong> hemotórax, drenou 1100 mL no início e mantém 250 mL/h.</p>
        <p><strong>Reflexo errado:</strong> "como não atingiu 1500 mL, manter conduta clínica".</p>
        <p><strong>Vale ponto:</strong> ATLS 11 valoriza <strong>≥ 200 mL/h por 2–4 h</strong> ou paciente <em>persistentemente instável</em> apesar da reposição. O critério "1500 mL inicial" continua válido, mas <strong>não é o único</strong>. Indicar <strong>toracotomia</strong>.</p>
      </div>
    </article>
    <article class="card card-b">
      <header class="card__head"><span class="badge badge-b">P-11</span><h3 class="card__title">Pneumotórax pequeno = "drenar por segurança"</h3></header>
      <div class="card__body">
        <p><strong>A banca diz:</strong> pneumotórax simples de 2 cm, paciente estável, sem ventilação mecânica.</p>
        <p><strong>Reflexo errado:</strong> "drenagem torácica em selo d'água".</p>
        <p><strong>Vale ponto:</strong> <strong>&lt; 3,5 cm</strong> e estável → <strong>observação e O₂</strong>. Drenar se: ≥ 3,5 cm, sintomático, evolução para hipertensivo, transporte aéreo, ou necessidade de VPP/IOT (que vira hipertensivo em minutos).</p>
      </div>
    </article>
  </div>

  <h3 class="section__sub">C — Circulação &amp; choque</h3>
  <div class="grid-2">
    <article class="card card-c">
      <header class="card__head"><span class="badge badge-c">P-12</span><h3 class="card__title">FC normal exclui choque</h3></header>
      <div class="card__body">
        <p><strong>A banca diz:</strong> idoso 78 anos, β-bloqueador, AAT, FC 78 bpm, PA 100×60, frio e sudoreico.</p>
        <p><strong>Reflexo errado:</strong> "FC normal — choque improvável".</p>
        <p><strong>Vale ponto:</strong> <strong>β-bloqueador, marcapasso, atletas e idosos</strong> não taquicardizam. Use <strong>perfusão capilar &gt; 2 s, lactato, BE, índice de choque (FC/PAS &gt; 0,9)</strong>. FC normal <em>nunca</em> exclui choque.</p>
      </div>
    </article>
    <article class="card card-c">
      <header class="card__head"><span class="badge badge-c">P-13</span><h3 class="card__title">"Criança hipotensa = classe II"</h3></header>
      <div class="card__body">
        <p><strong>A banca diz:</strong> criança 6 anos, AAT, taquicardia, perfusão lenta, PA 90×60.</p>
        <p><strong>Reflexo errado:</strong> "PA preservada — choque leve, classe II".</p>
        <p><strong>Vale ponto:</strong> criança <strong>mantém PA até classe III</strong> (perda &gt; 30%). Quando hipotensa, já está <em>descompensada</em>. Sinais precoces: <strong>taquicardia, perfusão capilar lenta, alteração do nível de consciência</strong>.</p>
      </div>
    </article>
    <article class="card card-c">
      <header class="card__head"><span class="badge badge-c">P-14</span><h3 class="card__title">Cristaloide 2 L em todo politrauma</h3></header>
      <div class="card__body">
        <p><strong>A banca diz:</strong> hipotenso, sangramento ativo, ATLS 11.</p>
        <p><strong>Reflexo errado:</strong> "infundir 2 L de Ringer aquecido".</p>
        <p><strong>Vale ponto:</strong> ATLS 11 limitou cristaloide a <strong>≤ 1 L</strong> (era 2 L). Se sangramento ativo + hipotensão → <strong>protocolo de transfusão maciça (PTM) 1:1:1</strong> (CH:plasma:plaquetas) precoce. Hipotensão permissiva (PAS 80–90) <em>até</em> controle cirúrgico, exceto TCE.</p>
      </div>
    </article>
    <article class="card card-c">
      <header class="card__head"><span class="badge badge-c">P-15</span><h3 class="card__title">Score ABC ≥ 2 mas "esperar lactato"</h3></header>
      <div class="card__body">
        <p><strong>A banca diz:</strong> trauma penetrante, PAS 88, FC 124, FAST positivo.</p>
        <p><strong>Reflexo errado:</strong> "aguardar gasometria com lactato antes de ativar PTM".</p>
        <p><strong>Vale ponto:</strong> <strong>Score ABC ≥ 2</strong> (penetrante / PAS ≤ 90 / FC ≥ 120 / FAST+) <em>já indica</em> PTM. Não esperar lactato — sensibilidade ~75%, especificidade ~86%.</p>
      </div>
    </article>
    <article class="card card-c">
      <header class="card__head"><span class="badge badge-c">P-16</span><h3 class="card__title">Tamponamento — "drenar derrame"</h3></header>
      <div class="card__body">
        <p><strong>A banca diz:</strong> FAB precordial, hipotenso, jugular distendida, BNF.</p>
        <p><strong>Reflexo errado:</strong> "pericardiocentese de Marfan no PS".</p>
        <p><strong>Vale ponto:</strong> tríade de <strong>Beck</strong> + FAB precordial → <strong>janela pericárdica subxifoide</strong> ou <strong>toracotomia de reanimação</strong> se em parada testemunhada. Pericardiocentese é <em>ponte</em>, não definitivo.</p>
      </div>
    </article>
  </div>

  <h3 class="section__sub">D — Disfunção neurológica</h3>
  <div class="grid-2">
    <article class="card card-d">
      <header class="card__head"><span class="badge badge-d">P-17</span><h3 class="card__title">"Cushing aparece cedo"</h3></header>
      <div class="card__body">
        <p><strong>A banca diz:</strong> TCE grave, Glasgow 6, anisocoria.</p>
        <p><strong>Reflexo errado:</strong> "esperar tríade de Cushing antes de operar".</p>
        <p><strong>Vale ponto:</strong> <strong>Cushing</strong> (HAS + bradicardia + respiração irregular) é <strong>tardio e pré-letal</strong>. Anisocoria + Glasgow ≤ 8 já é hipertensão intracraniana com herniação iminente — <strong>medidas anti-HIC</strong> (cabeceira 30°, salina hipertônica/manitol, IOT, normocapnia) e <strong>TC + neurocirurgia</strong>.</p>
      </div>
    </article>
    <article class="card card-d">
      <header class="card__head"><span class="badge badge-d">P-18</span><h3 class="card__title">Glasgow do "verbal intubado"</h3></header>
      <div class="card__body">
        <p><strong>A banca diz:</strong> intubado, abre olho ao chamado, localiza dor.</p>
        <p><strong>Reflexo errado:</strong> "considerar verbal = 1, total = 8".</p>
        <p><strong>Vale ponto:</strong> intubado → notar <strong>"T"</strong> no verbal. Reportar <strong>O3 + V<sub>T</sub> + M5</strong> (não somar verbal). Banca também pode pedir uso da <em>Glasgow-Pupilar (GCS-P)</em> = GCS − pontuação pupilar (0/1/2).</p>
      </div>
    </article>
    <article class="card card-d">
      <header class="card__head"><span class="badge badge-d">P-19</span><h3 class="card__title">Hipotensão permissiva no TCE</h3></header>
      <div class="card__body">
        <p><strong>A banca diz:</strong> politrauma com TCE grave + sangramento abdominal, PAS 82.</p>
        <p><strong>Reflexo errado:</strong> "manter hipotensão permissiva (PAS 80–90)".</p>
        <p><strong>Vale ponto:</strong> <strong>TCE é exceção</strong> à hipotensão permissiva. Manter <strong>PAS ≥ 110</strong> (adultos) e <strong>SpO₂ ≥ 94%</strong> para preservar PPC. Hipotensão <em>e</em> hipóxia dobram a mortalidade no TCE.</p>
      </div>
    </article>
  </div>

  <h3 class="section__sub">E — Exposição &amp; ambiente</h3>
  <div class="grid-2">
    <article class="card card-e">
      <header class="card__head"><span class="badge badge-e">P-20</span><h3 class="card__title">Sondar antes de examinar o períneo</h3></header>
      <div class="card__body">
        <p><strong>A banca diz:</strong> politraumatizado, fratura de pelve, "passar sonda vesical".</p>
        <p><strong>Reflexo errado:</strong> "sondagem de demora 16 Fr".</p>
        <p><strong>Vale ponto:</strong> <strong>5 sinais</strong> contraindicam: uretrorragia, hematoma perineal "em borboleta", próstata elevada, equimose escrotal/grandes lábios, fratura instável de pelve. Conduta: <strong>uretrocistografia retrógrada</strong> → se lesão, <strong>cistostomia suprapúbica</strong>.</p>
      </div>
    </article>
    <article class="card card-e">
      <header class="card__head"><span class="badge badge-e">P-21</span><h3 class="card__title">"Aquecer só depois"</h3></header>
      <div class="card__body">
        <p><strong>A banca diz:</strong> Tax 35,2 °C ao chegar no PS, INR 1,7, lactato 4.</p>
        <p><strong>Reflexo errado:</strong> "estabilizar e aquecer no leito depois".</p>
        <p><strong>Vale ponto:</strong> <strong>aquecer agressivamente já no E</strong> — sala 28 °C, manta térmica de ar forçado, fluidos a 39 °C, retirar roupas molhadas. Hipotermia &lt; 35 °C alimenta a <strong>tríade letal</strong> (acidose + coagulopatia + hipotermia).</p>
      </div>
    </article>
    <article class="card card-e">
      <header class="card__head"><span class="badge badge-e">P-22</span><h3 class="card__title">Queimadura &gt; 20% — "Parkland 4 mL/kg/%"</h3></header>
      <div class="card__body">
        <p><strong>A banca diz:</strong> queimadura 30% SCQ, 70 kg, ATLS 11.</p>
        <p><strong>Reflexo errado:</strong> "Parkland 4 mL × 70 × 30 = 8400 mL em 24 h".</p>
        <p><strong>Vale ponto:</strong> ATLS 10/11 reduziram para <strong>2 mL/kg/% nas primeiras 24 h</strong> em adultos (Parkland modificado / fórmula do consenso). Metade nas primeiras 8 h. Titular pelo <strong>débito urinário 0,5 mL/kg/h</strong>.</p>
      </div>
    </article>
    <article class="card card-e">
      <header class="card__head"><span class="badge badge-e">P-23</span><h3 class="card__title">Fratura exposta — "ATB depois da cirurgia"</h3></header>
      <div class="card__body">
        <p><strong>A banca diz:</strong> Gustilo IIIA, em sala vermelha.</p>
        <p><strong>Reflexo errado:</strong> "ATB no centro cirúrgico".</p>
        <p><strong>Vale ponto:</strong> <strong>ATB &lt; 1 h da admissão</strong> (cefazolina ± aminoglicosídeo conforme Gustilo) + <strong>profilaxia antitetânica</strong> + lavagem com SF + redução grosseira + tala. Cirurgia definitiva em &lt; 6 h.</p>
      </div>
    </article>
  </div>

  <h3 class="section__sub">Transversais — pegadinhas que aparecem em qualquer letra</h3>
  <div class="grid-2">
    <article class="card compact">
      <header class="card__head"><span class="badge">P-24</span><h3 class="card__title">FAST negativo "exclui sangramento"</h3></header>
      <div class="card__body">
        <p>FAST <strong>negativo não exclui</strong> hemorragia abdominal — sensibilidade ~75–85%, baixa para retroperitônio. Em paciente <strong>instável + FAST −</strong>, pensar em <strong>pelve, tórax (cavidade), externa não vista, retroperitônio</strong>. Repetir FAST se piora.</p>
      </div>
    </article>
    <article class="card compact">
      <header class="card__head"><span class="badge">P-25</span><h3 class="card__title">"Reavaliar só no fim"</h3></header>
      <div class="card__body">
        <p>O XABCDE é <strong>cíclico</strong>, não linear. Qualquer piora ou intervenção (IOT, drenagem, transfusão) → <strong>voltar ao A</strong>. Banca adora cenário "após drenagem, paciente piora" — a resposta é <em>reavaliar a primária</em>, não pedir TC.</p>
      </div>
    </article>
  </div>

  <div class="callout dica">
    <strong class="callout__title">Antes da prova</strong>
    <p>Releia <strong>1×</strong> esta página. Cubra a parte de baixo dos cartões e tente prever <em>"o que vale ponto"</em> só lendo "o que a banca diz". Se errar 3 ou mais, volte para as páginas das letras correspondentes.</p>
  </div>
</section>`;

  S["flashcards"] = () => `
<section class="section" data-id="flashcards">
  <div class="block-head block-a">
    <div class="block-head__letter">↻</div>
    <div class="block-head__copy">
      <h2>Flashcards — revisão ativa</h2>
      <p>30 cards estilo Anki cobrindo <strong>todas as letras do XABCDE</strong>, atualizações <strong>ATLS 11 (2025)</strong>, mnemônicos clássicos e os números que decidem a alternativa. <strong>Clique no card</strong> para virar. Use no caminho do hospital, antes de dormir, ou na última hora antes da prova — recuperação ativa &gt; releitura passiva.</p>
    </div>
  </div>

  <div class="callout dica">
    <strong class="callout__title">Como usar</strong>
    <p>Tente <strong>responder em voz alta</strong> antes de virar o card. Se acertar de primeira → marque mental "✔". Se errar ou hesitar → revise a página da letra correspondente. Repita o ciclo 3× ao longo da semana antes da prova.</p>
  </div>

  <h3 class="section__sub">Bloco 1 — X (exsanguinação)</h3>
  <div class="flash-deck grid-3">
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-x">X</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">Janela máxima do torniquete antes de risco isquêmico inaceitável?</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-x">X</span></div>
          <p class="flash__a"><strong>≤ 6 horas.</strong> Marcar a hora exata. Não soltar fora do centro cirúrgico se choque/coagulopatia. 5–8 cm proximal à lesão, apertar até <em>cessar</em> sangramento.</p>
        </div>
      </div>
    </div>
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-x">X</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">Janela do TXA (ácido tranexâmico) e dose ATLS 11?</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-x">X</span></div>
          <p class="flash__a"><strong>≤ 3 h do trauma</strong>. 1 g IV em 10 min + 1 g em 8 h. Após 3 h: <em>aumenta mortalidade</em> (CRASH-2). Marcar hora do <strong>evento</strong>, não da admissão.</p>
        </div>
      </div>
    </div>
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-x">X</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">Mnemônico <strong>MARCH</strong> (TCCC pré-hospitalar)?</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-x">X</span></div>
          <p class="flash__a"><strong>M</strong>assive hemorrhage · <strong>A</strong>irway · <strong>R</strong>espirations · <strong>C</strong>irculation · <strong>H</strong>ead injury / Hypothermia. Inverte ABC: hemorragia <em>antes</em> de via aérea no campo.</p>
        </div>
      </div>
    </div>
  </div>

  <h3 class="section__sub">Bloco 2 — A (via aérea)</h3>
  <div class="flash-deck grid-3">
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-a">A</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">Mnemônico <strong>LEMON</strong> para via aérea difícil?</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-a">A</span></div>
          <p class="flash__a"><strong>L</strong>ook · <strong>E</strong>valuate 3-3-2 · <strong>M</strong>allampati · <strong>O</strong>bstruction · <strong>N</strong>eck mobility. Detecta IOT difícil <em>antes</em> de tentar.</p>
        </div>
      </div>
    </div>
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-a">A</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">Regra <strong>3-3-2</strong>?</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-a">A</span></div>
          <p class="flash__a"><strong>3</strong> dedos entre dentes · <strong>3</strong> dedos mento-hióide · <strong>2</strong> dedos hioide-cartilagem tireoide. &lt; valores → laringoscopia provavelmente difícil.</p>
        </div>
      </div>
    </div>
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-a">A</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">Glasgow ≤ ? = via aérea definitiva</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-a">A</span></div>
          <p class="flash__a"><strong>≤ 8 = IOT</strong>. Mesmo com saturação boa. É <em>proteção</em> contra aspiração, não oxigenação. Sequência rápida (RSI) com MILS.</p>
        </div>
      </div>
    </div>
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-a">A</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">Plano A→B→C→D na via aérea</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-a">A</span></div>
          <p class="flash__a"><strong>A:</strong> laringoscopia direta/vídeo (≤ 3 tentativas) · <strong>B:</strong> dispositivo extraglótico (LMA / i-gel) · <strong>C:</strong> ventilação com máscara + 2 operadores · <strong>D:</strong> via aérea cirúrgica (cricotireoidostomia).</p>
        </div>
      </div>
    </div>
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-a">A</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">Cricotireoidostomia em criança &lt; 12 anos?</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-a">A</span></div>
          <p class="flash__a"><strong>Por punção</strong> (jet ventilation) — não cirúrgica. Cricoide é o anel mais estreito; cirúrgica → estenose. Conversão para definitiva no CC.</p>
        </div>
      </div>
    </div>
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-a">A</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">Mnemônico <strong>AMPLE</strong> / SAMPLE?</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-a">A</span></div>
          <p class="flash__a"><strong>A</strong>lergias · <strong>M</strong>edicamentos · <strong>P</strong>assado patológico · <strong>L</strong>ast meal · <strong>E</strong>ventos. SAMPLE adiciona <strong>S</strong>inais/Sintomas no início.</p>
        </div>
      </div>
    </div>
  </div>

  <h3 class="section__sub">Bloco 3 — B (respiração)</h3>
  <div class="flash-deck grid-3">
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-b">B</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">Mnemônico <strong>ATOMIC</strong> — 6 ameaças torácicas imediatas</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-b">B</span></div>
          <p class="flash__a"><strong>A</strong>irway disruption · <strong>T</strong>ension pneumothorax · <strong>O</strong>pen pneumothorax · <strong>M</strong>assive hemothorax · <strong>I</strong>nstabilidade torácica (flail) · <strong>C</strong>ardiac tamponade.</p>
        </div>
      </div>
    </div>
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-b">B</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">Local da descompressão de pneumotórax hipertensivo (ATLS 11)?</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-b">B</span></div>
          <p class="flash__a"><strong>5º EIC, linha axilar média</strong> (mudou do 2º EIC LMC). Cateter mais longo (8 cm) + drenagem definitiva 5º EIC LAM tubo 28–32 Fr.</p>
        </div>
      </div>
    </div>
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-b">B</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">Critérios de toracotomia em hemotórax (ATLS 11)?</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-b">B</span></div>
          <p class="flash__a"><strong>1500 mL inicial</strong> ou <strong>≥ 200 mL/h por 2–4 h</strong> ou <strong>instabilidade persistente</strong> apesar da reposição. Lembrar PTM 1:1:1.</p>
        </div>
      </div>
    </div>
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-b">B</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">Curativo de FAB torácica aberta — quantos lados?</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-b">B</span></div>
          <p class="flash__a"><strong>3 lados</strong> (válvula unidirecional) ou vent-chest seal comercial. 4 lados → <em>pneumotórax hipertensivo</em>.</p>
        </div>
      </div>
    </div>
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-b">B</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">Tamanho de pneumotórax simples para drenar?</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-b">B</span></div>
          <p class="flash__a"><strong>≥ 3,5 cm</strong> (medida na parede lateral em TC) ou sintomático/instável/VPP/transporte aéreo. &lt; 3,5 cm e estável → observação + O₂.</p>
        </div>
      </div>
    </div>
  </div>

  <h3 class="section__sub">Bloco 4 — C (circulação)</h3>
  <div class="flash-deck grid-3">
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-c">C</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">Score <strong>ABC</strong> — 4 critérios e ponto de corte</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-c">C</span></div>
          <p class="flash__a"><strong>Penetrante · PAS ≤ 90 · FC ≥ 120 · FAST +</strong>. Cada critério vale 1 ponto. <strong>≥ 2 → ativar PTM 1:1:1</strong>.</p>
        </div>
      </div>
    </div>
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-c">C</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">Índice de choque (IC) — fórmula e ponto de corte</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-c">C</span></div>
          <p class="flash__a"><strong>IC = FC ÷ PAS</strong>. Normal 0,5–0,7. <strong>&gt; 0,9 = choque oculto</strong>; &gt; 1,0 = preditor de PTM. Útil em idosos / β-bloqueador onde FC isolada engana.</p>
        </div>
      </div>
    </div>
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-c">C</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">Volume máximo de cristaloide na ressuscitação ATLS 11?</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-c">C</span></div>
          <p class="flash__a"><strong>≤ 1 L</strong> (era 2 L no ATLS 10). Acima disso → preferir <strong>hemoderivados 1:1:1</strong>. Hipotensão permissiva PAS 80–90 até controle cirúrgico (exceto TCE).</p>
        </div>
      </div>
    </div>
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-c">C</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">Tríade de <strong>Beck</strong></p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-c">C</span></div>
          <p class="flash__a"><strong>Hipotensão · jugular distendida · BNF</strong> (bulhas hipofonéticas). Tamponamento cardíaco. + pulso paradoxal &gt; 10 mmHg. Conduta: janela pericárdica subxifoide ou toracotomia de reanimação.</p>
        </div>
      </div>
    </div>
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-c">C</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">Tríade letal do trauma</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-c">C</span></div>
          <p class="flash__a"><strong>Acidose · coagulopatia · hipotermia</strong>. Cada componente alimenta os outros. Quebrar cedo: hemoderivados 1:1:1, fluidos a 39 °C, TXA &lt; 3 h, sala a 28 °C.</p>
        </div>
      </div>
    </div>
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-c">C</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">Em que classe a criança fica hipotensa?</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-c">C</span></div>
          <p class="flash__a"><strong>Classe III</strong> (perda &gt; 30%). Antes disso, mantém PA. Sinais precoces: <strong>taquicardia, perfusão lenta, alteração de consciência</strong>.</p>
        </div>
      </div>
    </div>
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-c">C</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">Classificação SVS de aorta (I–IV) — qual indica cirurgia urgente?</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-c">C</span></div>
          <p class="flash__a"><strong>I:</strong> íntima · <strong>II:</strong> intramural · <strong>III:</strong> pseudoaneurisma · <strong>IV:</strong> ruptura. <strong>III–IV → reparo endovascular (TEVAR) urgente</strong>; I–II → controle pressórico (PAS ≤ 120, FC ≤ 80) e seguimento.</p>
        </div>
      </div>
    </div>
  </div>

  <h3 class="section__sub">Bloco 5 — D (neuro)</h3>
  <div class="flash-deck grid-3">
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-d">D</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">Mnemônico <strong>AVDI</strong></p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-d">D</span></div>
          <p class="flash__a"><strong>A</strong>lerta · responsivo a estímulo <strong>V</strong>erbal · responsivo à <strong>D</strong>or · <strong>I</strong>nconsciente. Triagem rápida pré-Glasgow.</p>
        </div>
      </div>
    </div>
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-d">D</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">Tríade de Cushing</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-d">D</span></div>
          <p class="flash__a"><strong>HAS · bradicardia · respiração irregular</strong>. Sinal <em>tardio e pré-letal</em> de HIC. Não esperar — anisocoria + Glasgow ≤ 8 já é herniação iminente.</p>
        </div>
      </div>
    </div>
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-d">D</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">Alvos no TCE grave (PAS, SpO₂, PaCO₂, T°)</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-d">D</span></div>
          <p class="flash__a"><strong>PAS ≥ 110 · SpO₂ ≥ 94% · PaCO₂ 35–40 · T° 36–37 °C</strong>. Cabeceira 30°. Hipertônica 3% ou manitol 0,25–1 g/kg se HIC. <em>Sem hipotensão permissiva</em> em TCE.</p>
        </div>
      </div>
    </div>
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-d">D</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">Critérios <strong>NEXUS</strong> para liberar coluna cervical</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-d">D</span></div>
          <p class="flash__a">Sem: <strong>1)</strong> dor cervical posterior · <strong>2)</strong> intoxicação · <strong>3)</strong> alteração de consciência · <strong>4)</strong> déficit neurológico focal · <strong>5)</strong> lesão dolorosa distratora. Todos negativos → libera sem imagem.</p>
        </div>
      </div>
    </div>
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-d">D</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">Regra <strong>canadense</strong> de coluna cervical — 3 perguntas</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-d">D</span></div>
          <p class="flash__a"><strong>1)</strong> Fator de alto risco (≥ 65 a, mecanismo perigoso, parestesia)? · <strong>2)</strong> Fator de baixo risco que permita avaliação? · <strong>3)</strong> Roda pescoço 45° ativamente? Se sim em 3 → libera.</p>
        </div>
      </div>
    </div>
  </div>

  <h3 class="section__sub">Bloco 6 — E (exposição) &amp; transversais</h3>
  <div class="flash-deck grid-3">
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-e">E</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">5 sinais de lesão de uretra</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-e">E</span></div>
          <p class="flash__a"><strong>1)</strong> Uretrorragia · <strong>2)</strong> Hematoma perineal "borboleta" · <strong>3)</strong> Próstata elevada (high-riding) · <strong>4)</strong> Equimose escrotal/grandes lábios · <strong>5)</strong> Fratura instável de pelve. Conduta: uretrocistografia retrógrada → cistostomia suprapúbica.</p>
        </div>
      </div>
    </div>
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-e">E</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">Regra dos 9 de <strong>Wallace</strong> (adulto) — cabeça/MS/MI/tronco</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-e">E</span></div>
          <p class="flash__a"><strong>Cabeça 9% · MS 9% cada · MI 18% cada · tronco anterior 18% · tronco posterior 18% · genital 1%</strong>. Crianças: cabeça 18% / MI 13,5% (cabeça maior, perna menor).</p>
        </div>
      </div>
    </div>
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-e">E</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">Parkland modificado (ATLS 11) — fluidos na queimadura</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-e">E</span></div>
          <p class="flash__a"><strong>2 mL/kg/% nas 1ªs 24 h</strong> (era 4). Metade nas primeiras 8 h. Titular pelo <strong>débito urinário 0,5 mL/kg/h</strong> (1 mL/kg/h em criança).</p>
        </div>
      </div>
    </div>
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge badge-e">E</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">Classificação de <strong>Gustilo-Anderson</strong> em fratura exposta</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge badge-e">E</span></div>
          <p class="flash__a"><strong>I:</strong> &lt; 1 cm, limpa · <strong>II:</strong> 1–10 cm, dano moderado · <strong>IIIA:</strong> &gt; 10 cm, cobertura adequada · <strong>IIIB:</strong> precisa retalho · <strong>IIIC:</strong> lesão vascular. ATB &lt; 1 h. III → adicionar aminoglicosídeo.</p>
        </div>
      </div>
    </div>
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge">★</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">PTM 1:1:1 — significado</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge">★</span></div>
          <p class="flash__a"><strong>1 unidade de concentrado de hemácias : 1 plasma fresco congelado : 1 plaquetas</strong> (aférese ou pool). Reproduz sangue total. Indicado se Score ABC ≥ 2 ou hemorragia maciça previsível.</p>
        </div>
      </div>
    </div>
    <div class="flash">
      <div class="flash__inner">
        <div class="flash__face">
          <div class="flash__head"><span class="badge">★</span><span class="flash__hint">clique para virar</span></div>
          <p class="flash__q">XABCDE é linear ou cíclico?</p>
        </div>
        <div class="flash__face flash__face--back">
          <div class="flash__head"><span class="badge">★</span></div>
          <p class="flash__a"><strong>Cíclico.</strong> Qualquer piora ou intervenção (IOT, drenagem, transfusão) → <em>voltar ao A</em>. Reavaliação contínua é a regra de ouro do ATLS.</p>
        </div>
      </div>
    </div>
  </div>

  <div class="callout dica">
    <strong class="callout__title">Spaced repetition caseira</strong>
    <p>Marque os cards que você errou hoje. Revise <strong>amanhã, em 3 dias e em 7 dias</strong>. Esse intervalo é o que transfere conhecimento da memória de trabalho para a de longo prazo (curva de Ebbinghaus).</p>
  </div>
</section>`;

  S["quiz-geral"] = () => `
<section class="section" data-id="quiz-geral">
  <div class="block-head block-c">
    <div class="block-head__letter">?</div>
    <div class="block-head__copy">
      <h2>Quiz geral — 25 questões autorais</h2>
      <p>Questões <strong>inspiradas no estilo</strong> de ENARE, SUS-SP, USP, UNIFESP, AMP e Einstein — <em>sem cópia direta</em>. Cada uma cobra <strong>um número, um critério ou uma armadilha</strong> que costuma decidir a alternativa. Clique na alternativa para ver feedback educacional. Não há tempo limite — o objetivo é <strong>raciocinar</strong>, não correr.</p>
    </div>
  </div>

  <div class="callout dica">
    <strong class="callout__title">Como aproveitar</strong>
    <p>Tente <strong>justificar mentalmente</strong> a alternativa <em>antes</em> de clicar. Depois leia o feedback — mesmo se acertou, ele explica <strong>por que cada distrator está errado</strong>. Refaça o quiz inteiro 48 h depois para consolidar.</p>
  </div>

  <h3 class="section__sub">Bloco 1 — X / pré-hospitalar</h3>

  <article class="quiz" data-correct="2">
    <div class="quiz__head">
      <span class="quiz__num">Q01</span>
      <span class="badge badge-x quiz__tag">X · TXA</span>
    </div>
    <p class="quiz__stem">Homem de 28 anos, vítima de FAF abdominal há <strong>4 horas</strong>. Chega ao PS hipotenso (PAS 78), FC 132, FAST positivo. A equipe pergunta sobre TXA. Conduta correta:</p>
    <div class="quiz__alts">
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">A</span><span class="quiz__alt-txt">1 g IV em 10 min + 1 g em 8 h, sempre indicado em politrauma com sangramento.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">B</span><span class="quiz__alt-txt">2 g IV em bolus único, dose dobrada por estar fora da janela.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">C</span><span class="quiz__alt-txt">Não administrar TXA — fora da janela de 3 h, há aumento de mortalidade.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">D</span><span class="quiz__alt-txt">Aguardar fibrinogênio e TEG para decidir.</span></button>
    </div>
    <div class="quiz__feedback">A janela do TXA é <strong>≤ 3 h do trauma</strong> (CRASH-2 e CRASH-3). Após 3 h, há <em>aumento</em> de mortalidade — o fármaco torna-se pró-trombótico em coágulos já formados. A dose de carga não muda fora da janela; o que muda é a <strong>indicação</strong>.</div>
  </article>

  <article class="quiz" data-correct="0">
    <div class="quiz__head">
      <span class="quiz__num">Q02</span>
      <span class="badge badge-x quiz__tag">X · torniquete</span>
    </div>
    <p class="quiz__stem">Vítima de explosão com amputação subtotal de coxa direita, sangramento pulsátil. Chega à sala vermelha com torniquete improvisado pré-hospitalar há <strong>4 horas</strong>, eficaz. PA 105×70. Conduta:</p>
    <div class="quiz__alts">
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">A</span><span class="quiz__alt-txt">Manter torniquete, levar ao centro cirúrgico para controle vascular antes de 6 h.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">B</span><span class="quiz__alt-txt">Soltar imediatamente o torniquete na sala vermelha para reperfundir.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">C</span><span class="quiz__alt-txt">Trocar por curativo compressivo simples antes da cirurgia.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">D</span><span class="quiz__alt-txt">Adicionar segundo torniquete proximal "por segurança" e aguardar.</span></button>
    </div>
    <div class="quiz__feedback">Torniquete eficaz <strong>não se solta na sala vermelha</strong>: faz-se controle vascular no <strong>centro cirúrgico</strong>. A janela isquêmica segura é <strong>≤ 6 h</strong>. Trocar por curativo compressivo neste cenário (sangramento pulsátil controlado) é receita para hemorragia recorrente. Adicionar torniquete proximal é desnecessário se o atual está eficaz.</div>
  </article>

  <article class="quiz" data-correct="1">
    <div class="quiz__head">
      <span class="quiz__num">Q03</span>
      <span class="badge badge-x quiz__tag">X · pelve</span>
    </div>
    <p class="quiz__stem">Motociclista 35 a, AAT, hipotenso (PAS 80), pelve instável em livro aberto, FAST <strong>negativo</strong>. Conduta inicial mais adequada:</p>
    <div class="quiz__alts">
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">A</span><span class="quiz__alt-txt">Laparotomia exploradora imediata.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">B</span><span class="quiz__alt-txt">Cinta pélvica sobre os trocânteres, PTM 1:1:1, angioembolização ou REBOA zona III.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">C</span><span class="quiz__alt-txt">Fixador externo pélvico em sala vermelha por ortopedista.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">D</span><span class="quiz__alt-txt">TC com contraste antes de qualquer intervenção mecânica.</span></button>
    </div>
    <div class="quiz__feedback">Pelve em livro aberto + hipotensão + FAST negativo aponta para sangramento <strong>retroperitoneal</strong>. A 1ª medida é <strong>fechar o anel pélvico</strong> com cinta sobre os trocânteres (não sobre as cristas ilíacas). PTM 1:1:1 e <strong>angioembolização</strong> ou <strong>REBOA zona III</strong> compõem o pacote. Laparotomia "abre o tampão" e piora o sangramento. Fixador externo é etapa cirúrgica posterior. TC em paciente instável é erro grosseiro.</div>
  </article>

  <h3 class="section__sub">Bloco 2 — A (via aérea)</h3>

  <article class="quiz" data-correct="2">
    <div class="quiz__head">
      <span class="quiz__num">Q04</span>
      <span class="badge badge-a quiz__tag">A · base de crânio</span>
    </div>
    <p class="quiz__stem">Vítima de queda de altura, Glasgow 12, equimose mastóidea bilateral (sinal de Battle), olhos de guaxinim, sangue no canal auditivo. Necessita de adjuvante de via aérea por roncos. Qual <strong>NÃO</strong> deve ser usado?</p>
    <div class="quiz__alts">
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">A</span><span class="quiz__alt-txt">Cânula orofaríngea (Guedel), se sem reflexo de vômito.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">B</span><span class="quiz__alt-txt">Sequência rápida de intubação com MILS.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">C</span><span class="quiz__alt-txt">Cânula nasofaríngea bem lubrificada.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">D</span><span class="quiz__alt-txt">Aspiração da orofaringe com Yankauer.</span></button>
    </div>
    <div class="quiz__feedback">Sinal de Battle, olhos de guaxinim, otorragia e rinorreia liquórica indicam <strong>fratura de base de crânio</strong>. A cânula nasofaríngea pode <em>perfurar a lâmina crivosa</em> e entrar no SNC — <strong>contraindicação absoluta</strong>. As demais opções são apropriadas.</div>
  </article>

  <article class="quiz" data-correct="0">
    <div class="quiz__head">
      <span class="quiz__num">Q05</span>
      <span class="badge badge-a quiz__tag">A · pediátrica</span>
    </div>
    <p class="quiz__stem">Criança de 6 anos, trauma facial extenso com sangramento, "cannot intubate, cannot oxygenate" após 3 tentativas e máscara laríngea sem sucesso. Conduta:</p>
    <div class="quiz__alts">
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">A</span><span class="quiz__alt-txt">Cricotireoidostomia por punção com jet ventilation, transitória até CC.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">B</span><span class="quiz__alt-txt">Cricotireoidostomia cirúrgica com cânula 6.0.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">C</span><span class="quiz__alt-txt">Traqueostomia percutânea no PS.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">D</span><span class="quiz__alt-txt">Manter ventilação com BVM até chegar ao centro cirúrgico.</span></button>
    </div>
    <div class="quiz__feedback">Em &lt; 12 anos, a cartilagem cricoide é o anel mais estreito; cricotireoidostomia <strong>cirúrgica</strong> tem alto risco de estenose subglótica. Faz-se <strong>cricotireoidostomia por punção</strong> com cateter 14 G + jet ventilation como ponte para via aérea definitiva no centro cirúrgico. Manter BVM em CICO é deixar a criança parar.</div>
  </article>

  <article class="quiz" data-correct="3">
    <div class="quiz__head">
      <span class="quiz__num">Q06</span>
      <span class="badge badge-a quiz__tag">A · Glasgow</span>
    </div>
    <p class="quiz__stem">TCE grave, Glasgow 7, saturação 96% em ar ambiente, hemodinamicamente estável. Decisão sobre via aérea:</p>
    <div class="quiz__alts">
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">A</span><span class="quiz__alt-txt">Manter em O₂ por máscara não-reinalante, reavaliar em 30 min.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">B</span><span class="quiz__alt-txt">Cânula orofaríngea + monitor — saturação está adequada.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">C</span><span class="quiz__alt-txt">Aguardar TC para decidir.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">D</span><span class="quiz__alt-txt">Sequência rápida de intubação com MILS — Glasgow ≤ 8 = via aérea definitiva.</span></button>
    </div>
    <div class="quiz__feedback">A regra <strong>Glasgow ≤ 8 = IOT</strong> não depende de saturação. O objetivo é <strong>proteção contra aspiração</strong> e controle ventilatório (PaCO₂ 35–40 no TCE). Adiar a IOT por TC ou "monitorar" é o erro clássico que aparece em prova de residência.</div>
  </article>

  <h3 class="section__sub">Bloco 3 — B (respiração)</h3>

  <article class="quiz" data-correct="1">
    <div class="quiz__head">
      <span class="quiz__num">Q07</span>
      <span class="badge badge-b quiz__tag">B · pneumotórax</span>
    </div>
    <p class="quiz__stem">Trauma fechado, hipotenso, jugular distendida, hipersonoridade à direita, MV abolido, desvio de traqueia para a esquerda. Próximo passo:</p>
    <div class="quiz__alts">
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">A</span><span class="quiz__alt-txt">Solicitar radiografia de tórax para confirmar.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">B</span><span class="quiz__alt-txt">Descompressão imediata com agulha no 5º EIC linha axilar média à direita.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">C</span><span class="quiz__alt-txt">Drenagem em selo d'água diretamente, sem descompressão prévia.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">D</span><span class="quiz__alt-txt">Toracotomia de reanimação à esquerda.</span></button>
    </div>
    <div class="quiz__feedback">Pneumotórax hipertensivo é <strong>diagnóstico clínico</strong> — radiografia atrasa e mata. ATLS 11 mudou o local de descompressão para <strong>5º EIC LAM</strong> (era 2º EIC LMC), por melhor sucesso em adultos com parede torácica espessa. Após descompressão, segue drenagem definitiva 5º EIC LAM com tubo 28–32 Fr.</div>
  </article>

  <article class="quiz" data-correct="2">
    <div class="quiz__head">
      <span class="quiz__num">Q08</span>
      <span class="badge badge-b quiz__tag">B · hemotórax</span>
    </div>
    <p class="quiz__stem">FAB transfixante de hemitórax direito. Drenagem inicial: <strong>900 mL</strong>. Mantido em selo d'água, drena <strong>250 mL/h por 3 horas consecutivas</strong>, com PAS 95 sustentada por hemoderivados. Conduta:</p>
    <div class="quiz__alts">
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">A</span><span class="quiz__alt-txt">Manter conduta clínica: não atingiu 1500 mL inicial nem 2000 mL totais.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">B</span><span class="quiz__alt-txt">Pleurodese química beira-leito.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">C</span><span class="quiz__alt-txt">Toracotomia — débito ≥ 200 mL/h por 2–4 h é critério atual.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">D</span><span class="quiz__alt-txt">Trocar dreno por outro de maior calibre.</span></button>
    </div>
    <div class="quiz__feedback">ATLS 11 valoriza o <strong>débito sustentado ≥ 200 mL/h por 2–4 h</strong> como critério de toracotomia, ao lado do clássico ≥ 1500 mL inicial e da instabilidade persistente. Esperar atingir 1500 mL inicial é um erro recorrente em prova.</div>
  </article>

  <article class="quiz" data-correct="0">
    <div class="quiz__head">
      <span class="quiz__num">Q09</span>
      <span class="badge badge-b quiz__tag">B · FAB aberta</span>
    </div>
    <p class="quiz__stem">FAB de hemitórax esquerdo com lesão soprante ("sucking chest wound"). Sem material comercial disponível. Improvisação correta:</p>
    <div class="quiz__alts">
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">A</span><span class="quiz__alt-txt">Plástico fixado em 3 lados (válvula unidirecional).</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">B</span><span class="quiz__alt-txt">Plástico fixado nos 4 lados, para vedação total.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">C</span><span class="quiz__alt-txt">Compressa seca + esparadrapo apenas no centro.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">D</span><span class="quiz__alt-txt">Não cobrir — pode evoluir para hipertensivo.</span></button>
    </div>
    <div class="quiz__feedback"><strong>3 lados</strong> formam válvula unidirecional: ar sai na expiração, não entra na inspiração. <strong>4 lados</strong> → vira pneumotórax hipertensivo em minutos. Não cobrir é manter o pneumotórax aberto e o trabalho ventilatório paradoxal.</div>
  </article>

  <h3 class="section__sub">Bloco 4 — C (circulação)</h3>

  <article class="quiz" data-correct="3">
    <div class="quiz__head">
      <span class="quiz__num">Q10</span>
      <span class="badge badge-c quiz__tag">C · choque oculto</span>
    </div>
    <p class="quiz__stem">Idoso 78 a, em uso de β-bloqueador, AAT lateral. PA 100×60, FC <strong>78</strong>, frio e sudoreico, perfusão capilar 4 s. Lactato 4,2. Avaliação:</p>
    <div class="quiz__alts">
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">A</span><span class="quiz__alt-txt">FC normal e PA preservada — choque improvável.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">B</span><span class="quiz__alt-txt">Sinais inespecíficos do idoso — observar.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">C</span><span class="quiz__alt-txt">Choque cardiogênico provável pelo β-bloqueador.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">D</span><span class="quiz__alt-txt">Choque hipovolêmico oculto: usar perfusão, lactato e índice de choque (FC/PAS &gt; 0,9).</span></button>
    </div>
    <div class="quiz__feedback">β-bloqueador, marcapasso, atletas e idosos <strong>não taquicardizam</strong> — usar FC isolada engana. <strong>Perfusão capilar &gt; 2 s, lactato elevado, IC &gt; 0,9 e BE &lt; −6</strong> são marcadores de choque oculto. Aqui IC = 78/100 = 0,78 (limítrofe), mas perfusão e lactato fecham o diagnóstico.</div>
  </article>

  <article class="quiz" data-correct="1">
    <div class="quiz__head">
      <span class="quiz__num">Q11</span>
      <span class="badge badge-c quiz__tag">C · score ABC</span>
    </div>
    <p class="quiz__stem">FAF abdominal, PAS 86, FC 124, FAST positivo. Score ABC e conduta:</p>
    <div class="quiz__alts">
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">A</span><span class="quiz__alt-txt">ABC = 2; aguardar lactato e gasometria antes de PTM.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">B</span><span class="quiz__alt-txt">ABC = 4; ativar PTM 1:1:1 imediatamente e levar ao CC.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">C</span><span class="quiz__alt-txt">ABC = 3; transfundir 2 L de cristaloide aquecido primeiro.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">D</span><span class="quiz__alt-txt">ABC = 1; observar com cristaloide + 1 CH.</span></button>
    </div>
    <div class="quiz__feedback">Score ABC: penetrante (1) + PAS ≤ 90 (1) + FC ≥ 120 (1) + FAST + (1) = <strong>4</strong>. Qualquer pontuação <strong>≥ 2</strong> já indica <strong>PTM 1:1:1</strong> imediato. Não esperar lactato. ATLS 11 limitou cristaloide a ≤ 1 L; 2 L é conduta antiga.</div>
  </article>

  <article class="quiz" data-correct="2">
    <div class="quiz__head">
      <span class="quiz__num">Q12</span>
      <span class="badge badge-c quiz__tag">C · Beck</span>
    </div>
    <p class="quiz__stem">FAB precordial, PA 80×60, jugular distendida, BNF, pulso paradoxal de 14 mmHg. Hospital sem cirurgião disponível imediatamente. Conduta-ponte:</p>
    <div class="quiz__alts">
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">A</span><span class="quiz__alt-txt">Toracotomia de reanimação à esquerda na sala vermelha.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">B</span><span class="quiz__alt-txt">Drenagem torácica em selo d'água bilateral.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">C</span><span class="quiz__alt-txt">Pericardiocentese subxifoide guiada por USG como ponte até a transferência.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">D</span><span class="quiz__alt-txt">Volume IV + dobutamina, aguardando cirurgião.</span></button>
    </div>
    <div class="quiz__feedback">Tríade de <strong>Beck</strong> + FAB precordial = tamponamento. Em hospital sem cirurgião imediato, <strong>pericardiocentese subxifoide guiada por USG</strong> é <em>ponte</em> (retira 5–20 mL, alivia compressão). Toracotomia de reanimação só se parada testemunhada e disponibilidade cirúrgica para conversão. Volume sem alívio do tamponamento não basta.</div>
  </article>

  <article class="quiz" data-correct="0">
    <div class="quiz__head">
      <span class="quiz__num">Q13</span>
      <span class="badge badge-c quiz__tag">C · pediatria</span>
    </div>
    <p class="quiz__stem">Criança 6 a, AAT, FC 148, perfusão lenta, alteração leve de consciência, <strong>PA 92×62</strong>. Estimativa de perda volêmica:</p>
    <div class="quiz__alts">
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">A</span><span class="quiz__alt-txt">&gt; 30% (classe III ou IV) — criança mantém PA até classe III.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">B</span><span class="quiz__alt-txt">&lt; 15% (classe I) — PA preservada exclui sangramento significativo.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">C</span><span class="quiz__alt-txt">15–30% (classe II) — taquicardia isolada.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">D</span><span class="quiz__alt-txt">Não há choque — esperar PA cair para classificar.</span></button>
    </div>
    <div class="quiz__feedback">Crianças <strong>mantêm PA até classe III</strong> (&gt; 30% de perda) por reserva vasoconstritora. Sinais precoces: <strong>taquicardia, perfusão lenta, alteração de consciência</strong>. Hipotensão pediátrica é <em>pré-parada</em>. Bolus inicial: 20 mL/kg de cristaloide aquecido; após 2 bolus → hemoderivados.</div>
  </article>

  <article class="quiz" data-correct="3">
    <div class="quiz__head">
      <span class="quiz__num">Q14</span>
      <span class="badge badge-c quiz__tag">C · aorta</span>
    </div>
    <p class="quiz__stem">AAT lateral em alta velocidade. TC mostra hematoma mediastinal e <strong>pseudoaneurisma</strong> de aorta no istmo. PA 160×95. Classificação SVS e conduta:</p>
    <div class="quiz__alts">
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">A</span><span class="quiz__alt-txt">Tipo I — controle pressórico isolado (PAS &lt; 120).</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">B</span><span class="quiz__alt-txt">Tipo II — observação seriada com angio-TC.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">C</span><span class="quiz__alt-txt">Tipo IV — toracotomia aberta de urgência.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">D</span><span class="quiz__alt-txt">Tipo III — TEVAR (reparo endovascular) urgente, com controle de PAS ≤ 120 e FC ≤ 80 enquanto aguarda.</span></button>
    </div>
    <div class="quiz__feedback">SVS: <strong>I</strong> íntima · <strong>II</strong> intramural · <strong>III</strong> pseudoaneurisma · <strong>IV</strong> ruptura. Pseudoaneurisma = <strong>tipo III → TEVAR urgente</strong>. Enquanto aguarda, controlar <strong>PAS ≤ 120 e FC ≤ 80</strong> (β-bloqueador IV). Tipos I–II → seguimento com controle pressórico; tipo IV → ruptura em curso, raramente chega vivo.</div>
  </article>

  <h3 class="section__sub">Bloco 5 — D (neuro)</h3>

  <article class="quiz" data-correct="2">
    <div class="quiz__head">
      <span class="quiz__num">Q15</span>
      <span class="badge badge-d quiz__tag">D · TCE grave</span>
    </div>
    <p class="quiz__stem">TCE grave, Glasgow 6, anisocoria à direita (5 mm × 3 mm). PA 96×60 (não responde a 1 L de cristaloide), SpO₂ 92%. <strong>NÃO</strong> faz parte do pacote inicial:</p>
    <div class="quiz__alts">
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">A</span><span class="quiz__alt-txt">IOT em sequência rápida com MILS, ventilação mecânica com PaCO₂ 35–40.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">B</span><span class="quiz__alt-txt">Salina hipertônica 3% 250 mL ou manitol 0,5–1 g/kg.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">C</span><span class="quiz__alt-txt">Hipotensão permissiva com PAS 80–90, como no resto do politrauma.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">D</span><span class="quiz__alt-txt">Cabeceira a 30°, normotermia, TC + neurocirurgia urgente.</span></button>
    </div>
    <div class="quiz__feedback">No TCE grave a meta é <strong>PAS ≥ 110</strong> (BTF 2024) — hipotensão e hipóxia <em>dobram</em> a mortalidade. Manter SpO₂ ≥ 94%, PaCO₂ 35–40, T° 36–37 °C. Hipotensão permissiva é <strong>contraindicada</strong> em TCE.</div>
  </article>

  <article class="quiz" data-correct="0">
    <div class="quiz__head">
      <span class="quiz__num">Q16</span>
      <span class="badge badge-d quiz__tag">D · Cushing</span>
    </div>
    <p class="quiz__stem">TCE, evolui com PA 200×110, FC 48, respiração irregular (Cheyne-Stokes). Significado:</p>
    <div class="quiz__alts">
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">A</span><span class="quiz__alt-txt">Tríade de Cushing — sinal tardio de HIC, herniação iminente; medidas anti-HIC + neurocirurgia já.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">B</span><span class="quiz__alt-txt">Resposta autonômica fisiológica ao trauma — observar.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">C</span><span class="quiz__alt-txt">Choque medular alto.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">D</span><span class="quiz__alt-txt">Sinal precoce de HIC — ainda há tempo para conduta expectante.</span></button>
    </div>
    <div class="quiz__feedback">Tríade de <strong>Cushing</strong> = HAS + bradicardia + respiração irregular. É <strong>tardia e pré-letal</strong>, não precoce. Nesse momento, a herniação já está em curso. Choque medular alto cursa com hipotensão + bradicardia, sem hipertensão. Conduta: cabeceira 30°, hipertônica/manitol, IOT com normocapnia, neurocirurgia.</div>
  </article>

  <article class="quiz" data-correct="3">
    <div class="quiz__head">
      <span class="quiz__num">Q17</span>
      <span class="badge badge-d quiz__tag">D · NEXUS</span>
    </div>
    <p class="quiz__stem">Vítima de queda da própria altura, alerta, sem intoxicação, sem déficit focal, sem dor cervical posterior, sem lesão dolorosa distratora. Condução da coluna cervical:</p>
    <div class="quiz__alts">
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">A</span><span class="quiz__alt-txt">TC de coluna cervical de rotina.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">B</span><span class="quiz__alt-txt">Radiografia AP, perfil e transoral.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">C</span><span class="quiz__alt-txt">Manter colar até a alta hospitalar.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">D</span><span class="quiz__alt-txt">Liberar coluna clinicamente — preenche todos os critérios NEXUS para baixo risco.</span></button>
    </div>
    <div class="quiz__feedback"><strong>NEXUS:</strong> sem dor posterior, sem intoxicação, sem alteração de consciência, sem déficit focal e sem lesão distratora → liberação clínica sem imagem. Imagem desnecessária expõe à radiação e congestiona o serviço.</div>
  </article>

  <h3 class="section__sub">Bloco 6 — E (exposição) / queimaduras / ortopedia</h3>

  <article class="quiz" data-correct="1">
    <div class="quiz__head">
      <span class="quiz__num">Q18</span>
      <span class="badge badge-e quiz__tag">E · uretra</span>
    </div>
    <p class="quiz__stem">Politraumatizado, fratura instável de pelve, sangue no meato uretral. Conduta sobre sondagem vesical:</p>
    <div class="quiz__alts">
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">A</span><span class="quiz__alt-txt">Tentar sonda 16 Fr com lubrificação cuidadosa.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">B</span><span class="quiz__alt-txt">Não sondar — fazer uretrocistografia retrógrada; se lesão, cistostomia suprapúbica.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">C</span><span class="quiz__alt-txt">Trocar para sonda de Foley 22 Fr.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">D</span><span class="quiz__alt-txt">Aguardar 6 h — geralmente o sangramento meatal cede sozinho.</span></button>
    </div>
    <div class="quiz__feedback">Uretrorragia + fratura de pelve = <strong>2 dos 5 sinais</strong> que contraindicam sondagem. Tentar passar sonda pode <em>completar</em> uma lesão parcial. <strong>Uretrocistografia retrógrada</strong> é o exame; se lesão confirmada → <strong>cistostomia suprapúbica</strong>.</div>
  </article>

  <article class="quiz" data-correct="2">
    <div class="quiz__head">
      <span class="quiz__num">Q19</span>
      <span class="badge badge-e quiz__tag">E · queimadura</span>
    </div>
    <p class="quiz__stem">Adulto 70 kg, queimadura 30% SCQ. Cálculo de fluidos para 24 h pelo Parkland modificado (ATLS 10/11):</p>
    <div class="quiz__alts">
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">A</span><span class="quiz__alt-txt">8400 mL (4 mL × 70 × 30) — Parkland clássico.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">B</span><span class="quiz__alt-txt">2100 mL (1 mL × 70 × 30) — fórmula reduzida pediátrica.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">C</span><span class="quiz__alt-txt">4200 mL (2 mL × 70 × 30) — metade nas primeiras 8 h, titulando pelo débito urinário 0,5 mL/kg/h.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">D</span><span class="quiz__alt-txt">10500 mL (5 mL × 70 × 30) — fórmula de Brooke modificada.</span></button>
    </div>
    <div class="quiz__feedback">ATLS 10/11 reduziram Parkland para <strong>2 mL/kg/% nas primeiras 24 h</strong>, com metade nas primeiras 8 h, titulando pelo <strong>débito urinário 0,5 mL/kg/h</strong> (1 mL/kg/h em criança, 30–50 mL/h em queimadura elétrica). 4 mL é a fórmula clássica antiga.</div>
  </article>

  <article class="quiz" data-correct="0">
    <div class="quiz__head">
      <span class="quiz__num">Q20</span>
      <span class="badge badge-e quiz__tag">E · Wallace</span>
    </div>
    <p class="quiz__stem">Adulto, queimaduras: face anterior + dorso completos + MS direito completo + face anterior do MI esquerdo. SCQ aproximada (regra dos 9 de Wallace):</p>
    <div class="quiz__alts">
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">A</span><span class="quiz__alt-txt">~54% (tronco anterior 18 + posterior 18 + MS 9 + ½ MI 9).</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">B</span><span class="quiz__alt-txt">~36%.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">C</span><span class="quiz__alt-txt">~63%.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">D</span><span class="quiz__alt-txt">~45%.</span></button>
    </div>
    <div class="quiz__feedback">Wallace adulto: <strong>tronco anterior 18 + tronco posterior 18 + MS direito 9 + ½ MI esquerdo 9 = 54%</strong>. Cabeça 9, MS 9 cada, MI 18 cada, genital 1. Em criança, cabeça 18 e MI 13,5 cada (cabeça maior, perna menor).</div>
  </article>

  <article class="quiz" data-correct="1">
    <div class="quiz__head">
      <span class="quiz__num">Q21</span>
      <span class="badge badge-e quiz__tag">E · Gustilo</span>
    </div>
    <p class="quiz__stem">Fratura exposta de tíbia com ferida de 12 cm, contaminação grosseira, cobertura de partes moles adequada após desbridamento. Classificação e ATB:</p>
    <div class="quiz__alts">
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">A</span><span class="quiz__alt-txt">Gustilo II — cefazolina isolada.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">B</span><span class="quiz__alt-txt">Gustilo IIIA — cefazolina + aminoglicosídeo, dentro de 1 h da admissão.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">C</span><span class="quiz__alt-txt">Gustilo IIIB — penicilina cristalina exclusiva.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">D</span><span class="quiz__alt-txt">Gustilo IIIC — vasodilatador + heparina.</span></button>
    </div>
    <div class="quiz__feedback">Gustilo: <strong>I</strong> &lt; 1 cm · <strong>II</strong> 1–10 cm · <strong>IIIA</strong> &gt; 10 cm com cobertura · <strong>IIIB</strong> precisa retalho · <strong>IIIC</strong> lesão vascular. Aqui = <strong>IIIA</strong>. ATB &lt; 1 h: cefazolina + aminoglicosídeo (gentamicina) para III. Profilaxia antitetânica + lavagem com SF + redução grosseira + tala.</div>
  </article>

  <h3 class="section__sub">Bloco 7 — Integração / cíclico</h3>

  <article class="quiz" data-correct="2">
    <div class="quiz__head">
      <span class="quiz__num">Q22</span>
      <span class="badge quiz__tag">★ · cíclico</span>
    </div>
    <p class="quiz__stem">Após drenagem torácica por hemotórax, paciente piora subitamente: PA cai de 110 para 78, SpO₂ cai de 96 para 88. Próxima conduta:</p>
    <div class="quiz__alts">
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">A</span><span class="quiz__alt-txt">Solicitar TC de tórax para investigar.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">B</span><span class="quiz__alt-txt">Aumentar velocidade do PTM em curso.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">C</span><span class="quiz__alt-txt">Reavaliar XABCDE do início — após qualquer intervenção, voltar ao A.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">D</span><span class="quiz__alt-txt">Trocar dreno por outro de maior calibre.</span></button>
    </div>
    <div class="quiz__feedback">O XABCDE é <strong>cíclico</strong>, não linear. Qualquer intervenção (IOT, drenagem, transfusão) ou piora obriga <em>voltar ao A</em>. A piora pode ser deslocamento do tubo, pneumotórax contralateral, embolia gasosa, etc. Reavaliação sistemática &gt; corrida para imagem.</div>
  </article>

  <article class="quiz" data-correct="3">
    <div class="quiz__head">
      <span class="quiz__num">Q23</span>
      <span class="badge quiz__tag">★ · tríade letal</span>
    </div>
    <p class="quiz__stem">Politraumatizado: pH 7,21, INR 1,9, Tax 34,8 °C. Diagnóstico e <strong>4 medidas</strong> imediatas:</p>
    <div class="quiz__alts">
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">A</span><span class="quiz__alt-txt">Choque cardiogênico — dobutamina, bicarbonato, vitamina K, manta térmica.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">B</span><span class="quiz__alt-txt">Sepse precoce — antibiótico de amplo espectro, vasopressor, plasma, aquecer.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">C</span><span class="quiz__alt-txt">Choque medular alto — atropina, dopamina, plasma fresco, manta térmica.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">D</span><span class="quiz__alt-txt">Tríade letal — controle do sangramento, PTM 1:1:1, fluidos a 39 °C, sala a 28 °C com aquecimento ativo.</span></button>
    </div>
    <div class="quiz__feedback"><strong>Tríade letal</strong> = acidose + coagulopatia + hipotermia. Cada componente potencia os outros. Quebrar cedo: <strong>controle cirúrgico do sangramento</strong> (damage control), <strong>PTM 1:1:1</strong>, <strong>fluidos a 39 °C</strong>, <strong>sala a 28 °C</strong> com manta térmica de ar forçado, retirar roupas molhadas. TXA &lt; 3 h.</div>
  </article>

  <article class="quiz" data-correct="0">
    <div class="quiz__head">
      <span class="quiz__num">Q24</span>
      <span class="badge quiz__tag">★ · damage control</span>
    </div>
    <p class="quiz__stem">Trauma penetrante abdominal com lesão hepática grau IV, paciente em coagulopatia, hipotérmico (33,9 °C), acidótico (pH 7,18). Conduta cirúrgica:</p>
    <div class="quiz__alts">
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">A</span><span class="quiz__alt-txt">Damage control: tamponamento (packing), peritoneostomia, UTI para correção da tríade letal, reabordagem em 24–48 h.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">B</span><span class="quiz__alt-txt">Hepatectomia direita formal em uma única abordagem.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">C</span><span class="quiz__alt-txt">Embolização hepática isolada e fechamento primário.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">D</span><span class="quiz__alt-txt">Tratamento conservador: TC seriada e observação em UTI.</span></button>
    </div>
    <div class="quiz__feedback"><strong>Damage control</strong> é a estratégia padrão para o paciente <em>in extremis</em>: cirurgia abreviada (controle de sangramento + de contaminação) → UTI para corrigir tríade letal → reabordagem definitiva 24–48 h. Hepatectomia formal em paciente coagulopata e hipotérmico é letal. Conservador exige hemodinâmica estável.</div>
  </article>

  <article class="quiz" data-correct="2">
    <div class="quiz__head">
      <span class="quiz__num">Q25</span>
      <span class="badge quiz__tag">★ · cenário-síntese</span>
    </div>
    <p class="quiz__stem">Motociclista 24 a, AAT lateral 80 km/h. Sala vermelha: GCS 13, PA 92×58, FC 122, sangramento pulsátil em coxa direita, MV abolido à esquerda com hipersonoridade, equimose abdominal em cinto, fratura instável de pelve. <strong>Primeira</strong> intervenção, em ordem:</p>
    <div class="quiz__alts">
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">A</span><span class="quiz__alt-txt">FAST + TC pan-scan antes de qualquer intervenção.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">B</span><span class="quiz__alt-txt">2 L de Ringer aquecido como bolus inicial padrão.</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">C</span><span class="quiz__alt-txt">Torniquete na coxa (X) → MILS + O₂ (A) → descompressão 5º EIC LAM esquerda (B) → cinta pélvica + PTM 1:1:1 (C).</span></button>
      <button type="button" class="quiz__alt"><span class="quiz__alt-letter">D</span><span class="quiz__alt-txt">IOT imediata como prioridade absoluta.</span></button>
    </div>
    <div class="quiz__feedback">A ordem <strong>X-A-B-C-D-E</strong> é literal: hemorragia exsanguinante (torniquete) <em>antes</em> da via aérea; pneumotórax hipertensivo (descompressão) <em>antes</em> da circulação; e cinta pélvica + PTM 1:1:1 ao chegar no C. GCS 13 <em>não</em> indica IOT imediata. Cristaloide ≤ 1 L (ATLS 11). TC só com paciente respondedor.</div>
  </article>

  <div class="callout-gabarito">
    <strong class="callout__title">Gabarito comentado — números que decidiram cada questão</strong>
    <p>Q01 <strong>3 h</strong> · Q02 <strong>6 h</strong> · Q03 <strong>cinta + PTM</strong> · Q04 <strong>nasofaríngea contraindicada</strong> · Q05 <strong>punção em &lt; 12 a</strong> · Q06 <strong>≤ 8 → IOT</strong> · Q07 <strong>5º EIC LAM</strong> · Q08 <strong>200 mL/h × 2–4 h</strong> · Q09 <strong>3 lados</strong> · Q10 <strong>IC, lactato, perfusão</strong> · Q11 <strong>ABC ≥ 2</strong> · Q12 <strong>Beck</strong> · Q13 <strong>classe III pediátrica</strong> · Q14 <strong>SVS III → TEVAR</strong> · Q15 <strong>PAS ≥ 110 no TCE</strong> · Q16 <strong>Cushing tardio</strong> · Q17 <strong>NEXUS −</strong> · Q18 <strong>5 sinais uretra</strong> · Q19 <strong>Parkland 2 mL</strong> · Q20 <strong>54%</strong> · Q21 <strong>Gustilo IIIA</strong> · Q22 <strong>cíclico</strong> · Q23 <strong>tríade letal</strong> · Q24 <strong>damage control</strong> · Q25 <strong>X-A-B-C ordenado</strong>.</p>
  </div>

  <div class="callout dica">
    <strong class="callout__title">Plano após o quiz</strong>
    <p>Marque as questões que você errou. Para cada uma, abra a <strong>página da letra correspondente</strong> e a entrada de <strong>glossário</strong> do termo-chave. Refaça o quiz inteiro em <strong>48 h</strong> (não antes — deixe o esquecimento acontecer para a recuperação ativa funcionar).</p>
  </div>
</section>`;

  S["glossario"] = () => `
<section class="section" data-id="glossario">
  <div class="block-head">
    <div class="block-head__letter">Aa</div>
    <div class="block-head__copy">
      <h2>Glossário &amp; terminologia padronizada</h2>
      <p>Cerca de <strong>40 termos</strong> que aparecem nas provas e nos enunciados de prontuário, com definição operacional e <strong>cross-reference</strong> para a página onde eles decidem conduta. Use como dicionário de consulta rápida — em ordem alfabética.</p>
    </div>
  </div>

  <div class="callout dica">
    <strong class="callout__title">Como usar</strong>
    <p>Ctrl+F no termo. Cada verbete tem <em>definição → uso clínico → onde aparece</em>. Os links <strong>↗</strong> levam à página correspondente do XABCDE para revisar o número/critério em contexto.</p>
  </div>

  <h3 class="section__sub">A</h3>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-c">A</span><h3 class="card__title">Acidose (no trauma)</h3></header>
    <div class="card__body">
      <p>pH &lt; 7,35 com BE &lt; −6 e/ou lactato &gt; 4 mmol/L. Marcador de hipoperfusão tecidual. Componente da <strong>tríade letal</strong>. Corrigir <em>causa</em> (sangramento, choque) — bicarbonato isolado <em>não</em> tratamento de trauma. <a href="#/c-choque">↗ C — choque</a></p>
    </div>
  </article>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-a">A</span><h3 class="card__title">AMPLE / SAMPLE</h3></header>
    <div class="card__body">
      <p>História sucinta no PS. <strong>A</strong>lergias · <strong>M</strong>edicamentos · <strong>P</strong>assado patológico · <strong>L</strong>ast meal (jejum) · <strong>E</strong>ventos. SAMPLE adiciona <strong>S</strong>inais/Sintomas. <a href="#/seguranca-mecanismo">↗ Segurança e mecanismo</a></p>
    </div>
  </article>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-d">A</span><h3 class="card__title">Anisocoria</h3></header>
    <div class="card__body">
      <p>Diferença ≥ 1 mm entre pupilas, com a maior <em>pouco reativa</em>. No TCE, sugere <strong>herniação uncal</strong> (compressão do III par homolateral à lesão). Indica <strong>medidas anti-HIC e neurocirurgia urgente</strong>. <a href="#/d-neuro">↗ D — neuro</a></p>
    </div>
  </article>
  <article class="card compact">
    <header class="card__head"><span class="badge">A</span><h3 class="card__title">Angio-TC / TC pan-scan</h3></header>
    <div class="card__body">
      <p>TC de corpo inteiro com contraste IV — sensível para lesões vasculares (aorta), parenquimatosas e ósseas. <em>Só em paciente respondedor à reposição</em>. Instável → não vai à TC. <a href="#/c-tamponamento-aorta">↗ Aorta</a></p>
    </div>
  </article>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-d">A</span><h3 class="card__title">AVDI</h3></header>
    <div class="card__body">
      <p>Triagem rápida pré-Glasgow: <strong>A</strong>lerta · responsivo a <strong>V</strong>oz · responsivo à <strong>D</strong>or · <strong>I</strong>nconsciente. "I" ≈ Glasgow ≤ 8. <a href="#/d-neuro">↗ D — neuro</a></p>
    </div>
  </article>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-b">A</span><h3 class="card__title">ATOMIC</h3></header>
    <div class="card__body">
      <p>6 ameaças torácicas <em>imediatamente</em> letais que devem ser excluídas no B: <strong>A</strong>irway disruption · <strong>T</strong>ension pneumothorax · <strong>O</strong>pen pneumothorax · <strong>M</strong>assive hemothorax · <strong>I</strong>nstabilidade torácica (flail) · <strong>C</strong>ardiac tamponade. <a href="#/b-respiracao">↗ B</a></p>
    </div>
  </article>

  <h3 class="section__sub">B</h3>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-c">B</span><h3 class="card__title">Beck (tríade)</h3></header>
    <div class="card__body">
      <p><strong>Hipotensão · jugular distendida · BNF</strong> (bulhas hipofonéticas). Tamponamento cardíaco. Sensibilidade baixa (~10–40%) — eco beira-leito (FAST cardíaco) é mais sensível. + <em>pulso paradoxal</em> &gt; 10 mmHg. <a href="#/c-tamponamento-aorta">↗ C — tamponamento</a></p>
    </div>
  </article>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-a">B</span><h3 class="card__title">Battle (sinal de)</h3></header>
    <div class="card__body">
      <p>Equimose <em>retroauricular</em> (sobre a mastoide), tardia (12–24 h). Sinal de fratura de base de crânio (fossa posterior). Junto com olhos de guaxinim / otorragia / rinorreia liquórica → <strong>nasofaríngea contraindicada</strong>. <a href="#/a-via-aerea">↗ A</a></p>
    </div>
  </article>
  <article class="card compact">
    <header class="card__head"><span class="badge">B</span><h3 class="card__title">BURP</h3></header>
    <div class="card__body">
      <p>Manobra externa para melhorar visão laringoscópica: pressão sobre a cartilagem tireoide para <strong>B</strong>ack · <strong>U</strong>p · <strong>R</strong>ight · <strong>P</strong>ressure. Diferente da manobra de Sellick (cricoide). <a href="#/a-via-aerea-dificil">↗ Via aérea difícil</a></p>
    </div>
  </article>

  <h3 class="section__sub">C</h3>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-d">C</span><h3 class="card__title">Canadense (regra cervical)</h3></header>
    <div class="card__body">
      <p>3 perguntas para indicar imagem cervical em alerta: 1) há fator de alto risco (≥ 65 a / mecanismo perigoso / parestesia)? 2) há fator de baixo risco que permita avaliação? 3) roda pescoço 45° ativamente? Mais sensível que NEXUS, menos específica. <a href="#/d-neuro">↗ D</a></p>
    </div>
  </article>
  <article class="card compact">
    <header class="card__head"><span class="badge">C</span><h3 class="card__title">Capping apical</h3></header>
    <div class="card__body">
      <p>Velamento radiológico do ápice pulmonar — pode indicar hematoma extra-pleural por lesão de aorta torácica. Sinal indireto, requer angio-TC. <a href="#/c-tamponamento-aorta">↗ Aorta</a></p>
    </div>
  </article>
  <article class="card compact">
    <header class="card__head"><span class="badge">C</span><h3 class="card__title">Carbonarcose</h3></header>
    <div class="card__body">
      <p>Rebaixamento de consciência por <strong>hipercapnia</strong> (PaCO₂ alta). Ocorre em hipoventilação prolongada (flail chest, fadiga muscular). Diagnóstico diferencial de TCE em politraumatizado sonolento. <a href="#/b-flail-contusao">↗ Flail / contusão</a></p>
    </div>
  </article>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-c">C</span><h3 class="card__title">Choque (classes I–IV)</h3></header>
    <div class="card__body">
      <p>Estimativa de perda volêmica em adulto: <strong>I</strong> &lt; 15% · <strong>II</strong> 15–30% · <strong>III</strong> 30–40% (hipotensão) · <strong>IV</strong> &gt; 40% (pré-parada). Em criança, hipotensão só em III. <a href="#/c-choque">↗ C — choque</a></p>
    </div>
  </article>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-d">C</span><h3 class="card__title">Cushing (tríade)</h3></header>
    <div class="card__body">
      <p><strong>HAS · bradicardia · respiração irregular</strong>. Sinal <em>tardio e pré-letal</em> de hipertensão intracraniana com herniação iminente. Não esperar — anisocoria + Glasgow ≤ 8 já é indicação de medidas anti-HIC. <a href="#/d-neuro">↗ D</a></p>
    </div>
  </article>

  <h3 class="section__sub">D</h3>
  <article class="card compact">
    <header class="card__head"><span class="badge">D</span><h3 class="card__title">Damage control</h3></header>
    <div class="card__body">
      <p>Estratégia em 3 etapas para o paciente <em>in extremis</em>: <strong>1)</strong> cirurgia abreviada (controle de sangramento + contaminação, packing, peritoneostomia); <strong>2)</strong> UTI para corrigir <em>tríade letal</em> (acidose, coagulopatia, hipotermia); <strong>3)</strong> reabordagem definitiva em 24–48 h. <a href="#/c-choque">↗ C</a></p>
    </div>
  </article>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-b">D</span><h3 class="card__title">Damoiseau (curva de)</h3></header>
    <div class="card__body">
      <p>Linha de macicez parabólica em hemotórax/derrame pleural à percussão e à radiografia. Útil quando USG indisponível. Hoje o e-FAST identifica o mesmo achado em segundos. <a href="#/b-hemotorax">↗ Hemotórax</a></p>
    </div>
  </article>

  <h3 class="section__sub">E</h3>
  <article class="card compact">
    <header class="card__head"><span class="badge">E</span><h3 class="card__title">e-FAST</h3></header>
    <div class="card__body">
      <p>Extensão do FAST tradicional com <strong>2 janelas pulmonares anteriores</strong> (pneumotórax — perda do "lung sliding") + janela <strong>subxifoide</strong> (tamponamento). 7 janelas no total. Beira-leito, repetível. <a href="#/c-choque">↗ C</a></p>
    </div>
  </article>

  <h3 class="section__sub">F</h3>
  <article class="card compact">
    <header class="card__head"><span class="badge">F</span><h3 class="card__title">FAST</h3></header>
    <div class="card__body">
      <p>Focused Assessment with Sonography for Trauma. 4 janelas: <strong>hepatorrenal (Morison)</strong>, <strong>esplenorrenal</strong>, <strong>pélvica</strong>, <strong>subxifoide</strong>. Detecta líquido livre. <em>Sensibilidade ~75–85%, especificidade alta</em>. Negativo <strong>não exclui</strong> sangramento (retroperitônio). <a href="#/c-choque">↗ C</a></p>
    </div>
  </article>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-b">F</span><h3 class="card__title">Flail chest (tórax instável)</h3></header>
    <div class="card__body">
      <p>≥ 2 fraturas em ≥ 2 costelas adjacentes, criando segmento livre que se move <em>paradoxalmente</em>. O problema clínico é a <strong>contusão pulmonar</strong> subjacente, não o segmento. Conduta: analgesia agressiva, fisio, IOT se fadiga / SatO₂ &lt; 90% em O₂. <a href="#/b-flail-contusao">↗ B</a></p>
    </div>
  </article>

  <h3 class="section__sub">G</h3>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-d">G</span><h3 class="card__title">Glasgow / GCS-P</h3></header>
    <div class="card__body">
      <p>Escala 3–15 (abertura ocular 1–4 + verbal 1–5 + motora 1–6). Intubado: marcar "T" no V (não somar). <strong>GCS-P</strong> = GCS − pontuação pupilar (0 = ambas reativas, 1 = uma, 2 = nenhuma). Melhor preditor prognóstico em TCE. <a href="#/d-neuro">↗ D</a></p>
    </div>
  </article>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-e">G</span><h3 class="card__title">Gustilo-Anderson</h3></header>
    <div class="card__body">
      <p>Fratura exposta: <strong>I</strong> &lt; 1 cm, limpa · <strong>II</strong> 1–10 cm · <strong>IIIA</strong> &gt; 10 cm com cobertura adequada · <strong>IIIB</strong> precisa retalho · <strong>IIIC</strong> lesão vascular. ATB &lt; 1 h: cefazolina (I–II), + aminoglicosídeo (III), + penicilina se contaminação rural. <a href="#/e-exposicao">↗ E</a></p>
    </div>
  </article>

  <h3 class="section__sub">H</h3>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-e">H</span><h3 class="card__title">High-riding prostate</h3></header>
    <div class="card__body">
      <p>Próstata <em>elevada e flutuante</em> ao toque retal — desloca-se cranialmente após ruptura de uretra membranosa em fratura de pelve. Um dos <strong>5 sinais</strong> que contraindicam sondagem. <a href="#/e-exposicao">↗ E</a></p>
    </div>
  </article>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-c">H</span><h3 class="card__title">Hipotensão permissiva</h3></header>
    <div class="card__body">
      <p>Aceitar PAS 80–90 mmHg até <em>controle cirúrgico</em> do sangramento, evitando deslocar coágulos. <strong>Contraindicada em TCE</strong> (manter PAS ≥ 110) e em criança. <a href="#/c-choque">↗ C</a></p>
    </div>
  </article>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-e">H</span><h3 class="card__title">Hipotermia (no trauma)</h3></header>
    <div class="card__body">
      <p>T° central &lt; 35 °C. Cada 1 °C abaixo piora coagulação ~10%. Componente da <strong>tríade letal</strong>. Conduta: sala 28 °C, manta de ar forçado, fluidos a 39 °C, retirar roupas molhadas. <a href="#/e-exposicao">↗ E</a></p>
    </div>
  </article>

  <h3 class="section__sub">I</h3>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-c">I</span><h3 class="card__title">Índice de choque (IC)</h3></header>
    <div class="card__body">
      <p>IC = FC ÷ PAS. Normal 0,5–0,7. <strong>&gt; 0,9</strong> = choque oculto; <strong>&gt; 1,0</strong> preditor de PTM. Melhor que FC isolada em idosos / β-bloqueador. <a href="#/c-choque">↗ C</a></p>
    </div>
  </article>

  <h3 class="section__sub">L</h3>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-a">L</span><h3 class="card__title">LEMON</h3></header>
    <div class="card__body">
      <p>Predição de via aérea difícil: <strong>L</strong>ook · <strong>E</strong>valuate 3-3-2 · <strong>M</strong>allampati · <strong>O</strong>bstruction · <strong>N</strong>eck mobility. <a href="#/a-via-aerea-dificil">↗ Via aérea difícil</a></p>
    </div>
  </article>

  <h3 class="section__sub">M</h3>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-x">M</span><h3 class="card__title">MARCH</h3></header>
    <div class="card__body">
      <p>Sequência pré-hospitalar do TCCC (combate): <strong>M</strong>assive hemorrhage · <strong>A</strong>irway · <strong>R</strong>espirations · <strong>C</strong>irculation · <strong>H</strong>ead injury / Hypothermia. Inverte ABC clássico — hemorragia <em>antes</em> de via aérea no campo. <a href="#/x-exsanguinacao">↗ X</a></p>
    </div>
  </article>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-a">M</span><h3 class="card__title">MILS (manual in-line stabilization)</h3></header>
    <div class="card__body">
      <p>Estabilização manual em linha da coluna cervical — operador dedicado segura cabeça/pescoço em posição neutra durante IOT, com <em>parte anterior do colar removida</em> para permitir abertura da boca. <a href="#/a-via-aerea">↗ A</a></p>
    </div>
  </article>

  <h3 class="section__sub">N</h3>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-d">N</span><h3 class="card__title">NEXUS</h3></header>
    <div class="card__body">
      <p>5 critérios de baixo risco para liberar coluna cervical sem imagem: sem dor cervical posterior · sem intoxicação · sem alteração de consciência · sem déficit focal · sem lesão dolorosa distratora. Todos negativos → libera. <a href="#/d-neuro">↗ D</a></p>
    </div>
  </article>

  <h3 class="section__sub">P</h3>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-e">P</span><h3 class="card__title">Parkland (modificada — ATLS 11)</h3></header>
    <div class="card__body">
      <p>Cálculo de fluidos em queimadura: <strong>2 mL × kg × %SCQ</strong> nas primeiras 24 h (era 4 mL). Metade nas primeiras 8 h. Titular pelo <strong>débito urinário 0,5 mL/kg/h</strong> (1 mL/kg/h em criança). <a href="#/e-exposicao">↗ E</a></p>
    </div>
  </article>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-c">P</span><h3 class="card__title">PTM 1:1:1</h3></header>
    <div class="card__body">
      <p>Protocolo de transfusão maciça. <strong>1 CH : 1 PFC : 1 plaquetas</strong> — reproduz sangue total. Indicado se Score ABC ≥ 2 ou hemorragia maciça previsível. + 1 g de cálcio a cada 4 unidades. <a href="#/c-choque">↗ C</a></p>
    </div>
  </article>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-c">P</span><h3 class="card__title">Pulso paradoxal</h3></header>
    <div class="card__body">
      <p>Queda da PAS &gt; 10 mmHg na inspiração. Sinal de <strong>tamponamento cardíaco</strong>, asma grave, pneumotórax hipertensivo. Junto à tríade de Beck reforça tamponamento. <a href="#/c-tamponamento-aorta">↗ C</a></p>
    </div>
  </article>

  <h3 class="section__sub">R</h3>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-x">R</span><h3 class="card__title">REBOA</h3></header>
    <div class="card__body">
      <p>Resuscitative Endovascular Balloon Occlusion of the Aorta. Balão na aorta inflado em <strong>zona I</strong> (acima do tronco celíaco — sangramento abdominal supramesentérico) ou <strong>zona III</strong> (abaixo das renais — pelve/membro). Ponte para cirurgia. <a href="#/x-exsanguinacao">↗ X</a></p>
    </div>
  </article>

  <h3 class="section__sub">S</h3>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-a">S</span><h3 class="card__title">Sniffing position</h3></header>
    <div class="card__body">
      <p>Posição de "cheirar a manhã": flexão cervical baixa + extensão atlanto-occipital. Alinha eixos oral/faríngeo/laríngeo, melhora visão na laringoscopia direta. <strong>Contraindicada</strong> em suspeita cervical — usar MILS. <a href="#/a-via-aerea-dificil">↗ Via aérea difícil</a></p>
    </div>
  </article>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-c">S</span><h3 class="card__title">Score ABC</h3></header>
    <div class="card__body">
      <p>Predição de PTM. 4 critérios (1 ponto cada): <strong>penetrante · PAS ≤ 90 · FC ≥ 120 · FAST +</strong>. <strong>≥ 2 → ativar PTM 1:1:1</strong>. Sensibilidade ~75%, especificidade ~86%. <a href="#/c-choque">↗ C</a></p>
    </div>
  </article>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-c">S</span><h3 class="card__title">SVS (aorta torácica)</h3></header>
    <div class="card__body">
      <p>Society for Vascular Surgery: <strong>I</strong> íntima · <strong>II</strong> intramural · <strong>III</strong> pseudoaneurisma · <strong>IV</strong> ruptura. III–IV → TEVAR urgente; I–II → controle de PAS ≤ 120 e FC ≤ 80, seguimento. <a href="#/c-tamponamento-aorta">↗ Aorta</a></p>
    </div>
  </article>

  <h3 class="section__sub">T</h3>
  <article class="card compact">
    <header class="card__head"><span class="badge">T</span><h3 class="card__title">TCCC</h3></header>
    <div class="card__body">
      <p>Tactical Combat Casualty Care — protocolo de origem militar que codificou MARCH, torniquete como 1ª linha, hemoderivados precoces. Influenciou diretamente as mudanças do ATLS 10/11. <a href="#/x-exsanguinacao">↗ X</a></p>
    </div>
  </article>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-x">T</span><h3 class="card__title">TXA (ácido tranexâmico)</h3></header>
    <div class="card__body">
      <p>Antifibrinolítico. 1 g IV em 10 min + 1 g em 8 h. Janela <strong>≤ 3 h do trauma</strong> (CRASH-2). Após 3 h: <em>aumenta mortalidade</em>. <a href="#/x-exsanguinacao">↗ X</a></p>
    </div>
  </article>
  <article class="card compact">
    <header class="card__head"><span class="badge">T</span><h3 class="card__title">Tríade letal</h3></header>
    <div class="card__body">
      <p><strong>Acidose · coagulopatia · hipotermia</strong>. Cada componente alimenta os outros (círculo vicioso). Quebra-se cedo: damage control + PTM 1:1:1 + fluidos a 39 °C + sala a 28 °C + TXA &lt; 3 h. <a href="#/c-choque">↗ C</a></p>
    </div>
  </article>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-x">T</span><h3 class="card__title">Torniquete</h3></header>
    <div class="card__body">
      <p>Faixa de pressão circunferencial ≥ 200 mmHg, 5–8 cm <em>proximal</em> à lesão (não sobre articulação). Apertar até cessar sangramento (não só "diminuir"). Marcar a hora. Janela <strong>≤ 6 h</strong>. 1ª linha em hemorragia exsanguinante de membro (ATLS 11). <a href="#/x-exsanguinacao">↗ X</a></p>
    </div>
  </article>

  <h3 class="section__sub">U</h3>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-e">U</span><h3 class="card__title">Uretrocistografia retrógrada</h3></header>
    <div class="card__body">
      <p>Injeção de contraste pela meato uretral antes de qualquer sondagem em paciente com suspeita de lesão de uretra (5 sinais). Se extravasamento → <strong>cistostomia suprapúbica</strong>. <a href="#/e-exposicao">↗ E</a></p>
    </div>
  </article>

  <h3 class="section__sub">W</h3>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-e">W</span><h3 class="card__title">Wallace (regra dos 9)</h3></header>
    <div class="card__body">
      <p>Estimativa de SCQ no adulto: cabeça 9% · cada MS 9% · cada MI 18% · tronco anterior 18% · tronco posterior 18% · genital 1% (= 100%). Em criança: cabeça 18% / MI 13,5% cada (cabeça maior, perna menor). <a href="#/e-exposicao">↗ E</a></p>
    </div>
  </article>

  <h3 class="section__sub">X</h3>
  <article class="card compact">
    <header class="card__head"><span class="badge badge-x">X</span><h3 class="card__title">XABCDE</h3></header>
    <div class="card__body">
      <p>Sequência da avaliação primária no trauma: <strong>X</strong> exsanguinação · <strong>A</strong> via aérea com proteção cervical · <strong>B</strong> respiração · <strong>C</strong> circulação · <strong>D</strong> disfunção neurológica · <strong>E</strong> exposição/ambiente. <em>Cíclica</em>: após qualquer intervenção, voltar ao A. <a href="#/xabcde-visao-geral">↗ Visão geral</a></p>
    </div>
  </article>

  <div class="callout aviso">
    <strong class="callout__title">Padronização de transcrição</strong>
    <p>Convenções deste material: <strong>Glasgow</strong> com "G" maiúsculo; <strong>FAST/e-FAST</strong> em maiúsculas; <strong>NEXUS</strong> sempre em maiúsculas; <strong>TXA</strong> abreviação preferida (ácido tranexâmico no 1º uso); <strong>1500 mL</strong> com espaço (não "1500ml"); <strong>5º EIC LAM</strong> abreviado após 1ª menção como "linha axilar média". Sem confundir <em>cricotireoidostomia</em> (membrana cricotireoide, nível do C6) com <em>traqueostomia</em> (anéis traqueais).</p>
  </div>
</section>`;
})(window.TRAUMA_SECTIONS);
