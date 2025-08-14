'use client';

import { DocLayout } from '../../components/layout';

export default function DocsPage() {
  return (
    <DocLayout>
      <div className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-3xl font-bold">Documentation</h1>
          <p className="text-lg opacity-70">
            Complete guide to using theReactUI components in your project
          </p>
        </header>

        <div className="space-y-6">
          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">What is theReactUI?</h2>
            <p>
              theReactUI is a lightning-fast, minimalist UI library built with React and Tailwind CSS. 
              It follows strict design principles to create clean, accessible interfaces with 
              pure black and white aesthetics.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Design Principles</h2>
            <div className="space-y-3">
              <div className="border border-current p-4">
                <h3 className="font-semibold mb-2">Pure Black & White</h3>
                <p className="text-sm">
                  No gray shades, no colors. Only pure black (#000000) and white (#ffffff) 
                  to maintain ultimate contrast and simplicity.
                </p>
              </div>
              <div className="border border-current p-4">
                <h3 className="font-semibold mb-2">Borders Only</h3>
                <p className="text-sm">
                  Components use borders for definition, not background colors. This creates 
                  clean, lightweight interfaces that load instantly.
                </p>
              </div>
              <div className="border border-current p-4">
                <h3 className="font-semibold mb-2">No Border Radius</h3>
                <p className="text-sm">
                  Sharp, clean edges everywhere. No rounded corners to maintain the minimalist 
                  geometric aesthetic.
                </p>
              </div>
              <div className="border border-current p-4">
                <h3 className="font-semibold mb-2">Performance First</h3>
                <p className="text-sm">
                  Built for speed with minimal CSS, no animations by default, and optimized 
                  for lightning-fast rendering.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Available Components</h2>
            <div className="grid gap-3">
              <div className="border border-current p-4">
                <h3 className="font-semibold mb-2">Button</h3>
                <p className="text-sm mb-2">
                  Clickable button component with multiple variants and sizes following theReactUI design principles.
                </p>
                <a href="/components/button" className="text-sm underline">View Button docs →</a>
              </div>
              <div className="border border-current p-4">
                <h3 className="font-semibold mb-2">Input</h3>
                <p className="text-sm mb-2">
                  Versatile input component with multiple variants, sizes, and states for form controls.
                </p>
                <a href="/components/input" className="text-sm underline">View Input docs →</a>
              </div>
            </div>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-semibold">Getting Started</h2>
            <ol className="space-y-2 text-sm">
              <li className="border border-current p-3">
                <strong>1. Install theReactUI</strong> - Follow our installation guide
              </li>
              <li className="border border-current p-3">
                <strong>2. Setup Provider</strong> - Wrap your app with TheReactUIProvider
              </li>
              <li className="border border-current p-3">
                <strong>3. Import Components</strong> - Start using theReactUI components
              </li>
              <li className="border border-current p-3">
                <strong>4. Customize</strong> - Extend with your own theReactUI-compliant components
              </li>
            </ol>
          </section>
        </div>
      </div>
    </DocLayout>
  );
}
