import React, { useEffect } from 'react';
import { motion, useAnimation } from 'motion/react';
import { Check, X, HelpCircle } from 'lucide-react';

interface ConditionBoxProps {
  condition: string;
  inputs: string[];
  memorySnapshot: Record<string, string | number>;
  isTrue?: boolean | null;
  isActive?: boolean;
  label?: string;
  colorTheme?: 'default' | 'orange' | 'fuchsia' | 'teal' | 'grey';
}

export const ConditionBox: React.FC<ConditionBoxProps> = ({ 
  condition, 
  inputs, 
  memorySnapshot, 
  isTrue, 
  isActive,
  label = 'CONDITION',
  colorTheme = 'default'
}) => {
  const controls = useAnimation();
  
  let borderBgClass = isActive
    ? 'border-teal-400 bg-teal-500/10'
    : 'border-teal-500/50 bg-teal-500/5';
  let labelColorClass = 'text-teal-400';
  let placeholderColorClass = 'bg-teal-500/20 text-teal-300';
  let tokenColorClass = 'text-teal-55 text-teal-200';

  if (colorTheme === 'orange') {
    borderBgClass = isActive ? 'border-orange-400 bg-orange-500/20' : 'border-orange-500/50 bg-orange-900/30';
    labelColorClass = 'text-orange-400';
    placeholderColorClass = 'bg-orange-500/20 text-orange-300';
    tokenColorClass = 'text-orange-200';
  } else if (colorTheme === 'fuchsia') {
    borderBgClass = isActive ? 'border-fuchsia-400 bg-fuchsia-500/20' : 'border-fuchsia-500/50 bg-fuchsia-900/30';
    labelColorClass = 'text-fuchsia-400';
    placeholderColorClass = 'bg-fuchsia-500/20 text-fuchsia-300';
    tokenColorClass = 'text-fuchsia-200';
  } else if (colorTheme === 'grey') {
    borderBgClass = isActive ? 'border-slate-400 bg-slate-500/20' : 'border-slate-500/50 bg-slate-800/40';
    labelColorClass = 'text-slate-400';
    placeholderColorClass = 'bg-slate-500/20 text-slate-300';
    tokenColorClass = 'text-slate-200';
  } else if (false) {
    borderBgClass = isActive
      ? 'border-orange-400 bg-orange-500/20'
      : 'border-orange-500/50 bg-orange-900/30';
    labelColorClass = 'text-orange-400';
    placeholderColorClass = 'bg-orange-500/20 text-orange-300';
    tokenColorClass = 'text-orange-200';
  }

  useEffect(() => {
    if (isActive && isTrue === false) {
      controls.start({
        x: [0, -10, 10, -10, 10, -10, 10, 0],
        transition: { duration: 0.4 }
      });
    }
  }, [isActive, isTrue, controls]);

  const tokens = condition.split(/\s+/).filter(Boolean);

  return (
    <div className="flex flex-col items-center gap-1.5 relative">
      {/* The actual conditional box */}
      <motion.div
        animate={controls}
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        className={`relative flex items-center justify-between px-6 rounded-2xl border-2 transition-colors duration-300 ${borderBgClass}`}
        style={{ height: '5.25rem', minWidth: '14rem' }}
      >
        <div className={`flex items-center gap-2 font-mono text-lg ${tokenColorClass}`} style={{ fontFeatureSettings: '"liga" 0', fontVariantLigatures: 'none' }}>
          {tokens.map((token, i) => {
            const isVar = inputs.includes(token) && memorySnapshot[token] !== undefined;
            if (isVar) {
              return (
                <div key={i} className="flex flex-col items-center justify-center gap-1 px-1">
                  <span className={`font-bold text-[16px] ${colorTheme === 'orange' ? 'text-orange-200' : colorTheme === 'fuchsia' ? 'text-fuchsia-200' : colorTheme === 'grey' ? 'text-slate-200' : 'text-teal-200'}`}>{token}</span>
                  <span className={`text-[11px] font-black tracking-wider ${colorTheme === 'orange' ? 'text-orange-400' : colorTheme === 'fuchsia' ? 'text-fuchsia-400' : colorTheme === 'grey' ? 'text-slate-400' : 'text-teal-400'}`}>
                    {memorySnapshot[token]}
                  </span>
                </div>
              );
            }
            return (
              <span key={i} className="text-slate-300 font-bold">
                {token}
              </span>
            );
          })}
        </div>

        {/* Validation status badge */}
        {isTrue !== undefined && isTrue !== null && (
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: 'spring', stiffness: 500, damping: 20, delay: 0.2 }}
            className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 ${
              isTrue ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
            }`}
          >
            {isTrue ? <Check size={18} className="stroke-3" /> : <X size={18} className="stroke-3" />}
          </motion.div>
        )}

        {/* Default placeholder state before evaluation */}
        {isTrue === undefined && (
          <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 ml-4 ${placeholderColorClass}`}>
            <HelpCircle size={18} />
          </div>
        )}
      </motion.div>

      {/* Label positioned at the bottom of the box */}
      <span className={`text-[11px] font-black tracking-wider font-mono leading-none uppercase ${labelColorClass}`}>
        {label}
      </span>
    </div>
  );
};
