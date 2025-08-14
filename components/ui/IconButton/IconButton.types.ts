export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /**
   * Button variants following theReactUI design principles
   */
  variant?: 'primary' | 'secondary' | 'ghost';
  
  /**
   * Button sizes - square aspect ratio for icons
   */
  size?: 'sm' | 'md' | 'lg';
  
  /**
   * Loading state
   */
  loading?: boolean;
  
  /**
   * Custom className
   */
  className?: string;
  
  /**
   * Icon content
   */
  children: React.ReactNode;
  
  /**
   * Required aria-label for accessibility
   */
  'aria-label': string;
}
