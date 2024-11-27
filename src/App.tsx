import { Route, Routes, Navigate } from "react-router-dom";
import { Counter, Dashboard, Footer, Navbar } from "./components";
import { ThemeProvider } from "./contexts/ThemeContext/ThemeContext";
import { Flex } from "@chakra-ui/react";
import CountriesList from "./CountriesList";
import FootballMatches from "./FootballMatches";

const App = () => {
  return (
    <ThemeProvider>
      <Flex flexDir="column" justifyContent="space-between" h="100%">
        <Navbar />
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/countries" element={<CountriesList />} />
          <Route path="*" element={<Navigate to="/" />} />
          <Route path="/matches" element={<FootballMatches />} />;
        </Routes>
        <Footer />
      </Flex>
    </ThemeProvider>
  );
};

export default App;
