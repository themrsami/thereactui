# theReactUI

Lightning fast minimalist UI library with pure black & white design. No border-radius, no gray shades, just clean geometric components.

## Features

- 🖤 **Pure Black & White**: No gray shades, only pure black and white
- ⚡ **Lightning Fast**: Optimized for performance with minimal CSS
- 📦 **No Background Colors**: Clean borders-only design
- 📐 **No Border Radius**: Sharp, geometric edges
- 🌙 **Dark Mode**: Built-in theme support with next-themes
- ♿ **Accessible**: Full keyboard navigation and screen reader support
- 🎯 **TypeScript**: Complete type safety
- 🎨 **11 Components**: Button, Input, IconButton, ButtonGroup, CopyButton, Breadcrumb, CodeBlock, Modal, Card, Badge, Tooltip

## Installation

```bash
# pnpm (recommended)
pnpm add thereactui

# npm
npm install thereactui

# yarn
yarn add thereactui
```

## Quick Start

1. Install the package with pnpm
2. Wrap your app with `TheReactUIProvider`
3. Import and use components

```tsx
import { TheReactUIProvider, Button, Input } from 'thereactui';

export default function App() {
  return (
    <TheReactUIProvider>
      <div className="p-8 space-y-4">
        <Button variant="primary">Hello theReactUI!</Button>
        <Input placeholder="Pure black & white input" />
      </div>
    </TheReactUIProvider>
  );
}
```

## CSS Setup

theReactUI requires Tailwind CSS. Add this to your CSS file:

```css
@import "tailwindcss";

/* theReactUI Theme Variables */
:root {
  --background: #ffffff;
  --foreground: #000000;
  --border: #000000;
}

.dark {
  --background: #000000;
  --foreground: #ffffff;
  --border: #ffffff;
}

* {
  border-color: var(--border);
}

body {
  background: var(--background);
  color: var(--foreground);
  transition: none;
}
```

## Components

### Button
All variants and sizes with loading/disabled states.

```tsx
import { Button } from 'thereactui';

// Variants
<Button variant="primary">Primary</Button>
<Button variant="secondary">Secondary</Button>
<Button variant="ghost">Ghost</Button>

// Sizes  
<Button size="sm">Small</Button>
<Button size="md">Medium</Button>
<Button size="lg">Large</Button>

// States
<Button loading>Loading</Button>
<Button disabled>Disabled</Button>
```

### Input
Form input with variants, sizes, and validation states.

```tsx
import { Input } from 'thereactui';

// Basic input
<Input placeholder="Enter text" />

// With label and helper text
<Input 
  label="Email"
  placeholder="Enter email"
  helperText="We'll never share your email"
/>

// Variants
<Input variant="default" />
<Input variant="error" errorMessage="Invalid email" />
<Input variant="success" helperText="Email is valid" />

// Sizes
<Input size="sm" placeholder="Small input" />
<Input size="md" placeholder="Medium input" />  
<Input size="lg" placeholder="Large input" />
```

### IconButton
Square buttons optimized for icons.

```tsx
import { IconButton } from 'thereactui';
import { Heart, Star, Copy } from 'lucide-react';

<IconButton aria-label="Like">
  <Heart />
</IconButton>

<IconButton variant="primary" aria-label="Star">
  <Star />
</IconButton>
```

### ButtonGroup
Group buttons with connected borders.

```tsx
import { ButtonGroup, Button } from 'thereactui';

<ButtonGroup>
  <Button variant="secondary">First</Button>
  <Button variant="secondary">Second</Button>
  <Button variant="secondary">Third</Button>
</ButtonGroup>
```

### CopyButton
Button with built-in clipboard functionality.

```tsx
import { CopyButton } from 'thereactui';

<CopyButton text="Text to copy" />
<CopyButton text="Custom text" iconOnly />
```

### Breadcrumb  
Navigation breadcrumbs.

```tsx
import { Breadcrumb } from 'thereactui';

const items = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Details' }
];

<Breadcrumb items={items} />
```

### CodeBlock
Syntax highlighted code blocks with copy functionality.

```tsx
import { CodeBlock } from 'thereactui';

const code = `function hello() {
  console.log('Hello theReactUI!');
}`;

<CodeBlock 
  code={code}
  language="javascript"
  filename="hello.js"
/>
```

### Modal
Dialog modal with backdrop, keyboard navigation, and focus management.

```tsx
import { Modal, Button } from 'thereactui';
import { useState } from 'react';

function MyComponent() {
  const [open, setOpen] = useState(false);
  
  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Modal</Button>
      <Modal 
        isOpen={open}
        onClose={() => setOpen(false)}
        title="Example Modal"
        size="md"
      >
        <p>Modal content goes here</p>
        <Button onClick={() => setOpen(false)}>Close</Button>
      </Modal>
    </>
  );
}
```

### Card
Flexible container component for grouping related content.

```tsx
import { Card, CardHeader, CardContent, CardFooter, Button } from 'thereactui';

// Basic card
<Card>
  <CardContent>
    <h3>Card Title</h3>
    <p>Card content goes here</p>
  </CardContent>
</Card>

// Card with sections
<Card variant="bordered">
  <CardHeader>
    <h3>Profile Card</h3>
  </CardHeader>
  <CardContent>
    <p>User information and details</p>
  </CardContent>
  <CardFooter>
    <Button variant="primary">Follow</Button>
    <Button variant="secondary">Message</Button>
  </CardFooter>
</Card>

// Interactive card
<Card 
  variant="elevated" 
  hoverable 
  onClick={() => console.log('Card clicked')}
>
  <CardContent>Clickable card content</CardContent>
</Card>
```

### Badge
Small status indicators and labels for displaying concise information.

```tsx
import { Badge } from 'thereactui';

// Basic badges
<Badge>Default</Badge>
<Badge variant="primary">Primary</Badge>
<Badge variant="success">Success</Badge>
<Badge variant="error">Error</Badge>

// Outline badges
<Badge variant="primary" outline>Outline</Badge>

// With icons
<Badge variant="success" className="flex items-center gap-1">
  <CheckCircle size={12} />
  Verified
</Badge>

// Notification badges
<div className="relative">
  <Button>Notifications</Button>
  <Badge 
    variant="error" 
    size="sm" 
    className="absolute -top-2 -right-2"
  >
    3
  </Badge>
</div>

// Status indicators
<Badge variant="success" size="sm">Online</Badge>
<Badge variant="warning" size="sm">Away</Badge>
<Badge variant="error" size="sm">Offline</Badge>
```

### Tooltip
Contextual information displayed on hover or focus with smart positioning.

```tsx
import { Tooltip, Button, IconButton } from 'thereactui';
import { Help, Info, Copy } from 'lucide-react';

// Basic tooltip
<Tooltip content="This is a tooltip">
  <Button>Hover me</Button>
</Tooltip>

// Different placements
<Tooltip content="Tooltip on top" placement="top">
  <Button>Top</Button>
</Tooltip>

<Tooltip content="Tooltip on bottom" placement="bottom">
  <Button>Bottom</Button>
</Tooltip>

// With custom delay
<Tooltip content="Delayed tooltip" delay={500}>
  <Button>Slow tooltip</Button>
</Tooltip>

// Rich content
<Tooltip 
  content={
    <div>
      <div className="font-semibold">Rich Content</div>
      <div className="text-xs opacity-80">This tooltip has formatted content</div>
    </div>
  }
>
  <IconButton aria-label="Help">
    <Help size={16} />
  </IconButton>
</Tooltip>

// Help icons
<div className="flex items-center gap-2">
  <label>Email Address</label>
  <Tooltip content="We'll never share your email">
    <Info size={14} className="cursor-help opacity-70" />
  </Tooltip>
</div>

// Disabled tooltip
<Tooltip content="This won't show" disabled>
  <Button>Disabled tooltip</Button>
</Tooltip>
```

## Documentation

Visit our documentation site for complete guides, examples, and API references for all components.

## Upcoming Components

We're actively working on expanding theReactUI with more essential components:

- **Form Components**: Checkbox, Radio, Select, Textarea, Switch/Toggle
- **Layout Components**: Tabs, Accordion, Divider, Spacer  
- **Feedback Components**: Progress, Alert/Notification, Spinner/Loading
- **Data Display**: Avatar, Table, List, Calendar
- **Navigation**: Menu/Dropdown, Pagination, Stepper
- **Utility Components**: Popover, Date Picker, Slider

All upcoming components will follow the same theReactUI principles: pure black & white design, no border-radius, minimal CSS, and maximum performance.

## Requirements

- React 18.0.0 or higher
- Tailwind CSS 3.0.0 or higher  
- Node.js 18.0.0 or higher
- Package manager: pnpm (recommended), npm, or yarn

## Development

Using pnpm for optimal performance:

```bash
# Clone the repository
git clone https://github.com/themrsami/thereactui.git

# Install dependencies  
pnpm install

# Start development server
pnpm dev

# Build library
pnpm run build:lib

# Build documentation site
pnpm build
```

## Design Principles

- **Minimalist**: Strip away unnecessary visual elements
- **Fast**: Optimize for performance and loading speed  
- **Accessible**: Ensure everyone can use your interface
- **Consistent**: Maintain visual and behavioral consistency
- **Pure**: Use only black and white colors
- **Sharp**: No border-radius, geometric edges only
- **Borderless Backgrounds**: Clean border-only styling

## Contributing

We welcome contributions! Please read our contributing guidelines and submit pull requests to our GitHub repository.

## Version

Current version: **1.2.0**

## License

MIT © theReactUI Team
