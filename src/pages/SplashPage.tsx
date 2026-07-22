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
    }, 1800);

    const resolvedTimer = setTimeout(() => {
      setPhase('resolved');
    }, 2800);

    const completeTimer = setTimeout(() => {
      if (onComplete) {
        onComplete();
      } else {
        navigate('/languages', { replace: true });
      }
    }, 3800);

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

    const particleCount = 80;
    const particles: Particle[] = [];

    // Predefined shape target coordinates for the flowchart logo assembly
    const logoCenterY = height / 2 - 30;
    const logoCenterX = width / 2;

    const targets: { x: number; y: number }[] = [];
    
    // Create Diamond outline targets (Condition Node)
    const diamondPoints = 16;
    for (let k = 0; k < diamondPoints; k++) {
      const t = k / diamondPoints;
      let dx = 0;
      let dy = 0;
      if (t < 0.25) {
        const seg = t / 0.25;
        dx = 60 * seg;
        dy = -40 * (1 - seg);
      } else if (t < 0.5) {
        const seg = (t - 0.25) / 0.25;
        dx = 60 * (1 - seg);
        dy = 40 * seg;
      } else if (t < 0.75) {
        const seg = (t - 0.5) / 0.25;
        dx = -60 * seg;
        dy = 40 * (1 - seg);
      } else {
        const seg = (t - 0.75) / 0.25;
        dx = -60 * (1 - seg);
        dy = -40 * seg;
      }
      targets.push({ x: logoCenterX + dx, y: logoCenterY + dy - 30 });
    }

    // Process box targets (bottom rect)
    const rectPoints = 20;
    const rectWidth = 100;
    const rectHeight = 35;
    const rectY = logoCenterY + 45;
    for (let k = 0; k < rectPoints; k++) {
      const ratio = k / rectPoints;
      let rx = 0;
      let ry = 0;
      if (ratio < 0.3) {
        rx = -rectWidth / 2 + (rectWidth * (ratio / 0.3));
        ry = rectY;
      } else if (ratio < 0.5) {
        rx = rectWidth / 2;
        ry = rectY + (rectHeight * ((ratio - 0.3) / 0.2));
      } else if (ratio < 0.8) {
        rx = rectWidth / 2 - (rectWidth * ((ratio - 0.5) / 0.3));
        ry = rectY + rectHeight;
      } else {
        rx = -rectWidth / 2;
        ry = rectY + rectHeight - (rectHeight * ((ratio - 0.8) / 0.2));
      }
      targets.push({ x: logoCenterX + rx, y: ry });
    }

    // Connector arrow targets
    const arrowYStart = logoCenterY + 10;
    const arrowYEnd = logoCenterY + 45;
    for (let k = 0; k < 6; k++) {
      targets.push({ x: logoCenterX, y: arrowYStart + ((arrowYEnd - arrowYStart) * (k / 5)) });
    }

    // Initialize particles
    for (let i = 0; i < particleCount; i++) {
      const angle = Math.random() * Math.PI * 2;
      const radius = 80 + Math.random() * 150;
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
        ctx.strokeStyle = 'rgba(99, 102, 241, 0.07)';
        ctx.lineWidth = 0.8;
        for (let i = 0; i < particles.length; i++) {
          for (let j = i + 1; j < particles.length; j++) {
            const dx = particles[i].x - particles[j].x;
            const dy = particles[i].y - particles[j].y;
            const dist = Math.sqrt(dx * dx + dy * dy);
            if (dist < 85) {
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
          p.alpha = 0.8;
        } else if (animationPhase === 'resolved' && p.targetX && p.targetY) {
          // Settle tightly on target
          p.x = p.targetX;
          p.y = p.targetY;
          p.alpha = 0.45;
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
        ctx.shadowBlur = animationPhase === 'assemble' ? 8 : 4;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.shadowBlur = 0; // reset
      });

      // Draw assembled flowchart silhouette connections
      if (animationPhase === 'assemble' || animationPhase === 'resolved') {
        ctx.strokeStyle = animationPhase === 'resolved' ? 'rgba(99, 102, 241, 0.25)' : 'rgba(99, 102, 241, 0.4)';
        ctx.lineWidth = 1.8;
        ctx.shadowColor = 'rgba(99, 102, 241, 0.3)';
        ctx.shadowBlur = 6;

        // Draw Diamond
        ctx.beginPath();
        ctx.moveTo(logoCenterX, logoCenterY - 30 - 40);
        ctx.lineTo(logoCenterX + 60, logoCenterY - 30);
        ctx.lineTo(logoCenterX, logoCenterY - 30 + 40);
        ctx.lineTo(logoCenterX - 60, logoCenterY - 30);
        ctx.closePath();
        ctx.stroke();

        // Draw Connector line
        ctx.beginPath();
        ctx.moveTo(logoCenterX, logoCenterY - 30 + 40);
        ctx.lineTo(logoCenterX, rectY);
        ctx.stroke();

        // Draw Rectangle
        ctx.strokeRect(logoCenterX - rectWidth / 2, rectY, rectWidth, rectHeight);
        ctx.shadowBlur = 0;
      }

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
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[55vw] h-[55vw] bg-indigo-500/10 rounded-full blur-[130px] pointer-events-none" />

      {/* 4. Text Reveal Container */}
      <div className="flex flex-col items-center justify-center z-10 select-none mt-40">
        <AnimatePresence mode="wait">
          {phase === 'constellation' && (
            <motion.div
              key="constellationText"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 0.6, y: 0 }}
              exit={{ opacity: 0 }}
              className="text-[10px] font-mono tracking-[0.3em] text-indigo-400 uppercase"
            >
              Aligning neural flowchart net...
            </motion.div>
          )}

          {phase === 'assemble' && (
            <motion.div
              key="assembleText"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              className="text-center flex flex-col gap-1.5"
            >
              <span className="text-[11px] font-mono tracking-[0.35em] text-cyan-400 uppercase font-black">
                ✨ assembling node matrix ✨
              </span>
              <span className="text-[9px] font-mono text-slate-500 uppercase">
                mapping constellation points ➔ locked
              </span>
            </motion.div>
          )}

          {phase === 'resolved' && (
            <motion.div
              key="resolvedText"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: 'easeOut' }}
              className="flex flex-col items-center justify-center text-center"
            >
              {/* Premium Brand Title */}
              <div className="relative py-2.5 px-8 flex items-center justify-center bg-[#070914]/90 backdrop-blur-xl rounded-2xl border border-white/5 shadow-[0_0_35px_rgba(99,102,241,0.25)]">
                <span className="text-3xl md:text-5xl font-black tracking-tighter text-white drop-shadow-[0_0_12px_rgba(255,255,255,0.3)] font-mono">
                  Flow
                </span>
                <span className="text-3xl md:text-5xl font-black tracking-tighter bg-linear-to-r from-cyan-400 via-indigo-400 to-purple-500 bg-clip-text text-transparent ml-0.5 font-mono drop-shadow-[0_0_20px_rgba(99,102,241,0.55)]">
                  Trace
                </span>
              </div>

              {/* Subtitle tag */}
              <p className="mt-4.5 font-mono text-[9px] md:text-xs tracking-[0.38em] text-indigo-300/40 uppercase">
                See how your code thinks
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

    </PageTransition>
  );
};
