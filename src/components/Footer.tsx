import { NavLink, useNavigate, useLocation } from 'react-router-dom';

const pages = [
  { name: 'Home', path: '/' },
  { name: 'Services', path: '/#what-we-do' },
  { name: 'About', path: '/#who-we-are' },
  { name: 'Contact', path: '/contact-us#contact-form' },
];

const competencies = [
  'Data Management',
  'BI & Analytics',
  'Data Warehousing',
  'Infrastructure',
];

export function Footer() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavClick = (e: React.MouseEvent, path: string) => {
    const isHashLink = path.includes('#');
    if (!isHashLink) return;
    e.preventDefault();
    const [targetPath, hash] = path.split('#');
    const isSamePage =
      location.pathname === targetPath ||
      (location.pathname === '/' && targetPath === '');
    if (isSamePage) {
      const el = document.getElementById(hash);
      el?.scrollIntoView({ behavior: 'smooth' });
      navigate(path);
    } else {
      navigate(path);
    }
  };

  return (
    <footer style={{ backgroundColor: '#0a0d13' }}>
      {/* ── Main grid ── */}
      <div className="container mx-auto px-6 lg:px-12 max-w-7xl pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">

          {/* Col 1 – Brand */}
          <div className="flex flex-col gap-5">
            {/* Logo */}
            <div className="flex items-center gap-2">
              <span
                className="w-5 h-5 rounded-sm flex items-center justify-center shrink-0"
                style={{ backgroundColor: '#3cd882' }}
              >
                <svg viewBox="0 0 10 10" className="w-3 h-3" fill="none">
                  <polyline
                    points="1,7 4,4 6,6 9,2"
                    stroke="#05120a"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              <span className="font-extrabold text-white text-sm tracking-tight leading-none">
                Datalytix <span style={{ color: '#3cd882' }}>NG</span>
              </span>
            </div>

            {/* Tagline */}
            <p className="text-white font-bold text-base leading-snug max-w-[200px]">
              Simple solutions to<br />complex IT problems.
            </p>

            {/* Availability badge */}
            <span
              className="self-start text-[10px] font-semibold tracking-[0.2em] uppercase px-3 py-1.5 rounded-full border"
              style={{
                borderColor: 'rgba(60, 216, 130, 0.35)',
                color: '#3cd882',
                backgroundColor: 'rgba(60, 216, 130, 0.06)',
              }}
            >
              Available for new engagements
            </span>
          </div>

          {/* Col 2 – Pages */}
          <div>
            <p
              className="text-[10px] font-bold tracking-[0.25em] uppercase mb-5 font-mono"
              style={{ color: '#3cd882' }}
            >
              Pages
            </p>
            <ul className="flex flex-col gap-3">
              {pages.map((link) => (
                <li key={link.name}>
                  <NavLink
                    to={link.path}
                    end={link.path === '/'}
                    onClick={(e) => handleNavClick(e, link.path)}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                    onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                  >
                    {link.name}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 – Competencies */}
          <div>
            <p
              className="text-[10px] font-bold tracking-[0.25em] uppercase mb-5 font-mono"
              style={{ color: '#3cd882' }}
            >
              Competencies
            </p>
            <ul className="flex flex-col gap-3">
              {competencies.map((item) => (
                <li
                  key={item}
                  className="text-sm"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Col 4 – Get in Touch */}
          <div>
            <p
              className="text-[10px] font-bold tracking-[0.25em] uppercase mb-5 font-mono"
              style={{ color: '#3cd882' }}
            >
              Get in Touch
            </p>
            <ul className="flex flex-col gap-3">
              <li>
                <a
                  href="mailto:kay@datalytixng.com"
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  info@datalytixng.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+2348034174300"
                  className="text-sm transition-colors duration-200"
                  style={{ color: 'rgba(255,255,255,0.55)' }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = '#fff')}
                  onMouseLeave={(e) => (e.currentTarget.style.color = 'rgba(255,255,255,0.55)')}
                >
                  +234 (0) 803 417 4300
                </a>
              </li>
              <li className="text-sm" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Lagos, Nigeria
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* ── Bottom bar ── */}
      <div
        className="border-t"
        style={{ borderColor: 'rgba(255,255,255,0.07)' }}
      >
        <div className="container mx-auto px-6 lg:px-12 max-w-7xl py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            © 2026 Datalytix NG. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>
            Certified · Oracle · Microsoft · Thomson Reuters
          </p>
        </div>
      </div>

      {/* ── Large watermark text ── */}
      <div className="overflow-hidden select-none pointer-events-none" aria-hidden="true">
        <p
          className="text-center font-extrabold leading-none tracking-tighter"
          style={{
            fontSize: 'clamp(5rem, 18vw, 18rem)',
            color: 'rgba(255,255,255,0.04)',
            marginTop: '-0.15em',
            paddingBottom: '0.05em',
          }}
        >
          DATALYTIX
        </p>
      </div>
    </footer>
  );
}
