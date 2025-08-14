export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Button variants following theReactUI design principles
     * - primary: filled with foreground color
     * - secondary: border only, transparent background
     * - ghost: no border, no background (text only)
     */
    variant?: 'primary' | 'secondary' | 'ghost';
    /**
     * Button sizes
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
     * Children content
     */
    children: React.ReactNode;
}
//# sourceMappingURL=Button.types.d.ts.map