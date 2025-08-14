'use client';

import { DocLayout } from '../../../components/layout';
import { Breadcrumb } from '../../../components/ui/Breadcrumb';
import { CodeBlock } from '../../../components/ui/CodeBlock';

export default function BreadcrumbPage() {
  return (
    <DocLayout>
      <div className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-3xl font-bold">Breadcrumb</h1>
          <p className="text-lg opacity-70">
            Navigation component showing hierarchical page structure
          </p>
        </header>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Import</h2>
            <CodeBlock 
              language="typescript"
              filename="Import"
            >
              {`import { Breadcrumb } from 'thereactui';`}
            </CodeBlock>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Usage</h2>
            <div className="border border-current p-4">
              <Breadcrumb
                items={[
                  { label: 'Home', href: '/' },
                  { label: 'Components', href: '/components' },
                  { label: 'Breadcrumb' }
                ]}
              />
            </div>
            <CodeBlock language="tsx">
{`<Breadcrumb
  items={[
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Breadcrumb' }
  ]}
/>`}
            </CodeBlock>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Complex Navigation</h2>
            <div className="border border-current p-4">
              <Breadcrumb
                items={[
                  { label: 'theReactUI', href: '/' },
                  { label: 'Documentation', href: '/docs' },
                  { label: 'Components', href: '/docs/components' },
                  { label: 'Navigation', href: '/docs/components/navigation' },
                  { label: 'Breadcrumb Component' }
                ]}
              />
            </div>
            <CodeBlock language="tsx">
{`<Breadcrumb
  items={[
    { label: 'theReactUI', href: '/' },
    { label: 'Documentation', href: '/docs' },
    { label: 'Components', href: '/docs/components' },
    { label: 'Navigation', href: '/docs/components/navigation' },
    { label: 'Breadcrumb Component' }
  ]}
/>`}
            </CodeBlock>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Single Item</h2>
            <div className="border border-current p-4">
              <Breadcrumb
                items={[
                  { label: 'Current Page' }
                ]}
              />
            </div>
            <CodeBlock language="tsx">
{`<Breadcrumb
  items={[
    { label: 'Current Page' }
  ]}
/>`}
            </CodeBlock>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Deep Navigation</h2>
            <div className="border border-current p-4">
              <Breadcrumb
                items={[
                  { label: 'Root', href: '/' },
                  { label: 'Level 1', href: '/level1' },
                  { label: 'Level 2', href: '/level1/level2' },
                  { label: 'Level 3', href: '/level1/level2/level3' },
                  { label: 'Level 4', href: '/level1/level2/level3/level4' },
                  { label: 'Current Page' }
                ]}
              />
            </div>
            <CodeBlock language="tsx">
{`<Breadcrumb
  items={[
    { label: 'Root', href: '/' },
    { label: 'Level 1', href: '/level1' },
    { label: 'Level 2', href: '/level1/level2' },
    { label: 'Level 3', href: '/level1/level2/level3' },
    { label: 'Level 4', href: '/level1/level2/level3/level4' },
    { label: 'Current Page' }
  ]}
/>`}
            </CodeBlock>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Features</h2>
            <div className="border border-current p-4 space-y-3">
              <p className="text-sm">
                <strong>Semantic HTML:</strong> Uses proper nav markup for accessibility
              </p>
              <p className="text-sm">
                <strong>Keyboard Navigation:</strong> Supports tab navigation through links
              </p>
              <p className="text-sm">
                <strong>Visual Separators:</strong> ChevronRight icons separate breadcrumb items
              </p>
              <p className="text-sm">
                <strong>Current Page Indication:</strong> Last item has bold font weight
              </p>
              <p className="text-sm">
                <strong>Hover Effects:</strong> Interactive links with underline on hover
              </p>
              <p className="text-sm">
                <strong>Responsive Design:</strong> Works well on all screen sizes
              </p>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">API</h2>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Breadcrumb</h3>
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
                        <td className="border border-current px-4 py-2 font-mono">items</td>
                        <td className="border border-current px-4 py-2 font-mono">BreadcrumbItem[]</td>
                        <td className="border border-current px-4 py-2 font-mono">required</td>
                        <td className="border border-current px-4 py-2">Array of breadcrumb items to display</td>
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
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">BreadcrumbItem</h3>
                <div className="overflow-x-auto">
                  <table className="w-full border-collapse border border-current">
                    <thead>
                      <tr className="border-b border-current">
                        <th className="border border-current px-4 py-2 text-left">Property</th>
                        <th className="border border-current px-4 py-2 text-left">Type</th>
                        <th className="border border-current px-4 py-2 text-left">Default</th>
                        <th className="border border-current px-4 py-2 text-left">Description</th>
                      </tr>
                    </thead>
                    <tbody className="text-sm">
                      <tr>
                        <td className="border border-current px-4 py-2 font-mono">label</td>
                        <td className="border border-current px-4 py-2 font-mono">string</td>
                        <td className="border border-current px-4 py-2 font-mono">required</td>
                        <td className="border border-current px-4 py-2">Text to display for this breadcrumb item</td>
                      </tr>
                      <tr>
                        <td className="border border-current px-4 py-2 font-mono">href</td>
                        <td className="border border-current px-4 py-2 font-mono">string</td>
                        <td className="border border-current px-4 py-2 font-mono">-</td>
                        <td className="border border-current px-4 py-2">URL to navigate to (omit for current page)</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          {/* Complete Example */}
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Complete Example</h2>
            
            <CodeBlock 
              language="tsx"
              filename="Complete Example"
            >
{`import { Breadcrumb, Button } from 'thereactui';
import { useState } from 'react';
import { Home, Package, ChevronLeft } from 'lucide-react';

export default function MyComponent() {
  const [currentPath, setCurrentPath] = useState(['dashboard', 'products', 'electronics']);
  
  const pathLabels = {
    dashboard: 'Dashboard',
    products: 'Products', 
    electronics: 'Electronics'
  };

  const createBreadcrumbItems = (path: string[]) => {
    return path.map((segment, index) => ({
      label: pathLabels[segment] || segment,
      href: '/' + path.slice(0, index + 1).join('/'),
      onClick: () => setCurrentPath(path.slice(0, index + 1))
    }));
  };

  const goBack = () => {
    if (currentPath.length > 1) {
      setCurrentPath(currentPath.slice(0, -1));
    }
  };

  return (
    <div className="space-y-4">
      {/* Navigation Header */}
      <div className="flex items-center justify-between">
        <h3>Current Location</h3>
        <Button
          variant="ghost"
          size="sm"
          onClick={goBack}
          disabled={currentPath.length <= 1}
          className="flex items-center gap-2"
        >
          <ChevronLeft size={16} />
          Back
        </Button>
      </div>
      
      {/* Breadcrumb */}
      <Breadcrumb items={createBreadcrumbItems(currentPath)} />
      
      {/* Quick Navigation */}
      <div className="flex gap-2">
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setCurrentPath(['dashboard'])}
        >
          <Home size={16} className="mr-2" />
          Home
        </Button>
        <Button
          variant="secondary"
          size="sm"
          onClick={() => setCurrentPath(['dashboard', 'products'])}
        >
          <Package size={16} className="mr-2" />
          Products
        </Button>
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
