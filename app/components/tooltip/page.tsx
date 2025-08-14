'use client';

import { DocLayout } from '@/components/layout';
import { Tooltip, Button, IconButton, Badge, Card, CardContent } from '@/components/ui';
import { CodeBlock } from '@/components/ui';
import { Info, HelpCircle, Settings, User, Mail, Heart, Star, Copy, Download, Eye, Edit, Trash2 } from 'lucide-react';

export default function TooltipPage() {
  return (
    <DocLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Tooltip</h1>
          <p className="text-lg">
            Contextual information displayed on hover or focus to provide additional details about UI elements.
          </p>
        </div>

        {/* Import */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Import</h2>
          <CodeBlock language="tsx" filename="import.tsx">
{`import { Tooltip } from '@/components/ui';`}
          </CodeBlock>
        </div>

        {/* Basic Usage */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Basic Usage</h2>
          <div className="p-6 border border-current">
            <div className="flex flex-wrap items-center gap-4">
              <Tooltip content="This is a tooltip">
                <Button variant="primary">Hover me</Button>
              </Tooltip>
              
              <Tooltip content="Click to copy text">
                <IconButton variant="secondary" aria-label="Copy">
                  <Copy size={16} />
                </IconButton>
              </Tooltip>
              
              <Tooltip content="Important information">
                <div className="inline-flex">
                  <Info size={16} className="cursor-help" />
                </div>
              </Tooltip>
            </div>
          </div>
          <CodeBlock language="tsx" filename="basic-tooltip.tsx">
{`<Tooltip content="This is a tooltip">
  <Button variant="primary">Hover me</Button>
</Tooltip>

<Tooltip content="Click to copy text">
  <IconButton variant="secondary" aria-label="Copy">
    <Copy size={16} />
  </IconButton>
</Tooltip>

<Tooltip content="Important information">
  <div className="inline-flex">
    <Info size={16} className="cursor-help" />
  </div>
</Tooltip>`}
          </CodeBlock>
        </div>

        {/* Placement */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Placement</h2>
          <div className="p-6 border border-current">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 place-items-center">
              <Tooltip content="Tooltip on top" placement="top">
                <Button variant="secondary">Top</Button>
              </Tooltip>
              
              <Tooltip content="Tooltip on bottom" placement="bottom">
                <Button variant="secondary">Bottom</Button>
              </Tooltip>
              
              <Tooltip content="Tooltip on left" placement="left">
                <Button variant="secondary">Left</Button>
              </Tooltip>
              
              <Tooltip content="Tooltip on right" placement="right">
                <Button variant="secondary">Right</Button>
              </Tooltip>
            </div>
          </div>
          <CodeBlock language="tsx" filename="tooltip-placement.tsx">
{`<Tooltip content="Tooltip on top" placement="top">
  <Button variant="secondary">Top</Button>
</Tooltip>

<Tooltip content="Tooltip on bottom" placement="bottom">
  <Button variant="secondary">Bottom</Button>
</Tooltip>

<Tooltip content="Tooltip on left" placement="left">
  <Button variant="secondary">Left</Button>
</Tooltip>

<Tooltip content="Tooltip on right" placement="right">
  <Button variant="secondary">Right</Button>
</Tooltip>`}
          </CodeBlock>
        </div>

        {/* Delay */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Delay</h2>
          <div className="p-6 border border-current">
            <div className="flex flex-wrap items-center gap-4">
              <Tooltip content="No delay" delay={0}>
                <Button variant="secondary">No Delay</Button>
              </Tooltip>
              
              <Tooltip content="Short delay (200ms)" delay={200}>
                <Button variant="secondary">Short Delay</Button>
              </Tooltip>
              
              <Tooltip content="Long delay (1000ms)" delay={1000}>
                <Button variant="secondary">Long Delay</Button>
              </Tooltip>
            </div>
          </div>
          <CodeBlock language="tsx" filename="tooltip-delay.tsx">
{`<Tooltip content="No delay" delay={0}>
  <Button variant="secondary">No Delay</Button>
</Tooltip>

<Tooltip content="Short delay (200ms)" delay={200}>
  <Button variant="secondary">Short Delay</Button>
</Tooltip>

<Tooltip content="Long delay (1000ms)" delay={1000}>
  <Button variant="secondary">Long Delay</Button>
</Tooltip>`}
          </CodeBlock>
        </div>

        {/* Arrow */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Arrow</h2>
          <div className="p-6 border border-current">
            <div className="flex flex-wrap items-center gap-4">
              <Tooltip content="Tooltip with arrow (default)" arrow={true}>
                <Button variant="secondary">With Arrow</Button>
              </Tooltip>
              
              <Tooltip content="Tooltip without arrow" arrow={false}>
                <Button variant="secondary">Without Arrow</Button>
              </Tooltip>
            </div>
          </div>
          <CodeBlock language="tsx" filename="tooltip-arrow.tsx">
{`<Tooltip content="Tooltip with arrow (default)" arrow={true}>
  <Button variant="secondary">With Arrow</Button>
</Tooltip>

<Tooltip content="Tooltip without arrow" arrow={false}>
  <Button variant="secondary">Without Arrow</Button>
</Tooltip>`}
          </CodeBlock>
        </div>

        {/* Rich Content */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Rich Content</h2>
          <div className="p-6 border border-current">
            <div className="flex flex-wrap items-center gap-4">
              <Tooltip
                content={
                  <div className="flex items-center gap-2">
                    <User size={14} />
                    <span>John Doe - Software Engineer</span>
                  </div>
                }
              >
                <Button variant="secondary">User Info</Button>
              </Tooltip>
              
              <Tooltip
                content={
                  <div>
                    <div className="font-semibold">Download Report</div>
                    <div className="text-xs opacity-80">PDF • 2.4 MB</div>
                  </div>
                }
              >
                <IconButton variant="primary" aria-label="Download">
                  <Download size={16} />
                </IconButton>
              </Tooltip>
              
              <Tooltip
                content={
                  <div className="space-y-1">
                    <div className="flex items-center gap-1">
                      <Star size={12} fill="currentColor" />
                      <span className="text-xs">4.8/5 Rating</span>
                    </div>
                    <div className="text-xs opacity-80">Based on 1,247 reviews</div>
                  </div>
                }
              >
                <Badge variant="primary" className="cursor-help">
                  <Star size={12} fill="currentColor" className="mr-1" />
                  Rated
                </Badge>
              </Tooltip>
            </div>
          </div>
          <CodeBlock language="tsx" filename="rich-content-tooltip.tsx">
{`<Tooltip
  content={
    <div className="flex items-center gap-2">
      <User size={14} />
      <span>John Doe - Software Engineer</span>
    </div>
  }
>
  <Button variant="secondary">User Info</Button>
</Tooltip>

<Tooltip
  content={
    <div>
      <div className="font-semibold">Download Report</div>
      <div className="text-xs opacity-80">PDF • 2.4 MB</div>
    </div>
  }
>
  <IconButton variant="primary" aria-label="Download">
    <Download size={16} />
  </IconButton>
</Tooltip>

<Tooltip
  content={
    <div className="space-y-1">
      <div className="flex items-center gap-1">
        <Star size={12} fill="currentColor" />
        <span className="text-xs">4.8/5 Rating</span>
      </div>
      <div className="text-xs opacity-80">Based on 1,247 reviews</div>
    </div>
  }
>
  <Badge variant="primary" className="cursor-help">
    <Star size={12} fill="currentColor" className="mr-1" />
    Rated
  </Badge>
</Tooltip>`}
          </CodeBlock>
        </div>

        {/* Disabled State */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Disabled State</h2>
          <div className="p-6 border border-current">
            <div className="flex flex-wrap items-center gap-4">
              <Tooltip content="This tooltip is enabled">
                <Button variant="secondary">Enabled Tooltip</Button>
              </Tooltip>
              
              <Tooltip content="This tooltip is disabled" disabled={true}>
                <Button variant="secondary">Disabled Tooltip</Button>
              </Tooltip>
            </div>
          </div>
          <CodeBlock language="tsx" filename="disabled-tooltip.tsx">
{`<Tooltip content="This tooltip is enabled">
  <Button variant="secondary">Enabled Tooltip</Button>
</Tooltip>

<Tooltip content="This tooltip is disabled" disabled={true}>
  <Button variant="secondary">Disabled Tooltip</Button>
</Tooltip>`}
          </CodeBlock>
        </div>

        {/* Help Icons */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Help Icons</h2>
          <div className="p-6 border border-current">
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <label className="font-medium">Email Address</label>
                <Tooltip content="We'll never share your email address">
                  <HelpCircle size={14} className="cursor-help opacity-70" />
                </Tooltip>
              </div>
              
              <div className="flex items-center gap-2">
                <label className="font-medium">Password Strength</label>
                <Tooltip content="Use at least 8 characters with numbers and special characters">
                  <Info size={14} className="cursor-help opacity-70" />
                </Tooltip>
              </div>
              
              <div className="flex items-center gap-2">
                <label className="font-medium">API Rate Limit</label>
                <Tooltip content="You can make up to 1000 requests per hour">
                  <div className="w-3.5 h-3.5 border border-current text-xs flex items-center justify-center cursor-help opacity-70">
                    ?
                  </div>
                </Tooltip>
              </div>
            </div>
          </div>
          <CodeBlock language="tsx" filename="help-icons.tsx">
{`<div className="flex items-center gap-2">
  <label className="font-medium">Email Address</label>
  <Tooltip content="We'll never share your email address">
    <Help size={14} className="cursor-help opacity-70" />
  </Tooltip>
</div>

<div className="flex items-center gap-2">
  <label className="font-medium">Password Strength</label>
  <Tooltip content="Use at least 8 characters with numbers and special characters">
    <Info size={14} className="cursor-help opacity-70" />
  </Tooltip>
</div>

<div className="flex items-center gap-2">
  <label className="font-medium">API Rate Limit</label>
  <Tooltip content="You can make up to 1000 requests per hour">
    <div className="w-3.5 h-3.5 border border-current text-xs flex items-center justify-center cursor-help opacity-70">
      ?
    </div>
  </Tooltip>
</div>`}
          </CodeBlock>
        </div>

        {/* Button Groups */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Action Button Groups</h2>
          <div className="p-6 border border-current">
            <div className="space-y-4">
              <div className="flex items-center gap-1">
                <Tooltip content="View details">
                  <IconButton size="sm" variant="secondary" aria-label="View">
                    <Eye size={14} />
                  </IconButton>
                </Tooltip>
                
                <Tooltip content="Edit item">
                  <IconButton size="sm" variant="secondary" aria-label="Edit">
                    <Edit size={14} />
                  </IconButton>
                </Tooltip>
                
                <Tooltip content="Copy to clipboard">
                  <IconButton size="sm" variant="secondary" aria-label="Copy">
                    <Copy size={14} />
                  </IconButton>
                </Tooltip>
                
                <Tooltip content="Delete permanently">
                  <IconButton size="sm" variant="secondary" aria-label="Delete">
                    <Trash2 size={14} />
                  </IconButton>
                </Tooltip>
              </div>
              
              <div className="flex items-center gap-1">
                <Tooltip content="Add to favorites">
                  <IconButton size="sm" variant="ghost" aria-label="Favorite">
                    <Heart size={14} />
                  </IconButton>
                </Tooltip>
                
                <Tooltip content="Rate this item">
                  <IconButton size="sm" variant="ghost" aria-label="Rate">
                    <Star size={14} />
                  </IconButton>
                </Tooltip>
                
                <Tooltip content="Share with others">
                  <IconButton size="sm" variant="ghost" aria-label="Share">
                    <Copy size={14} />
                  </IconButton>
                </Tooltip>
                
                <Tooltip content="More options">
                  <IconButton size="sm" variant="ghost" aria-label="Settings">
                    <Settings size={14} />
                  </IconButton>
                </Tooltip>
              </div>
            </div>
          </div>
          <CodeBlock language="tsx" filename="action-buttons.tsx">
{`<div className="flex items-center gap-1">
  <Tooltip content="View details">
    <IconButton size="sm" variant="secondary" aria-label="View">
      <Eye size={14} />
    </IconButton>
  </Tooltip>
  
  <Tooltip content="Edit item">
    <IconButton size="sm" variant="secondary" aria-label="Edit">
      <Edit size={14} />
    </IconButton>
  </Tooltip>
  
  <Tooltip content="Copy to clipboard">
    <IconButton size="sm" variant="secondary" aria-label="Copy">
      <Copy size={14} />
    </IconButton>
  </Tooltip>
  
  <Tooltip content="Delete permanently">
    <IconButton size="sm" variant="secondary" aria-label="Delete">
      <Trash2 size={14} />
    </IconButton>
  </Tooltip>
</div>`}
          </CodeBlock>
        </div>

        {/* Interactive Cards */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Interactive Cards</h2>
          <div className="p-6 border border-current">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Tooltip 
                content={
                  <div>
                    <div className="font-semibold">User Profile</div>
                    <div className="text-xs opacity-80">Click to view full profile</div>
                  </div>
                }
              >
                <Card variant="bordered" hoverable className="cursor-pointer">
                  <CardContent>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 border border-current flex items-center justify-center">
                        <User size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold">John Doe</h3>
                        <p className="text-sm opacity-70">Software Engineer</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Tooltip>
              
              <Tooltip 
                content={
                  <div>
                    <div className="font-semibold">Send Message</div>
                    <div className="text-xs opacity-80">Click to open chat</div>
                  </div>
                }
              >
                <Card variant="bordered" hoverable className="cursor-pointer">
                  <CardContent>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 border border-current flex items-center justify-center">
                        <Mail size={20} />
                      </div>
                      <div>
                        <h3 className="font-semibold">Messages</h3>
                        <p className="text-sm opacity-70">3 unread messages</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </Tooltip>
            </div>
          </div>
          <CodeBlock language="tsx" filename="interactive-cards.tsx">
{`<Tooltip 
  content={
    <div>
      <div className="font-semibold">User Profile</div>
      <div className="text-xs opacity-80">Click to view full profile</div>
    </div>
  }
>
  <Card variant="bordered" hoverable className="cursor-pointer">
    <CardContent>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 border border-current flex items-center justify-center">
          <User size={20} />
        </div>
        <div>
          <h3 className="font-semibold">John Doe</h3>
          <p className="text-sm opacity-70">Software Engineer</p>
        </div>
      </div>
    </CardContent>
  </Card>
</Tooltip>`}
          </CodeBlock>
        </div>

        {/* Features */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Features</h2>
          <div className="border border-current p-4 space-y-3">
            <p className="text-sm">
              <strong>Smart Positioning:</strong> Automatically positions tooltip to stay within viewport
            </p>
            <p className="text-sm">
              <strong>Multiple Placements:</strong> Top, bottom, left, and right positioning options
            </p>
            <p className="text-sm">
              <strong>Configurable Delay:</strong> Customizable delay before tooltip appears
            </p>
            <p className="text-sm">
              <strong>Rich Content:</strong> Supports any React content including icons and formatted text
            </p>
            <p className="text-sm">
              <strong>Accessibility:</strong> Works with keyboard focus and screen readers
            </p>
            <p className="text-sm">
              <strong>Portal Rendering:</strong> Renders outside normal DOM tree to avoid z-index issues
            </p>
            <p className="text-sm">
              <strong>Event Handling:</strong> Preserves existing event handlers on trigger elements
            </p>
            <p className="text-sm">
              <strong>Theme Aware:</strong> Follows theReactUI light/dark mode themes
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
                  <td className="p-3 border-r border-current font-mono text-sm">children</td>
                  <td className="p-3 border-r border-current">ReactNode</td>
                  <td className="p-3 border-r border-current">-</td>
                  <td className="p-3">Trigger element that shows tooltip on hover/focus</td>
                </tr>
                <tr className="border-b border-current">
                  <td className="p-3 border-r border-current font-mono text-sm">content</td>
                  <td className="p-3 border-r border-current">ReactNode</td>
                  <td className="p-3 border-r border-current">-</td>
                  <td className="p-3">Content to display in the tooltip</td>
                </tr>
                <tr className="border-b border-current">
                  <td className="p-3 border-r border-current font-mono text-sm">placement</td>
                  <td className="p-3 border-r border-current">'top' | 'bottom' | 'left' | 'right'</td>
                  <td className="p-3 border-r border-current">'top'</td>
                  <td className="p-3">Preferred placement of the tooltip</td>
                </tr>
                <tr className="border-b border-current">
                  <td className="p-3 border-r border-current font-mono text-sm">delay</td>
                  <td className="p-3 border-r border-current">number</td>
                  <td className="p-3 border-r border-current">200</td>
                  <td className="p-3">Delay in milliseconds before showing tooltip</td>
                </tr>
                <tr className="border-b border-current">
                  <td className="p-3 border-r border-current font-mono text-sm">arrow</td>
                  <td className="p-3 border-r border-current">boolean</td>
                  <td className="p-3 border-r border-current">true</td>
                  <td className="p-3">Whether to show arrow pointing to trigger</td>
                </tr>
                <tr className="border-b border-current">
                  <td className="p-3 border-r border-current font-mono text-sm">disabled</td>
                  <td className="p-3 border-r border-current">boolean</td>
                  <td className="p-3 border-r border-current">false</td>
                  <td className="p-3">Whether the tooltip is disabled</td>
                </tr>
                <tr>
                  <td className="p-3 border-r border-current font-mono text-sm">className</td>
                  <td className="p-3 border-r border-current">string</td>
                  <td className="p-3 border-r border-current">''</td>
                  <td className="p-3">Additional CSS classes for tooltip</td>
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
{`import { Tooltip, Button, IconButton, Card, CardContent, Badge } from 'thereactui';
import { User, Mail, Settings, Help, Info, Star, Heart, Eye, Edit, Copy, Trash2 } from 'lucide-react';

export default function TooltipExample() {
  return (
    <div className="space-y-8 p-6">
      {/* Help Section */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Form with Help Tooltips</h3>
        <div className="border border-current p-4 space-y-4">
          <div className="flex items-center gap-2">
            <label className="font-medium">Email Address</label>
            <Tooltip content="We'll never share your email with anyone">
              <HelpCircle size={14} className="cursor-help opacity-70" />
            </Tooltip>
          </div>
          
          <div className="flex items-center gap-2">
            <label className="font-medium">Password</label>
            <Tooltip 
              content={
                <div>
                  <div className="font-semibold">Strong Password Tips:</div>
                  <div className="text-xs opacity-80 mt-1">
                    • At least 8 characters<br/>
                    • Include numbers & symbols<br/>
                    • Mix upper & lowercase
                  </div>
                </div>
              }
            >
              <Info size={14} className="cursor-help opacity-70" />
            </Tooltip>
          </div>
          
          <div className="flex items-center gap-2">
            <label className="font-medium">API Key</label>
            <Tooltip content="Generate your API key in the dashboard settings">
              <div className="w-3.5 h-3.5 border border-current text-xs flex items-center justify-center cursor-help opacity-70">
                ?
              </div>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Action Toolbar</h3>
        <div className="border border-current p-4">
          <div className="flex items-center gap-1">
            <Tooltip content="View details" placement="bottom">
              <IconButton size="sm" variant="secondary" aria-label="View">
                <Eye size={14} />
              </IconButton>
            </Tooltip>
            
            <Tooltip content="Edit item" placement="bottom">
              <IconButton size="sm" variant="secondary" aria-label="Edit">
                <Edit size={14} />
              </IconButton>
            </Tooltip>
            
            <Tooltip content="Copy to clipboard" placement="bottom">
              <IconButton size="sm" variant="secondary" aria-label="Copy">
                <Copy size={14} />
              </IconButton>
            </Tooltip>
            
            <Tooltip content="Delete permanently" placement="bottom">
              <IconButton size="sm" variant="secondary" aria-label="Delete">
                <Trash2 size={14} />
              </IconButton>
            </Tooltip>
            
            <div className="mx-2 h-6 border-l border-current opacity-50" />
            
            <Tooltip content="Add to favorites" placement="bottom">
              <IconButton size="sm" variant="ghost" aria-label="Favorite">
                <Heart size={14} />
              </IconButton>
            </Tooltip>
            
            <Tooltip content="Rate this item" placement="bottom">
              <IconButton size="sm" variant="ghost" aria-label="Rate">
                <Star size={14} />
              </IconButton>
            </Tooltip>
            
            <Tooltip content="More options" placement="bottom">
              <IconButton size="sm" variant="ghost" aria-label="Settings">
                <Settings size={14} />
              </IconButton>
            </Tooltip>
          </div>
        </div>
      </div>

      {/* Interactive Cards */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Interactive Elements</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Tooltip 
            content={
              <div>
                <div className="font-semibold">User Profile</div>
                <div className="text-xs opacity-80">Click to view details</div>
              </div>
            }
            placement="top"
          >
            <Card variant="bordered" hoverable className="cursor-pointer">
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border border-current flex items-center justify-center">
                    <User size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">John Doe</h4>
                    <p className="text-xs opacity-70">Developer</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Tooltip>
          
          <Tooltip 
            content={
              <div>
                <div className="font-semibold">Messages</div>
                <div className="text-xs opacity-80">3 unread messages</div>
              </div>
            }
            placement="top"
          >
            <Card variant="bordered" hoverable className="cursor-pointer">
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border border-current flex items-center justify-center">
                    <Mail size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Inbox</h4>
                    <Badge variant="error" size="sm">3</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Tooltip>
          
          <Tooltip 
            content={
              <div>
                <div className="font-semibold">System Settings</div>
                <div className="text-xs opacity-80">Configure your preferences</div>
              </div>
            }
            placement="top"
          >
            <Card variant="bordered" hoverable className="cursor-pointer">
              <CardContent>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 border border-current flex items-center justify-center">
                    <Settings size={20} />
                  </div>
                  <div>
                    <h4 className="font-semibold">Settings</h4>
                    <p className="text-xs opacity-70">Preferences</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </Tooltip>
        </div>
      </div>

      {/* Status Indicators */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold">Status with Tooltips</h3>
        <div className="border border-current p-4 space-y-3">
          <div className="flex items-center justify-between">
            <span>API Status</span>
            <Tooltip content="All systems operational • Last checked: 2 min ago">
              <Badge variant="success" size="sm" className="cursor-help">
                Online
              </Badge>
            </Tooltip>
          </div>
          
          <div className="flex items-center justify-between">
            <span>Database</span>
            <Tooltip content="Experiencing high latency • Average response: 250ms">
              <Badge variant="warning" size="sm" className="cursor-help">
                Slow
              </Badge>
            </Tooltip>
          </div>
          
          <div className="flex items-center justify-between">
            <span>CDN</span>
            <Tooltip content="Global edge locations active • 99.9% uptime">
              <Badge variant="primary" size="sm" className="cursor-help">
                Optimized
              </Badge>
            </Tooltip>
          </div>
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
