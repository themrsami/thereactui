'use client';

import { DocLayout } from '../../../components/layout';
import { ButtonGroup, Button } from '../../../components/ui';
import { CodeBlock } from '../../../components/ui/CodeBlock';

export default function ButtonGroupPage() {
  return (
    <DocLayout>
      <div className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-3xl font-bold">ButtonGroup</h1>
          <p className="text-lg opacity-70">
            Group multiple buttons together with shared borders
          </p>
        </header>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Import</h2>
            <CodeBlock 
              language="typescript"
              filename="Import"
            >
              {`import { ButtonGroup, Button } from 'thereactui';`}
            </CodeBlock>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Usage</h2>
            <div className="border border-current p-4">
              <ButtonGroup>
                <Button variant="secondary">First</Button>
                <Button variant="secondary">Second</Button>
                <Button variant="secondary">Third</Button>
              </ButtonGroup>
            </div>
            <CodeBlock language="tsx">
{`<ButtonGroup>
  <Button variant="secondary">First</Button>
  <Button variant="secondary">Second</Button>
  <Button variant="secondary">Third</Button>
</ButtonGroup>`}
            </CodeBlock>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Orientation</h2>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Horizontal (Default)</h3>
                <p className="text-sm opacity-70">Buttons arranged side by side</p>
                <div className="border border-current p-4">
                  <ButtonGroup orientation="horizontal">
                    <Button variant="secondary">Left</Button>
                    <Button variant="secondary">Center</Button>
                    <Button variant="secondary">Right</Button>
                  </ButtonGroup>
                </div>
                <CodeBlock language="tsx">
{`<ButtonGroup orientation="horizontal">
  <Button variant="secondary">Left</Button>
  <Button variant="secondary">Center</Button>
  <Button variant="secondary">Right</Button>
</ButtonGroup>`}
                </CodeBlock>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Vertical</h3>
                <p className="text-sm opacity-70">Buttons stacked vertically</p>
                <div className="border border-current p-4">
                  <ButtonGroup orientation="vertical">
                    <Button variant="secondary">Top</Button>
                    <Button variant="secondary">Middle</Button>
                    <Button variant="secondary">Bottom</Button>
                  </ButtonGroup>
                </div>
                <CodeBlock language="tsx">
{`<ButtonGroup orientation="vertical">
  <Button variant="secondary">Top</Button>
  <Button variant="secondary">Middle</Button>
  <Button variant="secondary">Bottom</Button>
</ButtonGroup>`}
                </CodeBlock>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Mixed Variants</h2>
            <div className="border border-current p-4">
              <ButtonGroup>
                <Button variant="primary">Primary</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="ghost">Ghost</Button>
              </ButtonGroup>
            </div>
            <CodeBlock language="tsx">
{`<ButtonGroup>
  <Button variant="primary">Primary</Button>
  <Button variant="secondary">Secondary</Button>
  <Button variant="ghost">Ghost</Button>
</ButtonGroup>`}
            </CodeBlock>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Features</h2>
            <div className="border border-current p-4 space-y-3">
              <p className="text-sm">
                <strong>Orientation Support:</strong> Horizontal and vertical button grouping
              </p>
              <p className="text-sm">
                <strong>Mixed Variants:</strong> Combine different button variants within one group
              </p>
              <p className="text-sm">
                <strong>Seamless Connection:</strong> Buttons visually connect with shared borders
              </p>
              <p className="text-sm">
                <strong>Consistent Spacing:</strong> Automatic spacing management between buttons
              </p>
              <p className="text-sm">
                <strong>Accessibility:</strong> Maintains individual button accessibility while grouped
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
                    <td className="border border-current px-4 py-2 font-mono">orientation</td>
                    <td className="border border-current px-4 py-2 font-mono">'horizontal' | 'vertical'</td>
                    <td className="border border-current px-4 py-2 font-mono">'horizontal'</td>
                    <td className="border border-current px-4 py-2">Layout direction of buttons</td>
                  </tr>
                  <tr>
                    <td className="border border-current px-4 py-2 font-mono">children</td>
                    <td className="border border-current px-4 py-2 font-mono">React.ReactNode</td>
                    <td className="border border-current px-4 py-2 font-mono">-</td>
                    <td className="border border-current px-4 py-2">Button components to group</td>
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
{`import { ButtonGroup, Button } from 'thereactui';
import { useState } from 'react';
import { Grid, List, Card } from 'lucide-react';

export default function MyComponent() {
  const [viewMode, setViewMode] = useState('grid');

  return (
    <div className="space-y-4">
      <h3>Choose View Mode</h3>
      <ButtonGroup>
        <Button
          variant={viewMode === 'grid' ? 'primary' : 'secondary'}
          onClick={() => setViewMode('grid')}
          className="flex items-center gap-2"
        >
          <Grid size={16} />
          Grid
        </Button>
        <Button
          variant={viewMode === 'list' ? 'primary' : 'secondary'}
          onClick={() => setViewMode('list')}
          className="flex items-center gap-2"
        >
          <List size={16} />
          List
        </Button>
        <Button
          variant={viewMode === 'card' ? 'primary' : 'secondary'}
          onClick={() => setViewMode('card')}
          className="flex items-center gap-2"
        >
          <Card size={16} />
          Card
        </Button>
      </ButtonGroup>
      
      <p className="text-sm opacity-70">
        Selected: {viewMode}
      </p>
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
