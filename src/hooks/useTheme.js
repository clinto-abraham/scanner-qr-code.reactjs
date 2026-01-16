import { useEffect, useState } from 'react';
import { THEMES, STORAGE_KEYS } from '../constants/theme.constants';

export function useTheme() {
  const [theme, setTheme] = useState(THEMES.LIGHT);

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEYS.THEME);
    if (stored) setTheme(stored);
  }, []);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(STORAGE_KEYS.THEME, theme);
  }, [theme]);

  const toggleTheme = () =>
    setTheme((prev) =>
      prev === THEMES.DARK ? THEMES.LIGHT : THEMES.DARK
    );

  return { theme, toggleTheme };
}
