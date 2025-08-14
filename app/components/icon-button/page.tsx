'use client';

import { DocLayout } from '../../../components/layout';
import { IconButton } from '../../../components/ui';
import { CodeBlock } from '../../../components/ui/CodeBlock';
import { Search, Heart, Settings, Download, Share, Plus } from 'lucide-react';

export default function IconButtonPage() {
  return (
    <DocLayout>
      <div className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-3xl font-bold">IconButton</h1>
          <p className="text-lg opacity-70">
            Square button component optimized for displaying icons
          </p>
        </header>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Import</h2>
            <CodeBlock 
              language="typescript"
              filename="Import"
            >
              {`import { IconButton } from 'thereactui';
import { Search } from 'lucide-react';`}
            </CodeBlock>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Usage</h2>
            <div className="border border-current p-4">
              <IconButton aria-label="Search">
                <Search size={16} />
              </IconButton>
            </div>
            <CodeBlock language="tsx">
{`<IconButton aria-label="Search">
  <Search size={16} />
</IconButton>`}
            </CodeBlock>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Variants</h2>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Primary</h3>
                <p className="text-sm opacity-70">Filled background, used for main actions</p>
                <div className="border border-current p-4">
                  <IconButton variant="primary" aria-label="Download">
                    <Download size={16} />
                  </IconButton>
                </div>
                <CodeBlock language="tsx">
{`<IconButton variant="primary" aria-label="Download">
  <Download size={16} />
</IconButton>`}
                </CodeBlock>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Secondary (Default)</h3>
                <p className="text-sm opacity-70">Border only, transparent background</p>
                <div className="border border-current p-4">
                  <IconButton variant="secondary" aria-label="Share">
                    <Share size={16} />
                  </IconButton>
                </div>
                <CodeBlock language="tsx">
{`<IconButton variant="secondary" aria-label="Share">
  <Share size={16} />
</IconButton>`}
                </CodeBlock>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Ghost</h3>
                <p className="text-sm opacity-70">No border, minimal styling</p>
                <div className="border border-current p-4">
                  <IconButton variant="ghost" aria-label="Settings">
                    <Settings size={16} />
                  </IconButton>
                </div>
                <CodeBlock language="tsx">
{`<IconButton variant="ghost" aria-label="Settings">
  <Settings size={16} />
</IconButton>`}
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
                  <IconButton size="sm" aria-label="Like">
                    <Heart size={14} />
                  </IconButton>
                </div>
                <CodeBlock language="tsx">
{`<IconButton size="sm" aria-label="Like">
  <Heart size={14} />
</IconButton>`}
                </CodeBlock>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Medium (Default)</h3>
                <div className="border border-current p-4">
                  <IconButton size="md" aria-label="Add">
                    <Plus size={16} />
                  </IconButton>
                </div>
                <CodeBlock language="tsx">
{`<IconButton size="md" aria-label="Add">
  <Plus size={16} />
</IconButton>`}
                </CodeBlock>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Large</h3>
                <div className="border border-current p-4">
                  <IconButton size="lg" aria-label="Search">
                    <Search size={20} />
                  </IconButton>
                </div>
                <CodeBlock language="tsx">
{`<IconButton size="lg" aria-label="Search">
  <Search size={20} />
</IconButton>`}
                </CodeBlock>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">States</h2>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Loading</h3>
                <p className="text-sm opacity-70">Shows spinner animation</p>
                <div className="border border-current p-4">
                  <IconButton loading aria-label="Loading">
                    <Download size={16} />
                  </IconButton>
                </div>
                <CodeBlock language="tsx">
{`<IconButton loading aria-label="Loading">
  <Download size={16} />
</IconButton>`}
                </CodeBlock>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Disabled</h3>
                <p className="text-sm opacity-70">Non-interactive state</p>
                <div className="border border-current p-4">
                  <IconButton disabled aria-label="Disabled">
                    <Settings size={16} />
                  </IconButton>
                </div>
                <CodeBlock language="tsx">
{`<IconButton disabled aria-label="Disabled">
  <Settings size={16} />
</IconButton>`}
                </CodeBlock>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Features</h2>
            <div className="border border-current p-4 space-y-3">
              <p className="text-sm">
                <strong>Icon-Only Design:</strong> Compact buttons designed specifically for icons
              </p>
              <p className="text-sm">
                <strong>Multiple Variants:</strong> Primary, secondary, destructive, outline, and ghost styles
              </p>
              <p className="text-sm">
                <strong>Size Options:</strong> Small, medium, and large button sizes
              </p>
              <p className="text-sm">
                <strong>Square Aspect Ratio:</strong> Maintains perfect square proportions for icons
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
                    <td className="border border-current px-4 py-2 font-mono">variant</td>
                    <td className="border border-current px-4 py-2 font-mono">'primary' | 'secondary' | 'ghost'</td>
                    <td className="border border-current px-4 py-2 font-mono">'secondary'</td>
                    <td className="border border-current px-4 py-2">Visual style variant</td>
                  </tr>
                  <tr>
                    <td className="border border-current px-4 py-2 font-mono">size</td>
                    <td className="border border-current px-4 py-2 font-mono">'sm' | 'md' | 'lg'</td>
                    <td className="border border-current px-4 py-2 font-mono">'md'</td>
                    <td className="border border-current px-4 py-2">Button size (square)</td>
                  </tr>
                  <tr>
                    <td className="border border-current px-4 py-2 font-mono">loading</td>
                    <td className="border border-current px-4 py-2 font-mono">boolean</td>
                    <td className="border border-current px-4 py-2 font-mono">false</td>
                    <td className="border border-current px-4 py-2">Show loading spinner</td>
                  </tr>
                  <tr>
                    <td className="border border-current px-4 py-2 font-mono">disabled</td>
                    <td className="border border-current px-4 py-2 font-mono">boolean</td>
                    <td className="border border-current px-4 py-2 font-mono">false</td>
                    <td className="border border-current px-4 py-2">Disabled state</td>
                  </tr>
                  <tr>
                    <td className="border border-current px-4 py-2 font-mono">aria-label</td>
                    <td className="border border-current px-4 py-2 font-mono">string</td>
                    <td className="border border-current px-4 py-2 font-mono">required</td>
                    <td className="border border-current px-4 py-2">Accessibility label (required)</td>
                  </tr>
                  <tr>
                    <td className="border border-current px-4 py-2 font-mono">children</td>
                    <td className="border border-current px-4 py-2 font-mono">React.ReactNode</td>
                    <td className="border border-current px-4 py-2 font-mono">-</td>
                    <td className="border border-current px-4 py-2">Icon content</td>
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
{`import { IconButton } from 'thereactui';
import { useState } from 'react';
import { Heart, Share, Settings, Download, Plus, Trash } from 'lucide-react';

export default function MyComponent() {
  const [liked, setLiked] = useState(false);
  const [downloading, setDownloading] = useState(false);

  const handleDownload = async () => {
    setDownloading(true);
    // Simulate download
    await new Promise(resolve => setTimeout(resolve, 2000));
    setDownloading(false);
    console.log('File downloaded!');
  };

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: 'Check this out!',
        url: window.location.href,
      });
    } else {
      console.log('Share not supported');
    }
  };

  return (
    <div className="space-y-6">
      {/* Action Bar */}
      <div className="flex items-center gap-2 p-4 border border-current">
        <IconButton
          variant={liked ? 'primary' : 'secondary'}
          aria-label={liked ? 'Unlike' : 'Like'}
          onClick={() => setLiked(!liked)}
        >
          <Heart size={16} fill={liked ? 'currentColor' : 'none'} />
        </IconButton>
        
        <IconButton
          variant="secondary"
          aria-label="Share"
          onClick={handleShare}
        >
          <Share size={16} />
        </IconButton>
        
        <IconButton
          variant="secondary"
          aria-label="Download"
          loading={downloading}
          onClick={handleDownload}
        >
          <Download size={16} />
        </IconButton>
        
        <div className="ml-auto flex gap-1">
          <IconButton
            size="sm"
            variant="ghost"
            aria-label="Settings"
          >
            <Settings size={14} />
          </IconButton>
          
          <IconButton
            size="sm"
            variant="ghost"
            aria-label="Delete"
            className="text-red-600 hover:bg-red-600 hover:text-white"
          >
            <Trash size={14} />
          </IconButton>
        </div>
      </div>
      
      {/* Floating Action Button */}
      <div className="fixed bottom-6 right-6">
        <IconButton
          variant="primary"
          size="lg"
          aria-label="Add new item"
          className="rounded-full shadow-lg"
        >
          <Plus size={24} />
        </IconButton>
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
