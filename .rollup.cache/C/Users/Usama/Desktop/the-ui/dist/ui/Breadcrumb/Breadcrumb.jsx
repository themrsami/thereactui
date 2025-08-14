'use client';
import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
export function Breadcrumb({ items, className = '' }) {
    return (<nav className={`flex items-center space-x-1 text-sm ${className}`} aria-label="Breadcrumb">
      {items.map((item, index) => (<div key={index} className="flex items-center">
          {index > 0 && <ChevronRight size={14} className="mx-1 opacity-50"/>}
          {item.href && index < items.length - 1 ? (<Link href={item.href} className="hover:underline opacity-70 hover:opacity-100 transition-opacity cursor-pointer">
              {item.label}
            </Link>) : (<span className={index === items.length - 1 ? 'font-medium' : 'opacity-70'}>
              {item.label}
            </span>)}
        </div>))}
    </nav>);
}
//# sourceMappingURL=Breadcrumb.jsx.map