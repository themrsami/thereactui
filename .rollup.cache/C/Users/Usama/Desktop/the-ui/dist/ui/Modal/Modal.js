'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { X } from 'lucide-react';
const Modal = ({ isOpen, onClose, title, children, size = 'md', closeOnBackdropClick = true, closeOnEsc = true, className = '', overlayClassName = '' }) => {
    const modalRef = useRef(null);
    const previousFocusRef = useRef(null);
    // Size classes following theReactUI principles
    const sizeClasses = {
        sm: 'max-w-md',
        md: 'max-w-lg',
        lg: 'max-w-2xl',
        xl: 'max-w-4xl'
    };
    // Handle ESC key press
    useEffect(() => {
        if (!closeOnEsc)
            return;
        const handleEsc = (event) => {
            if (event.key === 'Escape' && isOpen) {
                onClose();
            }
        };
        document.addEventListener('keydown', handleEsc);
        return () => document.removeEventListener('keydown', handleEsc);
    }, [isOpen, onClose, closeOnEsc]);
    // Focus management
    useEffect(() => {
        var _a;
        if (isOpen) {
            // Store the previously focused element
            previousFocusRef.current = document.activeElement;
            // Focus the modal when it opens
            (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.focus();
            // Prevent body scroll
            document.body.style.overflow = 'hidden';
        }
        else {
            // Restore focus when modal closes
            if (previousFocusRef.current) {
                previousFocusRef.current.focus();
            }
            // Restore body scroll
            document.body.style.overflow = 'unset';
        }
        // Cleanup on unmount
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, [isOpen]);
    // Handle backdrop click
    const handleBackdropClick = (event) => {
        if (closeOnBackdropClick && event.target === event.currentTarget) {
            onClose();
        }
    };
    // Focus trap implementation
    const handleKeyDown = (event) => {
        var _a;
        if (event.key === 'Tab') {
            const focusableElements = (_a = modalRef.current) === null || _a === void 0 ? void 0 : _a.querySelectorAll('button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])');
            if (focusableElements && focusableElements.length > 0) {
                const firstElement = focusableElements[0];
                const lastElement = focusableElements[focusableElements.length - 1];
                if (event.shiftKey) {
                    if (document.activeElement === firstElement) {
                        event.preventDefault();
                        lastElement.focus();
                    }
                }
                else {
                    if (document.activeElement === lastElement) {
                        event.preventDefault();
                        firstElement.focus();
                    }
                }
            }
        }
    };
    if (!isOpen)
        return null;
    // Portal to render modal at document.body level
    return createPortal(_jsxs("div", { className: `fixed inset-0 z-50 flex items-center justify-center p-4 ${overlayClassName}`, onClick: handleBackdropClick, role: "dialog", "aria-modal": "true", "aria-labelledby": title ? 'modal-title' : undefined, children: [_jsx("div", { className: "fixed inset-0 bg-black/30 dark:bg-white/20" }), _jsxs("div", { ref: modalRef, className: `relative w-full ${sizeClasses[size]} bg-background text-foreground border border-foreground max-h-[90vh] overflow-auto shadow-lg ${className}`, onClick: (e) => e.stopPropagation(), onKeyDown: handleKeyDown, tabIndex: -1, style: { zIndex: 1000 }, children: [(title || true) && (_jsxs("div", { className: "flex items-center justify-between p-6 border-b border-foreground text-foreground", children: [title && (_jsx("h2", { id: "modal-title", className: "text-xl font-semibold text-foreground", children: title })), _jsx("button", { onClick: onClose, className: "ml-auto p-1 text-foreground hover:bg-foreground hover:text-background transition-colors", "aria-label": "Close modal", children: _jsx(X, { size: 20 }) })] })), _jsx("div", { className: "p-6 text-foreground", children: children })] })] }), document.body);
};
export default Modal;
//# sourceMappingURL=Modal.js.map