// ThemeContext.js
import { createTheme } from '@mui/material';
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();
const breakpoints = {
  values: {
    xs: 0,    
    sm: 600,  
    md: 1024,  
    lg: 1400, 
    xl: 1950, 
    xlg: 2200, 
  },
};
const theme1 = createTheme({
  typography: {
    h4: {
      fontFamily: 'Roboto, Arial, sans-serif',
      fontWeight: 500,
      fontSize: '32px', // Set the font size to 32px
      color: 'var(--text-head)', // Use CSS variable for color if needed
    },
  },
  breakpoints,
})
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light'); // Default theme is 'light'

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme,theme1, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
