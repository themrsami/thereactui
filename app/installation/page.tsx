'use client';

import { DocLayout } from '../../components/layout';
import { CodeBlock } from '../../components/ui/CodeBlock';

export default function InstallationPage() {
  return (
    <DocLayout>
      <div className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-3xl font-bold">Installation</h1>
          <p className="text-lg opacity-70">
            Get started with theReactUI in your React project
          </p>
        </header>

        <div className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">NPM Package</h2>
            <p>Install theReactUI via pnpm, npm, or yarn:</p>
            
            <div className="space-y-3">
              <CodeBlock language="bash" filename="PNPM (Recommended)">
                {`pnpm add thereactui`}
              </CodeBlock>
              
              <CodeBlock language="bash" filename="NPM">
                {`npm install thereactui`}
              </CodeBlock>
              
              <CodeBlock language="bash" filename="Yarn">
                {`yarn add thereactui`}
              </CodeBlock>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Setup Provider</h2>
            <p>Wrap your app with TheReactUIProvider for theme support:</p>
            
            <CodeBlock 
              language="tsx" 
              filename="App Provider Setup"
            >
{`import { TheReactUIProvider } from 'thereactui';

export default function App({ children }) {
  return (
    <TheReactUIProvider>
      {children}
    </TheReactUIProvider>
  );
}`}
            </CodeBlock>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">CSS Setup</h2>
            <p>theReactUI requires Tailwind CSS. Add to your CSS file:</p>
            
            <CodeBlock 
              language="css" 
              filename="globals.css"
            >
{`@import "tailwindcss";

/* theReactUI Design System - Pure Black & White */
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

/* Custom utility classes for theReactUI */
.bg-background {
  background-color: var(--background);
}

.bg-foreground {
  background-color: var(--foreground);
}

.text-background {
  color: var(--background);
}

.text-foreground {
  color: var(--foreground);
}

.border-background {
  border-color: var(--background);
}

.border-foreground {
  border-color: var(--foreground);
}

* {
  border-color: var(--border);
}

body {
  background: var(--background);
  color: var(--foreground);
  font-family: var(--font-geist-sans), Arial, Helvetica, sans-serif;
  transition: none; /* No transitions for theReactUI minimalism */
}`}
            </CodeBlock>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">First Component</h2>
            <p>Import and use your first theReactUI component:</p>
            
            <CodeBlock 
              language="tsx" 
              filename="First Component Example"
            >
{`import { Button } from 'thereactui';

export default function MyPage() {
  return (
    <div>
      <Button variant="primary">
        Hello theReactUI!
      </Button>
    </div>
  );
}`}
            </CodeBlock>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Next.js Setup</h2>
            <p>For Next.js projects, update your layout.tsx:</p>
            
            <CodeBlock 
              language="tsx" 
              filename="layout.tsx"
            >
{`import { TheReactUIProvider } from 'thereactui';
import './globals.css';

export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        <TheReactUIProvider>
          {children}
        </TheReactUIProvider>
      </body>
    </html>
  );
}`}
            </CodeBlock>
          </section>
        </div>
      </div>
    </DocLayout>
  );
}
