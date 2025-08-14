'use client';
import React from 'react';
export function ButtonGroup({ children, orientation = 'horizontal', className = '' }) {
    const baseStyles = 'inline-flex';
    const orientationStyles = {
        horizontal: 'flex-row',
        vertical: 'flex-col',
    };
    const combinedClassName = [
        baseStyles,
        orientationStyles[orientation],
        className,
    ].join(' ');
    // Clone children and add border handling
    const processedChildren = React.Children.map(children, (child, index) => {
        if (!React.isValidElement(child))
            return child;
        const isFirst = index === 0;
        const isLast = index === React.Children.count(children) - 1;
        let additionalClasses = '';
        if (orientation === 'horizontal') {
            if (!isFirst)
                additionalClasses += ' -ml-px';
        }
        else {
            if (!isFirst)
                additionalClasses += ' -mt-px';
        }
        const childProps = child.props;
        return React.cloneElement(child, Object.assign(Object.assign({}, childProps), { className: `${childProps.className || ''} ${additionalClasses}`.trim() }));
    });
    return (<div className={combinedClassName} role="group">
      {processedChildren}
    </div>);
}
//# sourceMappingURL=ButtonGroup.jsx.map