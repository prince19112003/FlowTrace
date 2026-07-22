import React from 'react';
import { motion } from 'motion/react';

interface DataStructureBoxProps {
  name: string;
  variant: 'array' | 'table';
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
  const isArray = variant === 'array';
  const arrayItems = isArray ? (items as Array<string | number>) : [];
  const dictItems = !isArray ? Object.entries(items as Record<string, string | number>) : [];

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      className={`flex flex-col gap-2 p-3 rounded-xl border-2 transition-all duration-300 ${
        isActive 
          ? 'border-purple-400 bg-purple-500/10 shadow-[0_0_15px_rgba(168,85,247,0.35)] scale-[1.02]' 
          : 'border-purple-500/30 bg-purple-500/5'
      }`}
      style={{ minWidth: 'fit-content' }}
    >
      <span className="text-[10px] font-black uppercase tracking-widest text-purple-300 font-mono leading-none px-1">
        {name} {isArray ? '[LIST]' : '{DICT}'}
      </span>
      
      {isArray ? (
        <div className="flex border border-purple-500/30 rounded-lg overflow-hidden bg-slate-950/40">
          {arrayItems.map((val, idx) => {
            const isHighlighted = idx === highlightedIndex || highlightedIndices?.includes(idx);
            return (
              <div 
                key={idx} 
                className={`flex flex-col items-center justify-center min-w-12 p-2 transition-all duration-300 ${
                  idx !== arrayItems.length - 1 ? 'border-r border-purple-500/30' : ''
                } ${
                  isHighlighted 
                    ? 'bg-amber-500/20 border-amber-400/50 shadow-[inset_0_0_10px_rgba(245,158,11,0.3)] ring-1 ring-amber-400/20 scale-105 z-10' 
                    : isActive 
                      ? 'bg-purple-500/5' 
                      : ''
                }`}
              >
                {/* Index Number on top */}
                <span className={`text-[9px] mb-1 select-none font-mono font-bold transition-colors duration-300 ${
                  isHighlighted ? 'text-amber-400 font-black' : 'text-purple-400/70'
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
        <div className="flex flex-col border border-purple-500/30 rounded-lg overflow-hidden bg-slate-950/40">
          {dictItems.map(([key, val], idx) => {
            const isHighlighted = key === highlightedKey;
            return (
              <div 
                key={key} 
                className={`flex items-center min-w-32 transition-all duration-300 ${
                  idx !== dictItems.length - 1 ? 'border-b border-purple-500/30' : ''
                } ${isHighlighted ? 'bg-amber-500/10' : ''}`}
              >
                <div className={`flex-1 p-2 border-r border-purple-500/30 transition-colors duration-300 ${
                  isHighlighted ? 'bg-amber-500/20' : 'bg-purple-500/10'
                }`}>
                  <span className={`font-mono text-xs ${isHighlighted ? 'text-amber-300 font-bold' : 'text-purple-200'}`}>{key}</span>
                </div>
                <div className="flex-1 p-2 text-center">
                  <span className={`font-mono font-bold text-xs transition-colors duration-300 ${
                    isHighlighted ? 'text-amber-200' : 'text-white'
                  }`}>{typeof val === 'string' ? `"${val}"` : val}</span>
                </div>
              </div>
            );
          })}
        </div>
      )}
    </motion.div>
  );
};
