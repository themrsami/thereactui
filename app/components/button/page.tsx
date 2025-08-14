'use client';

import { DocLayout } from '../../../components/layout';
import { Button } from '../../../components/ui/Button';
import { CodeBlock } from '../../../components/ui/CodeBlock';

export default function ButtonPage() {
  return (
    <DocLayout>
      <div className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-3xl font-bold">Button</h1>
          <p className="text-lg opacity-70">
            Clickable button component with multiple variants and sizes
          </p>
        </header>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Import</h2>
            <CodeBlock 
              language="typescript"
              filename="Import"
            >
              {`import { Button } from 'thereactui';`}
            </CodeBlock>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Variants</h2>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Primary</h3>
                <p className="text-sm opacity-70">Filled background, used for main actions</p>
                <div className="border border-current p-4">
                  <Button variant="primary">Primary Button</Button>
                </div>
                <CodeBlock language="tsx">
                  {`<Button variant="primary">Primary Button</Button>`}
                </CodeBlock>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Secondary (Default)</h3>
                <p className="text-sm opacity-70">Border only, transparent background</p>
                <div className="border border-current p-4">
                  <Button variant="secondary">Secondary Button</Button>
                </div>
                <CodeBlock language="tsx">
                  {`<Button variant="secondary">Secondary Button</Button>`}
                </CodeBlock>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Ghost</h3>
                <p className="text-sm opacity-70">No border, no background, text only</p>
                <div className="border border-current p-4">
                  <Button variant="ghost">Ghost Button</Button>
                </div>
                <CodeBlock language="tsx">
                  {`<Button variant="ghost">Ghost Button</Button>`}
                </CodeBlock>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Sizes</h2>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Small</h3>
                <div className="border border-current p-4">
                  <div className="flex gap-3">
                    <Button variant="primary" size="sm">Small Primary</Button>
                    <Button variant="secondary" size="sm">Small Secondary</Button>
                    <Button variant="ghost" size="sm">Small Ghost</Button>
                  </div>
                </div>
                <CodeBlock language="tsx">
                  {`<Button size="sm">Small Button</Button>`}
                </CodeBlock>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Medium (Default)</h3>
                <div className="border border-current p-4">
                  <div className="flex gap-3">
                    <Button variant="primary" size="md">Medium Primary</Button>
                    <Button variant="secondary" size="md">Medium Secondary</Button>
                    <Button variant="ghost" size="md">Medium Ghost</Button>
                  </div>
                </div>
                <CodeBlock language="tsx">
                  {`<Button size="md">Medium Button</Button>`}
                </CodeBlock>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Large</h3>
                <div className="border border-current p-4">
                  <div className="flex gap-3">
                    <Button variant="primary" size="lg">Large Primary</Button>
                    <Button variant="secondary" size="lg">Large Secondary</Button>
                    <Button variant="ghost" size="lg">Large Ghost</Button>
                  </div>
                </div>
                <CodeBlock language="tsx">
                  {`<Button size="lg">Large Button</Button>`}
                </CodeBlock>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">States</h2>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Loading</h3>
                <div className="border border-current p-4">
                  <div className="flex gap-3">
                    <Button variant="primary" loading>Loading Primary</Button>
                    <Button variant="secondary" loading>Loading Secondary</Button>
                    <Button variant="ghost" loading>Loading Ghost</Button>
                  </div>
                </div>
                <CodeBlock language="tsx">
                  {`<Button loading>Loading Button</Button>`}
                </CodeBlock>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Disabled</h3>
                <div className="border border-current p-4">
                  <div className="flex gap-3">
                    <Button variant="primary" disabled>Disabled Primary</Button>
                    <Button variant="secondary" disabled>Disabled Secondary</Button>
                    <Button variant="ghost" disabled>Disabled Ghost</Button>
                  </div>
                </div>
                <CodeBlock language="tsx">
                  {`<Button disabled>Disabled Button</Button>`}
                </CodeBlock>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Features</h2>
            <div className="border border-current p-4 space-y-3">
              <p className="text-sm">
                <strong>Multiple Variants:</strong> Primary, secondary, destructive, outline, and ghost styles
              </p>
              <p className="text-sm">
                <strong>Size Options:</strong> Small, medium, and large button sizes
              </p>
              <p className="text-sm">
                <strong>State Management:</strong> Built-in disabled and loading states
              </p>
              <p className="text-sm">
                <strong>Accessibility:</strong> Full keyboard navigation and screen reader support
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
            <h2 className="text-2xl font-semibold">API Reference</h2>
            
            <div className="border border-current">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b border-current">
                    <th className="text-left p-3 border-r border-current">Prop</th>
                    <th className="text-left p-3 border-r border-current">Type</th>
                    <th className="text-left p-3 border-r border-current">Default</th>
                    <th className="text-left p-3">Description</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-current">
                    <td className="p-3 border-r border-current font-mono">variant</td>
                    <td className="p-3 border-r border-current">&apos;primary&apos; | &apos;secondary&apos; | &apos;ghost&apos;</td>
                    <td className="p-3 border-r border-current">&apos;secondary&apos;</td>
                    <td className="p-3">Button appearance variant</td>
                  </tr>
                  <tr className="border-b border-current">
                    <td className="p-3 border-r border-current font-mono">size</td>
                    <td className="p-3 border-r border-current">&apos;sm&apos; | &apos;md&apos; | &apos;lg&apos;</td>
                    <td className="p-3 border-r border-current">&apos;md&apos;</td>
                    <td className="p-3">Button size</td>
                  </tr>
                  <tr className="border-b border-current">
                    <td className="p-3 border-r border-current font-mono">loading</td>
                    <td className="p-3 border-r border-current">boolean</td>
                    <td className="p-3 border-r border-current">false</td>
                    <td className="p-3">Show loading spinner</td>
                  </tr>
                  <tr className="border-b border-current">
                    <td className="p-3 border-r border-current font-mono">disabled</td>
                    <td className="p-3 border-r border-current">boolean</td>
                    <td className="p-3 border-r border-current">false</td>
                    <td className="p-3">Disable the button</td>
                  </tr>
                  <tr className="border-b border-current">
                    <td className="p-3 border-r border-current font-mono">className</td>
                    <td className="p-3 border-r border-current">string</td>
                    <td className="p-3 border-r border-current">-</td>
                    <td className="p-3">Additional CSS classes</td>
                  </tr>
                  <tr>
                    <td className="p-3 border-r border-current font-mono">onClick</td>
                    <td className="p-3 border-r border-current">() =&gt; void</td>
                    <td className="p-3 border-r border-current">-</td>
                    <td className="p-3">Click handler function</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Complete Example</h2>
            
            <CodeBlock 
              language="tsx"
              filename="Complete Example"
            >
{`import { Button } from 'thereactui';

export default function MyComponent() {
  const handleClick = () => {
    console.log('Button clicked!');
  };

  return (
    <div className="space-y-4">
      <Button 
        variant="primary" 
        size="lg" 
        onClick={handleClick}
      >
        Get Started
      </Button>
      
      <Button 
        variant="secondary" 
        loading
      >
        Processing...
      </Button>
      
      <Button 
        variant="ghost" 
        disabled
      >
        Not Available
      </Button>
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
