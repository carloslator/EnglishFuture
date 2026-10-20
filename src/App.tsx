import React, { useState } from 'react';
import { Header } from './components/Header';
import { GrammarGuide } from './components/GrammarGuide';
import { TimelineVisualizer } from './components/TimelineVisualizer';
import { VerbConjugator } from './components/VerbConjugator';
import { FlashcardsDeck } from './components/FlashcardsDeck';
import { ReadingLab } from './components/ReadingLab';
import { InteractiveQuiz } from './components/InteractiveQuiz';
import { BookOpen, Clock, Layers, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState<string>('guide');

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 font-sans">
      {/* Top Navigation Bar adhering to the Top Bar Contract */}
      <Header activeTab={activeTab} setActiveTab={setActiveTab} />

      {/* Main Content Area */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        {/* Hero Section (Display on Guide or as Welcome Banner) */}
        {activeTab === 'guide' && (
          <div className="mb-10 bg-white border border-neutral-300 rounded-xl p-6 sm:p-10 shadow-xs relative overflow-hidden">
            <div className="max-w-3xl space-y-4">
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-neutral-500 uppercase tracking-wider">
                <span>Gramática Científica Simplificada</span>
                <span>·</span>
                <span>Referencia: Renaat Declerck</span>
              </div>

              <h1 className="text-3xl sm:text-5xl font-black tracking-tight text-neutral-950 font-sans leading-none">
                El Futuro en Inglés, <br className="hidden sm:inline" />
                <span className="text-neutral-600 font-bold">sin mitos ni confusiones.</span>
              </h1>

              <p className="text-sm sm:text-base text-neutral-700 leading-relaxed max-w-2xl">
                Diseñado exclusivamente para hispanohablantes. Domina la diferencia real entre <em>Will</em>, <em>Going to</em>, <em>Present Continuous</em> y <em>Present Simple</em>, comprende por qué nunca se dice <em>"when I will arrive"</em> y descubre cuándo <em>"if + will"</em> sí es correcto.
              </p>

              {/* Quick Jump Shortcuts */}
              <div className="pt-2 flex flex-wrap gap-2 text-xs font-medium">
                <button
                  onClick={() => setActiveTab('timeline')}
                  className="px-3.5 py-2 bg-neutral-900 text-white rounded hover:bg-neutral-800 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Clock className="w-3.5 h-3.5" />
                  <span>Ver Línea de Tiempo</span>
                </button>
                <button
                  onClick={() => setActiveTab('verbs')}
                  className="px-3.5 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-300 rounded transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Layers className="w-3.5 h-3.5" />
                  <span>Catálogo de 100 Verbos</span>
                </button>
                <button
                  onClick={() => setActiveTab('tests')}
                  className="px-3.5 py-2 bg-neutral-100 hover:bg-neutral-200 text-neutral-900 border border-neutral-300 rounded transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>Hacer un Test</span>
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Tab Views */}
        {activeTab === 'guide' && <GrammarGuide />}
        {activeTab === 'timeline' && <TimelineVisualizer />}
        {activeTab === 'verbs' && <VerbConjugator />}
        {activeTab === 'flashcards' && <FlashcardsDeck />}
        {activeTab === 'readings' && <ReadingLab />}
        {activeTab === 'tests' && <InteractiveQuiz />}
      </main>

      {/* Swiss Modernist Footer */}
      <footer className="border-t border-neutral-200 bg-white py-8 mt-16 text-neutral-500 text-xs">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="space-y-1 text-center sm:text-left">
            <p className="font-bold text-neutral-900 tracking-tight">
              FUTURO — Educational English Tense System
            </p>
            <p className="text-[11px] text-neutral-500">
              Fundamentado en <em>Tense in English: Its Structure and Use in Discourse</em> de Renaat Declerck (Routledge, 1991).
            </p>
          </div>

          <div className="flex items-center gap-4 text-[11px] font-mono text-neutral-600">
            <span>Helvetica Aesthetic</span>
            <span>·</span>
            <span>100 Verbos</span>
            <span>·</span>
            <span>Flashcards & Tests</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
