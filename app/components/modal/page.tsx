'use client';

import { useState } from 'react';
import { DocLayout } from '@/components/layout';
import { Modal, Button, Input, CopyButton } from '@/components/ui';
import { CodeBlock } from '@/components/ui';

export default function ModalPage() {
  const [basicModalOpen, setBasicModalOpen] = useState(false);
  const [sizeModalOpen, setSizeModalOpen] = useState(false);
  const [currentSize, setCurrentSize] = useState<'sm' | 'md' | 'lg' | 'xl'>('md');
  const [customModalOpen, setCustomModalOpen] = useState(false);
  const [formModalOpen, setFormModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleSizeModal = (size: 'sm' | 'md' | 'lg' | 'xl') => {
    setCurrentSize(size);
    setSizeModalOpen(true);
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setFormModalOpen(false);
    setFormData({ name: '', email: '' });
  };

  return (
    <DocLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Modal</h1>
          <p className="text-lg">
            A modal dialog component with backdrop, keyboard navigation, and focus management.
          </p>
        </div>

        {/* Import */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Import</h2>
          <CodeBlock language="tsx" filename="import.tsx">
{`import { Modal } from '@/components/ui';`}
          </CodeBlock>
        </div>

        {/* Basic Usage */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Basic Usage</h2>
          <div className="p-6 border border-current">
            <Button variant="primary" onClick={() => setBasicModalOpen(true)}>
              Open Modal
            </Button>
            
            <Modal
              isOpen={basicModalOpen}
              onClose={() => setBasicModalOpen(false)}
              title="Basic Modal"
            >
              <p className="mb-4">
                This is a basic modal with a title. Click the X button, press ESC, or click the backdrop to close.
              </p>
              <div className="flex gap-2">
                <Button variant="primary" onClick={() => setBasicModalOpen(false)}>
                  Close Modal
                </Button>
                <Button variant="secondary" onClick={() => setBasicModalOpen(false)}>
                  Cancel
                </Button>
              </div>
            </Modal>
          </div>
          <CodeBlock language="tsx" filename="basic-modal.tsx">
{`const [isOpen, setIsOpen] = useState(false);

<Button variant="primary" onClick={() => setIsOpen(true)}>
  Open Modal
</Button>

<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Basic Modal"
>
  <p>Modal content goes here</p>
  <Button onClick={() => setIsOpen(false)}>
    Close
  </Button>
</Modal>`}
          </CodeBlock>
        </div>

        {/* Sizes */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Sizes</h2>
          <div className="p-6 border border-current">
            <div className="flex gap-2 mb-4">
              <Button variant="secondary" onClick={() => handleSizeModal('sm')}>
                Small
              </Button>
              <Button variant="secondary" onClick={() => handleSizeModal('md')}>
                Medium
              </Button>
              <Button variant="secondary" onClick={() => handleSizeModal('lg')}>
                Large
              </Button>
              <Button variant="secondary" onClick={() => handleSizeModal('xl')}>
                Extra Large
              </Button>
            </div>
            
            <Modal
              isOpen={sizeModalOpen}
              onClose={() => setSizeModalOpen(false)}
              title={`${currentSize.toUpperCase()} Modal`}
              size={currentSize}
            >
              <p className="mb-4">
                This is a {currentSize} sized modal. The modal adapts its width based on the size prop.
              </p>
              <Button variant="primary" onClick={() => setSizeModalOpen(false)}>
                Close
              </Button>
            </Modal>
          </div>
          <CodeBlock language="tsx" filename="modal-sizes.tsx">
{`<Modal size="sm" title="Small Modal">
  <p>Small modal content</p>
</Modal>

<Modal size="md" title="Medium Modal">
  <p>Medium modal content</p>
</Modal>

<Modal size="lg" title="Large Modal">
  <p>Large modal content</p>
</Modal>

<Modal size="xl" title="Extra Large Modal">
  <p>Extra large modal content</p>
</Modal>`}
          </CodeBlock>
        </div>

        {/* Custom Styling */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Custom Styling</h2>
          <div className="p-6 border border-current">
            <Button variant="ghost" onClick={() => setCustomModalOpen(true)}>
              Open Custom Modal
            </Button>
            
            <Modal
              isOpen={customModalOpen}
              onClose={() => setCustomModalOpen(false)}
              title="Custom Styled Modal"
              className="border-2 border-current"
              overlayClassName="backdrop-blur-sm"
            >
              <div className="space-y-4">
                <p>
                  This modal has custom styling with a thicker border and blurred backdrop.
                </p>
                <div className="p-4 border border-current">
                  <p className="text-sm">
                    Custom content area with additional styling.
                  </p>
                </div>
                <Button variant="primary" onClick={() => setCustomModalOpen(false)}>
                  Close
                </Button>
              </div>
            </Modal>
          </div>
          <CodeBlock language="tsx" filename="custom-modal.tsx">
{`<Modal
  isOpen={isOpen}
  onClose={() => setIsOpen(false)}
  title="Custom Modal"
  className="border-2 border-current"
  overlayClassName="backdrop-blur-sm"
>
  <div className="p-4 border border-current">
    <p>Custom styled content</p>
  </div>
</Modal>`}
          </CodeBlock>
        </div>

        {/* Form Modal */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Form Modal</h2>
          <div className="p-6 border border-current">
            <Button variant="primary" onClick={() => setFormModalOpen(true)}>
              Open Form Modal
            </Button>
            
            <Modal
              isOpen={formModalOpen}
              onClose={() => setFormModalOpen(false)}
              title="Contact Form"
              size="md"
            >
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <Input
                  label="Name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Enter your name"
                  required
                />
                <Input
                  label="Email"
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="Enter your email"
                  required
                />
                <div className="flex justify-end gap-2 pt-4">
                  <Button 
                    type="button"
                    variant="secondary" 
                    onClick={() => setFormModalOpen(false)}
                  >
                    Cancel
                  </Button>
                  <Button type="submit" variant="primary">
                    Submit
                  </Button>
                </div>
              </form>
            </Modal>
          </div>
          <CodeBlock language="tsx" filename="form-modal.tsx">
{`const [formData, setFormData] = useState({ name: '', email: '' });

const handleSubmit = (e) => {
  e.preventDefault();
  console.log('Submitted:', formData);
  setIsOpen(false);
};

<Modal isOpen={isOpen} onClose={() => setIsOpen(false)} title="Form">
  <form onSubmit={handleSubmit}>
    <Input
      label="Name"
      value={formData.name}
      onChange={(e) => setFormData({...formData, name: e.target.value})}
    />
    <Button type="submit">Submit</Button>
  </form>
</Modal>`}
          </CodeBlock>
        </div>


        {/* Features */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Features</h2>
          <div className="border border-current p-4 space-y-3">
            <p className="text-sm">
              <strong>Portal Rendering:</strong> Renders outside the normal DOM tree
            </p>
            <p className="text-sm">
              <strong>Backdrop Click:</strong> Close modal by clicking outside (configurable)
            </p>
            <p className="text-sm">
              <strong>ESC Key:</strong> Close modal with escape key (configurable)
            </p>
            <p className="text-sm">
              <strong>Focus Management:</strong> Automatically focuses modal and restores previous focus
            </p>
            <p className="text-sm">
              <strong>Focus Trap:</strong> Keyboard navigation stays within the modal
            </p>
            <p className="text-sm">
              <strong>Body Scroll Lock:</strong> Prevents background scrolling when modal is open
            </p>
            <p className="text-sm">
              <strong>Accessibility:</strong> Full ARIA support with role="dialog" and aria-modal
            </p>
            <p className="text-sm">
              <strong>Responsive:</strong> Adapts to different screen sizes
            </p>
            <p className="text-sm">
              <strong>Customizable:</strong> Supports custom styling via className props
            </p>
          </div>
        </div>

        {/* API Reference */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">API Reference</h2>
          <div className="overflow-x-auto">
            <table className="w-full border border-current">
              <thead>
                <tr className="border-b border-current">
                  <th className="text-left p-3 font-semibold border-r border-current">Prop</th>
                  <th className="text-left p-3 font-semibold border-r border-current">Type</th>
                  <th className="text-left p-3 font-semibold border-r border-current">Default</th>
                  <th className="text-left p-3 font-semibold">Description</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-current">
                  <td className="p-3 border-r border-current font-mono text-sm">isOpen</td>
                  <td className="p-3 border-r border-current">boolean</td>
                  <td className="p-3 border-r border-current">-</td>
                  <td className="p-3">Whether the modal is open</td>
                </tr>
                <tr className="border-b border-current">
                  <td className="p-3 border-r border-current font-mono text-sm">onClose</td>
                  <td className="p-3 border-r border-current">() =&gt; void</td>
                  <td className="p-3 border-r border-current">-</td>
                  <td className="p-3">Function called when modal should close</td>
                </tr>
                <tr className="border-b border-current">
                  <td className="p-3 border-r border-current font-mono text-sm">title</td>
                  <td className="p-3 border-r border-current">string</td>
                  <td className="p-3 border-r border-current">-</td>
                  <td className="p-3">Modal title displayed in header</td>
                </tr>
                <tr className="border-b border-current">
                  <td className="p-3 border-r border-current font-mono text-sm">size</td>
                  <td className="p-3 border-r border-current">'sm' | 'md' | 'lg' | 'xl'</td>
                  <td className="p-3 border-r border-current">'md'</td>
                  <td className="p-3">Modal width size</td>
                </tr>
                <tr className="border-b border-current">
                  <td className="p-3 border-r border-current font-mono text-sm">closeOnBackdropClick</td>
                  <td className="p-3 border-r border-current">boolean</td>
                  <td className="p-3 border-r border-current">true</td>
                  <td className="p-3">Whether clicking backdrop closes modal</td>
                </tr>
                <tr className="border-b border-current">
                  <td className="p-3 border-r border-current font-mono text-sm">closeOnEsc</td>
                  <td className="p-3 border-r border-current">boolean</td>
                  <td className="p-3 border-r border-current">true</td>
                  <td className="p-3">Whether pressing Escape closes modal</td>
                </tr>
                <tr className="border-b border-current">
                  <td className="p-3 border-r border-current font-mono text-sm">className</td>
                  <td className="p-3 border-r border-current">string</td>
                  <td className="p-3 border-r border-current">''</td>
                  <td className="p-3">Additional CSS classes for modal content</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-current font-mono text-sm">overlayClassName</td>
                  <td className="p-3 border-r border-current">string</td>
                  <td className="p-3 border-r border-current">''</td>
                  <td className="p-3">Additional CSS classes for overlay</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* Complete Example */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Complete Example</h2>
          <CodeBlock 
            language="tsx"
            filename="Complete Example"
          >
{`import { Modal, Button, Input } from 'thereactui';
import { useState } from 'react';
import { User, Mail, Plus, Save, X } from 'lucide-react';

export default function MyComponent() {
  const [contacts, setContacts] = useState([
    { id: '1', name: 'John Doe', email: 'john@example.com' }
  ]);
  
  const [isCreateModalOpen, setIsCreateModalOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '' });

  const handleCreate = () => {
    const newContact = {
      id: Date.now().toString(),
      ...formData
    };
    setContacts([...contacts, newContact]);
    setFormData({ name: '', email: '' });
    setIsCreateModalOpen(false);
  };

  return (
    <div className="space-y-4">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h3>Contact Management</h3>
        <Button
          variant="primary"
          onClick={() => setIsCreateModalOpen(true)}
          className="flex items-center gap-2"
        >
          <Plus size={16} />
          Add Contact
        </Button>
      </div>

      {/* Contacts List */}
      <div className="space-y-2">
        {contacts.map((contact) => (
          <div key={contact.id} className="p-3 border border-current bg-muted">
            <div className="flex items-center gap-3">
              <User size={16} />
              <div>
                <div className="font-medium">{contact.name}</div>
                <div className="text-sm opacity-70">{contact.email}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Create Contact Modal */}
      <Modal
        isOpen={isCreateModalOpen}
        onClose={() => setIsCreateModalOpen(false)}
        title="Add New Contact"
        size="md"
      >
        <div className="space-y-4">
          <Input
            label="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter name"
            leftIcon={<User size={16} />}
          />
          <Input
            label="Email"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            placeholder="Enter email"
            leftIcon={<Mail size={16} />}
          />
          
          <div className="flex gap-3 pt-4">
            <Button
              variant="primary"
              onClick={handleCreate}
              disabled={!formData.name || !formData.email}
              className="flex items-center gap-2"
            >
              <Save size={16} />
              Create
            </Button>
            <Button
              variant="secondary"
              onClick={() => setIsCreateModalOpen(false)}
              className="flex items-center gap-2"
            >
              <X size={16} />
              Cancel
            </Button>
          </div>
        </div>
      </Modal>
    </div>
  );
}`}
          </CodeBlock>
        </div>

        
      </div>
    </DocLayout>
  );
}
