'use client';

import { useState, useEffect, useCallback } from "react";
import { ComponentSearchModal } from "../ui/ComponentSearchModal";
import { Search, Sun, Moon, Monitor, ChevronDown } from "lucide-react";
import { Button } from "../ui/Button";
import { useTheme } from "../context/ThemeContext";

// Theme Dropdown Component
function ThemeDropdown() {
  const { theme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);

  const themes = [
    { value: 'light', label: 'Light', icon: <Sun size={14} /> },
    { value: 'dark', label: 'Dark', icon: <Moon size={14} /> },
    { value: 'system', label: 'System', icon: <Monitor size={14} /> },
  ];

  const currentTheme = themes.find(t => t.value === theme) || themes[0];

  return (
    <div className="relative">
      <Button
        variant="ghost"
        size="sm"
        onClick={() => setIsOpen(!isOpen)}
        className="navbar-theme-button relative flex items-center gap-2 cursor-pointer text-background hover:bg-background hover:text-foreground"
      >
        {currentTheme.icon}
        <ChevronDown size={12} />
      </Button>
      
      {isOpen && (
        <div className="absolute right-0 mt-1 w-28 border border-background bg-background z-50 shadow-sm">
          {themes.map((themeOption) => (
            <button
              key={themeOption.value}
              className="w-full px-3 py-2 text-left text-sm hover:bg-foreground hover:text-background flex items-center gap-2 bg-background text-foreground border-none cursor-pointer"
              onClick={() => {
                setTheme(themeOption.value);
                setIsOpen(false);
              }}
            >
              {themeOption.icon}
              {themeOption.label}
            </button>
          ))}
        </div>
      )}
      
      {/* Click outside to close */}
      {isOpen && (
        <div 
          className="fixed inset-0 z-40" 
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}

// Global Layout Client Component
export function GlobalLayout({ children }: { children: React.ReactNode }) {
  const [searchOpen, setSearchOpen] = useState(false);

  // Ctrl+K handler
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      setSearchOpen(true);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      {/* Enhanced Navbar */}
      <nav className="fixed top-0 left-0 right-0 h-16 border-b border-current bg-foreground z-[100] flex items-center px-6 justify-between shadow-sm">
        <div className="flex items-center gap-6">
          <a href="/" className="text-xl font-bold text-background hover:opacity-80 transition-opacity">
            theReactUI
          </a>
          <div className="hidden md:flex items-center gap-4 text-sm text-background">
            <a href="/components" className="hover:opacity-80 transition-opacity cursor-pointer">Components</a>
            <a href="/docs" className="hover:opacity-80 transition-opacity cursor-pointer">Docs</a>
            <a href="/installation" className="hover:opacity-80 transition-opacity cursor-pointer">Install</a>
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          {/* Search Button with prominent styling */}
          <button
            className="flex items-center gap-3 px-4 py-2 border-2 border-background text-background bg-transparent hover:bg-background hover:text-foreground transition-all duration-200 text-sm font-medium cursor-pointer min-w-[200px] justify-between"
            onClick={() => setSearchOpen(true)}
            aria-label="Search components (Ctrl+K)"
          >
            <div className="flex items-center gap-2">
              <Search size={16} />
              <span className="text-background/80">Search components...</span>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="px-1.5 py-0.5 text-xs font-mono bg-background/20 border border-background/30 text-background">Ctrl</kbd>
              <span className="text-background/60">+</span>
              <kbd className="px-1.5 py-0.5 text-xs font-mono bg-background/20 border border-background/30 text-background">K</kbd>
            </div>
          </button>
          
          {/* Mobile search icon */}
          <button
            className="md:hidden flex items-center justify-center w-10 h-10 border border-background text-background bg-transparent hover:bg-background hover:text-foreground transition-all duration-200 cursor-pointer"
            onClick={() => setSearchOpen(true)}
            aria-label="Search components"
          >
            <Search size={18} />
          </button>
          
          {/* Theme Dropdown */}
          <ThemeDropdown />
        </div>
      </nav>
      
      {/* Search Modal */}
      <ComponentSearchModal open={searchOpen} onClose={() => setSearchOpen(false)} />
      
      {/* Main content, with top padding for navbar */}
      <div style={{ paddingTop: 64 }}>{children}</div>
    </>
  );
}
