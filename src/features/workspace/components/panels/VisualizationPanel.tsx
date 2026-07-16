import React, { memo } from 'react';

export const VisualizationPanel: React.FC = memo(() => {
  return (
    <div className="flex-1 bg-transparent flex flex-col relative min-h-0">
      <div className="flex-1 flex items-center justify-center m-8 rounded-2xl relative overflow-hidden bg-slate-900/50 border border-white/5">
        <span className="text-slate-600 font-medium text-lg">Visualization Engine Placeholder</span>
      </div>
    </div>
  );
});
