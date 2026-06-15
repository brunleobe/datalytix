import { Menu, X } from 'lucide-react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

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
    <nav className="w-full sticky top-0 z-50" style={{ background: 'rgba(5, 18, 10, 0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(70,181,202,0.08)' }}>
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <Link to="/" onClick={(e) => handleNavClick(e, '/')} className="flex items-center gap-2 hover:opacity-90 transition-opacity">
          <img src="/logo.png" alt="Datalytix Logo" className="h-9 w-auto object-contain brightness-0 invert" />
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-4">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/'}
              onClick={(e) => handleNavClick(e, link.path)}
              className={({ isActive }) => {
                return `text-sm font-medium transition-all duration-300 px-4 py-2 rounded-full relative group ${
                  isActive ? 'text-[#4ade80] hover:bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10'
                }`;
              }}
            >
              {({ isActive }) => {
                return (
                  <>
                    {link.name}
                    {isActive && (
                      <span className="absolute bottom-1.5 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#4ade80]" />
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
            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              backgroundColor: '#3cd882',
              color: '#05120a',
              boxShadow: '0 0 20px rgba(60, 216, 130, 0.45)',
            }}
          >
            Book a consultation <span className="ml-1 text-base leading-none">→</span>
          </NavLink>

          <button
            className="lg:hidden text-white/80 hover:text-white"
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
                return `text-base font-medium transition-all duration-200 px-4 py-2 rounded-xl ${
                  isActive ? 'text-[#4ade80] hover:bg-white/10' : 'text-white/80 hover:text-white hover:bg-white/10'
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
