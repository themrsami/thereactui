'use client';
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from 'react';
import { ThemeProvider as NextThemeProvider } from 'next-themes';
// Create theReactUI theme context
const TheReactUIContext = createContext({});
export const useTheReactUI = () => {
    const context = useContext(TheReactUIContext);
    if (!context) {
        throw new Error('useTheReactUI must be used within a TheReactUIProvider');
    }
    return context;
};
// TheReactUI Provider that combines next-themes with our UI context
export function TheReactUIProvider({ children, ...props }) {
    return (_jsx(NextThemeProvider, { attribute: "class", defaultTheme: "light", enableSystem: true, disableTransitionOnChange: true, ...props, children: _jsx(TheReactUIContext.Provider, { value: {}, children: children }) }));
}
export { useTheme } from 'next-themes';
//# sourceMappingURL=ThemeContext.js.map