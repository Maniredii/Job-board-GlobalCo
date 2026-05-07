'use client';

import { createContext, useContext, useState, useCallback, useSyncExternalStore, useEffect } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export function useTheme() {
  return useContext(ThemeContext);
}

const emptySubscribe = () => () => {};

export function ThemeProvider({ children }) {
  const mounted = useSyncExternalStore(emptySubscribe, () => true, () => false);

  const [theme, setTheme] = useState('light');
  const [hydrated, setHydrated] = useState(false);

  // Read from localStorage only once after mount — using a "did hydrate" ref pattern
  if (mounted && !hydrated) {
    const saved = localStorage.getItem('jobsphere-theme');
    const resolved = saved || (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    if (resolved !== theme) {
      setTheme(resolved);
    }
    setHydrated(true);
  }

  useEffect(() => {
    if (mounted) {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme, mounted]);

  const toggleTheme = useCallback(() => {
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      localStorage.setItem('jobsphere-theme', newTheme);
      document.documentElement.setAttribute('data-theme', newTheme);
      return newTheme;
    });
  }, []);

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}
