import { createContext, useContext, useState } from "react";
export function useTheme() {
  return useContext(ThemeContext);
}

export const ThemeContext = createContext();
export function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  return (
    <ThemeContext.Provider
      value={{
        theme,
        setTheme,
      }}
    >
      {children}
    </ThemeContext.Provider>
  );
}
