'use client';

import React from 'react';
import type { ButtonGroupProps } from './ButtonGroup.types';

export function ButtonGroup({ 
  children, 
  orientation = 'horizontal',
  className = '' 
}: ButtonGroupProps) {
  const baseStyles = 'inline-flex';
  
  const orientationStyles = {
    horizontal: 'flex-row',
    vertical: 'flex-col',
  } as const;
  
  const combinedClassName = [
    baseStyles,
    orientationStyles[orientation as keyof typeof orientationStyles],
    className,
  ].join(' ');

  // Clone children and add border handling
  const processedChildren = React.Children.map(children, (child, index) => {
    if (!React.isValidElement(child)) return child;
    
    const isFirst = index === 0;
    const isLast = index === React.Children.count(children) - 1;
    
    let additionalClasses = '';
    
    if (orientation === 'horizontal') {
      if (!isFirst) additionalClasses += ' -ml-px';
    } else {
      if (!isFirst) additionalClasses += ' -mt-px';
    }
    
    const childProps = child.props as any;
    
    return React.cloneElement(child, {
      ...childProps,
      className: `${childProps.className || ''} ${additionalClasses}`.trim(),
    });
  });

  return (
    <div className={combinedClassName} role="group">
      {processedChildren}
    </div>
  );
}
