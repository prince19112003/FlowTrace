import React from 'react';
import { motion, AnimatePresence } from 'motion/react';

interface VariableBoxProps {
  name: string;
  value: string | number;
  isNew?: boolean;
  isUpdating?: boolean;
  isPrinting?: boolean;
}

export const VariableBox: React.FC<VariableBoxProps> = ({
  name,
  value,
  isNew = false,
  isUpdating = false,
  isPrinting = false,
}) => {
  return (
    <motion.div
      layout
      initial={isNew ? { scale: 0.8, opacity: 0, y: -10 } : false}
      animate={{ scale: 1, opacity: 1, y: 0 }}
      transition={
        isNew
          ? { type: 'spring', stiffness: 500, damping: 25 }
          : { type: 'spring', stiffness: 500, damping: 30 }
      }
      className="relative flex flex-col items-center gap-1"
    >
      {/* Name Above Box */}
      <span className="text-[9px] font-bold text-white tracking-widest uppercase drop-shadow-sm">
        {name}
      </span>

      {/* Box */}
      <motion.div
        animate={
          isUpdating
            ? {
                borderColor: 'rgba(234,179,8,1)',
                scale: [1, 1.08, 1],
                backgroundColor: ['rgba(234,179,8,0.2)', 'rgba(234,179,8,0.35)', 'rgba(234,179,8,0.2)'],
              }
            : isPrinting
            ? {
                borderColor: 'rgba(34,197,94,1)',
                backgroundColor: ['rgba(34,197,94,0.2)', 'rgba(34,197,94,0.35)', 'rgba(34,197,94,0.2)'],
                y: [0, -4, 0],
              }
            : {
                borderColor: 'rgba(255,255,255,0.85)',
                scale: 1,
                y: 0,
                backgroundColor: 'rgba(255,255,255,0.08)',
              }
        }
        transition={{ duration: 0.35 }}
        className="relative w-16 h-11 rounded-xl border-2 flex items-center justify-center overflow-hidden"
      >
        <AnimatePresence mode="wait">
          <motion.span
            key={String(value)}
            initial={isUpdating ? { opacity: 0, scale: 0.5 } : { opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0 }}
            transition={{ type: 'spring', stiffness: 600, damping: 25 }}
            className="text-base font-bold text-white font-mono truncate px-1"
          >
            {typeof value === 'string' ? `"${value}"` : value}
          </motion.span>
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
};
