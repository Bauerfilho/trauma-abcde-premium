/* =====================================================================
   TRAUMA PREMIUM · sections-2.js
   Bloco de seções: A (via aérea), B (respiração)
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
    <p>Estrutura técnica preparada. O conteúdo autoral profundo será injetado na próxima etapa, sem resumir o roteiro.</p>
  </div>
</section>`;
  }

  S["a-via-aerea"] = () => `
<section class="section" data-id="a-via-aerea">
  <div class="block-head block-a">
    <div class="block-head__letter">A</div>
    <div class="block-head__copy">
      <h2>A — Via aérea + coluna cervical</h2>
      <p>A pergunta-chave do A não é "está respirando?" (isso é B), e sim: <strong>"o ar consegue entrar e sair, e essa via aérea vai continuar pérvia nos próximos minutos?"</strong>. <em>Pérvia</em> e <em>segura</em> são coisas diferentes — a banca adora essa diferença.</p>
    </div>
  </div>

  <div class="callout fisiopato">
    <strong class="callout__title">Pérvia × segura — o conceito que mais cai</strong>
    <p><strong>Pérvia</strong> = neste segundo, ar passa. Paciente fala, pelo menos chora.<br>
    <strong>Segura</strong> = a via aérea <em>vai continuar</em> pérvia mesmo se o paciente piorar (rebaixar nível de consciência, sangrar mais, edemaciar). Só está segura quando há <strong>tubo com cuff insuflado</strong> dentro da traqueia. Paciente com Glasgow 8 e fonação preservada tem via aérea pérvia, mas <strong>não segura</strong> — IOT é mandatória.</p>
  </div>

  <h3 class="section__sub">Avaliação rápida — em 10 segundos</h3>
  <div class="grid grid-3 gap-md">
    <article class="card card-a compact">
      <header class="card__head"><span class="badge badge-a">Olhar</span><h4 class="card__title">Sinais visuais</h4></header>
      <div class="card__body">
        <ul class="list-tight">
          <li>Cianose central (lábios, língua).</li>
          <li>Tiragem, retrações, uso de musculatura acessória.</li>
          <li>Sangue, vômito, dentes soltos, corpo estranho.</li>
          <li>Trauma facial extenso, queimadura facial, fuligem em narinas.</li>
          <li>Hematoma cervical em expansão, enfisema subcutâneo.</li>
        </ul>
      </div>
    </article>
    <article class="card card-a compact">
      <header class="card__head"><span class="badge badge-a">Ouvir</span><h4 class="card__title">Sinais auditivos</h4></header>
      <div class="card__body">
        <ul class="list-tight">
          <li><strong>Estridor</strong> (inspiratório) → obstrução alta.</li>
          <li><strong>Roncos / gargarejo</strong> → secreção, sangue.</li>
          <li><strong>Voz rouca / abafada</strong> → edema/hematoma laríngeo.</li>
          <li><strong>Disfonia ou afonia</strong> → lesão laríngea direta.</li>
          <li><strong>Silêncio total</strong> em paciente em esforço → obstrução completa.</li>
        </ul>
      </div>
    </article>
    <article class="card card-a compact">
      <header class="card__head"><span class="badge badge-a">Perguntar</span><h4 class="card__title">Fonação</h4></header>
      <div class="card__body">
        <p>"Como você se chama?". Resposta clara em frase completa = via aérea <strong>provavelmente pérvia neste momento</strong>. Resposta entrecortada, monossilábica ou ausente = ameaça.</p>
        <p class="muted">Não substitui exame; é triagem de 3 segundos.</p>
      </div>
    </article>
  </div>

  <div class="callout alerta-medico" style="margin-top:1rem">
    <strong class="callout__title">Coluna cervical durante o A</strong>
    <p>Toda manipulação de via aérea no trauma assume <strong>lesão cervical instável até prova em contrário</strong>. Manter <strong>estabilização manual em linha</strong> (in-line stabilization), <em>não</em> tração; colar cervical pode ser temporariamente removido para IOT, desde que outro profissional faça a estabilização manual. Manobras: <strong>jaw-thrust</strong> (eleva mandíbula sem extensão da cabeça) é a preferida; <em>chin-lift</em> só se cervical claramente liberada.</p>
  </div>

  <h3 class="section__sub">Manobras e dispositivos básicos</h3>
  <div class="grid grid-2 gap-lg">
    <article class="card card-a">
      <header class="card__head"><span class="badge">Manobras</span><h3 class="card__title">Sem dispositivo</h3></header>
      <div class="card__body">
        <ul class="list-tight">
          <li><strong>Jaw-thrust</strong> (elevação mandibular): preferida no trauma. Polegares no zigomático, dedos na mandíbula, empurra para frente.</li>
          <li><strong>Chin-lift</strong> (elevação do queixo): só fora do trauma ou cervical liberada.</li>
          <li><strong>Aspiração</strong> com cânula rígida (Yankauer) para sangue/secreção/vômito — antes de qualquer dispositivo.</li>
          <li><strong>Remoção</strong> manual de corpo estranho visível (laringoscopia + Magill).</li>
        </ul>
      </div>
    </article>
    <article class="card card-a">
      <header class="card__head"><span class="badge">Cânulas</span><h3 class="card__title">Guedel × nasofaríngea</h3></header>
      <div class="card__body">
        <ul class="list-tight">
          <li><strong>Cânula orofaríngea (Guedel):</strong> apenas em paciente <em>inconsciente sem reflexo de gag</em>. Em consciente provoca vômito/laringoespasmo.</li>
          <li>Tamanho: comissura labial → ângulo da mandíbula.</li>
          <li><strong>Cânula nasofaríngea:</strong> tolera consciência preservada, útil em trismo. <strong>Contraindicada</strong> em fratura de base de crânio (Battle, guaxinim, otorragia, rinorraquia).</li>
          <li>Tamanho: narina → tragus da orelha.</li>
        </ul>
      </div>
    </article>
  </div>

  <h3 class="section__sub">Indicações de via aérea definitiva</h3>
  <p class="muted">Tubo na traqueia, com cuff insuflado, fixado, conectado a fonte de O₂.</p>
  <div class="grid grid-2 gap-md">
    <article class="card card-x">
      <header class="card__head"><span class="badge badge-x">Imediatas</span><h3 class="card__title">Não pensar duas vezes</h3></header>
      <div class="card__body">
        <ul class="list-tight">
          <li><strong>Apneia</strong> ou ventilação ineficaz.</li>
          <li><strong>Glasgow ≤ 8</strong> — proteção contra broncoaspiração e controle da PIC.</li>
          <li><strong>Trauma facial grave</strong> com obstrução iminente.</li>
          <li><strong>Queimadura de via aérea</strong> (fuligem em narinas, voz rouca, escarro carbonáceo, queimadura facial extensa) — IOT precoce, <em>antes</em> do edema.</li>
          <li><strong>Choque grave refratário</strong> com necessidade de ventilação mecânica.</li>
          <li><strong>Risco de obstrução</strong> (hematoma cervical em expansão, enfisema subcutâneo, edema laríngeo).</li>
        </ul>
      </div>
    </article>
    <article class="card card-c">
      <header class="card__head"><span class="badge badge-c">Relativas</span><h3 class="card__title">Avaliar contexto</h3></header>
      <div class="card__body">
        <ul class="list-tight">
          <li>Falha de oxigenação com máscara não-reinalante (SpO₂ &lt; 94%).</li>
          <li>Trauma penetrante de pescoço com sinais leves.</li>
          <li>Necessidade de transporte prolongado em paciente em risco de deterioração.</li>
          <li>Paciente combativo que impede avaliação adequada.</li>
          <li>Indicação cirúrgica imediata (laparotomia / toracotomia).</li>
        </ul>
      </div>
    </article>
  </div>

  <h3 class="section__sub">Via aérea definitiva — opções</h3>
  <div class="stepper">
    <div class="stepper__item" style="--step-c: var(--c-a)">
      <div class="stepper__num">1</div>
      <div class="stepper__body">
        <h4>IOT (intubação orotraqueal)</h4>
        <p>Padrão-ouro. Sequência rápida (RSI) com pré-oxigenação ≥ 3 min, indução (etomidato/cetamina) + bloqueio neuromuscular (succinilcolina ou rocurônio). Manter <strong>estabilização cervical manual em linha</strong> durante a laringoscopia.</p>
        <p class="muted"><strong>ATLS 11:</strong> confirmação por <strong>capnografia em onda (EtCO₂)</strong> é mandatória — substitui ausculta + condensação no tubo como padrão-ouro.</p>
      </div>
    </div>
    <div class="stepper__item" style="--step-c: var(--c-a)">
      <div class="stepper__num">2</div>
      <div class="stepper__body">
        <h4>Intubação nasotraqueal</h4>
        <p>Cego (paciente respirando) ou guiado por fibroscópio. Hoje é exceção — útil em paciente acordado com IOT impossível e crico contraindicada.</p>
        <p class="muted"><strong>Contraindicada</strong> em suspeita de fratura de base de crânio e fratura de face média grave (LeFort II/III) — risco de penetração intracraniana.</p>
      </div>
    </div>
    <div class="stepper__item" style="--step-c: var(--c-a)">
      <div class="stepper__num">3</div>
      <div class="stepper__body">
        <h4>Máscara laríngea (LMA / SGA) <span class="badge badge-new">novo · ATLS 11</span></h4>
        <p>Dispositivo extraglótico. Entrou no algoritmo de via aérea do ATLS 11 como <strong>ponte</strong> entre máscara/ambu e via aérea cirúrgica. Útil em "não intuba, ventila": a máscara laríngea pode <em>oxigenar adequadamente</em> enquanto se prepara IOT difícil ou crico.</p>
        <p class="muted">Não é via aérea definitiva (não protege completamente contra broncoaspiração), mas resolve a urgência da oxigenação.</p>
      </div>
    </div>
    <div class="stepper__item" style="--step-c: var(--c-a)">
      <div class="stepper__num">4</div>
      <div class="stepper__body">
        <h4>Cricotireoidostomia cirúrgica</h4>
        <p>Via aérea cirúrgica de <strong>emergência</strong>. Incisão na membrana cricotireóidea (entre cartilagem tireóide e cricoide), inserção de cânula de traqueostomia 6.0 ou tubo orotraqueal 6.0. Padrão-ouro do "não intuba, não ventila".</p>
        <p class="muted">Contraindicada em <strong>&lt; 12 anos</strong> (cartilagem cricoide é o único anel completo da via aérea pediátrica) — usar punção (jet ventilation).</p>
      </div>
    </div>
    <div class="stepper__item" style="--step-c: var(--c-a)">
      <div class="stepper__num">5</div>
      <div class="stepper__body">
        <h4>Cricotireoidostomia por punção (jet ventilation)</h4>
        <p>Cateter sobre agulha (Jelco 14G) na membrana cricotireóidea, conectado a fonte de O₂ de alta pressão. Oxigena por até <strong>30–45 min</strong> antes de retenção crítica de CO₂ (carbonarcose). É <em>ponte</em>, não via definitiva.</p>
        <p class="muted">Indicada em pediátrico &lt; 12 anos. Em adultos, é alternativa quando crico cirúrgica não é possível.</p>
      </div>
    </div>
    <div class="stepper__item" style="--step-c: var(--txt-3)">
      <div class="stepper__num">6</div>
      <div class="stepper__body">
        <h4>Traqueostomia <span class="pill p-old">não é mais padrão-ouro de urgência</span></h4>
        <p>Procedimento eletivo ou semi-eletivo. <strong>Não</strong> é mais a via aérea cirúrgica de emergência (lugar é da cricotireoidostomia). Indicada em ventilação mecânica prolongada (&gt; 7–14 dias) ou lesão laríngea/cricóide que contraindica crico.</p>
      </div>
    </div>
  </div>

  <div class="callout atls11" style="margin-top:1rem">
    <strong class="callout__title">O que mudou na 11ª — resumo do A</strong>
    <ul class="list-tight">
      <li><strong>Capnografia em onda</strong> (EtCO₂) é o padrão-ouro de confirmação da IOT.</li>
      <li><strong>Máscara laríngea</strong> entrou formalmente no algoritmo como ponte.</li>
      <li><strong>O₂ ≥ 15 L/min</strong> em máscara não-reinalante para todo politrauma com risco.</li>
      <li><strong>Traqueostomia</strong> deixou de ser via aérea cirúrgica de urgência.</li>
    </ul>
  </div>

  <div class="callout pegadinha" style="margin-top:1rem">
    <strong class="callout__title">Pegadinhas do A</strong>
    <ul class="list-tight">
      <li>Paciente queimado <strong>conversando bem</strong>, mas com fuligem em narinas e queimadura facial → <strong>IOT precoce</strong>; daqui a 1 h o edema fecha a via aérea.</li>
      <li>"Cânula nasofaríngea em paciente com sinal de Battle" → <strong>contraindicada</strong> (fratura de base de crânio).</li>
      <li>"IOT confirmada por ausculta e condensação no tubo" — não é mais padrão; em prova ATLS 11, capnografia.</li>
      <li>"Traqueostomia de urgência em adulto com não-intuba/não-ventila" → <strong>errado</strong>; a via é <strong>cricotireoidostomia</strong>.</li>
      <li>Paciente com Glasgow 9 conversando: <strong>não é indicação</strong> automática de IOT pelo Glasgow (entra com 8). Mas atenção à <em>tendência</em> — se está caindo, vai a 8 logo.</li>
      <li>Trauma laríngeo direto (golpe no pescoço, fratura de cartilagem): IOT pode <strong>destruir</strong> a anatomia → considerar via aérea cirúrgica primária.</li>
    </ul>
  </div>

  <div class="callout banca" style="margin-top:1rem">
    <strong class="callout__title">Como a banca testa o A</strong>
    <p>O cenário clássico: paciente <strong>queimado em incêndio em ambiente fechado</strong>, conversando, satura 96%, "estável". Pergunta: "qual a próxima conduta?". Distrator forte: <em>"observar"</em>. Resposta certa: <strong>IOT precoce</strong>. Outro cenário: <em>Glasgow 7 após TCE</em>, sem outras lesões → IOT (proteção de via aérea + controle de PIC). E o cenário "não intuba, não ventila": resposta é <strong>cricotireoidostomia cirúrgica</strong> (ou punção em &lt; 12 anos).</p>
  </div>
</section>`;

  S["a-via-aerea-dificil"] = () => `
<section class="section" data-id="a-via-aerea-dificil">
  <div class="block-head block-a">
    <div class="block-head__letter">↻</div>
    <div class="block-head__copy">
      <h2>Via aérea difícil — algoritmo 3+3</h2>
      <p>Como <strong>antecipar</strong> que vai dar errado, e o que fazer quando dá. A regra do 3+3, Mallampati, LEMON e o algoritmo do "não intuba, não ventila" — sem decoreba, com fisiopatologia.</p>
    </div>
  </div>

  <div class="callout fisiopato">
    <strong class="callout__title">Por que prever a via aérea difícil?</strong>
    <p>Em trauma, você não tem tempo para descobrir <em>durante</em> a laringoscopia. A predição em &lt; 30 segundos muda o plano: separa material de via aérea cirúrgica, posiciona segundo operador, escolhe droga (preserva ventilação espontânea com cetamina, evita relaxante). <strong>Antecipar é metade do plano</strong>.</p>
  </div>

  <h3 class="section__sub">Regra do 3+3+2 — em 30 segundos</h3>
  <p class="muted">Avaliação digital, sem instrumento. Cada "3" corresponde a 3 dedos (≈ 5 cm). Falha em qualquer um = via aérea provavelmente difícil.</p>

  <div class="grid grid-3 gap-md">
    <article class="card card-a compact">
      <header class="card__head"><span class="badge badge-a">3</span><h4 class="card__title">Abertura bucal</h4></header>
      <div class="card__body">
        <p><strong>3 dedos</strong> entre os incisivos superior e inferior. Menos que isso = laringoscopia difícil (espaço insuficiente para a lâmina).</p>
      </div>
    </article>
    <article class="card card-a compact">
      <header class="card__head"><span class="badge badge-a">3</span><h4 class="card__title">Hioideo-mentoniano</h4></header>
      <div class="card__body">
        <p><strong>3 dedos</strong> entre o osso hioide e a ponta do mento (mandíbula). Menos = mandíbula curta/recuada → glote anterior.</p>
      </div>
    </article>
    <article class="card card-a compact">
      <header class="card__head"><span class="badge badge-a">2</span><h4 class="card__title">Tireo-hioideo</h4></header>
      <div class="card__body">
        <p><strong>2 dedos</strong> entre a cartilagem tireóide e o hioide. Menos = laringe alta, difícil alinhamento dos eixos.</p>
      </div>
    </article>
  </div>

  <h3 class="section__sub">Mallampati — em paciente colaborativo</h3>
  <p class="muted">Paciente sentado, boca aberta sem fonação, língua protraída ao máximo. Avaliar o que se enxerga.</p>
  <div class="grid grid-4 gap-md">
    <article class="card card-a compact">
      <header class="card__head"><span class="badge badge-a">I</span><h4 class="card__title">Fácil</h4></header>
      <div class="card__body"><p>Palato mole, úvula, pilares, tonsilas <strong>visíveis</strong>.</p></div>
    </article>
    <article class="card card-a compact">
      <header class="card__head"><span class="badge badge-a">II</span><h4 class="card__title">Provável fácil</h4></header>
      <div class="card__body"><p>Palato mole + úvula visíveis. Pilares parciais.</p></div>
    </article>
    <article class="card card-c compact">
      <header class="card__head"><span class="badge badge-c">III</span><h4 class="card__title">Difícil prevista</h4></header>
      <div class="card__body"><p>Palato mole + base da úvula. Sem pilares.</p></div>
    </article>
    <article class="card card-x compact">
      <header class="card__head"><span class="badge badge-x">IV</span><h4 class="card__title">Muito difícil</h4></header>
      <div class="card__body"><p>Apenas palato duro visível. Língua "engole" tudo.</p></div>
    </article>
  </div>

  <h3 class="section__sub">LEMON — mnemônico completo</h3>
  <article class="card">
    <div class="card__body">
      <ul class="list-tight">
        <li><strong>L — Look externally:</strong> trauma facial, barba grande, obesidade, pescoço curto, dentes proeminentes, micrognatia, queimadura, hematoma cervical.</li>
        <li><strong>E — Evaluate 3-3-2:</strong> regra acima.</li>
        <li><strong>M — Mallampati:</strong> classes III–IV = difícil.</li>
        <li><strong>O — Obstrução / obesidade:</strong> tumor, abscesso, edema, IMC &gt; 35.</li>
        <li><strong>N — Neck mobility:</strong> trauma cervical / colar = mobilidade restrita = difícil. <em>Em todo politrauma, considere via aérea difícil por princípio</em>.</li>
      </ul>
    </div>
  </article>

  <h3 class="section__sub">Algoritmo "não intuba, não ventila"</h3>
  <p class="muted">Adaptado do algoritmo difícil do ATLS 11 + Difficult Airway Society (DAS).</p>

  <div class="stepper">
    <div class="stepper__item" style="--step-c: var(--c-a)">
      <div class="stepper__num">A</div>
      <div class="stepper__body">
        <h4>Plano A — IOT direta (até 3 tentativas)</h4>
        <p><strong>Pré-oxigenar</strong> ≥ 3 min com O₂ 100%. Posicionar (sniffing position se cervical liberada; in-line se trauma). Sequência rápida com indutor + relaxante. <strong>Capnografia em onda obrigatória.</strong></p>
        <p class="muted">Cada tentativa: <em>otimizar</em> antes de repetir — trocar lâmina, usar bougie, BURP (Backward-Upward-Rightward Pressure), trocar operador, vídeolaringoscópio.</p>
      </div>
    </div>
    <div class="stepper__item" style="--step-c: var(--c-a)">
      <div class="stepper__num">B</div>
      <div class="stepper__body">
        <h4>Plano B — Máscara laríngea / SGA (até 3 tentativas) <span class="badge badge-new">ATLS 11</span></h4>
        <p>"Não intuba, mas <strong>preciso oxigenar agora</strong>." Inserir LMA / i-Gel. Verifica capnografia, pratica ventilação. Se ventila bem → ganhar tempo, chamar via aérea cirúrgica eletiva ou IOT por fibroscópio.</p>
        <p class="muted">A LMA <em>não</em> protege contra broncoaspiração — não substitui IOT em paciente com estômago cheio / trauma.</p>
      </div>
    </div>
    <div class="stepper__item" style="--step-c: var(--c-a)">
      <div class="stepper__num">C</div>
      <div class="stepper__body">
        <h4>Plano C — Máscara facial com 2 operadores</h4>
        <p>Se LMA falhou, <strong>retornar para máscara + ambu com 2 operadores</strong>: um sela a máscara com as duas mãos (E-C grip ou V-E grip), outro ventila o ambu. Cânula de Guedel + nasofaríngea associadas. Objetivo: oxigenar até crico.</p>
      </div>
    </div>
    <div class="stepper__item" style="--step-c: var(--c-x)">
      <div class="stepper__num">D</div>
      <div class="stepper__body">
        <h4>Plano D — Via aérea cirúrgica de emergência</h4>
        <p>"Não intuba, <strong>não ventila</strong>" → tempo crítico, hipóxia em &lt; 4 min. <strong>Cricotireoidostomia cirúrgica</strong> em adulto, <strong>punção</strong> em &lt; 12 anos. Não hesitar — a hesitação mata.</p>
      </div>
    </div>
  </div>

  <h3 class="section__sub">Cricotireoidostomia — passo a passo</h3>
  <div class="grid grid-2 gap-lg">
    <article class="card card-a">
      <header class="card__head"><span class="badge">Cirúrgica</span><h3 class="card__title">Adulto ≥ 12 anos</h3></header>
      <div class="card__body">
        <ul class="list-tight">
          <li>Identificar <strong>membrana cricotireóidea</strong> (depressão entre tireoide e cricoide).</li>
          <li><strong>Incisão vertical</strong> de 3–4 cm na pele (evita vasos laterais).</li>
          <li>Localizar a membrana, fazer <strong>incisão horizontal</strong> de ~1 cm.</li>
          <li>Dilatar com gancho traqueal ou pinça.</li>
          <li>Inserir cânula de traqueostomia <strong>6.0</strong> (ou TOT 6.0).</li>
          <li>Insuflar cuff, conectar ambu, <strong>confirmar com capnografia</strong>.</li>
        </ul>
      </div>
    </article>
    <article class="card card-c">
      <header class="card__head"><span class="badge">Punção</span><h3 class="card__title">Pediátrico &lt; 12 anos / ponte</h3></header>
      <div class="card__body">
        <ul class="list-tight">
          <li>Cateter sobre agulha (<strong>Jelco 14G</strong>) angulado 45° caudal através da membrana cricotireóidea.</li>
          <li>Aspirar ar para confirmar entrada na traqueia.</li>
          <li>Conectar a fonte de O₂ de <strong>alta pressão</strong> (jet ventilator) a 15 L/min.</li>
          <li>Ciclo: 1 s insuflando : 4 s exalando passivamente.</li>
          <li><strong>Carbonarcose</strong> em ~30–45 min: O₂ entra, mas CO₂ não sai bem → ponte para via definitiva, não solução.</li>
        </ul>
      </div>
    </article>
  </div>

  <div class="callout naoconfunda" style="margin-top:1rem">
    <strong class="callout__title">Não confunda — Cricotireoidostomia × Traqueostomia</strong>
    <p><strong>Cricotireoidostomia</strong>: rápida, simples, na membrana cricotireóidea, <em>via aérea cirúrgica de emergência</em>. <strong>Traqueostomia</strong>: lenta, em centro cirúrgico, abaixo do 2º–3º anel traqueal, eletiva ou para ventilação prolongada. Em prova: emergência → crico. Estabilidade prolongada → traqueostomia (após 7–14 dias de IOT).</p>
  </div>

  <div class="callout pegadinha" style="margin-top:1rem">
    <strong class="callout__title">Pegadinhas da via aérea difícil</strong>
    <ul class="list-tight">
      <li>"Punção cricotireóidea fornece via aérea definitiva por horas" → <strong>errado</strong>; ponte de 30–45 min até carbonarcose.</li>
      <li>"Cricotireoidostomia cirúrgica em criança de 8 anos" → <strong>contraindicada</strong> (cricoide é o único anel completo da via aérea pediátrica). Usar <strong>punção</strong>.</li>
      <li>"Após falha de IOT, partir direto para crico" → <strong>antes</strong>, tente LMA / máscara com 2 operadores (Plano B/C). Crico é Plano D.</li>
      <li>"Vídeolaringoscópio resolve toda via aérea difícil" — ajuda muito, mas não substitui o algoritmo. Em sangue/secreção, a câmera embaça.</li>
      <li>"Pré-oxigenação por 1 minuto é suficiente" → <strong>≥ 3 minutos</strong> (ou 8 respirações máximas em paciente cooperativo) para encher o reservatório de O₂ funcional.</li>
    </ul>
  </div>

  <div class="callout banca" style="margin-top:1rem">
    <strong class="callout__title">Como a banca testa o difícil</strong>
    <p>Cenário tipo: trauma facial extenso, sangramento ativo na cavidade oral, Glasgow 9, satura 88% em ar ambiente, abertura bucal &lt; 2 cm. Pergunta: "qual a próxima conduta?". Distratores: "ventilação não-invasiva", "IOT às cegas", "traqueostomia de urgência". Resposta certa: <strong>cricotireoidostomia cirúrgica</strong> (preparar enquanto o segundo operador tenta IOT com vídeolaringoscópio + bougie). Em pediatria &lt; 12 anos, a resposta vira <strong>punção cricotireóidea</strong>.</p>
  </div>
</section>`;

  S["b-respiracao"] = () => `
<section class="section" data-id="b-respiracao">
  <div class="block-head block-b">
    <div class="block-head__letter">B</div>
    <div class="block-head__copy">
      <h2>B — Respiração e ventilação</h2>
      <p>O A garantiu que o ar <em>entra</em>. O B pergunta: <strong>"o ar chega ao alvéolo, e o O₂ chega ao sangue?"</strong>. Uma via aérea pérvia com pneumotórax hipertensivo do outro lado <em>não</em> oxigena. Aqui você caça as 6 ameaças letais do tórax — em &lt; 1 minuto.</p>
    </div>
  </div>

  <div class="callout fisiopato">
    <strong class="callout__title">Oxigenar ≠ ventilar</strong>
    <p><strong>Oxigenar</strong> = O₂ atravessa a membrana alvéolo-capilar (medido pela <em>SpO₂</em>). <strong>Ventilar</strong> = mover ar para dentro e para fora, eliminando CO₂ (medido pelo <em>EtCO₂</em>). Um paciente em apneia com pré-oxigenação de 100% pode ter SpO₂ 99% por minutos enquanto retém CO₂ violentamente. Em prova: paciente "satura bem" mas com FR 6 ipm e EtCO₂ 70 = <strong>insuficiência ventilatória</strong>, precisa de suporte.</p>
  </div>

  <h3 class="section__sub">Exame físico do tórax — IPPA sistemático</h3>
  <p class="muted">Sempre <strong>bilateral e simétrico</strong>. Comparar lado a lado, em sequência. Total: 60–90 segundos.</p>

  <div class="grid grid-2 gap-lg">
    <article class="card card-b">
      <header class="card__head"><span class="badge badge-b">I</span><h3 class="card__title">Inspeção</h3></header>
      <div class="card__body">
        <ul class="list-tight">
          <li><strong>Frequência respiratória.</strong> &lt; 10 ou &gt; 30 ipm = ameaça.</li>
          <li><strong>Padrão</strong>: superficial, paradoxal, uso de musculatura acessória, tiragem (intercostal, subcostal, fúrcula).</li>
          <li><strong>Simetria de expansão.</strong> Hemitórax que não expande = pneumotórax, hemotórax, fratura de costelas com dor, pulmão atelectasiado.</li>
          <li><strong>Lesões da parede:</strong> ferimentos abertos ("ferida soprante" = pneumotórax aberto), contusões, equimose, hematomas, deformidades.</li>
          <li><strong>Posição da traqueia</strong> (fúrcula esternal): desvio contralateral = pneumotórax hipertensivo do lado oposto.</li>
          <li><strong>Turgência jugular:</strong> tamponamento, pneumotórax hipertensivo, IC direita.</li>
        </ul>
      </div>
    </article>
    <article class="card card-b">
      <header class="card__head"><span class="badge badge-b">P</span><h3 class="card__title">Palpação</h3></header>
      <div class="card__body">
        <ul class="list-tight">
          <li><strong>Crepitação óssea</strong> (fratura de costela).</li>
          <li><strong>Enfisema subcutâneo</strong> ("crepitação à neve") = pneumotórax, lesão de via aérea, perfuração de esôfago.</li>
          <li><strong>Dor à palpação</strong> + arcos costais consecutivos quebrados = suspeitar de tórax instável.</li>
          <li><strong>Frêmito tóraco-vocal:</strong> aumentado em consolidação, diminuído em pneumotórax/hemotórax/derrame.</li>
        </ul>
      </div>
    </article>
    <article class="card card-b">
      <header class="card__head"><span class="badge badge-b">P</span><h3 class="card__title">Percussão</h3></header>
      <div class="card__body">
        <ul class="list-tight">
          <li><strong>Hipertimpânico</strong> (ressonância aumentada) = ar onde não devia → <strong>pneumotórax</strong>.</li>
          <li><strong>Maciço</strong> (submacicez) = líquido onde devia haver ar → <strong>hemotórax</strong>, derrame, contusão pulmonar grave.</li>
          <li><strong>Som claro pulmonar</strong> bilateral simétrico = normal.</li>
          <li>Comparar metameros homólogos lado a lado.</li>
        </ul>
      </div>
    </article>
    <article class="card card-b">
      <header class="card__head"><span class="badge badge-b">A</span><h3 class="card__title">Ausculta</h3></header>
      <div class="card__body">
        <ul class="list-tight">
          <li><strong>Murmúrio vesicular ausente</strong> + hipertimpânico = pneumotórax.</li>
          <li><strong>MV ausente</strong> + maciço = hemotórax / derrame.</li>
          <li><strong>MV diminuído</strong> + estertores = contusão pulmonar / atelectasia / pneumonia.</li>
          <li><strong>Sopro tubário</strong> = consolidação.</li>
          <li>Auscultar em <strong>ápices, médios, bases</strong> — incluir região axilar (LAM/LAA).</li>
        </ul>
      </div>
    </article>
  </div>

  <h3 class="section__sub">Oxímetro e capnógrafo — leitura crítica</h3>
  <div class="grid grid-2 gap-lg">
    <article class="card">
      <header class="card__head"><span class="badge">SpO₂</span><h3 class="card__title">Oximetria de pulso</h3></header>
      <div class="card__body">
        <p>Mede O₂ ligado à hemoglobina. <strong>Não detecta hipercapnia</strong>, <strong>nem</strong> intoxicação por CO ou cianeto (a hemoglobina parece "saturada" mesmo sem O₂ funcional).</p>
        <ul class="list-tight">
          <li>Alvo no trauma: <strong>≥ 94%</strong>.</li>
          <li>Falha de leitura: hipoperfusão, hipotermia, esmalte, movimento, choque grave.</li>
          <li>Em queimado de incêndio fechado: SpO₂ pode ser <strong>falsamente normal</strong> (intoxicação por CO) — pedir <strong>carboxi-Hb</strong>.</li>
        </ul>
      </div>
    </article>
    <article class="card">
      <header class="card__head"><span class="badge badge-new">EtCO₂</span><h3 class="card__title">Capnografia em onda</h3></header>
      <div class="card__body">
        <p>Mede CO₂ exalado, pulmão a pulmão. <strong>Padrão-ouro de confirmação de IOT (ATLS 11)</strong> — se a onda quadrada aparece, o tubo está na traqueia.</p>
        <ul class="list-tight">
          <li>Valor normal: <strong>35–45 mmHg</strong>.</li>
          <li>Queda súbita = embolia, parada, extubação acidental, dobra do tubo.</li>
          <li>Onda achatada = broncoespasmo, vazamento de cuff.</li>
          <li>Em PCR: EtCO₂ &lt; 10 mmHg após 20 min sugere mau prognóstico.</li>
        </ul>
      </div>
    </article>
  </div>

  <h3 class="section__sub">As 6 ameaças letais do tórax — check-list</h3>
  <p class="muted">Ao final do B você deve ter <em>excluído</em> ou <em>tratado</em> as 6. Decoreba útil: <strong>ATOMIC</strong> ou <strong>PHTHcoCT</strong> — escolha um e fique com ele.</p>

  <div class="grid grid-3 gap-md">
    <article class="card card-x compact">
      <header class="card__head"><span class="badge badge-x">1</span><h4 class="card__title">Pneumotórax hipertensivo</h4></header>
      <div class="card__body"><p>Choque obstrutivo + MV ausente + hipertimpânico + jugular túrgida + desvio de traqueia. Diagnóstico clínico, sem rx. Toracocentese imediata.</p></div>
    </article>
    <article class="card card-x compact">
      <header class="card__head"><span class="badge badge-x">2</span><h4 class="card__title">Pneumotórax aberto</h4></header>
      <div class="card__body"><p>"Ferida soprante" na parede torácica. Curativo de 3 pontas → drenagem em selo d'água longe da ferida.</p></div>
    </article>
    <article class="card card-x compact">
      <header class="card__head"><span class="badge badge-x">3</span><h4 class="card__title">Hemotórax maciço</h4></header>
      <div class="card__body"><p>&gt; 1500 mL na drenagem inicial OU &gt; 200 mL/h por 2–4 h. Choque + MV ausente + maciço à percussão. Toracotomia se persistente.</p></div>
    </article>
    <article class="card card-x compact">
      <header class="card__head"><span class="badge badge-x">4</span><h4 class="card__title">Tórax instável + contusão</h4></header>
      <div class="card__body"><p>≥ 2 arcos consecutivos quebrados em ≥ 2 pontos cada. Respiração paradoxal. Contusão pulmonar associada é o que mata.</p></div>
    </article>
    <article class="card card-x compact">
      <header class="card__head"><span class="badge badge-x">5</span><h4 class="card__title">Tamponamento cardíaco</h4></header>
      <div class="card__body"><p>Tríade de Beck: hipotensão + bulhas abafadas + jugular túrgida. FAST subxifoide. Toracotomia / janela.</p></div>
    </article>
    <article class="card card-x compact">
      <header class="card__head"><span class="badge badge-x">6</span><h4 class="card__title">Obstrução de via aérea</h4></header>
      <div class="card__body"><p>Lembrar: o A pode ter passado mascarado. Reavaliar via aérea no B se piora respiratória súbita.</p></div>
    </article>
  </div>

  <div class="callout atls11" style="margin-top:1rem">
    <strong class="callout__title">O que mudou na 11ª — resumo do B</strong>
    <ul class="list-tight">
      <li><strong>O₂ ≥ 15 L/min</strong> em máscara não-reinalante para todo politrauma com SpO₂ &lt; 94% ou dispneia (antes era 10 L/min).</li>
      <li><strong>Toracocentese de alívio</strong>: 5º EIC linha axilar média/anterior em <em>qualquer idade</em>; cateter ≥ 5 cm.</li>
      <li><strong>Pneumotórax pequeno</strong> (&lt; 3,5 cm) em paciente estável, sem VM e sem voo: <em>observar</em>.</li>
      <li><strong>Fixação cirúrgica de costelas (SSRF)</strong> com indicação ampliada em tórax instável.</li>
      <li><strong>Hemotórax — toracotomia</strong>: critérios mantidos, mas reforçada a indicação por <em>necessidade persistente de transfusão</em>.</li>
    </ul>
  </div>

  <div class="callout pegadinha" style="margin-top:1rem">
    <strong class="callout__title">Pegadinhas do B</strong>
    <ul class="list-tight">
      <li>"SpO₂ 98% em queimado de incêndio fechado" → pode ser <strong>intoxicação por CO</strong>; pedir carboxi-Hb e dosar.</li>
      <li>"Toracocentese no 2º EIC hemiclavicular como padrão" → <strong>desatualizado</strong> em ATLS 11; é 5º EIC LAM/LAA.</li>
      <li>"FR 8 ipm, SpO₂ 99% — paciente estável" → <strong>errado</strong>: bradipneia + hipoventilação = retenção de CO₂.</li>
      <li>"MV ausente unilateral em ar ambiente" sempre é pneumotórax → <strong>não</strong>; pode ser intubação seletiva direita, hemotórax, atelectasia, contusão grave.</li>
      <li>"Pneumotórax simples pequeno em paciente que vai ser intubado para cirurgia" → <strong>drenar antes</strong> da VM (vai virar hipertensivo).</li>
    </ul>
  </div>

  <div class="callout banca" style="margin-top:1rem">
    <strong class="callout__title">Como a banca testa o B</strong>
    <p>O cenário clássico é "trauma torácico fechado, paciente dispneico, satura 88%". A pergunta não é o diagnóstico — é a <strong>sequência</strong>: O₂ máscara não-reinalante 15 L/min → exame físico IPPA → identificar a ameaça → tratar (toracocentese, drenagem, curativo de 3 pontas, IOT). Distrator clássico: "rx de tórax antes de qualquer conduta" — em pneumotórax hipertensivo é <strong>erro grave</strong>: diagnóstico é clínico.</p>
  </div>
</section>`;

  S["b-pneumotorax"] = () => `
<section class="section" data-id="b-pneumotorax">
  <div class="block-head block-b">
    <div class="block-head__letter">♁</div>
    <div class="block-head__copy">
      <h2>Pneumotórax — os 3 tipos</h2>
      <p>Ar onde não devia. <strong>Hipertensivo</strong> mata em minutos. <strong>Aberto</strong> equaliza pressão e desloca mediastino. <strong>Simples</strong> pode até ser observado. Saber qual é qual é metade da prova.</p>
    </div>
  </div>

  <div class="callout fisiopato">
    <strong class="callout__title">Fisiopato em uma frase</strong>
    <p>Pneumotórax = <strong>ar entre as pleuras</strong>. Quando o ar <em>continua entrando e não sai</em> (mecanismo de válvula), a pressão sobe → colapsa pulmão → desvia mediastino → <strong>compressão de cavas</strong> → reduz retorno venoso → <strong>choque obstrutivo</strong>. É isso que mata no hipertensivo, não a hipóxia em si.</p>
  </div>

  <h3 class="section__sub">1. Pneumotórax hipertensivo</h3>
  <article class="card card-x">
    <header class="card__head"><span class="badge badge-x">Mata em &lt; 15 min</span><h3 class="card__title">Diagnóstico clínico — sem rx</h3></header>
    <div class="card__body">
      <p><strong>Tríade clássica:</strong> hipotensão + MV ausente unilateral + hipertimpanismo. <strong>Achados associados:</strong> turgência jugular, desvio contralateral de traqueia, cianose, dispneia intensa, agitação.</p>
      <p><strong>Conduta — toracocentese de alívio imediata.</strong></p>
      <ul class="list-tight">
        <li><strong>Sítio (ATLS 11):</strong> 5º EIC linha axilar média/anterior, em <em>qualquer idade</em>. (10ª usava 2º EIC hemiclavicular como padrão; agora é alternativa em obesos/musculosos.)</li>
        <li><strong>Cateter:</strong> ≥ 5 cm em adultos (idealmente 8 cm — parede torácica média 4–4,5 cm; ~8% das paredes ultrapassam 5 cm).</li>
        <li>Aspirar até saída franca de ar (assobio audível).</li>
        <li><strong>Após alívio</strong>: drenagem torácica formal em selo d'água, 5º EIC LAA-LAM, dreno calibroso (28–32 Fr).</li>
      </ul>
      <details class="callout-gabarito">
        <summary>Ver o que muda o gabarito</summary>
        <p>Pneumotórax hipertensivo é <strong>diagnóstico clínico</strong>: tirar rx <em>antes</em> da descompressão é erro grave. Em prova: se o enunciado descreve a tríade + jugular túrgida em paciente pós-trauma, a próxima conduta é <strong>toracocentese</strong>, nunca "rx de tórax para confirmar".</p>
      </details>
    </div>
  </article>

  <h3 class="section__sub">2. Pneumotórax aberto ("ferida soprante")</h3>
  <article class="card card-x">
    <header class="card__head"><span class="badge badge-x">Mata em minutos</span><h3 class="card__title">Quando o defeito da parede &gt; 2/3 do diâmetro da traqueia</h3></header>
    <div class="card__body">
      <p>Ferida torácica grande funciona como uma <strong>via aérea alternativa</strong>: na inspiração, o ar entra pelo orifício em vez de pela traqueia (caminho de menor resistência). Pulmão não expande → hipóxia + hipoventilação.</p>
      <p><strong>Conduta:</strong></p>
      <ul class="list-tight">
        <li><strong>Curativo de 3 pontas (oclusivo de 3 lados):</strong> tampa a ferida na inspiração; abre na expiração — evita virar hipertensivo.</li>
        <li>Curativo selado em 4 lados <strong>nunca</strong> (vira hipertensivo).</li>
        <li><strong>Drenagem torácica</strong> formal em selo d'água, em <em>outro</em> sítio (5º EIC LAA-LAM), <em>longe</em> da ferida.</li>
        <li>Fechamento cirúrgico definitivo da parede em centro cirúrgico.</li>
      </ul>
      <details class="callout-gabarito">
        <summary>Ver o que muda o gabarito</summary>
        <p>Distrator clássico: "drenagem pelo próprio orifício da ferida". <strong>Errado</strong> — usa-se outro sítio. E "selar a ferida com curativo oclusivo total" também é erro: vira hipertensivo. Resposta certa: <strong>3 pontas + dreno em outro sítio</strong>.</p>
      </details>
    </div>
  </article>

  <h3 class="section__sub">3. Pneumotórax simples</h3>
  <article class="card card-b">
    <header class="card__head"><span class="badge badge-b">Estável</span><h3 class="card__title">Sem choque, sem desvio mediastinal</h3></header>
    <div class="card__body">
      <p>Pode ser <strong>oculto</strong> (visto só em TC, não em rx) ou pequeno em rx. MV diminuído, hipertimpanismo localizado, dor pleurítica.</p>
      <p><strong>Conduta — depende do tamanho e contexto:</strong></p>
      <ul class="list-tight">
        <li><strong>&lt; 3,5 cm de distância pleural (ATLS 11)</strong> em paciente <em>estável, sem VM, sem voo</em>: <strong>observar</strong> com rx seriado.</li>
        <li><strong>≥ 3,5 cm</strong> ou paciente que <em>vai ser intubado / submetido a VM</em>: <strong>drenar antes</strong> (vira hipertensivo na VM).</li>
        <li>Paciente que vai voar (transferência aérea): <strong>drenar</strong> (queda de pressão atmosférica expande o pneumotórax).</li>
        <li>Pneumotórax oculto em politraumatizado <em>estável</em>: pode-se observar.</li>
      </ul>
      <details class="callout-gabarito">
        <summary>Ver o que muda o gabarito</summary>
        <p>Em ATLS 11, <strong>nem todo pneumotórax precisa drenar</strong>. Distrator: "drenar todos os pneumotórax independentemente do tamanho". <strong>Errado</strong>. A conduta atual é tamanho-dependente e contexto-dependente. Mas atenção: <em>vai ser intubado? drena.</em></p>
      </details>
    </div>
  </article>

  <h3 class="section__sub">Drenagem torácica em selo d'água — passo a passo</h3>
  <div class="stepper">
    <div class="stepper__item" style="--step-c: var(--c-b)">
      <div class="stepper__num">1</div>
      <div class="stepper__body">
        <h4>Posicionamento</h4>
        <p>Paciente em decúbito dorsal, braço do lado a drenar elevado acima da cabeça. Antissepsia ampla, campos estéreis, anestesia local infiltrativa generosa (lidocaína a 1–2%, até 4 mg/kg) — incluindo <strong>periósteo da costela</strong>.</p>
      </div>
    </div>
    <div class="stepper__item" style="--step-c: var(--c-b)">
      <div class="stepper__num">2</div>
      <div class="stepper__body">
        <h4>Sítio: triângulo de segurança</h4>
        <p>Limites: <strong>borda lateral do peitoral maior</strong>, <strong>borda anterior do grande dorsal</strong>, <strong>linha horizontal no nível do mamilo</strong> (5º EIC). Local-alvo: <strong>5º EIC, linha axilar média/anterior</strong>.</p>
      </div>
    </div>
    <div class="stepper__item" style="--step-c: var(--c-b)">
      <div class="stepper__num">3</div>
      <div class="stepper__body">
        <h4>Incisão e dissecção</h4>
        <p>Incisão transversal de ~3 cm na pele <strong>sobre a costela inferior</strong> do EIC escolhido (evita feixe vásculo-nervoso intercostal, que é inferior à costela superior). Dissecção romba com pinça Kelly até pleura.</p>
      </div>
    </div>
    <div class="stepper__item" style="--step-c: var(--c-b)">
      <div class="stepper__num">4</div>
      <div class="stepper__body">
        <h4>Entrada na pleura</h4>
        <p><strong>Dedo indicador</strong> através do trajeto: confirma pulmão (ou ausência) e descola aderências. <em>Nunca</em> usar trocarte/agulha cega.</p>
      </div>
    </div>
    <div class="stepper__item" style="--step-c: var(--c-b)">
      <div class="stepper__num">5</div>
      <div class="stepper__body">
        <h4>Inserção do dreno</h4>
        <p>Dreno torácico <strong>28–32 Fr</strong> (calibroso para hemotórax/hidrotórax; menor pode coagular). Direcionar para <strong>ápice posterior</strong> em pneumotórax. Fixar na pele com sutura em "U".</p>
      </div>
    </div>
    <div class="stepper__item" style="--step-c: var(--c-b)">
      <div class="stepper__num">6</div>
      <div class="stepper__body">
        <h4>Conexão e confirmação</h4>
        <p>Conectar a sistema de selo d'água sob &lt; 20 cm H₂O de aspiração contínua. Confirmar borbulhamento (pneumotórax) ou drenagem de líquido (hemotórax). <strong>Rx de controle</strong> obrigatório.</p>
      </div>
    </div>
  </div>

  <div class="callout pegadinha" style="margin-top:1rem">
    <strong class="callout__title">Pegadinhas do pneumotórax</strong>
    <ul class="list-tight">
      <li>Curativo selado em 4 lados → <strong>vira hipertensivo</strong>.</li>
      <li>Drenagem pelo próprio orifício da ferida aberta → <strong>errado</strong>; outro sítio.</li>
      <li>"Esperar rx para descomprimir hipertensivo" → <strong>erro grave</strong>; diagnóstico é clínico.</li>
      <li>Pneumotórax pequeno em paciente que <em>vai ser intubado</em> ou <em>vai voar</em> → <strong>drena</strong>.</li>
      <li>Inserir dreno <em>sobre</em> a costela superior → atinge feixe vásculo-nervoso intercostal. Sempre <strong>sobre a costela inferior</strong> do EIC.</li>
      <li>Trocarte cego → <strong>contraindicado</strong>; usar dissecção romba + dedo.</li>
    </ul>
  </div>

  <div class="callout banca" style="margin-top:1rem">
    <strong class="callout__title">Como a banca testa pneumotórax</strong>
    <p>Caso típico do hipertensivo: AAT, paciente dispneico, MV ausente à esquerda, jugular túrgida. Pergunta: "qual conduta imediata?". Distrator: "rx de tórax". Resposta: <strong>toracocentese de alívio no 5º EIC LAM</strong>. Caso típico do aberto: FAB torácico com ferida soprante. Resposta: <strong>curativo de 3 pontas + drenagem em outro sítio</strong>. Caso típico do simples: trauma com pneumotórax de 2 cm em rx, paciente estável, sem VM. Resposta: <strong>observar</strong>.</p>
  </div>
</section>`;

  S["b-hemotorax"] = () => `
<section class="section" data-id="b-hemotorax">
  <div class="block-head block-b">
    <div class="block-head__letter">♥</div>
    <div class="block-head__copy">
      <h2>Hemotórax</h2>
      <p>Sangue na cavidade pleural. A boa notícia: o pulmão é um <strong>circuito de baixa pressão</strong> — &gt; 80% dos hemotórax são <em>autolimitados</em>. A má: quando não para, vai virar maciço — e aí o critério de toracotomia é fino.</p>
    </div>
  </div>

  <div class="callout fisiopato">
    <strong class="callout__title">Por que &gt; 80% se resolvem com dreno?</strong>
    <p>O parênquima pulmonar é vascularizado por <strong>circulação de baixa pressão</strong> (pressão da artéria pulmonar ≈ 25/8 mmHg). Sangramento de pulmão tende a parar com tamponamento local. <strong>Quando não para</strong>, geralmente o foco é <em>sistêmico</em>: artérias intercostais, mamária interna, vasos hilares, grandes vasos mediastinais — esses sangram com pressão arterial sistêmica.</p>
  </div>

  <h3 class="section__sub">Quadro clínico</h3>
  <div class="grid grid-2 gap-lg">
    <article class="card card-b">
      <header class="card__head"><span class="badge badge-b">Exame</span><h3 class="card__title">Achados</h3></header>
      <div class="card__body">
        <ul class="list-tight">
          <li><strong>MV ausente ou diminuído</strong> unilateral.</li>
          <li><strong>Submacicez</strong> à percussão (líquido).</li>
          <li><strong>Sinal de Damoiseau</strong>: linha curva de macicez de convexidade superior na percussão (limite superior do líquido).</li>
          <li><strong>Frêmito tóraco-vocal diminuído</strong>.</li>
          <li>Sinais de choque hipovolêmico se &gt; 1500 mL.</li>
          <li><strong>Sem</strong> jugular túrgida nem desvio mediastinal (diferencial com hipertensivo).</li>
        </ul>
      </div>
    </article>
    <article class="card card-b">
      <header class="card__head"><span class="badge badge-b">Imagem</span><h3 class="card__title">Achados radiológicos</h3></header>
      <div class="card__body">
        <ul class="list-tight">
          <li><strong>Rx em pé</strong>: derrame &gt; 200 mL apaga seio costofrênico.</li>
          <li><strong>Rx em decúbito</strong> (politrauma): velamento difuso do hemitórax — pode subestimar o volume.</li>
          <li><strong>e-FAST</strong>: detecta hemotórax pequeno antes do rx; substituiu rx em alguns serviços.</li>
          <li><strong>TC de tórax</strong>: padrão-ouro para volume e foco; só em paciente <em>estável</em>.</li>
        </ul>
      </div>
    </article>
  </div>

  <h3 class="section__sub">Classificação por volume</h3>
  <div class="grid grid-3 gap-md">
    <article class="card card-b compact">
      <header class="card__head"><span class="badge badge-b">Pequeno</span><h4 class="card__title">&lt; 500 mL</h4></header>
      <div class="card__body"><p>Apaga o seio costofrênico. Pode ser observado se paciente <strong>estável</strong> — a maioria reabsorve. Drenar se sintomático.</p></div>
    </article>
    <article class="card card-c compact">
      <header class="card__head"><span class="badge badge-c">Moderado</span><h4 class="card__title">500–1500 mL</h4></header>
      <div class="card__body"><p>Velamento de até metade do hemitórax. <strong>Drenar</strong> com dreno calibroso (28–32 Fr). Maioria autolimitada após drenagem.</p></div>
    </article>
    <article class="card card-x compact">
      <header class="card__head"><span class="badge badge-x">Maciço</span><h4 class="card__title">&gt; 1500 mL</h4></header>
      <div class="card__body"><p>Choque + velamento extenso. Drenagem inicial com saída &gt; 1500 mL = <strong>indicação de toracotomia</strong>.</p></div>
    </article>
  </div>

  <h3 class="section__sub">Drenagem torácica — manejo do hemotórax</h3>
  <article class="card">
    <div class="card__body">
      <ul class="list-tight">
        <li><strong>Sítio:</strong> 5º EIC linha axilar média/anterior (mesmo do pneumotórax).</li>
        <li><strong>Calibre:</strong> &gt; 28 Fr (idealmente 32 Fr) — sangue coagula em drenos finos.</li>
        <li><strong>Direção do dreno:</strong> posterior e basal (sangue acumula em decúbito).</li>
        <li><strong>Selo d'água</strong> com aspiração suave (–20 cm H₂O).</li>
        <li>Anotar o <strong>volume drenado inicial</strong> (saída imediata) e o <strong>débito por hora</strong>.</li>
        <li>Reavaliar com rx pós-dreno e clinicamente a cada 2–4 h.</li>
      </ul>
    </div>
  </article>

  <h3 class="section__sub">Toracotomia — indicações</h3>
  <article class="card card-x">
    <header class="card__head"><span class="badge badge-x">Indicações</span><h3 class="card__title">Quando o dreno não basta</h3></header>
    <div class="card__body">
      <ul class="list-tight">
        <li><strong>&gt; 1500 mL</strong> de saída <em>imediata</em> à drenagem (hemotórax maciço).</li>
        <li><strong>&gt; 200 mL/h</strong> por <strong>2–4 h consecutivas</strong>.</li>
        <li><strong>1/3 da volemia</strong> (≈ 1500 mL em adulto de 70 kg) drenado.</li>
        <li><span class="badge badge-new">ATLS 11</span> <strong>Necessidade persistente de transfusão</strong> para manter estabilidade — critério clínico, complementa os volumétricos.</li>
        <li><strong>Instabilidade hemodinâmica refratária</strong> com origem torácica clara.</li>
        <li><strong>Hemotórax retido</strong> &gt; 500 mL após 72 h apesar de drenagem (indicação de VATS).</li>
      </ul>
      <details class="callout-gabarito">
        <summary>Ver o que muda o gabarito</summary>
        <p>O ATLS 11 reforça que <strong>volume isolado</strong> não é a única chave: <em>"necessidade persistente de transfusão"</em> entrou como critério complementar. Em prova: paciente que drenou 800 mL inicial, mantém 150 mL/h, mas <em>está instável e exigindo bolus de hemoderivados</em> = <strong>toracotomia</strong> mesmo sem cumprir o &gt; 200 mL/h.</p>
      </details>
    </div>
  </article>

  <h3 class="section__sub">Toracotomia — vias e finalidade</h3>
  <div class="grid grid-2 gap-lg">
    <article class="card card-c">
      <header class="card__head"><span class="badge badge-c">Resgate</span><h3 class="card__title">Toracotomia de reanimação</h3></header>
      <div class="card__body">
        <p>Em PCR traumática <strong>recente</strong> (sinais de vida no transporte ou na chegada). Geralmente <strong>antero-lateral esquerda no 4º–5º EIC</strong> (acesso ao pericárdio + descida da aorta para clampeamento).</p>
        <ul class="list-tight">
          <li>Indicada principalmente em <strong>trauma penetrante torácico</strong> com sinais de vida no atendimento.</li>
          <li>Pouca utilidade em trauma fechado em PCR (mortalidade quase 100%).</li>
          <li>Permite: liberar tamponamento, controlar sangramento intratorácico, clampear aorta torácica descendente, massagem cardíaca direta.</li>
        </ul>
      </div>
    </article>
    <article class="card card-b">
      <header class="card__head"><span class="badge badge-b">Eletiva</span><h3 class="card__title">Toracotomia formal</h3></header>
      <div class="card__body">
        <p>Em centro cirúrgico, paciente estabilizado para procedimento. <strong>Postero-lateral direita</strong> ou <strong>esquerda</strong> conforme localização do sangramento. Permite reparo definitivo.</p>
        <ul class="list-tight">
          <li>Sangramento de artéria intercostal / mamária interna (suturar/ligar).</li>
          <li>Lesão de parênquima pulmonar (sutura, lobectomia se necessário).</li>
          <li>Lesão hilar (clampeamento + reparo).</li>
          <li><strong>VATS</strong> (videotoracoscopia) é alternativa para hemotórax retido em paciente estável.</li>
        </ul>
      </div>
    </article>
  </div>

  <div class="callout naoconfunda" style="margin-top:1rem">
    <strong class="callout__title">Não confunda — Hemotórax × Pneumotórax × Tamponamento</strong>
    <p><strong>Hemotórax:</strong> MV ausente + <em>maciço</em> à percussão + sem desvio mediastinal nem jugular túrgida.<br>
    <strong>Pneumotórax hipertensivo:</strong> MV ausente + <em>hipertimpanismo</em> + jugular túrgida + desvio de traqueia.<br>
    <strong>Tamponamento cardíaco:</strong> jugular túrgida + bulhas abafadas + hipotensão (Beck), <em>sem</em> alteração da ausculta pulmonar.<br>
    Os 3 cursam com hipotensão. A diferença é a <strong>percussão</strong> e a <strong>presença ou não de desvio mediastinal</strong>.</p>
  </div>

  <div class="callout pegadinha" style="margin-top:1rem">
    <strong class="callout__title">Pegadinhas do hemotórax</strong>
    <ul class="list-tight">
      <li>"Drenar com dreno fino (20 Fr)" → <strong>errado</strong>; sangue coagula. Mínimo 28 Fr (idealmente 32).</li>
      <li>"Toracotomia obrigatória só pelo volume &gt; 1500 mL" → ATLS 11: <strong>necessidade persistente de transfusão</strong> também indica.</li>
      <li>"Hemotórax retido pequeno (300 mL) deve ser drenado com VATS sempre" → &lt; 500 mL geralmente <em>reabsorve</em>.</li>
      <li>"Toracotomia de reanimação em trauma fechado em PCR" → mortalidade quase 100%; raramente indicada.</li>
      <li>"Rx em decúbito é tão sensível quanto rx em pé" → <strong>errado</strong>; em decúbito subestima volume.</li>
    </ul>
  </div>

  <div class="callout banca" style="margin-top:1rem">
    <strong class="callout__title">Como a banca testa hemotórax</strong>
    <p>Cenário: trauma fechado torácico, MV ausente à direita, percussão maciça, PA 96×60. Pergunta primária: "próxima conduta?" → <strong>drenagem torácica</strong>. Cenário avançado: paciente drenou 1700 mL imediatos = <strong>toracotomia</strong>. Cenário ATLS 11: paciente drenou 800 mL inicial + segue exigindo transfusão = <strong>toracotomia</strong> (necessidade persistente de transfusão).</p>
  </div>
</section>`;

  S["b-flail-contusao"] = () => `
<section class="section" data-id="b-flail-contusao">
  <div class="block-head block-b">
    <div class="block-head__letter">≋</div>
    <div class="block-head__copy">
      <h2>Tórax instável &amp; contusão pulmonar</h2>
      <p>O <strong>flail chest</strong> é o que se vê. A <strong>contusão pulmonar</strong> é o que mata. A maior mudança da 11ª aqui é que a <em>cirurgia</em> de fixação de costelas (SSRF) saiu do "só em casos extremos" e ganhou indicação ampliada.</p>
    </div>
  </div>

  <div class="callout fisiopato">
    <strong class="callout__title">Fisiopato — o que mata é o parênquima, não o osso</strong>
    <p>O paciente com tórax instável quase nunca morre <em>do</em> arco costal quebrado. Morre da <strong>contusão pulmonar subjacente</strong>: edema + hemorragia alveolar + alteração V/Q → hipoxemia progressiva nas primeiras 24–72 h, podendo evoluir para SDRA. A respiração paradoxal piora a ventilação, mas o vilão fisiológico é o pulmão lesado por <em>baixo</em>.</p>
  </div>

  <h3 class="section__sub">Tórax instável (flail chest) — definição</h3>
  <article class="card card-x">
    <header class="card__head"><span class="badge badge-x">Definição</span><h3 class="card__title">≥ 2 arcos consecutivos × 2 pontos cada</h3></header>
    <div class="card__body">
      <p>Um <strong>segmento da parede torácica perde continuidade óssea</strong> com o resto do gradil → passa a se mover <em>independentemente</em> da respiração — e em <strong>direção contrária</strong> (paradoxal):</p>
      <ul class="list-tight">
        <li><strong>Inspiração</strong>: gradil expande, mas o segmento solto <strong>afunda</strong> (puxado pela pressão negativa).</li>
        <li><strong>Expiração</strong>: gradil retrai, mas o segmento solto <strong>protrui</strong>.</li>
      </ul>
      <p class="muted">Diagnóstico é <strong>clínico</strong> (inspeção + palpação). Rx confirma fraturas, TC quantifica contusão associada.</p>
    </div>
  </article>

  <h3 class="section__sub">Respiração paradoxal — visualização</h3>
  <div class="flail-anim">
    <div class="flail-side">
      <h4>Lado normal</h4>
      <div class="flail-bone"></div>
      <p class="muted" style="font-size:12px">Sobe na inspiração, desce na expiração</p>
    </div>
    <div class="flail-side">
      <h4>Lado com flail</h4>
      <div class="flail-bone paradox"></div>
      <p class="muted" style="font-size:12px">Movimento oposto — &quot;afunda&quot; quando o resto sobe</p>
    </div>
  </div>

  <h3 class="section__sub">Conduta — escala progressiva</h3>
  <div class="stepper">
    <div class="stepper__item" style="--step-c: var(--c-b)">
      <div class="stepper__num">1</div>
      <div class="stepper__body">
        <h4>Analgesia agressiva</h4>
        <p>Dor controlada = ventilação adequada = menos atelectasia/pneumonia. Opções: opioide IV titulado, <strong>analgesia regional</strong> (peridural torácica, bloqueio paravertebral, bloqueio de serrátil, intercostal), AINEs (cuidado em politrauma).</p>
        <p class="muted">Subestimar a analgesia é o erro mais comum. Paciente com dor &gt; 7/10 não respira fundo, não tosse, vai atelectasiar.</p>
      </div>
    </div>
    <div class="stepper__item" style="--step-c: var(--c-b)">
      <div class="stepper__num">2</div>
      <div class="stepper__body">
        <h4>Suporte ventilatório</h4>
        <p><strong>O₂ ≥ 15 L/min</strong> em máscara não-reinalante. Se SpO₂ persistente &lt; 90% ou trabalho respiratório elevado: <strong>VNI</strong> (CPAP/BiPAP) em paciente cooperativo. <strong>IOT + VM</strong> se falência ventilatória, choque, Glasgow ≤ 8 ou indicação cirúrgica.</p>
        <p class="muted">A VM funciona como "fixação interna pneumática" — a pressão positiva tampona a respiração paradoxal.</p>
      </div>
    </div>
    <div class="stepper__item" style="--step-c: var(--c-b)">
      <div class="stepper__num">3</div>
      <div class="stepper__body">
        <h4>Fluidoterapia controlada</h4>
        <p>Contusão pulmonar = pulmão úmido. <strong>Excesso de cristaloide</strong> piora edema alveolar e oxigenação. Manter euvolemia, evitar bolus desnecessários, transfundir conforme PTM se sangramento.</p>
      </div>
    </div>
    <div class="stepper__item" style="--step-c: var(--c-b)">
      <div class="stepper__num">4</div>
      <div class="stepper__body">
        <h4>Fisioterapia respiratória</h4>
        <p>Mobilização precoce, espirometria de incentivo, ventilação não-invasiva intermitente. Objetivo: prevenir atelectasia e pneumonia (a complicação que mata após 72 h).</p>
      </div>
    </div>
    <div class="stepper__item" style="--step-c: var(--c-b)">
      <div class="stepper__num">5</div>
      <div class="stepper__body">
        <h4>Fixação cirúrgica de costelas (SSRF) <span class="badge badge-new">ampliada · ATLS 11</span></h4>
        <p>Surgical Stabilization of Rib Fractures. Antes era exceção. <strong>Hoje (ATLS 11) tem indicação ampliada</strong>:</p>
        <ul class="list-tight">
          <li>Tórax instável (flail chest) com falência de desmame da VM.</li>
          <li>≥ 3 fraturas <strong>deslocadas</strong> com dor refratária.</li>
          <li>Falha de analgesia adequada.</li>
          <li>Deformidade torácica significativa pós-trauma.</li>
        </ul>
        <p class="muted">Reduz tempo de VM, ICU, dor e custo. Não é mais "última opção".</p>
      </div>
    </div>
  </div>

  <h3 class="section__sub">Contusão pulmonar — o vilão silencioso</h3>
  <article class="card card-x">
    <header class="card__head"><span class="badge badge-x">Pico em 24–72 h</span><h3 class="card__title">Edema + hemorragia alveolar</h3></header>
    <div class="card__body">
      <p>Lesão direta do parênquima pulmonar pela energia do trauma. <strong>Pode estar normal nas primeiras horas</strong> e se manifestar com piora progressiva da SpO₂ no 2º dia. TC de tórax precoce identifica antes do rx.</p>
      <p><strong>Conduta:</strong></p>
      <ul class="list-tight">
        <li><strong>Analgesia adequada</strong> (idem flail chest).</li>
        <li><strong>O₂ suplementar</strong>; alvo SpO₂ ≥ 94%.</li>
        <li><strong>VNI ou IOT/VM</strong> conforme gravidade.</li>
        <li><strong>Restrição relativa de cristaloide</strong> (mantém euvolemia, evita "afogar" o pulmão).</li>
        <li><strong>Fisioterapia respiratória</strong> intensa.</li>
        <li>Antibiótico <strong>não</strong> profilático — só se infecção comprovada.</li>
        <li>Corticoide <strong>não</strong> recomendado.</li>
      </ul>
      <details class="callout-gabarito">
        <summary>Ver o que muda o gabarito</summary>
        <p>Em prova, o pulo do gato é: contusão pulmonar <strong>não tem cirurgia primária</strong>. O tratamento é <em>de suporte</em>. Distrator clássico: "pneumonectomia precoce" — <strong>errado</strong>. Outro: "antibiótico profilático" — <strong>errado</strong>; espera-se cultura.</p>
      </details>
    </div>
  </article>

  <div class="callout naoconfunda" style="margin-top:1rem">
    <strong class="callout__title">Não confunda — Flail × Contusão × Pneumotórax simples</strong>
    <p><strong>Flail (tórax instável):</strong> achado <em>de parede</em> (movimento paradoxal visível, palpável). Diagnóstico clínico.<br>
    <strong>Contusão pulmonar:</strong> achado <em>de parênquima</em> (hipoxemia progressiva, infiltrado em TC). Diagnóstico por imagem.<br>
    <strong>Pneumotórax simples:</strong> achado <em>pleural</em> (hipertimpanismo, MV diminuído).<br>
    Os 3 podem coexistir. Em prova, descrever movimento paradoxal + arcos quebrados = flail; descrever hipoxemia que piora em 48 h = contusão.</p>
  </div>

  <div class="callout pegadinha" style="margin-top:1rem">
    <strong class="callout__title">Pegadinhas do flail/contusão</strong>
    <ul class="list-tight">
      <li>"Bolus generoso de cristaloide para contusão pulmonar" → <strong>errado</strong>; piora edema.</li>
      <li>"Antibiótico profilático em contusão" → <strong>não</strong>; só se infecção.</li>
      <li>"Fixação de costelas é exceção/última opção" → <strong>desatualizado</strong> em ATLS 11.</li>
      <li>"Tórax instável = sempre VM" → <strong>não</strong>; analgesia adequada + VNI evitam IOT em muitos casos.</li>
      <li>"Rx normal nas primeiras horas exclui contusão" → <strong>errado</strong>; pico em 24–72 h. TC mais sensível.</li>
      <li>"1 arco costal quebrado em 1 ponto = flail" → <strong>errado</strong>; precisa ≥ 2 arcos consecutivos × 2 pontos cada.</li>
    </ul>
  </div>

  <div class="callout banca" style="margin-top:1rem">
    <strong class="callout__title">Como a banca testa flail/contusão</strong>
    <p>Cenário típico: AAT, trauma torácico, paciente com movimento paradoxal de hemitórax direito + arcos costais quebrados em rx. Pergunta-chave: "qual a conduta inicial?". Distrator: "fixação cirúrgica imediata". Resposta: <strong>analgesia agressiva + O₂ + suporte ventilatório</strong>; SSRF entra se falência de desmame ou dor refratária. Em paciente que <em>piora</em> a SpO₂ no 2º dia: pensar em <strong>contusão pulmonar progressiva</strong> e indicar VNI/VM, não bolus de cristaloide.</p>
  </div>
</section>`;
})(window.TRAUMA_SECTIONS);
