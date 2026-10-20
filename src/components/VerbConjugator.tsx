import React, { useState, useMemo } from 'react';
import { VERBS_DATA, VerbConjugation } from '../data/verbsData';
import { Search, Volume2, X, Info, ExternalLink, Filter } from 'lucide-react';
import { speakEnglish } from '../utils/speech';

export const VerbConjugator: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [selectedVerb, setSelectedVerb] = useState<VerbConjugation | null>(null);

  const categories = [
    { id: 'all', label: 'Todos los Verbos (100)' },
    { id: 'regular', label: 'Regulares' },
    { id: 'irregular', label: 'Irregulares' },
    { id: 'spelling', label: 'Cambio Ortográfico' },
    { id: 'rare', label: 'Casos Raros / Difíciles' },
  ];

  const filteredVerbs = useMemo(() => {
    return VERBS_DATA.filter((v) => {
      const matchesCategory = selectedCategory === 'all' || v.category === selectedCategory;
      const cleanQuery = searchTerm.toLowerCase().trim();
      const matchesSearch =
        !cleanQuery ||
        v.infinitive.toLowerCase().includes(cleanQuery) ||
        v.spanish.toLowerCase().includes(cleanQuery) ||
        v.pastParticiple.toLowerCase().includes(cleanQuery);
      return matchesCategory && matchesSearch;
    });
  }, [searchTerm, selectedCategory]);

  const handleSpeak = (text: string) => {
    speakEnglish(text);
  };

  return (
    <div className="space-y-6">
      {/* Editorial Header */}
      <div className="border-b border-neutral-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1">
          <span>Diccionario de Conjugación de Futuros</span>
          <span>·</span>
          <span>100 Verbos Esenciales</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950">
          Conjugador Integral de Tiempos Futuros
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-3xl">
          Consulta la conjugación completa de los cinco tiempos futuros en inglés (Simple, Going to, Continuous, Perfect, Perfect Continuous), con atención minuciosa a cambios de raíz, duplicación de consonantes y verbos engañosos.
        </p>
      </div>

      {/* Search and Filters Bar */}
      <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-3 bg-white p-3 border border-neutral-200 rounded-lg shadow-sm">
        {/* Search Input */}
        <div className="relative flex-1">
          <Search className="w-4 h-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar por verbo en inglés o significado en español..."
            className="w-full pl-9 pr-4 py-2 text-xs sm:text-sm bg-neutral-50 border border-neutral-200 rounded text-neutral-900 placeholder-neutral-400 focus:outline-none focus:border-neutral-900 focus:bg-white transition-all font-sans"
          />
          {searchTerm && (
            <button
              onClick={() => setSearchTerm('')}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400 hover:text-neutral-900 cursor-pointer"
            >
              <X className="w-3.5 h-3.5" />
            </button>
          )}
        </div>

        {/* Category Filter Buttons */}
        <div className="flex items-center gap-1 overflow-x-auto pb-1 md:pb-0 scrollbar-none">
          {categories.map((c) => {
            const isSelected = selectedCategory === c.id;
            return (
              <button
                key={c.id}
                onClick={() => setSelectedCategory(c.id)}
                className={`px-3 py-1.5 text-xs font-medium rounded transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                  isSelected
                    ? 'bg-neutral-900 text-white font-semibold'
                    : 'text-neutral-600 bg-neutral-100 hover:bg-neutral-200 hover:text-neutral-950'
                }`}
              >
                {c.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Verbs Count & Typographic Status */}
      <div className="flex items-center justify-between text-xs text-neutral-500 font-mono px-1">
        <span>Mostrando {filteredVerbs.length} de {VERBS_DATA.length} verbos</span>
        <span>Haz clic en cualquier verbo para ver su ficha completa y audio</span>
      </div>

      {/* Grid of Verbs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
        {filteredVerbs.map((verb) => (
          <div
            key={verb.id}
            onClick={() => setSelectedVerb(verb)}
            className="group bg-white p-4 border border-neutral-200 hover:border-neutral-900 rounded-lg transition-all cursor-pointer shadow-xs hover:shadow-md flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between gap-2 mb-2">
                <span className="text-base font-bold text-neutral-950 tracking-tight group-hover:text-black">
                  to {verb.infinitive}
                </span>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded font-medium ${
                  verb.category === 'rare'
                    ? 'bg-amber-100 text-amber-900'
                    : verb.category === 'spelling'
                    ? 'bg-blue-100 text-blue-900'
                    : verb.category === 'irregular'
                    ? 'bg-purple-100 text-purple-900'
                    : 'bg-neutral-100 text-neutral-700'
                }`}>
                  {verb.categoryLabel}
                </span>
              </div>
              <p className="text-xs text-neutral-600 italic mb-3">
                {verb.spanish}
              </p>

              <div className="space-y-1 text-[11px] font-mono text-neutral-600 pt-2 border-t border-neutral-100">
                <div className="flex justify-between">
                  <span className="text-neutral-400">Simple:</span>
                  <span className="font-semibold text-neutral-900">{verb.futureSimple}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Going to:</span>
                  <span className="text-neutral-800">{verb.goingTo}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-neutral-400">Perfect:</span>
                  <span className="text-neutral-800">{verb.futurePerfect}</span>
                </div>
              </div>
            </div>

            <div className="mt-3 pt-2 text-[11px] text-neutral-400 flex items-center justify-between border-t border-neutral-50 group-hover:text-neutral-900">
              <span>Ver detalles y audio</span>
              <ExternalLink className="w-3 h-3" />
            </div>
          </div>
        ))}
      </div>

      {/* Modal / Detailed Verb View */}
      {selectedVerb && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-neutral-950/60 backdrop-blur-xs">
          <div className="bg-white border border-neutral-300 rounded-xl shadow-2xl max-w-2xl w-full p-6 sm:p-8 max-h-[90vh] overflow-y-auto space-y-6 animate-in fade-in zoom-in-95 duration-150">
            {/* Modal Header */}
            <div className="flex items-start justify-between border-b border-neutral-200 pb-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-neutral-500 mb-1">
                  <span className="font-bold uppercase tracking-wider">{selectedVerb.categoryLabel}</span>
                  <span>·</span>
                  <span>Base: {selectedVerb.infinitive}</span>
                </div>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 tracking-tight">
                  to {selectedVerb.infinitive}
                </h3>
                <p className="text-sm font-medium text-neutral-600 italic mt-0.5">
                  Significado: {selectedVerb.spanish}
                </p>
              </div>

              <button
                onClick={() => setSelectedVerb(null)}
                className="p-1.5 text-neutral-400 hover:text-neutral-950 rounded-lg hover:bg-neutral-100 transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Principal Parts Table */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 p-3 bg-neutral-100/60 rounded-lg border border-neutral-200 text-xs font-mono">
              <div>
                <span className="text-[10px] text-neutral-400 block uppercase">Infinitive</span>
                <span className="font-bold text-neutral-900">{selectedVerb.infinitive}</span>
              </div>
              <div>
                <span className="text-[10px] text-neutral-400 block uppercase">Past Simple</span>
                <span className="font-bold text-neutral-900">{selectedVerb.pastSimple}</span>
              </div>
              <div>
                <span className="text-[10px] text-neutral-400 block uppercase">Past Participle</span>
                <span className="font-bold text-neutral-900">{selectedVerb.pastParticiple}</span>
              </div>
              <div>
                <span className="text-[10px] text-neutral-400 block uppercase">Present Participle</span>
                <span className="font-bold text-neutral-900">{selectedVerb.presentParticiple}</span>
              </div>
            </div>

            {/* Full 5 Future Forms */}
            <div className="space-y-3">
              <h4 className="text-xs font-mono uppercase tracking-wider font-bold text-neutral-900">
                Los 5 Tiempos Futuros Conjugados
              </h4>

              <div className="space-y-2">
                <div className="p-3 bg-neutral-50 border border-neutral-200 rounded flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-neutral-500 block">1. Future Simple</span>
                    <span className="text-sm font-bold text-neutral-950">{selectedVerb.futureSimple}</span>
                  </div>
                  <button
                    onClick={() => handleSpeak(selectedVerb.futureSimple)}
                    className="p-1.5 text-neutral-600 hover:text-neutral-950 bg-white border border-neutral-300 rounded hover:bg-neutral-100 cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="p-3 bg-neutral-50 border border-neutral-200 rounded flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-neutral-500 block">2. Be Going To</span>
                    <span className="text-sm font-bold text-neutral-950">{selectedVerb.goingTo}</span>
                  </div>
                  <button
                    onClick={() => handleSpeak(selectedVerb.goingTo)}
                    className="p-1.5 text-neutral-600 hover:text-neutral-950 bg-white border border-neutral-300 rounded hover:bg-neutral-100 cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="p-3 bg-neutral-50 border border-neutral-200 rounded flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-neutral-500 block">3. Future Continuous</span>
                    <span className="text-sm font-bold text-neutral-950">{selectedVerb.futureContinuous}</span>
                  </div>
                  <button
                    onClick={() => handleSpeak(selectedVerb.futureContinuous)}
                    className="p-1.5 text-neutral-600 hover:text-neutral-950 bg-white border border-neutral-300 rounded hover:bg-neutral-100 cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="p-3 bg-neutral-50 border border-neutral-200 rounded flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-neutral-500 block">4. Future Perfect</span>
                    <span className="text-sm font-bold text-neutral-950">{selectedVerb.futurePerfect}</span>
                  </div>
                  <button
                    onClick={() => handleSpeak(selectedVerb.futurePerfect)}
                    className="p-1.5 text-neutral-600 hover:text-neutral-950 bg-white border border-neutral-300 rounded hover:bg-neutral-100 cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="p-3 bg-neutral-50 border border-neutral-200 rounded flex items-center justify-between">
                  <div>
                    <span className="text-[10px] font-mono uppercase text-neutral-500 block">5. Future Perfect Continuous</span>
                    <span className="text-sm font-bold text-neutral-950">{selectedVerb.futurePerfectContinuous}</span>
                  </div>
                  <button
                    onClick={() => handleSpeak(selectedVerb.futurePerfectContinuous)}
                    className="p-1.5 text-neutral-600 hover:text-neutral-950 bg-white border border-neutral-300 rounded hover:bg-neutral-100 cursor-pointer"
                  >
                    <Volume2 className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>

            {/* Grammar Tip for Spanish Learners */}
            <div className="p-4 bg-amber-50/60 border border-amber-200 rounded-lg flex items-start gap-3">
              <Info className="w-4 h-4 text-amber-700 mt-0.5 shrink-0" />
              <div>
                <span className="text-[11px] font-mono font-bold uppercase text-amber-900 block mb-0.5">
                  Nota Clave para Hispanohablantes
                </span>
                <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed">
                  {selectedVerb.grammarTip}
                </p>
              </div>
            </div>

            {/* Example in Real Discourse */}
            <div className="p-4 bg-neutral-900 text-white rounded-lg space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono uppercase tracking-wider text-neutral-400">
                  Ejemplo en Contexto ({selectedVerb.exampleSentence.tense})
                </span>
                <button
                  onClick={() => handleSpeak(selectedVerb.exampleSentence.en)}
                  className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs bg-white/10 hover:bg-white/20 text-white rounded cursor-pointer transition-colors"
                >
                  <Volume2 className="w-3 h-3" />
                  Escuchar
                </button>
              </div>
              <p className="text-sm sm:text-base font-semibold text-neutral-100">
                "{selectedVerb.exampleSentence.en}"
              </p>
              <p className="text-xs text-neutral-400 italic">
                {selectedVerb.exampleSentence.es}
              </p>
            </div>

            {/* Close button */}
            <div className="pt-2 text-right">
              <button
                onClick={() => setSelectedVerb(null)}
                className="px-4 py-2 text-xs font-semibold text-neutral-700 hover:text-neutral-950 bg-neutral-100 rounded hover:bg-neutral-200 cursor-pointer"
              >
                Cerrar Ficha
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
