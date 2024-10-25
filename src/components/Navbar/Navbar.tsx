import { FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts/ThemeContext/ThemeContext";

export const Navbar = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <>
      <FormControl display="flex" alignItems="center">
        <FormLabel htmlFor="theme-switch" mb="0">
          Dark Theme
        </FormLabel>
        <Switch
          id="theme-switch"
          isChecked={isDarkTheme}
          onChange={toggleTheme}
        />
      </FormControl>
      <nav
        style={{
          backgroundColor: isDarkTheme ? "lightgreen" : "#007acc",
          padding: "16px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/counter">Counter</Link>
      </nav>
    </>
  );
};
