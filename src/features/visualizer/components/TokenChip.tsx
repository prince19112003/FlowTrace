import React from 'react';
import { motion } from 'motion/react';

interface TokenChipProps {
  value: string | number;
  label?: string;
  color?: 'indigo' | 'green' | 'orange';
}

export const TokenChip: React.FC<TokenChipProps> = ({ value, label, color = 'indigo' }) => {
  const colorMap = {
    indigo: 'bg-indigo-500/80 border-[2px] border-indigo-300 text-white shadow-[0_0_15px_rgba(99,102,241,0.5)]',
    green: 'bg-emerald-500/80 border-[2px] border-emerald-300 text-white shadow-[0_0_15px_rgba(16,185,129,0.5)]',
    orange: 'bg-orange-500/80 border-[2px] border-orange-300 text-white shadow-[0_0_15px_rgba(249,115,22,0.5)]',
  };

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      exit={{ scale: 0, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 600, damping: 30 }}
      className={`inline-flex flex-col items-center gap-1 px-4 py-2 rounded-full border ${colorMap[color]} backdrop-blur`}
    >
      {label && <span className="text-[10px] text-slate-500 tracking-widest">{label}</span>}
      <span className="font-mono text-xl font-bold">{value}</span>
    </motion.div>
  );
};
