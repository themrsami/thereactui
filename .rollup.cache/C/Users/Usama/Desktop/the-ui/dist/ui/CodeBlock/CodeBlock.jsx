'use client';
import React, { useEffect, useRef } from 'react';
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
    return (<div className={`code-window ${className}`}>
      {filename && (<div className="code-window-header flex items-center justify-between">
          <span>{filename}</span>
          <CopyButton text={children}/>
        </div>)}
      <div className="code-window-content relative">
        {!filename && (<div className="absolute top-2 right-2">
            <CopyButton text={children}/>
          </div>)}
        <pre>
          <code ref={codeRef} className={`language-${language}`}>
            {children}
          </code>
        </pre>
      </div>
    </div>);
}
//# sourceMappingURL=CodeBlock.jsx.map