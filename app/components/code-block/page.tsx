'use client';

import { DocLayout } from '../../../components/layout';
import { CodeBlock } from '../../../components/ui/CodeBlock';

export default function CodeBlockPage() {
  return (
    <DocLayout>
      <div className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-3xl font-bold">CodeBlock</h1>
          <p className="text-lg opacity-70">
            Syntax-highlighted code display with copy functionality
          </p>
        </header>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Import</h2>
            <CodeBlock 
              language="typescript"
              filename="Import"
            >
              {`import { CodeBlock } from 'thereactui';`}
            </CodeBlock>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Usage</h2>
            <div className="border border-current p-4">
              <CodeBlock language="javascript">
{`function hello() {
  console.log("Hello, World!");
}`}
              </CodeBlock>
            </div>
            <CodeBlock language="tsx">
{`<CodeBlock language="javascript">
{\`function hello() {
  console.log("Hello, World!");
}\`}
</CodeBlock>`}
            </CodeBlock>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">With Filename</h2>
            <div className="border border-current p-4">
              <CodeBlock language="typescript" filename="example.ts">
{`interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com"
};`}
              </CodeBlock>
            </div>
            <CodeBlock language="tsx">
{`<CodeBlock language="typescript" filename="example.ts">
{\`interface User {
  id: number;
  name: string;
  email: string;
}

const user: User = {
  id: 1,
  name: "John Doe",
  email: "john@example.com"
};\`}
</CodeBlock>`}
            </CodeBlock>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Supported Languages</h2>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium">TypeScript/JavaScript</h3>
                <div className="border border-current p-4">
                  <CodeBlock language="tsx" filename="component.tsx">
{`import React from 'react';

interface Props {
  title: string;
  onClick: () => void;
}

export function MyButton({ title, onClick }: Props) {
  return (
    <button onClick={onClick} className="btn">
      {title}
    </button>
  );
}`}
                  </CodeBlock>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">CSS</h3>
                <div className="border border-current p-4">
                  <CodeBlock language="css" filename="styles.css">
{`.button {
  display: inline-flex;
  align-items: center;
  padding: 0.5rem 1rem;
  border: 1px solid currentColor;
  background: transparent;
  font-weight: 500;
  transition: all 0.2s;
}

.button:hover {
  background: currentColor;
  color: white;
}`}
                  </CodeBlock>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">JSON</h3>
                <div className="border border-current p-4">
                  <CodeBlock language="json" filename="package.json">
{`{
  "name": "my-project",
  "version": "1.0.0",
  "dependencies": {
    "thereactui": "^1.1.0",
    "react": "^19.0.0"
  },
  "scripts": {
    "dev": "next dev",
    "build": "next build"
  }
}`}
                  </CodeBlock>
                </div>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Bash/Shell</h3>
                <div className="border border-current p-4">
                  <CodeBlock language="bash" filename="install.sh">
{`# Install dependencies
npm install thereactui

# Start development server
npm run dev

# Build for production
npm run build`}
                  </CodeBlock>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Features</h2>
            <div className="border border-current p-4 space-y-3">
              <p className="text-sm">
                <strong>Syntax Highlighting:</strong> Powered by Prism.js with theReactUI color scheme
              </p>
              <p className="text-sm">
                <strong>Copy Functionality:</strong> Built-in copy button for easy code sharing
              </p>
              <p className="text-sm">
                <strong>Filename Support:</strong> Optional filename header for context
              </p>
              <p className="text-sm">
                <strong>Language Detection:</strong> Automatic syntax highlighting based on language prop
              </p>
              <p className="text-sm">
                <strong>Theme Aware:</strong> Follows theReactUI light/dark mode themes
              </p>
              <p className="text-sm">
                <strong>No Border Radius:</strong> Sharp edges following theReactUI design principles
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">API</h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse border border-current">
                <thead>
                  <tr className="border-b border-current">
                    <th className="border border-current px-4 py-2 text-left">Prop</th>
                    <th className="border border-current px-4 py-2 text-left">Type</th>
                    <th className="border border-current px-4 py-2 text-left">Default</th>
                    <th className="border border-current px-4 py-2 text-left">Description</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr>
                    <td className="border border-current px-4 py-2 font-mono">language</td>
                    <td className="border border-current px-4 py-2 font-mono">string</td>
                    <td className="border border-current px-4 py-2 font-mono">required</td>
                    <td className="border border-current px-4 py-2">Programming language for syntax highlighting</td>
                  </tr>
                  <tr>
                    <td className="border border-current px-4 py-2 font-mono">filename</td>
                    <td className="border border-current px-4 py-2 font-mono">string</td>
                    <td className="border border-current px-4 py-2 font-mono">-</td>
                    <td className="border border-current px-4 py-2">Optional filename to display in header</td>
                  </tr>
                  <tr>
                    <td className="border border-current px-4 py-2 font-mono">children</td>
                    <td className="border border-current px-4 py-2 font-mono">string</td>
                    <td className="border border-current px-4 py-2 font-mono">required</td>
                    <td className="border border-current px-4 py-2">Code content to display</td>
                  </tr>
                  <tr>
                    <td className="border border-current px-4 py-2 font-mono">className</td>
                    <td className="border border-current px-4 py-2 font-mono">string</td>
                    <td className="border border-current px-4 py-2 font-mono">-</td>
                    <td className="border border-current px-4 py-2">Additional CSS classes</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          {/* Complete Example */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Complete Example</h2>
            
            <CodeBlock 
              language="tsx"
              filename="Complete Example"
            >
{`import { CodeBlock, Button } from 'thereactui';
import { useState } from 'react';
import { Code, Database } from 'lucide-react';

export default function MyComponent() {
  const [selectedLanguage, setSelectedLanguage] = useState('react');

  const codeExamples = {
    react: {
      language: 'tsx',
      code: \`import React from 'react';

export const Button: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return <button className="btn">{children}</button>;
};\`
    },
    sql: {
      language: 'sql', 
      code: \`SELECT u.name, COUNT(p.id) as posts
FROM users u
LEFT JOIN posts p ON u.id = p.user_id
GROUP BY u.id
ORDER BY posts DESC;\`
    }
  };

  return (
    <div className="space-y-4">
      {/* Language Selector */}
      <div className="flex gap-2">
        <Button
          variant={selectedLanguage === 'react' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setSelectedLanguage('react')}
          className="flex items-center gap-2"
        >
          <Code size={16} />
          React
        </Button>
        <Button
          variant={selectedLanguage === 'sql' ? 'primary' : 'secondary'}
          size="sm"
          onClick={() => setSelectedLanguage('sql')}
          className="flex items-center gap-2"
        >
          <Database size={16} />
          SQL
        </Button>
      </div>

      {/* Code Display */}
      <CodeBlock
        language={codeExamples[selectedLanguage].language}
        filename={\`example.\${codeExamples[selectedLanguage].language}\`}
        showLineNumbers
      >
        {codeExamples[selectedLanguage].code}
      </CodeBlock>
    </div>
  );
}`}
            </CodeBlock>
          </section>
        </div>
      </div>
    </DocLayout>
  );
}
