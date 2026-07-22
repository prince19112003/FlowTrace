import React from 'react';
import { motion } from 'motion/react';

interface DataStructureBoxProps {
  name: string;
  variant: 'array' | 'tuple' | 'table';
  items: Array<string | number> | Record<string, string | number>;
  isActive?: boolean;
  highlightedIndex?: number;
  highlightedIndices?: number[];
  highlightedKey?: string;
}

export const DataStructureBox: React.FC<DataStructureBoxProps> = ({ 
  name, 
  variant, 
  items, 
  isActive,
  highlightedIndex,
  highlightedIndices,
  highlightedKey
}) => {
  const isTuple = variant === 'tuple';
  const isTable = variant === 'table';
  const isArrayOrTuple = variant === 'array' || isTuple;
  const arrayItems = isArrayOrTuple ? (items as Array<string | number>) : [];
  const dictItems = isTable ? Object.entries(items as Record<string, string | number>) : [];

  const themeClasses = isTuple
    ? (isActive 
        ? 'border-cyan-400 bg-cyan-500/10 shadow-[0_0_15px_rgba(6,182,212,0.35)] scale-[1.02]' 
        : 'border-cyan-500/30 bg-cyan-500/5')
    : isTable
    ? (isActive 
        ? 'border-emerald-400 bg-emerald-500/10 shadow-[0_0_15px_rgba(16,185,129,0.35)] scale-[1.02]' 
        : 'border-emerald-500/30 bg-emerald-500/5')
    : (isActive 
        ? 'border-purple-400 bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.35)] scale-[1.02]' 
        : 'border-purple-500/30 bg-purple-500/5');

  const badgeTextClass = isTuple 
    ? 'text-cyan-300' 
    : isTable 
    ? 'text-emerald-300' 
    : 'text-purple-300';
    
  const gridBorderClass = isTuple 
    ? 'border-cyan-500/30' 
    : isTable 
    ? 'border-emerald-500/30' 
    : 'border-purple-500/30';
    
  const indexTextClass = isTuple ? 'text-cyan-400/70' : 'text-purple-400/70';

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`flex flex-col gap-2 p-3 rounded-xl border-2 transition-all duration-300 ${themeClasses}`}
      style={{ minWidth: 'fit-content' }}
    >
      <span className={`text-[10px] font-black uppercase tracking-widest ${badgeTextClass} font-mono leading-none px-1`}>
        {name} {isTuple ? '(TUPLE)' : isTable ? '{DICT}' : '[LIST]'}
      </span>
      
      {isArrayOrTuple ? (
        <div className={`flex border ${gridBorderClass} rounded-lg overflow-hidden bg-slate-950/40`}>
          {arrayItems.map((val, idx) => {
            const isHighlighted = idx === highlightedIndex || highlightedIndices?.includes(idx);
            return (
              <div 
                key={idx} 
                className={`flex flex-col items-center justify-center min-w-12 p-2 transition-all duration-300 ${
                  idx !== arrayItems.length - 1 ? `border-r ${gridBorderClass}` : ''
                } ${
                  isHighlighted 
                    ? 'bg-amber-500/20 border-amber-400/50 shadow-[inset_0_0_10px_rgba(245,158,11,0.3)] ring-1 ring-amber-400/20 scale-105 z-10' 
                    : isActive 
                      ? (isTuple ? 'bg-cyan-500/5' : 'bg-purple-500/5')
                      : ''
                }`}
              >
                {/* Index Number on top */}
                <span className={`text-[9px] mb-1 select-none font-mono font-bold transition-colors duration-300 ${
                  isHighlighted ? 'text-amber-400 font-black' : indexTextClass
                }`}>
                  {idx}
                </span>
                {/* Value below */}
                <span className={`font-mono font-bold text-sm transition-colors duration-300 ${
                  isHighlighted ? 'text-amber-200' : 'text-white'
                }`}>
                  {typeof val === 'string' ? `"${val}"` : val}
                </span>
              </div>
            );
          })}
        </div>
      ) : (
        <div className={`flex flex-col border ${gridBorderClass} rounded-lg overflow-hidden bg-slate-950/40 min-w-44`}>
          {/* Column Header */}
          <div className={`flex items-center border-b ${gridBorderClass} bg-slate-900/90 text-[9px] font-black font-mono uppercase tracking-wider`}>
            <div className={`flex-1 px-3 py-1.5 border-r ${gridBorderClass} text-emerald-400/90`}>
              KEY
            </div>
            <div className="flex-1 px-3 py-1.5 text-center text-amber-400/90">
              VALUE
            </div>
          </div>
          {/* Dict Items */}
          {dictItems.map(([key, val], idx) => {
            const isHighlighted = key === highlightedKey || (highlightedKey && (key.toLowerCase() === highlightedKey.toLowerCase() || String(idx) === highlightedKey));
            return (
              <div 
                key={key} 
                className={`flex items-center transition-all duration-300 ${
                  idx !== dictItems.length - 1 ? `border-b ${gridBorderClass}` : ''
                } ${isHighlighted ? 'bg-amber-500/20 border-amber-400/50 shadow-[inset_0_0_10px_rgba(245,158,11,0.3)] ring-1 ring-amber-400/20 scale-105 z-10' : ''}`}
              >
                <div className={`flex-1 px-3 py-2 border-r ${gridBorderClass} transition-colors duration-300 ${
                  isHighlighted ? 'bg-amber-500/30' : 'bg-emerald-500/5'
                }`}>
                  <span className={`font-mono text-xs ${isHighlighted ? 'text-amber-300 font-black' : 'text-emerald-300 font-bold'}`}>
                    "{key}"
                  </span>
                </div>
                <div className="flex-1 px-3 py-2 text-center">
                  <span className={`font-mono font-bold text-xs transition-colors duration-300 ${
                    isHighlighted ? 'text-amber-100 font-black' : 'text-white'
                  }`}>
                    {typeof val === 'string' ? `"${val}"` : val}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
};
