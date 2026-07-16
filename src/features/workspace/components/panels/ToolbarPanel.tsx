import React from 'react';
import { ArrowLeft, Layout, Settings2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@shared/components/ui/Button';

export const ToolbarPanel: React.FC = () => {
  const navigate = useNavigate();
  return (
    <header className="h-14 flex items-center justify-between px-4 bg-slate-900 border-b border-slate-800 shrink-0">
      <div className="flex items-center gap-4">
        <Button variant="ghost" size="sm" onClick={() => navigate(-1)} aria-label="Go back">
          <ArrowLeft className="w-4 h-4 mr-2" /> Back
        </Button>
      </div>
      <div className="flex items-center gap-2">
        <Button variant="ghost" size="sm" aria-label="Layout settings">
          <Layout className="w-4 h-4" />
        </Button>
        <Button variant="ghost" size="sm" aria-label="Settings" onClick={() => navigate('/settings')}>
          <Settings2 className="w-4 h-4" />
        </Button>
      </div>
    </header>
  );
};
