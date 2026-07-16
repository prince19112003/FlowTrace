import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Home } from 'lucide-react';
import { PageTransition } from '@shared/components/ui/PageTransition';
import { Button } from '@shared/components/ui/Button';

export const NotFoundPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <PageTransition className="items-center justify-center bg-slate-900 text-slate-100 p-6">
      <div className="flex flex-col items-center max-w-md text-center gap-6">
        <div className="w-20 h-20 bg-red-500/10 rounded-full flex items-center justify-center border border-red-500/20">
          <AlertTriangle className="w-10 h-10 text-red-400" />
        </div>
        
        <div className="space-y-2">
          <h1 className="text-4xl font-bold text-white">404</h1>
          <h2 className="text-xl font-semibold text-slate-300">Page Not Found</h2>
          <p className="text-slate-400">
            The visualization or topic you're looking for doesn't exist or has been moved.
          </p>
        </div>

        <Button 
          onClick={() => navigate('/languages', { replace: true })}
          className="mt-4"
        >
          <Home className="w-4 h-4 mr-2" /> Return to Home
        </Button>
      </div>
    </PageTransition>
  );
};
