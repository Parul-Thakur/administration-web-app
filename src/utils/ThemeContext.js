// ThemeContext.js
import { createTheme } from '@mui/material';
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext();
const breakpoints = {
  values: {
    xs: 0,
    sm: 600,
    md: 1024,
    lg: 1400,
    xl: 1950,
    xlg: 2300,
  },
};

// Define your theme with breakpoints and other configurations
const theme1 = createTheme({
  typography: {
    h4: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 500,
      fontSize: '32px',
      color: 'var(--text-head)',
    },
  },
  breakpoints,
});

export const ThemeProvider = ({ children }) => {
  // Initialize theme from localStorage if available, else default to 'light'
  const [theme, setTheme] = useState(localStorage.getItem('appTheme') || 'light');

  // When theme changes, save it to localStorage
  useEffect(() => {
    localStorage.setItem('appTheme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, theme1, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook to use the theme context
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
