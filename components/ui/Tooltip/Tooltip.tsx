'use client';

import { useState, useRef, useEffect, cloneElement, isValidElement } from 'react';
import { createPortal } from 'react-dom';
import { TooltipProps } from './Tooltip.types';

const Tooltip = ({
  children,
  content,
  placement = 'top',
  delay = 200,
  className = '',
  disabled = false,
  arrow = true,
  ...props
}: TooltipProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isPositioned, setIsPositioned] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const triggerRef = useRef<HTMLElement>(null);
  const tooltipRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const calculatePosition = () => {
    if (!triggerRef.current || !tooltipRef.current) return;

    const triggerRect = triggerRef.current.getBoundingClientRect();
    const tooltipRect = tooltipRef.current.getBoundingClientRect();
    
    let x = 0;
    let y = 0;

    const offset = 8;

    switch (placement) {
      case 'top':
        x = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
        y = triggerRect.top - tooltipRect.height - offset;
        break;
      case 'bottom':
        x = triggerRect.left + triggerRect.width / 2 - tooltipRect.width / 2;
        y = triggerRect.bottom + offset;
        break;
      case 'left':
        x = triggerRect.left - tooltipRect.width - offset;
        y = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
        break;
      case 'right':
        x = triggerRect.right + offset;
        y = triggerRect.top + triggerRect.height / 2 - tooltipRect.height / 2;
        break;
    }

    // Keep within viewport
    const padding = 8;
    x = Math.max(padding, Math.min(x, window.innerWidth - tooltipRect.width - padding));
    y = Math.max(padding, Math.min(y, window.innerHeight - tooltipRect.height - padding));

    setPosition({ x, y });
    setIsPositioned(true);
  };

  const showTooltip = () => {
    if (disabled) return;
    
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    
    timeoutRef.current = setTimeout(() => {
      setIsVisible(true);
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
    setIsPositioned(false);
  };

  useEffect(() => {
    if (isVisible) {
      // Use requestAnimationFrame for better timing
      requestAnimationFrame(() => {
        calculatePosition();
      });
    }
  }, [isVisible, placement]);

  useEffect(() => {
    if (isVisible) {
      const handleResize = () => calculatePosition();
      const handleScroll = () => calculatePosition();

      window.addEventListener('resize', handleResize);
      window.addEventListener('scroll', handleScroll, true);

      return () => {
        window.removeEventListener('resize', handleResize);
        window.removeEventListener('scroll', handleScroll, true);
      };
    }
  }, [isVisible]);

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const triggerElement = isValidElement(children)
    ? cloneElement(children as any, {
        ref: (node: HTMLElement) => {
          triggerRef.current = node;
          const originalRef = (children as any).ref;
          if (typeof originalRef === 'function') {
            originalRef(node);
          } else if (originalRef) {
            originalRef.current = node;
          }
        },
        onMouseEnter: (e: MouseEvent) => {
          showTooltip();
          const originalOnMouseEnter = (children as any).props?.onMouseEnter;
          if (originalOnMouseEnter) {
            originalOnMouseEnter(e);
          }
        },
        onMouseLeave: (e: MouseEvent) => {
          hideTooltip();
          const originalOnMouseLeave = (children as any).props?.onMouseLeave;
          if (originalOnMouseLeave) {
            originalOnMouseLeave(e);
          }
        },
        onFocus: (e: FocusEvent) => {
          showTooltip();
          const originalOnFocus = (children as any).props?.onFocus;
          if (originalOnFocus) {
            originalOnFocus(e);
          }
        },
        onBlur: (e: FocusEvent) => {
          hideTooltip();
          const originalOnBlur = (children as any).props?.onBlur;
          if (originalOnBlur) {
            originalOnBlur(e);
          }
        },
      })
    : children;

  if (!isVisible || typeof window === 'undefined') {
    return <>{triggerElement}</>;
  }

  return (
    <>
      {triggerElement}
      {createPortal(
        <div
          ref={tooltipRef}
          className={`fixed z-50 px-2 py-1 text-sm bg-foreground text-background border border-current pointer-events-none ${className}`}
          style={{
            left: isPositioned ? position.x : -9999,
            top: isPositioned ? position.y : -9999,
            whiteSpace: 'nowrap',
            visibility: isPositioned ? 'visible' : 'hidden',
          }}
          {...props}
        >
          {content}
        </div>,
        document.body
      )}
    </>
  );
};

Tooltip.displayName = 'Tooltip';

export { Tooltip };
