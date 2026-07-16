import React from 'react';

export const TimelinePanel: React.FC = () => {
  return (
    <div className="w-full bg-slate-900 border-t border-slate-800 p-2 flex items-center shrink-0">
      <div className="flex-1 relative h-2 bg-slate-800 rounded-full flex items-center mx-4">
        <div className="absolute left-0 top-0 bottom-0 w-0 bg-blue-500 rounded-full" />
      </div>
      <div className="text-slate-400 text-xs font-mono w-24 text-right">00:00 / 00:00</div>
    </div>
  );
};
