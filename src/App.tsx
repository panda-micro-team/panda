import { Route, Routes, Navigate } from "react-router-dom";
import { ChakraProvider } from '@chakra-ui/react';
import { theme } from "./ui-library";
import { Counter, Dashboard, Navbar } from './components'

const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <Navbar />
      <Routes>
      <Route path="/" element={<Navigate to="/dashboard" />} />
         <Route path="/dashboard" element={<Dashboard />} />
         <Route path="/counter" element={<Counter />} />
       </Routes>
    </ChakraProvider>
  );
};

export default App;
