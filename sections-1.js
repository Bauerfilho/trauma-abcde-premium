/* =====================================================================
   TRAUMA PREMIUM · sections-1.js
   Bloco de seções: Entrada, Manejo Inicial, X (exsanguinação)
   Cada função retorna uma string HTML <section data-id="...">.
   Conteúdo médico completo será preenchido na Etapa 2.
   ===================================================================== */
window.TRAUMA_SECTIONS = window.TRAUMA_SECTIONS || {};

(function (S) {

  /* placeholder genérico para esta etapa de validação técnica */
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
    <p>Esta página é um esqueleto técnico do Prompt 1. Na próxima etapa, será preenchida com explicação autoral, raciocínio clínico, fisiopatologia, mecanismo de trauma, exames que mudam conduta, pegadinhas, "não confunda", "o que muda o gabarito", erros comuns, ATLS 10 vs ATLS 11, aprofundamento, simuladores, quizzes e revisão ativa — tudo a partir do Roteiro de trauma e das transcrições.</p>
  </div>
</section>`;
  }

  S["casos-integradores"] = () => `
<section class="section" data-id="casos-integradores">
  <div class="block-head block-c">
    <div class="block-head__letter">C</div>
    <div class="block-head__copy">
      <h2>Casos integradores</h2>
      <p>Quatro vinhetas que voltarão ao longo de todo o curso. A cada bloco do XABCDE, você vai revisitar esses pacientes e descobrir <em>o que muda</em> na conduta. Aprenda a pensar como banca: pista oculta → letra do protocolo → conduta → pegadinha.</p>
    </div>
  </div>

  <div class="callout aviso">
    <strong class="callout__title">Como usar esses casos</strong>
    <p>Não decore. <strong>Releia</strong> a vinheta a cada novo bloco (X, A, B, C, D, E). Pergunte-se: "qual letra está sendo testada agora?", "o que eu faria com poucos recursos?", "o que muda com recursos completos?". Os 4 casos foram desenhados para cobrir as 4 grandes armadilhas da prova: sangramento externo pulsátil, pneumotórax hipertensivo, tamponamento e abdome agudo traumático.</p>
  </div>

  <div class="grid grid-2 gap-lg">

    <article class="card card-x">
      <header class="card__head">
        <span class="badge badge-x">Caso 1 · X</span>
        <h3 class="card__title">Politrauma com sangramento externo pulsátil em coxa</h3>
      </header>
      <div class="card__body">
        <p><strong>Vinheta.</strong> Homem 28 anos, motociclista, colisão com poste a 80 km/h. Chega ao PS com fratura exposta de fêmur direito e sangramento pulsátil ativo em jato. PA 92×60, FC 132, FR 28, satura 96% em ar ambiente, Glasgow 14. Aberto AAT (Acidente Automobilístico de Trânsito) com cinemática de alta energia.</p>
        <ul class="list-tight">
          <li><strong>Pista oculta:</strong> "pulsátil" = artéria. Pressão direta + torniquete <em>antes</em> mesmo de chamar A.</li>
          <li><strong>Letra testada:</strong> <span class="chip chip-x">x minúsculo</span> (exsanguinação) — ATLS 11.</li>
          <li><strong>Conduta-chave:</strong> compressão direta → curativo compressivo → torniquete 5–8 cm proximal à lesão, sobre a pele, anotar hora, nunca em articulação.</li>
          <li><strong>Recurso limitado:</strong> torniquete improvisado largo (≥4 cm), nunca fio/cordão fino.</li>
        </ul>
        <details class="callout-gabarito">
          <summary>Ver o que muda o gabarito</summary>
          <p>O paciente <strong>já é candidato a Protocolo de Transfusão Maciça (PTM)</strong>: Score ABC ≥ 2 (mecanismo penetrante/alta energia + FC ≥120 + PAS ≤90). Índice de choque = 132/92 ≈ 1,4 (≥0,8 sugere PTM, ≥1,0 choque franco). <strong>Ácido tranexâmico (TXA) 1 g IV em até 3 h</strong> do trauma — janela é a chave da pegadinha. ATLS 11 abandona o "Jelco grosso em todos" e prioriza <strong>cristaloide 250–500 mL aquecido a 39 °C</strong> + hemocomponentes 1:1:1 precoce.</p>
        </details>
      </div>
    </article>

    <article class="card card-b">
      <header class="card__head">
        <span class="badge badge-b">Caso 2 · B</span>
        <h3 class="card__title">Pneumotórax hipertensivo no AAT</h3>
      </header>
      <div class="card__body">
        <p><strong>Vinheta.</strong> Mulher 41 anos, condutora, AAT frontal sem cinto. Chega taquidispneica, PA 82×54, FC 138, satura 86% sob máscara não-reinalante. À ausculta: <em>murmúrio vesicular ausente em hemitórax esquerdo</em>, hipertimpânico, turgência jugular e desvio de traqueia para a direita.</p>
        <ul class="list-tight">
          <li><strong>Pista oculta:</strong> hipotensão + jugular túrgida + MV ausente unilateral = <strong>diagnóstico clínico</strong>, sem rx.</li>
          <li><strong>Letra testada:</strong> <span class="chip chip-b">B</span> — Breathing.</li>
          <li><strong>Conduta-chave:</strong> toracocentese de alívio <em>imediata</em>, sem esperar imagem.</li>
          <li><strong>Recurso limitado:</strong> Jelco 14G; com recurso pleno: dreno torácico em selo d'água após descompressão.</li>
        </ul>
        <details class="callout-gabarito">
          <summary>Ver o que muda o gabarito</summary>
          <p>ATLS 11 trocou o sítio: agora é <strong>5º espaço intercostal, linha axilar média/anterior</strong> em <em>todas</em> as idades (não mais 2º EIC linha hemiclavicular como padrão universal — esse fica como alternativa em obesos/musculosos). O cateter precisa ter no mínimo <strong>5 cm em adultos</strong> (parede torácica média 4–4,5 cm; 8% das paredes ultrapassam 5 cm na nova literatura, daí a recomendação de 8 cm em alguns serviços). Após alívio: <strong>drenagem torácica formal</strong>.</p>
        </details>
      </div>
    </article>

    <article class="card card-c">
      <header class="card__head">
        <span class="badge badge-c">Caso 3 · C</span>
        <h3 class="card__title">FAB precordial com tríade de Beck</h3>
      </header>
      <div class="card__body">
        <p><strong>Vinheta.</strong> Homem 22 anos, ferimento por arma branca (FAB) em região precordial (zona de Ziedler). Chega com PA 78×62, FC 124, <strong>bulhas abafadas</strong>, <strong>turgência jugular</strong> e <strong>hipotensão</strong> (tríade de Beck). FAST subxifoide com líquido pericárdico ecolucente.</p>
        <ul class="list-tight">
          <li><strong>Pista oculta:</strong> ferida em "caixa cardíaca" + Beck = tamponamento até prova em contrário.</li>
          <li><strong>Letra testada:</strong> <span class="chip chip-c">C</span> — Circulation.</li>
          <li><strong>Conduta-chave:</strong> volume rápido (ponte) + <strong>toracotomia/janela pericárdica</strong> em centro cirúrgico.</li>
          <li><strong>Recurso limitado:</strong> pericardiocentese subxifoide guiada por eco como ponte.</li>
        </ul>
        <details class="callout-gabarito">
          <summary>Ver o que muda o gabarito</summary>
          <p>Em PCR traumática por <strong>ferimento penetrante torácico com sinais de vida no transporte</strong>, indica-se <strong>toracotomia de reanimação</strong> (clamshell ou anterolateral esquerda no 4º–5º EIC). ATLS 11 reforça que <strong>FAST subxifoide é o exame que mais muda conduta no C</strong> — substitui a janela pericárdica diagnóstica. Pegadinha clássica: tamponamento <em>não</em> precisa de PA muito baixa para descompensar — basta o débito cair.</p>
        </details>
      </div>
    </article>

    <article class="card card-c">
      <header class="card__head">
        <span class="badge badge-c">Caso 4 · C/E</span>
        <h3 class="card__title">Queda de altura com FAST positivo no abdome</h3>
      </header>
      <div class="card__body">
        <p><strong>Vinheta.</strong> Mulher 54 anos, queda de 6 m. Chega com PA 88×56 (responde transitoriamente a 500 mL de cristaloide aquecido), FC 118, abdome distendido e doloroso, equimose periumbilical (sinal de Cullen). FAST <strong>positivo</strong> em Morrison e Douglas. Equimose perineal e <strong>uretrorragia</strong>.</p>
        <ul class="list-tight">
          <li><strong>Pista oculta:</strong> "respondedor transitório" = sangramento ativo, indica laparotomia.</li>
          <li><strong>Letra testada:</strong> <span class="chip chip-c">C</span> + <span class="chip chip-e">E</span> (exposição → lesão de uretra).</li>
          <li><strong>Conduta-chave:</strong> laparotomia exploradora; <strong>não passar sonda vesical</strong> antes de uretrocistografia retrógrada.</li>
          <li><strong>Recurso limitado:</strong> cistostomia suprapúbica.</li>
        </ul>
        <details class="callout-gabarito">
          <summary>Ver o que muda o gabarito</summary>
          <p>Os <strong>5 sinais clássicos de lesão de uretra</strong> (uretrorragia, hematoma perineal "borboleta", próstata elevada/flutuante ao toque, equimose escrotal/labial, fratura de bacia instável) <em>contraindicam</em> sondagem vesical de rotina. Em respondedor transitório com FAST+, a literatura atual (Sabiston 22ª) recomenda <strong>laparotomia direto</strong> — a TC só é útil em paciente <em>estável</em>. Score ABC: penetrante? não. FC ≥120? sim. PAS ≤90? sim. FAST+? sim. = 3 pontos → <strong>PTM antecipado</strong>.</p>
        </details>
      </div>
    </article>

  </div>

  <div class="callout dica" style="margin-top:1.25rem">
    <strong class="callout__title">Volte aqui depois de cada bloco</strong>
    <p>A cada letra estudada, retorne aos 4 casos e refaça mentalmente a conduta. É assim que a banca testa: <em>não</em> com perguntas isoladas, mas com vinhetas em que <strong>a pista certa está escondida em uma única palavra</strong> ("pulsátil", "abafadas", "transitório", "uretrorragia"). Treinar esse olhar é metade do sucesso na prova.</p>
  </div>
</section>`;

  S["atls10-vs-atls11"] = () => `
<section class="section" data-id="atls10-vs-atls11">
  <div class="block-head">
    <div class="block-head__letter">11</div>
    <div class="block-head__copy">
      <h2>ATLS 10 vs ATLS 11 <span class="muted">(2025)</span></h2>
      <p>O que mudou entre as edições — e por que isso cai em prova. A 11ª edição foi lançada em 2025 e várias bancas <em>já</em> cobram. Em anos de transição, o que mais cai é justamente <strong>o que mudou</strong>.</p>
    </div>
  </div>

  <div class="callout aviso">
    <strong class="callout__title">Como a banca pega o candidato</strong>
    <p>Banca raramente pergunta "qual é o algoritmo do ATLS 11?". Ela pergunta: "<em>o que você faria com este paciente?</em>" — e a alternativa correta reflete a edição mais nova. Estude por <strong>diferença</strong>: cada linha abaixo é uma potencial questão. Se vier no enunciado "segundo ATLS 10ª edição" ou "conforme conduta clássica", aí sim a resposta antiga vale.</p>
  </div>

  <div class="table-wrap">
    <table class="table table-compare">
      <thead>
        <tr>
          <th>Tema</th>
          <th>ATLS 10ª (2018)</th>
          <th class="th-new">ATLS 11ª (2025) <span class="badge badge-new">novo</span></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td><strong>Algoritmo</strong></td>
          <td>ABCDE</td>
          <td><strong>x</strong>ABCDE — <em>x minúsculo</em> (controle de exsanguinação) vem <strong>antes</strong> da via aérea quando há sangramento externo ameaçador.</td>
        </tr>
        <tr>
          <td><strong>Oxigênio</strong></td>
          <td>O₂ a 10 L/min em máscara não-reinalante.</td>
          <td><strong>≥15 L/min</strong> em máscara não-reinalante para todo politrauma — alvo de SatO₂ ≥ 94%.</td>
        </tr>
        <tr>
          <td><strong>Confirmação de IOT</strong></td>
          <td>Ausculta + condensação no tubo + expansão torácica.</td>
          <td><strong>Capnografia em onda</strong> (EtCO₂) é mandatória — o ouro para confirmar tubo na traqueia.</td>
        </tr>
        <tr>
          <td><strong>Via aérea de resgate</strong></td>
          <td>Cricotireoidostomia cirúrgica/punção como padrão.</td>
          <td><strong>Máscara laríngea</strong> entrou no algoritmo como ponte/dispositivo extraglótico antes da cricotireoidostomia, em ambiente com material disponível.</td>
        </tr>
        <tr>
          <td><strong>Toracocentese de alívio</strong></td>
          <td>2º EIC linha hemiclavicular (adultos), 4º–5º EIC em crianças.</td>
          <td><strong>5º EIC linha axilar média/anterior em qualquer idade</strong> — cateter ≥5 cm (idealmente 8 cm) para vencer a parede torácica.</td>
        </tr>
        <tr>
          <td><strong>Pneumotórax oculto/pequeno</strong></td>
          <td>Drenar todos com qualquer tamanho.</td>
          <td>Observar pneumotórax &lt; <strong>3,5 cm</strong> em paciente estável e sem ventilação mecânica.</td>
        </tr>
        <tr>
          <td><strong>Hemotórax — toracotomia</strong></td>
          <td>&gt;1500 mL na drenagem inicial OU &gt;200 mL/h por 2–4 h.</td>
          <td>Mantidos os critérios; reforçada a indicação por <strong>necessidade persistente de transfusão</strong> e instabilidade refratária — decisão clínica, não só volume.</td>
        </tr>
        <tr>
          <td><strong>Tórax instável (flail chest)</strong></td>
          <td>Analgesia + suporte ventilatório; cirurgia em casos selecionados.</td>
          <td><strong>Fixação cirúrgica de costelas</strong> (SSRF) ganhou indicação ampliada: ≥3 fraturas deslocadas, falha de desmame ventilatório, dor refratária.</td>
        </tr>
        <tr>
          <td><strong>Reposição inicial — volume</strong></td>
          <td>1–2 L de cristaloide isotônico em bolus.</td>
          <td><strong>250–500 mL de cristaloide aquecido a 39 °C</strong>, reavaliando a cada bolus. "Hipotensão permissiva" em trauma penetrante sem TCE até controle do sangramento.</td>
        </tr>
        <tr>
          <td><strong>Acesso venoso</strong></td>
          <td>2 acessos calibrosos (Jelco 14–16G) em fossa antecubital.</td>
          <td>Jelco grosso de rotina <strong>foi abandonado</strong> como obrigatório — a prioridade é <strong>acesso confiável</strong> (intraósseo é equivalente).</td>
        </tr>
        <tr>
          <td><strong>PTM (transfusão maciça)</strong></td>
          <td>Acionado tardiamente, após falha de cristaloide.</td>
          <td><strong>PTM antecipado</strong> guiado por <strong>Score ABC ≥ 2</strong> ou <strong>Índice de Choque ≥ 0,8</strong>.</td>
        </tr>
        <tr>
          <td><strong>Razão de hemocomponentes</strong></td>
          <td>Variável, frequentemente cristaloide-pesado.</td>
          <td><strong>1:1:1</strong> (CH:PFC:plaquetas) — reduz coagulopatia e mortalidade.</td>
        </tr>
        <tr>
          <td><strong>Ácido tranexâmico (TXA)</strong></td>
          <td>Recomendado, sem ênfase rígida na janela.</td>
          <td><strong>1 g IV em até 3 h do trauma</strong> + 1 g em 8 h. Após 3 h: <em>aumenta</em> mortalidade — janela é a chave.</td>
        </tr>
        <tr>
          <td><strong>Lesão de aorta torácica</strong></td>
          <td>Cirurgia precoce em todos.</td>
          <td>Classificação <strong>I–IV</strong> (Society for Vascular Surgery): I conservador, II–III TEVAR, IV cirurgia aberta. Controle pressórico com <strong>esmolol</strong> (PAS &lt; 120; FC &lt; 80).</td>
        </tr>
        <tr>
          <td><strong>Via aérea definitiva — traqueostomia</strong></td>
          <td>Indicada em via aérea cirúrgica de urgência.</td>
          <td><strong>Não é mais padrão-ouro de urgência</strong>: cricotireoidostomia (cirúrgica ou por punção) é o procedimento de via aérea cirúrgica de emergência.</td>
        </tr>
        <tr>
          <td><strong>FAST e diagnóstico no C</strong></td>
          <td>FAST como triagem.</td>
          <td>FAST + <strong>e-FAST</strong> (extended) avaliam pneumotórax/hemotórax além do abdome — substituem a janela pericárdica diagnóstica em muitos centros.</td>
        </tr>
      </tbody>
    </table>
  </div>

  <h3 class="section__sub" style="margin-top:2rem">Resumo por letra do que mudou</h3>
  <div class="grid grid-4 gap-md">
    <article class="card card-x compact">
      <header class="card__head"><span class="badge badge-x">x · X</span><h4 class="card__title">x minúsculo</h4></header>
      <div class="card__body">
        <p>Sangramento externo ameaçador <strong>vem antes do A</strong>. Torniquete liberado precocemente, anotando hora. Limite de 6 h.</p>
      </div>
    </article>
    <article class="card card-a compact">
      <header class="card__head"><span class="badge badge-a">A</span><h4 class="card__title">Via aérea</h4></header>
      <div class="card__body">
        <p>Capnografia obrigatória. Máscara laríngea entrou no algoritmo. IOT confirmada por EtCO₂.</p>
      </div>
    </article>
    <article class="card card-b compact">
      <header class="card__head"><span class="badge badge-b">B</span><h4 class="card__title">Respiração</h4></header>
      <div class="card__body">
        <p>Toracocentese no <strong>5º EIC</strong> em todas as idades, cateter ≥5 cm. Fixação cirúrgica de costelas ampliada.</p>
      </div>
    </article>
    <article class="card card-c compact">
      <header class="card__head"><span class="badge badge-c">C</span><h4 class="card__title">Circulação</h4></header>
      <div class="card__body">
        <p>250–500 mL de cristaloide aquecido. <strong>PTM antecipado</strong> (ABC ≥2 / IC ≥0,8). 1:1:1. TXA &lt; 3 h.</p>
      </div>
    </article>
  </div>

  <div class="callout banca" style="margin-top:1.5rem">
    <strong class="callout__title">Como a banca testa em ano de transição</strong>
    <p>Em provas de 2025–2027, é comum encontrar enunciados <strong>sem citar edição</strong> e alternativas que misturam ATLS 10 e 11. A regra de ouro: se o enunciado descreve <em>conduta moderna</em> (cristaloide pequeno volume, PTM antecipado, TXA &lt; 3 h, capnografia, 5º EIC), responda pela 11ª. Se citar explicitamente "ATLS 10ª edição" ou trouxer cenário sem recursos, vá pela conduta clássica. <strong>Nunca</strong> marque uma alternativa que coloque <em>laparotomia em paciente estável com FAST negativo</em> ou <em>Jelco grosso obrigatório</em> — essas são pegadinhas com aroma de edição antiga.</p>
  </div>
</section>`;

  S["xabcde-visao-geral"] = () => `
<section class="section" data-id="xabcde-visao-geral">
  <div class="block-head block-x">
    <div class="block-head__letter">X</div>
    <div class="block-head__copy">
      <h2>XABCDE — visão geral</h2>
      <p>O mapa mental que <em>nunca</em> se quebra. Do <strong>x minúsculo</strong> (exsanguinação ameaçadora à vida) ao <strong>E</strong> (exposição com prevenção de hipotermia). Cada letra é uma <em>pergunta clínica fechada</em>: "isso aqui mata em segundos? em minutos? em horas?".</p>
    </div>
  </div>

  <div class="callout fisiopato">
    <strong class="callout__title">Por que XABCDE e não outra ordem?</strong>
    <p>A ordem é <strong>tempo de morte</strong>, não anatomia. Sangramento externo pulsátil mata em <strong>3 minutos</strong> → vai antes do A. Obstrução de via aérea mata em <strong>4–5 min</strong>. Pneumotórax hipertensivo mata em <strong>10–15 min</strong>. Choque hipovolêmico mata em <strong>30–60 min</strong>. TCE com hipertensão intracraniana mata em <strong>horas</strong>. Hipotermia mata em <strong>horas a dias</strong> mas <em>amplifica</em> tudo o anterior (tríade letal).</p>
  </div>

  <h3 class="section__sub">As 6 letras — mapa luminoso</h3>
  <div class="grid grid-3 gap-md">

    <article class="card card-x">
      <header class="card__head"><span class="badge badge-x">x · &lt; 3 min</span><h3 class="card__title">x minúsculo</h3></header>
      <div class="card__body">
        <p><strong>Exsanguinação ameaçadora à vida.</strong> Sangramento externo arterial / pulsátil em jato.</p>
        <ul class="list-tight">
          <li>Compressão direta → curativo compressivo → torniquete.</li>
          <li>5–8 cm proximal, sobre a pele, anotar a hora, nunca em articulação.</li>
          <li>Limite de uso: <strong>6 h</strong>.</li>
        </ul>
      </div>
    </article>

    <article class="card card-a">
      <header class="card__head"><span class="badge badge-a">A · 4–5 min</span><h3 class="card__title">Airway + cervical</h3></header>
      <div class="card__body">
        <p><strong>Via aérea pérvia, com proteção cervical.</strong> "Pérvia ≠ segura."</p>
        <ul class="list-tight">
          <li>Avaliar fala, estridor, sangue, corpo estranho, queimadura facial.</li>
          <li>Manobras: chin-lift / jaw-thrust (sem extensão cervical).</li>
          <li>Definitiva se Glasgow ≤ 8, apneia, lesão expansiva, queimadura.</li>
        </ul>
      </div>
    </article>

    <article class="card card-b">
      <header class="card__head"><span class="badge badge-b">B · 10–15 min</span><h3 class="card__title">Breathing</h3></header>
      <div class="card__body">
        <p><strong>Ventilação e oxigenação.</strong> Procurar as 6 ameaças letais do tórax.</p>
        <ul class="list-tight">
          <li>Inspeção, palpação, percussão, ausculta — bilateral, simétrica.</li>
          <li>O₂ ≥ 15 L/min em máscara não-reinalante (ATLS 11).</li>
          <li>Pneumotórax hipertensivo, aberto, hemotórax maciço, tórax instável, contusão, tamponamento.</li>
        </ul>
      </div>
    </article>

    <article class="card card-c">
      <header class="card__head"><span class="badge badge-c">C · 30–60 min</span><h3 class="card__title">Circulation</h3></header>
      <div class="card__body">
        <p><strong>Choque até prova em contrário.</strong> Trauma + hipotensão = sangrando.</p>
        <ul class="list-tight">
          <li>Pulso, perfusão (TEC &gt; 2 s), nível de consciência, PA.</li>
          <li>2 acessos confiáveis (ou intraósseo). 250–500 mL cristaloide aquecido.</li>
          <li>FAST/e-FAST. Score ABC ≥ 2 → PTM antecipado. TXA &lt; 3 h.</li>
        </ul>
      </div>
    </article>

    <article class="card card-d">
      <header class="card__head"><span class="badge badge-d">D · horas</span><h3 class="card__title">Disability</h3></header>
      <div class="card__body">
        <p><strong>Estado neurológico rápido.</strong> Glasgow + pupilas + lateralização.</p>
        <ul class="list-tight">
          <li>Glasgow ≤ 8 → IOT (proteção de via aérea).</li>
          <li>Anisocoria + Glasgow baixo → herniação até prova em contrário.</li>
          <li>Lembrar: hipoglicemia, álcool, drogas <em>simulam</em> TCE.</li>
        </ul>
      </div>
    </article>

    <article class="card card-e">
      <header class="card__head"><span class="badge badge-e">E · amplificador</span><h3 class="card__title">Exposure</h3></header>
      <div class="card__body">
        <p><strong>Despir totalmente + prevenir hipotermia.</strong> Achados ocultos atrás, axila, períneo.</p>
        <ul class="list-tight">
          <li>Rolamento em bloco. Toque retal/perineal quando indicado.</li>
          <li>Cobertor térmico, manta de aquecimento, fluidos a 39 °C.</li>
          <li>Hipotermia &lt; 35 °C piora coagulopatia → tríade letal.</li>
        </ul>
      </div>
    </article>

  </div>

  <h3 class="section__sub">Avaliação primária × secundária × terciária</h3>
  <div class="grid grid-3 gap-md">
    <article class="card">
      <header class="card__head"><span class="badge">1ª</span><h3 class="card__title">Primária</h3></header>
      <div class="card__body">
        <p>XABCDE. Detecta e <strong>trata simultaneamente</strong> o que mata. Repetir a cada deterioração ou ao chegar exame novo. Não passa para a próxima letra sem resolver a anterior — exceto em equipe treinada com tarefas paralelas.</p>
      </div>
    </article>
    <article class="card">
      <header class="card__head"><span class="badge">2ª</span><h3 class="card__title">Secundária</h3></header>
      <div class="card__body">
        <p>Cabeça aos pés, com história <strong>AMPLE</strong>: <em>Allergies</em>, <em>Medications</em>, <em>Past illness/Pregnancy</em>, <em>Last meal</em>, <em>Events/Environment</em>. Toque retal, exame perineal, dorso (rolamento). Reavaliar sinais vitais.</p>
      </div>
    </article>
    <article class="card">
      <header class="card__head"><span class="badge">3ª</span><h3 class="card__title">Terciária</h3></header>
      <div class="card__body">
        <p>Após 24 h, paciente estabilizado. Revisão completa para identificar lesões inicialmente despercebidas (até <strong>10%</strong> dos politraumatizados têm lesão omitida). Reler todos os exames de imagem.</p>
      </div>
    </article>
  </div>

  <div class="callout pegadinha" style="margin-top:1.25rem">
    <strong class="callout__title">Pegadinha clássica — AMPLE × SAMPLE</strong>
    <p><strong>AMPLE</strong> é trauma do ATLS. <strong>SAMPLE</strong> é PHTLS / atendimento pré-hospitalar — acrescenta <em>Signs &amp; symptoms</em> no início. Banca pode pedir um e oferecer o outro como distrator. Em prova de cirurgia/trauma intra-hospitalar, prefira <strong>AMPLE</strong>.</p>
  </div>

  <div class="callout banca" style="margin-top:1rem">
    <strong class="callout__title">O que a banca testa em "visão geral"</strong>
    <p>Quase nunca pede a definição da letra. Pede <em>ordem</em>: "qual a primeira conduta?". Se houver sangramento externo arterial → <strong>x</strong>. Se houver Glasgow ≤ 8 com via aérea pérvia → ainda é <strong>A</strong> (definitiva no <em>final</em> do A). Se houver pneumotórax hipertensivo + hipotensão → <strong>B</strong> (descomprimir o tórax restaura o C). Se houver FAST+ instável → <strong>C</strong> (laparotomia). A ordem das letras é a ordem da prova.</p>
  </div>
</section>`;

  S["seguranca-mecanismo"] = () => `
<section class="section" data-id="seguranca-mecanismo">
  <div class="block-head block-e">
    <div class="block-head__letter">!</div>
    <div class="block-head__copy">
      <h2>Segurança da cena &amp; mecanismo de trauma</h2>
      <p>Antes de tocar no paciente, duas perguntas: <strong>"é seguro?"</strong> e <strong>"o que aconteceu?"</strong>. A primeira protege você. A segunda <em>antecipa</em> as lesões — antes mesmo do XABCDE.</p>
    </div>
  </div>

  <div class="callout alerta-medico">
    <strong class="callout__title">Você não pode ser a segunda vítima</strong>
    <p>O ATLS é claro: <em>scene safety first</em>. Trânsito, fogo, eletricidade, agressor armado, atmosfera tóxica, instabilidade estrutural. Em ambiente hospitalar isso vira: <strong>EPI completo</strong> (luvas, máscara, óculos, avental impermeável), evitar agulhas em paciente agitado, conhecer rotas de fuga em pronto-socorro.</p>
  </div>

  <h3 class="section__sub">Mecanismo de trauma como pista clínica</h3>
  <p>O mecanismo <strong>antecipa</strong> a lesão. Antes da imagem, antes do exame físico fino, ele já te diz <em>onde olhar</em>. Banca adora esconder o diagnóstico no enunciado: "queda de 6 m" → suspeitar de fratura de calcâneo, fratura por compressão lombar, lesão de aorta. "Cinto de 3 pontos" → contusão pulmonar, perfuração de víscera oca, fratura de Chance.</p>

  <div class="grid grid-2 gap-lg">

    <article class="card card-c">
      <header class="card__head"><span class="badge badge-c">Contuso</span><h3 class="card__title">Trauma fechado (contuso)</h3></header>
      <div class="card__body">
        <p>Energia distribuída. Lesões <em>internas</em> sem ferida aparente.</p>
        <ul class="list-tight">
          <li><strong>AAT frontal:</strong> tórax (esterno, contusão miocárdica), aorta no istmo, joelhos no painel, fêmur, quadril.</li>
          <li><strong>AAT lateral:</strong> baço (esquerda), fígado (direita), arcos costais, pelve.</li>
          <li><strong>AAT traseiro:</strong> chicote cervical, fratura de processo espinhoso.</li>
          <li><strong>Capotamento:</strong> múltiplos vetores; alta energia — politrauma até prova em contrário.</li>
          <li><strong>Atropelamento:</strong> tríade de Waddell (criança) — fêmur + tórax/abdome + cabeça.</li>
          <li><strong>Queda &gt; 6 m</strong> (ou 3× a altura): fratura de calcâneo + L1 (Don Juan), aorta, pelve.</li>
        </ul>
      </div>
    </article>

    <article class="card card-x">
      <header class="card__head"><span class="badge badge-x">Penetrante</span><h3 class="card__title">Trauma penetrante</h3></header>
      <div class="card__body">
        <p>Energia concentrada. Lesão segue a <em>trajetória</em>.</p>
        <ul class="list-tight">
          <li><strong>FAB (arma branca):</strong> trajeto curto e previsível. Em zona precordial / "caixa cardíaca": tamponamento até prova em contrário.</li>
          <li><strong>FAF baixa velocidade</strong> (.22, calibre 38): cavidade ≈ trajeto.</li>
          <li><strong>FAF alta velocidade</strong> (rifle): cavitação temporária amplia muito a lesão; "limpa" o ferimento na entrada — não enganar.</li>
          <li><strong>Empalamento:</strong> nunca remover na cena. Estabilizar.</li>
          <li><strong>Toraco-abdominal</strong> (entre mamilo e rebordo costal): suspeitar de lesão diafragmática + víscera.</li>
        </ul>
      </div>
    </article>

  </div>

  <h3 class="section__sub">Tríade letal do trauma</h3>
  <div class="grid grid-3 gap-md">
    <article class="card card-b">
      <header class="card__head"><span class="badge">1</span><h3 class="card__title">Hipotermia</h3></header>
      <div class="card__body">
        <p>&lt; 35 °C. Reduz atividade enzimática da cascata de coagulação. <strong>Cada 1 °C abaixo</strong> = ~10% de redução na função plaquetária.</p>
        <p><em>Como combater:</em> manta térmica, sala aquecida, cristaloide a 39 °C, hemocomponentes aquecidos, retirar roupas molhadas.</p>
      </div>
    </article>
    <article class="card card-c">
      <header class="card__head"><span class="badge">2</span><h3 class="card__title">Acidose</h3></header>
      <div class="card__body">
        <p>pH &lt; 7,2. Hipoperfusão → metabolismo anaeróbio → lactato. <strong>Acidose</strong> também inativa fatores de coagulação e reduz contratilidade miocárdica.</p>
        <p><em>Como combater:</em> controlar o sangramento (a causa), restaurar perfusão. Bicarbonato <em>não</em> é rotina.</p>
      </div>
    </article>
    <article class="card card-d">
      <header class="card__head"><span class="badge">3</span><h3 class="card__title">Coagulopatia</h3></header>
      <div class="card__body">
        <p>Coagulopatia traumática <strong>existe na chegada</strong> (≈25% dos graves), antes da diluição. Hipotermia + acidose pioram. Cristaloide em excesso amplifica.</p>
        <p><em>Como combater:</em> PTM 1:1:1, TXA &lt; 3 h, evitar cristaloide-pesado, controle precoce do sangramento (cirurgia de controle de danos).</p>
      </div>
    </article>
  </div>

  <div class="callout naoconfunda" style="margin-top:1rem">
    <strong class="callout__title">Não confunda — tríade letal × tríade de Beck × tríade de Cushing</strong>
    <p><strong>Tríade letal do trauma:</strong> hipotermia + acidose + coagulopatia.<br>
    <strong>Tríade de Beck</strong> (tamponamento cardíaco): hipotensão + bulhas abafadas + turgência jugular.<br>
    <strong>Tríade de Cushing</strong> (HIC iminente): hipertensão + bradicardia + respiração irregular (Cheyne-Stokes).<br>
    Banca mistura as três no mesmo enunciado para confundir. Saiba qual é qual <em>de cor</em>.</p>
  </div>

  <div class="callout pegadinha" style="margin-top:1rem">
    <strong class="callout__title">Pegadinhas de mecanismo</strong>
    <ul class="list-tight">
      <li>"Air bag acionado" não <em>exclui</em> lesão — pode mascarar dor de fratura de esterno e contusão miocárdica.</li>
      <li>"Cinto de 3 pontos" reduz mortalidade global mas <em>aumenta</em> lesões abdominais (sinal do cinto, fratura de Chance em L1–L3).</li>
      <li>FAF que entra no abdome e "saiu pelas costas": trajetória pode ter atravessado retroperitônio, diafragma, tórax. Não fie-se na "saída próxima".</li>
      <li>Queda em pé de altura → fratura de calcâneo + L1 + aorta torácica. Examinar coluna mesmo se paciente "caminhar".</li>
      <li>Idoso com queda da própria altura: TC de crânio liberada se anticoagulado ou Glasgow alterado — mecanismo "banal" engana.</li>
    </ul>
  </div>

  <div class="callout banca" style="margin-top:1rem">
    <strong class="callout__title">Como a banca testa</strong>
    <p>Geralmente esconde a pista no <em>primeiro parágrafo</em> ("queda de 8 m", "AAT a 90 km/h sem cinto", "FAB em região precordial"). Antes de ler a pergunta, sublinhe o mecanismo. Ele <strong>antecipa o gabarito</strong>: alta energia → politrauma → laparotomia/toracotomia tem indicação mais ampla. Baixa energia (queda da própria altura em jovem hígido) → conduta conservadora ganha força.</p>
  </div>
</section>`;

  S["x-exsanguinacao"] = () => `
<section class="section" data-id="x-exsanguinacao">
  <div class="block-head block-x">
    <div class="block-head__letter">x</div>
    <div class="block-head__copy">
      <h2>X — Controle de exsanguinação</h2>
      <p>O <strong>x minúsculo</strong> é a maior mudança do ATLS 11. Sangramento externo arterial mata em <strong>3 minutos</strong> — antes do A, antes do B, antes de qualquer coisa. Aqui você aprende o que fazer com pouco e com muito recurso, e por que o torniquete deixou de ser tabu.</p>
    </div>
  </div>

  <div class="callout atls11">
    <strong class="callout__title">Por que entrou no ATLS 11</strong>
    <p>Dados de medicina militar (Iraque, Afeganistão) e de atentados civis (Boston, Las Vegas) mostraram que <strong>o torniquete aplicado precocemente</strong> reduz mortalidade <em>sem aumentar amputações</em>. A 11ª edição do ATLS (2025) adotou o algoritmo do MARCH/TCCC: <strong>Massive bleeding primeiro</strong>. Em português trauma: <em>x</em> antes do A.</p>
  </div>

  <h3 class="section__sub">Stepper — sequência de controle</h3>
  <p class="muted">Ordem fixa, intensidade crescente. Cada passo só é abandonado quando <strong>não funciona</strong>. Tempo total ideal até controle: &lt; 90 segundos.</p>

  <div class="stepper">
    <div class="stepper__item" style="--step-c: var(--c-x)">
      <div class="stepper__num">1</div>
      <div class="stepper__body">
        <h4>Compressão direta</h4>
        <p><strong>Mão (com luva) sobre o ponto de sangramento, com força.</strong> Ainda na cena, ainda antes do curativo. Funciona em &gt; 80% dos sangramentos venosos e capilares, e em muitos arteriais não-pulsáteis.</p>
        <p class="muted">Pegadinha: <em>não</em> aliviar para "ver se parou". Cada alívio reinicia o ciclo de coagulação.</p>
      </div>
    </div>
    <div class="stepper__item" style="--step-c: var(--c-x)">
      <div class="stepper__num">2</div>
      <div class="stepper__body">
        <h4>Curativo compressivo</h4>
        <p>Gaze ou compressa <strong>sobre</strong> o foco, atadura crepe firmemente enrolada — pressão sustentada que substitui a mão. Se ensopar de sangue: <strong>não trocar</strong>; sobrepor mais material e reforçar a compressão.</p>
        <p class="muted">Curativo hemostático (Combat Gauze, QuikClot, Celox) entra aqui em locais onde o torniquete não funciona — <strong>junções</strong> (axila, virilha, pescoço, períneo).</p>
      </div>
    </div>
    <div class="stepper__item" style="--step-c: var(--c-x)">
      <div class="stepper__num">3</div>
      <div class="stepper__body">
        <h4>Torniquete</h4>
        <p>Se compressão + curativo <strong>falharam</strong>, ou se o sangramento é <em>óbvio e ameaçador</em> (jato pulsátil, amputação parcial, cena de massa). Membro com sangramento incontrolável → torniquete <strong>imediato</strong>, sem perder tempo no passo 1.</p>
        <p class="muted">CAT (Combat Application Tourniquet) e SOFTT-W são os padrões-ouro. Em recurso limitado: improvisar com <strong>tira larga ≥ 4 cm</strong> + bastão de torção (windlass).</p>
      </div>
    </div>
    <div class="stepper__item" style="--step-c: var(--c-x)">
      <div class="stepper__num">4</div>
      <div class="stepper__body">
        <h4>Reavaliação e transporte</h4>
        <p>Documentar <strong>hora exata</strong> da aplicação na pele do paciente (caneta dermográfica) ou no próprio torniquete. Reavaliar pulso distal: <em>tem que sumir</em>. Se ainda há pulso, o torniquete <strong>não está apertado o suficiente</strong> — apertar mais ou aplicar um segundo torniquete proximal ao primeiro.</p>
      </div>
    </div>
  </div>

  <h3 class="section__sub">Como aplicar o torniquete — 6 regras</h3>
  <div class="grid grid-3 gap-md">
    <article class="card card-x compact">
      <header class="card__head"><span class="badge badge-x">5–8 cm</span><h4 class="card__title">Posição</h4></header>
      <div class="card__body"><p><strong>5 a 8 cm proximal</strong> à lesão, no membro. Em sangramento difuso ou amputação traumática: o mais alto possível ("high and tight").</p></div>
    </article>
    <article class="card card-x compact">
      <header class="card__head"><span class="badge badge-x">Pele</span><h4 class="card__title">Sobre a pele</h4></header>
      <div class="card__body"><p>Direto na pele, <strong>não sobre roupa grossa</strong> (pode soltar, escorregar, mascarar a posição). Roupa fina (tecido aderente) é tolerável em campo.</p></div>
    </article>
    <article class="card card-x compact">
      <header class="card__head"><span class="badge badge-x">Articulação</span><h4 class="card__title">Nunca em articulação</h4></header>
      <div class="card__body"><p>Não aplicar sobre cotovelo, joelho, punho, tornozelo. Se a lesão é distal a uma articulação, posicionar <strong>proximal</strong> à articulação.</p></div>
    </article>
    <article class="card card-x compact">
      <header class="card__head"><span class="badge badge-x">Hora</span><h4 class="card__title">Anotar a hora</h4></header>
      <div class="card__body"><p>Hora <strong>exata</strong> da aplicação. Caneta dermográfica na testa do paciente ou na própria etiqueta do torniquete. Sem isso, o tempo de isquemia é cego.</p></div>
    </article>
    <article class="card card-x compact">
      <header class="card__head"><span class="badge badge-x">Apertar</span><h4 class="card__title">Apertar até doer</h4></header>
      <div class="card__body"><p><strong>Dói.</strong> Se o paciente consciente não reclama, provavelmente está frouxo. Apertar até <strong>desaparecer o pulso distal</strong> e o sangramento parar.</p></div>
    </article>
    <article class="card card-x compact">
      <header class="card__head"><span class="badge badge-x">6 h</span><h4 class="card__title">Limite de tempo</h4></header>
      <div class="card__body"><p>Acima de <strong>6 h</strong>: risco de isquemia irreversível e síndrome de reperfusão fatal. Decisão de afrouxar = <strong>multidisciplinar</strong>, em centro com cirurgia vascular, UTI e laboratório.</p></div>
    </article>
  </div>

  <h3 class="section__sub">Cronômetro do torniquete</h3>
  <p class="muted">Simulador interativo. Pressione <em>Iniciar</em> para visualizar o tempo decorrido e os marcos clínicos.</p>

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

  <h3 class="section__sub">Recurso limitado × recurso completo</h3>
  <div class="grid grid-2 gap-lg">
    <article class="card card-d">
      <header class="card__head"><span class="badge">Limitado</span><h3 class="card__title">Sem CAT, sem SOFTT, sem hemostático</h3></header>
      <div class="card__body">
        <ul class="list-tight">
          <li><strong>Tira larga ≥ 4 cm</strong> (cinto largo, faixa de tecido, tira de pano dobrada). Nunca fio, corda, gravata fina — necrose linear.</li>
          <li>Bastão rígido (caneta robusta, pedaço de madeira) como <em>windlass</em> para torção.</li>
          <li>Fixar o bastão após apertar (segunda tira, esparadrapo, bandana).</li>
          <li>Em junções (axila/virilha) onde torniquete não funciona: <strong>compressão manual sustentada</strong> + curativo apertado, transporte rápido.</li>
          <li>Marcar a hora com qualquer caneta na pele do paciente.</li>
        </ul>
      </div>
    </article>
    <article class="card card-a">
      <header class="card__head"><span class="badge">Completo</span><h3 class="card__title">CAT/SOFTT + curativo hemostático + cirurgia</h3></header>
      <div class="card__body">
        <ul class="list-tight">
          <li><strong>CAT</strong> ou <strong>SOFTT-W</strong> (windlass approved). Aplicar conforme treinamento; pode ser feito com uma só mão (auto-aplicação).</li>
          <li><strong>Combat Gauze / QuikClot / Celox</strong> nas junções e em sangramento profundo (cavidade da ferida).</li>
          <li>Acesso venoso periférico calibroso ou intraósseo se difícil; <strong>cristaloide 250–500 mL aquecido</strong>.</li>
          <li>Acionar <strong>PTM</strong> precocemente se Score ABC ≥ 2 ou IC ≥ 0,8.</li>
          <li><strong>TXA 1 g</strong> IV em bolus se &lt; 3 h do trauma.</li>
          <li>Cirurgia de controle de danos: ligadura/embolização precoce, em vez de reconstrução heroica.</li>
        </ul>
      </div>
    </article>
  </div>

  <h3 class="section__sub">Síndrome de reperfusão</h3>
  <article class="card card-c">
    <header class="card__head"><span class="badge badge-c">Fisiopato</span><h3 class="card__title">O que acontece quando o torniquete é liberado</h3></header>
    <div class="card__body">
      <p>Membro isquêmico acumula <strong>K⁺ intracelular liberado</strong>, <strong>lactato</strong>, <strong>mioglobina</strong> e radicais livres. Ao reperfundir, esses produtos caem na circulação sistêmica. Manifestações:</p>
      <ul class="list-tight">
        <li><strong>Hipercalemia</strong> aguda → arritmias, parada cardíaca em assistolia.</li>
        <li><strong>Acidose metabólica</strong> (lactato).</li>
        <li><strong>Mioglobinúria / rabdomiólise</strong> → IRA por necrose tubular aguda.</li>
        <li><strong>Edema do membro reperfundido</strong> → síndrome compartimental (pode exigir fasciotomia).</li>
      </ul>
      <p class="muted">Por isso, em torniquete &gt; 4–6 h, a liberação <em>não</em> é feita à beira do leito sem preparo: corrigir K⁺, alcalinizar urina, hidratar, monitorizar e ter cirurgia vascular pronta. Em alguns cenários, a melhor decisão é <strong>amputar primário</strong>.</p>
    </div>
  </article>

  <div class="callout pegadinha" style="margin-top:1.25rem">
    <strong class="callout__title">Pegadinhas clássicas do x</strong>
    <ul class="list-tight">
      <li>Sangramento <strong>em junção</strong> (axila, virilha, pescoço, períneo): torniquete <em>não funciona</em> — vai compressão + curativo hemostático.</li>
      <li>Sangramento de <strong>couro cabeludo</strong>: pode dessangrar o paciente. Sutura contínua de borda (tipo Donati) controla rapidamente. Não esquecer no E.</li>
      <li>"Torniquete improvisado com gravata fina" → <strong>errado</strong>. Largura mínima 4 cm.</li>
      <li>"Soltar o torniquete a cada 20 minutos para preservar o membro" → <strong>mito antigo</strong>. Não fazer. Reduz controle de sangramento e não preserva o membro.</li>
      <li>"Se chegou com torniquete bem aplicado pelo leigo, trocar por outro" → <strong>não trocar</strong>; reavaliar. Trocar só se mal posicionado ou ineficaz.</li>
    </ul>
  </div>

  <div class="callout banca" style="margin-top:1rem">
    <strong class="callout__title">Como a banca testa o x</strong>
    <p>O enunciado descreve sangramento <strong>pulsátil</strong> ou <strong>em jato</strong>, geralmente em membro inferior pós-AAT/FAF. Pergunta: "qual a primeira conduta?". Distrator clássico: "garantir via aérea pérvia" (errado, x vem antes). Outro distrator: "imobilizar o membro e transportar" (errado, sangramento ativo precisa de controle local agora). Resposta correta: <strong>compressão direta seguida de torniquete proximal</strong>.</p>
    <p>Em ATLS 11, fique atento a alternativas que reproduzem o <em>mito</em> de "soltar o torniquete a cada 20 min" ou "torniquete só em última instância em ambiente civil" — ambas <strong>incorretas</strong>.</p>
  </div>

  <div class="callout naoconfunda" style="margin-top:1rem">
    <strong class="callout__title">Não confunda — x do trauma × Massive bleeding pré-hospitalar</strong>
    <p>O <strong>x do ATLS 11</strong> é específico para <em>sangramento externo arterial ameaçador</em>. <strong>Sangramento interno</strong> (cavidade torácica, abdome, pelve, retroperitônio) <em>não</em> entra aqui — vai no <strong>C</strong> (com FAST, cirurgia, embolização). Um paciente com FAST+ instável e abdome distendido <strong>não</strong> precisa de torniquete; precisa de laparotomia.</p>
  </div>
</section>`;
})(window.TRAUMA_SECTIONS);
