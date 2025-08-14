import React from 'react';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-css';
import 'prismjs/components/prism-scss';
import 'prismjs/components/prism-json';
import 'prismjs/components/prism-bash';
import 'prismjs/components/prism-markdown';
interface CodeBlockProps {
    children: string;
    language?: string;
    filename?: string;
    className?: string;
}
export declare function CodeBlock({ children, language, filename, className }: CodeBlockProps): React.JSX.Element;
export {};
//# sourceMappingURL=CodeBlock.d.ts.map