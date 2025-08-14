import { ReactNode } from 'react';

export interface BadgeProps {
  children?: ReactNode;
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  outline?: boolean;
}
