import { Menu, X } from 'lucide-react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/#what-we-do' },
    { name: 'About', path: '/#who-we-are' },
    { name: 'Contact', path: '/contact-us#contact-form' },
  ];

  const handleNavClick = (e: React.MouseEvent, path: string, name: string) => {
    setIsMenuOpen(false);

    if (name === 'Home' && location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      navigate('/');
    }

    const isHashLink = path.includes('#');
    if (isHashLink) {
      e.preventDefault();
      const [targetPath, hash] = path.split('#');
      const isSamePage =
        location.pathname === targetPath ||
        (location.pathname === '/' && targetPath === '');

      if (isSamePage) {
        const element = document.getElementById(hash);
        element?.scrollIntoView({ behavior: 'smooth' });
        navigate(path);
      } else {
        navigate(path);
      }
    }
  };

  return (
    <nav className="w-full sticky top-0 z-50" style={{ background: 'rgba(5, 18, 10, 0.92)', backdropFilter: 'blur(12px)', borderBottom: '1px solid rgba(70,181,202,0.08)' }}>
      <div className="container mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <img src="/logo.png" alt="Datalytix Logo" className="h-9 w-auto object-contain brightness-0 invert" />
        </div>

        {/* Desktop Nav Links */}
        <div className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              end={link.path === '/'}
              onClick={(e) => handleNavClick(e, link.path, link.name)}
              className={({ isActive }) => {
                const isLinkActive = link.path.includes('#')
                  ? location.hash === `#${link.path.split('#')[1]}`
                  : isActive && (link.path !== '/' || !location.hash);

                return `text-sm font-medium transition-colors relative group ${
                  isLinkActive ? 'text-[#4ade80]' : 'text-white/80 hover:text-white'
                }`;
              }}
            >
              {({ isActive }) => {
                const isLinkActive = link.path.includes('#')
                  ? location.hash === `#${link.path.split('#')[1]}`
                  : isActive && (link.path !== '/' || !location.hash);
                return (
                  <>
                    {link.name}
                    {isLinkActive && (
                      <span className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-[#4ade80]" />
                    )}
                  </>
                );
              }}
            </NavLink>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="/contact-us#contact-form"
            onClick={(e) => handleNavClick(e, '/contact-us#contact-form', 'Contact')}
            className="hidden lg:inline-flex items-center gap-2 px-6 py-2.5 rounded-full text-xs md:text-sm font-semibold transition-all duration-300 hover:scale-105 active:scale-95"
            style={{
              backgroundColor: '#3cd882',
              color: '#05120a',
              boxShadow: '0 0 20px rgba(60, 216, 130, 0.45)',
            }}
          >
            Book a consultation <span className="ml-1 text-base leading-none">→</span>
          </a>

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
              onClick={(e) => handleNavClick(e, link.path, link.name)}
              className={({ isActive }) => {
                const isLinkActive = link.path.includes('#')
                  ? location.hash === `#${link.path.split('#')[1]}`
                  : isActive && (link.path !== '/' || !location.hash);
                return `text-base font-medium transition-colors ${
                  isLinkActive ? 'text-[#4ade80]' : 'text-white/80'
                }`;
              }}
            >
              {link.name}
            </NavLink>
          ))}
          <a
            href="/contact-us#contact-form"
            onClick={(e) => handleNavClick(e, '/contact-us#contact-form', 'Contact')}
            className="mt-2 inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-300 active:scale-95"
            style={{
              backgroundColor: '#3cd882',
              color: '#05120a',
              boxShadow: '0 0 15px rgba(60, 216, 130, 0.4)',
            }}
          >
            Book a consultation →
          </a>
        </div>
      )}
    </nav>
  );
}
