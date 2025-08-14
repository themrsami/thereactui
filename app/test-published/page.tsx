'use client';

import { 
  Button,
  Input,
  CopyButton,
  IconButton,
  ButtonGroup,
  Breadcrumb,
  CodeBlock,
  Modal,
  Card,
  CardHeader,
  CardContent,
  CardFooter,
  Badge,
  Tooltip,
  TheReactUIProvider
} from 'thereactui';
import { useState, ChangeEvent } from 'react';
import { Copy, Heart, Star, Home, Info, Settings, User, Mail, Download } from 'lucide-react';

export default function TestPublishedPage() {
  const [copyText, setCopyText] = useState('Hello from published TheReactUI v1.2.0!');
  const [inputValue, setInputValue] = useState('');
  const [modalOpen, setModalOpen] = useState(false);

  const breadcrumbItems = [
    { label: 'Home', href: '/' },
    { label: 'Components', href: '/components' },
    { label: 'Test Published', href: '/test-published' }
  ];

  const sampleCode = `import { Button, Input, IconButton, CopyButton, Modal, Card, Badge, Tooltip } from 'thereactui';

function MyComponent() {
  return (
    <div>
      <Button variant="primary">Click me</Button>
      <Input placeholder="Enter text" />
      <Tooltip content="This is a tooltip">
        <IconButton variant="secondary" aria-label="Heart">
          <Heart />
        </IconButton>
      </Tooltip>
      <Card variant="bordered">
        <CardContent>
          <Badge variant="success">New v1.2.0</Badge>
        </CardContent>
      </Card>
      <CopyButton text="Copy this!" />
    </div>
  );
}`;

  return (
    <TheReactUIProvider>
      <div className="container mx-auto p-8 max-w-4xl">
        <h1 className="text-3xl font-bold mb-8">Testing Published TheReactUI Package v1.2.0</h1>
        
        <div className="mb-6 p-4 border border-current bg-background">
          <h3 className="text-lg font-semibold mb-2">
            ✅ All 11 Components from NPM Package
          </h3>
          <p className="text-sm opacity-70">
            Successfully importing: Button, Input, CopyButton, IconButton, ButtonGroup, Breadcrumb, CodeBlock, Modal, Card, Badge, Tooltip, TheReactUIProvider
          </p>
        </div>
        
        <div className="space-y-8">
          {/* Breadcrumb Test */}
          <div className="p-6 border border-current">
            <h2 className="text-xl font-semibold mb-4">Breadcrumb Component</h2>
            <Breadcrumb items={breadcrumbItems} />
          </div>

          {/* Button Tests */}
          <div className="p-6 border border-current">
            <h2 className="text-xl font-semibold mb-4">Button Components</h2>
            <div className="flex flex-wrap gap-4 mb-4">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="ghost">Ghost Button</Button>
              <Button>Default Button</Button>
            </div>
            <div className="flex flex-wrap gap-4">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          {/* ButtonGroup Test */}
          <div className="p-6 border border-current">
            <h2 className="text-xl font-semibold mb-4">ButtonGroup Component</h2>
            <ButtonGroup>
              <Button variant="secondary">First</Button>
              <Button variant="secondary">Second</Button>
              <Button variant="secondary">Third</Button>
            </ButtonGroup>
          </div>

          {/* IconButton Tests */}
          <div className="p-6 border border-current">
            <h2 className="text-xl font-semibold mb-4">IconButton Component</h2>
            <div className="flex flex-wrap gap-4 mb-4">
              <IconButton variant="primary" aria-label="Like"><Heart /></IconButton>
              <IconButton variant="secondary" aria-label="Star"><Star /></IconButton>
              <IconButton variant="ghost" aria-label="Copy"><Copy /></IconButton>
              <IconButton aria-label="Home"><Home /></IconButton>
            </div>
            <div className="flex flex-wrap gap-4">
              <IconButton size="sm" aria-label="Like"><Heart /></IconButton>
              <IconButton size="md" aria-label="Star"><Star /></IconButton>
              <IconButton size="lg" aria-label="Copy"><Copy /></IconButton>
            </div>
          </div>

          {/* Tooltip Tests */}
          <div className="p-6 border border-current">
            <h2 className="text-xl font-semibold mb-4">Tooltip Component (NEW v1.2.0)</h2>
            <div className="flex flex-wrap gap-4 mb-4">
              <Tooltip content="This is a tooltip">
                <Button variant="primary">Hover me</Button>
              </Tooltip>
              <Tooltip content="Click to copy" placement="bottom">
                <IconButton variant="secondary" aria-label="Copy">
                  <Copy />
                </IconButton>
              </Tooltip>
              <Tooltip content="Settings panel" placement="right">
                <IconButton variant="ghost" aria-label="Settings">
                  <Settings />
                </IconButton>
              </Tooltip>
            </div>
            <div className="flex items-center gap-2">
              <span>Form help:</span>
              <Tooltip content="We'll never share your email address">
                <Info size={16} className="cursor-help opacity-70" />
              </Tooltip>
            </div>
          </div>

          {/* Badge Tests */}
          <div className="p-6 border border-current">
            <h2 className="text-xl font-semibold mb-4">Badge Component (NEW v1.2.0)</h2>
            <div className="flex flex-wrap gap-4 mb-4">
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
              <Badge variant="success">Success</Badge>
              <Badge variant="warning">Warning</Badge>
              <Badge variant="error">Error</Badge>
            </div>
            <div className="flex flex-wrap gap-4">
              <Badge variant="primary" outline>Outline Primary</Badge>
              <Badge variant="success" outline>Outline Success</Badge>
              <Badge variant="error" outline>Outline Error</Badge>
            </div>
          </div>

          {/* Card Tests */}
          <div className="p-6 border border-current">
            <h2 className="text-xl font-semibold mb-4">Card Component (NEW v1.2.0)</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card variant="default">
                <CardContent>
                  <h3 className="font-semibold mb-2">Default Card</h3>
                  <p className="text-sm opacity-70">This is a default card variant.</p>
                </CardContent>
              </Card>
              
              <Card variant="bordered">
                <CardHeader>
                  <h3 className="font-semibold">Bordered Card</h3>
                </CardHeader>
                <CardContent>
                  <p className="text-sm opacity-70">Card with header and border.</p>
                </CardContent>
                <CardFooter>
                  <Button size="sm" variant="primary">Action</Button>
                </CardFooter>
              </Card>
            </div>
          </div>

          {/* Modal Test */}
          <div className="p-6 border border-current">
            <h2 className="text-xl font-semibold mb-4">Modal Component (NEW v1.2.0)</h2>
            <Button variant="primary" onClick={() => setModalOpen(true)}>
              Open Modal
            </Button>
            
            <Modal
              isOpen={modalOpen}
              onClose={() => setModalOpen(false)}
              title="Test Modal from NPM Package"
              size="md"
            >
              <div className="space-y-4">
                <p>This modal is imported from the published theReactUI v1.2.0 package!</p>
                <div className="flex gap-2">
                  <Badge variant="success">Working</Badge>
                  <Badge variant="primary">v1.2.0</Badge>
                </div>
                <div className="flex gap-2">
                  <Button variant="primary" onClick={() => setModalOpen(false)}>
                    Close
                  </Button>
                  <Button variant="secondary" onClick={() => setModalOpen(false)}>
                    Cancel
                  </Button>
                </div>
              </div>
            </Modal>
          </div>

          {/* Input Tests */}
          <div className="p-6 border border-current">
            <h2 className="text-xl font-semibold mb-4">Input Component</h2>
            <div className="space-y-4">
              <Input
                label="Default Input"
                placeholder="Test the new Input component"
                value={inputValue}
                onChange={(e: ChangeEvent<HTMLInputElement>) => setInputValue(e.target.value)}
                helperText="This Input component is from the published NPM package!"
              />
              <Input
                label="Error State"
                placeholder="Error example"
                variant="error"
                errorMessage="This shows the error state"
              />
              <Input
                label="Success State"
                placeholder="Success example"
                variant="success"
                helperText="This shows the success state"
              />
              <div className="flex gap-4">
                <Input size="sm" placeholder="Small input" />
                <Input size="md" placeholder="Medium input" />
                <Input size="lg" placeholder="Large input" />
              </div>
            </div>
          </div>

          {/* CopyButton Tests */}
          <div className="p-6 border border-current">
            <h2 className="text-xl font-semibold mb-4">CopyButton Component</h2>
            <div className="space-y-4">
              <div className="flex items-center gap-4">
                <span className="text-sm opacity-70">Copy this text:</span>
                <code className="px-2 py-1 border border-current text-sm">
                  {copyText}
                </code>
                <CopyButton text={copyText} />
              </div>
              <div className="flex items-center gap-4">
                <span className="text-sm opacity-70">Copy with custom text:</span>
                <CopyButton text="Custom copy text from v1.2.0!" />
              </div>
            </div>
          </div>

          {/* CodeBlock Test */}
          <div className="p-6 border border-current">
            <h2 className="text-xl font-semibold mb-4">CodeBlock Component</h2>
            <CodeBlock
              language="javascript"
              filename="MyComponent.jsx"
            >
              {sampleCode}
            </CodeBlock>
          </div>

          {/* Button States */}
          <div className="p-6 border border-current">
            <h2 className="text-xl font-semibold mb-4">Button States</h2>
            <div className="flex flex-wrap gap-4">
              <Button disabled>Disabled Button</Button>
              <Button variant="primary" disabled>Disabled Primary</Button>
              <Button loading>Loading Button</Button>
              <Button variant="secondary" loading>Loading Secondary</Button>
            </div>
          </div>
        </div>

        <div className="mt-8 p-4 border border-current bg-background">
          <h3 className="text-lg font-semibold mb-2">
            🎉 Success! All 11 Components Working from NPM Package v1.2.0
          </h3>
          <p className="opacity-70 mb-2">
            All components are successfully imported and working from the thereactui NPM package!
          </p>
          <div className="text-sm opacity-80">
            <strong>Working Components:</strong> Button, Input, CopyButton, IconButton, ButtonGroup, Breadcrumb, CodeBlock, Modal, Card, Badge, Tooltip
          </div>
          <div className="mt-2">
            <Badge variant="success">All Working</Badge>
            <Badge variant="primary" className="ml-2">v1.2.0</Badge>
          </div>
        </div>
      </div>
    </TheReactUIProvider>
  );
}
