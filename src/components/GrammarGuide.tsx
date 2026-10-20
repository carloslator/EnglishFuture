import React, { useState } from 'react';
import { GRAMMAR_SECTIONS, GrammarSection } from '../data/grammarData';
import { Volume2, AlertCircle, CheckCircle, ChevronDown, ChevronRight, BookOpen, Sparkles } from 'lucide-react';
import { speakEnglish } from '../utils/speech';

export const GrammarGuide: React.FC = () => {
  const [selectedSectionId, setSelectedSectionId] = useState<string>('core-four');

  const currentSection = GRAMMAR_SECTIONS.find((s) => s.id === selectedSectionId) || GRAMMAR_SECTIONS[0];

  return (
    <div className="space-y-8">
      {/* Intro Editorial Header */}
      <div className="border-b border-neutral-200 pb-5">
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-neutral-500 mb-1">
          <span>Manual Didáctico para Hispanohablantes</span>
          <span>·</span>
          <span>Referencia Declerck</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-neutral-950">
          La Gramática del Futuro en Inglés
        </h2>
        <p className="mt-2 text-sm sm:text-base text-neutral-600 max-w-3xl">
          Explicada de forma clara y directa, desterrando falsos mitos y errores de traducción del español mediante los principios lingüísticos de Renaat Declerck.
        </p>
      </div>

      {/* Chapters Bar (Swiss Grid Navigation) */}
      <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2">
        {GRAMMAR_SECTIONS.map((sec) => {
          const isSelected = sec.id === selectedSectionId;
          return (
            <button
              key={sec.id}
              onClick={() => setSelectedSectionId(sec.id)}
              className={`p-3 text-left rounded-lg border transition-all cursor-pointer ${
                isSelected
                  ? 'bg-neutral-900 text-white border-neutral-900 shadow-sm'
                  : 'bg-white text-neutral-800 border-neutral-200 hover:border-neutral-400 hover:bg-neutral-50'
              }`}
            >
              <div className="flex items-center justify-between mb-1">
                <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-neutral-400' : 'text-neutral-500'}`}>
                  MÓDULO {sec.number}
                </span>
                {isSelected && <span className="w-1.5 h-1.5 rounded-full bg-white" />}
              </div>
              <p className="text-xs font-bold tracking-tight line-clamp-1">{sec.title}</p>
            </button>
          );
        })}
      </div>

      {/* Active Section Content */}
      <div className="bg-white border border-neutral-300 rounded-lg p-6 sm:p-8 shadow-sm space-y-8">
        {/* Section Header */}
        <div className="border-b border-neutral-200 pb-6">
          <div className="flex items-center gap-2 text-xs font-mono font-medium text-neutral-500 uppercase">
            <span>Módulo {currentSection.number}</span>
            <span>·</span>
            <span>Fórmula: {currentSection.formula}</span>
          </div>
          <h3 className="text-2xl sm:text-3xl font-black text-neutral-950 tracking-tight mt-1">
            {currentSection.title}
          </h3>
          <p className="text-sm sm:text-base text-neutral-600 font-medium mt-1">
            {currentSection.subtitle}
          </p>

          <p className="mt-4 text-sm text-neutral-700 bg-neutral-100/70 p-3.5 rounded border border-neutral-200 leading-relaxed">
            <span className="font-semibold text-neutral-900">En pocas palabras: </span>
            {currentSection.summary}
          </p>
        </div>

        {/* Declerck & Spanish Perspective Box */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="p-4 bg-neutral-50 border border-neutral-200 rounded-lg">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-neutral-500 block mb-1">
              Principio de Renaat Declerck
            </span>
            <p className="text-xs sm:text-sm text-neutral-700 leading-relaxed">
              {currentSection.declerckPrinciple}
            </p>
          </div>

          <div className="p-4 bg-orange-50/50 border border-orange-200/80 rounded-lg">
            <span className="text-[11px] font-mono font-bold uppercase tracking-wider text-orange-800 block mb-1">
              Contraste Crítico con el Español
            </span>
            <p className="text-xs sm:text-sm text-neutral-800 leading-relaxed">
              {currentSection.spanishComparison}
            </p>
          </div>
        </div>

        {/* Detailed Use Cases with Audio */}
        <div className="space-y-6">
          <h4 className="text-sm font-mono uppercase tracking-wider font-bold text-neutral-900">
            Casos de Uso y Ejemplos Prácticos
          </h4>

          <div className="grid grid-cols-1 gap-4">
            {currentSection.useCases.map((useCase, idx) => (
              <div
                key={idx}
                className="p-4 border border-neutral-200 rounded-lg hover:border-neutral-300 transition-colors bg-white space-y-3"
              >
                <div>
                  <h5 className="text-sm font-bold text-neutral-950">{useCase.label}</h5>
                  <p className="text-xs text-neutral-600 mt-0.5">{useCase.description}</p>
                </div>

                <div className="space-y-2 pt-2 border-t border-neutral-100">
                  {useCase.examples.map((ex, eIdx) => (
                    <div
                      key={eIdx}
                      className="p-2.5 bg-neutral-50 rounded flex flex-col sm:flex-row sm:items-center justify-between gap-2 border border-neutral-200/60"
                    >
                      <div className="space-y-0.5">
                        <p className="text-sm font-semibold text-neutral-900 font-sans">
                          {ex.en}
                        </p>
                        <p className="text-xs text-neutral-600 italic">
                          {ex.es}
                        </p>
                        {ex.note && (
                          <p className="text-[11px] text-neutral-500 font-medium">
                            Nota: {ex.note}
                          </p>
                        )}
                      </div>

                      <button
                        onClick={() => speakEnglish(ex.en)}
                        title="Escuchar pronunciación"
                        className="inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-medium text-neutral-700 bg-white border border-neutral-300 rounded hover:bg-neutral-100 active:scale-95 transition-all self-start sm:self-center shrink-0 cursor-pointer"
                      >
                        <Volume2 className="w-3.5 h-3.5" />
                        <span>Escuchar</span>
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Common Mistakes Section */}
        <div className="space-y-4 pt-2">
          <h4 className="text-sm font-mono uppercase tracking-wider font-bold text-neutral-900">
            Errores Típicos que Debes Desterrar
          </h4>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {currentSection.commonMistakes.map((m, mIdx) => (
              <div
                key={mIdx}
                className="p-4 border border-neutral-200 rounded-lg bg-neutral-50/50 space-y-2"
              >
                <div className="flex items-start gap-2">
                  <span className="text-xs font-mono font-bold text-red-600 bg-red-100/80 px-1.5 py-0.5 rounded shrink-0">
                    INCORRECTO
                  </span>
                  <p className="text-xs font-mono text-red-700 line-through">
                    {m.wrong}
                  </p>
                </div>

                <div className="flex items-start gap-2">
                  <span className="text-xs font-mono font-bold text-emerald-700 bg-emerald-100/80 px-1.5 py-0.5 rounded shrink-0">
                    CORRECTO
                  </span>
                  <p className="text-xs font-mono text-emerald-800 font-semibold">
                    {m.right}
                  </p>
                </div>

                <p className="text-xs text-neutral-600 pt-1 border-t border-neutral-200 leading-relaxed">
                  {m.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Pro Tip Box */}
        <div className="p-4 bg-neutral-900 text-white rounded-lg flex items-start gap-3">
          <Sparkles className="w-4 h-4 text-neutral-300 mt-0.5 shrink-0" />
          <div>
            <span className="text-xs font-mono uppercase tracking-wider font-semibold text-neutral-400 block mb-0.5">
              Consejo Práctico Definitivo
            </span>
            <p className="text-xs sm:text-sm text-neutral-200 leading-relaxed">
              {currentSection.proTip}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
