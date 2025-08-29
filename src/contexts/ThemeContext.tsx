'use client'

import { createContext, useContext, useState } from "react";

interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const ThemeProvider = ({ children }: { children: React.ReactNode }) => {
  const [ theme, setTheme ] = useState<string>('');

  return(
    <ThemeContext.Provider value={{ theme, setTheme }}>
      { children }
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if(!context) throw new Error('useTheme must be used within a UserProvider');
  return context;
}
