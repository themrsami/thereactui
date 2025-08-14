'use client';
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
export function Breadcrumb({ items, className = '' }) {
    return (_jsx("nav", { className: `flex items-center space-x-1 text-sm ${className}`, "aria-label": "Breadcrumb", children: items.map((item, index) => (_jsxs("div", { className: "flex items-center", children: [index > 0 && _jsx(ChevronRight, { size: 14, className: "mx-1 opacity-50" }), item.href && index < items.length - 1 ? (_jsx(Link, { href: item.href, className: "hover:underline opacity-70 hover:opacity-100 transition-opacity cursor-pointer", children: item.label })) : (_jsx("span", { className: index === items.length - 1 ? 'font-medium' : 'opacity-70', children: item.label }))] }, index))) }));
}
//# sourceMappingURL=Breadcrumb.js.map