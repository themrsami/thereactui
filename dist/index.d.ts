import * as react from 'react';
import react__default, { InputHTMLAttributes, ReactNode } from 'react';
import * as react_jsx_runtime from 'react/jsx-runtime';
import { ThemeProviderProps } from 'next-themes';
export { useTheme } from 'next-themes';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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

declare const Button: react__default.ForwardRefExoticComponent<ButtonProps & react__default.RefAttributes<HTMLButtonElement>>;

interface ButtonGroupProps {
    children: React.ReactNode;
    orientation?: 'horizontal' | 'vertical';
    className?: string;
}

declare function ButtonGroup({ children, orientation, className }: ButtonGroupProps): react_jsx_runtime.JSX.Element;

interface CopyButtonProps {
    /**
     * Text to copy to clipboard
     */
    text: string;
    /**
     * Button variant
     */
    variant?: 'primary' | 'secondary' | 'ghost';
    /**
     * Button size
     */
    size?: 'sm' | 'md' | 'lg';
    /**
     * Additional CSS classes
     */
    className?: string;
    /**
     * Show only icon (no text)
     */
    iconOnly?: boolean;
}

declare function CopyButton({ text, variant, size, className, iconOnly }: CopyButtonProps): react_jsx_runtime.JSX.Element;

interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
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

declare const IconButton: react__default.ForwardRefExoticComponent<IconButtonProps & react__default.RefAttributes<HTMLButtonElement>>;

interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'size'> {
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

declare const Input: react.ForwardRefExoticComponent<InputProps & react.RefAttributes<HTMLInputElement>>;

interface CodeBlockProps$1 {
    children: string;
    language?: string;
    filename?: string;
    className?: string;
}
declare function CodeBlock({ children, language, filename, className }: CodeBlockProps$1): react_jsx_runtime.JSX.Element;

interface CodeBlockProps {
    children: string;
    language?: string;
    filename?: string;
    className?: string;
}

interface BreadcrumbItem$1 {
    label: string;
    href?: string;
}
interface BreadcrumbProps$1 {
    items: BreadcrumbItem$1[];
    className?: string;
}
declare function Breadcrumb({ items, className }: BreadcrumbProps$1): react_jsx_runtime.JSX.Element;

interface BreadcrumbItem {
    label: string;
    href?: string;
}
interface BreadcrumbProps {
    items: BreadcrumbItem[];
    className?: string;
}

interface ModalProps {
    /**
     * Whether the modal is open/visible
     */
    isOpen: boolean;
    /**
     * Function to call when the modal should be closed
     */
    onClose: () => void;
    /**
     * Modal title (optional)
     */
    title?: string;
    /**
     * Modal content
     */
    children: React.ReactNode;
    /**
     * Size of the modal
     */
    size?: 'sm' | 'md' | 'lg' | 'xl';
    /**
     * Whether clicking the backdrop should close the modal
     * @default true
     */
    closeOnBackdropClick?: boolean;
    /**
     * Whether pressing ESC should close the modal
     * @default true
     */
    closeOnEsc?: boolean;
    /**
     * Additional CSS classes for the modal container
     */
    className?: string;
    /**
     * Additional CSS classes for the modal overlay
     */
    overlayClassName?: string;
}

declare const Modal: ({ isOpen, onClose, title, children, size, closeOnBackdropClick, closeOnEsc, className, overlayClassName }: ModalProps) => react.ReactPortal | null;

interface CardProps {
    children: ReactNode;
    className?: string;
    variant?: 'default' | 'bordered' | 'elevated';
    padding?: 'none' | 'sm' | 'md' | 'lg';
    onClick?: () => void;
    hoverable?: boolean;
}
interface CardHeaderProps {
    children: ReactNode;
    className?: string;
}
interface CardContentProps {
    children: ReactNode;
    className?: string;
}
interface CardFooterProps {
    children: ReactNode;
    className?: string;
}

declare const Card: react.ForwardRefExoticComponent<CardProps & react.RefAttributes<HTMLDivElement>>;
declare const CardHeader: react.ForwardRefExoticComponent<CardHeaderProps & react.RefAttributes<HTMLDivElement>>;
declare const CardContent: react.ForwardRefExoticComponent<CardContentProps & react.RefAttributes<HTMLDivElement>>;
declare const CardFooter: react.ForwardRefExoticComponent<CardFooterProps & react.RefAttributes<HTMLDivElement>>;

interface BadgeProps {
    children?: ReactNode;
    variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
    outline?: boolean;
}

declare const Badge: react.ForwardRefExoticComponent<BadgeProps & react.RefAttributes<HTMLSpanElement>>;

interface TooltipProps {
    children: ReactNode;
    content: ReactNode;
    placement?: 'top' | 'bottom' | 'left' | 'right';
    delay?: number;
    className?: string;
    disabled?: boolean;
    arrow?: boolean;
}

declare const Tooltip: {
    ({ children, content, placement, delay, className, disabled, arrow, ...props }: TooltipProps): react_jsx_runtime.JSX.Element;
    displayName: string;
};

declare const useTheReactUI: () => {};
declare function TheReactUIProvider({ children, ...props }: ThemeProviderProps): react_jsx_runtime.JSX.Element;

interface DocLayoutProps {
    children: React.ReactNode;
}
declare function DocLayout({ children }: DocLayoutProps): react_jsx_runtime.JSX.Element;

export { Badge, Breadcrumb, Button, ButtonGroup, Card, CardContent, CardFooter, CardHeader, CodeBlock, CopyButton, DocLayout, IconButton, Input, Modal, TheReactUIProvider, Tooltip, useTheReactUI };
export type { BadgeProps, BreadcrumbItem, BreadcrumbProps, ButtonGroupProps, ButtonProps, CardContentProps, CardFooterProps, CardHeaderProps, CardProps, CodeBlockProps, CopyButtonProps, IconButtonProps, InputProps, ModalProps, TooltipProps };
