import React from 'react';
import { Volume2, BookOpen } from 'lucide-react';
import { speakEnglish } from '../utils/speech';

interface HeaderProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { id: 'guide', label: 'Guía Gramatical' },
    { id: 'timeline', label: 'Línea de Tiempo' },
    { id: 'verbs', label: '100 Verbos' },
    { id: 'flashcards', label: 'Flashcards' },
    { id: 'readings', label: 'Lecturas' },
    { id: 'tests', label: 'Tests' },
  ];

  const handleTestAudio = () => {
    speakEnglish('Welcome to Futuro: Master English future tenses with precision.');
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-16">
          {/* Zone 1: Single text element wordmark (Display face, Swiss modernist) */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={() => setActiveTab('guide')}
              className="text-left group flex items-baseline gap-2 cursor-pointer"
            >
              <span className="text-xl sm:text-2xl font-black tracking-tight text-neutral-950 font-sans">
                FUTURO
              </span>
              <span className="text-xs font-semibold tracking-wider text-neutral-400 uppercase hidden sm:inline">
                ENGLISH TENSES
              </span>
            </button>
          </div>

          {/* Zone 2: Clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-1 sm:gap-2">
            {navItems.map((item) => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => setActiveTab(item.id)}
                  className={`px-3 py-1.5 text-xs lg:text-sm font-medium tracking-tight rounded transition-all whitespace-nowrap shrink-0 cursor-pointer ${
                    isActive
                      ? 'bg-neutral-900 text-white shadow-sm'
                      : 'text-neutral-600 hover:text-neutral-950 hover:bg-neutral-100'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Zone 3: 1 primary action */}
          <div className="flex items-center gap-2 shrink-0">
            <button
              onClick={handleTestAudio}
              title="Probar pronunciación en audio"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 text-xs font-semibold tracking-tight text-neutral-900 bg-neutral-100 border border-neutral-300 rounded hover:bg-neutral-200 active:scale-95 transition-all whitespace-nowrap cursor-pointer"
            >
              <Volume2 className="w-3.5 h-3.5 text-neutral-700" />
              <span className="hidden sm:inline">Audio EN</span>
            </button>
          </div>
        </div>

        {/* Mobile Navigation Strip */}
        <div className="md:hidden flex items-center gap-1 pb-3 overflow-x-auto border-t border-neutral-100 pt-2 -mx-2 px-2 scrollbar-none">
          {navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`px-2.5 py-1 text-xs font-medium rounded whitespace-nowrap shrink-0 cursor-pointer ${
                activeTab === item.id
                  ? 'bg-neutral-900 text-white'
                  : 'text-neutral-600 bg-neutral-100'
              }`}
            >
              {item.label}
            </button>
          ))}
        </div>
      </div>
    </header>
  );
};
