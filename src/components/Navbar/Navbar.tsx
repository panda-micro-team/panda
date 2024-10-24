import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <nav style={{ backgroundColor: "#007acc", padding: "16px", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/counter">Counter</Link>
    </nav>
  );
};
