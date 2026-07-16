import React, { Suspense } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { PageTransition } from '@shared/components/ui/PageTransition';

// Lazy load panels to ensure workspace remains lightweight initially
const CodePanel = React.lazy(() => import('./panels/CodePanel').then(m => ({ default: m.CodePanel })));
const VisualizationPanel = React.lazy(() => import('./panels/VisualizationPanel').then(m => ({ default: m.VisualizationPanel })));
const ExplanationPanel = React.lazy(() => import('./panels/ExplanationPanel').then(m => ({ default: m.ExplanationPanel })));
const OutputPanel = React.lazy(() => import('./panels/OutputPanel').then(m => ({ default: m.OutputPanel })));
const TimelinePanel = React.lazy(() => import('./panels/TimelinePanel').then(m => ({ default: m.TimelinePanel })));
const PlaybackPanel = React.lazy(() => import('./panels/PlaybackPanel').then(m => ({ default: m.PlaybackPanel })));
const FloatingToolsPanel = React.lazy(() => import('./panels/FloatingToolsPanel').then(m => ({ default: m.FloatingToolsPanel })));

const FallbackLoader = () => <div className="w-full h-full bg-slate-900 animate-pulse" />;

export const WorkspaceLayout: React.FC = () => {
  const navigate = useNavigate();
  
  return (
    <PageTransition className="flex flex-col h-screen w-screen overflow-hidden bg-slate-950 text-slate-200 font-sans">
      
      {/* Clean Minimalist Header */}
      <div className="h-12 flex items-center px-4 shrink-0 z-10 relative bg-slate-950/80 backdrop-blur-sm border-b border-white/5">
        <button 
          onClick={() => navigate(-1)}
          className="flex items-center gap-2 text-slate-400 hover:text-white transition-colors text-sm font-medium"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>Exit Lesson</span>
        </button>
      </div>

      {/* Main Pedagogy Layout: 2 Columns */}
      <div className="flex-1 flex flex-col lg:flex-row overflow-hidden relative">
        
        {/* Left Column: Visualization Workspace (Primary Focus - 60-70% width) */}
        <div className="flex-[1.8] flex flex-col relative overflow-hidden min-w-0">
          <Suspense fallback={null}>
            <FloatingToolsPanel />
          </Suspense>

          <div className="flex-1 relative overflow-hidden flex flex-col">
            <Suspense fallback={<FallbackLoader />}>
              <VisualizationPanel />
            </Suspense>
          </div>
          
          <div className="flex flex-col shrink-0">
            <Suspense fallback={<FallbackLoader />}>
              <TimelinePanel />
              <PlaybackPanel />
            </Suspense>
          </div>
        </div>

        {/* Right Column: Learning Context (Code -> Explanation -> Output) */}
        <div className="flex-1 lg:max-w-[450px] flex flex-col border-l border-white/5 overflow-hidden shrink-0 bg-slate-900/20">
          
          {/* 1. Code Panel (Top) */}
          <div className="flex-[1.5] overflow-hidden flex flex-col">
            <Suspense fallback={<FallbackLoader />}>
              <CodePanel />
            </Suspense>
          </div>

          {/* 2. Explanation Panel (Middle) */}
          <div className="flex-1 min-h-[200px] border-t border-white/5 overflow-hidden flex flex-col">
            <Suspense fallback={<FallbackLoader />}>
              <ExplanationPanel />
            </Suspense>
          </div>

          {/* 3. Output Panel (Bottom) */}
          <div className="h-40 border-t border-white/5 shrink-0 overflow-hidden flex flex-col">
            <Suspense fallback={<FallbackLoader />}>
              <OutputPanel />
            </Suspense>
          </div>
          
        </div>

      </div>
    </PageTransition>
  );
};
