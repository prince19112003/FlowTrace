import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PageTransition } from '@shared/components/ui/PageTransition';

interface SplashPageProps {
  onComplete?: () => void;
}

export const SplashPage: React.FC<SplashPageProps> = ({ onComplete }) => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<'drawing' | 'compile' | 'resolved'>('drawing');

  useEffect(() => {
    // Phase transitions
    const compileTimer = setTimeout(() => {
      setPhase('compile');
    }, 1800);

    const resolvedTimer = setTimeout(() => {
      setPhase('resolved');
    }, 3000);

    // Complete transition
    const completeTimer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      } else {
        navigate('/languages', { replace: true });
      }
    }, 3800); // 3.8s total for a cinematic reveal

    return () => {
      clearTimeout(compileTimer);
      clearTimeout(resolvedTimer);
      clearTimeout(completeTimer);
    };
  }, [navigate, onComplete]);

  return (
    <PageTransition className="items-center justify-center bg-[#030409] text-slate-100 overflow-hidden relative font-sans">
      
      {/* 1. Dynamic Scanner Grid Background */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.4) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.4) 1px, transparent 1px)', 
          backgroundSize: '48px 48px' 
        }} 
      />
      <motion.div 
        className="absolute top-0 left-0 w-full h-[2px] bg-linear-to-r from-transparent via-indigo-500 to-transparent pointer-events-none"
        animate={{ y: ['0vh', '100vh'] }}
        transition={{ duration: 4, repeat: Infinity, ease: 'linear' }}
      />

      {/* 2. Glow Ambient Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-indigo-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[30vw] h-[30vw] bg-purple-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* 3. Central Drawing / Reveal Canvas */}
      <div className="flex flex-col items-center justify-center z-10">
        
        {/* SVG Flowchart Laser Drawer */}
        <div className="relative w-64 h-64 flex items-center justify-center mb-6">
          <svg className="w-full h-full overflow-visible" viewBox="0 0 200 200">
            {/* Draw Path Definition */}
            <defs>
              <linearGradient id="laserGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="#6366f1" />
                <stop offset="50%" stopColor="#a855f7" />
                <stop offset="100%" stopColor="#22d3ee" />
              </linearGradient>
              <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>

            {/* Neon Flowchart Vector Drawer Paths */}
            {phase === 'drawing' && (
              <>
                {/* 1. Diamond Node (Condition) */}
                <motion.path
                  d="M 100,20 L 160,60 L 100,100 L 40,60 Z"
                  fill="none"
                  stroke="url(#laserGrad)"
                  strokeWidth="2.5"
                  filter="url(#glow)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                />
                
                {/* 2. Flow Connector Arrow */}
                <motion.path
                  d="M 100,100 L 100,135"
                  fill="none"
                  stroke="url(#laserGrad)"
                  strokeWidth="2.5"
                  filter="url(#glow)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.4, ease: 'easeOut', delay: 0.9 }}
                />

                {/* 3. Rectangular Process Node */}
                <motion.path
                  d="M 50,135 H 150 V 175 H 50 Z"
                  fill="none"
                  stroke="url(#laserGrad)"
                  strokeWidth="2.5"
                  filter="url(#glow)"
                  initial={{ pathLength: 0 }}
                  animate={{ pathLength: 1 }}
                  transition={{ duration: 0.8, ease: 'easeInOut', delay: 1.2 }}
                />

                {/* Sweeping Laser Glow Dots */}
                <motion.circle
                  r="4"
                  fill="#22d3ee"
                  filter="url(#glow)"
                  animate={{
                    cx: [100, 160, 100, 40, 100],
                    cy: [20, 60, 100, 60, 20]
                  }}
                  transition={{ duration: 1, ease: 'easeInOut' }}
                />
                <motion.circle
                  r="4"
                  fill="#a855f7"
                  filter="url(#glow)"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: [0, 1, 1, 0], cx: [100, 100], cy: [100, 135] }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                />
              </>
            )}

            {/* Compiler Phase: Electric Pulse Merger */}
            {phase === 'compile' && (
              <motion.g
                initial={{ scale: 1 }}
                animate={{ scale: [1, 1.05, 0.95, 1], filter: ["blur(0px)", "blur(4px)", "blur(0px)"] }}
                transition={{ duration: 0.6 }}
              >
                {/* Glowing Diamond */}
                <path d="M 100,20 L 160,60 L 100,100 L 40,60 Z" fill="none" stroke="#a855f7" strokeWidth="3" filter="url(#glow)" className="opacity-80" />
                <path d="M 100,100 L 100,135" fill="none" stroke="#6366f1" strokeWidth="3" filter="url(#glow)" className="opacity-80" />
                <path d="M 50,135 H 150 V 175 H 50 Z" fill="none" stroke="#22d3ee" strokeWidth="3" filter="url(#glow)" className="opacity-80" />
              </motion.g>
            )}

            {/* Resolved Phase: Standard Logo Brand Mark */}
            {phase === 'resolved' && (
              <motion.g
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: 'easeOut' }}
              >
                {/* Glow Ring background */}
                <circle cx="100" cy="100" r="70" fill="rgba(99, 102, 241, 0.04)" stroke="rgba(99, 102, 241, 0.15)" strokeWidth="1" strokeDasharray="5 5" />
                
                {/* Visual flowchart brand shape */}
                <path d="M 100,45 L 140,75 L 100,105 L 60,75 Z" fill="rgba(168, 85, 247, 0.15)" stroke="#a855f7" strokeWidth="2" filter="url(#glow)" />
                <path d="M 100,105 L 100,125" fill="none" stroke="#6366f1" strokeWidth="2.5" />
                <rect x="70" y="125" width="60" height="30" rx="6" fill="rgba(34, 211, 238, 0.15)" stroke="#22d3ee" strokeWidth="2" filter="url(#glow)" />
              </motion.g>
            )}
          </svg>
        </div>

        {/* Brand Text & Logs */}
        <AnimatePresence mode="wait">
          {phase === 'drawing' && (
            <motion.div
              key="drawText"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 0.6, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-[10px] font-mono tracking-[0.25em] text-indigo-400 uppercase"
            >
              Tracing code paths...
            </motion.div>
          )}

          {phase === 'compile' && (
            <motion.div
              key="compileText"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center flex flex-col gap-1.5"
            >
              <span className="text-[11px] font-mono tracking-[0.3em] text-cyan-400 uppercase font-black">
                ⚡ compiling visualizer engine ⚡
              </span>
              <span className="text-[9px] font-mono text-slate-500 uppercase">
                mapping memory stack ➔ ok
              </span>
            </motion.div>
          )}

          {phase === 'resolved' && (
            <motion.div
              key="resolvedText"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              className="flex flex-col items-center justify-center text-center"
            >
              {/* Main Brand Title */}
              <div className="relative py-2 px-8 flex items-center justify-center bg-[#070914]/90 backdrop-blur-xl rounded-2xl border border-white/5 shadow-[0_0_35px_rgba(99,102,241,0.2)]">
                <span className="text-3xl md:text-5xl font-black tracking-tighter text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] font-mono">
                  Flow
                </span>
                <span className="text-3xl md:text-5xl font-black tracking-tighter bg-linear-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent ml-0.5 font-mono drop-shadow-[0_0_20px_rgba(99,102,241,0.5)]">
                  Trace
                </span>
              </div>

              {/* Subtitle tag */}
              <p className="mt-4 font-mono text-[9px] md:text-xs tracking-[0.35em] text-indigo-300/40 uppercase">
                See how your code thinks
              </p>
            </motion.div>
          )}
        </AnimatePresence>

      </div>

    </PageTransition>
  );
};
