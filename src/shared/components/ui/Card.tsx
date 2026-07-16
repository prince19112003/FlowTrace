import React from 'react';
import { motion } from 'motion/react';
import type { HTMLMotionProps } from 'motion/react';

interface CardProps extends HTMLMotionProps<'div'> {
  interactive?: boolean;
}

export const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className = '', interactive = false, children, ...props }, ref) => {
    const baseStyles = 'bg-slate-800/50 backdrop-blur-sm border border-slate-700/50 rounded-2xl shadow-lg overflow-hidden';
    const interactiveStyles = interactive ? 'cursor-pointer hover:bg-slate-800 hover:border-slate-600 transition-colors' : '';
    
    return (
      <motion.div
        ref={ref}
        className={`${baseStyles} ${interactiveStyles} ${className}`}
        whileHover={interactive ? { y: -4, scale: 1.01 } : {}}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        {...props}
      >
        {children}
      </motion.div>
    );
  }
);

Card.displayName = 'Card';
