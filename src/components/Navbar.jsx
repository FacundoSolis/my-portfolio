import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  return (
    <nav className="modern-navbar">
      <div className="navbar-logo" onClick={() => navigate("/")}>FACUNDO SOLIS</div>
      <div style={{ flex: 1 }}></div>
      <button className="navbar-hamburger" onClick={() => setOpen(!open)} aria-label="Abrir menú">
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
        <span className="hamburger-bar"></span>
      </button>
      <ul className={`navbar-links${open ? " open" : ""}`}>
        <li>
          <button className="navbar-modern-btn" onClick={() => navigate('/skills')}>
            <span className="navbar-btn-icon" role="img" aria-label="Skills">🛠️</span>
            <span>Skills</span>
          </button>
        </li>
        <li>
          <button className="navbar-modern-btn" onClick={() => navigate('/projects')}>
            <span className="navbar-btn-icon" role="img" aria-label="Projects">📁</span>
            <span>Projects</span>
          </button>
        </li>
        <li>
          <button className="navbar-modern-btn" onClick={() => navigate('/experience')}>
            <span className="navbar-btn-icon" role="img" aria-label="Experience">💼</span>
            <span>Experience</span>
          </button>
        </li>
        <li>
          <button className="navbar-modern-btn" onClick={() => navigate('/contact')}>
            <span className="navbar-btn-icon" role="img" aria-label="Contact">✉️</span>
            <span>Contact</span>
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
