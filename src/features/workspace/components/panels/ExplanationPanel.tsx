import React from 'react';
import { useLesson } from '../../../../lessons/LessonContext';
import { useRuntimeStore } from '@core/runtime/state/runtimeStore';

export const ExplanationPanel: React.FC = () => {
  const { lesson, currentStep, language } = useLesson();
  const { currentLine } = useRuntimeStore();

  if (!lesson || !currentStep) return null;

  void currentLine; // kept for future use

  const displayText = language === 'en'
    ? currentStep.explanationEnglish
    : currentStep.explanationHinglish;

  return (
    <div className="flex-1 flex flex-col min-h-0 bg-transparent">
      <div className="flex-1 p-6 overflow-y-auto">
        <p className="text-slate-200 text-base leading-relaxed font-medium">
          {displayText}
        </p>
      </div>
    </div>
  );
};
