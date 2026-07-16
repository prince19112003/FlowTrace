import React from 'react';

export const LessonInfoPanel: React.FC = () => {
  return (
    <div className="h-10 bg-slate-800 flex items-center px-4 border-b border-slate-700 shrink-0">
      <div className="flex items-center gap-3 text-sm">
        <span className="bg-blue-500/10 text-blue-400 border border-blue-500/20 px-2 py-0.5 rounded font-medium text-xs uppercase">Python</span>
        <span className="text-slate-500">•</span>
        <span className="text-slate-300 font-bold">Variable Assignment</span>
        <span className="text-slate-500">•</span>
        <span className="text-slate-400 font-mono text-xs">variable_assignment.py</span>
      </div>
    </div>
  );
};
