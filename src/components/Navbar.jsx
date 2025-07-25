import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <nav className="modern-navbar">
      <div className="navbar-logo" onClick={() => navigate("/")}>FACUNDO SOLIS</div>
      <button className="navbar-hamburger" onClick={() => setOpen(!open)} aria-label="Abrir menú">
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>
      <ul className={`navbar-links${open ? " open" : ""}`}>
        <li><button onClick={() => navigate('/skills')}>Skills</button></li>
        <li><button onClick={() => navigate('/projects')}>Projects</button></li>
        <li><button onClick={() => navigate('/experience')}>Experience</button></li>
        <li><button onClick={() => navigate('/contact')}>Contact</button></li>
      </ul>
    </nav>
  );
}

export default Navbar;
