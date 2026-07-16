import React from 'react';
import { Maximize, Settings } from 'lucide-react';

export const FloatingToolsPanel: React.FC = () => {
  return (
    <div className="absolute right-4 top-4 z-20 flex flex-col gap-2">
      <div className="bg-slate-900/80 backdrop-blur border border-slate-800 rounded-lg p-2 flex flex-col gap-2 shadow-xl shadow-black/50">
        <button className="w-8 h-8 text-slate-400 hover:text-white bg-slate-800 rounded flex items-center justify-center transition-colors">
          <Maximize className="w-4 h-4" />
        </button>
        <button className="w-8 h-8 text-slate-400 hover:text-white bg-slate-800 rounded flex items-center justify-center transition-colors">
          <Settings className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
