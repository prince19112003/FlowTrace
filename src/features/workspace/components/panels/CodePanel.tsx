import React from 'react';
import { useRuntimeStore } from '@core/runtime/state/runtimeStore';

import { useLesson } from '../../../../lessons/LessonContext';

// --- SYNTAX HIGHLIGHTING DICTIONARY ---
// Maps token types to Tailwind color utility classes.
const getTokenColor = (type: string) => {
  switch (type) {
    case 'keyword': return 'text-purple-400 font-semibold';
    case 'function': return 'text-blue-400';
    case 'variable': return 'text-slate-200';
    case 'string': return 'text-green-400';
    case 'number': return 'text-orange-400';
    case 'operator': return 'text-pink-400';
    case 'punctuation': return 'text-slate-400';
    case 'comment': return 'text-slate-500 italic';
    case 'parameter': return 'text-white';
    default: return 'text-slate-300';
  }
};

export const CodePanel: React.FC = React.memo(() => {
  const { lesson } = useLesson();
  const { currentLine: activeLine, nextLine, parameters } = useRuntimeStore();
  
  const textClass = 'text-base'; // Fixed size for clean look

  if (!lesson) return null;

  return (
    <div className="flex-1 flex flex-col min-h-0 relative select-none bg-transparent">

      {/* Code Rendering Area */}
      <div 
        className={`flex-1 overflow-y-auto font-mono ${textClass} pb-8`}
        onContextMenu={(e) => e.preventDefault()}
      >
        <div className="flex flex-col pt-2 min-w-max w-full">
          {lesson.lines.map((line) => {
            const isActive = activeLine === line.lineNum;
            const isNext = nextLine === line.lineNum;
            
            return (
              <div 
                key={line.lineNum} 
                className={`flex w-full group transition-colors duration-200 ${
                  isActive ? 'bg-blue-500/10 border-l-2 border-blue-500' : 
                  isNext ? 'bg-slate-800/30 border-l-2 border-slate-600' : 
                  'border-l-2 border-transparent hover:bg-slate-800/30'
                }`}
              >
                {/* Line Numbers */}
                <div className={`w-12 shrink-0 text-right pr-4 py-0.5 select-none ${
                  isActive ? 'text-blue-400 font-bold' : 
                  isNext ? 'text-slate-400 font-bold' : 
                  'text-slate-600 group-hover:text-slate-500'
                }`}>
                  {line.lineNum}
                </div>
                
                {/* Tokens */}
                <div className="flex-1 py-0.5 whitespace-pre">
                  {line.tokens.map((token, i) => {
                    // Render interactive parameter block
                    if (token.type === 'parameter' && token.paramId) {
                      // Fetch current value from Zustand store, fallback to default metadata
                      const paramState = parameters[token.paramId];
                      const displayValue = paramState ? String(paramState.value) : token.value;
                      
                      return (
                        <span 
                          key={i} 
                          className="inline-flex items-center px-1.5 mx-0.5 bg-slate-800 border border-slate-600 rounded cursor-not-allowed"
                          title="This parameter will become editable in a future phase"
                        >
                          <span className={getTokenColor(token.type)}>{displayValue}</span>
                        </span>
                      );
                    }
                    
                    // Render standard token
                    return (
                      <span key={i} className={getTokenColor(token.type)}>
                        {token.value}
                      </span>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      
    </div>
  );
});
