'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useTheme } from '../context/ThemeContext';
import { Button } from '../ui/Button';
import { Breadcrumb } from '../ui/Breadcrumb';
import { Sun, Moon, Monitor, ChevronDown, ChevronRight, Book, Download, Layers, Search, Menu, X } from 'lucide-react';
const navigation = [
    {
        title: 'Getting Started',
        href: '/docs',
        icon: _jsx(Book, { size: 16 }),
    },
    {
        title: 'Installation',
        href: '/installation',
        icon: _jsx(Download, { size: 16 }),
    },
    {
        title: 'Components',
        href: '/components',
        icon: _jsx(Layers, { size: 16 }),
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
function ThemeDropdown({ theme, setTheme }) {
    const [isOpen, setIsOpen] = useState(false);
    const themes = [
        { value: 'light', label: 'Light', icon: _jsx(Sun, { size: 14 }) },
        { value: 'dark', label: 'Dark', icon: _jsx(Moon, { size: 14 }) },
        { value: 'system', label: 'System', icon: _jsx(Monitor, { size: 14 }) },
    ];
    const currentTheme = themes.find(t => t.value === theme) || themes[0];
    return (_jsxs("div", { className: "relative", children: [_jsxs(Button, { variant: "ghost", size: "sm", onClick: () => setIsOpen(!isOpen), className: "navbar-theme-button relative flex items-center gap-2 cursor-pointer", children: [currentTheme.icon, _jsx(ChevronDown, { size: 12 })] }), isOpen && (_jsx("div", { className: "absolute right-0 mt-1 w-28 border border-background bg-background z-50 shadow-sm", children: themes.map((themeOption) => (_jsxs("button", { className: "w-full px-3 py-2 text-left text-sm hover:bg-foreground hover:text-background flex items-center gap-2 bg-background text-foreground border-none cursor-pointer", onClick: () => {
                        setTheme(themeOption.value);
                        setIsOpen(false);
                    }, children: [themeOption.icon, themeOption.label] }, themeOption.value))) })), isOpen && (_jsx("div", { className: "fixed inset-0 z-40", onClick: () => setIsOpen(false) }))] }));
}
function Sidebar({ navigation, pathname, isOpen, onClose }) {
    const [expandedItems, setExpandedItems] = useState(['Components']);
    const [searchQuery, setSearchQuery] = useState('');
    const toggleExpanded = (title) => {
        setExpandedItems(prev => prev.includes(title)
            ? prev.filter(item => item !== title)
            : [...prev, title]);
    };
    const isExpanded = (title) => expandedItems.includes(title);
    // Filter navigation based on search query
    const filteredNavigation = navigation.filter(item => {
        if (!searchQuery)
            return true;
        const query = searchQuery.toLowerCase();
        // Check if main item matches
        if (item.title.toLowerCase().includes(query))
            return true;
        // Check if any sub-item matches
        if (item.items) {
            return item.items.some(subItem => subItem.title.toLowerCase().includes(query));
        }
        return false;
    });
    return (_jsx("aside", { className: `fixed left-0 top-16 w-64 h-[calc(100vh-4rem)] border-r border-current overflow-y-auto bg-foreground z-40 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'} lg:translate-x-0`, children: _jsxs("div", { className: "p-4", children: [_jsx("div", { className: "flex justify-end lg:hidden mb-4", children: _jsx(Button, { variant: "ghost", size: "sm", onClick: onClose, className: "text-background hover:bg-background hover:text-foreground", children: _jsx(X, { size: 16 }) }) }), _jsxs("div", { className: "relative mb-4", children: [_jsx(Search, { size: 16, className: "absolute left-3 top-1/2 transform -translate-y-1/2 text-background opacity-70" }), _jsx("input", { type: "text", placeholder: "Search components...", value: searchQuery, onChange: (e) => setSearchQuery(e.target.value), className: "w-full pl-10 pr-3 py-2 bg-transparent text-background border border-background placeholder:text-background placeholder:opacity-80 placeholder:text-xs focus:outline-none focus:ring-2 focus:ring-background focus:border-background" })] }), _jsx("nav", { className: "space-y-2", children: filteredNavigation.map((item) => (_jsx("div", { children: item.items ? (
                        // Dropdown item
                        _jsxs("div", { children: [_jsxs("button", { onClick: () => toggleExpanded(item.title), className: `w-full flex items-center justify-between px-3 py-2 text-sm font-medium border cursor-pointer ${pathname === item.href
                                        ? 'bg-background text-foreground border-background'
                                        : 'text-background border-transparent hover:border-background'}`, children: [_jsxs("div", { className: "flex items-center gap-2", children: [item.icon, item.title] }), isExpanded(item.title) ?
                                            _jsx(ChevronDown, { size: 14 }) :
                                            _jsx(ChevronRight, { size: 14 })] }), isExpanded(item.title) && (_jsx("div", { className: "ml-4 mt-1 space-y-1", children: item.items.map((subItem) => (_jsx(Link, { href: subItem.href, className: `block px-3 py-1 text-sm border cursor-pointer ${pathname === subItem.href
                                            ? 'bg-background text-foreground border-background'
                                            : 'text-background border-transparent hover:border-background'}`, children: subItem.title }, subItem.href))) }))] })) : (
                        // Regular item
                        _jsxs(Link, { href: item.href, className: `flex items-center gap-2 px-3 py-2 text-sm font-medium border cursor-pointer ${pathname === item.href
                                ? 'bg-background text-foreground border-background'
                                : 'text-background border-transparent hover:border-background'}`, children: [item.icon, item.title] })) }, item.href))) })] }) }));
}
export function DocLayout({ children }) {
    const { theme, setTheme } = useTheme();
    const pathname = usePathname();
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    // Generate breadcrumbs based on current path
    const generateBreadcrumbs = () => {
        const pathSegments = pathname.split('/').filter(Boolean);
        const breadcrumbs = [{ label: 'Home', href: '/' }];
        pathSegments.forEach((segment, index) => {
            const href = '/' + pathSegments.slice(0, index + 1).join('/');
            const label = segment.charAt(0).toUpperCase() + segment.slice(1).replace('-', ' ');
            const isLast = index === pathSegments.length - 1;
            breadcrumbs.push({ label, href: isLast ? undefined : href });
        });
        return breadcrumbs;
    };
    return (_jsxs("div", { className: "min-h-screen", children: [_jsx("header", { className: "fixed top-0 left-0 right-0 h-16 border-b border-current bg-foreground z-50", children: _jsxs("div", { className: "flex items-center justify-between h-full px-6", children: [_jsxs("div", { className: "flex items-center gap-4", children: [_jsx(Button, { variant: "ghost", size: "sm", onClick: () => setIsSidebarOpen(!isSidebarOpen), className: "lg:hidden text-background hover:bg-background hover:text-foreground", children: _jsx(Menu, { size: 16 }) }), _jsx(Link, { href: "/", className: "text-xl font-bold text-background cursor-pointer", children: "theReactUI" })] }), _jsx(ThemeDropdown, { theme: theme, setTheme: setTheme })] }) }), isSidebarOpen && (_jsx("div", { className: "fixed inset-0 bg-black bg-opacity-50 z-30 lg:hidden", onClick: () => setIsSidebarOpen(false) })), _jsx(Sidebar, { navigation: navigation, pathname: pathname, isOpen: isSidebarOpen, onClose: () => setIsSidebarOpen(false) }), _jsx("main", { className: "lg:ml-64 pt-16", children: _jsxs("div", { className: "max-w-4xl mx-auto p-8", children: [_jsx(Breadcrumb, { items: generateBreadcrumbs(), className: "mb-6" }), children] }) })] }));
}
//# sourceMappingURL=DocLayout.js.map