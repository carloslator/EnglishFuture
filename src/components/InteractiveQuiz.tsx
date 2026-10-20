import React, { useState } from 'react';
import { QUIZ_CATEGORIES, QuizCategory, QuizQuestion } from '../data/testsData';
import { CheckCircle2, XCircle, RotateCcw, Volume2, Award, ArrowRight, HelpCircle } from 'lucide-react';
import { speakEnglish } from '../utils/speech';

export const InteractiveQuiz: React.FC = () => {
  const [activeCategoryId, setActiveCategoryId] = useState<string>('quiz-core-four');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<string, number>>({});
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState<boolean>(false);
  const [quizFinished, setQuizFinished] = useState<boolean>(false);

  const currentCategory = QUIZ_CATEGORIES.find((c) => c.id === activeCategoryId) || QUIZ_CATEGORIES[0];
  const currentQuestion: QuizQuestion = currentCategory.questions[currentQuestionIndex];

  const handleSelectOption = (index: number) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: index
    }));
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswers[currentQuestion.id] === undefined) return;
    setIsAnswerSubmitted(true);
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex + 1 < currentCategory.questions.length) {
      setCurrentQuestionIndex((prev) => prev + 1);
      setIsAnswerSubmitted(false);
    } else {
      setQuizFinished(true);
    }
  };

  const handleResetCurrentCategory = () => {
    setCurrentQuestionIndex(0);
    setIsAnswerSubmitted(false);
    setQuizFinished(false);
    setSelectedAnswers({});
  };

  const handleSwitchCategory = (categoryId: string) => {
    setActiveCategoryId(categoryId);
    setCurrentQuestionIndex(0);
    setIsAnswerSubmitted(false);
    setQuizFinished(false);
    setSelectedAnswers({});
  };

  const calculateFinalScore = () => {
    let correct = 0;
    currentCategory.questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswerIndex) {
        correct += 1;
      }
    });
    return correct;
  };

  const currentSelection = selectedAnswers[currentQuestion?.id];
  const isCorrect = currentSelection === currentQuestion?.correctAnswerIndex;

  return (
    <div className="space-y-8 max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b border-neutral-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1">
          <span>Evaluación Formativa & Diagnóstico de Errores</span>
          <span>·</span>
          <span>Pedagogía Rigurosa</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950">
          Tests Interactivos de Tiempos Futuros
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-600">
          Preguntas de discriminación contextual diseñadas específicamente para superar los errores comunes que cometen los hispanohablantes al aprender inglés.
        </p>
      </div>

      {/* Category Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
        {QUIZ_CATEGORIES.map((cat) => {
          const isSelected = cat.id === activeCategoryId;
          return (
            <button
              key={cat.id}
              onClick={() => handleSwitchCategory(cat.id)}
              className={`p-3 text-left rounded-lg border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                  : 'bg-white text-neutral-800 border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50'
              }`}
            >
              <span className={`text-[10px] font-mono font-bold block mb-0.5 ${isSelected ? 'text-neutral-400' : 'text-neutral-500'}`}>
                {cat.badge}
              </span>
              <p className="text-xs font-bold tracking-tight line-clamp-1">{cat.name}</p>
            </button>
          );
        })}
      </div>

      {/* Quiz Container */}
      {!quizFinished && currentQuestion ? (
        <div className="bg-white border border-neutral-300 rounded-xl p-6 sm:p-8 shadow-sm space-y-6">
          {/* Question Meta Bar */}
          <div className="flex items-center justify-between border-b border-neutral-100 pb-4">
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-500">
              <span className="font-bold text-neutral-900">
                Pregunta {currentQuestionIndex + 1} de {currentCategory.questions.length}
              </span>
              <span>·</span>
              <span className="text-neutral-400">{currentCategory.name}</span>
            </div>

            <div className="w-32 h-1.5 bg-neutral-100 rounded-full overflow-hidden">
              <div
                className="h-full bg-neutral-900 transition-all duration-300"
                style={{
                  width: `${((currentQuestionIndex + 1) / currentCategory.questions.length) * 100}%`
                }}
              />
            </div>
          </div>

          {/* Prompt */}
          <div className="space-y-3">
            <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
              Situación comunicativa:
            </p>
            <p className="text-sm sm:text-base font-semibold text-neutral-900">
              {currentQuestion.questionPrompt}
            </p>

            {/* Incomplete Sentence */}
            <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div>
                <p className="text-base sm:text-xl font-bold font-sans text-neutral-950">
                  {currentQuestion.contextSentence}
                </p>
                <p className="text-xs text-neutral-500 italic mt-1">
                  Traducción: {currentQuestion.spanishTranslation}
                </p>
              </div>

              {isAnswerSubmitted && (
                <button
                  onClick={() =>
                    speakEnglish(
                      currentQuestion.contextSentence.replace(
                        '________',
                        currentQuestion.options[currentQuestion.correctAnswerIndex]
                      )
                    )
                  }
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-white border border-neutral-300 text-xs font-medium rounded hover:bg-neutral-100 cursor-pointer self-start sm:self-auto shrink-0"
                >
                  <Volume2 className="w-3.5 h-3.5 text-neutral-700" />
                  <span>Escuchar</span>
                </button>
              )}
            </div>
          </div>

          {/* Options */}
          <div className="space-y-2">
            <p className="text-xs font-mono uppercase tracking-wider text-neutral-400 font-bold">
              Selecciona la opción correcta:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
              {currentQuestion.options.map((opt, oIdx) => {
                const isSelected = currentSelection === oIdx;
                let style = 'bg-white text-neutral-800 border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50';

                if (isAnswerSubmitted) {
                  if (oIdx === currentQuestion.correctAnswerIndex) {
                    style = 'bg-emerald-50 text-emerald-950 border-emerald-500 font-bold';
                  } else if (isSelected && !isCorrect) {
                    style = 'bg-red-50 text-red-950 border-red-500';
                  } else {
                    style = 'bg-neutral-50 text-neutral-400 border-neutral-200 opacity-60';
                  }
                } else if (isSelected) {
                  style = 'bg-neutral-900 text-white border-neutral-900 font-semibold';
                }

                return (
                  <button
                    key={oIdx}
                    disabled={isAnswerSubmitted}
                    onClick={() => handleSelectOption(oIdx)}
                    className={`p-3.5 text-xs sm:text-sm text-left rounded-lg border transition-all cursor-pointer flex items-center justify-between ${style}`}
                  >
                    <span>{opt}</span>
                    {isAnswerSubmitted && oIdx === currentQuestion.correctAnswerIndex && (
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                    )}
                    {isAnswerSubmitted && isSelected && !isCorrect && (
                      <XCircle className="w-4 h-4 text-red-600 shrink-0" />
                    )}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Pedagogical Explanation Box on submit */}
          {isAnswerSubmitted && (
            <div
              className={`p-4 rounded-lg border text-xs sm:text-sm space-y-2 animate-in fade-in duration-150 ${
                isCorrect
                  ? 'bg-emerald-50/80 border-emerald-300 text-emerald-950'
                  : 'bg-red-50/80 border-red-300 text-red-950'
              }`}
            >
              <div className="flex items-center gap-2 font-bold">
                {isCorrect ? (
                  <>
                    <CheckCircle2 className="w-4 h-4 text-emerald-700" />
                    <span>¡Respuesta Correcta!</span>
                  </>
                ) : (
                  <>
                    <XCircle className="w-4 h-4 text-red-700" />
                    <span>Respuesta Incorrecta. La correcta era: "{currentQuestion.options[currentQuestion.correctAnswerIndex]}"</span>
                  </>
                )}
              </div>
              <p className="leading-relaxed text-neutral-800">
                {currentQuestion.explanationInSpanish}
              </p>
              <div className="pt-2 border-t border-neutral-200/80 text-[11px] font-mono text-neutral-500">
                Referencia teórica: {currentQuestion.declerckReference}
              </div>
            </div>
          )}

          {/* Controls Footer */}
          <div className="border-t border-neutral-100 pt-4 flex items-center justify-between">
            <span className="text-xs text-neutral-400 font-mono">
              {isAnswerSubmitted ? 'Revisa la explicación antes de avanzar' : 'Elige una opción para comprobar'}
            </span>

            {!isAnswerSubmitted ? (
              <button
                onClick={handleSubmitAnswer}
                disabled={currentSelection === undefined}
                className={`px-5 py-2 text-xs font-bold rounded transition-all cursor-pointer ${
                  currentSelection !== undefined
                    ? 'bg-neutral-900 hover:bg-neutral-800 text-white shadow-sm'
                    : 'bg-neutral-200 text-neutral-400 cursor-not-allowed'
                }`}
              >
                Comprobar
              </button>
            ) : (
              <button
                onClick={handleNextQuestion}
                className="inline-flex items-center gap-1.5 px-5 py-2 text-xs font-bold bg-neutral-900 hover:bg-neutral-800 text-white rounded transition-all cursor-pointer shadow-sm"
              >
                <span>{currentQuestionIndex + 1 < currentCategory.questions.length ? 'Siguiente Pregunta' : 'Ver Resultados'}</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>
      ) : (
        /* Results Screen */
        <div className="bg-white border border-neutral-300 rounded-xl p-8 sm:p-12 text-center space-y-6 shadow-sm">
          <div className="w-14 h-14 bg-neutral-100 rounded-full flex items-center justify-center mx-auto text-neutral-900">
            <Award className="w-7 h-7" />
          </div>

          <div>
            <span className="text-xs font-mono uppercase tracking-widest text-neutral-400 block mb-1">
              Test Completado · {currentCategory.name}
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-neutral-950 tracking-tight">
              {calculateFinalScore()} / {currentCategory.questions.length} Aciertos
            </h3>
            <p className="text-sm text-neutral-600 mt-2 max-w-md mx-auto">
              {calculateFinalScore() === currentCategory.questions.length
                ? '¡Dominio impecable! Has asimilado la lógica del sistema temporal en inglés sin interferencias del español.'
                : 'Buen trabajo. Repasa las explicaciones de las preguntas falladas para interiorizar el modelo de Declerck.'}
            </p>
          </div>

          <div className="pt-4 flex flex-wrap justify-center gap-3">
            <button
              onClick={handleResetCurrentCategory}
              className="inline-flex items-center gap-2 px-5 py-2.5 bg-neutral-900 hover:bg-neutral-800 text-white text-xs font-bold rounded transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Repetir este Test</span>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};
