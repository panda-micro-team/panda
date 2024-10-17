import React from "react";
import {Dashboard} from './components/Dashboard/Dashboard.tsx'
import { ChakraProvider } from '@chakra-ui/react'

const App = () => {
  return (
    <ChakraProvider>
      <Dashboard />
    </ChakraProvider>
  );
};

export default App;
