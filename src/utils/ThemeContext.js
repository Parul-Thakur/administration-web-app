// ThemeContext.js
import { createTheme } from '@mui/material';
import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();
const breakpoints = {
  values: {
    xs: 0,    // Extra small devices (phones, 0px and up)
    sm: 600,  // Small devices (tablets, 600px and up)
    md: 1024,  // Medium devices (small desktops, 900px and up)
    lg: 1400, // Large devices (desktops, 1200px and up)
    xl: 1920, // Extra large devices (large desktops, 1536px and up)
    xlg: 2200, // Custom breakpoint (extra large desktops, 1800px and up)
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
