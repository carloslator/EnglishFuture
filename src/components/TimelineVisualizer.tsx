import React, { useState } from 'react';
import { Play, Volume2, ArrowRight, HelpCircle, CheckCircle2 } from 'lucide-react';
import { speakEnglish } from '../utils/speech';

interface TenseModel {
  id: string;
  name: string;
  labelEn: string;
  exampleSentence: string;
  spanishTranslation: string;
  formula: string;
  perspectiveType: 'FPS (Future Perspective)' | 'PPS (Present Perspective)' | 'Shift to Present';
  declerckFormula: string;
  explanationEs: string;
  graphicConfig: {
    t0Position: number; // percentage along timeline
    toSitPosition: number;
    to2Position?: number;
    isDurative: boolean;
    isMidS?: boolean;
    hasPrecursorInT0?: boolean;
    isAnteriorToFuturePoint?: boolean;
    teLabel?: string;
  };
}

const TENSE_MODELS: TenseModel[] = [
  {
    id: 'will',
    name: 'Future Simple (Will)',
    labelEn: 'will arrive / will do',
    exampleSentence: 'John will arrive at five o’clock tomorrow.',
    spanishTranslation: 'John llegará mañana a las cinco en punto.',
    formula: 'Subject + will + Verb (Base form)',
    perspectiveType: 'FPS (Future Perspective)',
    declerckFormula: 'TS = TO_sit  |  TO_sit after t₀  |  Sector Post-Presente',
    explanationEs: 'La acción se sitúa directamente en el sector post-presente posterior al momento del habla (t₀). Es el tiempo futuro puro no modalizado que establece un dominio futuro propio.',
    graphicConfig: {
      t0Position: 30,
      toSitPosition: 75,
      isDurative: false,
      teLabel: 'TE: at five o’clock'
    }
  },
  {
    id: 'going-to',
    name: 'Be Going To',
    labelEn: 'is going to rain / is going to do',
    exampleSentence: 'Look at the black clouds! It is going to rain.',
    spanishTranslation: '¡Mira las nubes negras! Va a llover.',
    formula: 'Subject + am/is/are + going to + Verb',
    perspectiveType: 'FPS (Future Perspective)',
    declerckFormula: 'Causa o intención en t₀ ➔ Realización en TO_sit',
    explanationEs: 'Declerck (1991): Representa el futuro con "roots in the present". Hay indicios físicos perceptibles o una decisión previa que ya existe en el presente (t₀) y que conduce al evento.',
    graphicConfig: {
      t0Position: 30,
      toSitPosition: 75,
      isDurative: false,
      hasPrecursorInT0: true,
      teLabel: 'Raíz/Indicio visible en t₀'
    }
  },
  {
    id: 'present-continuous',
    name: 'Present Continuous (Planes Fijos)',
    labelEn: 'is leaving tomorrow',
    exampleSentence: 'We are flying to Zurich on Friday morning.',
    spanishTranslation: 'Volamos a Zúrich el viernes por la mañana (billetes comprados).',
    formula: 'Subject + am/is/are + Verb-ing',
    perspectiveType: 'Shift to Present',
    declerckFormula: 'Shift of Perspective: t₀ conectado por acuerdo previo',
    explanationEs: 'Cambio de perspectiva temporal: se usa la forma de presente porque el acuerdo o la preparación logística ya está en curso ("in progress") en el presente del hablante.',
    graphicConfig: {
      t0Position: 30,
      toSitPosition: 75,
      isDurative: true,
      hasPrecursorInT0: true,
      teLabel: 'TE: on Friday morning'
    }
  },
  {
    id: 'present-simple',
    name: 'Present Simple (Horarios / Timetables)',
    labelEn: 'the train leaves at 5:47',
    exampleSentence: 'The train departs at 5:47 tomorrow morning.',
    spanishTranslation: 'El tren sale a las 5:47 de mañana por la mañana.',
    formula: 'Subject + Verb (-s para he/she/it)',
    perspectiveType: 'Shift to Present',
    declerckFormula: 'Estructura objetiva del mundo ya válida en t₀',
    explanationEs: 'El horario oficial del tren es una verdad inmutable ya registrada en el mundo presente. El hablante traslada la certeza factual del presente al evento futuro.',
    graphicConfig: {
      t0Position: 30,
      toSitPosition: 75,
      isDurative: false,
      teLabel: 'TE: at 5:47 AM'
    }
  },
  {
    id: 'future-continuous',
    name: 'Future Continuous',
    labelEn: 'will be working / will be waiting',
    exampleSentence: 'At 3:00 PM tomorrow, I will be working in the library.',
    spanishTranslation: 'A las 3:00 PM de mañana, estaré trabajando en la biblioteca.',
    formula: 'Subject + will be + Verb-ing',
    perspectiveType: 'FPS (Future Perspective)',
    declerckFormula: 'TS = MidS (Middle of Situation) simultáneo con TO_sit',
    explanationEs: 'En el punto de referencia futuro (3:00 PM), la acción no empezará ni terminará: estará en pleno progreso ("incompleteness"). La situación envuelve el punto como un marco (framing effect).',
    graphicConfig: {
      t0Position: 25,
      toSitPosition: 70,
      isDurative: true,
      isMidS: true,
      teLabel: 'TE: at 3:00 PM'
    }
  },
  {
    id: 'future-perfect',
    name: 'Future Perfect (Tiempo Absoluto-Relativo)',
    labelEn: 'will have finished by Friday',
    exampleSentence: 'By Friday at noon, John will have finished the thesis.',
    spanishTranslation: 'Para el viernes al mediodía, John habrá terminado la tesis.',
    formula: 'Subject + will have + Past Participle',
    perspectiveType: 'FPS (Future Perspective)',
    declerckFormula: 'TO_sit ANTERIOR a TO₂  |  TO₂ posterior a t₀',
    explanationEs: 'Descubrimiento cumbre de Declerck: "will have" reestablece el sector futuro mediante "will" y expresa anterioridad dentro de él mediante "have". El evento culmina ANTES del punto límite TO₂.',
    graphicConfig: {
      t0Position: 20,
      toSitPosition: 55,
      to2Position: 80,
      isDurative: false,
      isAnteriorToFuturePoint: true,
      teLabel: 'TO₂ Límite: By Friday noon'
    }
  },
  {
    id: 'subordinate-pps',
    name: 'Subordinada Temporal (When / If en PPS)',
    labelEn: 'when I arrive (NO *will arrive)',
    exampleSentence: 'I will call you when I arrive at the station.',
    spanishTranslation: 'Te llamaré cuando llegue a la estación.',
    formula: 'Main [will + V] + When + [Present Simple]',
    perspectiveType: 'PPS (Present Perspective)',
    declerckFormula: 'Subordinación temporal estricta al punto implícito TO',
    explanationEs: 'La conjunción "when" ya transporta la mente al futuro. Como el punto futuro funciona como si fuera un "pseudo-presente", el verbo subordinado usa Presente Simple para indicar simultaneidad. ¡Poner "will" aquí es redundante y agramatical!',
    graphicConfig: {
      t0Position: 25,
      toSitPosition: 75,
      isDurative: false,
      teLabel: 'Punto implícito: When I arrive'
    }
  }
];

export const TimelineVisualizer: React.FC = () => {
  const [selectedModelId, setSelectedModelId] = useState<string>('will');
  const [activeStep, setActiveStep] = useState<number>(0);

  const currentModel = TENSE_MODELS.find((m) => m.id === selectedModelId) || TENSE_MODELS[0];

  const handlePlayAudio = () => {
    speakEnglish(currentModel.exampleSentence);
  };

  return (
    <div className="space-y-8">
      {/* Editorial Header */}
      <div className="border-b border-neutral-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1">
          <span>Gramática Teórica de Renaat Declerck</span>
          <span>·</span>
          <span>Modelo de Esferas y Sectores Temporales</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950">
          El Cronograma Visual del Futuro en Inglés
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-3xl">
          Visualiza cómo la mente angloparlante ubica los eventos respecto a <span className="font-semibold text-neutral-900">t₀</span> (el ahora del habla) y a los puntos de orientación <span className="font-semibold text-neutral-900">TO</span>.
        </p>
      </div>

      {/* Model Selector Tabs - Swiss Style Minimalist Segmented List */}
      <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-1.5 p-1.5 bg-neutral-100 rounded-lg border border-neutral-200">
        {TENSE_MODELS.map((model) => {
          const isSelected = model.id === selectedModelId;
          return (
            <button
              key={model.id}
              onClick={() => {
                setSelectedModelId(model.id);
                setActiveStep(0);
              }}
              className={`px-3 py-2 text-xs font-semibold rounded text-left transition-all cursor-pointer truncate ${
                isSelected
                  ? 'bg-white text-neutral-950 shadow-sm border border-neutral-300'
                  : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-200/60'
              }`}
            >
              <span className="block truncate">{model.name.split(' ')[0]} {model.name.split(' ')[1] || ''}</span>
              <span className="block text-[10px] font-normal text-neutral-400 truncate mt-0.5 font-mono">
                {model.labelEn.split('/')[0]}
              </span>
            </button>
          );
        })}
      </div>

      {/* Interactive Timeline Canvas */}
      <div className="bg-white border border-neutral-300 rounded-lg p-6 sm:p-8 shadow-sm space-y-6">
        {/* Tense Label and Pronunciation Strip */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-100 pb-4">
          <div>
            <div className="flex items-center gap-2 text-xs text-neutral-500 font-mono mb-1">
              <span className="px-2 py-0.5 bg-neutral-100 text-neutral-700 rounded text-[11px] font-medium">
                {currentModel.perspectiveType}
              </span>
              <span>·</span>
              <span>{currentModel.declerckFormula}</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-neutral-950">
              {currentModel.name}
            </h3>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handlePlayAudio}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-medium bg-neutral-900 text-white rounded hover:bg-neutral-800 transition-colors cursor-pointer"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Escuchar Pronunciación</span>
            </button>
          </div>
        </div>

        {/* SVG Timeline Diagram */}
        <div className="relative w-full py-8 px-4 bg-neutral-50/70 border border-neutral-200 rounded-lg overflow-x-auto">
          <div className="min-w-[620px] h-48 relative flex flex-col justify-center">
            {/* Sector Labels at Top */}
            <div className="absolute top-2 left-0 right-0 flex justify-between text-[11px] font-mono uppercase tracking-wider text-neutral-400 px-6">
              <span className="w-1/3 text-left">Esfera Pasada (Past)</span>
              <span className="w-1/3 text-center text-neutral-900 font-bold">t₀ (NOW / Presente)</span>
              <span className="w-1/3 text-right text-emerald-800 font-bold">Sector Post-Presente (Future)</span>
            </div>

            {/* Main Baseline Axis */}
            <div className="relative w-full h-1 bg-neutral-300 mt-6">
              {/* Dotted boundary separator as in Declerck page 296 */}
              <div
                className="absolute top-1/2 -translate-y-1/2 w-0.5 h-12 border-l-2 border-dashed border-neutral-400"
                style={{ left: '20%' }}
                title="Límite entre la esfera pasada y la presente"
              />
              <span className="absolute -top-6 left-[18%] text-[10px] text-neutral-400 font-mono">
                Esferas
              </span>

              {/* t0 Marker (Speech Time) */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center"
                style={{ left: `${currentModel.graphicConfig.t0Position}%` }}
              >
                <div className="w-4 h-4 rounded-full bg-neutral-900 border-2 border-white shadow-md z-10" />
                <div className="w-0.5 h-16 bg-neutral-900 -mt-2" />
                <span className="text-xs font-bold font-mono text-neutral-900 mt-1">t₀</span>
                <span className="text-[10px] text-neutral-500 font-sans">Momento del habla</span>
              </div>

              {/* Precursor / Roots in present arrow (for Be Going To / Continuous) */}
              {currentModel.graphicConfig.hasPrecursorInT0 && (
                <div
                  className="absolute top-1/2 -translate-y-1/2 h-0.5 bg-orange-500 border-t border-dashed border-orange-500 z-5"
                  style={{
                    left: `${currentModel.graphicConfig.t0Position}%`,
                    width: `${currentModel.graphicConfig.toSitPosition - currentModel.graphicConfig.t0Position}%`
                  }}
                >
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-orange-700 bg-orange-50 px-1.5 py-0.5 rounded border border-orange-200">
                    Raíces en el presente
                  </span>
                </div>
              )}

              {/* Anteriority Link for Future Perfect */}
              {currentModel.graphicConfig.isAnteriorToFuturePoint && currentModel.graphicConfig.to2Position && (
                <div
                  className="absolute top-1/2 -translate-y-1/2 h-0.5 bg-indigo-500 border-t-2 border-dashed border-indigo-500 z-5"
                  style={{
                    left: `${currentModel.graphicConfig.toSitPosition}%`,
                    width: `${currentModel.graphicConfig.to2Position - currentModel.graphicConfig.toSitPosition}%`
                  }}
                >
                  <span className="absolute -top-5 left-1/2 -translate-x-1/2 text-[10px] font-semibold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded border border-indigo-200 whitespace-nowrap">
                    Anterior a TO₂ (Completado antes)
                  </span>
                </div>
              )}

              {/* Situation TO (TO_sit) Marker */}
              <div
                className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center"
                style={{ left: `${currentModel.graphicConfig.toSitPosition}%` }}
              >
                {/* Event or Duration Bar */}
                {currentModel.graphicConfig.isDurative ? (
                  <div className="w-24 h-3 bg-neutral-900 rounded-sm border border-neutral-700 -mt-1.5 shadow-sm flex items-center justify-center">
                    <span className="text-[9px] text-white font-mono font-medium">
                      {currentModel.graphicConfig.isMidS ? 'MidS (En progreso)' : 'Duración TS'}
                    </span>
                  </div>
                ) : (
                  <div className="w-3.5 h-3.5 bg-neutral-900 rotate-45 border-2 border-white shadow z-10" />
                )}
                <div className="w-0.5 h-16 bg-neutral-900 -mt-2" />
                <span className="text-xs font-bold font-mono text-neutral-900 mt-1">TO_sit</span>
                <span className="text-[10px] text-neutral-600 font-sans font-medium">
                  {currentModel.graphicConfig.teLabel || 'Tiempo de Situación'}
                </span>
              </div>

              {/* Future Reference Point TO2 (for Future Perfect) */}
              {currentModel.graphicConfig.to2Position && (
                <div
                  className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 flex flex-col items-center"
                  style={{ left: `${currentModel.graphicConfig.to2Position}%` }}
                >
                  <div className="w-3.5 h-3.5 bg-indigo-600 rounded-full border-2 border-white shadow z-10" />
                  <div className="w-0.5 h-16 bg-indigo-600 -mt-2" />
                  <span className="text-xs font-bold font-mono text-indigo-700 mt-1">TO₂</span>
                  <span className="text-[10px] text-indigo-600 font-sans font-semibold">Límite Futuro (By...)</span>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Example Sentence & Contrast Display */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="p-4 bg-neutral-100/70 border border-neutral-200 rounded-lg">
            <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block mb-1">
              Ejemplo Prototípico en Inglés
            </span>
            <p className="text-base sm:text-lg font-semibold text-neutral-950 font-sans">
              "{currentModel.exampleSentence}"
            </p>
            <p className="text-sm text-neutral-600 mt-1 italic">
              {currentModel.spanishTranslation}
            </p>
            <div className="mt-3 pt-3 border-t border-neutral-200 flex items-center justify-between text-xs text-neutral-500">
              <span className="font-mono">{currentModel.formula}</span>
              <button
                onClick={handlePlayAudio}
                className="hover:text-neutral-900 underline flex items-center gap-1 cursor-pointer"
              >
                <Volume2 className="w-3 h-3" />
                Repetir
              </button>
            </div>
          </div>

          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <span className="text-[11px] font-bold text-neutral-500 uppercase tracking-wider block mb-1">
              Fundamento Lingüístico de Renaat Declerck
            </span>
            <p className="text-sm text-neutral-700 leading-relaxed">
              {currentModel.explanationEs}
            </p>
            <div className="mt-3 pt-3 border-t border-neutral-200 flex items-center gap-2 text-xs text-neutral-600">
              <CheckCircle2 className="w-3.5 h-3.5 text-neutral-900 shrink-0" />
              <span>Garantiza la interpretación temporal correcta para hispanohablantes.</span>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Comparison Table for the 4 Simple Futures */}
      <div className="bg-white border border-neutral-200 rounded-lg p-6">
        <h3 className="text-lg font-bold text-neutral-950 tracking-tight mb-2">
          Matriz de Decisión Instantánea: ¿Cuál debo usar?
        </h3>
        <p className="text-xs text-neutral-500 mb-4">
          Compara en un vistazo el disparador psicológico de cada forma verbal para evitar la interferencia del español.
        </p>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-xs border-collapse">
            <thead>
              <tr className="border-b border-neutral-200 text-neutral-400 font-mono uppercase text-[10px]">
                <th className="py-2.5 px-3">Tiempo Verbal</th>
                <th className="py-2.5 px-3">Disparador Mental</th>
                <th className="py-2.5 px-3">Relación con t₀ (Ahora)</th>
                <th className="py-2.5 px-3">Ejemplo Clave</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-100 text-neutral-700">
              <tr className="hover:bg-neutral-50">
                <td className="py-3 px-3 font-semibold text-neutral-900">Future Simple (Will)</td>
                <td className="py-3 px-3">Decisión instantánea, promesa, predicción sin datos presentes</td>
                <td className="py-3 px-3">Decidido en t₀ sin plan anterior</td>
                <td className="py-3 px-3 font-mono">I will help you.</td>
              </tr>
              <tr className="hover:bg-neutral-50">
                <td className="py-3 px-3 font-semibold text-neutral-900">Be Going To</td>
                <td className="py-3 px-3">Intención ya meditada o evidencia física visible</td>
                <td className="py-3 px-3 font-orange-700">Raíces en el presente (indicio visible)</td>
                <td className="py-3 px-3 font-mono">Look! It is going to rain.</td>
              </tr>
              <tr className="hover:bg-neutral-50">
                <td className="py-3 px-3 font-semibold text-neutral-900">Present Continuous</td>
                <td className="py-3 px-3">Cita o plan formal agendado con personas/reservas</td>
                <td className="py-3 px-3">Preparativos ya en curso en t₀</td>
                <td className="py-3 px-3 font-mono">I am flying to Zurich Friday.</td>
              </tr>
              <tr className="hover:bg-neutral-50">
                <td className="py-3 px-3 font-semibold text-neutral-900">Present Simple</td>
                <td className="py-3 px-3">Horario oficial público (tren, vuelo, curso escolar)</td>
                <td className="py-3 px-3">Hecho factual inamovible en t₀</td>
                <td className="py-3 px-3 font-mono">The train leaves at 5:47 AM.</td>
              </tr>
              <tr className="hover:bg-neutral-50">
                <td className="py-3 px-3 font-semibold text-neutral-900">Subordinada (When/If)</td>
                <td className="py-3 px-3">El conector temporal subordina el verbo a su referencia</td>
                <td className="py-3 px-3 font-bold text-neutral-900">PPS: ¡Prohibido usar "will"!</td>
                <td className="py-3 px-3 font-mono text-emerald-700">When I arrive (no *will arrive)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};
