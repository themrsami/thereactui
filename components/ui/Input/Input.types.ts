import { InputHTMLAttributes, forwardRef } from 'react';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
  /** The visual style variant of the input */
  variant?: 'default' | 'error' | 'success';
  /** The size of the input */
  size?: 'sm' | 'md' | 'lg';
  /** Whether the input is in an error state */
  error?: boolean;
  /** Helper text to display below the input */
  helperText?: string;
  /** Error message to display when in error state */
  errorMessage?: string;
  /** Label for the input */
  label?: string;
  /** Whether the label should be visually hidden (for accessibility) */
  labelHidden?: boolean;
}
