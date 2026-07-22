import React, { useState } from 'react';
import { CodeStepPanel } from './components/CodeStepPanel';
import { MemoryStage } from './components/MemoryStage';
import { StageControls } from './components/StageControls';
import { OutputConsole } from './components/OutputConsole';
import { ExplanationBar } from './components/ExplanationBar';
import { PenMenu } from './components/PenMenu';
import { CustomFlowchartStage } from './components/stages/CustomFlowchartStage';
import { useLesson } from '../../lessons/LessonContext';

export const VisualizerWorkspace: React.FC = () => {
  const { lesson, isFullScreen } = useLesson();
  const [isConsoleFullScreen, setIsConsoleFullScreen] = useState(false);
  
  const isFlowchartTopic = ['variables', 'type_casting', 'operators_expressions', 'user_input', 'data_types', 'if_statement', 'if_else', 'if_elif_else', 'match_case', 'switch_case', 'for_loop', 'while_loop', 'do_while_loop', 'nested_loop', 'loop_control', 'loops', 'functions', 'recursion', 'strings', 'lists', 'tuples', 'dictionaries', 'arrays', 'arrays_1d', 'arrays_2d', 'searching_sorting'].includes(lesson?.topic || '');

  if (isConsoleFullScreen) {
    return (
      <div className="flex h-screen w-screen overflow-hidden bg-[#050510] text-slate-200 relative p-1.5 gap-1.5">
        <StageControls />
        <div className="flex-1 h-full relative overflow-hidden flex flex-col">
          <OutputConsole isFullScreen={isConsoleFullScreen} onToggleFullScreen={() => setIsConsoleFullScreen(false)} />
        </div>
      </div>
    );
  }

  if (isFullScreen) {
    return (
      <div className="flex h-screen w-screen overflow-hidden bg-[#050510] text-slate-200 relative p-1.5 gap-1.5">
        <StageControls />
        <div className="flex-1 h-full relative overflow-hidden flex flex-col">
          {isFlowchartTopic ? <CustomFlowchartStage /> : <MemoryStage />}
        </div>
        <PenMenu />
      </div>
    );
  }

  return (
    <div className="flex flex-col h-screen w-screen overflow-hidden bg-[#050510] text-slate-200">

      {/* ── Main Content Area ── */}
      <div className="flex-1 flex gap-1.5 p-1.5 overflow-hidden bg-[#050510]">

        {/* Left: Code Panel (38%) */}
        <div className="w-[38%] flex flex-col gap-1.5 overflow-hidden shrink-0">
          <div className="h-[70%] overflow-hidden flex flex-col">
            <CodeStepPanel />
          </div>
          <div className="h-[30%] overflow-hidden flex flex-col">
            <ExplanationBar />
          </div>
        </div>

        {/* Center: Vertical Playback Controls */}
        <StageControls />

        {/* Right: Visualization Stage (Rest of the space) */}
        <div className="flex-1 flex flex-col gap-1.5 overflow-hidden relative">
          <div className="h-[70%] relative overflow-hidden flex flex-col">
            {isFlowchartTopic ? <CustomFlowchartStage /> : <MemoryStage />}
            <PenMenu />
          </div>
          <div className="h-[30%] overflow-hidden flex flex-col">
            <OutputConsole isFullScreen={isConsoleFullScreen} onToggleFullScreen={() => setIsConsoleFullScreen(!isConsoleFullScreen)} />
          </div>
        </div>
      </div>
    </div>
  );
};
