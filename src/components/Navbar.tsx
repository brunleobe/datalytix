import { Menu, X } from 'lucide-react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import logoSrc from '../assets/logo.png';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'About', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    setIsMenuOpen(false);

    if (location.pathname === path) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  return (
    <nav
      className="w-full fixed top-0 left-0 z-50 transition-all duration-300"
      style={{
        background: scrolled ? '#ffffff' : 'transparent',
        backdropFilter: scrolled ? 'none' : 'none',
        borderBottom: scrolled ? '1px solid rgba(0,0,0,0.08)' : 'none',
        boxShadow: scrolled ? '0 2px 16px rgba(0,0,0,0.08)' : 'none',
      }}
    >
      <div className="container mx-auto px-6 flex items-center justify-between h-20">
        {/* Logo */}
        <Link to="/" onClick={(e) => handleNavClick(e, '/')} className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <img src={logoSrc} alt="Datalytix Logo" className="h-8 w-auto object-contain" />
          <span className={`font-semibold text-base tracking-wide transition-colors duration-300 ${scrolled ? 'text-[#05120a]' : 'text-white'}`}>Datalytix</span>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/'}
              onClick={(e) => handleNavClick(e, link.path)}
              style={{
                fontFamily: 'var(--f-display, "Space Grotesk", system-ui, sans-serif)',
                fontWeight: 500,
                fontSize: '.98rem',
                padding: '.5rem .9rem',
                borderRadius: '100px',
                position: 'relative',
                transition: 'color .3s, background .3s',
              }}
              className={({ isActive }) => {
                if (scrolled) {
                  return `transition-all duration-300 relative group ${isActive ? 'text-[#16a34a] hover:bg-black/5' : 'text-[#05120a]/70 hover:text-[#05120a] hover:bg-black/5'
                    }`;
                }
                return `transition-all duration-300 relative group ${isActive ? 'text-[#4ade80] hover:bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`;
              }}
            >
              {({ isActive }) => {
                return (
                  <>
                    {link.name}
                    {isActive && (
                      <span className={`absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full ${scrolled ? 'bg-[#16a34a]' : 'bg-[#4ade80]'}`} />
                    )}
                  </>
                );
              }}
            </NavLink>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <NavLink
            to="/contact"
            onClick={(e) => handleNavClick(e, '/contact')}
            className="hidden lg:inline-flex items-center cursor-pointer relative overflow-hidden hover:scale-105 active:scale-95"
            style={{
              fontFamily: 'var(--f-display, "Space Grotesk", system-ui, sans-serif)',
              fontWeight: 500,
              fontSize: '1rem',
              gap: '.6em',
              padding: '.95em 1.6em',
              borderRadius: '100px',
              border: '1px solid transparent',
              transition: 'transform .4s ease, background .4s ease, color .4s ease, box-shadow .4s ease',
              willChange: 'transform',
              backgroundColor: '#44de7f',
              color: '#04070e',
              boxShadow: '0 10px 30px -12px oklch(0.80 0.185 152 / .7)',
            }}
          >
            Book a consultation <span style={{ lineHeight: 1 }}>→</span>
          </NavLink>

          <button
            className={`lg:hidden transition-colors duration-300 ${scrolled ? 'text-[#05120a]/70 hover:text-[#05120a]' : 'text-white/80 hover:text-white'}`}
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isMenuOpen && (
        <div
          className="lg:hidden absolute w-full py-4 px-6 flex flex-col gap-4"
          style={{ background: 'rgba(5, 18, 10, 0.98)', borderBottom: '1px solid rgba(70,181,202,0.12)' }}
        >
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/'}
              onClick={(e) => handleNavClick(e, link.path)}
              className={({ isActive }) => {
                return `text-base font-medium transition-all duration-200 px-4 py-2 rounded-xl ${isActive ? 'text-[#4ade80] hover:bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`;
              }}
            >
              {link.name}
            </NavLink>
          ))}
          <NavLink
            to="/contact"
            onClick={(e) => handleNavClick(e, '/contact')}
            className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 active:scale-95"
            style={{
              backgroundColor: '#3cd882',
              color: '#05120a',
              boxShadow: '0 0 15px rgba(60, 216, 130, 0.4)',
            }}
          >
            Book a consultation →
          </NavLink>
        </div>
      )}
    </nav>
  );
}
