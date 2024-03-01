// ThemeContext.tsx
import React, { createContext, useState, useContext, ReactNode } from "react";

type Theme = {
  background: string;
  text: string;
};

type ThemeContextType = {
  theme: Theme;
  toggleTheme: () => void;
};

const defaultTheme: Theme = {
  background: "#ffffff",
  text: "#000000",
};

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [theme, setTheme] = useState<Theme>(defaultTheme);

  const toggleTheme = () => {
    setTheme((prevTheme) =>
      prevTheme === defaultTheme
        ? { background: "#000000", text: "#ffffff" }
        : defaultTheme
    );
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
