// ThemeContext.js
import React, { createContext, useReducer, useContext } from 'react';

// Define the theme context
const ThemeContext = createContext();

// Initial theme state
const initialState = {
  theme: 'light',
};

// Theme reducer
const themeReducer = (state, action) => {
  switch (action.type) {
    case 'TOGGLE_THEME':
      return {
        ...state,
        theme: state.theme === 'light' ? 'dark' : 'light',
      };
    default:
      return state;
  }
};

// Theme provider
const ThemeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(themeReducer, initialState);

  return (
    <ThemeContext.Provider value={{ state, dispatch }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Custom hook for accessing the theme context
const useTheme = () => {
  return useContext(ThemeContext);
};

export { ThemeProvider, useTheme };