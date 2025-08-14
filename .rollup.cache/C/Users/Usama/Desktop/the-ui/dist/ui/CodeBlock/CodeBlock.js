'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import { CopyButton } from '../CopyButton';
// Import commonly used language definitions
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-markdown';
export function CodeBlock({ children, language = 'typescript', filename, className = '' }) {
    const codeRef = useRef(null);
    useEffect(() => {
        if (codeRef.current) {
            // Set the text content directly to avoid JSX interpretation
            codeRef.current.textContent = children;
            // Then apply syntax highlighting
            Prism.highlightElement(codeRef.current);
        }
    }, [children, language]);
    return (_jsxs("div", { className: `code-window ${className}`, children: [filename && (_jsxs("div", { className: "code-window-header flex items-center justify-between", children: [_jsx("span", { children: filename }), _jsx(CopyButton, { text: children })] })), _jsxs("div", { className: "code-window-content relative", children: [!filename && (_jsx("div", { className: "absolute top-2 right-2", children: _jsx(CopyButton, { text: children }) })), _jsx("pre", { children: _jsx("code", { ref: codeRef, className: `language-${language}`, children: children }) })] })] }));
}
//# sourceMappingURL=CodeBlock.js.map