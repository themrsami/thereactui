'use client';

import { DocLayout } from '@/components/layout';
import { Badge, Button } from '@/components/ui';
import { CodeBlock } from '@/components/ui';
import { Star, Bell, CheckCircle, AlertTriangle, XCircle, User, Mail, Tag } from 'lucide-react';

export default function BadgePage() {
  return (
    <DocLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Badge</h1>
          <p className="text-lg">
            Small status indicators and labels for displaying concise information.
          </p>
        </div>

        {/* Import */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Import</h2>
          <CodeBlock language="tsx" filename="import.tsx">
{`import { Badge } from '@/components/ui';`}
          </CodeBlock>
        </div>

        {/* Basic Usage */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Basic Usage</h2>
          <div className="p-6 border border-current">
            <div className="flex flex-wrap items-center gap-3">
              <Badge>Default</Badge>
              <Badge variant="primary">Primary</Badge>
              <Badge variant="secondary">Secondary</Badge>
            </div>
          </div>
          <CodeBlock language="tsx" filename="basic-badge.tsx">
{`<Badge>Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>`}
          </CodeBlock>
        </div>

        {/* Variants */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Variants</h2>
          <div className="p-6 border border-current">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Filled Variants</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="default">Default</Badge>
                  <Badge variant="primary">Primary</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="success">Success</Badge>
                  <Badge variant="warning">Warning</Badge>
                  <Badge variant="error">Error</Badge>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Outline Variants</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="default" outline>Default</Badge>
                  <Badge variant="primary" outline>Primary</Badge>
                  <Badge variant="secondary" outline>Secondary</Badge>
                  <Badge variant="success" outline>Success</Badge>
                  <Badge variant="warning" outline>Warning</Badge>
                  <Badge variant="error" outline>Error</Badge>
                </div>
              </div>
            </div>
          </div>
          <CodeBlock language="tsx" filename="badge-variants.tsx">
{`{/* Filled variants */}
<Badge variant="default">Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="secondary">Secondary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="warning">Warning</Badge>
<Badge variant="error">Error</Badge>

{/* Outline variants */}
<Badge variant="default" outline>Default</Badge>
<Badge variant="primary" outline>Primary</Badge>
<Badge variant="secondary" outline>Secondary</Badge>
<Badge variant="success" outline>Success</Badge>
<Badge variant="warning" outline>Warning</Badge>
<Badge variant="error" outline>Error</Badge>`}
          </CodeBlock>
        </div>

        {/* Sizes */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Sizes</h2>
          <div className="p-6 border border-current">
            <div className="flex flex-wrap items-center gap-3">
              <Badge size="sm" variant="primary">Small</Badge>
              <Badge size="md" variant="primary">Medium</Badge>
              <Badge size="lg" variant="primary">Large</Badge>
            </div>
          </div>
          <CodeBlock language="tsx" filename="badge-sizes.tsx">
{`<Badge size="sm" variant="primary">Small</Badge>
<Badge size="md" variant="primary">Medium</Badge>
<Badge size="lg" variant="primary">Large</Badge>`}
          </CodeBlock>
        </div>

        {/* With Icons */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">With Icons</h2>
          <div className="p-6 border border-current">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Icons with Text</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="primary" className="flex items-center gap-1">
                    <Star size={12} />
                    Featured
                  </Badge>
                  <Badge variant="success" className="flex items-center gap-1">
                    <CheckCircle size={12} />
                    Verified
                  </Badge>
                  <Badge variant="warning" className="flex items-center gap-1">
                    <AlertTriangle size={12} />
                    Warning
                  </Badge>
                  <Badge variant="error" className="flex items-center gap-1">
                    <XCircle size={12} />
                    Error
                  </Badge>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Icon-Only Badges</h3>
                <div className="flex flex-wrap items-center gap-3">
                  <Badge variant="primary" size="sm">
                    <Bell size={10} />
                  </Badge>
                  <Badge variant="success" size="md">
                    <CheckCircle size={12} />
                  </Badge>
                  <Badge variant="warning" size="lg">
                    <AlertTriangle size={14} />
                  </Badge>
                </div>
              </div>
            </div>
          </div>
          <CodeBlock language="tsx" filename="badge-icons.tsx">
{`import { Star, CheckCircle, AlertTriangle, XCircle, Bell } from 'lucide-react';

{/* Icons with text */}
<Badge variant="primary" className="flex items-center gap-1">
  <Star size={12} />
  Featured
</Badge>

<Badge variant="success" className="flex items-center gap-1">
  <CheckCircle size={12} />
  Verified
</Badge>

{/* Icon-only badges */}
<Badge variant="primary" size="sm">
  <Bell size={10} />
</Badge>

<Badge variant="success" size="md">
  <CheckCircle size={12} />
</Badge>`}
          </CodeBlock>
        </div>

        {/* Status Indicators */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Status Indicators</h2>
          <div className="p-6 border border-current">
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <span className="font-medium">User Status:</span>
                <Badge variant="success" size="sm">Online</Badge>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="font-medium">Order Status:</span>
                <Badge variant="warning" size="sm">Processing</Badge>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="font-medium">Payment Status:</span>
                <Badge variant="error" size="sm">Failed</Badge>
              </div>
              
              <div className="flex items-center gap-3">
                <span className="font-medium">Subscription:</span>
                <Badge variant="primary" size="sm">Pro</Badge>
              </div>
            </div>
          </div>
          <CodeBlock language="tsx" filename="status-indicators.tsx">
{`<div className="flex items-center gap-3">
  <span>User Status:</span>
  <Badge variant="success" size="sm">Online</Badge>
</div>

<div className="flex items-center gap-3">
  <span>Order Status:</span>
  <Badge variant="warning" size="sm">Processing</Badge>
</div>

<div className="flex items-center gap-3">
  <span>Payment Status:</span>
  <Badge variant="error" size="sm">Failed</Badge>
</div>

<div className="flex items-center gap-3">
  <span>Subscription:</span>
  <Badge variant="primary" size="sm">Pro</Badge>
</div>`}
          </CodeBlock>
        </div>

        {/* Notification Badges */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Notification Badges</h2>
          <div className="p-6 border border-current">
            <div className="flex flex-wrap items-center gap-6">
              <div className="relative inline-block">
                <Button variant="secondary" className="flex items-center gap-2">
                  <Bell size={16} />
                  Notifications
                </Button>
                <Badge 
                  variant="error" 
                  size="sm" 
                  className="absolute -top-2 -right-2 min-w-[20px] h-5"
                >
                  3
                </Badge>
              </div>
              
              <div className="relative inline-block">
                <Button variant="secondary" className="flex items-center gap-2">
                  <Mail size={16} />
                  Messages
                </Button>
                <Badge 
                  variant="primary" 
                  size="sm" 
                  className="absolute -top-2 -right-2 min-w-[20px] h-5"
                >
                  12
                </Badge>
              </div>
              
              <div className="relative inline-block">
                <Button variant="secondary" className="flex items-center gap-2">
                  <User size={16} />
                  Profile
                </Button>
                <Badge 
                  variant="success" 
                  size="sm" 
                  className="absolute -top-1 -right-1 w-3 h-3 p-0"
                >
                </Badge>
              </div>
            </div>
          </div>
          <CodeBlock language="tsx" filename="notification-badges.tsx">
{`{/* Notification count */}
<div className="relative inline-block">
  <Button variant="secondary">
    <Bell size={16} />
    Notifications
  </Button>
  <Badge 
    variant="error" 
    size="sm" 
    className="absolute -top-2 -right-2 min-w-[20px] h-5"
  >
    3
  </Badge>
</div>

{/* Message count */}
<div className="relative inline-block">
  <Button variant="secondary">
    <Mail size={16} />
    Messages
  </Button>
  <Badge 
    variant="primary" 
    size="sm" 
    className="absolute -top-2 -right-2 min-w-[20px] h-5"
  >
    12
  </Badge>
</div>

{/* Online indicator */}
<div className="relative inline-block">
  <Button variant="secondary">
    <User size={16} />
    Profile
  </Button>
  <Badge 
    variant="success" 
    size="sm" 
    className="absolute -top-1 -right-1 w-3 h-3 p-0"
  >
  </Badge>
</div>`}
          </CodeBlock>
        </div>

        {/* Tag System */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Tag System</h2>
          <div className="p-6 border border-current">
            <div className="space-y-4">
              <div>
                <h3 className="font-medium mb-2">Article Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" outline className="flex items-center gap-1">
                    <Tag size={10} />
                    React
                  </Badge>
                  <Badge variant="secondary" outline className="flex items-center gap-1">
                    <Tag size={10} />
                    TypeScript
                  </Badge>
                  <Badge variant="secondary" outline className="flex items-center gap-1">
                    <Tag size={10} />
                    UI/UX
                  </Badge>
                  <Badge variant="secondary" outline className="flex items-center gap-1">
                    <Tag size={10} />
                    Design System
                  </Badge>
                </div>
              </div>
              
              <div>
                <h3 className="font-medium mb-2">Category Tags</h3>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="primary" size="sm">Frontend</Badge>
                  <Badge variant="success" size="sm">Tutorial</Badge>
                  <Badge variant="warning" size="sm">Advanced</Badge>
                  <Badge variant="default" size="sm">Guide</Badge>
                </div>
              </div>
            </div>
          </div>
          <CodeBlock language="tsx" filename="tag-system.tsx">
{`{/* Article tags with icons */}
<Badge variant="secondary" outline className="flex items-center gap-1">
  <Tag size={10} />
  React
</Badge>

<Badge variant="secondary" outline className="flex items-center gap-1">
  <Tag size={10} />
  TypeScript
</Badge>

{/* Category tags */}
<Badge variant="primary" size="sm">Frontend</Badge>
<Badge variant="success" size="sm">Tutorial</Badge>
<Badge variant="warning" size="sm">Advanced</Badge>
<Badge variant="default" size="sm">Guide</Badge>`}
          </CodeBlock>
        </div>

        {/* Features */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Features</h2>
          <div className="border border-current p-4 space-y-3">
            <p className="text-sm">
              <strong>Multiple Variants:</strong> Default, primary, secondary, success, warning, and error variants
            </p>
            <p className="text-sm">
              <strong>Outline Style:</strong> Outline prop for bordered badges with transparent background
            </p>
            <p className="text-sm">
              <strong>Size Options:</strong> Small, medium, and large sizes
            </p>
            <p className="text-sm">
              <strong>Icon Support:</strong> Flexible content support for icons and text combinations
            </p>
            <p className="text-sm">
              <strong>Notification Badges:</strong> Perfect for notification counts and status indicators
            </p>
            <p className="text-sm">
              <strong>Tag System:</strong> Ideal for categorization and labeling
            </p>
            <p className="text-sm">
              <strong>Theme Aware:</strong> Follows theReactUI light/dark mode themes
            </p>
            <p className="text-sm">
              <strong>Accessibility:</strong> Proper semantic structure for screen readers
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
                  <td className="p-3 border-r border-current font-mono text-sm">variant</td>
                  <td className="p-3 border-r border-current">'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error'</td>
                  <td className="p-3 border-r border-current">'default'</td>
                  <td className="p-3">Visual style variant</td>
                </tr>
                <tr className="border-b border-current">
                  <td className="p-3 border-r border-current font-mono text-sm">size</td>
                  <td className="p-3 border-r border-current">'sm' | 'md' | 'lg'</td>
                  <td className="p-3 border-r border-current">'md'</td>
                  <td className="p-3">Badge size</td>
                </tr>
                <tr className="border-b border-current">
                  <td className="p-3 border-r border-current font-mono text-sm">outline</td>
                  <td className="p-3 border-r border-current">boolean</td>
                  <td className="p-3 border-r border-current">false</td>
                  <td className="p-3">Show outline style instead of filled</td>
                </tr>
                <tr className="border-b border-current">
                  <td className="p-3 border-r border-current font-mono text-sm">children</td>
                  <td className="p-3 border-r border-current">ReactNode</td>
                  <td className="p-3 border-r border-current">-</td>
                  <td className="p-3">Badge content</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-current font-mono text-sm">className</td>
                  <td className="p-3 border-r border-current">string</td>
                  <td className="p-3 border-r border-current">''</td>
                  <td className="p-3">Additional CSS classes</td>
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
{`import { Badge, Button } from 'thereactui';
import { Star, Bell, CheckCircle, AlertTriangle, User, Mail, Tag } from 'lucide-react';

export default function BadgeExample() {
  return (
    <div className="space-y-8 p-6">
      {/* Status Dashboard */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">System Status</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="border border-current p-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">API Status</span>
              <Badge variant="success" size="sm">
                <CheckCircle size={10} className="mr-1" />
                Online
              </Badge>
            </div>
          </div>
          
          <div className="border border-current p-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Database</span>
              <Badge variant="warning" size="sm">
                <AlertTriangle size={10} className="mr-1" />
                Slow
              </Badge>
            </div>
          </div>
          
          <div className="border border-current p-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">Cache</span>
              <Badge variant="success" size="sm">Healthy</Badge>
            </div>
          </div>
          
          <div className="border border-current p-4">
            <div className="flex items-center justify-between">
              <span className="font-medium">CDN</span>
              <Badge variant="primary" size="sm">Optimized</Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Navigation with Badges */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Navigation</h3>
        <div className="flex flex-wrap gap-4">
          <div className="relative">
            <Button variant="secondary" className="flex items-center gap-2">
              <Bell size={16} />
              Notifications
            </Button>
            <Badge 
              variant="error" 
              size="sm" 
              className="absolute -top-2 -right-2 min-w-[20px] h-5"
            >
              5
            </Badge>
          </div>
          
          <div className="relative">
            <Button variant="secondary" className="flex items-center gap-2">
              <Mail size={16} />
              Messages
            </Button>
            <Badge 
              variant="primary" 
              size="sm" 
              className="absolute -top-2 -right-2 min-w-[20px] h-5"
            >
              23
            </Badge>
          </div>
          
          <div className="relative">
            <Button variant="secondary" className="flex items-center gap-2">
              <User size={16} />
              Profile
            </Button>
            <Badge 
              variant="success" 
              size="sm" 
              className="absolute -top-1 -right-1 w-3 h-3 p-0"
            />
          </div>
        </div>
      </div>

      {/* Article Tags */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Article: "Building Modern UI Components"</h3>
        <div className="border border-current p-4">
          <div className="space-y-3">
            <div>
              <h4 className="font-medium mb-2">Categories</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="primary" size="sm">Frontend</Badge>
                <Badge variant="success" size="sm">Tutorial</Badge>
                <Badge variant="warning" size="sm">Advanced</Badge>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Technologies</h4>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" outline className="flex items-center gap-1">
                  <Tag size={10} />
                  React
                </Badge>
                <Badge variant="secondary" outline className="flex items-center gap-1">
                  <Tag size={10} />
                  TypeScript
                </Badge>
                <Badge variant="secondary" outline className="flex items-center gap-1">
                  <Tag size={10} />
                  Tailwind CSS
                </Badge>
                <Badge variant="secondary" outline className="flex items-center gap-1">
                  <Tag size={10} />
                  Design System
                </Badge>
              </div>
            </div>
            
            <div>
              <h4 className="font-medium mb-2">Quality</h4>
              <Badge variant="primary" className="flex items-center gap-1">
                <Star size={12} />
                Featured Article
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* User List with Status */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Team Members</h3>
        <div className="space-y-2">
          {[
            { name: 'John Doe', role: 'Admin', status: 'online', subscription: 'pro' },
            { name: 'Jane Smith', role: 'User', status: 'away', subscription: 'free' },
            { name: 'Bob Johnson', role: 'Moderator', status: 'offline', subscription: 'pro' }
          ].map((user, index) => (
            <div key={index} className="border border-current p-3 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-8 h-8 border border-current flex items-center justify-center">
                  <User size={16} />
                </div>
                <div>
                  <div className="font-medium">{user.name}</div>
                  <div className="text-sm opacity-70">{user.role}</div>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <Badge 
                  variant={user.status === 'online' ? 'success' : user.status === 'away' ? 'warning' : 'error'} 
                  size="sm"
                >
                  {user.status}
                </Badge>
                <Badge 
                  variant={user.subscription === 'pro' ? 'primary' : 'secondary'} 
                  outline={user.subscription !== 'pro'}
                  size="sm"
                >
                  {user.subscription}
                </Badge>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}`}
          </CodeBlock>
        </div>
      </div>
    </DocLayout>
  );
}
