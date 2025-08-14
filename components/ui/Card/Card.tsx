'use client';

import { forwardRef } from 'react';
import { CardProps, CardHeaderProps, CardContentProps, CardFooterProps } from './Card.types';

const Card = forwardRef<HTMLDivElement, CardProps>(
  ({
    children,
    className = '',
    variant = 'default',
    padding = 'md',
    onClick,
    hoverable = false,
    ...props
  }, ref) => {
    // Variant classes
    const variantClasses = {
      default: 'bg-background border border-current',
      bordered: 'bg-background border-2 border-current',
      elevated: 'bg-background border border-current shadow-[4px_4px_0px_0px_currentColor]'
    };

    // Padding classes
    const paddingClasses = {
      none: '',
      sm: 'p-3',
      md: 'p-4',
      lg: 'p-6'
    };

    // Base classes following theReactUI design principles
    const baseClasses = `
      ${variantClasses[variant]}
      ${paddingClasses[padding]}
      transition-all
      duration-200
      ${onClick || hoverable ? 'cursor-pointer' : ''}
      ${onClick || hoverable ? 'hover:shadow-[6px_6px_0px_0px_currentColor]' : ''}
      ${onClick || hoverable ? 'active:shadow-[2px_2px_0px_0px_currentColor]' : ''}
      ${onClick || hoverable ? 'active:translate-x-[2px] active:translate-y-[2px]' : ''}
    `.trim().replace(/\s+/g, ' ');

    const finalClassName = `${baseClasses} ${className}`;

    return (
      <div
        ref={ref}
        className={finalClassName}
        onClick={onClick}
        {...props}
      >
        {children}
      </div>
    );
  }
);

const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ children, className = '', ...props }, ref) => {
    const baseClasses = 'border-b border-current pb-3 mb-3';
    const finalClassName = `${baseClasses} ${className}`;

    return (
      <div
        ref={ref}
        className={finalClassName}
        {...props}
      >
        {children}
      </div>
    );
  }
);

const CardContent = forwardRef<HTMLDivElement, CardContentProps>(
  ({ children, className = '', ...props }, ref) => {
    const baseClasses = 'text-foreground';
    const finalClassName = `${baseClasses} ${className}`;

    return (
      <div
        ref={ref}
        className={finalClassName}
        {...props}
      >
        {children}
      </div>
    );
  }
);

const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ children, className = '', ...props }, ref) => {
    const baseClasses = 'border-t border-current pt-3 mt-3';
    const finalClassName = `${baseClasses} ${className}`;

    return (
      <div
        ref={ref}
        className={finalClassName}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = 'Card';
CardHeader.displayName = 'CardHeader';
CardContent.displayName = 'CardContent';
CardFooter.displayName = 'CardFooter';

export { Card, CardHeader, CardContent, CardFooter };
