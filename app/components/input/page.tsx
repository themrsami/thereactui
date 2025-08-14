'use client';

import { useState } from 'react';
import { DocLayout } from '../../../components/layout';
import { Input } from '../../../components/ui/Input';
import { CodeBlock } from '../../../components/ui/CodeBlock';

export default function InputPage() {
  const [basicValue, setBasicValue] = useState('');
  const [emailValue, setEmailValue] = useState('');
  const [passwordValue, setPasswordValue] = useState('');
  const [errorValue, setErrorValue] = useState('');
  const [successValue, setSuccessValue] = useState('valid@email.com');

  return (
    <DocLayout>
      <div className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-3xl font-bold">Input</h1>
          <p className="text-lg opacity-70">
            Versatile input component with multiple variants, sizes, and states
          </p>
        </header>

        <div className="space-y-8">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Import</h2>
            <CodeBlock 
              language="typescript"
              filename="Import"
            >
              {`import { Input } from 'thereactui';`}
            </CodeBlock>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Basic Usage</h2>
            <div className="border border-current p-4">
              <Input
                placeholder="Enter your text here..."
                value={basicValue}
                onChange={(e) => setBasicValue(e.target.value)}
              />
            </div>
            <CodeBlock language="tsx">
{`function BasicInput() {
  const [value, setValue] = useState('');

  return (
    <Input
      placeholder="Enter your text here..."
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}`}
            </CodeBlock>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Sizes</h2>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Small</h3>
                <div className="border border-current p-4">
                  <Input size="sm" placeholder="Small input" />
                </div>
                <CodeBlock language="tsx">
                  {`<Input size="sm" placeholder="Small input" />`}
                </CodeBlock>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Medium (Default)</h3>
                <div className="border border-current p-4">
                  <Input size="md" placeholder="Medium input" />
                </div>
                <CodeBlock language="tsx">
                  {`<Input size="md" placeholder="Medium input" />`}
                </CodeBlock>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Large</h3>
                <div className="border border-current p-4">
                  <Input size="lg" placeholder="Large input" />
                </div>
                <CodeBlock language="tsx">
                  {`<Input size="lg" placeholder="Large input" />`}
                </CodeBlock>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">States</h2>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Default</h3>
                <p className="text-sm opacity-70">Normal input with helper text</p>
                <div className="border border-current p-4">
                  <Input
                    label="Default State"
                    placeholder="Normal input"
                    helperText="This is a helper text"
                  />
                </div>
                <CodeBlock language="tsx">
{`<Input
  label="Default State"
  placeholder="Normal input"
  helperText="This is a helper text"
/>`}
                </CodeBlock>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Error</h3>
                <p className="text-sm opacity-70">Input with error state and message</p>
                <div className="border border-current p-4">
                  <Input
                    label="Error State"
                    placeholder="Enter valid email"
                    value={errorValue}
                    onChange={(e) => setErrorValue(e.target.value)}
                    error
                    errorMessage="Please enter a valid email address"
                  />
                </div>
                <CodeBlock language="tsx">
{`<Input
  label="Error State"
  placeholder="Enter valid email"
  error
  errorMessage="Please enter a valid email address"
/>`}
                </CodeBlock>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Success</h3>
                <p className="text-sm opacity-70">Input with success state</p>
                <div className="border border-current p-4">
                  <Input
                    label="Success State"
                    placeholder="Valid input"
                    value={successValue}
                    onChange={(e) => setSuccessValue(e.target.value)}
                    variant="success"
                    helperText="This email looks good!"
                  />
                </div>
                <CodeBlock language="tsx">
{`<Input
  label="Success State"
  placeholder="Valid input"
  variant="success"
  helperText="This email looks good!"
/>`}
                </CodeBlock>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Disabled</h3>
                <p className="text-sm opacity-70">Input in disabled state</p>
                <div className="border border-current p-4">
                  <Input
                    label="Disabled State"
                    placeholder="Disabled input"
                    disabled
                    helperText="This input is disabled"
                  />
                </div>
                <CodeBlock language="tsx">
{`<Input
  label="Disabled State"
  placeholder="Disabled input"
  disabled
  helperText="This input is disabled"
/>`}
                </CodeBlock>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Input Types</h2>
            
            <div className="space-y-6">
              <div className="space-y-3">
                <h3 className="text-lg font-medium">Email</h3>
                <div className="border border-current p-4">
                  <Input
                    label="Email Address"
                    type="email"
                    placeholder="Enter your email"
                    value={emailValue}
                    onChange={(e) => setEmailValue(e.target.value)}
                  />
                </div>
                <CodeBlock language="tsx">
{`<Input
  label="Email Address"
  type="email"
  placeholder="Enter your email"
/>`}
                </CodeBlock>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Password</h3>
                <div className="border border-current p-4">
                  <Input
                    label="Password"
                    type="password"
                    placeholder="Enter your password"
                    value={passwordValue}
                    onChange={(e) => setPasswordValue(e.target.value)}
                  />
                </div>
                <CodeBlock language="tsx">
{`<Input
  label="Password"
  type="password"
  placeholder="Enter your password"
/>`}
                </CodeBlock>
              </div>

              <div className="space-y-3">
                <h3 className="text-lg font-medium">Other Types</h3>
                <div className="border border-current p-4 space-y-3">
                  <Input type="number" placeholder="Enter number" />
                  <Input type="url" placeholder="Enter URL" />
                  <Input type="search" placeholder="Search..." />
                </div>
                <CodeBlock language="tsx">
{`<Input type="number" placeholder="Enter number" />
<Input type="url" placeholder="Enter URL" />
<Input type="search" placeholder="Search..." />`}
                </CodeBlock>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Features</h2>
            <div className="border border-current p-4 space-y-3">
              <p className="text-sm">
                <strong>Multiple Sizes:</strong> Small, medium, and large input sizes
              </p>
              <p className="text-sm">
                <strong>State Variants:</strong> Default, error, and success states with visual feedback
              </p>
              <p className="text-sm">
                <strong>Label Support:</strong> Built-in label with proper accessibility attributes
              </p>
              <p className="text-sm">
                <strong>Helper Text:</strong> Optional helper text and error messages
              </p>
              <p className="text-sm">
                <strong>Input Types:</strong> Supports all HTML input types (text, email, password, etc.)
              </p>
              <p className="text-sm">
                <strong>Theme Aware:</strong> Follows theReactUI light/dark mode themes
              </p>
              <p className="text-sm">
                <strong>Accessibility:</strong> Full keyboard navigation and screen reader support
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
                    <td className="border border-current px-4 py-2 font-mono">'default' | 'error' | 'success'</td>
                    <td className="border border-current px-4 py-2 font-mono">'default'</td>
                    <td className="border border-current px-4 py-2">Visual style variant</td>
                  </tr>
                  <tr>
                    <td className="border border-current px-4 py-2 font-mono">size</td>
                    <td className="border border-current px-4 py-2 font-mono">'sm' | 'md' | 'lg'</td>
                    <td className="border border-current px-4 py-2 font-mono">'md'</td>
                    <td className="border border-current px-4 py-2">Input size</td>
                  </tr>
                  <tr>
                    <td className="border border-current px-4 py-2 font-mono">error</td>
                    <td className="border border-current px-4 py-2 font-mono">boolean</td>
                    <td className="border border-current px-4 py-2 font-mono">false</td>
                    <td className="border border-current px-4 py-2">Error state</td>
                  </tr>
                  <tr>
                    <td className="border border-current px-4 py-2 font-mono">label</td>
                    <td className="border border-current px-4 py-2 font-mono">string</td>
                    <td className="border border-current px-4 py-2 font-mono">-</td>
                    <td className="border border-current px-4 py-2">Input label</td>
                  </tr>
                  <tr>
                    <td className="border border-current px-4 py-2 font-mono">helperText</td>
                    <td className="border border-current px-4 py-2 font-mono">string</td>
                    <td className="border border-current px-4 py-2 font-mono">-</td>
                    <td className="border border-current px-4 py-2">Helper message</td>
                  </tr>
                  <tr>
                    <td className="border border-current px-4 py-2 font-mono">errorMessage</td>
                    <td className="border border-current px-4 py-2 font-mono">string</td>
                    <td className="border border-current px-4 py-2 font-mono">-</td>
                    <td className="border border-current px-4 py-2">Error message</td>
                  </tr>
                  <tr>
                    <td className="border border-current px-4 py-2 font-mono">disabled</td>
                    <td className="border border-current px-4 py-2 font-mono">boolean</td>
                    <td className="border border-current px-4 py-2 font-mono">false</td>
                    <td className="border border-current px-4 py-2">Disabled state</td>
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
            <h2 className="text-2xl font-semibold text-black dark:text-white">Complete Example</h2>
            
            <CodeBlock 
              language="tsx"
              filename="Complete Example"
            >
{`import { Input, Button } from 'thereactui';
import { useState } from 'react';

export default function MyComponent() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState({});

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = {};
    
    if (!formData.name) newErrors.name = 'Name is required';
    if (!formData.email) newErrors.email = 'Email is required';
    if (!formData.message) newErrors.message = 'Message is required';
    
    setErrors(newErrors);
    
    if (Object.keys(newErrors).length === 0) {
      console.log('Form submitted:', formData);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4 max-w-md">
      <Input
        label="Full Name"
        placeholder="Enter your name"
        value={formData.name}
        onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
        variant={errors.name ? 'error' : 'default'}
        errorMessage={errors.name}
        helperText="This will be displayed publicly"
      />
      
      <Input
        label="Email"
        type="email"
        placeholder="Enter your email"
        value={formData.email}
        onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
        variant={errors.email ? 'error' : formData.email ? 'success' : 'default'}
        errorMessage={errors.email}
      />
      
      <Input
        label="Message"
        placeholder="Enter your message"
        value={formData.message}
        onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
        variant={errors.message ? 'error' : 'default'}
        errorMessage={errors.message}
        size="lg"
      />
      
      <Button type="submit" variant="primary" className="w-full">
        Submit Form
      </Button>
    </form>
  );
}`}
            </CodeBlock>
          </section>
        </div>
      </div>
    </DocLayout>
  );
}
