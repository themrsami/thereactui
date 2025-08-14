'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '../context/ThemeContext';
import { Button } from '../ui/Button';
import { Breadcrumb } from '../ui/Breadcrumb';
import { 
  Sun, 
  Moon, 
  Monitor, 
  ChevronDown, 
  ChevronRight,
  Copy,
  Book,
  Download,
  Layers,
  Search,
  Menu,
  X
} from 'lucide-react';

interface NavigationItem {
  title: string;
  href: string;
  icon?: React.ReactNode;
  items?: NavigationItem[];
}

const navigation: NavigationItem[] = [
  {
    title: 'Getting Started',
    href: '/docs',
    icon: <Book size={16} />,
  },
  {
    title: 'Installation',
    href: '/installation',
    icon: <Download size={16} />,
  },
  {
    title: 'Components',
    href: '/components',
    icon: <Layers size={16} />,
    items: [
      { title: 'Button', href: '/components/button' },
      { title: 'ButtonGroup', href: '/components/button-group' },
      { title: 'IconButton', href: '/components/icon-button' },
      { title: 'Input', href: '/components/input' },
      { title: 'CopyButton', href: '/components/copy-button' },
      { title: 'CodeBlock', href: '/components/code-block' },
      { title: 'Breadcrumb', href: '/components/breadcrumb' },
      { title: 'Modal', href: '/components/modal' },
      { title: 'Card', href: '/components/card' },
      { title: 'Badge', href: '/components/badge' },
      { title: 'Tooltip', href: '/components/tooltip' },
    ],
  },
];

interface ThemeDropdownProps {
  theme: string | undefined;
  setTheme: (theme: string) => void;
}

function ThemeDropdown({ theme, setTheme }: ThemeDropdownProps) {
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
        className="navbar-theme-button relative flex items-center gap-2 cursor-pointer"
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

interface SidebarProps {
  navigation: NavigationItem[];
  pathname: string;
  isOpen: boolean;
  onClose: () => void;
}

function Sidebar({ navigation, pathname, isOpen, onClose }: SidebarProps) {
  const [expandedItems, setExpandedItems] = useState<string[]>(['Components']);
  const [searchQuery, setSearchQuery] = useState('');

  const toggleExpanded = (title: string) => {
    setExpandedItems(prev => 
      prev.includes(title) 
        ? prev.filter(item => item !== title)
        : [...prev, title]
    );
  };

  const isExpanded = (title: string) => expandedItems.includes(title);

  // Filter navigation based on search query
  const filteredNavigation = navigation.filter(item => {
    if (!searchQuery) return true;
    const query = searchQuery.toLowerCase();
    
    // Check if main item matches
    if (item.title.toLowerCase().includes(query)) return true;
    
    // Check if any sub-item matches
    if (item.items) {
      return item.items.some(subItem => 
        subItem.title.toLowerCase().includes(query)
      );
    }
    
    return false;
  });

  return (
    <aside className={`fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] border-r border-current overflow-y-auto bg-foreground z-40 transform transition-transform duration-300 ${
      isOpen ? 'translate-x-0' : '-translate-x-full'
    } lg:translate-x-0`}>
      <div className="p-4">
        {/* Close button for mobile */}
        <div className="flex justify-end lg:hidden mb-4">
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-background hover:bg-background hover:text-foreground"
          >
            <X size={16} />
          </Button>
        </div>
        {/* Search Box */}
        <div className="relative mb-4">
          <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-background opacity-70" />
          <input
            type="text"
            placeholder="Search components..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-3 py-2 bg-transparent text-background border border-background placeholder:text-background placeholder:opacity-80 placeholder:text-xs focus:outline-none focus:ring-2 focus:ring-background focus:border-background"
          />
        </div>
        
        {/* Navigation */}
        <nav className="space-y-2">
        {filteredNavigation.map((item) => (
          <div key={item.href}>
            {item.items ? (
              // Dropdown item
              <div>
                <button
                  onClick={() => toggleExpanded(item.title)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-sm font-medium border cursor-pointer ${
                    pathname === item.href
                      ? 'bg-background text-foreground border-background'
                      : 'text-background border-transparent hover:border-background'
                  }`}
                >
                  <div className="flex items-center gap-2">
                    {item.icon}
                    {item.title}
                  </div>
                  {isExpanded(item.title) ? 
                    <ChevronDown size={14} /> : 
                    <ChevronRight size={14} />
                  }
                </button>
                
                {isExpanded(item.title) && (
                  <div className="ml-4 mt-1 space-y-1">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem.href}
                        href={subItem.href}
                        className={`block px-3 py-1 text-sm border cursor-pointer ${
                          pathname === subItem.href
                            ? 'bg-background text-foreground border-background'
                            : 'text-background border-transparent hover:border-background'
                        }`}
                      >
                        {subItem.title}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ) : (
              // Regular item
              <Link
                href={item.href}
                className={`flex items-center gap-2 px-3 py-2 text-sm font-medium border cursor-pointer ${
                  pathname === item.href
                    ? 'bg-background text-foreground border-background'
                    : 'text-background border-transparent hover:border-background'
                }`}
              >
                {item.icon}
                {item.title}
              </Link>
            )}
          </div>
        ))}
        </nav>
      </div>
    </aside>
  );
}

interface DocLayoutProps {
  children: React.ReactNode;
}

export function DocLayout({ children }: DocLayoutProps) {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Generate breadcrumbs based on current path
  const generateBreadcrumbs = () => {
    const pathSegments = pathname.split('/').filter(Boolean);
    const breadcrumbs: Array<{label: string; href?: string}> = [{ label: 'Home', href: '/' }];
    
    pathSegments.forEach((segment, index) => {
      const href = '/' + pathSegments.slice(0, index + 1).join('/');
      const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace('-', ' ');
      const isLast = index === pathSegments.length - 1;
      breadcrumbs.push({ label, href: isLast ? undefined : href });
    });

    return breadcrumbs;
  };

  return (
    <div className="min-h-screen">
      {/* Mobile overlay */}
      {isSidebarOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden" 
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Sidebar - adjusted for global navbar */}
      <Sidebar 
        navigation={navigation} 
        pathname={pathname} 
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />

      {/* Main Content - adjusted for global navbar */}
      <main className="lg:ml-64 pt-4">
        <div className="max-w-4xl mx-auto p-8">
          {/* Mobile menu button for DocLayout pages */}
          <div className="lg:hidden mb-4">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsSidebarOpen(!isSidebarOpen)}
              className="flex items-center gap-2 text-foreground hover:bg-foreground hover:text-background"
            >
              <Menu size={16} />
              <span>Menu</span>
            </Button>
          </div>
          
          <Breadcrumb items={generateBreadcrumbs()} className="mb-6" />
          {children}
        </div>
      </main>
    </div>
  );
}
