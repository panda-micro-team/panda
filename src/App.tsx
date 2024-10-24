import React from "react";
import { Dashboard } from './components/Dashboard/Dashboard'
import { ChakraProvider } from '@chakra-ui/react'
import { Counter } from "./components/Counter";
import theme from "./ui-library/theme";

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Dashboard />
      <Counter />
    </ChakraProvider>
  );
};

export default App;
