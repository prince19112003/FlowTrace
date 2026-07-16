import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbItem {
  label: string;
  path: string;
}

export const Breadcrumb: React.FC = () => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  // Generate dynamic breadcrumb array
  const breadcrumbs: BreadcrumbItem[] = pathnames.map((value, index) => {
    const path = `/${pathnames.slice(0, index + 1).join('/')}`;
    // Simple formatting: capitalize and decode URI components
    const label = decodeURIComponent(value.charAt(0).toUpperCase() + value.slice(1));
    return { label, path };
  });

  if (breadcrumbs.length === 0) return null;

  return (
    <nav aria-label="Breadcrumb" className="flex items-center space-x-1 text-sm text-slate-400">
      <Link 
        to="/languages" 
        className="flex items-center hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
        aria-label="Home"
      >
        <Home className="w-4 h-4" />
      </Link>
      
      {breadcrumbs.map((crumb, index) => {
        const isLast = index === breadcrumbs.length - 1;
        
        return (
          <div key={crumb.path} className="flex items-center space-x-1">
            <ChevronRight className="w-4 h-4 text-slate-600 shrink-0" />
            {isLast ? (
              <span className="font-medium text-slate-200 cursor-default px-1" aria-current="page">
                {crumb.label}
              </span>
            ) : (
              <Link 
                to={crumb.path} 
                className="hover:text-white transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 rounded px-1"
              >
                {crumb.label}
              </Link>
            )}
          </div>
        );
      })}
    </nav>
  );
};
