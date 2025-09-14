import { Link } from "react-router-dom";

function Navbar() {
  const navStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    gap: "20px",
    padding: "15px",
    backgroundColor: "#2c3e50",
  };

  const linkStyle = {
    color: "#ecf0f1",
    textDecoration: "none",
    fontWeight: "bold",
    fontSize: "18px",
    bottomBorder: "2px solid transparent",
    paddingBottom: "5px",
    transition: "border-bottom 0.3s",
    hover: { borderBottom: "2px solid black" },

  };

  return (
    <nav style={navStyle}>
      <Link to="/" style={linkStyle}>Home</Link>
      <Link to="/about" style={linkStyle}>About</Link>
      <Link to="/services" style={linkStyle}>Services</Link>
      <Link to="/contact" style={linkStyle}>Contact</Link>
    </nav>
  );
}

export default Navbar;
