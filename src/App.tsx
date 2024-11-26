import { Route, Routes, useNavigate } from "react-router-dom";
import { Counter, Dashboard, Footer, Navbar } from "./components";
import { ThemeProvider } from "./contexts/ThemeContext/ThemeContext";
import { Flex } from "@chakra-ui/react";
import { useEffect } from "react";

const App = () => {
  return (
    <ThemeProvider>
      <Flex flexDir="column" justifyContent="space-between" h="100%">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/dashboard" element={<DashboardRedirect />} />
          <Route path="/counter" element={<Counter />} />
        </Routes>
        <Footer />
      </Flex>
    </ThemeProvider>
  );
};

const DashboardRedirect = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/", { replace: true });
  }, [navigate]);

  return null;
};

export default App;
