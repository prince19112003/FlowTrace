import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  error?: boolean;
  errorMessage?: string;
  label?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', error, errorMessage, label, id, ...props }, ref) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;
    
    return (
      <div className="flex flex-col gap-1.5 w-full">
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-slate-300">
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`
            w-full bg-slate-800/50 border rounded-lg px-4 py-2 text-white placeholder-slate-500
            focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-slate-900 transition-shadow
            disabled:opacity-50 disabled:cursor-not-allowed
            ${error 
              ? 'border-red-500/50 focus:ring-red-500 focus:border-red-500' 
              : 'border-slate-700 focus:ring-blue-500 focus:border-blue-500'
            }
            ${className}
          `}
          aria-invalid={error ? 'true' : 'false'}
          {...props}
        />
        {error && errorMessage && (
          <span className="text-xs text-red-400 mt-1">{errorMessage}</span>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
