import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Sparkles, Lock } from 'lucide-react';
import { PageTransition } from '@shared/components/ui/PageTransition';

/* =========================================================
   LANGUAGE DATA
   ========================================================= */
const languages = [
  {
    id: 'python',
    name: 'Python',
    enabled: true,
    creator: 'Guido van Rossum',
    year: '1991',
    tagline: 'Simple. Powerful. Visual.',
    topics: 16,
    programs: 100,
    accentColor: '#3b82f6',
    accentGlow: 'rgba(59,130,246,0.18)',
    accentBorder: 'rgba(59,130,246,0.30)',
    bgGradient: 'radial-gradient(ellipse at top right, rgba(59,130,246,0.12) 0%, transparent 60%)',
    Icon: () => (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M23.6 4C17.0 4 17.4 6.8 17.4 6.8L17.4 9.7H24.1V11H10.5C10.5 11 4 11.6 4 18.3C4 24.9 9.7 24.7 9.7 24.7H13.3V21.7C13.3 21.7 13.2 16 18.7 16H25.4C25.4 16 30.5 15.7 30.5 11V6.5C30.5 6.5 30.8 4 23.6 4Z" fill="#3776AB"/>
        <path d="M24.4 44C30.9 44 30.6 41.2 30.6 41.2L30.6 38.3H23.9V37H37.5C37.5 37 44 36.4 44 29.7C44 23.1 38.3 23.3 38.3 23.3H34.7V26.3C34.7 26.3 34.8 32 29.3 32H22.6C22.6 32 17.5 32.3 17.5 37V41.5C17.5 41.5 17.2 44 24.4 44Z" fill="#FFD43B"/>
        <circle cx="20" cy="7.5" r="1.5" fill="#FFD43B"/>
        <circle cx="28" cy="40.5" r="1.5" fill="#3776AB"/>
      </svg>
    ),
  },
  {
    id: 'java',
    name: 'Java',
    enabled: true,
    creator: 'James Gosling',
    year: '1995',
    tagline: 'Write once, run anywhere.',
    topics: 5,
    programs: 5,
    accentColor: '#f97316',
    accentGlow: 'rgba(249,115,22,0.18)',
    accentBorder: 'rgba(249,115,22,0.30)',
    bgGradient: 'radial-gradient(ellipse at top right, rgba(249,115,22,0.12) 0%, transparent 60%)',
    Icon: () => (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M19 38.5c-1 0-1.5-.4-1.5-.4s1.3.8 7.5.8c6.2 0 8.5-2 8.5-2s-1.2.8-5 1.2c-3.8.4-7.5 0-7.5 0L19 38.5z" fill="#5382A1"/>
        <path d="M24 4c-5.5 0-10 4.5-10 10s4.5 10 10 10 10-4.5 10-10S29.5 4 24 4zm0 18c-4.4 0-8-3.6-8-8s3.6-8 8-8 8 3.6 8 8-3.6 8-8 8z" fill="#E76F00"/>
        <path d="M24 8v8l4 4" stroke="#E76F00" strokeWidth="2" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'c',
    name: 'C',
    enabled: true,
    creator: 'Dennis Ritchie',
    year: '1972',
    tagline: 'The foundation of all systems.',
    topics: 5,
    programs: 7,
    accentColor: '#38bdf8',
    accentGlow: 'rgba(56,189,248,0.18)',
    accentBorder: 'rgba(56,189,248,0.30)',
    bgGradient: 'radial-gradient(ellipse at top right, rgba(56,189,248,0.12) 0%, transparent 60%)',
    Icon: () => (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M36 14C33.5 9.5 29 7 24 7C16.8 7 11 12.8 11 20C11 27.2 16.8 33 24 33C29 33 33.5 30.5 36 26" stroke="#0284c7" strokeWidth="4" strokeLinecap="round"/>
        <text x="20" y="25" fontFamily="monospace" fontSize="10" fill="#0284c7" fontWeight="bold">C</text>
      </svg>
    ),
  },
  {
    id: 'cpp',
    name: 'C++',
    enabled: true,
    creator: 'Bjarne Stroustrup',
    year: '1985',
    tagline: 'Power meets performance.',
    topics: 5,
    programs: 5,
    accentColor: '#818cf8',
    accentGlow: 'rgba(129,140,248,0.18)',
    accentBorder: 'rgba(129,140,248,0.30)',
    bgGradient: 'radial-gradient(ellipse at top right, rgba(129,140,248,0.12) 0%, transparent 60%)',
    Icon: () => (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <path d="M30 11C27.5 8.5 24 7 20 7C13.4 7 8 12.4 8 19C8 25.6 13.4 31 20 31C24 31 27.5 29.5 30 27" stroke="#6366f1" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M34 16V24M30 20H38" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round"/>
        <path d="M42 16V24M38 20H46" stroke="#6366f1" strokeWidth="2.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    id: 'javascript',
    name: 'JavaScript',
    enabled: false,
    creator: 'Brendan Eich',
    year: '1995',
    tagline: 'The language of the web.',
    topics: 0,
    programs: 0,
    accentColor: '#eab308',
    accentGlow: 'rgba(234,179,8,0.12)',
    accentBorder: 'rgba(234,179,8,0.20)',
    bgGradient: 'none',
    Icon: () => (
      <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
        <rect x="4" y="4" width="40" height="40" rx="6" fill="#F7DF1E"/>
        <path d="M26 32c0 3.5 2 5 5 5s5-2 5-6V16h-4v15c0 1.5-.5 2-1.5 2s-1.5-.5-1.5-2L26 32z" fill="#323330"/>
        <path d="M14 32.5c.5 2.5 2.5 4 5.5 4 3 0 5-1.5 5-4.5S22.5 28 20 27c-1.5-.5-2-1-2-2s.5-1.5 1.5-1.5 1.5.5 2 1.5l3-1c-1-2.5-2.5-3.5-5-3.5-3 0-5 1.5-5 4.5 0 2.5 1.5 3.5 4 4.5 1.5.5 2 1 2 2 0 .5-.5 1.5-1.5 1.5S16 32 15.5 31L14 32.5z" fill="#323330"/>
      </svg>
    ),
  },
];

/* =========================================================
   PAGE
   ========================================================= */
export const LanguageSelectionPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageTransition className="flex flex-col flex-1 overflow-y-auto w-full">
      <div className="flex flex-col items-center py-10 md:py-16 px-4 min-h-full">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12 md:mb-16"
        >
          <div
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold mb-5"
            style={{
              color: '#6366f1',
              background: 'rgba(99,102,241,0.08)',
              border: '1px solid rgba(99,102,241,0.2)',
            }}
          >
            <Sparkles className="w-3.5 h-3.5" />
            Animation-First Learning
          </div>
          <h1
            className="text-3xl md:text-5xl font-black mb-3 tracking-tight"
            style={{ color: '#f0f2f8', fontFamily: "'Inter', sans-serif", letterSpacing: '-1.5px' }}
          >
            Choose a Language
          </h1>
          <p className="text-base" style={{ color: '#8b92a8' }}>
            Select a programming language to begin learning through interactive visualizations.
          </p>
        </motion.div>

        {/* Language Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6 max-w-5xl w-full mx-auto pb-12">
          {languages.map((lang, index) => {
            const Icon = lang.Icon;
            return (
              <motion.div
                key={lang.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.06, ease: 'easeOut' }}
              >
                <div
                  role={lang.enabled ? 'button' : 'region'}
                  tabIndex={lang.enabled ? 0 : -1}
                  aria-label={lang.enabled ? `Select ${lang.name}` : `${lang.name} — Coming Soon`}
                  onClick={() => lang.enabled && navigate(`/topics/${lang.id}`)}
                  onKeyDown={e => { if (lang.enabled && (e.key === 'Enter' || e.key === ' ')) navigate(`/topics/${lang.id}`); }}
                  className="relative flex flex-col overflow-hidden rounded-2xl transition-all duration-200 min-h-[260px] p-6"
                  style={{
                    background: 'rgba(15, 17, 23, 0.65)',
                    border: `1px solid ${lang.enabled ? lang.accentBorder : 'rgba(255,255,255,0.05)'}`,
                    cursor: lang.enabled ? 'pointer' : 'default',
                    opacity: lang.enabled ? 1 : 0.5,
                    backdropFilter: 'blur(12px)',
                    WebkitBackdropFilter: 'blur(12px)',
                    boxShadow: lang.enabled ? `0 4px 24px ${lang.accentGlow}` : 'none',
                  }}
                  onMouseEnter={e => {
                    if (!lang.enabled) return;
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = 'translateY(-3px)';
                    el.style.boxShadow = `0 0 0 1px ${lang.accentBorder}, 0 12px 40px ${lang.accentGlow}`;
                    el.style.borderColor = lang.accentColor + '60';
                  }}
                  onMouseLeave={e => {
                    if (!lang.enabled) return;
                    const el = e.currentTarget as HTMLElement;
                    el.style.transform = 'translateY(0)';
                    el.style.boxShadow = `0 4px 24px ${lang.accentGlow}`;
                    el.style.borderColor = lang.accentBorder;
                  }}
                >
                  {/* Background glow */}
                  {lang.enabled && (
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{ background: lang.bgGradient }}
                    />
                  )}

                  {/* Top row: Icon + Badge */}
                  <div className="relative flex justify-between items-start mb-6">
                    <div
                      className="w-14 h-14 rounded-2xl p-2.5 flex items-center justify-center"
                      style={{
                        background: lang.enabled ? `${lang.accentGlow}` : 'rgba(255,255,255,0.04)',
                        border: `1px solid ${lang.enabled ? lang.accentBorder : 'rgba(255,255,255,0.06)'}`,
                        filter: lang.enabled ? 'none' : 'grayscale(1)',
                      }}
                    >
                      <Icon />
                    </div>

                    {lang.enabled ? (
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full flex items-center gap-1"
                        style={{ color: '#22c55e', background: 'rgba(34,197,94,0.08)', border: '1px solid rgba(34,197,94,0.25)' }}
                      >
                        <span className="w-1.5 h-1.5 rounded-full bg-current animate-pulse" />
                        Available
                      </span>
                    ) : (
                      <span
                        className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full flex items-center gap-1"
                        style={{ color: '#525870', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.06)' }}
                      >
                        <Lock className="w-3 h-3" />
                        Soon
                      </span>
                    )}
                  </div>

                  {/* Language Info */}
                  <div className="relative mt-auto">
                    <h2
                      className="text-2xl font-black mb-1 tracking-tight"
                      style={{ color: lang.enabled ? '#f0f2f8' : '#525870', letterSpacing: '-0.5px' }}
                    >
                      {lang.name}
                    </h2>
                    <p className="text-xs mb-4" style={{ color: lang.enabled ? '#8b92a8' : '#373a4f' }}>
                      {lang.tagline}
                    </p>

                    {/* Stats row for enabled languages */}
                    {lang.enabled && (
                      <div className="flex gap-3 mb-4">
                        <div
                          className="text-xs px-2.5 py-1 rounded-lg font-mono font-medium"
                          style={{ color: lang.accentColor, background: `${lang.accentGlow}`, border: `1px solid ${lang.accentBorder}` }}
                        >
                          {lang.topics} Topics
                        </div>
                        <div
                          className="text-xs px-2.5 py-1 rounded-lg font-mono font-medium"
                          style={{ color: lang.accentColor, background: `${lang.accentGlow}`, border: `1px solid ${lang.accentBorder}` }}
                        >
                          {lang.programs} Programs
                        </div>
                      </div>
                    )}

                    {/* Meta */}
                    <div
                      className="text-xs font-mono border-t pt-3"
                      style={{ color: '#525870', borderColor: 'rgba(255,255,255,0.05)' }}
                    >
                      <span style={{ color: '#373a4f' }}>By </span>
                      <span style={{ color: lang.enabled ? '#8b92a8' : '#373a4f' }}>{lang.creator}</span>
                      <span className="mx-1.5" style={{ color: '#373a4f' }}>·</span>
                      <span style={{ color: lang.enabled ? '#8b92a8' : '#373a4f' }}>{lang.year}</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </PageTransition>
  );
};
