import { Route, Routes, Navigate } from "react-router-dom";
import { Counter, Dashboard, Navbar } from './components';
import { ThemeProvider } from "./contexts/ThemeContext/ThemeContext";

const App = () => {
  return (
    <ThemeProvider>
      <Navbar />
      <Routes>
        <Route path="/" element={<Navigate to="/dashboard" />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/counter" element={<Counter />} />
      </Routes>
    </ThemeProvider>
  );
};

export default App;
