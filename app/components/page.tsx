'use client';

import { DocLayout } from '../../components/layout';
import { Button, Input, CopyButton, IconButton, Breadcrumb, Modal, CodeBlock, Card, CardHeader, CardContent, CardFooter, Badge, Tooltip } from '../../components/ui';
import { ArrowRight, FileText, Copy } from 'lucide-react';
import { useState } from 'react';

export default function ComponentsPage() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <DocLayout>
      <div className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-3xl font-bold">Components</h1>
          <p className="text-lg opacity-70">
            All available theReactUI components following minimalist design principles
          </p>
        </header>

        <div className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Available Components</h2>
            
            <div className="grid gap-4">
              {/* Button Component */}
              <div className="border border-current p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Button</h3>
                    <p className="text-sm opacity-70">
                      Primary, secondary, and ghost button variants with multiple sizes
                    </p>
                  </div>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => window.location.href = '/components/button'}
                    className="flex items-center gap-1"
                  >
                    <FileText size={14} />
                    View Details
                  </Button>
                </div>
                <div className="flex gap-3">
                  <Button variant="primary" size="sm">Primary</Button>
                  <Button variant="secondary" size="sm">Secondary</Button>
                  <Button variant="ghost" size="sm">Ghost</Button>
                </div>
              </div>

              {/* Input Component */}
              <div className="border border-current p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Input</h3>
                    <p className="text-sm opacity-70">
                      Versatile input component with multiple variants, sizes, and states
                    </p>
                  </div>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => window.location.href = '/components/input'}
                    className="flex items-center gap-1"
                  >
                    <FileText size={14} />
                    View Details
                  </Button>
                </div>
                <div className="flex gap-3 flex-wrap">
                  <Input size="sm" placeholder="Small input" />
                  <Input size="md" placeholder="Medium input" />
                </div>
              </div>

              {/* CopyButton Component */}
              <div className="border border-current p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">CopyButton</h3>
                    <p className="text-sm opacity-70">
                      One-click copy functionality with visual feedback
                    </p>
                  </div>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => window.location.href = '/components/copy-button'}
                    className="flex items-center gap-1"
                  >
                    <FileText size={14} />
                    View Details
                  </Button>
                </div>
                <div className="flex gap-3 items-center">
                  <span className="text-sm">Copy this text:</span>
                  <code className="px-2 py-1 border border-current text-sm">Hello theReactUI!</code>
                  <CopyButton text="Hello theReactUI!" />
                </div>
              </div>

              {/* IconButton Component */}
              <div className="border border-current p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">IconButton</h3>
                    <p className="text-sm opacity-70">
                      Button component optimized for icons with multiple sizes
                    </p>
                  </div>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => window.location.href = '/components/icon-button'}
                    className="flex items-center gap-1"
                  >
                    <FileText size={14} />
                    View Details
                  </Button>
                </div>
                <div className="flex gap-3 items-center">
                  <IconButton size="sm" aria-label="Copy small">
                    <Copy size={14} />
                  </IconButton>
                  <IconButton size="md" aria-label="Copy medium">
                    <Copy size={16} />
                  </IconButton>
                  <IconButton size="lg" aria-label="Copy large">
                    <Copy size={18} />
                  </IconButton>
                </div>
              </div>

              {/* Breadcrumb Component */}
              <div className="border border-current p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Breadcrumb</h3>
                    <p className="text-sm opacity-70">
                      Navigation breadcrumbs with customizable separators
                    </p>
                  </div>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => window.location.href = '/components/breadcrumb'}
                    className="flex items-center gap-1"
                  >
                    <FileText size={14} />
                    View Details
                  </Button>
                </div>
                <div>
                  <Breadcrumb 
                    items={[
                      { label: 'Home', href: '/' },
                      { label: 'Components', href: '/components' },
                      { label: 'Breadcrumb' }
                    ]}
                  />
                </div>
              </div>

              {/* Modal Component */}
              <div className="border border-current p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Modal</h3>
                    <p className="text-sm opacity-70">
                      Dialog modal with backdrop, keyboard navigation, and focus management
                    </p>
                  </div>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => window.location.href = '/components/modal'}
                    className="flex items-center gap-1"
                  >
                    <FileText size={14} />
                    View Details
                  </Button>
                </div>
                <div>
                  <Button variant="primary" onClick={() => setModalOpen(true)}>
                    Open Modal
                  </Button>
                  
                  <Modal
                    isOpen={modalOpen}
                    onClose={() => setModalOpen(false)}
                    title="Example Modal"
                    size="sm"
                  >
                    <p className="mb-4">
                      This is an example modal with theReactUI styling. Pure black and white design with no border-radius.
                    </p>
                    <div className="flex gap-2">
                      <Button variant="primary" onClick={() => setModalOpen(false)}>
                        Close
                      </Button>
                      <Button variant="secondary" onClick={() => setModalOpen(false)}>
                        Cancel
                      </Button>
                    </div>
                  </Modal>
                </div>
              </div>

              {/* CodeBlock Component */}
              <div className="border border-current p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">CodeBlock</h3>
                    <p className="text-sm opacity-70">
                      Syntax-highlighted code blocks with copy functionality
                    </p>
                  </div>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => window.location.href = '/components/code-block'}
                    className="flex items-center gap-1"
                  >
                    <FileText size={14} />
                    View Details
                  </Button>
                </div>
                <div className="text-sm">
                  <div className="border border-current">
                    <div className="border-b border-current px-3 py-2 font-mono text-xs">
                      Example.tsx
                    </div>
                    <div className="p-3 font-mono">
                      <span className="opacity-70">import</span> {`{ Button }`} <span className="opacity-70">from</span> <span className="opacity-70">'thereactui'</span>;
                    </div>
                  </div>
                </div>
              </div>

              {/* ButtonGroup Component */}
              <div className="border border-current p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">ButtonGroup</h3>
                    <p className="text-sm opacity-70">
                      Group multiple buttons together with connected borders
                    </p>
                  </div>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => window.location.href = '/components/button-group'}
                    className="flex items-center gap-1"
                  >
                    <FileText size={14} />
                    View Details
                  </Button>
                </div>
                <div className="flex">
                  <Button variant="secondary" size="sm" className="border-r-0">First</Button>
                  <Button variant="secondary" size="sm" className="border-r-0">Second</Button>
                  <Button variant="secondary" size="sm">Third</Button>
                </div>
              </div>

              {/* Card Component */}
              <div className="border border-current p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Card</h3>
                    <p className="text-sm opacity-70">
                      Flexible container component for grouping related content with consistent spacing
                    </p>
                  </div>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => window.location.href = '/components/card'}
                    className="flex items-center gap-1"
                  >
                    <FileText size={14} />
                    View Details
                  </Button>
                </div>
                <div className="space-y-3">
                  <Card variant="bordered" padding="sm">
                    <CardHeader>
                      <h4 className="font-semibold text-sm">Sample Card</h4>
                    </CardHeader>
                    <CardContent>
                      <p className="text-xs">Card content with header and footer sections.</p>
                    </CardContent>
                    <CardFooter>
                      <Button size="sm" variant="primary">Action</Button>
                    </CardFooter>
                  </Card>
                </div>
              </div>

              {/* Badge Component */}
              <div className="border border-current p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Badge</h3>
                    <p className="text-sm opacity-70">
                      Small status indicators and labels for displaying concise information
                    </p>
                  </div>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => window.location.href = '/components/badge'}
                    className="flex items-center gap-1"
                  >
                    <FileText size={14} />
                    View Details
                  </Button>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <Badge variant="primary" size="sm">Primary</Badge>
                  <Badge variant="success" size="sm">Success</Badge>
                  <Badge variant="warning" size="sm">Warning</Badge>
                  <Badge variant="error" size="sm">Error</Badge>
                  <Badge variant="secondary" outline size="sm">Outline</Badge>
                </div>
              </div>

              {/* Tooltip Component */}
              <div className="border border-current p-6 space-y-4">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="text-lg font-semibold">Tooltip</h3>
                    <p className="text-sm opacity-70">
                      Contextual information displayed on hover or focus with smart positioning
                    </p>
                  </div>
                  <Button 
                    variant="secondary" 
                    size="sm"
                    onClick={() => window.location.href = '/components/tooltip'}
                    className="flex items-center gap-1"
                  >
                    <FileText size={14} />
                    View Details
                  </Button>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <Tooltip content="This is a tooltip">
                    <Button variant="primary" size="sm">Hover me</Button>
                  </Tooltip>
                  <Tooltip content="Copy to clipboard" placement="bottom">
                    <IconButton variant="secondary" size="sm" aria-label="Copy">
                      <Copy size={14} />
                    </IconButton>
                  </Tooltip>
                  <Tooltip content="More information" placement="right">
                    <Button variant="ghost" size="sm">Help</Button>
                  </Tooltip>
                </div>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Design Guidelines</h2>
            <div className="space-y-3">
              <div className="border border-current p-4">
                <h3 className="font-semibold mb-2">Consistent Spacing</h3>
                <p className="text-sm">All components use Tailwind's spacing scale for consistency.</p>
              </div>
              <div className="border border-current p-4">
                <h3 className="font-semibold mb-2">Keyboard Navigation</h3>
                <p className="text-sm">Full keyboard support with proper focus management.</p>
              </div>
              <div className="border border-current p-4">
                <h3 className="font-semibold mb-2">Screen Reader Support</h3>
                <p className="text-sm">ARIA labels and semantic HTML for accessibility.</p>
              </div>
              <div className="border border-current p-4">
                <h3 className="font-semibold mb-2">No Border Radius</h3>
                <p className="text-sm">Sharp, clean edges everywhere following theReactUI principles.</p>
              </div>
              <div className="border border-current p-4">
                <h3 className="font-semibold mb-2">Pure Black & White</h3>
                <p className="text-sm">Only pure black and white colors, no grays or other colors.</p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </DocLayout>
  );
}
