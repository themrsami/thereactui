'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { forwardRef } from 'react';
const Input = forwardRef(({ className = '', variant = 'default', size = 'md', error = false, helperText, errorMessage, label, labelHidden = false, id, ...props }, ref) => {
    // Generate unique ID if not provided
    const inputId = id || `input-${Math.random().toString(36).substr(2, 9)}`;
    // Determine variant based on error state
    const actualVariant = error ? 'error' : variant;
    // Size classes
    const sizeClasses = {
        sm: 'h-8 text-sm px-2',
        md: 'h-10 text-base px-3',
        lg: 'h-12 text-lg px-4'
    };
    // Variant classes
    const variantClasses = {
        default: 'border-current focus:border-current focus:ring-0',
        error: 'border-red-500 focus:border-red-500 focus:ring-0 text-red-900',
        success: 'border-green-500 focus:border-green-500 focus:ring-0 text-green-900'
    };
    // Base classes following theReactUI design principles
    const baseClasses = `
      w-full
      border
      bg-background
      text-foreground
      transition-colors
      duration-200
      focus:outline-none
      placeholder:opacity-50
      disabled:opacity-50
      disabled:cursor-not-allowed
      ${sizeClasses[size]}
      ${variantClasses[actualVariant]}
    `.trim().replace(/\s+/g, ' ');
    const finalClassName = `${baseClasses} ${className}`;
    return (_jsxs("div", { className: "w-full", children: [label && (_jsx("label", { htmlFor: inputId, className: `
              block text-sm font-medium text-foreground mb-2
              ${labelHidden ? 'sr-only' : ''}
            `.trim().replace(/\s+/g, ' '), children: label })), _jsx("input", { ref: ref, id: inputId, className: finalClassName, ...props }), (helperText || errorMessage) && (_jsx("p", { className: `
            mt-2 text-sm
            ${error || errorMessage ? 'text-red-600 dark:text-red-400' : 'text-foreground opacity-70'}
          `.trim().replace(/\s+/g, ' '), children: error || errorMessage ? errorMessage : helperText }))] }));
});
Input.displayName = 'Input';
export { Input };
//# sourceMappingURL=Input.js.map