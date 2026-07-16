import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { PageTransition } from '@shared/components/ui/PageTransition';

interface SplashPageProps {
  onComplete?: () => void;
}

export const SplashPage: React.FC<SplashPageProps> = ({ onComplete }) => {
  const navigate = useNavigate();

  useEffect(() => {
    const timer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      } else {
        navigate('/languages', { replace: true });
      }
    }, 2000);

    return () => clearTimeout(timer);
  }, [navigate, onComplete]);

  return (
    <PageTransition className="items-center justify-center bg-[#020208] text-slate-100 overflow-hidden relative">
      {/* Deep minimal glowing aura */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 bg-purple-500/5 rounded-full blur-[80px] pointer-events-none" />

      {/* Main Container */}
      <motion.div
        className="flex flex-col items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0, scale: 0.98, filter: 'blur(4px)' }}
        transition={{ duration: 0.4 }}
      >
        {/* Cinematic Lens Focus Logo */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ filter: 'blur(10px)', scale: 0.92, opacity: 0 }}
          animate={{ filter: 'blur(0px)', scale: 1, opacity: 1 }}
          transition={{
            duration: 0.9,
            ease: [0.16, 1, 0.3, 1] // Ultra smooth easeOutExpo
          }}
        >
          {/* Left Minimal Bracket */}
          <span className="text-4xl md:text-5xl font-light font-mono text-purple-500/30 select-none">
            [
          </span>

          {/* Logo Name Container with Circuit Border */}
          <div className="relative py-1.5 px-4 flex items-center rounded-md bg-slate-950/30 border border-purple-500/5 shadow-[inset_0_0_8px_rgba(168,85,247,0.03)]">
            {/* Circuit Laser Tracing Stroke */}
            <svg className="absolute inset-0 w-full h-full rounded-md pointer-events-none" overflow="visible">
              <motion.rect
                x="0"
                y="0"
                width="100%"
                height="100%"
                rx="6"
                fill="none"
                stroke="url(#circuit-laser-grad)"
                strokeWidth="1.5"
                strokeDasharray="35 150"
                animate={{ strokeDashoffset: [0, -185] }}
                transition={{
                  duration: 1.8,
                  repeat: Infinity,
                  ease: 'linear'
                }}
              />
              <defs>
                <linearGradient id="circuit-laser-grad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%" stopColor="#a855f7" />
                  <stop offset="50%" stopColor="#6366f1" />
                  <stop offset="100%" stopColor="#fcd34d" />
                </linearGradient>
              </defs>
            </svg>

            <span className="text-2xl md:text-3xl font-light tracking-tight text-purple-300/90 select-none">
              Flow
            </span>
            <span className="text-2xl md:text-3xl font-black tracking-tight bg-linear-to-r from-purple-400 to-amber-300 bg-clip-text text-transparent ml-0.5 select-none">
              Trace
            </span>
          </div>

          {/* Right Minimal Bracket */}
          <span className="text-4xl md:text-5xl font-light font-mono text-purple-500/30 select-none">
            ]
          </span>
        </motion.div>

        {/* Tiny clean line under logo */}
        <motion.div 
          className="h-px bg-linear-to-r from-transparent via-purple-500/20 to-transparent w-16 mt-4"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        />
      </motion.div>
    </PageTransition>
  );
};
