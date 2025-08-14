'use client';

import { DocLayout } from '../../../components/layout';
import { CopyButton } from '../../../components/ui';
import { CodeBlock } from '../../../components/ui/CodeBlock';

export default function CopyButtonPage() {
  return (
    <DocLayout>
      <div className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-3xl font-bold">CopyButton</h1>
          <p className="text-lg opacity-70">
            Button component with built-in copy-to-clipboard functionality
          </p>
        </header>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Import</h2>
            <CodeBlock 
              language="typescript"
              filename="Import"
            >
              {`import { CopyButton } from 'thereactui';`}
            </CodeBlock>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Usage</h2>
            <div className="border border-current p-4">
              <CopyButton text="Hello, World!" />
            </div>
            <CodeBlock language="tsx">
{`<CopyButton text="Hello, World!" />`}
            </CodeBlock>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Examples</h2>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Copy Code Snippet</h3>
                <p className="text-sm opacity-70">Perfect for copying code examples</p>
                <div className="border border-current p-4">
                  <div className="flex items-center gap-3">
                    <code className="bg-gray-100 dark:bg-gray-800 px-2 py-1 text-sm">
                      npm install thereactui
                    </code>
                    <CopyButton text="npm install thereactui" />
                  </div>
                </div>
                <CodeBlock language="tsx">
{`<div className="flex items-center gap-3">
  <code>npm install thereactui</code>
  <CopyButton text="npm install thereactui" />
</div>`}
                </CodeBlock>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Copy URL</h3>
                <p className="text-sm opacity-70">Copy links or URLs</p>
                <div className="border border-current p-4">
                  <div className="flex items-center gap-3">
                    <span className="text-sm text-blue-600">https://thereactui.dev</span>
                    <CopyButton text="https://thereactui.dev" />
                  </div>
                </div>
                <CodeBlock language="tsx">
{`<div className="flex items-center gap-3">
  <span>https://thereactui.dev</span>
  <CopyButton text="https://thereactui.dev" />
</div>`}
                </CodeBlock>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Copy Long Text</h3>
                <p className="text-sm opacity-70">Copy longer content or configurations</p>
                <div className="border border-current p-4">
                  <div className="flex items-center gap-3">
                    <pre className="text-xs bg-gray-100 dark:bg-gray-800 p-2 border flex-1 overflow-x-auto">
{`{
  "name": "my-app",
  "dependencies": {
    "thereactui": "^1.1.0"
  }
}`}
                    </pre>
                    <CopyButton text={`{
  "name": "my-app",
  "dependencies": {
    "thereactui": "^1.1.0"
  }
}`} />
                  </div>
                </div>
                <CodeBlock language="tsx">
{`const jsonConfig = \`{
  "name": "my-app",
  "dependencies": {
    "thereactui": "^1.1.0"
  }
}\`;

<div className="flex items-center gap-3">
  <pre>{jsonConfig}</pre>
  <CopyButton text={jsonConfig} />
</div>`}
                </CodeBlock>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Behavior</h2>
            <div className="border border-current p-4 space-y-3">
              <p className="text-sm">
                <strong>Default State:</strong> Shows copy icon
              </p>
              <p className="text-sm">
                <strong>Click Action:</strong> Copies text to clipboard, shows check icon and "Copied!" text
              </p>
              <p className="text-sm">
                <strong>Auto Reset:</strong> Returns to default state after 1 second
              </p>
              <p className="text-sm">
                <strong>Feedback:</strong> Visual confirmation with icon change and text update
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Features</h2>
            <div className="border border-current p-4 space-y-3">
              <p className="text-sm">
                <strong>One-Click Copy:</strong> Instantly copy text to clipboard with single click
              </p>
              <p className="text-sm">
                <strong>Visual Feedback:</strong> Icon and text change to confirm successful copy
              </p>
              <p className="text-sm">
                <strong>Auto Reset:</strong> Automatically resets to original state after 2 seconds
              </p>
              <p className="text-sm">
                <strong>Icon Integration:</strong> Built-in copy and checkmark icons with smooth transitions
              </p>
              <p className="text-sm">
                <strong>Accessibility:</strong> Screen reader announcements and keyboard support
              </p>
              <p className="text-sm">
                <strong>Theme Aware:</strong> Follows theReactUI light/dark mode themes
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
                    <td className="border border-current px-4 py-2 font-mono">text</td>
                    <td className="border border-current px-4 py-2 font-mono">string</td>
                    <td className="border border-current px-4 py-2 font-mono">required</td>
                    <td className="border border-current px-4 py-2">Text content to copy to clipboard</td>
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
{`import { CopyButton } from 'thereactui';
import { useState } from 'react';
import { Code, Key } from 'lucide-react';

export default function MyComponent() {
  const [apiKey] = useState('sk-1234567890abcdef');
  const installCommand = 'npm install thereactui';

  return (
    <div className="space-y-4">
      {/* API Key */}
      <div className="p-4 bg-muted border border-current">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Key size={16} />
            <span className="font-medium">API Key</span>
          </div>
          <CopyButton 
            text={apiKey}
            variant="primary"
            size="sm"
          />
        </div>
        <code className="block mt-2 p-2 bg-black/5 text-sm font-mono">
          {apiKey}
        </code>
      </div>

      {/* Install Command */}
      <div className="p-4 bg-muted border border-current">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <Code size={16} />
            <span className="font-medium">Installation</span>
          </div>
          <CopyButton 
            text={installCommand}
            variant="secondary"
          />
        </div>
        <code className="block mt-2 p-2 bg-black/5 text-sm font-mono">
          {installCommand}
        </code>
      </div>

      {/* Quick Actions */}
      <div className="flex gap-2">
        <CopyButton 
          text="thereactui"
          variant="ghost"
          size="sm"
        >
          Copy Package Name
        </CopyButton>
        <CopyButton 
          text="npm run dev"
          variant="outline"
          size="sm"
        >
          Copy Dev Command
        </CopyButton>
      </div>
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
