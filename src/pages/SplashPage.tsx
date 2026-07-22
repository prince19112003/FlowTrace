import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { PageTransition } from '@shared/components/ui/PageTransition';

interface SplashPageProps {
  onComplete?: () => void;
}

interface Particle {
  x: number;
  y: number;
  vx: number;
  vy: number;
  targetX?: number;
  targetY?: number;
  alpha: number;
  size: number;
}

export const SplashPage: React.FC<SplashPageProps> = ({ onComplete }) => {
  const navigate = useNavigate();
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [phase, setPhase] = useState<'constellation' | 'assemble' | 'resolved'>('constellation');

  useEffect(() => {
    // Phase transitions
    const assembleTimer = setTimeout(() => {
      setPhase('assemble');
    }, 1200);

    const resolvedTimer = setTimeout(() => {
      setPhase('resolved');
    }, 2200);

    const completeTimer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      } else {
        navigate('/languages', { replace: true });
      }
    }, 3500);

    return () => {
      clearTimeout(assembleTimer);
      clearTimeout(resolvedTimer);
      clearTimeout(completeTimer);
    };
  }, [navigate, onComplete]);

  // Canvas particle logic
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.offsetWidth);
    let height = (canvas.height = canvas.offsetHeight);

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
    };
    window.addEventListener('resize', handleResize);

    const particleCount = 70;
    const particles: Particle[] = [];

    const logoCenterX = width / 2;
    const logoCenterY = height / 2;

    // Create target coordinates forming a glowing halo ring around the central name
    const targets: { x: number; y: number }[] = [];
    const haloRadius = 150;
    for (let k = 0; k < particleCount; k++) {
      const angle = (k / particleCount) * Math.PI * 2;
      const r = haloRadius + (Math.sin(k * 3) * 15);
      targets.push({
        x: logoCenterX + Math.cos(angle) * r,
        y: logoCenterY + Math.sin(angle) * r,
      });
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 100 + Math.random() * 200;
      particles.push({
        x: width / 2 + Math.cos(angle) * radius,
        y: height / 2 + Math.sin(angle) * radius,
        vx: (Math.random() - 0.5) * 0.8,
        vy: (Math.random() - 0.5) * 0.8,
        alpha: 0.3 + Math.random() * 0.7,
        size: 1 + Math.random() * 2,
      });
    }

    let animationPhase: 'constellation' | 'assemble' | 'resolved' = 'constellation';

    const renderLoop = () => {
      ctx.clearRect(0, 0, width, height);

      // Check current active phase
      if (canvasRef.current) {
        const currentPhase = canvasRef.current.getAttribute('data-phase') as any;
        if (currentPhase) {
          animationPhase = currentPhase;
        }
      }

      // Update particle targets if in assembly phase
      if (animationPhase === 'assemble' || animationPhase === 'resolved') {
        particles.forEach((p, index) => {
          const target = targets[index % targets.length];
          p.targetX = target.x;
          p.targetY = target.y;
        });
      }

      // Draw constellation connections
      if (animationPhase === 'constellation') {
        ctx.strokeStyle = 'rgba(99, 102, 241, 0.08)';
        ctx.lineWidth = 0.8;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 90) {
              ctx.beginPath();
              ctx.moveTo(particles[i].x, particles[i].y);
              ctx.lineTo(particles[j].x, particles[j].y);
              ctx.stroke();
            }
          }
        }
      }

      // Update and Draw particles
      particles.forEach((p, index) => {
        if (animationPhase === 'assemble' && p.targetX && p.targetY) {
          // Accelerating magnetic pull towards coordinates
          const dx = p.targetX - p.x;
          const dy = p.targetY - p.y;
          p.x += dx * 0.12;
          p.y += dy * 0.12;
          p.alpha = 0.85;
        } else if (animationPhase === 'resolved' && p.targetX && p.targetY) {
          // Settle tightly on target halo ring
          p.x = p.targetX;
          p.y = p.targetY;
          p.alpha = 0.5;
        } else {
          // Slow floating drift
          p.x += p.vx;
          p.y += p.vy;

          // Boundary bounce/wrap
          if (p.x < 0 || p.x > width) p.vx *= -1;
          if (p.y < 0 || p.y > height) p.vy *= -1;
        }

        // Draw particle node
        const glowColor = index % 3 === 0 
          ? 'rgba(34, 211, 238, ' // Cyan
          : index % 3 === 1 
          ? 'rgba(168, 85, 247, ' // Purple
          : 'rgba(99, 102, 241, '; // Indigo

        ctx.fillStyle = glowColor + p.alpha + ')';
        ctx.shadowColor = glowColor + p.alpha * 0.8 + ')';
        ctx.shadowBlur = animationPhase === 'assemble' ? 10 : 4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      animationFrameId = requestAnimationFrame(renderLoop);
    };

    renderLoop();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <PageTransition className="items-center justify-center bg-[#020306] text-slate-100 overflow-hidden relative font-sans">
      {/* Import Google Cursive Font */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Dancing+Script:wght@700&family=Great+Vibes&display=swap');
      `}</style>

      {/* 1. Canvas Layer */}
      <canvas 
        ref={canvasRef} 
        data-phase={phase}
        className="absolute inset-0 w-full h-full pointer-events-none z-0" 
      />

      {/* 2. Interactive Background Grids */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none z-0" 
        style={{ 
          backgroundImage: 'linear-gradient(rgba(99, 102, 241, 0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(99, 102, 241, 0.3) 1px, transparent 1px)', 
          backgroundSize: '54px 54px' 
        }} 
      />

      {/* 3. Glow Ambient Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[50vw] h-[50vw] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* 4. Centered Cursive Brand Title Reveal */}
      <div className="flex flex-col items-center justify-center z-10 select-none">
        <AnimatePresence mode="wait">
          {phase === 'resolved' && (
            <motion.h1
              key="cursiveTitle"
              initial={{ opacity: 0, scale: 0.85, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="text-6xl md:text-8xl text-transparent bg-clip-text bg-linear-to-r from-cyan-300 via-indigo-300 to-purple-400 drop-shadow-[0_0_30px_rgba(168,85,247,0.55)]"
              style={{ fontFamily: "'Dancing Script', 'Great Vibes', cursive", letterSpacing: '1px' }}
            >
              FlowTrace
            </motion.h1>
          )}
        </AnimatePresence>
      </div>

    </PageTransition>
  );
};
