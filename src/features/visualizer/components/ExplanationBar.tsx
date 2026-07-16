import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useLesson } from '../../../lessons/LessonContext';

// Map event type to a short human label + color
const EVENT_LABEL: Record<string, { label: string; color: string }> = {
  CREATE_VARIABLE: { label: '📦 Declare', color: 'bg-blue-500 text-white' },
  UPDATE_VARIABLE: { label: '✏️ Assign', color: 'bg-amber-500 text-black' },
  COMPUTE:         { label: '⚡ Compute', color: 'bg-violet-500 text-white' },
  PRINT_VALUE:     { label: '🖨️ Output', color: 'bg-green-500 text-black' },
  COPY_VALUE:      { label: '📋 Copy', color: 'bg-cyan-500 text-black' },
  SWAP:            { label: '🔄 Swap', color: 'bg-orange-500 text-black' },
  COMPLETE:        { label: '✅ Done', color: 'bg-emerald-500 text-black' },
  NONE:            { label: '▶ Run', color: 'bg-slate-600 text-white' },
};

export const ExplanationBar: React.FC = () => {
  const { currentStep, lesson, language, toggleLanguage } = useLesson();
  const [zoomLevel, setZoomLevel] = useState(0.8);

  if (!lesson) return null;

  const text = currentStep
    ? (language === 'en' ? currentStep.explanationEnglish : currentStep.explanationHinglish)
    : lesson.learningObjective;

  const evType = currentStep?.animationEvent?.type ?? 'NONE';
  const badge = EVENT_LABEL[evType] ?? EVENT_LABEL.NONE;

  return (
    <div className="h-full flex flex-col bg-[#0b0c14] border border-indigo-500/20 rounded-2xl relative overflow-hidden">
      <div className="flex items-center justify-between px-4 py-2 border-b border-indigo-500/20 shrink-0 bg-white/2">
        <span className="text-xs text-indigo-400/80 font-mono font-bold tracking-widest uppercase">what happened</span>
        <div className="flex items-center gap-2">
          {/* Language toggle */}
          <button
            onClick={toggleLanguage}
            className="shrink-0 flex items-center gap-1.5 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-900/20 hover:bg-indigo-500/20 transition-all text-xs font-mono text-indigo-300/60 hover:text-white"
            title="Toggle language"
          >
            <span className={language === 'en' ? 'text-white font-black' : 'opacity-40'}>EN</span>
            <span className="opacity-30">/</span>
            <span className={language === 'hi' ? 'text-white font-black' : 'opacity-40'}>HI</span>
          </button>

          {/* Zoom Controls */}
          <div className="flex items-center gap-1 bg-black/40 rounded-lg border border-indigo-500/20 p-0.5">
            <button
              onClick={() => setZoomLevel(z => Math.max(z - 0.2, 0.5))}
              className="p-1 text-indigo-400/50 hover:text-white hover:bg-indigo-500/20 rounded transition-colors"
              title="Zoom Out"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12h14"/></svg>
            </button>
            <div className="w-px bg-indigo-500/20 h-4" />
            <button
              onClick={() => setZoomLevel(z => Math.min(z + 0.2, 2.5))}
              className="p-1 text-indigo-400/50 hover:text-white hover:bg-indigo-500/20 rounded transition-colors"
              title="Zoom In"
            >
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 5v14M5 12h14"/></svg>
            </button>
          </div>
        </div>
      </div>

      <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-3">
        {/* Event type badge */}
        {currentStep && (
          <AnimatePresence mode="wait">
            <motion.div
              key={currentStep.step}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              className="flex items-center gap-2"
            >
              <span className={`inline-flex items-center px-3 py-1 rounded-lg text-xs font-black tracking-widest uppercase ${badge.color}`}>
                {badge.label}
              </span>
              <span className="text-slate-600 font-mono text-xs">step {currentStep.step}</span>
            </motion.div>
          </AnimatePresence>
        )}

        {/* Explanation text */}
        <AnimatePresence mode="wait">
          <motion.div
            key={`${currentStep?.step ?? 0}-${language}`}
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <p
              className={`leading-relaxed ${language === 'hi' ? 'text-white font-bold tracking-wide' : 'text-slate-100 font-medium'}`}
              style={{ fontSize: `${(language === 'hi' ? 1.05 : 0.9) * zoomLevel}rem` }}
            >
              {text}
            </p>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
};
