import React, { useEffect, useState, useCallback } from 'react';
import { Search } from 'lucide-react';
import { Button } from './Button';

const COMPONENTS = [
  { name: 'Button', path: '/components/button' },
  { name: 'ButtonGroup', path: '/components/button-group' },
  { name: 'IconButton', path: '/components/icon-button' },
  { name: 'Input', path: '/components/input' },
  { name: 'CopyButton', path: '/components/copy-button' },
  { name: 'CodeBlock', path: '/components/code-block' },
  { name: 'Breadcrumb', path: '/components/breadcrumb' },
  { name: 'Modal', path: '/components/modal' },
  { name: 'Card', path: '/components/card' },
  { name: 'Badge', path: '/components/badge' },
  { name: 'Tooltip', path: '/components/tooltip' },
];

export function ComponentSearchModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  const [query, setQuery] = useState('');
  const [filtered, setFiltered] = useState(COMPONENTS);
  const [selected, setSelected] = useState(0);

  useEffect(() => {
    if (open) {
      setQuery('');
      setFiltered(COMPONENTS);
      setSelected(0);
    }
  }, [open]);

  useEffect(() => {
    setFiltered(
      COMPONENTS.filter(c => c.name.toLowerCase().includes(query.toLowerCase()))
    );
    setSelected(0);
  }, [query]);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent) => {
      if (e.key === 'ArrowDown') {
        setSelected(s => Math.min(s + 1, filtered.length - 1));
        e.preventDefault();
      } else if (e.key === 'ArrowUp') {
        setSelected(s => Math.max(s - 1, 0));
        e.preventDefault();
      } else if (e.key === 'Enter') {
        if (filtered[selected]) {
          window.location.href = filtered[selected].path;
          onClose();
        }
      } else if (e.key === 'Escape') {
        onClose();
      }
    },
    [filtered, selected, onClose]
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-background border border-foreground rounded w-full max-w-md shadow-lg">
        <div className="flex items-center px-4 py-2 border-b border-foreground">
          <Search size={18} className="mr-2 opacity-60" />
          <input
            autoFocus
            value={query}
            onChange={e => setQuery(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Search components..."
            className="flex-1 bg-transparent outline-none text-foreground placeholder:text-foreground/60 py-2"
          />
          <Button size="sm" variant="ghost" onClick={onClose}>
            Esc
          </Button>
        </div>
        <ul className="max-h-64 overflow-y-auto">
          {filtered.length === 0 && (
            <li className="px-4 py-3 text-foreground/60">No components found</li>
          )}
          {filtered.map((c, i) => (
            <li
              key={c.name}
              className={`px-4 py-2 cursor-pointer ${
                i === selected ? 'bg-foreground text-background' : 'text-foreground'
              }`}
              onMouseEnter={() => setSelected(i)}
              onClick={() => {
                window.location.href = c.path;
                onClose();
              }}
            >
              {c.name}
            </li>
          ))}
        </ul>
        <div className="px-4 py-2 text-xs text-foreground/60 border-t border-foreground">
          <span className="font-mono">Ctrl + K</span> to open anywhere
        </div>
      </div>
    </div>
  );
}
