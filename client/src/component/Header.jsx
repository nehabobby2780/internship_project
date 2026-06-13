import React, { useState } from "react";
import { FaUsers, FaBars, FaTimes } from "react-icons/fa";
import "../css/Header.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo">
        <FaUsers className="logo-icon" />
        <h2>EMS</h2>
      </div>

      <nav className={menuOpen ? "nav active" : "nav"}>
        <a href="/">Home</a>
        <a href="/about">About</a>
        <a href="/register">Employee Register</a>
        <a href="/login">Login</a>
      </nav>

      <div
        className="menu-icon"
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? <FaTimes /> : <FaBars />}
      </div>
    </header>
  );
}

export default Header;