import React, { useState } from 'react';
import { READINGS_DATA, ReadingText, ReadingAnnotation } from '../data/readingsData';
import { Volume2, BookOpen, CheckCircle, CheckCircle2, XCircle, Info, ChevronRight, HelpCircle } from 'lucide-react';
import { speakEnglish } from '../utils/speech';

export const ReadingLab: React.FC = () => {
  const [selectedReadingId, setSelectedReadingId] = useState<string>('reading-1');
  const [activeHighlightCategory, setActiveHighlightCategory] = useState<string>('all');
  const [selectedAnnotation, setSelectedAnnotation] = useState<ReadingAnnotation | null>(null);
  const [quizAnswers, setQuizAnswers] = useState<Record<string, number>>({});
  const [showQuizResults, setShowQuizResults] = useState<boolean>(false);

  const currentReading = READINGS_DATA.find((r) => r.id === selectedReadingId) || READINGS_DATA[0];

  const filterTabs = [
    { id: 'all', label: 'Todos los Futuros' },
    { id: 'will', label: 'Will' },
    { id: 'going-to', label: 'Going To' },
    { id: 'present-simple', label: 'Present Simple' },
    { id: 'present-continuous', label: 'Present Continuous' },
    { id: 'future-continuous', label: 'Future Continuous' },
    { id: 'future-perfect', label: 'Future Perfect' },
    { id: 'subordinate-pps', label: 'Subordinadas (PPS)' },
    { id: 'declerck-special', label: 'Casos Declerck (If+Will)' }
  ];

  const handleSelectAnswer = (qId: string, optionIdx: number) => {
    if (showQuizResults) return;
    setQuizAnswers((prev) => ({ ...prev, [qId]: optionIdx }));
  };

  const handleResetQuiz = () => {
    setQuizAnswers({});
    setShowQuizResults(false);
  };

  const calculateScore = () => {
    let correct = 0;
    currentReading.quiz.forEach((q) => {
      if (quizAnswers[q.id] === q.correctIndex) {
        correct += 1;
      }
    });
    return correct;
  };

  // Helper to render paragraph with clickable highlighted phrases
  const renderInteractiveParagraph = (text: string, pIndex: number) => {
    let segments: { text: string; annotation?: ReadingAnnotation }[] = [{ text }];

    currentReading.annotations.forEach((ann) => {
      const nextSegments: typeof segments = [];
      segments.forEach((seg) => {
        if (seg.annotation) {
          nextSegments.push(seg);
          return;
        }

        const idx = seg.text.indexOf(ann.phrase);
        if (idx === -1) {
          nextSegments.push(seg);
          return;
        }

        const before = seg.text.substring(0, idx);
        const match = seg.text.substring(idx, idx + ann.phrase.length);
        const after = seg.text.substring(idx + ann.phrase.length);

        if (before) nextSegments.push({ text: before });
        nextSegments.push({ text: match, annotation: ann });
        if (after) nextSegments.push({ text: after });
      });
      segments = nextSegments;
    });

    return (
      <p key={pIndex} className="text-base sm:text-lg leading-relaxed text-neutral-800 font-sans">
        {segments.map((seg, sIdx) => {
          if (!seg.annotation) {
            return <span key={sIdx}>{seg.text}</span>;
          }

          const ann = seg.annotation;
          const isFilterActive =
            activeHighlightCategory === 'all' || activeHighlightCategory === ann.tenseCategory;
          const isSelected = selectedAnnotation?.id === ann.id;

          return (
            <button
              key={sIdx}
              onClick={() => setSelectedAnnotation(ann)}
              className={`inline font-semibold transition-all px-1 py-0.5 rounded mx-0.5 cursor-pointer text-left ${
                isSelected
                  ? 'bg-neutral-900 text-white underline decoration-2'
                  : isFilterActive
                  ? 'bg-amber-100 text-neutral-950 border-b-2 border-amber-500 hover:bg-amber-200'
                  : 'text-neutral-900 hover:bg-neutral-200'
              }`}
            >
              {seg.text}
            </button>
          );
        })}
      </p>
    );
  };

  return (
    <div className="space-y-8">
      {/* Editorial Header */}
      <div className="border-b border-neutral-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1">
          <span>Laboratorio de Lectura y Análisis en Discurso Real</span>
          <span>·</span>
          <span>Declerck Tense Analysis</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950">
          Lecturas Guiadas con Tiempos Futuros en Contexto
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-3xl">
          Observa cómo conviven los diferentes tiempos de futuro en un mismo texto real. Filtra por tiempo verbal y haz clic en cualquier frase resaltada para abrir su análisis pedagógico.
        </p>
      </div>

      {/* Text Selector Tabs */}
      <div className="flex items-center gap-2 border-b border-neutral-200 pb-2">
        {READINGS_DATA.map((reading) => {
          const isSelected = reading.id === selectedReadingId;
          return (
            <button
              key={reading.id}
              onClick={() => {
                setSelectedReadingId(reading.id);
                setSelectedAnnotation(null);
                handleResetQuiz();
              }}
              className={`px-4 py-2 text-xs sm:text-sm font-bold tracking-tight rounded-t-lg transition-all cursor-pointer ${
                isSelected
                  ? 'bg-neutral-900 text-white shadow-sm'
                  : 'text-neutral-600 bg-neutral-100 hover:bg-neutral-200'
              }`}
            >
              {reading.title}
            </button>
          );
        })}
      </div>

      {/* Main Reading Stage & Inspector Split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
        {/* Left Column: Reading Document (8 Cols) */}
        <div className="lg:col-span-8 bg-white border border-neutral-300 rounded-xl p-6 sm:p-8 shadow-sm space-y-6">
          {/* Document Header */}
          <div className="border-b border-neutral-100 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono text-neutral-400 uppercase">
                <span>{currentReading.genre}</span>
                <span>·</span>
                <span>Nivel {currentReading.level}</span>
              </div>
              <h3 className="text-xl sm:text-2xl font-black text-neutral-950 tracking-tight mt-1">
                {currentReading.title}
              </h3>
              <p className="text-xs text-neutral-500 mt-0.5">{currentReading.subtitle}</p>
            </div>

            <button
              onClick={() => speakEnglish(currentReading.paragraphs.join(' '))}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold text-neutral-800 bg-neutral-100 hover:bg-neutral-200 border border-neutral-300 rounded transition-colors self-start sm:self-auto cursor-pointer"
            >
              <Volume2 className="w-3.5 h-3.5" />
              <span>Leer Texto Completo</span>
            </button>
          </div>

          {/* Interactive Highlight Filter Strip */}
          <div className="space-y-1.5 bg-neutral-50 p-2.5 rounded-lg border border-neutral-200">
            <span className="text-[10px] font-mono uppercase font-bold text-neutral-500 block">
              Filtrar resaltados en el texto:
            </span>
            <div className="flex flex-wrap gap-1">
              {filterTabs.map((tab) => {
                const isActive = activeHighlightCategory === tab.id;
                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveHighlightCategory(tab.id)}
                    className={`px-2 py-0.5 text-[11px] font-medium rounded transition-all cursor-pointer ${
                      isActive
                        ? 'bg-neutral-900 text-white font-semibold'
                        : 'text-neutral-600 bg-white border border-neutral-200 hover:bg-neutral-100'
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Paragraphs */}
          <div className="space-y-4 pt-2">
            {currentReading.paragraphs.map((p, idx) => renderInteractiveParagraph(p, idx))}
          </div>

          <div className="text-xs text-neutral-400 pt-4 border-t border-neutral-100 flex items-center justify-between font-mono">
            <span>Haz clic sobre cualquier frase en amarillo para ver el análisis</span>
            <span>{currentReading.annotations.length} estructuras anotadas</span>
          </div>
        </div>

        {/* Right Column: Grammatical Inspector (4 Cols) */}
        <div className="lg:col-span-4 sticky top-20 space-y-4">
          {selectedAnnotation ? (
            <div className="bg-white border border-neutral-900 rounded-xl p-5 shadow-md space-y-4 animate-in fade-in duration-150">
              <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
                <span className="text-[11px] font-mono uppercase font-bold text-emerald-800 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {selectedAnnotation.tense}
                </span>

                <button
                  onClick={() => speakEnglish(selectedAnnotation.phrase)}
                  className="p-1.5 text-neutral-600 hover:text-neutral-900 bg-neutral-100 rounded hover:bg-neutral-200 cursor-pointer"
                  title="Escuchar frase"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                </button>
              </div>

              <div>
                <span className="text-[10px] font-mono uppercase text-neutral-400 block mb-0.5">
                  Frase seleccionada
                </span>
                <p className="text-base font-bold text-neutral-950 font-sans">
                  "{selectedAnnotation.phrase}"
                </p>
                <p className="text-xs text-neutral-600 italic mt-1">
                  Traducción: {selectedAnnotation.translationEs}
                </p>
              </div>

              <div className="p-3 bg-neutral-50 rounded border border-neutral-200 text-xs text-neutral-700 leading-relaxed">
                <span className="font-semibold text-neutral-900 block mb-1">
                  Fundamento de Renaat Declerck:
                </span>
                {selectedAnnotation.declerckExplanation}
              </div>

              <div className="p-3 bg-amber-50/60 rounded border border-amber-200 text-xs text-neutral-800 leading-relaxed">
                <span className="font-semibold text-amber-950 block mb-1">
                  ¿Por qué no otro tiempo verbal?
                </span>
                {selectedAnnotation.contrastNote}
              </div>
            </div>
          ) : (
            <div className="bg-white border border-neutral-300 rounded-xl p-6 text-center text-neutral-500 space-y-3">
              <BookOpen className="w-8 h-8 mx-auto text-neutral-300" />
              <h4 className="text-sm font-bold text-neutral-900">Inspector Gramatical</h4>
              <p className="text-xs leading-relaxed">
                Haz clic en cualquier fragmento subrayado en el texto de la izquierda para desglosar su tiempo verbal, justificación lingüística y traducción al español.
              </p>
            </div>
          )}

          {/* Quick PDF reference link badge */}
          <div className="p-3.5 bg-neutral-100/70 border border-neutral-200 rounded-lg text-xs text-neutral-600 space-y-1">
            <span className="font-bold text-neutral-900 block">Fuente de Referencia</span>
            <p className="text-[11px] text-neutral-500">
              Routledge Library: <em>Tense in English: Its Structure and Use in Discourse</em> (Renaat Declerck, pp. 19-115, 192-222).
            </p>
          </div>
        </div>
      </div>

      {/* Comprehension & Grammar Quiz */}
      <div className="bg-white border border-neutral-300 rounded-xl p-6 sm:p-8 shadow-sm space-y-6">
        <div className="border-b border-neutral-200 pb-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <span className="text-[10px] font-mono uppercase font-bold text-neutral-400">
              Evaluación de Comprensión y Gramática
            </span>
            <h3 className="text-xl font-bold text-neutral-950 tracking-tight mt-0.5">
              Cuestionario del Texto: {currentReading.title}
            </h3>
          </div>

          {showQuizResults && (
            <div className="flex items-center gap-3">
              <span className="text-xs font-mono font-bold text-neutral-900 bg-neutral-100 px-3 py-1 rounded">
                Puntuación: {calculateScore()} / {currentReading.quiz.length}
              </span>
              <button
                onClick={handleResetQuiz}
                className="text-xs text-neutral-600 hover:text-neutral-900 underline cursor-pointer"
              >
                Reintentar
              </button>
            </div>
          )}
        </div>

        <div className="space-y-6">
          {currentReading.quiz.map((q, qIdx) => {
            const userAnswer = quizAnswers[q.id];
            const isAnswered = userAnswer !== undefined;
            const isCorrect = isAnswered && userAnswer === q.correctIndex;

            return (
              <div key={q.id} className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg space-y-3">
                <p className="text-sm font-bold text-neutral-950">
                  {qIdx + 1}. {q.question}
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                  {q.options.map((opt, oIdx) => {
                    const isSelected = userAnswer === oIdx;
                    let btnStyle = 'bg-white text-neutral-700 border-neutral-200 hover:border-neutral-400';

                    if (showQuizResults) {
                      if (oIdx === q.correctIndex) {
                        btnStyle = 'bg-emerald-50 text-emerald-950 border-emerald-500 font-semibold';
                      } else if (isSelected && !isCorrect) {
                        btnStyle = 'bg-red-50 text-red-950 border-red-500';
                      }
                    } else if (isSelected) {
                      btnStyle = 'bg-neutral-900 text-white border-neutral-900 font-semibold';
                    }

                    return (
                      <button
                        key={oIdx}
                        disabled={showQuizResults}
                        onClick={() => handleSelectAnswer(q.id, oIdx)}
                        className={`p-2.5 text-xs text-left rounded border transition-all cursor-pointer ${btnStyle}`}
                      >
                        {opt}
                      </button>
                    );
                  })}
                </div>

                {showQuizResults && (
                  <div className={`p-3 rounded border text-xs leading-relaxed ${
                    isCorrect
                      ? 'bg-emerald-50/80 border-emerald-200 text-emerald-900'
                      : 'bg-red-50/80 border-red-200 text-red-900'
                  }`}>
                    <span className="font-bold block mb-0.5">
                      {isCorrect ? '¡Correcto!' : 'Respuesta Incorrecta:'}
                    </span>
                    {q.explanation}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {!showQuizResults ? (
          <div className="text-right pt-2">
            <button
              onClick={() => setShowQuizResults(true)}
              disabled={Object.keys(quizAnswers).length < currentReading.quiz.length}
              className={`px-5 py-2 text-xs font-bold rounded transition-all cursor-pointer ${
                Object.keys(quizAnswers).length === currentReading.quiz.length
                  ? 'bg-neutral-900 hover:bg-neutral-800 text-white shadow-sm'
                  : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
              }`}
            >
              Comprobar Respuestas
            </button>
          </div>
        ) : (
          <div className="text-right pt-2">
            <button
              onClick={handleResetQuiz}
              className="px-5 py-2 text-xs font-bold bg-neutral-900 hover:bg-neutral-800 text-white rounded transition-all cursor-pointer"
            >
              Reiniciar Cuestionario
            </button>
          </div>
        )}
      </div>
    </div>
  );
};
