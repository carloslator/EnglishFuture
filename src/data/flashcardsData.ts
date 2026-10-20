export interface Flashcard {
  id: string;
  category: 'core' | 'subordinate' | 'perfect' | 'declerck-special' | 'mistake';
  categoryLabel: string;
  level: 'Básico' | 'Intermedio' | 'Avanzado';
  promptSpanish: string;
  clue: string;
  englishTarget: string;
  targetVerbTense: string;
  formula: string;
  declerckNote: string;
  audioText: string;
}

export const FLASHCARDS_DATA: Flashcard[] = [
  {
    id: 'fc-1',
    category: 'subordinate',
    categoryLabel: 'Subordinada Temporal (When)',
    level: 'Básico',
    promptSpanish: 'Te llamaré cuando llegue al aeropuerto.',
    clue: 'Error típico: ¡No uses "will" después de WHEN!',
    englishTarget: 'I will call you when I arrive at the airport.',
    targetVerbTense: 'PPS (Present Simple in Time Clause)',
    formula: 'Main [will + V] + when + [Present Simple]',
    declerckNote: 'La conjunción "when" ya establece el punto temporal de orientación (TO). Por economía y coherencia de perspectiva (PPS), el verbo subordinado debe expresar simultaneidad con presente simple.',
    audioText: 'I will call you when I arrive at the airport.'
  },
  {
    id: 'fc-2',
    category: 'core',
    categoryLabel: 'Decisión Espontánea vs Plan',
    level: 'Básico',
    promptSpanish: '¡Alguien llama a la puerta! — Ya abro yo.',
    clue: 'Decisión tomada justo en el momento del habla (t₀).',
    englishTarget: 'Someone is knocking at the door! — I will get it.',
    targetVerbTense: 'Future Simple (Will)',
    formula: 'Subject + will + Verb',
    declerckNote: 'No existe intención previa. El hablante reacciona en t₀ y se compromete a la acción con WILL.',
    audioText: 'Someone is knocking at the door! I will get it.'
  },
  {
    id: 'fc-3',
    category: 'core',
    categoryLabel: 'Evidencia Física Presente',
    level: 'Básico',
    promptSpanish: '¡Cuidado con ese vaso en el borde de la mesa! Se va a caer.',
    clue: 'Causa perceptible con los ojos en el momento presente.',
    englishTarget: 'Watch out for that glass on the edge! It is going to fall.',
    targetVerbTense: 'Be Going To',
    formula: 'Subject + is going to + Verb',
    declerckNote: 'Declerck: "Be going to" representa el futuro con "roots in the present" (causa o intención ya manifiesta en el mundo presente).',
    audioText: 'Watch out for that glass on the edge! It is going to fall.'
  },
  {
    id: 'fc-4',
    category: 'subordinate',
    categoryLabel: 'Subordinada Temporal (As Soon As)',
    level: 'Intermedio',
    promptSpanish: 'En cuanto tengamos los resultados del análisis, te avisaremos.',
    clue: 'En español usamos subjuntivo "tengamos". ¿En inglés?',
    englishTarget: 'As soon as we have the test results, we will notify you.',
    targetVerbTense: 'PPS (Present Simple after "As soon as")',
    formula: 'As soon as + [Present Simple], [will + V]',
    declerckNote: 'Al igual que "when", "as soon as" no admite "will". El verbo va en presente de indicativo.',
    audioText: 'As soon as we have the test results, we will notify you.'
  },
  {
    id: 'fc-5',
    category: 'core',
    categoryLabel: 'Horario Oficial (Timetable)',
    level: 'Básico',
    promptSpanish: 'El vuelo a Ginebra despega a las 6:30 de la mañana.',
    clue: 'Horario institucional público o programado por terceros.',
    englishTarget: 'The flight to Geneva departs at 6:30 AM tomorrow.',
    targetVerbTense: 'Present Simple for Timetables',
    formula: 'Subject + Verb-s (tercera persona)',
    declerckNote: 'El horario forma parte de la estructura del mundo ya fijada en t₀. Por eso se usa Presente Simple con valor de futuro indiscutible.',
    audioText: 'The flight to Geneva departs at 6:30 AM tomorrow.'
  },
  {
    id: 'fc-6',
    category: 'core',
    categoryLabel: 'Cita Concertada (Arrangement)',
    level: 'Intermedio',
    promptSpanish: 'El viernes a las 11:00 tengo reunión con el arquitecto (ya está agendado).',
    clue: 'Plan con día, hora y otra persona concertada.',
    englishTarget: 'I am meeting the architect on Friday at 11:00 AM.',
    targetVerbTense: 'Present Continuous for Future',
    formula: 'Subject + am/is/are + Verb-ing',
    declerckNote: 'Present Continuous indica un acuerdo formal ya concretado en el presente cuyos preparativos ya están en marcha.',
    audioText: 'I am meeting the architect on Friday at 11:00 AM.'
  },
  {
    id: 'fc-7',
    category: 'perfect',
    categoryLabel: 'Future Perfect (Límite temporal con BY)',
    level: 'Intermedio',
    promptSpanish: 'Para las cinco de la tarde ya habré terminado este informe.',
    clue: 'Señal clave: "BY 5:00 PM" (límite temporal anterior a un punto futuro).',
    englishTarget: 'By 5:00 PM, I will have finished this report.',
    targetVerbTense: 'Future Perfect',
    formula: 'By [time], Subject + will have + Past Participle',
    declerckNote: 'Tiempo "absoluto-relativo". El punto TO₂ son las 5:00; la acción de terminar ocurre anterior a ese TO₂.',
    audioText: 'By 5:00 PM, I will have finished this report.'
  },
  {
    id: 'fc-8',
    category: 'perfect',
    categoryLabel: 'Future Continuous (Acción en progreso)',
    level: 'Intermedio',
    promptSpanish: 'A esta misma hora la próxima semana, estaremos esquiando en los Alpes.',
    clue: 'La acción estará desarrollándose en ese instante exacto.',
    englishTarget: 'This time next week, we will be skiing in the Alps.',
    targetVerbTense: 'Future Continuous',
    formula: 'Subject + will be + Verb-ing',
    declerckNote: 'Representa una situación en desarrollo ("middle of the situation", MidS) simultánea con un punto de referencia futuro.',
    audioText: 'This time next week, we will be skiing in the Alps.'
  },
  {
    id: 'fc-9',
    category: 'perfect',
    categoryLabel: 'Future Perfect Continuous (Duración acumulada)',
    level: 'Avanzado',
    promptSpanish: 'El mes que viene cumpliré 10 años viviendo en esta ciudad.',
    clue: 'Equivale a: "Para el mes que viene, habré estado viviendo...".',
    englishTarget: 'Next month, I will have been living in this city for 10 years.',
    targetVerbTense: 'Future Perfect Continuous',
    formula: 'Subject + will have been + Verb-ing + for [duración]',
    declerckNote: 'Combina el anclaje de anterioridad respecto al punto futuro con el aspecto continuo que mide la duración ininterrumpida.',
    audioText: 'Next month, I will have been living in this city for 10 years.'
  },
  {
    id: 'fc-10',
    category: 'subordinate',
    categoryLabel: 'Anterioridad en Subordinada Futura',
    level: 'Avanzado',
    promptSpanish: 'John saldrá de viaje sólo cuando haya desayunado.',
    clue: 'El desayuno tiene que estar 100% terminado antes de salir.',
    englishTarget: 'John will leave only after he has eaten breakfast.',
    targetVerbTense: 'PPS (Present Perfect for Anteriority)',
    formula: 'Main [will + V] + after + [has/have + Past Participle]',
    declerckNote: 'Declerck: En el sistema PPS, la anterioridad dentro del futuro se expresa mediante Present Perfect, nunca con Future Perfect (*after he will have eaten).',
    audioText: 'John will leave only after he has eaten breakfast.'
  },
  {
    id: 'fc-11',
    category: 'declerck-special',
    categoryLabel: 'Declerck Tipo III (After-Future)',
    level: 'Avanzado',
    promptSpanish: 'Te prestaré el dinero si eso va a solucionar todos tus problemas.',
    clue: '¿Por qué aquí SÍ se puede usar "will" tras "if"? Porque solucionar los problemas es la consecuencia POSTERIOR al préstamo.',
    englishTarget: 'I will gladly give you a loan if it will solve all your problems.',
    targetVerbTense: 'Declerck Type III (If + Will)',
    formula: 'Main [will + V] + if + [will + V (consecuencia esperada)]',
    declerckNote: 'La condición no es anterior al préstamo, sino posterior ("after-future"). "Te presto dinero con la condición de que eso surta el efecto de solucionar tus problemas".',
    audioText: 'I will gladly give you a loan if it will solve all your problems.'
  },
  {
    id: 'fc-12',
    category: 'declerck-special',
    categoryLabel: 'Declerck Tipo I (Truth-Conditional)',
    level: 'Avanzado',
    promptSpanish: 'Si es verdad que Claude estará aquí mañana, no hay necesidad de llamarle hoy.',
    clue: 'El hablante asume una afirmación futura como un hecho previo en discusión.',
    englishTarget: 'If Claude will be here tomorrow, there is no need to call him now.',
    targetVerbTense: 'Declerck Type I (Truth Condition)',
    formula: 'If + [will + V (hecho futuro asumido)], [conclusión presente]',
    declerckNote: 'Declerck p. 201: No es una hipótesis sobre el tiempo ("si llueve"), sino una condición sobre la verdad de una premisa ("asumiendo que sea cierto que vendrá"). Ambos lados usan tiempos independientes.',
    audioText: 'If Claude will be here tomorrow, there is no need to call him now.'
  },
  {
    id: 'fc-13',
    category: 'declerck-special',
    categoryLabel: 'Declerck Tipo V (Cortesía Diferida)',
    level: 'Avanzado',
    promptSpanish: 'Iré a tu despacho después de la una, si te viene bien.',
    clue: 'Añadido al final para dejar la decisión en manos del oyente.',
    englishTarget: 'I will come down to your office after one o’clock, if it will suit you.',
    targetVerbTense: 'Declerck Type V (Polite Afterthought)',
    formula: 'Main [will + V], if it will suit you',
    declerckNote: 'Jespersen y Declerck (p. 209): El uso de "will" es más educado que "if it suits you" porque invita al interlocutor a reflexionar y decidir en su momento sin comprometerle ahora mismo.',
    audioText: 'I will come down to your office after one o’clock, if it will suit you.'
  },
  {
    id: 'fc-14',
    category: 'core',
    categoryLabel: 'Sugerencia Cortés con Shall',
    level: 'Básico',
    promptSpanish: '¿Pedimos un taxi o vamos caminando?',
    clue: 'Sugerencia elegante en primera persona plural (we).',
    englishTarget: 'Shall we take a taxi or walk?',
    targetVerbTense: 'Modal Shall for Offers',
    formula: 'Shall I / we + Verb?',
    declerckNote: '"Will we take a taxi?" preguntaría por una predicción objetiva sobre el destino. Para proponer o consultar el deseo del grupo, se usa SHALL.',
    audioText: 'Shall we take a taxi or walk?'
  },
  {
    id: 'fc-15',
    category: 'mistake',
    categoryLabel: 'Error Común (Until)',
    level: 'Básico',
    promptSpanish: 'Me quedaré aquí hasta que ella vuelva.',
    clue: 'Cuidado con "hasta que vuelva".',
    englishTarget: 'I will stay here until she comes back.',
    targetVerbTense: 'PPS (Present Simple after Until)',
    formula: 'will stay + until + [comes back]',
    declerckNote: 'NUNCA digas *"until she will come back". Las cláusulas de límite temporal con "until" exigen siempre presente simple.',
    audioText: 'I will stay here until she comes back.'
  },
  {
    id: 'fc-16',
    category: 'mistake',
    categoryLabel: 'Error Común (Inminencia)',
    level: 'Intermedio',
    promptSpanish: '¡El avión está a punto de despegar!',
    clue: 'Perífrasis de inminencia máxima (en cuestión de segundos).',
    englishTarget: 'The airplane is about to take off!',
    targetVerbTense: 'Be About To',
    formula: 'Subject + be about to + Verb',
    declerckNote: '"Will take off" expresa futuro lejano o neutral; "be about to" focaliza que el evento se encuentra en el umbral inmediato de suceder.',
    audioText: 'The airplane is about to take off!'
  },
  {
    id: 'fc-17',
    category: 'subordinate',
    categoryLabel: 'Subordinada Temporal (Before)',
    level: 'Intermedio',
    promptSpanish: 'Terminaremos la revisión antes de que empiece la junta.',
    clue: 'No introduzcas "will" tras "before".',
    englishTarget: 'We will finish the audit before the board meeting begins.',
    targetVerbTense: 'PPS (Present Simple after Before)',
    formula: 'Main [will + V] + before + [Present Simple]',
    declerckNote: 'Declerck p. 104: Las cláusulas con "before" expresan simultaneidad con un punto de referencia implícito posterior; por eso toman forma de presente simple.',
    audioText: 'We will finish the audit before the board meeting begins.'
  },
  {
    id: 'fc-18',
    category: 'core',
    categoryLabel: 'Pregunta Cortés sin Compromiso',
    level: 'Intermedio',
    promptSpanish: '¿Estarás usando el coche mañana por la mañana? (Por si puedo pedirlo prestado).',
    clue: 'Usa el Future Continuous para sonar suave y discreto.',
    englishTarget: 'Will you be using the car tomorrow morning?',
    targetVerbTense: 'Future Continuous (Polite Routine Inquiry)',
    formula: 'Will + you + be using + Object?',
    declerckNote: 'Preguntar "¿Estarás haciendo X?" indaga sobre la rutina prevista del otro sin exigirle favores ni presionarle.',
    audioText: 'Will you be using the car tomorrow morning?'
  }
];
