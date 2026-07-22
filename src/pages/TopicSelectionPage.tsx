import React, { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { BookOpen, BarChart2, Layers } from 'lucide-react';
import { PageTransition } from '@shared/components/ui/PageTransition';
import { motion } from 'motion/react';

/* =========================================================
   TOPIC DATA with category color accents
   ========================================================= */
const pythonTopics = [
  {
    id: 'variables', number: '01', name: 'Variables', subtitle: 'Store & Manipulate Data',
    programsCount: 13, difficulty: 'Beginner' as const, category: 'basics',
    accentColor: '#6366f1',
  },
  {
    id: 'if_statement', number: '02', name: 'If Statement', subtitle: 'Single Condition Decisions',
    programsCount: 5, difficulty: 'Beginner' as const, category: 'basics',
    accentColor: '#6366f1',
  },
  {
    id: 'if_else', number: '03', name: 'If Else', subtitle: 'Two-Path Decisions',
    programsCount: 5, difficulty: 'Beginner' as const, category: 'basics',
    accentColor: '#6366f1',
  },
  {
    id: 'if_elif_else', number: '04', name: 'If Elif Else', subtitle: 'Multi-Condition Decisions',
    programsCount: 5, difficulty: 'Beginner' as const, category: 'basics',
    accentColor: '#6366f1',
  },
  {
    id: 'match_case', number: '05', name: 'Match Case', subtitle: 'Pattern Matching',
    programsCount: 3, difficulty: 'Beginner' as const, category: 'basics',
    accentColor: '#6366f1',
  },
  {
    id: 'for_loop', number: '06', name: 'For Loop', subtitle: 'Counted Repetition',
    programsCount: 6, difficulty: 'Intermediate' as const, category: 'loops',
    accentColor: '#06b6d4',
  },
  {
    id: 'while_loop', number: '07', name: 'While Loop', subtitle: 'Conditional Repetition',
    programsCount: 10, difficulty: 'Intermediate' as const, category: 'loops',
    accentColor: '#06b6d4',
  },
  {
    id: 'nested_loop', number: '08', name: 'Nested Loop', subtitle: 'Loops Inside Loops',
    programsCount: 6, difficulty: 'Intermediate' as const, category: 'loops',
    accentColor: '#06b6d4',
  },
  {
    id: 'loop_control', number: '09', name: 'Loop Control', subtitle: 'Break & Continue',
    programsCount: 4, difficulty: 'Intermediate' as const, category: 'loops',
    accentColor: '#06b6d4',
  },
  {
    id: 'functions', number: '10', name: 'Functions', subtitle: 'Reusable Logic Blocks',
    programsCount: 11, difficulty: 'Intermediate' as const, category: 'functions',
    accentColor: '#8b5cf6',
  },
  {
    id: 'recursion', number: '11', name: 'Recursion', subtitle: 'Self-Calling Functions',
    programsCount: 5, difficulty: 'Advanced' as const, category: 'functions',
    accentColor: '#8b5cf6',
  },
  {
    id: 'strings', number: '12', name: 'Strings', subtitle: 'Text Processing',
    programsCount: 10, difficulty: 'Intermediate' as const, category: 'data',
    accentColor: '#f59e0b',
  },
  {
    id: 'lists', number: '13', name: 'Lists', subtitle: 'Ordered Collections',
    programsCount: 6, difficulty: 'Intermediate' as const, category: 'data',
    accentColor: '#f59e0b',
  },
  {
    id: 'tuples', number: '14', name: 'Tuples', subtitle: 'Immutable Collections',
    programsCount: 3, difficulty: 'Intermediate' as const, category: 'data',
    accentColor: '#f59e0b',
  },
  {
    id: 'dictionaries', number: '15', name: 'Dictionaries', subtitle: 'Key-Value Maps',
    programsCount: 3, difficulty: 'Intermediate' as const, category: 'data',
    accentColor: '#f59e0b',
  },
  {
    id: 'searching_sorting', number: '16', name: 'Searching & Sorting', subtitle: 'Classic Algorithms',
    programsCount: 5, difficulty: 'Advanced' as const, category: 'algo',
    accentColor: '#ec4899',
  },
];

const cTopics = [
  { id: 'data_types', number: '01', name: 'Data Types & Variables', subtitle: 'int, float, double, char memory allocation', programsCount: 3, difficulty: 'Beginner' as const, category: 'basics', accentColor: '#38bdf8' },
  { id: 'if_else', number: '02', name: 'If Else & Conditionals', subtitle: 'Conditional Branching Execution', programsCount: 1, difficulty: 'Beginner' as const, category: 'basics', accentColor: '#6366f1' },
  { id: 'loops', number: '03', name: 'Loops (For Loop)', subtitle: 'Counted Loop Repetition', programsCount: 1, difficulty: 'Intermediate' as const, category: 'loops', accentColor: '#06b6d4' },
  { id: 'functions', number: '04', name: 'Functions', subtitle: 'Call Stack & Return Values', programsCount: 1, difficulty: 'Intermediate' as const, category: 'functions', accentColor: '#8b5cf6' },
  { id: 'arrays', number: '05', name: '1D Arrays', subtitle: 'Contiguous Memory & Indexing', programsCount: 1, difficulty: 'Intermediate' as const, category: 'data', accentColor: '#f59e0b' },
];

const cppTopics = [
  { id: 'data_types', number: '01', name: 'Data Types & Variables', subtitle: 'int, double, bool strongly typed memory', programsCount: 1, difficulty: 'Beginner' as const, category: 'basics', accentColor: '#818cf8' },
  { id: 'if_else', number: '02', name: 'If Else Conditionals', subtitle: 'Logic Branching Execution', programsCount: 1, difficulty: 'Beginner' as const, category: 'basics', accentColor: '#6366f1' },
  { id: 'loops', number: '03', name: 'While Loops', subtitle: 'Conditional Repetition', programsCount: 1, difficulty: 'Intermediate' as const, category: 'loops', accentColor: '#06b6d4' },
  { id: 'functions', number: '04', name: 'Functions', subtitle: 'Parameters & Return Values', programsCount: 1, difficulty: 'Intermediate' as const, category: 'functions', accentColor: '#8b5cf6' },
  { id: 'arrays', number: '05', name: '1D Arrays', subtitle: 'Memory & Element Comparisons', programsCount: 1, difficulty: 'Intermediate' as const, category: 'data', accentColor: '#f59e0b' },
];

const javaTopics = [
  { id: 'variables', number: '01', name: 'Variables & Memory', subtitle: 'Primitives (int, double, char, boolean) & Swapping', programsCount: 3, difficulty: 'Beginner' as const, category: 'basics', accentColor: '#f97316' },
  { id: 'type_casting', number: '02', name: 'Type Casting & Conversion', subtitle: 'Implicit Widening & Explicit Narrowing Casting', programsCount: 2, difficulty: 'Beginner' as const, category: 'basics', accentColor: '#eab308' },
  { id: 'operators_expressions', number: '03', name: 'Operators & Expressions', subtitle: 'Temperature, Circle Geometry & Simple Interest Formulas', programsCount: 3, difficulty: 'Beginner' as const, category: 'basics', accentColor: '#10b981' },
  { id: 'user_input', number: '04', name: 'User Input (Scanner Class)', subtitle: 'Read Console Inputs with sc.nextInt(), sc.nextDouble() & nextLine()', programsCount: 3, difficulty: 'Beginner' as const, category: 'basics', accentColor: '#14b8a6' },
  { id: 'if_else', number: '05', name: 'If Else Conditionals', subtitle: 'Even/Odd, Largest of 3, Leap Year & Vowel Check', programsCount: 4, difficulty: 'Beginner' as const, category: 'basics', accentColor: '#6366f1' },
  { id: 'if_elif_else', number: '06', name: 'If Else If Ladder', subtitle: 'Grade System, Tax Slab, Positive/Negative, BMI & Bills', programsCount: 5, difficulty: 'Beginner' as const, category: 'basics', accentColor: '#4f46e5' },
  { id: 'switch_case', number: '07', name: 'Switch Case Selection', subtitle: 'Day of Week, Vowel Check, Calculator & Seasons', programsCount: 5, difficulty: 'Beginner' as const, category: 'basics', accentColor: '#ec4899' },
  { id: 'for_loop', number: '08', name: 'For Loop Iteration', subtitle: 'Sum, Table, Fibonacci, Even Numbers & Power (base^exp)', programsCount: 5, difficulty: 'Intermediate' as const, category: 'loops', accentColor: '#06b6d4' },
  { id: 'while_loop', number: '09', name: 'While Loop Iteration', subtitle: 'Sum of Digits, Factorial, Reverse, Prime & Palindrome', programsCount: 5, difficulty: 'Intermediate' as const, category: 'loops', accentColor: '#0891b2' },
  { id: 'do_while_loop', number: '10', name: 'Do-While Loop', subtitle: 'Exit-controlled Guaranteed Run & Accumulator Loop', programsCount: 2, difficulty: 'Intermediate' as const, category: 'loops', accentColor: '#0284c7' },
  { id: 'strings', number: '11', name: 'Strings & Character Encoding', subtitle: 'Char to ASCII Code & String Concatenation Length', programsCount: 2, difficulty: 'Intermediate' as const, category: 'data', accentColor: '#8b5cf6' },
  { id: 'arrays_1d', number: '12', name: '1D Arrays', subtitle: 'Array Sum/Max/Min, Linear Search & In-place Reverse', programsCount: 4, difficulty: 'Intermediate' as const, category: 'data', accentColor: '#f59e0b' },
  { id: 'arrays_2d', number: '13', name: '2D Arrays & Matrices', subtitle: '2D Matrix Traversal, Primary Diagonal Sum & Transpose', programsCount: 3, difficulty: 'Intermediate' as const, category: 'data', accentColor: '#d97706' },
];

const difficultyConfig = {
  Beginner:     { color: '#22c55e', bg: 'rgba(34,197,94,0.08)',   border: 'rgba(34,197,94,0.22)' },
  Intermediate: { color: '#f59e0b', bg: 'rgba(245,158,11,0.08)',  border: 'rgba(245,158,11,0.22)' },
  Advanced:     { color: '#ef4444', bg: 'rgba(239,68,68,0.08)',   border: 'rgba(239,68,68,0.22)' },
};

/* =========================================================
   PAGE
   ========================================================= */
export const TopicSelectionPage: React.FC = () => {
  const navigate = useNavigate();
  const { languageId } = useParams();

  const topics = useMemo(() => {
    if (languageId === 'c') return cTopics;
    if (languageId === 'cpp') return cppTopics;
    if (languageId === 'java') return javaTopics;
    return pythonTopics;
  }, [languageId]);

  const totalPrograms = useMemo(() => topics.reduce((s, t) => s + t.programsCount, 0), [topics]);
  const langDisplay = languageId
    ? (languageId === 'cpp' ? 'C++' : languageId.charAt(0).toUpperCase() + languageId.slice(1))
    : 'Python';

  return (
    <PageTransition className="flex flex-col flex-1 overflow-y-auto w-full">
      <div className="flex flex-col py-10 md:py-14 px-4 max-w-6xl mx-auto w-full min-h-full">

        {/* Page Header */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="mb-10"
        >
          <h1
            className="text-3xl md:text-4xl font-black mb-2 tracking-tight"
            style={{ color: '#f0f2f8', letterSpacing: '-1px' }}
          >
            {langDisplay} Topics
          </h1>
          <p style={{ color: '#8b92a8', fontSize: '15px' }}>
            Select a topic to start learning through step-by-step visual execution.
          </p>
        </motion.div>

        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="flex gap-3 mb-8 flex-wrap"
        >
          {[
            { icon: Layers, label: `${topics.length} Topics`, color: '#6366f1' },
            { icon: BookOpen, label: `${totalPrograms} Programs`, color: '#8b5cf6' },
            { icon: BarChart2, label: '3 Difficulty Levels', color: '#06b6d4' },
          ].map(stat => (
            <div
              key={stat.label}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-medium"
              style={{
                color: stat.color,
                background: `${stat.color}10`,
                border: `1px solid ${stat.color}25`,
              }}
            >
              <stat.icon className="w-4 h-4" />
              {stat.label}
            </div>
          ))}
        </motion.div>

        {/* Topic Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 pb-12">
          {topics.map((topic, index) => {
            const diff = difficultyConfig[topic.difficulty];
            return (
              <motion.div
                key={topic.id}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: index * 0.04, ease: 'easeOut' }}
              >
                <div
                  role="button"
                  tabIndex={0}
                  aria-label={`Select topic ${topic.name}`}
                  onClick={() => navigate(`/topics/${languageId}/programs/${topic.id}`)}
                  onKeyDown={e => { if (e.key === 'Enter' || e.key === ' ') navigate(`/topics/${languageId}/programs/${topic.id}`); }}
                  className="relative flex flex-col overflow-hidden rounded-xl p-5 min-h-[190px] transition-all duration-200 group"
                  style={{
                    background: 'rgba(15, 17, 23, 0.70)',
                    border: '1px solid rgba(255,255,255,0.06)',
                    cursor: 'pointer',
                    backdropFilter: 'blur(10px)',
                    WebkitBackdropFilter: 'blur(10px)',
                  }}
                  onMouseEnter={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = 'rgba(22, 24, 34, 0.88)';
                    el.style.borderColor = `${topic.accentColor}35`;
                    el.style.transform = 'translateY(-2px)';
                    el.style.boxShadow = `0 0 0 1px ${topic.accentColor}25, 0 8px 32px rgba(0,0,0,0.5)`;
                    // Show accent bar
                    const bar = el.querySelector('.accent-bar') as HTMLElement;
                    if (bar) bar.style.opacity = '1';
                    const num = el.querySelector('.chapter-num') as HTMLElement;
                    if (num) num.style.color = `${topic.accentColor}30`;
                  }}
                  onMouseLeave={e => {
                    const el = e.currentTarget as HTMLElement;
                    el.style.background = 'rgba(15, 17, 23, 0.70)';
                    el.style.borderColor = 'rgba(255,255,255,0.06)';
                    el.style.transform = 'translateY(0)';
                    el.style.boxShadow = 'none';
                    const bar = el.querySelector('.accent-bar') as HTMLElement;
                    if (bar) bar.style.opacity = '0';
                    const num = el.querySelector('.chapter-num') as HTMLElement;
                    if (num) num.style.color = 'rgba(255,255,255,0.06)';
                  }}
                >
                  {/* Left accent bar */}
                  <div
                    className="accent-bar absolute left-0 top-2 bottom-2 w-[3px] rounded-r-full transition-opacity duration-200"
                    style={{ background: topic.accentColor, opacity: 0 }}
                  />

                  {/* Top row: chapter number + difficulty badge */}
                  <div className="flex justify-between items-start mb-4">
                    <span
                      className="chapter-num font-black transition-colors duration-200"
                      style={{
                        fontSize: '52px',
                        lineHeight: 1,
                        color: 'rgba(255,255,255,0.06)',
                        fontFamily: "'JetBrains Mono', monospace",
                      }}
                    >
                      {topic.number}
                    </span>
                    <span
                      className="text-[10px] font-bold uppercase tracking-widest px-2.5 py-1 rounded-full shrink-0 mt-1"
                      style={{ color: diff.color, background: diff.bg, border: `1px solid ${diff.border}` }}
                    >
                      {topic.difficulty}
                    </span>
                  </div>

                  {/* Topic name + subtitle */}
                  <div className="mt-auto">
                    <h2
                      className="font-black mb-1.5 leading-tight tracking-tight"
                      style={{ color: '#f0f2f8', fontSize: '20px', letterSpacing: '-0.4px' }}
                    >
                      {topic.name}
                    </h2>
                    <p className="text-xs mb-4" style={{ color: '#8b92a8' }}>
                      {topic.subtitle}
                    </p>

                    {/* Programs count */}
                    <div
                      className="flex items-center gap-1.5 text-xs font-medium"
                      style={{ color: '#525870' }}
                    >
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{topic.programsCount} Programs</span>
                      <span className="ml-auto text-[10px] font-mono px-2 py-0.5 rounded"
                        style={{ color: topic.accentColor, background: `${topic.accentColor}10` }}>
                        {topic.category.toUpperCase()}
                      </span>
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
