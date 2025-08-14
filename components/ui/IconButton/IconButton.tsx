'use client';

import React, { forwardRef } from 'react';
import type { IconButtonProps } from './IconButton.types';

const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ 
    variant = 'secondary', 
    size = 'md', 
    loading = false,
    className = '',
    children,
    disabled,
    'aria-label': ariaLabel,
    ...props 
  }, ref) => {
    // Base styles - theReactUI principles: no border-radius, pure black/white
    const baseStyles = 'inline-flex items-center justify-center font-medium transition-transform duration-100 ease-in-out transform focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-current disabled:opacity-50 disabled:pointer-events-none active:translate-y-[1px] active:scale-[0.98]';
    
    // Variant styles - following theReactUI design: borders only, no backgrounds
    const variantStyles = {
      primary: 'bg-foreground text-background border border-foreground hover:bg-background hover:text-foreground',
      secondary: 'bg-transparent text-foreground border border-foreground hover:bg-foreground hover:text-background',
      ghost: 'bg-transparent text-foreground border-none hover:bg-foreground hover:text-background',
    } as const;
    
    // Size styles - square aspect ratio for icons
    const sizeStyles = {
      sm: 'h-8 w-8 text-sm',
      md: 'h-10 w-10 text-base',
      lg: 'h-12 w-12 text-lg',
    } as const;
    
    const combinedClassName = [
      baseStyles,
      variantStyles[variant as keyof typeof variantStyles],
      sizeStyles[size as keyof typeof sizeStyles],
      className,
    ].join(' ');

    return (
      <button
        ref={ref}
        className={combinedClassName}
        disabled={disabled || loading}
        aria-label={ariaLabel}
        {...props}
      >
        {loading ? (
          <span className={`h-3 w-3 animate-spin border ${
            variant === 'primary' 
              ? 'border-background border-t-transparent' 
              : 'border-current border-t-transparent'
          }`} />
        ) : (
          children
        )}
      </button>
    );
  }
);

IconButton.displayName = 'IconButton';

export { IconButton };
