import React, { useState, useEffect } from 'react';
import { Moon, Sun } from 'lucide-react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  return (
    <div className="fixed bottom-8 left-8 z-50">
      <button
        onClick={toggleTheme}
        className="bg-white dark:bg-slate-800 text-gray-800 dark:text-yellow-400 p-3 rounded-full shadow-lg border border-gray-200 dark:border-gray-700 hover:shadow-xl transition-all duration-300 transform hover:scale-110 focus:outline-none"
        aria-label="Toggle Dark Mode"
      >
        {theme === 'dark' ? (
          <Sun size={24} className="animate-spin-slow" />
        ) : (
          <Moon size={24} />
        )}
      </button>
    </div>
  );
};

export default ThemeToggle;