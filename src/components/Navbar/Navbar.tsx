import { Flex, FormControl, FormLabel, Switch } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useTheme } from "../../contexts";

export const Navbar = () => {
  const { isDarkTheme, toggleTheme } = useTheme();

  return (
    <Flex
      as="header"
      bg={isDarkTheme ? "brand.200" : "brand.500"}
      justifyContent="space-between"
      p={4}
      borderRadius="md"
    >
      <Flex as="nav">
        <Link to="/dashboard">Dashboard</Link>
        <Link to="/counter">Counter</Link>
        <Link to="/countries">Countries</Link>
        <Link to="/matches">Football Matches</Link>;
        <Link to="/counter">News</Link>
      </Flex>
      <Flex>
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
      </Flex>
    </Flex>
  );
};
