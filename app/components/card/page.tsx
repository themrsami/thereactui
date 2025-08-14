'use client';

import { useState } from 'react';
import { DocLayout } from '@/components/layout';
import { Card, CardHeader, CardContent, CardFooter, Button, Input } from '@/components/ui';
import { CodeBlock } from '@/components/ui';
import { Heart, Star, User, Mail, ExternalLink } from 'lucide-react';

export default function CardPage() {
  const [likedCards, setLikedCards] = useState<number[]>([]);

  const toggleLike = (cardId: number) => {
    setLikedCards(prev => 
      prev.includes(cardId) 
        ? prev.filter(id => id !== cardId)
        : [...prev, cardId]
    );
  };

  return (
    <DocLayout>
      <div className="space-y-8">
        <div>
          <h1 className="text-3xl font-bold mb-2">Card</h1>
          <p className="text-lg">
            A flexible container component for grouping related content with consistent spacing and borders.
          </p>
        </div>

        {/* Import */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Import</h2>
          <CodeBlock language="tsx" filename="import.tsx">
{`import { Card, CardHeader, CardContent, CardFooter } from '@/components/ui';`}
          </CodeBlock>
        </div>

        {/* Basic Usage */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Basic Usage</h2>
          <div className="p-6 border border-current">
            <Card>
              <CardContent>
                <h3 className="font-semibold mb-2">Basic Card</h3>
                <p className="text-sm">
                  This is a basic card with default styling. Perfect for grouping related content.
                </p>
              </CardContent>
            </Card>
          </div>
          <CodeBlock language="tsx" filename="basic-card.tsx">
{`<Card>
  <CardContent>
    <h3 className="font-semibold mb-2">Basic Card</h3>
    <p className="text-sm">Card content goes here</p>
  </CardContent>
</Card>`}
          </CodeBlock>
        </div>

        {/* Variants */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Variants</h2>
          <div className="p-6 border border-current space-y-4">
            <Card variant="default">
              <CardContent>
                <h3 className="font-semibold mb-2">Default Card</h3>
                <p className="text-sm">Standard border styling</p>
              </CardContent>
            </Card>
            
            <Card variant="bordered">
              <CardContent>
                <h3 className="font-semibold mb-2">Bordered Card</h3>
                <p className="text-sm">Thicker border for emphasis</p>
              </CardContent>
            </Card>
            
            <Card variant="elevated">
              <CardContent>
                <h3 className="font-semibold mb-2">Elevated Card</h3>
                <p className="text-sm">Shadow effect for depth</p>
              </CardContent>
            </Card>
          </div>
          <CodeBlock language="tsx" filename="card-variants.tsx">
{`<Card variant="default">
  <CardContent>Default Card</CardContent>
</Card>

<Card variant="bordered">
  <CardContent>Bordered Card</CardContent>
</Card>

<Card variant="elevated">
  <CardContent>Elevated Card</CardContent>
</Card>`}
          </CodeBlock>
        </div>

        {/* Padding */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Padding</h2>
          <div className="p-6 border border-current space-y-4">
            <Card padding="sm">
              <CardContent>
                <p className="text-sm">Small padding</p>
              </CardContent>
            </Card>
            
            <Card padding="md">
              <CardContent>
                <p className="text-sm">Medium padding (default)</p>
              </CardContent>
            </Card>
            
            <Card padding="lg">
              <CardContent>
                <p className="text-sm">Large padding</p>
              </CardContent>
            </Card>
            
            <Card padding="none" className="border border-current">
              <div className="p-4">
                <p className="text-sm">No padding (custom content padding)</p>
              </div>
            </Card>
          </div>
          <CodeBlock language="tsx" filename="card-padding.tsx">
{`<Card padding="sm">
  <CardContent>Small padding</CardContent>
</Card>

<Card padding="md">
  <CardContent>Medium padding</CardContent>
</Card>

<Card padding="lg">
  <CardContent>Large padding</CardContent>
</Card>

<Card padding="none">
  <div className="p-4">Custom padding</div>
</Card>`}
          </CodeBlock>
        </div>

        {/* Interactive Cards */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Interactive Cards</h2>
          <div className="p-6 border border-current">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <Card 
                hoverable 
                variant="elevated"
                onClick={() => alert('Card clicked!')}
              >
                <CardContent>
                  <h3 className="font-semibold mb-2">Clickable Card</h3>
                  <p className="text-sm">Click me to see the interaction!</p>
                </CardContent>
              </Card>
              
              <Card hoverable variant="bordered">
                <CardContent>
                  <h3 className="font-semibold mb-2">Hoverable Card</h3>
                  <p className="text-sm">Hover effects without click handler</p>
                </CardContent>
              </Card>
            </div>
          </div>
          <CodeBlock language="tsx" filename="interactive-cards.tsx">
{`<Card 
  hoverable 
  variant="elevated"
  onClick={() => alert('Clicked!')}
>
  <CardContent>
    <h3>Clickable Card</h3>
    <p>Click me!</p>
  </CardContent>
</Card>

<Card hoverable>
  <CardContent>
    <h3>Hoverable Card</h3>
    <p>Just hover effects</p>
  </CardContent>
</Card>`}
          </CodeBlock>
        </div>

        {/* Card Sections */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Card Sections</h2>
          <div className="p-6 border border-current">
            <Card variant="bordered">
              <CardHeader>
                <div className="flex items-center justify-between">
                  <h3 className="font-semibold">User Profile</h3>
                  <Button size="sm" variant="ghost">
                    <ExternalLink size={14} />
                  </Button>
                </div>
              </CardHeader>
              
              <CardContent>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 border border-current flex items-center justify-center">
                    <User size={24} />
                  </div>
                  <div>
                    <h4 className="font-medium">John Doe</h4>
                    <p className="text-sm opacity-70">Software Developer</p>
                  </div>
                </div>
                <p className="text-sm">
                  Passionate about creating clean, minimalist user interfaces with excellent user experience.
                </p>
              </CardContent>
              
              <CardFooter>
                <div className="flex justify-between items-center">
                  <div className="flex gap-2">
                    <Button size="sm" variant="primary">
                      Follow
                    </Button>
                    <Button size="sm" variant="secondary">
                      Message
                    </Button>
                  </div>
                  <Button size="sm" variant="ghost">
                    <Heart size={16} />
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
          <CodeBlock language="tsx" filename="card-sections.tsx">
{`<Card variant="bordered">
  <CardHeader>
    <div className="flex items-center justify-between">
      <h3 className="font-semibold">User Profile</h3>
      <Button size="sm" variant="ghost">
        <ExternalLink size={14} />
      </Button>
    </div>
  </CardHeader>
  
  <CardContent>
    <div className="flex items-center gap-3 mb-4">
      <div className="w-12 h-12 border border-current flex items-center justify-center">
        <User size={24} />
      </div>
      <div>
        <h4 className="font-medium">John Doe</h4>
        <p className="text-sm opacity-70">Software Developer</p>
      </div>
    </div>
    <p className="text-sm">Profile description...</p>
  </CardContent>
  
  <CardFooter>
    <div className="flex justify-between items-center">
      <div className="flex gap-2">
        <Button size="sm" variant="primary">Follow</Button>
        <Button size="sm" variant="secondary">Message</Button>
      </div>
      <Button size="sm" variant="ghost">
        <Heart size={16} />
      </Button>
    </div>
  </CardFooter>
</Card>`}
          </CodeBlock>
        </div>

        {/* Grid Layout */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Grid Layout</h2>
          <div className="p-6 border border-current">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {[1, 2, 3].map((cardId) => (
                <Card 
                  key={cardId} 
                  variant="elevated" 
                  hoverable
                  onClick={() => toggleLike(cardId)}
                >
                  <CardContent>
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-semibold">Product {cardId}</h3>
                      <Button size="sm" variant="ghost">
                        <Heart 
                          size={16} 
                          fill={likedCards.includes(cardId) ? 'currentColor' : 'none'}
                        />
                      </Button>
                    </div>
                    <div className="h-24 border border-current mb-3 flex items-center justify-center">
                      <Star size={32} />
                    </div>
                    <p className="text-sm opacity-70">
                      This is a sample product card with interactive like functionality.
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          <CodeBlock language="tsx" filename="card-grid.tsx">
{`<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
  {products.map((product) => (
    <Card 
      key={product.id} 
      variant="elevated" 
      hoverable
      onClick={() => handleProductClick(product.id)}
    >
      <CardContent>
        <h3 className="font-semibold">{product.name}</h3>
        <div className="h-24 border border-current mb-3">
          {/* Product image */}
        </div>
        <p className="text-sm">{product.description}</p>
      </CardContent>
    </Card>
  ))}
</div>`}
          </CodeBlock>
        </div>

        {/* Form Card */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Form Card</h2>
          <div className="p-6 border border-current">
            <Card variant="bordered" className="max-w-md">
              <CardHeader>
                <h3 className="font-semibold">Contact Form</h3>
                <p className="text-sm opacity-70">Send us a message</p>
              </CardHeader>
              
              <CardContent>
                <div className="space-y-4">
                  <Input
                    label="Name"
                    placeholder="Enter your name"
                  />
                  <Input
                    label="Email"
                    type="email"
                    placeholder="Enter your email"
                  />
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Message
                    </label>
                    <textarea
                      className="w-full border border-current bg-background text-foreground p-3 text-sm focus:outline-none placeholder:opacity-50"
                      rows={4}
                      placeholder="Enter your message"
                    />
                  </div>
                </div>
              </CardContent>
              
              <CardFooter>
                <div className="flex gap-2 w-full">
                  <Button variant="primary" className="flex-1">
                    Send Message
                  </Button>
                  <Button variant="secondary">
                    Reset
                  </Button>
                </div>
              </CardFooter>
            </Card>
          </div>
          <CodeBlock language="tsx" filename="form-card.tsx">
{`<Card variant="bordered" className="max-w-md">
  <CardHeader>
    <h3 className="font-semibold">Contact Form</h3>
    <p className="text-sm opacity-70">Send us a message</p>
  </CardHeader>
  
  <CardContent>
    <div className="space-y-4">
      <Input label="Name" placeholder="Enter your name" />
      <Input label="Email" type="email" placeholder="Enter your email" />
      <textarea
        className="w-full border border-current bg-background text-foreground p-3"
        rows={4}
        placeholder="Enter your message"
      />
    </div>
  </CardContent>
  
  <CardFooter>
    <div className="flex gap-2 w-full">
      <Button variant="primary" className="flex-1">Send</Button>
      <Button variant="secondary">Reset</Button>
    </div>
  </CardFooter>
</Card>`}
          </CodeBlock>
        </div>

        {/* Features */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Features</h2>
          <div className="border border-current p-4 space-y-3">
            <p className="text-sm">
              <strong>Multiple Variants:</strong> Default, bordered, and elevated styles
            </p>
            <p className="text-sm">
              <strong>Flexible Padding:</strong> None, small, medium, and large padding options
            </p>
            <p className="text-sm">
              <strong>Interactive States:</strong> Hover effects and click handlers for enhanced UX
            </p>
            <p className="text-sm">
              <strong>Sectioned Layout:</strong> Header, content, and footer sections with automatic borders
            </p>
            <p className="text-sm">
              <strong>Responsive Design:</strong> Works seamlessly across all screen sizes
            </p>
            <p className="text-sm">
              <strong>Theme Aware:</strong> Follows theReactUI light/dark mode themes
            </p>
            <p className="text-sm">
              <strong>Accessibility:</strong> Proper semantic structure and keyboard navigation
            </p>
          </div>
        </div>

        {/* API Reference */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">API Reference</h2>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-2">Card</h3>
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
                      <td className="p-3 border-r border-current">'default' | 'bordered' | 'elevated'</td>
                      <td className="p-3 border-r border-current">'default'</td>
                      <td className="p-3">Visual style variant</td>
                    </tr>
                    <tr className="border-b border-current">
                      <td className="p-3 border-r border-current font-mono text-sm">padding</td>
                      <td className="p-3 border-r border-current">'none' | 'sm' | 'md' | 'lg'</td>
                      <td className="p-3 border-r border-current">'md'</td>
                      <td className="p-3">Internal padding amount</td>
                    </tr>
                    <tr className="border-b border-current">
                      <td className="p-3 border-r border-current font-mono text-sm">hoverable</td>
                      <td className="p-3 border-r border-current">boolean</td>
                      <td className="p-3 border-r border-current">false</td>
                      <td className="p-3">Enable hover effects</td>
                    </tr>
                    <tr className="border-b border-current">
                      <td className="p-3 border-r border-current font-mono text-sm">onClick</td>
                      <td className="p-3 border-r border-current">() =&gt; void</td>
                      <td className="p-3 border-r border-current">-</td>
                      <td className="p-3">Click handler function</td>
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

            <div>
              <h3 className="text-lg font-semibold mb-2">CardHeader, CardContent, CardFooter</h3>
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
                      <td className="p-3">Content to render</td>
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
          </div>
        </div>

        {/* Complete Example */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold">Complete Example</h2>
          <CodeBlock 
            language="tsx"
            filename="Complete Example"
          >
{`import { Card, CardHeader, CardContent, CardFooter, Button, Input } from 'thereactui';
import { useState } from 'react';
import { Heart, Star, User, Mail } from 'lucide-react';

export default function CardExample() {
  const [favorites, setFavorites] = useState<string[]>([]);
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const toggleFavorite = (id: string) => {
    setFavorites(prev => 
      prev.includes(id) 
        ? prev.filter(item => item !== id)
        : [...prev, id]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div className="space-y-6">
      {/* Product Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {['product-1', 'product-2', 'product-3'].map((id) => (
          <Card key={id} variant="elevated" hoverable>
            <CardContent>
              <div className="flex items-center justify-between mb-3">
                <h3 className="font-semibold">Product {id.split('-')[1]}</h3>
                <Button 
                  size="sm" 
                  variant="ghost"
                  onClick={() => toggleFavorite(id)}
                >
                  <Heart 
                    size={16} 
                    fill={favorites.includes(id) ? 'currentColor' : 'none'}
                  />
                </Button>
              </div>
              <div className="h-32 border border-current mb-3 flex items-center justify-center">
                <Star size={48} />
              </div>
              <p className="text-sm opacity-70">
                Beautiful minimalist design following theReactUI principles.
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Contact Form Card */}
      <Card variant="bordered" className="max-w-lg mx-auto">
        <CardHeader>
          <div className="flex items-center gap-3">
            <Mail size={24} />
            <div>
              <h3 className="font-semibold">Get In Touch</h3>
              <p className="text-sm opacity-70">We'd love to hear from you</p>
            </div>
          </div>
        </CardHeader>
        
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            <Input
              label="Full Name"
              value={formData.name}
              onChange={(e) => setFormData(prev => ({...prev, name: e.target.value}))}
              placeholder="Enter your full name"
              required
            />
            <Input
              label="Email Address"
              type="email"
              value={formData.email}
              onChange={(e) => setFormData(prev => ({...prev, email: e.target.value}))}
              placeholder="Enter your email"
              required
            />
            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData(prev => ({...prev, message: e.target.value}))}
                className="w-full border border-current bg-background text-foreground p-3 text-sm focus:outline-none placeholder:opacity-50"
                rows={4}
                placeholder="Your message here..."
                required
              />
            </div>
          </form>
        </CardContent>
        
        <CardFooter>
          <div className="flex gap-3 w-full">
            <Button 
              type="submit" 
              variant="primary" 
              className="flex-1"
              onClick={handleSubmit}
            >
              Send Message
            </Button>
            <Button 
              type="button"
              variant="secondary"
              onClick={() => setFormData({ name: '', email: '', message: '' })}
            >
              Reset
            </Button>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}`}
          </CodeBlock>
        </div>
      </div>
    </DocLayout>
  );
}
