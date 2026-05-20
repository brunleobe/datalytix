import { Search, Menu, X } from 'lucide-react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Who We Are', path: '/#who-we-are' },
    { name: 'What We Do', path: '/#what-we-do' },
    { name: 'Our Clients', path: '/our-clients' },
    { name: 'Careers', path: '/contact-us#careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact us', path: '/contact-us#contact-form' },
  ];

  const handleNavClick = (e: React.MouseEvent, path: string, name: string) => {
    setIsMenuOpen(false); // Close menu on click

    if (name === 'Home' && location.pathname === '/') {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
      navigate('/');
    }

    const isHashLink = path.includes('#');
    if (isHashLink) {
      e.preventDefault();
      const [targetPath, hash] = path.split('#');
      const isSamePage = location.pathname === targetPath || (location.pathname === '/' && targetPath === '');

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
    <nav className="w-full bg-white py-4 shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center lg:ml-20 transition-all">
          <img src="/logo.png" alt="Datalytix Logo" className="h-12 md:h-20 w-auto object-contain" />
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden lg:flex items-center space-x-6 text-base font-medium">
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

                return `transition-colors hover:text-primary ${isLinkActive ? 'text-primary' : 'text-slate-600'
                  }`;
              }}
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Mobile Menu Toggle & Search */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center text-slate-600 hover:text-primary cursor-pointer">
            <Search size={20} />
          </div>

          <button
            className="lg:hidden text-slate-600 hover:text-primary"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 py-4 absolute w-full shadow-lg">
          <div className="flex flex-col space-y-4 px-4">
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

                  return `text-lg font-medium transition-colors ${isLinkActive ? 'text-primary' : 'text-slate-600'
                    }`;
                }}
              >
                {link.name}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
