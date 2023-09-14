import React from 'react';
import { useTheme } from '../Context/ThemeContext';

const ThemeToggle = () => {
  const { state, dispatch } = useTheme();

  const toggleTheme = () => {
    dispatch({ type: 'TOGGLE' });
  };

  return (
    <button onClick={toggleTheme}>
      Toggle {state.darkMode ? 'Light' : 'Dark'} Mode
    </button>
  );
};

export default ThemeToggle;