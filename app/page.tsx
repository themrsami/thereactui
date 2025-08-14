'use client';

import { DocLayout } from '../components/layout';
import { Button } from '../components/ui/Button';

export default function Home() {
  return (
    <DocLayout>
      <div className="space-y-8">
        <header className="space-y-4">
          <h1 className="text-4xl font-bold">theReactUI</h1>
          <p className="text-xl">Lightning Fast Minimalist UI Library</p>
          <p className="text-sm opacity-70">
            Pure Black & White • No Backgrounds • Borders Only • No Border Radius
          </p>
        </header>

        <div className="space-y-6">
          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Design Philosophy</h2>
            <div className="space-y-2 text-sm">
              <p>• <strong>Minimalist:</strong> Pure black and white colors only</p>
              <p>• <strong>Lightning Fast:</strong> Optimized for performance</p>
              <p>• <strong>Border-only Design:</strong> No background colors, only borders</p>
              <p>• <strong>No Border Radius:</strong> Sharp, clean edges</p>
              <p>• <strong>Accessible:</strong> Full keyboard navigation and screen reader support</p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Quick Preview</h2>
            <div className="flex gap-4 flex-wrap">
              <Button variant="primary">Primary Button</Button>
              <Button variant="secondary">Secondary Button</Button>
              <Button variant="ghost">Ghost Button</Button>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl font-semibold">Get Started</h2>
            <div className="flex gap-4">
              <Button variant="primary" onClick={() => window.location.href = '/installation'}>
                Install theReactUI
              </Button>
              <Button variant="secondary" onClick={() => window.location.href = '/components'}>
                View Components
              </Button>
            </div>
          </div>
        </div>
      </div>
    </DocLayout>
  );
}
