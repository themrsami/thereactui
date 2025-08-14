'use client';

import { forwardRef } from 'react';
import { BadgeProps } from './Badge.types';

const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({
    children,
    variant = 'default',
    size = 'md',
    className = '',
    outline = false,
    ...props
  }, ref) => {
    // Size classes
    const sizeClasses = {
      sm: 'text-xs px-2 py-0.5',
      md: 'text-sm px-2.5 py-1',
      lg: 'text-base px-3 py-1.5'
    };

    // Variant classes for filled badges
    const filledVariantClasses = {
      default: 'bg-foreground text-background border-foreground',
      primary: 'bg-foreground text-background border-foreground',
      secondary: 'bg-background text-foreground border-current',
      success: 'bg-foreground text-background border-foreground',
      warning: 'bg-foreground text-background border-foreground',
      error: 'bg-foreground text-background border-foreground'
    };

    // Variant classes for outline badges
    const outlineVariantClasses = {
      default: 'bg-background text-foreground border-current',
      primary: 'bg-background text-foreground border-current',
      secondary: 'bg-background text-foreground border-current',
      success: 'bg-background text-foreground border-current',
      warning: 'bg-background text-foreground border-current',
      error: 'bg-background text-foreground border-current'
    };

    // Choose variant classes based on outline prop
    const variantClasses = outline ? outlineVariantClasses : filledVariantClasses;

    // Base classes following theReactUI design principles
    const baseClasses = `
      inline-flex
      items-center
      justify-center
      font-medium
      border
      transition-colors
      duration-200
      ${sizeClasses[size]}
      ${variantClasses[variant]}
    `.trim().replace(/\s+/g, ' ');

    const finalClassName = `${baseClasses} ${className}`;

    return (
      <span
        ref={ref}
        className={finalClassName}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = 'Badge';

export { Badge };
