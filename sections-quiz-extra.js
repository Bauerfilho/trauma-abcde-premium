/* =====================================================================
   TRAUMA PREMIUM · QUESTÕES POR PÁGINA (extras didáticas)
   ---------------------------------------------------------------------
   Banco de questões contextualizadas, estilo residência médica
   (ENARE, USP, UNIFESP, SUS-SP). Injetadas pelo router em
   scripts.js > renderRoute() ao final de cada section didática.
   Reutiliza 100% do markup .quiz já presente — bindInteractions()
   trata reveal, ripple, confetti e feedback automaticamente.

   Cada item:
     stem        · enunciado clínico curto
     tag         · tema curto (badge)
     level       · facil | medio | dificil
     correct     · índice da alternativa correta (0..3)
     alts[4]     · alternativas
     why         · explicação completa (correta + erros principais)
   ===================================================================== */
(function (root) {
  "use strict";

  // mapa rota → array de questões (mínimo 2 por página didática)
  const QUIZZES_BY_ROUTE = {

    /* ===================== CASOS INTEGRADORES ===================== */
    "casos-integradores": [
      {
        tag: "X · sequência", level: "medio", correct: 1,
        stem: "Politraumatizado em sala vermelha: hipotensão (PAS 70), pulso radial filiforme, sangramento pulsátil ativo em coxa, sem torniquete. Qual a próxima conduta?",
        alts: [
          "Garantir via aérea com IOT antes de qualquer outra intervenção.",
          "Aplicar torniquete proximal à lesão e só então prosseguir com A da via aérea.",
          "Acesso venoso calibroso e infundir 2 L de cristaloide morno.",
          "Solicitar FAST imediato à beira do leito antes de tocar o paciente."
        ],
        why: "<strong>X precede A.</strong> O ATLS 11 hierarquiza a hemorragia exsanguinante <em>antes</em> da via aérea, porque um torniquete leva segundos e salva mais que qualquer manobra de A em sangramento ativo de membro. IOT antes de controlar a fonte é tempo perdido. Cristaloide em volume é hipotensão permissiva quebrada — não ressuscita choque hemorrágico. FAST entra <em>depois</em> de X e A controlados."
      },
      {
        tag: "Integrador · piora", level: "dificil", correct: 2,
        stem: "Vítima de queda de 6 m, intubada, com dreno torácico à direita. Após 10 min, satura 92%, PAS cai de 110 para 80, distensão de jugular. Qual hipótese explica a piora?",
        alts: [
          "Pneumotórax simples não drenado.",
          "Choque hemorrágico classe III por sangramento abdominal.",
          "Pneumotórax hipertensivo contralateral (à esquerda).",
          "Bloqueio neuromuscular residual."
        ],
        why: "<strong>Hipotensão + jugular distendida + queda de saturação após IOT/VPP</strong> é pneumotórax hipertensivo até prova em contrário. Como o lado direito já está drenado, suspeite do <em>contralateral</em> (a VPP pode tê-lo gerado). Choque hemorrágico cursa com <em>jugular colabada</em>, não distendida — esse é o ponto que muda o gabarito."
      }
    ],

    /* ===================== ATLS 10 vs 11 ===================== */
    "atls10-vs-atls11": [
      {
        tag: "ATLS 11 · O₂", level: "medio", correct: 2,
        stem: "Mulher de 35 anos, atropelamento, GCS 14, satura 96% em ar ambiente. Pelo ATLS 11, qual a conduta correta sobre oxigenoterapia?",
        alts: [
          "Máscara não reinalante a 15 L/min em todo politraumatizado, sempre.",
          "O₂ apenas se PaO₂ < 60 mmHg confirmada por gasometria.",
          "Suplementar O₂ apenas se SatO₂ < 94% (titulada para 94–98%).",
          "Manter SatO₂ acima de 99% como meta universal de segurança."
        ],
        why: "O ATLS 11 abandonou o reflexo de <strong>O₂ a 15 L/min para todos</strong> da edição 10. A nova diretriz é <em>titulação para 94–98%</em>, evitando hiperóxia (que aumenta lesão de reperfusão). Em DPOC ou suspeita, alvo 88–92%. Esperar gasometria atrasa conduta — SatO₂ é suficiente para decisão inicial."
      },
      {
        tag: "ATLS 11 · X precede A", level: "facil", correct: 0,
        stem: "Qual mudança conceitual <strong>mais característica</strong> do ATLS 11 em relação ao ATLS 10?",
        alts: [
          "Inclusão do X (controle de exsanguinação) <em>antes</em> do A no atendimento inicial.",
          "Substituição do FAST pelo eFAST como exame obrigatório.",
          "Retirada da cricotireoidostomia cirúrgica do algoritmo de via aérea difícil.",
          "Indicação universal de TXA em qualquer trauma, independente de janela."
        ],
        why: "A grande quebra do ATLS 11 é o <strong>X minúsculo antes do A</strong>: hemorragia exsanguinante externa controlável (membro, junção) tem prioridade sobre via aérea. eFAST já era recomendado no ATLS 10. Cricotireoidostomia cirúrgica continua no algoritmo. TXA tem janela de ≤ 3 h — não é universal."
      }
    ],

    /* ===================== XABCDE — visão geral ===================== */
    "xabcde-visao-geral": [
      {
        tag: "Sequência", level: "facil", correct: 3,
        stem: "Sobre a sequência XABCDE no ATLS 11, é correto afirmar:",
        alts: [
          "X é opcional e só se aplica se houver tempo após o A.",
          "C entra antes de B se houver hipotensão evidente.",
          "D pode ser pulado se o paciente estiver consciente.",
          "X aborda apenas hemorragia exsanguinante <em>externa</em> compressível; o restante das hemorragias é tratado em C."
        ],
        why: "<strong>X é específico para hemorragia exsanguinante externa compressível</strong> (torniquete, compressão direta, junção). Hemorragia interna (cavitária) não é manejada em X — entra em C com controle cirúrgico. A sequência XABCDE é <em>linear</em>: nada é pulado, e cada letra resolve o que pode antes de avançar."
      },
      {
        tag: "Reavaliação", level: "medio", correct: 1,
        stem: "Durante o exame primário, identificada e tratada a deterioração em B (toracocentese para pneumotórax hipertensivo), qual a próxima conduta?",
        alts: [
          "Prosseguir direto para C, pois B já foi resolvido.",
          "<strong>Reiniciar</strong> a avaliação primária do A, pois cada intervenção pode descompensar passos anteriores.",
          "Realizar exame secundário completo antes de retornar a C.",
          "Solicitar TC de tórax para confirmar antes de seguir."
        ],
        why: "<strong>Toda intervenção dispara reavaliação do início.</strong> Ao tratar uma alteração no exame primário, a regra é voltar ao A — porque a manobra (toracocentese, IOT, dreno) pode ter alterado A ou X. O exame secundário só começa após o primário estar <em>estável</em> e completo."
      }
    ],

    /* ===================== Segurança & mecanismo ===================== */
    "seguranca-mecanismo": [
      {
        tag: "Cena", level: "facil", correct: 2,
        stem: "Equipe é chamada para acidente de motocicleta em rodovia com pista única. Qual a primeira conduta da equipe que chega à cena?",
        alts: [
          "Avaliar permeabilidade da via aérea da vítima imediatamente.",
          "Solicitar TC de crânio via rádio.",
          "Garantir segurança da cena (sinalização, EPI, controle de tráfego) antes de tocar a vítima.",
          "Mobilizar o paciente para a maca rapidamente, antes que pare o trânsito."
        ],
        why: "<strong>Você é o primeiro recurso a proteger</strong> — equipe ferida não atende ninguém. ATLS 11 reforça: segurança de cena precede qualquer abordagem. Tocar a vítima sem cena segura significa criar uma segunda vítima. Mobilização precoce sem avaliação é erro grave (lesão cervical não reconhecida)."
      },
      {
        tag: "Mecanismo · alta energia", level: "medio", correct: 0,
        stem: "Quais critérios de mecanismo <strong>mais</strong> elevam a suspeita de lesão grave oculta em politraumatizado aparentemente estável?",
        alts: [
          "Queda > 6 m, ejeção do veículo, óbito de outro ocupante, capotamento.",
          "Idade > 50 anos isoladamente, sem outras alterações.",
          "Frequência cardíaca > 100 isolada, sem hipotensão.",
          "Dor lombar isolada após queda da própria altura."
        ],
        why: "<strong>Energia cinética alta</strong> implica triagem para centro de trauma e investigação ampliada (TC, FAST), mesmo se estável: queda > 6 m, ejeção, óbito no mesmo veículo, capotamento, atropelamento > 35 km/h. Idade isolada não é critério de mecanismo, mas sim de <em>vulnerabilidade</em>. FC isolada não estratifica."
      }
    ],

    /* ===================== X — exsanguinação ===================== */
    "x-exsanguinacao": [
      {
        tag: "Torniquete", level: "medio", correct: 0,
        stem: "Vítima de explosão com amputação subtotal de coxa, sangramento pulsátil. Torniquete eficaz aplicado pré-hospitalar há <strong>3 horas</strong>. Chega ao PS estável (PAS 110). Conduta na sala vermelha:",
        alts: [
          "<strong>Manter</strong> o torniquete e encaminhar ao centro cirúrgico para controle vascular definitivo.",
          "Soltar imediatamente o torniquete para reperfundir o membro.",
          "Soltar o torniquete em janelas de 10 min para evitar isquemia.",
          "Retirar o torniquete e aplicar curativo compressivo na sala."
        ],
        why: "<strong>Torniquete eficaz NÃO se solta na sala vermelha.</strong> Soltar dispara hipotensão por reperfusão e libera potássio/mioglobina (síndrome do torniquete). A janela segura é até ~6 h; até esse tempo, leve direto ao centro cirúrgico para controle vascular. Janelas intermitentes são mito — só causam ressangramento."
      },
      {
        tag: "TXA · janela", level: "dificil", correct: 2,
        stem: "Politraumatizado, FAF abdominal há <strong>4 horas</strong>, hipotenso (PAS 78), FAST positivo. Sobre o ácido tranexâmico:",
        alts: [
          "1 g IV em 10 min + 1 g em 8 h — indicação universal em politrauma sangrando.",
          "Dobrar dose (2 g em bolus) por estar fora da janela.",
          "<strong>Não</strong> administrar — fora da janela de 3 h, o TXA <em>aumenta</em> a mortalidade.",
          "Aguardar fibrinogênio e TEG antes de decidir."
        ],
        why: "Janela do TXA = <strong>≤ 3 h do trauma</strong> (CRASH-2). Após 3 h, vira pró-trombótico em coágulos já formados → mortalidade aumenta. Dose nunca dobra. Esperar exames atrasa conduta — a decisão é clínica e por tempo."
      }
    ],

    /* ===================== A — via aérea + cervical ===================== */
    "a-via-aerea": [
      {
        tag: "Pérvia vs segura", level: "medio", correct: 1,
        stem: "Paciente com TCE grave, GCS 7, respirando espontaneamente, satura 96% em ar ambiente, sem ronco. Sobre a via aérea:",
        alts: [
          "Via aérea está <em>segura</em>, pois está pérvia e saturando bem.",
          "<strong>Pérvia ≠ segura.</strong> GCS ≤ 8 é indicação clássica de IOT independente da SatO₂ atual.",
          "Indica-se apenas máscara laríngea, pois a IOT pode piorar lesão cervical.",
          "Ventilação não invasiva (VNI) é alternativa para evitar IOT."
        ],
        why: "<strong>Via aérea pérvia é diferente de via aérea segura.</strong> GCS ≤ 8 perde proteção (broncoaspiração) — IOT é indicação clássica, mesmo se saturação atual está boa, porque a deterioração é iminente. ML é dispositivo de resgate, não definitivo. VNI é contraindicada em rebaixamento."
      },
      {
        tag: "Cervical · IOT", level: "medio", correct: 0,
        stem: "Durante IOT em politraumatizado com suspeita de lesão cervical, qual a manobra correta para proteger a coluna?",
        alts: [
          "<strong>Estabilização manual em linha (MILS)</strong> com retirada do colar anterior durante a laringoscopia.",
          "Manter colar cervical rígido fechado durante toda a laringoscopia.",
          "Hiperextensão cervical leve para melhorar visualização.",
          "Tração axial firme para alongar a coluna."
        ],
        why: "<strong>MILS</strong> (manual in-line stabilization) é o padrão-ouro: um auxiliar segura cabeça e pescoço em posição neutra; a parte anterior do colar é aberta para permitir abertura adequada da boca. Manter colar fechado <em>impede</em> visualização. Hiperextensão é proibida. Tração pode distrair fraturas."
      }
    ],

    /* ===================== Via aérea difícil ===================== */
    "a-via-aerea-dificil": [
      {
        tag: "ML · resgate", level: "medio", correct: 2,
        stem: "Após 2 tentativas falhas de IOT em vítima de TCE, satura 84%. Não consegue ventilar com bolsa-máscara adequadamente. Próxima conduta:",
        alts: [
          "3ª tentativa de IOT com lâmina diferente.",
          "Cricotireoidostomia cirúrgica imediata.",
          "<strong>Máscara laríngea (dispositivo supraglótico)</strong> como resgate enquanto se prepara via aérea cirúrgica.",
          "Aguardar fibrobroncoscopia."
        ],
        why: "Cenário <strong>'não intubo, não ventilo'</strong>: ML/iGel é o resgate imediato (segundos), restaura ventilação enquanto a equipe prepara cricotireoidostomia. Insistir em IOT após 2 falhas é erro. Crico cirúrgica é o passo definitivo, mas não pulamos o resgate. Fibro é eletiva — sem tempo aqui."
      },
      {
        tag: "Crico cirúrgica", level: "dificil", correct: 1,
        stem: "Sobre cricotireoidostomia em adulto na via aérea difícil, qual afirmação está <strong>INCORRETA</strong>?",
        alts: [
          "É preferida à punção em adultos por permitir ventilação eficaz e definitiva.",
          "<strong>Está indicada como primeira escolha em criança ≤ 12 anos.</strong>",
          "Localização: membrana cricotireoidea, entre a cartilagem tireoide e a cricoide.",
          "Indica-se quando todas as tentativas de via aérea por cima falham (cenário CICO)."
        ],
        why: "Em <strong>criança ≤ 12 anos</strong>, a cricotireoidostomia <em>cirúrgica</em> é evitada (anatomia frágil) — prefere-se <strong>punção</strong> com agulha de grosso calibre + jet ventilation, como ponte. As demais afirmações estão corretas: em adulto, cirúrgica > punção; localização é a membrana cricotireoidea; indicação é cenário CICO (cannot intubate, cannot oxygenate)."
      }
    ],

    /* ===================== B — respiração ===================== */
    "b-respiracao": [
      {
        tag: "Capnografia", level: "medio", correct: 0,
        stem: "Após IOT em politraumatizado, capnografia mostra onda quadrada com EtCO₂ de 38 mmHg. Qual a interpretação correta?",
        alts: [
          "<strong>IOT bem posicionada e ventilação adequada</strong> — onda quadrada confirma traqueia e EtCO₂ normal sugere PaCO₂ ≈ 40.",
          "IOT esofágica — onda quadrada indica refluxo gástrico.",
          "Hipoventilação grave — EtCO₂ deveria estar > 50 para ser normal.",
          "Pneumotórax hipertensivo iminente — onda quadrada é sinal de aprisionamento aéreo."
        ],
        why: "<strong>Capnografia é o padrão-ouro para confirmar IOT</strong>: onda quadrada sustentada (alvéolo) + EtCO₂ ~35–45 = traqueia OK. IOT esofágica gera onda achatada/ausente após poucos ciclos. EtCO₂ ~38 é normal. Pneumo hipertensivo dá <em>queda</em> de EtCO₂ (PCR iminente), não alteração de morfologia."
      },
      {
        tag: "B · O₂ titulado", level: "facil", correct: 2,
        stem: "Politraumatizado em respiração espontânea, satura 95% em ar ambiente, sem desconforto respiratório. Sobre oxigenoterapia (ATLS 11):",
        alts: [
          "Máscara não reinalante a 15 L/min imediatamente.",
          "Cateter nasal a 3 L/min de rotina.",
          "<strong>Não suplementar</strong> — alvo de SatO₂ é 94–98%; já está dentro.",
          "Iniciar VNI para prevenir piora."
        ],
        why: "ATLS 11 <strong>titula O₂ para 94–98%</strong>. Hiperóxia agrava lesão de reperfusão. Suplementação reflexa para todo politrauma é prática da edição 10, abandonada. VNI não é rotina em trauma."
      }
    ],

    /* ===================== Pneumotórax ===================== */
    "b-pneumotorax": [
      {
        tag: "Hipertensivo", level: "medio", correct: 1,
        stem: "Vítima de FAB no hemitórax direito, dispneia, satura 84%, PAS 80, traqueia desviada para a esquerda, jugular distendida, MV abolido à direita. Próxima conduta:",
        alts: [
          "Radiografia de tórax para confirmar pneumotórax hipertensivo.",
          "<strong>Toracocentese de alívio imediata</strong> no 5º EIC linha axilar média (ou 2º EIC LMC) à direita, antes de qualquer imagem.",
          "Dreno torácico em selo d'água sem descompressão prévia.",
          "Intubação orotraqueal antes da descompressão."
        ],
        why: "<strong>Pneumotórax hipertensivo é diagnóstico CLÍNICO</strong> — pedir RX é erro grave (atrasa, paciente pode parar). Descompressão imediata salva: ATLS 11 prefere o <strong>5º EIC linha axilar média</strong> (mais próxima do tórax na maioria dos adultos) ao 2º EIC LMC. IOT antes piora (VPP infla mais o pneumo)."
      },
      {
        tag: "Aberto", level: "medio", correct: 2,
        stem: "Vítima com ferida aberta soprante de ~5 cm em hemitórax esquerdo, dispneia. Conduta inicial correta:",
        alts: [
          "Curativo oclusivo nos 4 lados, fixado em todas as bordas.",
          "Apenas oxigenoterapia, ferida cuida-se na cirurgia.",
          "<strong>Curativo de 3 pontas</strong> (oclusivo em 3 lados, 1 livre como válvula) e dreno torácico definitivo em seguida.",
          "Sutura primária imediata da ferida na sala vermelha."
        ],
        why: "Pneumotórax aberto = <strong>curativo de 3 pontas</strong> (válvula unidirecional: ar sai na expiração, não entra na inspiração). Oclusão total dos 4 lados <em>converte em hipertensivo</em> (erro clássico). Sutura primária na sala sela o ar dentro. O dreno definitivo é o tratamento subsequente."
      },
      {
        tag: "Simples · pequeno", level: "dificil", correct: 3,
        stem: "Pneumotórax simples assintomático, < 2 cm na radiografia (PSP-style), em paciente estável que <strong>não vai à VPP/cirurgia</strong>. Conduta:",
        alts: [
          "Dreno torácico de rotina sempre, todo pneumotórax dreno.",
          "Toracocentese de alívio mesmo assintomático.",
          "Pleurodese química imediata.",
          "<strong>Observação clínica</strong> com O₂ suplementar e radiografia seriada."
        ],
        why: "<strong>Pneumotórax pequeno + estável + sem VPP/cirurgia = observação.</strong> Drenagem é mandatória quando: sintomático, > tamanho limítrofe, vai a VPP, vai a cirurgia, hemotórax associado. Toracocentese só em hipertensivo. Pleurodese é tardia, nunca aguda."
      }
    ],

    /* ===================== Hemotórax ===================== */
    "b-hemotorax": [
      {
        tag: "Toracotomia", level: "medio", correct: 0,
        stem: "Vítima com hemotórax direito, drenagem inicial de <strong>1.600 mL</strong> de sangue vivo na inserção do dreno, mantém débito de 250 mL/h por 3 h. Conduta:",
        alts: [
          "<strong>Toracotomia de urgência</strong> — débito inicial > 1.500 mL ou ≥ 200 mL/h por 2–4 h é indicação cirúrgica.",
          "Apenas observação, dreno em selo d'água é suficiente.",
          "Aspiração ativa do dreno para acelerar drenagem.",
          "Pleurodese após 24 h se persistir."
        ],
        why: "Critérios clássicos para <strong>toracotomia em hemotórax</strong>: drenagem inicial > 1.500 mL <em>ou</em> ≥ 200 mL/h por 2–4 h <em>ou</em> instabilidade hemodinâmica refratária. Manter só dreno em sangramento ativo é abandono do paciente. Aspiração não trata fonte."
      },
      {
        tag: "Hemotórax retido", level: "dificil", correct: 2,
        stem: "Após 72 h de dreno torácico por hemotórax traumático, RX mostra opacidade residual. Risco principal se não tratada:",
        alts: [
          "Reabsorção espontânea sem complicações relevantes.",
          "Apenas dor pleurítica autolimitada.",
          "<strong>Empiema pleural e fibrotórax</strong> — indicação de toracoscopia (VATS) precoce para evacuação.",
          "Hemoptise tardia."
        ],
        why: "<strong>Hemotórax retido</strong> é meio de cultura — empiema (até 30%) e fibrotórax restritivo. Tratamento padrão: <strong>VATS precoce</strong> (3–7 dias). Reabsorção espontânea é mito em volumes significativos. Hemoptise não é a complicação principal."
      }
    ],

    /* ===================== Tórax instável & contusão ===================== */
    "b-flail-contusao": [
      {
        tag: "Flail chest", level: "medio", correct: 1,
        stem: "Vítima com 5 arcos costais consecutivos fraturados em ≥ 2 pontos (segmento instável), respiração paradoxal, satura 88% em O₂. Tratamento principal:",
        alts: [
          "Estabilização externa com fita adesiva sobre o segmento.",
          "<strong>Suporte ventilatório e analgesia agressiva</strong> — o problema clínico é a contusão pulmonar subjacente, não a parede móvel em si.",
          "Imobilização com saco de areia sobre o tórax.",
          "Cirurgia urgente em todos os casos."
        ],
        why: "<strong>O que mata no tórax instável é a contusão pulmonar subjacente</strong> — a respiração paradoxal é apenas o sinal visível. Manejo central: analgesia (peridural se possível) + suporte ventilatório (CPAP/IOT se necessário) + fisioterapia. Estabilização externa é mito antigo. Cirurgia (osteossíntese costal) é seletiva, não universal."
      },
      {
        tag: "Contusão pulmonar", level: "dificil", correct: 2,
        stem: "Sobre contusão pulmonar pós-trauma fechado, é <strong>INCORRETO</strong> afirmar:",
        alts: [
          "A piora típica ocorre nas primeiras 24–72 h, mesmo se a apresentação inicial é leve.",
          "Hiperidratação piora o quadro — restrição hídrica e PEEP são pilares.",
          "<strong>Deve ser tratada com corticoide IV em pulso, sempre.</strong>",
          "TC de tórax é mais sensível que RX, pode estar normal nas primeiras horas."
        ],
        why: "<strong>Corticoide NÃO é tratamento de contusão pulmonar</strong> — não reduz mortalidade e pode aumentar infecção. As demais estão corretas: piora em 24–72 h, restrição hídrica + PEEP, TC > RX nas primeiras horas (RX pode subestimar)."
      }
    ],

    /* ===================== C — choque ===================== */
    "c-choque": [
      {
        tag: "Índice de choque", level: "medio", correct: 0,
        stem: "Vítima de FAF abdominal: PAS 100, FC 130. Qual o <strong>índice de choque</strong> e o que ele indica?",
        alts: [
          "<strong>IC = 1,3 — choque oculto</strong>; alta probabilidade de necessidade de transfusão maciça mesmo com PAS 'normal'.",
          "IC = 0,77 — paciente compensado, sem necessidade de hemoderivados.",
          "IC = 130 — valor absoluto da FC, sem significado prognóstico.",
          "IC não se aplica a trauma penetrante."
        ],
        why: "<strong>Índice de choque = FC / PAS</strong>. Aqui = 130/100 = <strong>1,3</strong> (normal < 0,7). IC ≥ 1 prediz choque oculto e transfusão maciça em politrauma — mais sensível que PAS isolada (que pode permanecer normal até 30% de perda volêmica). Aplica-se a qualquer trauma."
      },
      {
        tag: "PTM 1:1:1", level: "medio", correct: 1,
        stem: "Sobre o <strong>protocolo de transfusão maciça (PTM 1:1:1)</strong>, é correto afirmar:",
        alts: [
          "Significa 1 L de cristaloide + 1 unidade de CH + 1 g de fibrinogênio.",
          "<strong>1 unidade de plasma : 1 unidade de plaquetas : 1 unidade de concentrado de hemácias</strong> — reproduz sangue total.",
          "Indica 1 transfusão a cada 1 hora por 1 dia.",
          "É contraindicado em FAF abdominal por aumento de ressangramento."
        ],
        why: "PTM 1:1:1 = <strong>1 plasma : 1 plaquetas : 1 CH</strong> (PROPPR trial), reproduzindo sangue total e prevenindo coagulopatia dilucional. Cristaloide em volume é <em>inimigo</em> — quebra coágulo e dilui fatores. Indicação: choque hemorrágico classe III/IV, ABC score ≥ 2, sangramento ativo."
      },
      {
        tag: "ABC score", level: "dificil", correct: 2,
        stem: "Os 4 critérios do <strong>ABC score</strong> (Assessment of Blood Consumption) para acionar PTM são:",
        alts: [
          "Idade > 60, GCS < 8, PAS < 90, FAF.",
          "Hb < 7, lactato > 4, pH < 7,2, BE < -6.",
          "<strong>Trauma penetrante · PAS ≤ 90 · FC ≥ 120 · FAST positivo</strong> — ≥ 2 critérios = ativar PTM.",
          "Idade, mecanismo, sexo masculino e plaquetas < 100k."
        ],
        why: "<strong>ABC score</strong>: 4 itens binários — penetrante, PAS ≤ 90, FC ≥ 120, FAST+. Score ≥ 2 = sensibilidade ~75% para PTM. Vantagem: <em>nenhum exame laboratorial</em>, decisão à beira do leito. Os outros distratores misturam variáveis de outros escores."
      }
    ],

    /* ===================== Tamponamento & aorta ===================== */
    "c-tamponamento-aorta": [
      {
        tag: "Tamponamento", level: "medio", correct: 1,
        stem: "FAB precordial, hipotenso (PAS 75), bulhas abafadas, jugular distendida, FAST com derrame pericárdico. Conduta imediata:",
        alts: [
          "Pericardiocentese guiada por ECG e seguir conservador.",
          "<strong>Toracotomia/janela pericárdica de urgência</strong> no centro cirúrgico — pericardiocentese é apenas ponte se cirurgia não imediatamente disponível.",
          "Drenagem torácica bilateral preventiva.",
          "TC de tórax antes de qualquer intervenção."
        ],
        why: "Tríade de Beck (hipotensão + bulhas abafadas + jugular distendida) + FAST+ em FAB precordial = <strong>tamponamento traumático</strong>, indicação de toracotomia/janela pericárdica imediata. Pericardiocentese é <em>ponte</em> (alivia 5–10 mL e ganha minutos), não tratamento definitivo em trauma. TC atrasa e mata."
      },
      {
        tag: "Aorta torácica", level: "dificil", correct: 2,
        stem: "Vítima de desaceleração brusca (capotamento), RX de tórax mostra <strong>alargamento mediastinal</strong> (> 8 cm) e apagamento do botão aórtico. Próximo passo diagnóstico:",
        alts: [
          "FAST imediato, dispensa outras imagens.",
          "Aortografia digital, padrão antigo restabelecido.",
          "<strong>angio-TC de tórax</strong> — exame de escolha para lesão traumática de aorta torácica.",
          "Ecocardiograma transtorácico padrão."
        ],
        why: "<strong>Lesão traumática de aorta</strong> (istmo, distal à subclávia E em 90%) tem como sinais radiográficos: alargamento mediastinal, apagamento do botão aórtico, desvio de SNG/traqueia. <strong>angio-TC</strong> é o padrão atual (sensibilidade ~100%). Aortografia foi substituída. ETT vê pouco da aorta torácica descendente — ETE é alternativa."
      }
    ],

    /* ===================== D — neuro ===================== */
    "d-neuro": [
      {
        tag: "Glasgow ≤ 8", level: "facil", correct: 0,
        stem: "Vítima de TCE, GCS 7 (O1 V2 M4), sem instabilidade respiratória ou hemodinâmica aparente. Conduta sobre via aérea:",
        alts: [
          "<strong>Intubação orotraqueal</strong> — GCS ≤ 8 é indicação clássica de IOT por perda de proteção de via aérea.",
          "Apenas O₂ por máscara não reinalante e observar evolução.",
          "Cânula de Guedel (orofaríngea) é suficiente.",
          "VNI até resposta a estímulo verbal melhorar."
        ],
        why: "<strong>GCS ≤ 8 = IOT.</strong> Reflexo de proteção da via aérea perdido = risco iminente de broncoaspiração. Ainda que esteja respirando, a deterioração é a regra. Guedel e VNI não protegem da aspiração. Em TCE, evite hipoxia e hipotensão (cada uma duplica mortalidade)."
      },
      {
        tag: "Hipertensão intracraniana", level: "medio", correct: 2,
        stem: "Paciente com TCE grave, IOT, mostrando anisocoria (pupila E > D, fixa) e PAS 180 com bradicardia (tríade de Cushing). Conduta inicial para herniação iminente:",
        alts: [
          "Hiperventilação contínua mantendo PaCO₂ em 25 mmHg.",
          "Manitol 2 g/kg em bolus rápido seguido de drenagem ventricular.",
          "<strong>Salina hipertônica 3% (ou manitol) + cabeceira a 30° + sedação/analgesia + neurocirurgia urgente</strong> — hiperventilação só transitória (PaCO₂ 30–35) em herniação iminente.",
          "Apenas observação até TC de crânio."
        ],
        why: "Sinais de herniação = osmoterapia (manitol 0,5–1 g/kg ou salina hipertônica 3%) + cabeceira 30° + sedação + neurocirurgia <strong>imediata</strong>. Hiperventilação <em>profunda</em> sustentada (PaCO₂ < 30) gera vasoconstrição e isquemia — usa-se PaCO₂ 30–35 só como ponte. Esperar TC com tríade de Cushing é tarde demais."
      }
    ],

    /* ===================== E — exposição ===================== */
    "e-exposicao": [
      {
        tag: "Hipotermia", level: "medio", correct: 1,
        stem: "Politraumatizado chega em sala vermelha, temperatura central 33,8°C, sangramento ativo. Por que a hipotermia é especialmente perigosa nesse contexto?",
        alts: [
          "Apenas desconforto, sem impacto em mortalidade.",
          "<strong>Compõe a tríade letal</strong> (hipotermia + acidose + coagulopatia) — cada componente piora os outros, criando ciclo vicioso.",
          "Causa principalmente arritmias atriais autolimitadas.",
          "Reduz consumo de O₂ e tem efeito protetor."
        ],
        why: "<strong>Tríade letal do trauma</strong>: hipotermia + acidose + coagulopatia. Hipotermia inibe enzimas da cascata de coagulação, piora função plaquetária, reduz vasoconstrição. Reaquecer (mantas, fluidos aquecidos, ambiente) é E e <em>parte do tratamento do choque</em>. Efeito 'protetor' da hipotermia é em PCR, não em trauma sangrando."
      },
      {
        tag: "Lesão de uretra", level: "dificil", correct: 0,
        stem: "Vítima de fratura de pelve, sangue no meato uretral, próstata ascensionada ao toque retal. Antes de passar SVD, qual exame está indicado?",
        alts: [
          "<strong>Uretrografia retrógrada</strong> — sangue no meato + fratura de pelve sugere lesão uretral; SVD às cegas pode converter lesão parcial em total.",
          "TC de abdome com contraste oral.",
          "Cistoscopia direta na sala vermelha.",
          "Tentar SVD com sonda fina (8 Fr); se passar, lesão excluída."
        ],
        why: "<strong>Sangue no meato + fratura de pelve = NÃO sondar.</strong> Uretrografia retrógrada confirma e estadia. Tentar SVD às cegas é o erro clássico — converte lesão uretral parcial em total, exigindo cirurgia maior. Cistostomia suprapúbica é alternativa de drenagem se confirmada lesão."
      }
    ]
  };

  /* ---------- Render do bloco completo (multiplas questões) ---------- */
  function _badgeFor(tag) {
    // mapeia tema → cor da badge baseada na primeira letra/palavra-chave
    const t = tag.toLowerCase();
    if (/x|exsang|torniqu|txa/.test(t)) return "badge-x";
    if (/^a\b|via aérea|aérea/.test(t)) return "badge-a";
    if (/^b\b|pneumo|hemot|capno|tórax|flail|contus/.test(t)) return "badge-b";
    if (/^c\b|choque|circul|tampon|aorta|ptm|abc/.test(t)) return "badge-c";
    if (/^d\b|neuro|glasgow|cush/.test(t)) return "badge-d";
    if (/^e\b|hipoterm|exposi|uretra/.test(t)) return "badge-e";
    return "";
  }

  function _levelLabel(lv) {
    return lv === "facil" ? "fácil" : lv === "dificil" ? "difícil" : "médio";
  }

  function renderQuizExtra(routeId) {
    const items = QUIZZES_BY_ROUTE[routeId];
    if (!items || !items.length) return "";
    const parts = items.map((q, i) => {
      const num = "Q" + String(i + 1).padStart(2, "0");
      const altsHtml = q.alts.map((alt, j) => {
        const letter = String.fromCharCode(65 + j); // A, B, C, D
        return `<button type="button" class="quiz__alt"><span class="quiz__alt-letter">${letter}</span><span class="quiz__alt-txt">${alt}</span></button>`;
      }).join("\n        ");
      const badgeCls = _badgeFor(q.tag);
      return `
<article class="quiz" data-correct="${q.correct}">
  <div class="quiz__head">
    <span class="quiz__num">${num}</span>
    <span class="badge ${badgeCls} quiz__tag">${q.tag}</span>
    <span class="quiz__level" title="Nível de dificuldade">${_levelLabel(q.level)}</span>
  </div>
  <p class="quiz__stem">${q.stem}</p>
  <div class="quiz__alts">
        ${altsHtml}
  </div>
  <div class="quiz__feedback">${q.why}</div>
</article>`;
    }).join("\n");

    return `
<section class="quiz-extra" data-quiz-extra="${routeId}" aria-label="Questões de fixação da página">
  <header class="quiz-extra__head">
    <h2 class="quiz-extra__title">Teste seu gabarito</h2>
    <p class="quiz-extra__sub">Questões de fixação da página · estilo residência médica · ${items.length} questões</p>
  </header>
  ${parts}
</section>`;
  }

  function hasQuizExtra(routeId) {
    return Array.isArray(QUIZZES_BY_ROUTE[routeId]) && QUIZZES_BY_ROUTE[routeId].length > 0;
  }

  // expor API
  root.TRAUMA_QUIZ_EXTRA = {
    render: renderQuizExtra,
    has: hasQuizExtra,
    map: QUIZZES_BY_ROUTE
  };

})(window);
