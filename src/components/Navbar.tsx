import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Menu, Moon, Sun, X } from 'lucide-react';

interface NavbarProps {
  theme: 'dark' | 'light';
  onToggleTheme: () => void;
}

const links = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Work', href: '/#work' },
  { label: 'GitHub', href: '/#github' },
];

export default function Navbar({ theme, onToggleTheme }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header">
      <nav className="nav-shell container" aria-label="Main navigation">
        <Link className="brand" to="/" onClick={() => setMenuOpen(false)} aria-label="Varma home">
          <span className="brand-mark">V<span>.</span></span>
          <span className="brand-name">VARMA<span className="brand-dot">/</span>DEV</span>
        </Link>
        <div className={`nav-links ${menuOpen ? 'is-open' : ''}`}>
          {links.map((link) => (
            <Link key={link.href} to={link.href} onClick={() => setMenuOpen(false)}>{link.label}</Link>
          ))}
          <Link to="/#contact" className="nav-contact" onClick={() => setMenuOpen(false)}>
            Let’s talk <ArrowUpRight size={14} />
          </Link>
        </div>
        <div className="nav-actions">
          <button className="theme-toggle icon-button" onClick={onToggleTheme} aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}>
            {theme === 'dark' ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button className="menu-toggle icon-button" onClick={() => setMenuOpen(!menuOpen)} aria-label={menuOpen ? 'Close menu' : 'Open menu'}>
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>
    </header>
  );
}
