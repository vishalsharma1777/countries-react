import { createContext, useState } from 'react';
export const ThemeContext = createContext();

function ContextProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);
  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };
  return (
    <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
      <div className={darkMode ? 'dark' : 'light'}>
      {children}
      </div>
    </ThemeContext.Provider>
  );
}

export default ContextProvider;
