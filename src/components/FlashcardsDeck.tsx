import React, { useState } from 'react';
import { FLASHCARDS_DATA, Flashcard } from '../data/flashcardsData';
import { Volume2, RotateCw, Check, X, Shuffle, ArrowLeft, ArrowRight, Sparkles } from 'lucide-react';
import { speakEnglish } from '../utils/speech';

export const FlashcardsDeck: React.FC = () => {
  const [cards, setCards] = useState<Flashcard[]>(FLASHCARDS_DATA);
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [isFlipped, setIsFlipped] = useState<boolean>(false);
  const [knownCardIds, setKnownCardIds] = useState<Set<string>>(new Set());
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  const categories = [
    { id: 'all', label: 'Todas las Tarjetas' },
    { id: 'core', label: 'Los 4 Futuros' },
    { id: 'subordinate', label: 'Subordinadas Temporales' },
    { id: 'perfect', label: 'Tiempos Compuestos' },
    { id: 'declerck-special', label: 'Casos Declerck (If+Will)' },
    { id: 'mistake', label: 'Errores Frecuentes' }
  ];

  const filteredCards = cards.filter((c) => selectedCategory === 'all' || c.category === selectedCategory);
  const currentCard = filteredCards[currentIndex] || filteredCards[0];

  const handleNext = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev + 1) % filteredCards.length);
  };

  const handlePrev = () => {
    setIsFlipped(false);
    setCurrentIndex((prev) => (prev - 1 + filteredCards.length) % filteredCards.length);
  };

  const handleShuffle = () => {
    setIsFlipped(false);
    const shuffled = [...cards].sort(() => Math.random() - 0.5);
    setCards(shuffled);
    setCurrentIndex(0);
  };

  const markKnown = (id: string, known: boolean) => {
    setKnownCardIds((prev) => {
      const updated = new Set(prev);
      if (known) {
        updated.add(id);
      } else {
        updated.delete(id);
      }
      return updated;
    });
    handleNext();
  };

  const handleAudio = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (currentCard) {
      speakEnglish(currentCard.audioText);
    }
  };

  if (!currentCard) {
    return (
      <div className="text-center py-12">
        <p className="text-neutral-500">No hay tarjetas disponibles en esta categoría.</p>
      </div>
    );
  }

  const isCurrentKnown = knownCardIds.has(currentCard.id);
  const progressPercent = Math.round((knownCardIds.size / cards.length) * 100);

  return (
    <div className="space-y-6 max-w-4xl mx-auto">
      {/* Header */}
      <div className="border-b border-neutral-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1">
          <span>Entrenamiento Mnemotécnico Activo</span>
          <span>·</span>
          <span>Repetición Espaciada</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950">
          Flashcards Interactivas de Futuros
        </h2>
        <p className="mt-2 text-sm text-neutral-600">
          Pon a prueba tu instinto en inglés antes de voltear la tarjeta. Escucha la pronunciación nativa y asimila la lógica temporal de Declerck.
        </p>
      </div>

      {/* Progress & Category Filter */}
      <div className="space-y-3">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 text-xs text-neutral-600 font-mono">
          <div className="flex items-center gap-3">
            <span>Tarjeta {currentIndex + 1} de {filteredCards.length}</span>
            <span>·</span>
            <span>Dominadas: {knownCardIds.size}/{cards.length} ({progressPercent}%)</span>
          </div>

          <button
            onClick={handleShuffle}
            className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-100 hover:bg-neutral-200 text-neutral-800 rounded transition-colors self-start sm:self-auto cursor-pointer"
          >
            <Shuffle className="w-3.5 h-3.5" />
            <span>Barajar Tarjetas</span>
          </button>
        </div>

        {/* Progress bar */}
        <div className="w-full h-1.5 bg-neutral-200 rounded-full overflow-hidden">
          <div
            className="h-full bg-neutral-900 transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>

        {/* Filter buttons */}
        <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => {
                setSelectedCategory(cat.id);
                setCurrentIndex(0);
                setIsFlipped(false);
              }}
              className={`px-3 py-1.5 text-xs font-medium rounded transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                selectedCategory === cat.id
                  ? 'bg-neutral-900 text-white font-semibold'
                  : 'text-neutral-600 bg-neutral-100 hover:bg-neutral-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </div>

      {/* Flip Card Stage */}
      <div
        onClick={() => setIsFlipped(!isFlipped)}
        className="cursor-pointer min-h-[340px] sm:min-h-[380px] p-6 sm:p-10 bg-white border border-neutral-300 rounded-2xl shadow-sm hover:shadow-md transition-all flex flex-col justify-between relative group select-none"
      >
        {/* Card Header */}
        <div className="flex items-center justify-between border-b border-neutral-100 pb-3">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-neutral-500">
              {currentCard.categoryLabel}
            </span>
            <span>·</span>
            <span className="text-[11px] font-mono text-neutral-400">
              Nivel: {currentCard.level}
            </span>
          </div>

          <div className="flex items-center gap-2 text-xs text-neutral-400 group-hover:text-neutral-700">
            <RotateCw className="w-3.5 h-3.5" />
            <span className="font-mono text-[11px]">{isFlipped ? 'Ver pregunta' : 'Toca para voltear'}</span>
          </div>
        </div>

        {/* Card Body */}
        <div className="py-6 flex flex-col justify-center text-center">
          {!isFlipped ? (
            /* FRONT: Challenge in Spanish */
            <div className="space-y-4">
              <span className="text-[11px] font-mono uppercase tracking-widest text-neutral-400 block">
                ¿Cómo dirías esto en inglés con el futuro exacto?
              </span>
              <p className="text-xl sm:text-2xl lg:text-3xl font-extrabold text-neutral-950 font-sans tracking-tight max-w-2xl mx-auto">
                "{currentCard.promptSpanish}"
              </p>
              <div className="inline-block mt-2 px-3 py-1 bg-neutral-100 text-neutral-600 text-xs font-medium rounded-full">
                Pista didáctica: {currentCard.clue}
              </div>
            </div>
          ) : (
            /* BACK: Solution in English + Declerck Rule */
            <div className="space-y-4 text-left animate-in fade-in duration-150">
              <div className="flex items-center justify-between gap-2">
                <span className="text-xs font-mono uppercase text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  {currentCard.targetVerbTense}
                </span>

                <button
                  onClick={handleAudio}
                  className="inline-flex items-center gap-1.5 px-3 py-1 bg-neutral-900 text-white text-xs font-semibold rounded hover:bg-neutral-800 transition-colors cursor-pointer"
                >
                  <Volume2 className="w-3.5 h-3.5" />
                  <span>Escuchar Inglés</span>
                </button>
              </div>

              <div>
                <p className="text-xl sm:text-2xl font-black text-neutral-950 font-sans tracking-tight">
                  "{currentCard.englishTarget}"
                </p>
                <p className="text-xs font-mono text-neutral-500 mt-1">
                  Estructura: {currentCard.formula}
                </p>
              </div>

              <div className="p-3 bg-neutral-50 rounded border border-neutral-200 text-xs text-neutral-700 leading-relaxed">
                <span className="font-semibold text-neutral-900">Fundamento de Declerck: </span>
                {currentCard.declerckNote}
              </div>
            </div>
          )}
        </div>

        {/* Card Footer Actions */}
        <div className="border-t border-neutral-100 pt-3 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                handlePrev();
              }}
              className="p-2 text-neutral-500 hover:text-neutral-950 hover:bg-neutral-100 rounded transition-colors cursor-pointer"
              title="Tarjeta anterior"
            >
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleNext();
              }}
              className="p-2 text-neutral-500 hover:text-neutral-950 hover:bg-neutral-100 rounded transition-colors cursor-pointer"
              title="Siguiente tarjeta"
            >
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={(e) => {
                e.stopPropagation();
                markKnown(currentCard.id, false);
              }}
              className="inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold text-neutral-600 bg-neutral-100 hover:bg-neutral-200 rounded transition-colors cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
              <span>Aún me cuesta</span>
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                markKnown(currentCard.id, true);
              }}
              className={`inline-flex items-center gap-1 px-3 py-1.5 text-xs font-semibold rounded transition-colors cursor-pointer ${
                isCurrentKnown
                  ? 'bg-emerald-600 text-white'
                  : 'bg-neutral-900 hover:bg-neutral-800 text-white'
              }`}
            >
              <Check className="w-3.5 h-3.5" />
              <span>{isCurrentKnown ? '¡Dominada!' : 'Marcar Dominada'}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
