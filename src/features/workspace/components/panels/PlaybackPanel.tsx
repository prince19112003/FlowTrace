import React from 'react';
import { Pause, FastForward, Rewind } from 'lucide-react';
import { Button } from '@shared/components/ui/Button';

export const PlaybackPanel: React.FC = () => {
  return (
    <div className="flex items-center justify-center gap-4 bg-slate-900 border-t border-slate-800 p-3 shrink-0">
      <Button variant="ghost" size="sm" className="w-10 h-10 p-0 flex items-center justify-center rounded-full"><Rewind className="w-5 h-5" /></Button>
      <Button variant="primary" size="md" className="rounded-full w-12 h-12 p-0 flex items-center justify-center shadow-lg shadow-blue-500/20">
        <Pause className="w-6 h-6 fill-current" />
      </Button>
      <Button variant="ghost" size="sm" className="w-10 h-10 p-0 flex items-center justify-center rounded-full"><FastForward className="w-5 h-5" /></Button>
    </div>
  );
};
