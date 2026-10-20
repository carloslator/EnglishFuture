export interface QuizQuestion {
  id: string;
  category: 'core' | 'subordinate' | 'perfect' | 'declerck';
  questionPrompt: string;
  contextSentence: string;
  spanishTranslation: string;
  options: string[];
  correctAnswerIndex: number;
  explanationInSpanish: string;
  declerckReference: string;
}

export interface QuizCategory {
  id: string;
  name: string;
  description: string;
  badge: string;
  questions: QuizQuestion[];
}

export const QUIZ_CATEGORIES: QuizCategory[] = [
  {
    id: 'quiz-core-four',
    name: 'Los 4 Grandes del Futuro',
    description: 'Aprende a discernir entre Will, Be Going To, Present Continuous y Present Simple según la intención y certeza.',
    badge: 'Módulo 01',
    questions: [
      {
        id: 'q-c1',
        category: 'core',
        questionPrompt: 'Tu amigo tropieza y se le caen todos los libros al suelo. Reaccionas al instante:',
        contextSentence: 'Don’t worry! I ________ you pick them up.',
        spanishTranslation: '¡No te preocupes! Te ayudaré a recogerlos.',
        options: ['am going to help', 'will help', 'am helping', 'help'],
        correctAnswerIndex: 1,
        explanationInSpanish: 'Es una decisión espontánea tomada en el instante presente (t₀), sin plan previo. El inglés exige WILL para ofertas y decisiones instantáneas.',
        declerckReference: 'Declerck (1991): Las decisiones no preconcebidas que surgen en t₀ recurren al Future Simple no modalizado.'
      },
      {
        id: 'q-c2',
        category: 'core',
        questionPrompt: 'Ves a un niño corriendo hacia un charco profundo con zapatos nuevos:',
        contextSentence: 'Look out! He ________ into the puddle!',
        spanishTranslation: '¡Cuidado! ¡Va a saltar dentro del charco!',
        options: ['will jump', 'is going to jump', 'jumps', 'shall jump'],
        correctAnswerIndex: 1,
        explanationInSpanish: 'Hay evidencia física inmediata y visible en el presente. En estos casos siempre se usa "be going to".',
        declerckReference: 'Declerck: "Be going to" expresa un evento futuro que ya tiene sus raíces o signos precursores en el presente.'
      },
      {
        id: 'q-c3',
        category: 'core',
        questionPrompt: 'Tienes los billetes comprados y la reserva de hotel lista para este viernes:',
        contextSentence: 'I ________ to Rome this Friday for an architecture seminar.',
        spanishTranslation: 'Vuelo a Roma este viernes para un seminario de arquitectura.',
        options: ['fly', 'am flying', 'will fly', 'will be flown'],
        correctAnswerIndex: 1,
        explanationInSpanish: 'Para planes personales cerrados con preparativos logísticos (citas, billetes, reservas), el Present Continuous es la opción más natural y frecuente.',
        declerckReference: 'Declerck: El Present Continuous para futuro representa una extensión metafórica del presente: el arreglo ya está en marcha.'
      },
      {
        id: 'q-c4',
        category: 'core',
        questionPrompt: 'Consultas la pantalla de salidas de la estación de trenes:',
        contextSentence: 'The express train to Zurich ________ at 08:15 AM tomorrow.',
        spanishTranslation: 'El tren expreso a Zúrich sale mañana a las 08:15 AM.',
        options: ['will depart', 'is going to depart', 'departs', 'is departing'],
        correctAnswerIndex: 2,
        explanationInSpanish: 'Los horarios públicos, de transporte o institucionales van en Present Simple. No dependen de la voluntad del hablante.',
        declerckReference: 'Declerck: El horario es un hecho estructurado del mundo en t₀; se conceptualiza mediante el presente no progresivo.'
      },
      {
        id: 'q-c5',
        category: 'core',
        questionPrompt: 'Un pronóstico o creencia personal sobre el futuro lejano sin indicios físicos:',
        contextSentence: 'In my personal opinion, electric aircraft ________ commonplace by 2040.',
        spanishTranslation: 'En mi opinión personal, los aviones eléctricos serán habituales hacia 2040.',
        options: ['are becoming', 'will become', 'become', 'are going to become'],
        correctAnswerIndex: 1,
        explanationInSpanish: 'Para opiniones personales y predicciones subjetivas ("I think", "in my opinion"), se utiliza WILL.',
        declerckReference: 'Declerck: Predicción pura sin causa física inmediata perceptible en t₀.'
      },
      {
        id: 'q-c6',
        category: 'core',
        questionPrompt: 'Llevas tres meses ahorrando y ya has elegido el modelo de cámara que comprarás el sábado:',
        contextSentence: 'I have saved enough money. I ________ that Leica camera this Saturday.',
        spanishTranslation: 'He ahorrado suficiente dinero. Voy a comprar esa cámara Leica este sábado.',
        options: ['will buy', 'am going to buy', 'buy', 'shall buy'],
        correctAnswerIndex: 1,
        explanationInSpanish: 'Es una intención meditada previamente, decidida con anterioridad. Por eso se usa "be going to".',
        declerckReference: 'Declerck: Intención previa ya existente en la mente del hablante antes del acto de habla.'
      }
    ]
  },
  {
    id: 'quiz-subordinate',
    name: 'El Detector de Errores en Time Clauses',
    description: '¡El error #1 de los hispanohablantes! Domina el uso de Present Simple y Present Perfect tras When, As Soon As, Before, After y Until.',
    badge: 'Módulo 02',
    questions: [
      {
        id: 'q-s1',
        category: 'subordinate',
        questionPrompt: 'Elige la forma correcta para completar la subordinada de tiempo:',
        contextSentence: 'I will call you the moment I ________ at the central terminal.',
        spanishTranslation: 'Te llamaré en el momento en que llegue a la terminal central.',
        options: ['will arrive', 'arrive', 'am arriving', 'would arrive'],
        correctAnswerIndex: 1,
        explanationInSpanish: '¡Nunca "will" en la cláusula de tiempo! Tras "the moment", "when", etc., el verbo va en Presente Simple (arrive).',
        declerckReference: 'Declerck p. 98: Las cláusulas temporales usan el Present Perspective System (PPS) para expresar simultaneidad con el punto de referencia futuro.'
      },
      {
        id: 'q-s2',
        category: 'subordinate',
        questionPrompt: '¿Cuál de las siguientes cuatro oraciones es GRAMATICALMENTE CORRECTA en inglés?',
        contextSentence: 'Identifica la única oración que no comete el error de subordinación temporal:',
        spanishTranslation: 'Selecciona la frase gramaticalmente impecable:',
        options: [
          'We will start the meeting as soon as the director will arrive.',
          'We will start the meeting as soon as the director arrives.',
          'We will start the meeting as soon as the director will be arriving.',
          'We start the meeting as soon as the director will have arrived.'
        ],
        correctAnswerIndex: 1,
        explanationInSpanish: '"As soon as the director arrives" es la única correcta. El conector "as soon as" prohíbe el uso de "will".',
        declerckReference: 'Declerck p. 148: Las cláusulas de tiempo son temporalmente dependientes y su núcleo verbal no puede llevar auxiliares de futuro absoluto.'
      },
      {
        id: 'q-s3',
        category: 'subordinate',
        questionPrompt: 'Quieres que la otra persona termine de comer antes de salir:',
        contextSentence: 'We will not leave until everyone ________ lunch.',
        spanishTranslation: 'No nos iremos hasta que todo el mundo haya terminado de comer.',
        options: ['will finish', 'has finished', 'will have finished', 'would finish'],
        correctAnswerIndex: 1,
        explanationInSpanish: 'Para expresar anterioridad dentro de una subordinada futura ("hasta que hayan terminado"), el inglés usa Present Perfect ("has finished"), NUNCA Future Perfect (*will have finished).',
        declerckReference: 'Declerck p. 37: En el sistema PPS, la anterioridad relativa se expresa mediante el Present Perfect, no con formas de "will".'
      },
      {
        id: 'q-s4',
        category: 'subordinate',
        questionPrompt: 'Completa la oración con la conjunción "before":',
        contextSentence: 'Please turn off all studio lights before you ________ the building.',
        spanishTranslation: 'Por favor apaga todas las luces del estudio antes de salir del edificio.',
        options: ['will leave', 'leave', 'are going to leave', 'will have left'],
        correctAnswerIndex: 1,
        explanationInSpanish: 'Tras "before", el verbo de acción futura se conjuga en Presente Simple ("before you leave").',
        declerckReference: 'Declerck p. 104: "Before" establece una simultaneidad con un punto temporal implícito; el verbo se mantiene en Presente Simple.'
      },
      {
        id: 'q-s5',
        category: 'subordinate',
        questionPrompt: 'Un condicional estándar ordinario (causa y efecto futuro):',
        contextSentence: 'If it ________ tomorrow, we will have to reschedule the outdoor photography session.',
        spanishTranslation: 'Si llueve mañana, tendremos que reprogramar la sesión de fotos en exteriores.',
        options: ['will rain', 'rains', 'is going to rain', 'will be raining'],
        correctAnswerIndex: 1,
        explanationInSpanish: 'En los condicionales estándar (la lluvia causa la reprogramación), la cláusula con "if" exige Presente Simple ("rains").',
        declerckReference: 'Declerck p. 196: Los condicionales abiertos de situación forman un dominio hipotético único con subordinación temporal estricta (PPS).'
      },
      {
        id: 'q-s6',
        category: 'subordinate',
        questionPrompt: 'Prometes quedarte hasta que la otra persona se sienta segura:',
        contextSentence: 'I will remain right by your side until you ________ completely calm.',
        spanishTranslation: 'Me quedaré justo a tu lado hasta que te sientas completamente tranquila.',
        options: ['will feel', 'feel', 'will have felt', 'are going to feel'],
        correctAnswerIndex: 1,
        explanationInSpanish: 'Tras "until", el verbo debe estar en Presente Simple: "until you feel". En español usamos subjuntivo ("te sientas"), pero en inglés indicativo presente.',
        declerckReference: 'Declerck: Equivalencia temporal directa en PPS.'
      }
    ]
  },
  {
    id: 'quiz-perfect',
    name: 'Tiempos Compuestos: Continuous & Perfect',
    description: 'Perfecciona el uso de Future Continuous y Future Perfect con límites temporales y duraciones acumuladas.',
    badge: 'Módulo 03',
    questions: [
      {
        id: 'q-p1',
        category: 'perfect',
        questionPrompt: 'Mañana a las cuatro de la tarde, estarás en medio de una acción en progreso:',
        contextSentence: 'Tomorrow at 4:00 PM, I ________ with the Swiss design jury.',
        spanishTranslation: 'Mañana a las 4:00 PM, estaré reuniéndome / estaré reunido con el jurado de diseño suizo.',
        options: ['will meet', 'will be meeting', 'will have met', 'meet'],
        correctAnswerIndex: 1,
        explanationInSpanish: 'A las 4:00 PM la reunión estará en pleno desarrollo (acción no terminada en un instante futuro). Se usa Future Continuous ("will be meeting").',
        declerckReference: 'Declerck p. 273: El Future Continuous hace referencia a la fase intermedia de la situación (MidS) en simultaneidad con un punto futuro.'
      },
      {
        id: 'q-p2',
        category: 'perfect',
        questionPrompt: 'Ves la preposición "BY" marcando un plazo límite antes del cual se completará algo:',
        contextSentence: 'By Friday evening, our engineers ________ all security patches.',
        spanishTranslation: 'Para el viernes por la noche, nuestros ingenieros habrán instalado todos los parches de seguridad.',
        options: ['will install', 'will have installed', 'are installing', 'install'],
        correctAnswerIndex: 1,
        explanationInSpanish: 'La palabra "BY" (para tal fecha/hora) indica que la acción estará completada antes de ese momento límite. Exige Future Perfect ("will have installed").',
        declerckReference: 'Declerck p. 375: El Future Perfect ubica la situación como anterior a un punto temporal futuro de orientación (TO₂).'
      },
      {
        id: 'q-p3',
        category: 'perfect',
        questionPrompt: 'Quieres preguntar cortésmente a un compañero si va a usar la sala de reuniones, sin presionarlo:',
        contextSentence: 'Excuse me, ________ the main boardroom this afternoon?',
        spanishTranslation: 'Disculpa, ¿estarás usando la sala de juntas principal esta tarde?',
        options: ['will you use', 'will you be using', 'do you use', 'shall you use'],
        correctAnswerIndex: 1,
        explanationInSpanish: '"Will you be using...?" es una fórmula de cortesía pragmática muy refinada: indaga por la rutina del otro sin dar la sensación de pedir un favor directo.',
        declerckReference: 'Declerck: Uso cortés del Future Continuous para evitar la modalidad imperativa o impositiva.'
      },
      {
        id: 'q-p4',
        category: 'perfect',
        questionPrompt: 'Expresar una duración continua que alcanzará un hito temporal en el futuro:',
        contextSentence: 'In 2028, she ________ at the Basel Academy for twenty continuous years.',
        spanishTranslation: 'En 2028, ella llevará veinte años seguidos enseñando en la Academia de Basilea.',
        options: ['will teach', 'will be teaching', 'will have been teaching', 'teaches'],
        correctAnswerIndex: 2,
        explanationInSpanish: 'Se trata de una duración acumulada que llega hasta un punto futuro ("for twenty years"). Exige Future Perfect Continuous ("will have been teaching").',
        declerckReference: 'Declerck: Combina anterioridad con aspecto durativo no delimitado hacia el punto de orientación.'
      },
      {
        id: 'q-p5',
        category: 'perfect',
        questionPrompt: 'Un evento ocurrirá y terminará antes de que otra acción futura suceda:',
        contextSentence: 'The guests ________ by the time the host arrives.',
        spanishTranslation: 'Los invitados ya se habrán marchado para cuando llegue el anfitrión.',
        options: ['will leave', 'will have left', 'leave', 'are leaving'],
        correctAnswerIndex: 1,
        explanationInSpanish: 'La acción de marcharse (evento A) ocurre antes de la llegada del anfitrión (evento B en el futuro). Exige Future Perfect ("will have left").',
        declerckReference: 'Declerck p. 40: Contraste canónico: "John will have left when Bill arrives".'
      }
    ]
  },
  {
    id: 'quiz-declerck',
    name: 'El Desafío Declerck: Casos Especiales',
    description: 'Descubre por qué oraciones como "If that will solve your problem" o "I’ll come if it will suit you" son plenamente correctas.',
    badge: 'Módulo 04',
    questions: [
      {
        id: 'q-d1',
        category: 'declerck',
        questionPrompt: 'Ofreces un préstamo financiero a un colega con una condición de resultado posterior:',
        contextSentence: 'I will lend you the three thousand euros if it ________ all your business debts.',
        spanishTranslation: 'Te prestaré los tres mil euros si eso va a solucionar todas tus deudas de negocio.',
        options: ['solves', 'will solve', 'is solving', 'has solved'],
        correctAnswerIndex: 1,
        explanationInSpanish: 'Este es el Condicional Tipo III de Declerck (After-Future): solucionar las deudas es la CONSECUENCIA POSTERIOR al préstamo, no su causa previa. Por eso "will solve" es correcto y necesario.',
        declerckReference: 'Declerck p. 206: "I will lend you the money if you will use it to pay your debts". La cláusula condicional expresa el efecto que justifica la acción principal.'
      },
      {
        id: 'q-d2',
        category: 'declerck',
        questionPrompt: 'Un orador en un museo invita amablemente a los visitantes a seguirle:',
        contextSentence: 'We can now enter the historic gallery. If you ________ me through this corridor...',
        spanishTranslation: 'Ahora podemos entrar a la galería histórica. Si son tan amables de seguirme por este pasillo...',
        options: ['will follow', 'follow', 'are following', 'have followed'],
        correctAnswerIndex: 0,
        explanationInSpanish: 'Uso de "will" como auxiliar modal de disposición voluntaria y extrema cortesía ("if you will follow me").',
        declerckReference: 'Declerck p. 215, nota 63: El "will" en este tipo de subordinadas funciona como imperativo cortés de voluntad cooperativa.'
      },
      {
        id: 'q-d3',
        category: 'declerck',
        questionPrompt: 'Alguien afirma que un nuevo software causará confusión. Respondes:',
        contextSentence: 'If, as you claim, this change ________ mass confusion, then we should cancel the deployment.',
        spanishTranslation: 'Si, como tú aseguras, este cambio provocará confusión masiva, entonces deberíamos cancelar el despliegue.',
        options: ['causes', 'will cause', 'is causing', 'caused'],
        correctAnswerIndex: 1,
        explanationInSpanish: 'Condicional Tipo I de Declerck (Truth-Conditional): El hablante evalúa la verdad de una afirmación futura ya formulada ("si es verdad que provocará"). Admite "will".',
        declerckReference: 'Declerck p. 198: La condición es sobre la verdad de la predicción, no sobre la ocurrencia directa del evento.'
      },
      {
        id: 'q-d4',
        category: 'declerck',
        questionPrompt: 'Añades una consideración de cortesía al final de tu propuesta de horario:',
        contextSentence: 'I can deliver the architectural sketches on Tuesday afternoon, if that ________ you.',
        spanishTranslation: 'Puedo entregar los bocetos de arquitectura el martes por la tarde, si te va a venir bien.',
        options: ['will suit', 'suits', 'is suiting', 'has suited'],
        correctAnswerIndex: 0,
        explanationInSpanish: 'Condicional Tipo V de Declerck (Polite Afterthought): "if that will suit you" deja en manos del oyente la evaluación futura de su comodidad.',
        declerckReference: 'Declerck p. 211 / Jespersen: El uso de "will" resulta más considerado porque no presupone una respuesta instantánea.'
      },
      {
        id: 'q-d5',
        category: 'declerck',
        questionPrompt: '¿Qué significa según Declerck que el Presente Simple "The train leaves at 5:00" tenga valor futuro?',
        contextSentence: 'The timetable states: "The train leaves at 5:00 PM tomorrow."',
        spanishTranslation: 'El horario indica: "El tren sale mañana a las 5:00 PM."',
        options: [
          'Que el hablante se ha equivocado de tiempo verbal.',
          'Que se produce un "cambio de perspectiva temporal" (shift of temporal perspective), tratando el evento futuro como un hecho ya existente en el presente gracias a los horarios oficiales.',
          'Que todos los verbos de movimiento se conjugan en presente.',
          'Que en inglés no existe el tiempo futuro.'
        ],
        correctAnswerIndex: 1,
        explanationInSpanish: 'Declerck (p. 67, 370) explica que cuando el hablante utiliza el presente para un horario futuro, traslada la certeza del presente (el horario oficial impreso en t₀) a la realización del evento.',
        declerckReference: 'Declerck: "Shift of temporal perspective from the post-present to the present sector".'
      }
    ]
  }
];
