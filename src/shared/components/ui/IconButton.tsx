import React from 'react';
import { Button } from './Button';

interface IconButtonProps extends React.ComponentProps<typeof Button> {
  icon: React.ReactNode;
  'aria-label': string;
}

export const IconButton = React.forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ icon, className = '', ...props }, ref) => {
    return (
      <Button
        ref={ref}
        className={`p-2 aspect-square flex items-center justify-center rounded-full ${className}`}
        {...props}
      >
        {icon}
      </Button>
    );
  }
);

IconButton.displayName = 'IconButton';
