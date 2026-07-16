import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PageTransition } from '@shared/components/ui/PageTransition';

interface SplashPageProps {
  onComplete?: () => void;
}

export const SplashPage: React.FC<SplashPageProps> = ({ onComplete }) => {
  const navigate = useNavigate();
  const [phase, setPhase] = useState<'booting' | 'reveal'>('booting');

  useEffect(() => {
    // Phase transition
    const phaseTimer = setTimeout(() => {
      setPhase('reveal');
    }, 800);

    // Complete transition
    const completeTimer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      } else {
        navigate('/languages', { replace: true });
      }
    }, 3200); // 3.2 seconds total for epic feel

    return () => {
      clearTimeout(phaseTimer);
      clearTimeout(completeTimer);
    };
  }, [navigate, onComplete]);

  return (
    <PageTransition className="items-center justify-center bg-[#010103] text-slate-100 overflow-hidden relative font-sans">
      
      {/* Dynamic Background Grid */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
           style={{ backgroundImage: 'linear-gradient(#4f46e5 1px, transparent 1px), linear-gradient(90deg, #4f46e5 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

      {/* Ambient Orbs */}
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40vw] h-[40vw] bg-purple-600/10 rounded-full blur-[120px] pointer-events-none"
        animate={{ scale: phase === 'reveal' ? [0.8, 1.2, 1] : 0.5, opacity: phase === 'reveal' ? 1 : 0 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
      />
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[20vw] h-[20vw] bg-amber-500/10 rounded-full blur-[80px] pointer-events-none"
        animate={{ scale: phase === 'reveal' ? [0, 1.5, 1] : 0, opacity: phase === 'reveal' ? 1 : 0 }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
      />

      <AnimatePresence mode="wait">
        {phase === 'booting' && (
          <motion.div
            key="booting"
            className="flex flex-col items-center gap-4 z-10"
            initial={{ opacity: 0, filter: 'blur(10px)' }}
            animate={{ opacity: 1, filter: 'blur(0px)' }}
            exit={{ opacity: 0, scale: 0, filter: 'blur(20px)', transition: { duration: 0.4, ease: "anticipate" } }}
          >
            <div className="w-10 h-10 border-t-2 border-r-2 border-purple-500 rounded-full animate-spin" />
            <p className="font-mono text-purple-400/60 text-xs tracking-[0.3em] uppercase">
              Initializing Engine
            </p>
          </motion.div>
        )}

        {phase === 'reveal' && (
          <motion.div
            key="reveal"
            className="flex flex-col items-center justify-center z-10"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.05, filter: 'blur(10px)' }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="relative flex items-center gap-3 md:gap-6">
              
              {/* Bracket Left */}
              <motion.span 
                className="text-5xl md:text-7xl font-extralight font-mono text-indigo-500/30 select-none"
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              >
                [
              </motion.span>

              {/* Main Logo Container */}
              <motion.div 
                className="relative py-3 px-6 md:px-10 flex items-center justify-center bg-[#05050a]/80 backdrop-blur-xl rounded-xl border border-white/5 shadow-[0_0_40px_rgba(168,85,247,0.15)] overflow-hidden"
                initial={{ clipPath: 'inset(0 50% 0 50%)' }}
                animate={{ clipPath: 'inset(0 0% 0 0%)' }}
                transition={{ duration: 0.7, ease: [0.7, 0, 0.3, 1], delay: 0.2 }}
              >
                {/* SVG Circuit Border - Dual Lasers */}
                <svg className="absolute inset-0 w-full h-full pointer-events-none" overflow="visible">
                  <rect x="0" y="0" width="100%" height="100%" rx="12" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="1" />
                  
                  {/* Laser 1 */}
                  <motion.rect
                    x="0" y="0" width="100%" height="100%" rx="12" fill="none" stroke="url(#laser-1)" strokeWidth="2" strokeDasharray="60 400"
                    animate={{ strokeDashoffset: [0, -460] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                  />
                  {/* Laser 2 */}
                  <motion.rect
                    x="0" y="0" width="100%" height="100%" rx="12" fill="none" stroke="url(#laser-2)" strokeWidth="2" strokeDasharray="60 400"
                    animate={{ strokeDashoffset: [-230, -690] }}
                    transition={{ duration: 2.5, repeat: Infinity, ease: 'linear' }}
                  />
                  
                  <defs>
                    <linearGradient id="laser-1" x1="0%" y1="0%" x2="100%" y2="0%">
                      <stop offset="0%" stopColor="transparent" />
                      <stop offset="50%" stopColor="#a855f7" />
                      <stop offset="100%" stopColor="#fcd34d" />
                    </linearGradient>
                    <linearGradient id="laser-2" x1="100%" y1="100%" x2="0%" y2="100%">
                      <stop offset="0%" stopColor="transparent" />
                      <stop offset="50%" stopColor="#6366f1" />
                      <stop offset="100%" stopColor="#38bdf8" />
                    </linearGradient>
                  </defs>
                </svg>

                {/* Text Group */}
                <div className="relative z-10 flex items-center select-none">
                  <span className="text-4xl md:text-6xl font-light tracking-tighter text-white/90 drop-shadow-[0_0_12px_rgba(255,255,255,0.3)]">
                    Flow
                  </span>
                  <span className="text-4xl md:text-6xl font-black tracking-tighter bg-linear-to-r from-purple-400 via-pink-500 to-amber-400 bg-clip-text text-transparent ml-0.5 drop-shadow-[0_0_20px_rgba(236,72,153,0.4)]">
                    Trace
                  </span>
                </div>
                
                {/* Glare effect */}
                <motion.div 
                  className="absolute inset-0 w-[150%] h-full bg-linear-to-r from-transparent via-white/10 to-transparent -translate-x-full skew-x-12"
                  animate={{ x: '100%' }}
                  transition={{ delay: 0.8, duration: 1, ease: "easeInOut" }}
                />
              </motion.div>

              {/* Bracket Right */}
              <motion.span 
                className="text-5xl md:text-7xl font-extralight font-mono text-indigo-500/30 select-none"
                initial={{ x: -30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
              >
                ]
              </motion.span>
            </div>

            {/* Subtitle */}
            <motion.div
              className="mt-8 flex flex-col items-center"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              <p className="font-mono text-[10px] md:text-xs tracking-[0.4em] text-indigo-300/50 uppercase select-none">
                See how your code thinks
              </p>
              <motion.div 
                className="h-px bg-linear-to-r from-transparent via-indigo-500/50 to-transparent mt-3"
                initial={{ width: 0 }}
                animate={{ width: 64 }}
                transition={{ delay: 1.2, duration: 0.8, ease: "easeOut" }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </PageTransition>
  );
};
