export interface ReadingAnnotation {
  id: string;
  phrase: string;
  tense: string;
  tenseCategory: 'all' | 'will' | 'going-to' | 'present-continuous' | 'present-simple' | 'future-continuous' | 'future-perfect' | 'future-perfect-continuous' | 'subordinate-pps' | 'declerck-special' | 'declerck-if-will';
  translationEs: string;
  declerckExplanation: string;
  contrastNote: string;
}

export interface ReadingQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ReadingText {
  id: string;
  title: string;
  subtitle: string;
  genre: string;
  level: string;
  paragraphs: string[];
  annotations: ReadingAnnotation[];
  quiz: ReadingQuestion[];
}

export const READINGS_DATA: ReadingText[] = [
  {
    id: 'reading-1',
    title: 'The Zurich Design & Architecture Biennial',
    subtitle: 'Horarios oficiales, citas concertadas y previsiones institucionales',
    genre: 'Boletín Oficial / Programa de Evento',
    level: 'Intermedio',
    paragraphs: [
      "The International Helvetica & Architecture Biennial opens on Thursday at 9:00 AM at the Kunsthaus Zurich. Delegates from forty countries are flying into Kloten Airport on Wednesday afternoon to attend the opening proceedings.",
      "According to the official schedule, the keynote speech starts promptly at 10:30 AM. Chief curator Elena Vane explains that the museum is going to unveil twenty previously unseen geometric sketches. 'Look at the global registration figures,' she notes. 'This edition is going to exceed all previous attendance records.'",
      "While the exhibition is open, curators will be conducting guided architectural walking tours every morning at eleven. Visitors will have seen three centuries of typographic evolution before they leave the main gallery. If attendees have any specific catalog questions, staff will answer them at the front desk.",
      "The organizers have added a special evening colloquium: 'I will gladly extend the exhibition hours if that will give working designers a fair chance to visit,' announced the director."
    ],
    annotations: [
      {
        id: 'ann-1',
        phrase: 'opens on Thursday at 9:00 AM',
        tense: 'Present Simple for Timetable',
        tenseCategory: 'present-simple',
        translationEs: 'abre el jueves a las 9:00 AM',
        declerckExplanation: 'Present Simple para eventos fijados por un calendario o institución pública. El hablante no lo decide; es un hecho formal programado.',
        contrastNote: 'Decir "will open" sonaría a una predicción personal en lugar de un horario oficial ya impreso.'
      },
      {
        id: 'ann-2',
        phrase: 'are flying into Kloten Airport',
        tense: 'Present Continuous for Future',
        tenseCategory: 'present-continuous',
        translationEs: 'vuelan al aeropuerto de Kloten',
        declerckExplanation: 'Acuerdo fijo ("arrangement"). Los billetes ya están emitidos y las reservas de hotel confirmadas en el presente (t₀).',
        contrastNote: 'En español solemos decir "van a volar", pero en inglés el Present Continuous destaca la coordinación logística cerrada.'
      },
      {
        id: 'ann-3',
        phrase: 'starts promptly at 10:30 AM',
        tense: 'Present Simple for Timetable',
        tenseCategory: 'present-simple',
        translationEs: 'comienza puntualmente a las 10:30 AM',
        declerckExplanation: 'Horario oficial de la agenda del congreso.',
        contrastNote: 'No lleva "will" porque los programas de conferencias se tratan como verdades organizativas.'
      },
      {
        id: 'ann-4',
        phrase: 'is going to unveil',
        tense: 'Be Going To (Premeditated Intention)',
        tenseCategory: 'going-to',
        translationEs: 'va a desvelar / presentar',
        declerckExplanation: 'Intención meditada con antelación por el museo ("roots in the present").',
        contrastNote: 'No es una decisión espontánea tomada en este instante.'
      },
      {
        id: 'ann-5',
        phrase: 'is going to exceed',
        tense: 'Be Going To (Present Evidence)',
        tenseCategory: 'going-to',
        translationEs: 'va a superar',
        declerckExplanation: 'Predicción fundamentada en datos observables hoy ("Look at the registration figures").',
        contrastNote: 'Si la curadora no tuviera cifras en la mano y fuera solo una corazonada, usaría "I think it will exceed".'
      },
      {
        id: 'ann-6',
        phrase: 'will be conducting',
        tense: 'Future Continuous',
        tenseCategory: 'future-continuous',
        translationEs: 'estarán realizando visitas guiadas',
        declerckExplanation: 'Acción que estará en pleno desarrollo en una franja horaria recurrente en el futuro.',
        contrastNote: 'Pinta la escena en movimiento en lugar de un simple hecho puntual.'
      },
      {
        id: 'ann-7',
        phrase: 'will have seen',
        tense: 'Future Perfect',
        tenseCategory: 'future-perfect',
        translationEs: 'habrán visto',
        declerckExplanation: 'Tiempo absoluto-relativo: expresa anterioridad respecto al momento en que los visitantes salgan de la sala principal (TO₂).',
        contrastNote: 'Para cuando ocurra el evento B (salir), el evento A (ver la evolución) ya estará completo.'
      },
      {
        id: 'ann-8',
        phrase: 'before they leave',
        tense: 'Present Perspective System (PPS) in Time Clause',
        tenseCategory: 'subordinate-pps',
        translationEs: 'antes de que salgan',
        declerckExplanation: 'Regla de Oro de Declerck: dentro de la cláusula temporal con "before", el verbo debe ir en presente de indicativo, NUNCA con "will".',
        contrastNote: 'Error letal de hispanohablantes: decir *"before they will leave".'
      },
      {
        id: 'ann-9',
        phrase: 'if that will give working designers a fair chance',
        tense: 'Declerck Type III (If + Will / After-Future)',
        tenseCategory: 'declerck-special',
        translationEs: 'si con eso se da a los diseñadores la oportunidad de visitar',
        declerckExplanation: 'Caso especial de Declerck (p. 206): la oportunidad para los diseñadores es la CONSECUENCIA POSTERIOR de ampliar el horario. "Amplío el horario a condición de que eso surta el efecto de beneficiarles".',
        contrastNote: 'Aquí "will" es correcto y muy elegante porque expresa el resultado esperado de la decisión.'
      }
    ],
    quiz: [
      {
        id: 'q1-1',
        question: '¿Por qué se utiliza "opens on Thursday" en Present Simple para la inauguración de la Bienal?',
        options: [
          'Porque es una decisión impulsiva que acaba de tomar el director.',
          'Porque se trata de un horario oficial y público fijado en un calendario.',
          'Porque en inglés formal "will" nunca se puede usar con días de la semana.',
          'Porque la bienal ya ocurrió en el pasado.'
        ],
        correctIndex: 1,
        explanation: 'En la teoría de Declerck, los horarios institucionales y públicos se consideran parte de la estructura del mundo establecida en el presente; por eso usan Present Simple con valor de futuro.'
      },
      {
        id: 'q1-2',
        question: 'En la frase "before they leave the main gallery", ¿por qué no se puede escribir "before they will leave"?',
        options: [
          'Porque "leave" es un verbo irregular que no admite "will".',
          'Porque la conjunción "before" ya introduce un punto de referencia futuro y el inglés exige el Present Perspective System (PPS) con presente simple.',
          'Porque la frase está en pasado.',
          'Porque el sujeto "they" exige un verbo en gerundio.'
        ],
        correctIndex: 1,
        explanation: 'Declerck demuestra que las subordinadas temporales introducidas por when, before, after, until o as soon as no admiten "will", sino presente simple para expresar simultaneidad con la marca temporal.'
      },
      {
        id: 'q1-3',
        question: '¿Por qué en "if that will give working designers a fair chance" SÍ es correcto usar "will" tras "if"?',
        options: [
          'Porque es un condicional Tipo III de Declerck (after-future), donde la cláusula con "if" representa el efecto posterior deseado de la acción principal.',
          'Porque el redactor cometió una errata tipográfica.',
          'Porque "that" siempre obliga a poner "will".',
          'Porque solo se puede usar presente cuando la frase es negativa.'
        ],
        correctIndex: 0,
        explanation: 'Declerck demostró que cuando la cláusula "if" describe la consecuencia posterior benéfica que motiva la acción principal ("te presto dinero si eso soluciona tus deudas"), "will" es plenamente gramatical y natural.'
      }
    ]
  },
  {
    id: 'reading-2',
    title: 'The High-Altitude Alpine Meteorological Brief',
    subtitle: 'Pronósticos científicos, evidencias inminentes y tiempos perfectos',
    genre: 'Informe Científico / Registro de Campo',
    level: 'Avanzado',
    paragraphs: [
      "At 05:00 hours tomorrow, our high-altitude atmospheric sensor will transmit its first telemetry packet to the observatory. By noon, meteorologists will have gathered six hours of continuous thermodynamic pressure readings.",
      "Take a look at the barometer in the control room: the needle is vibrating violently. A severe blizzard is going to strike the ridge before sundown. 'We will evacuate Station Charlie immediately,' confirmed Commander Weiss. 'I am ordering transport vehicles right now.'",
      "By the time the storm reaches its peak intensity, our team will have been monitoring these glaciers for over thirty-six hours without pause.",
      "The commander turned to the pilots: 'We shall not take unnecessary risks on the glacier runway. If you will prepare the emergency skis now, we will be ready to depart as soon as visibility drops below fifty meters.'"
    ],
    annotations: [
      {
        id: 'ann-2-1',
        phrase: 'will transmit its first telemetry packet',
        tense: 'Future Simple (Objective Prediction)',
        tenseCategory: 'will',
        translationEs: 'transmitirá su primer paquete de telemetría',
        declerckExplanation: 'Predicción objetiva y neutral del funcionamiento de un dispositivo programado.',
        contrastNote: 'Uso canónico de "will" para futuros basados en conocimiento técnico.'
      },
      {
        id: 'ann-2-2',
        phrase: 'will have gathered six hours of continuous readings',
        tense: 'Future Perfect',
        tenseCategory: 'future-perfect',
        translationEs: 'habrán recopilado seis horas de lecturas continuas',
        declerckExplanation: 'El punto temporal de orientación TO₂ es el mediodía ("By noon"). La recopilación habrá finalizado antes de ese punto.',
        contrastNote: 'No uses "will gather" cuando el límite "By noon" exige anterioridad en el futuro.'
      },
      {
        id: 'ann-2-3',
        phrase: 'is going to strike the ridge',
        tense: 'Be Going To (Physical Evidence in Present)',
        tenseCategory: 'going-to',
        translationEs: 'va a azotar la cordillera',
        declerckExplanation: 'Existe una evidencia física tangible en el presente (la aguja del barómetro vibrando). No es una simple opinión.',
        contrastNote: 'Will indicaría mera suposición ("I think a storm will strike"); Going To indica que los indicios ya están aquí.'
      },
      {
        id: 'ann-2-4',
        phrase: 'We will evacuate Station Charlie immediately',
        tense: 'Future Simple (Instant Decision in t₀)',
        tenseCategory: 'will',
        translationEs: 'Evacuaremos la Estación Charlie de inmediato',
        declerckExplanation: 'Decisión espontánea de mando tomada justo en t₀ al constatar la lectura del barómetro.',
        contrastNote: 'No era un plan previsto con antelación.'
      },
      {
        id: 'ann-2-5',
        phrase: 'will have been monitoring these glaciers for over thirty-six hours',
        tense: 'Future Perfect Continuous',
        tenseCategory: 'future-perfect-continuous',
        translationEs: 'llevará más de treinta y seis horas monitorizando estos glaciares',
        declerckExplanation: 'Mide la duración continua acumulada ("for over 36 hours") hasta el punto culminante de la tormenta (TO₂).',
        contrastNote: 'En español: "llevará monitoreando". En inglés: will have been monitoring.'
      },
      {
        id: 'ann-2-6',
        phrase: 'We shall not take unnecessary risks',
        tense: 'Modal Shall for Solemn Decision',
        tenseCategory: 'will',
        translationEs: 'No asumiremos riesgos innecesarios',
        declerckExplanation: '"Shall" con primera persona (we) en tono solemne, formal o resolutivo.',
        contrastNote: 'Aporta una gravedad y determinación que "will" no siempre transmite.'
      },
      {
        id: 'ann-2-7',
        phrase: 'If you will prepare the emergency skis now',
        tense: 'Declerck Polite Request in If-Clause',
        tenseCategory: 'declerck-special',
        translationEs: 'Si fueran tan amables de preparar los esquís de emergencia ahora',
        declerckExplanation: 'Declerck (p. 215): El uso modal de "will" en el "if" como petición cortés ("If you will kindly...").',
        contrastNote: 'No es una condición fortuita, sino una instrucción cordial de cooperación.'
      },
      {
        id: 'ann-2-8',
        phrase: 'as soon as visibility drops below fifty meters',
        tense: 'Present Perspective System (PPS) in Time Clause',
        tenseCategory: 'subordinate-pps',
        translationEs: 'en cuanto la visibilidad baje de cincuenta metros',
        declerckExplanation: 'Regla de Oro: tras "as soon as", presente de indicativo ("drops"). ¡Prohibido *"as soon as visibility will drop"!',
        contrastNote: 'En español usamos el subjuntivo "baje". En inglés indicativo simple.'
      }
    ],
    quiz: [
      {
        id: 'q2-1',
        question: '¿Por qué el meteorólogo dice "A blizzard is going to strike" en lugar de "will strike"?',
        options: [
          'Porque la tormenta ya ocurrió ayer.',
          'Porque hay una evidencia física presente y observable (el barómetro vibrando).',
          'Porque "strike" es un verbo que rechaza "will".',
          'Porque en los informes meteorológicos siempre está prohibido usar "will".'
        ],
        correctIndex: 1,
        explanation: 'Declerck resalta que cuando un hecho futuro tiene "roots in the present" (raíces perceptibles en el presente t₀), "be going to" es la forma requerida.'
      },
      {
        id: 'q2-2',
        question: 'En la frase "By the time the storm reaches its peak", ¿qué tiempo verbal se usa en la cláusula con "by the time"?',
        options: [
          'Future Simple con will.',
          'Present Simple (PPS) con valor de simultaneidad con la marca temporal futura.',
          'Pasado continuo.',
          'Subjuntivo condicional.'
        ],
        correctIndex: 1,
        explanation: '"By the time" es un conector temporal. Por tanto, exige el sistema de perspectiva presente (PPS): "the storm reaches", jamás *"the storm will reach".'
      },
      {
        id: 'q2-3',
        question: '¿Qué matiz introduce el comandante al decir: "If you will prepare the emergency skis now"?',
        options: [
          'Una predicción del tiempo.',
          'Una petición muy cortés de colaboración hacia la tripulación.',
          'Una duda sobre si los esquís existen.',
          'Una amenaza de sanción.'
        ],
        correctIndex: 1,
        explanation: 'En las condicionales, "if you will + verbo" funciona frecuentemente como fórmula de máxima cortesía equivalente a "si tuviera la amabilidad de hacer X".'
      }
    ]
  }
];
