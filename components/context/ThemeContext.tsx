'use client';

import { createContext, useContext } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
import type { ThemeProviderProps } from 'next-themes';

// Create theReactUI theme context
const TheReactUIContext = createContext<{}>({});

export const useTheReactUI = () => {
  const context = useContext(TheReactUIContext);
  if (!context) {
    throw new Error('useTheReactUI must be used within a TheReactUIProvider');
  }
  return context;
};

// TheReactUI Provider that combines next-themes with our UI context
export function TheReactUIProvider({ children, ...props }: ThemeProviderProps) {
  return (
    <NextThemeProvider
      attribute="class"
      defaultTheme="light"
      enableSystem
      disableTransitionOnChange
      {...props}
    >
      <TheReactUIContext.Provider value={{}}>
        {children}
      </TheReactUIContext.Provider>
    </NextThemeProvider>
  );
}

export { useTheme } from 'next-themes';
