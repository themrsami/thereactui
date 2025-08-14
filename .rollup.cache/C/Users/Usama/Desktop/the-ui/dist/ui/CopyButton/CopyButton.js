'use client';
import { jsx as _jsx, Fragment as _Fragment, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { Button } from '../Button';
export function CopyButton({ text, variant = 'ghost', size = 'sm', className = '', iconOnly = false }) {
    const [copied, setCopied] = useState(false);
    const handleCopy = async () => {
        try {
            await navigator.clipboard.writeText(text);
            setCopied(true);
            // Reset after 1 second
            setTimeout(() => {
                setCopied(false);
            }, 1000);
        }
        catch (err) {
            console.error('Failed to copy text: ', err);
        }
    };
    return (_jsx(Button, { variant: variant, size: size, onClick: handleCopy, className: `flex items-center gap-1 ${className}`, disabled: copied, children: copied ? (_jsxs(_Fragment, { children: [_jsx(Check, { size: 14 }), !iconOnly && 'Copied!'] })) : (_jsxs(_Fragment, { children: [_jsx(Copy, { size: 14 }), !iconOnly && 'Copy'] })) }));
}
//# sourceMappingURL=CopyButton.js.map