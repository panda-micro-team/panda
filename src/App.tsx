import { Route, Routes, Navigate } from "react-router-dom";
import { Counter, Dashboard, Footer, Navbar } from "./components";
import { ThemeProvider } from "./contexts/ThemeContext/ThemeContext";
import { Flex } from "@chakra-ui/react";

const App = () => {
  return (
    <ThemeProvider>
      <Flex flexDir="column" justifyContent="space-between" h="100%">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
        <Footer />
      </Flex>
    </ThemeProvider>
  );
};

export default App;
