import { Search } from 'lucide-react';
import { NavLink } from 'react-router-dom';

export function Navbar() {
  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Who We Are', path: '/who-we-are' },
    { name: 'What We Do', path: '/what-we-do' },
    { name: 'Our Clients', path: '/our-clients' },
    { name: 'Careers', path: '/careers' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact us', path: '/contact-us' },
  ];

  return (
    <nav className="w-full bg-white py-4 shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center ml-100">
          <img src="/logo.png" alt="Datalytix Logo" className="h-20 w-auto object-contain" />
        </div>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-6 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.name}
              to={link.path}
              className={({ isActive }) =>
                `transition-colors hover:text-primary ${
                  isActive ? 'text-primary' : 'text-slate-600'
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </div>

        {/* Search */}
        <div className="flex items-center text-slate-600 hover:text-primary cursor-pointer">
          <Search size={20} />
        </div>
      </div>
    </nav>
  );
}
