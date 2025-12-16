import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const loc = useLocation();

  return (
    <header className={`navbar ${open ? 'open' : ''}`}>
      <div className="nav-inner">
        <div className="brand">
          <Link to="/">SIVAKUMAR</Link>
        </div>

        <nav className="nav-links">
          <Link className={loc.pathname === '/' ? 'active' : ''} to="/">Home</Link>
          <Link className={loc.pathname === '/about' ? 'active' : ''} to="/about">About</Link>
          <Link className={loc.pathname === '/education' ? 'active' : ''} to="/education">Education</Link>
          <Link className={loc.pathname === '/skills' ? 'active' : ''} to="/skills">Skills</Link>
          <Link className={loc.pathname === '/my-work' ? 'active' : ''} to="/my-work">My work</Link>
          <Link className={loc.pathname === '/youtube' ? 'active' : ''} to="/youtube">YouTube</Link>
          <Link className={loc.pathname === '/content' ? 'active' : ''} to="/content">Content</Link>
          <Link className={loc.pathname === '/service' ? 'active' : ''} to="/service">Service</Link>
        </nav>

        <button className="nav-toggle" onClick={() => setOpen(v => !v)} aria-label="Toggle navigation">
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
