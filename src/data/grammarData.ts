export interface GrammarSection {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  declerckPrinciple: string;
  spanishComparison: string;
  formula: string;
  summary: string;
  useCases: {
    label: string;
    description: string;
    examples: { en: string; es: string; note?: string }[];
  }[];
  commonMistakes: {
    wrong: string;
    right: string;
    explanation: string;
  }[];
  proTip: string;
}

export const GRAMMAR_SECTIONS: GrammarSection[] = [
  {
    id: 'core-four',
    number: '01',
    title: 'Los 4 Futuros Principales',
    subtitle: 'Will vs Be Going To vs Present Continuous vs Present Simple',
    declerckPrinciple: 'En la teoría de Renaat Declerck, el futuro se sitúa en el "sector post-presente". El hablante elige la forma verbal según su conexión psicológica con el presente (t₀): ¿es una decisión tomada ahora mismo en t₀, un plan con raíces en el presente, un acuerdo formal o un horario oficial independiente del hablante?',
    spanishComparison: 'En español usamos "voy a + infinitivo" para casi todo ("voy a comer", "voy a viajar"). En inglés, cada una de estas 4 formas tiene un disparador mental muy concreto. Si eliges la incorrecta, el nativo interpretará otra intención.',
    formula: 'Will + V  |  Am/Is/Are going to + V  |  Am/Is/Are + V-ing  |  V / V-s',
    summary: 'La clave para distinguir los 4 futuros radica en el grado de premeditación y control: desde la reacción espontánea (Will) hasta el horario oficial de un tren (Present Simple).',
    useCases: [
      {
        label: 'A. Future Simple (Will)',
        description: 'Decisión espontánea en el momento del habla (t₀), predicción subjetiva ("I think..."), promesa o rechazo.',
        examples: [
          {
            en: 'The phone is ringing. — I will get it!',
            es: 'El teléfono está sonando. — ¡Yo contesto! (Decisión instantánea en t₀, no planeada).',
            note: 'No se puede usar "going to" aquí porque no lo planeaste hace cinco minutos.'
          },
          {
            en: 'I think artificial intelligence will transform education.',
            es: 'Creo que la inteligencia artificial transformará la educación (Opinión personal).',
            note: 'Predicción basada en creencia, no en prueba visual inmediata.'
          },
          {
            en: 'I will never tell your secret to anyone. I promise.',
            es: 'Nunca le diré tu secreto a nadie. Te lo prometo.',
            note: 'Promesa formal o compromiso personal.'
          }
        ]
      },
      {
        label: 'B. Be Going To',
        description: 'Planes previos meditados ("roots in the present") o evidencia física presente inminente.',
        examples: [
          {
            en: 'Look at those black storm clouds! It is going to rain.',
            es: '¡Mira esos nubarrones negros! Va a llover (Evidencia física visible ahora mismo).',
            note: 'Declerck: La causa del evento futuro ya existe visiblemente en t₀.'
          },
          {
            en: 'I have saved up enough money; I am going to buy a new laptop next week.',
            es: 'He ahorrado suficiente dinero; voy a comprarme un portátil nuevo la próxima semana.',
            note: 'Intención deliberada previa, ya decidida antes de este momento.'
          }
        ]
      },
      {
        label: 'C. Present Continuous con valor de Futuro',
        description: 'Planes fijados ("arrangements"): citas concertadas con día, hora, lugar o con otra persona.',
        examples: [
          {
            en: 'I am seeing the dentist on Thursday at 4:30 PM.',
            es: 'Tengo cita con el dentista el jueves a las 4:30 PM.',
            note: 'No es solo una intención: la cita ya está reservada en la agenda.'
          },
          {
            en: 'We are flying to London tomorrow morning.',
            es: 'Volamos a Londres mañana por la mañana (billetes comprados).',
            note: 'El Present Continuous aporta certeza de preparación logística.'
          }
        ]
      },
      {
        label: 'D. Present Simple con valor de Futuro',
        description: 'Horarios públicos, transportes, cines, calendarios oficiales (timetables / schedules).',
        examples: [
          {
            en: 'The train to Zurich departs at 7:15 tomorrow morning.',
            es: 'El tren a Zúrich sale a las 7:15 de mañana por la mañana.',
            note: 'Tú no controlas el horario del tren: es una institución externa.'
          },
          {
            en: 'The semester ends on June 22nd.',
            es: 'El semestre escolar termina el 22 de junio.',
            note: 'Calendario formal inamovible.'
          }
        ]
      }
    ],
    commonMistakes: [
      {
        wrong: '*The phone is ringing. I am going to answer it.',
        right: 'The phone is ringing. I will answer it!',
        explanation: 'En español decimos "yo voy a contestar", pero en inglés, al ser una decisión tomada en ese preciso segundo (t₀), se debe usar WILL.'
      },
      {
        wrong: '*Look at that car! It will crash!',
        right: 'Look at that car! It is going to crash!',
        explanation: 'Cuando hay evidencia física inmediata y perceptible a la vista, el inglés exige GOING TO, no WILL.'
      },
      {
        wrong: '*What do you do tonight?',
        right: 'What are you doing tonight?',
        explanation: 'Para planes personales de hoy o mañana, usa Present Continuous. El Present Simple se reserva para horarios de transporte o eventos institucionales.'
      }
    ],
    proTip: 'Regla mnemotécnica: WILL = Flash del momento / Fe ciega | GOING TO = Evidencia o Intención | PRESENT CONTINUOUS = Agenda cerrada | PRESENT SIMPLE = Horario de tren.'
  },
  {
    id: 'temporal-subordination',
    number: '02',
    title: 'La Regla de Oro de Declerck: Subordinadas Temporales',
    subtitle: 'Por qué NUNCA se dice "When I will arrive"',
    declerckPrinciple: 'Según Declerck, el inglés utiliza dos sistemas de perspectiva temporal: el "Future Perspective System" (FPS) en la oración principal y el "Present Perspective System" (PPS) en las subordinadas temporales y condicionales. La conjunción temporal (when, after, before, until, as soon as) ya contiene implícitamente el punto de referencia temporal futuro (implicit TO). Por tanto, el verbo que va dentro debe expresar simultaneidad con ese punto usando Presente Simple, o anterioridad usando Presente Perfecto.',
    spanishComparison: '¡Este es el error número 1 de los hispanohablantes! En español usamos el SUBJUNTIVO: "Te llamaré cuando *llegue*", "Dímelo en cuanto *sepas* algo". Como en inglés no existe futuro de subjuntivo, el estudiante tiende a traducir erróneamente colocando "will". En inglés se usa estrictamente PRESENTE DE INDICATIVO.',
    formula: 'Main Clause [will / going to] + Conjunction (when / as soon as / before / after / until) + Subclause [Present Simple / Present Perfect]',
    summary: 'Dentro de la frase introducida por conectores de tiempo, WILL está terminantemente prohibido. El conector ya transporta la escena al futuro.',
    useCases: [
      {
        label: 'A. Simultaneidad con el punto futuro (Present Simple)',
        description: 'La acción de la subordinada ocurre al mismo tiempo o inmediatamente al activarse el momento futuro.',
        examples: [
          {
            en: 'I will call you when I arrive at the hotel.',
            es: 'Te llamaré cuando llegue al hotel (¡NUNCA: *when I will arrive!).',
            note: 'Declerck: "arrive" expresa simultaneidad con el tiempo implícito de la conjunción.'
          },
          {
            en: 'As soon as the contract is ready, we will sign it.',
            es: 'En cuanto el contrato esté listo, lo firmaremos.',
            note: '"is ready" en presente simple, no *"will be ready".'
          },
          {
            en: 'We will wait until the manager comes back.',
            es: 'Esperaremos hasta que el gerente regrese.',
            note: '"until he comes back", no *"until he will come back".'
          }
        ]
      },
      {
        label: 'B. Anterioridad dentro del futuro (Present Perfect)',
        description: 'Cuando se quiere enfatizar explícitamente que la primera acción debe estar 100% terminada antes de que suceda la principal.',
        examples: [
          {
            en: 'You can go out to play when you have finished your homework.',
            es: 'Podrás salir a jugar cuando hayas terminado tus deberes.',
            note: 'Declerck: El Present Perfect en PPS indica anterioridad respecto al punto futuro.'
          },
          {
            en: 'John will leave only after he has eaten breakfast.',
            es: 'John saldrá solo después de que haya desayunado.',
            note: 'Garantiza que el desayuno estará completo antes de la salida.'
          }
        ]
      },
      {
        label: 'C. Cláusulas con "Before" y anterioridad relativa',
        description: 'En oraciones con "before", la acción principal ocurre antes de la marca temporal señalada.',
        examples: [
          {
            en: 'We will arrive before the sun sets.',
            es: 'Llegaremos antes de que se ponga el sol.',
            note: '"before the sun sets", jamás *"before the sun will set".'
          },
          {
            en: 'Make sure to backup your files before you turn off the computer.',
            es: 'Asegúrate de respaldar tus archivos antes de apagar el ordenador.',
            note: 'Subordinación temporal estricta.'
          }
        ]
      }
    ],
    commonMistakes: [
      {
        wrong: '*I will tell you when I will see him tomorrow.',
        right: 'I will tell you when I see him tomorrow.',
        explanation: 'En las oraciones subordinadas de tiempo, "will" es agramatical. La conjunción "when" ya sitúa la orientación en el futuro, por lo que el verbo debe ir en presente.'
      },
      {
        wrong: '*As soon as they will arrive, we will start.',
        right: 'As soon as they arrive, we will start.',
        explanation: '"As soon as" funciona igual que "when": exige Presente Simple (PPS).'
      },
      {
        wrong: '*I will stay until it will stop raining.',
        right: 'I will stay until it stops raining.',
        explanation: '"Until" exige presente simple: "until it stops raining".'
      }
    ],
    proTip: 'Regla de oro suiza: Si ves WHEN, AS SOON AS, BEFORE, AFTER o UNTIL apuntando al futuro, pon el verbo en PRESENTE. Elimina "will" sin dudarlo.'
  },
  {
    id: 'advanced-future',
    number: '03',
    title: 'Tiempos Compuestos: Continuous & Perfect',
    subtitle: 'Future Continuous, Future Perfect y Future Perfect Continuous',
    declerckPrinciple: 'Declerck analiza el Future Perfect como un tiempo "absoluto-relativo": reestablece el sector post-presente mediante "will", y a la vez expresa anterioridad dentro de ese sector mediante "have". Lo fascinante de su descubrimiento es que no importa si la acción empezó antes de hoy, hoy o en el futuro; lo único que afirma es que estará concluida antes del punto de referencia futuro (TO₂).',
    spanishComparison: 'En español corresponden a: "Estaré haciendo" (Future Continuous), "Habré hecho" (Future Perfect) y "Llevaré haciendo" (Future Perfect Continuous). Los hispanohablantes suelen olvidar el Future Continuous para preguntas de cortesía.',
    formula: 'Will be + V-ing  |  Will have + Past Participle  |  Will have been + V-ing',
    summary: 'Estos tiempos permiten viajar mentalmente a un punto del futuro y mirar alrededor: qué estará sucediendo en ese instante exacto (Continuous) o qué habrá quedado ya completado (Perfect).',
    useCases: [
      {
        label: 'A. Future Continuous (will be doing)',
        description: 'Acción que estará en pleno desarrollo en un instante temporal específico en el futuro.',
        examples: [
          {
            en: 'Tomorrow at 10:00 AM, I will be flying over the Atlantic.',
            es: 'Mañana a las 10:00 AM, estaré volando sobre el Atlántico (en pleno vuelo).',
            note: 'A las 10:00 AM no empezaré a volar: ya estaré en el aire.'
          },
          {
            en: 'Will you be using your laptop this afternoon? (Polite inquiry)',
            es: '¿Estarás usando tu portátil esta tarde? (Pregunta de cortesía sin presionar).',
            note: 'Uso pragmático clave: suena mucho más neutro y educado que "¿Me prestas tu portátil?".'
          }
        ]
      },
      {
        label: 'B. Future Perfect (will have done)',
        description: 'Acción que estará terminada antes de un momento específico en el futuro (frecuentemente con "by...").',
        examples: [
          {
            en: 'By next Friday, the architects will have completed the museum blueprints.',
            es: 'Para el próximo viernes, los arquitectos habrán completado los planos del museo.',
            note: 'El viernes es el límite; la culminación ocurre antes de esa hora.'
          },
          {
            en: 'By 2030, scientists will have discovered new clean energy storage methods.',
            es: 'Para 2030, los científicos habrán descubierto nuevos métodos de almacenamiento de energía limpia.',
            note: 'Acción concluida antes del año 2030.'
          }
        ]
      },
      {
        label: 'C. Future Perfect Continuous (will have been doing)',
        description: 'Mide la duración acumulada de una actividad continua hasta un punto en el futuro.',
        examples: [
          {
            en: 'By December, she will have been working at this Swiss design institute for 10 years.',
            es: 'En diciembre, ella llevará 10 años trabajando en este instituto de diseño suizo.',
            note: 'En español usamos la perífrasis "llevar + gerundio". En inglés: will have been working.'
          },
          {
            en: 'By the time the race ends, the runners will have been running for six hours.',
            es: 'Para cuando termine la carrera, los corredores llevarán seis horas corriendo.',
            note: 'Enfoca la fatiga o duración del proceso.'
          }
        ]
      }
    ],
    commonMistakes: [
      {
        wrong: '*By 5:00 PM tomorrow, I will finish the task.',
        right: 'By 5:00 PM tomorrow, I will have finished the task.',
        explanation: 'La preposición "BY" (para tal hora/fecha) es la señal inequívoca del Future Perfect: exige "will have + participio".'
      },
      {
        wrong: '*In 2028 I will be working here for 5 years.',
        right: 'In 2028 I will have been working here for 5 years.',
        explanation: 'Para expresar la duración acumulada que se alcanza en una fecha futura, usa Future Perfect Continuous.'
      }
    ],
    proTip: 'Cuando veas la preposición "BY" seguida de un tiempo ("By 8 o\'clock", "By next year", "By the time..."), tu cerebro debe saltar inmediatamente al FUTURE PERFECT.'
  },
  {
    id: 'declerck-if-will',
    number: '04',
    title: 'Los Casos Excepcionales de Declerck: ¿Cuándo SÍ se usa "If + Will"?',
    subtitle: 'El análisis revolucionario de las 9 tipologías de condicionales',
    declerckPrinciple: 'Los libros de texto tradicionales repiten mecánicamente que "nunca se puede poner will después de if". Renaat Declerck demostró que esto es falso: en los condicionales estándar ("If it rains, we will stay home") se usa presente por subordinación temporal lógica (p causa q). Pero si la relación no es una causa previa sino una verdad presupuesta, una cortesía, una consecuencia posterior (after-future) o una pregunta diferida, el inglés SÍ usa "If + Will".',
    spanishComparison: 'En español esto equivale a matices muy claros: "¿Si fuera tan amable de...?", "Si es verdad lo que dices de que va a...", o "Te ayudo si con eso se va a resolver el problema". Comprender esto te pone al nivel de un angloparlante avanzado.',
    formula: 'If + [will / is going to] + V (en contextos de verdad previa, cortesía o consecuencia posterior)',
    summary: 'Declerck demostró que "will" es perfectamente gramatical tras "if" cuando la cláusula condicional no es una simple hipótesis de causa-efecto, sino una condición de verdad, cortesía o consecuencia posterior.',
    useCases: [
      {
        label: 'Tipo I: Condición de Verdad Cerrada (Truth-Conditional)',
        description: 'El hablante asume por el momento que la afirmación o predicción que alguien hizo es un hecho ("si es verdad que...").',
        examples: [
          {
            en: 'If, as you say, the train will arrive at 5:00, why are you leaving now?',
            es: 'Si, como dices, el tren va a llegar a las 5:00, ¿por qué te vas ahora?',
            note: 'Declerck: Aquí "if" equivale a "asumiendo que sea verdad que el tren llegará".'
          },
          {
            en: 'If the decision will be announced tomorrow, we should draft the statement tonight.',
            es: 'Si es que la decisión se anunciará mañana, deberíamos redactar el comunicado esta noche.',
            note: 'La acción de la principal es anterior al evento del if.'
          }
        ]
      },
      {
        label: 'Tipo II: Condicional de Cortesía / Acto de Habla (Utterance-Conditional)',
        description: 'La cláusula con if establece la condición para la cortesía o relevancia del mensaje.',
        examples: [
          {
            en: 'If you will not be with us for the late news, goodnight.',
            es: 'Si no va a acompañarnos en las noticias de la noche, buenas noches (Haegeman & Wekker).',
            note: 'La despedida solo es relevante para quienes se van a dormir ya.'
          },
          {
            en: 'If it will not be too much trouble, please pass this dossier to the director.',
            es: 'Si no fuera mucha molestia, por favor entregue este expediente al director.',
            note: 'Petición sumamente cortés.'
          }
        ]
      },
      {
        label: 'Tipo III: Consecuencia Posterior ("After-Future" / Causal Link)',
        description: 'La acción del "if" NO es la causa, sino el EFECTO que se espera conseguir si se realiza la acción principal.',
        examples: [
          {
            en: 'I will gladly lend you the money if it will solve your problems.',
            es: 'Te prestaré el dinero con gusto si eso resuelve tus problemas (Declerck p. 206).',
            note: 'Primero te presto el dinero; DESPUÉS se resolverán los problemas. ¡El if ocurre después!'
          },
          {
            en: 'I’ll take the coat back if it will make you feel any better.',
            es: 'Devolveré el abrigo si eso te hace sentir mejor.',
            note: 'Fórmula de Declerck: "Hago Q si con eso se produce P".'
          }
        ]
      },
      {
        label: 'Tipo V: Consideración o Pregunta Cortés Diferida (Afterthought)',
        description: 'Añadido al final de una frase como cortesía para que el oyente decida en el futuro.',
        examples: [
          {
            en: 'I’ll come down to your office after two o’clock, if it will suit you.',
            es: 'Bajaré a tu oficina después de las dos, si te viene bien (Poutsma / Declerck p. 210).',
            note: 'Deja en manos del interlocutor la confirmación sin presionarle en el presente.'
          },
          {
            en: 'I will leave the car here, if you won’t mind.',
            es: 'Dejaré el coche aquí, si no te va a importar.',
            note: 'La molestia se evaluará en el futuro.'
          }
        ]
      }
    ],
    commonMistakes: [
      {
        wrong: '*If it will rain tomorrow, we will cancel the match.',
        right: 'If it rains tomorrow, we will cancel the match.',
        explanation: 'En los condicionales estándar ordinarios (la lluvia causa la cancelación), "will" sigue estando PROHIBIDO en el if. Solo se permite en los casos especiales de Declerck.'
      },
      {
        wrong: '*I will lend you money if you buy groceries with it. (cuando se quiere enfatizar el compromiso futuro)',
        right: 'I will lend you money if you will use it to pay your debts, not if you will use it to buy luxury items.',
        explanation: 'Declerck (p. 206): Cuando se exige la garantía de un comportamiento futuro condicionado al préstamo, "if you will..." es el uso idiomático exacto.'
      }
    ],
    proTip: 'Diferencia clave: Si la condición es la causa previa → usa Presente Simple ("If you study, you will pass"). Si la condición es un resultado deseado posterior → usa WILL ("I’ll help you if it will save your job").'
  },
  {
    id: 'modals-and-phrasals',
    number: '05',
    title: 'Matices Modales y Perífrasis de Futuro',
    subtitle: 'Shall, Be About To, Be Bound To, Be To',
    declerckPrinciple: 'El futuro en las lenguas indoeuropeas proviene históricamente de formas modales (deseo, obligación, necesidad). En el inglés actual, construcciones perifrásticas como "be to" o "be about to" enriquecen el sector post-presente aportando matices de inminencia física o mandato oficial.',
    spanishComparison: 'Equivalencias en español: "Shall we...?" (¿Hacemos...?), "Be about to" (Estar a punto de), "Be bound to" (Estar destinado / seguro a), "Be to" (Haber de / Estar dispuesto oficialmente que).',
    formula: 'Shall I/we + V  |  Be about to + V  |  Be bound to + V  |  Be to + V',
    summary: 'Más allá de will y going to, el inglés cuenta con recursos estilísticos de gran precisión para graduar el compromiso, la inminencia y el protocolo formal.',
    useCases: [
      {
        label: 'A. Shall (Ofertas, sugerencias y legalidad)',
        description: 'Usado con "I" o "We" para ofrecerse o sugerir cordialmente; y en textos jurídicos para obligatoriedad.',
        examples: [
          {
            en: 'Shall we take the early morning express train?',
            es: '¿Tomamos el tren rápido de la mañana? (Sugerencia elegante).',
            note: 'En inglés moderno, "shall" en preguntas de 1ª persona es natural y cortés.'
          },
          {
            en: 'The tenant shall pay all utilities on the first day of each month.',
            es: 'El arrendatario pagará todos los servicios el primer día de cada mes (Lenguaje contractual).',
            note: 'Obligación legal vinculante.'
          }
        ]
      },
      {
        label: 'B. Be About To (Inminencia Inmediata)',
        description: 'Equivale exactamente al español "estar a punto de". La acción ocurrirá en segundos o minutos.',
        examples: [
          {
            en: 'Hurry inside; the symposium is about to begin!',
            es: '¡Date prisa y entra; el simposio está a punto de empezar!',
            note: 'Inminencia máxima: el orador ya está en el estrado.'
          },
          {
            en: 'She was about to sign the document when the phone rang.',
            es: 'Ella estaba a punto de firmar el documento cuando sonó el teléfono.',
            note: 'Versión en pasado (future in the past).'
          }
        ]
      },
      {
        label: 'C. Be Bound To (Certeza / Inevitabilidad)',
        description: 'Indica una certeza lógica casi matemática de que algo ocurrirá.',
        examples: [
          {
            en: 'With their rigorous preparation, they are bound to succeed.',
            es: 'Con su rigurosa preparación, están destinados a triunfar (es seguro que lo harán).',
            note: 'Certeza basada en la naturaleza de los hechos.'
          }
        ]
      },
      {
        label: 'D. Be To + Infinitive (Protocolo oficial / Destino)',
        description: 'Instrucciones oficiales, mandatos de protocolo o destino histórico.',
        examples: [
          {
            en: 'The President is to visit Geneva next month for bilateral negotiations.',
            es: 'El Presidente visitará Ginebra el próximo mes para negociaciones bilaterales (Plan oficial de Estado).',
            note: 'Muy común en prensa formal.'
          },
          {
            en: 'You are to remain in this hall until security gives clearance.',
            es: 'Habéis de permanecer en esta sala hasta que seguridad dé la autorización.',
            note: 'Orden jerárquica estricta.'
          }
        ]
      }
    ],
    commonMistakes: [
      {
        wrong: '*Will we dance? (como sugerencia de pareja)',
        right: 'Shall we dance?',
        explanation: 'Para invitar o sugerir con 1ª persona ("I" / "We"), el inglés culto usa "Shall I...?" o "Shall we...?". "Will we dance?" preguntaría por el destino futuro objetivo.'
      },
      {
        wrong: '*He will leave in a second! (cuando ya tiene la mano en el pomo)',
        right: 'He is about to leave!',
        explanation: '"Be about to" transmite la inmediatez física de "estar a punto de".'
      }
    ],
    proTip: 'Usa "Shall I...?" cuando quieras ofrecer tu ayuda amablemente: "Shall I open the window for you?" suena impecable y profesional.'
  }
];
