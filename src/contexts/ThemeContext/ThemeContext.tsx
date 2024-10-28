import { createContext, useContext, useState, ReactNode } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import { themeDark } from "../../ui-library/themes/themeDark";
import { themeLight } from "../../ui-library/themes/themeLight";

interface ThemeContextProps {
  isDarkTheme: boolean;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  const [isDarkTheme, setIsDarkTheme] = useState(false);

  const toggleTheme = () => {
    setIsDarkTheme((prev: any) => !prev);
  };

  return (
    <ThemeContext.Provider value={{ isDarkTheme, toggleTheme }}>
      <ChakraProvider theme={isDarkTheme ? themeDark : themeLight}>
        {children}
      </ChakraProvider>
    </ThemeContext.Provider>
  );
};
