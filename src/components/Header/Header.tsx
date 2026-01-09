import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="header">
        <div className="logo">RYZE</div>

        <nav className="nav desktop-nav">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/features">Features</NavLink>
          <NavLink to="/pricing">Pricing</NavLink>
          <NavLink to="/case-studies">Case Studies</NavLink>
          <NavLink to="/faq">FAQ</NavLink>
        </nav>


        <button
          className="menu-btn"
          aria-label="Open menu"
          onClick={() => setOpen(true)}
        >
          ☰
        </button>
      </header>

      <div className={`sidebar ${open ? "open" : ""}`}>
        <button
          className="close-btn"
          aria-label="Close menu"
          onClick={() => setOpen(false)}
        >
          ×
        </button>

        <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/features" onClick={() => setOpen(false)}>Features</NavLink>
        <NavLink to="/pricing" onClick={() => setOpen(false)}>Pricing</NavLink>
        <NavLink to="/case-studies" onClick={() => setOpen(false)}>Case Studies</NavLink>
        <NavLink to="/faq" onClick={() => setOpen(false)}>FAQ</NavLink>
        
        <button className="primary-btn sidebar-cta">
          Book a Demo
        </button>
      </div>

      {open && <div className="overlay" onClick={() => setOpen(false)} />}
    </>
  );
}

