import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About Us' },
  { to: '/celebrations', label: 'Celebrations' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => { document.body.style.overflow = ''; };
  }, [mobileOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(43,37,32,0.08)]'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 sm:h-20">
        {/* Logo / Wordmark */}
        <Link to="/" className="flex items-center gap-2 group" aria-label="Hotel Sangeeth Grand — Home">
          <div className="flex flex-col leading-none">
            <span
              className="font-script text-xl sm:text-2xl tracking-wide"
              style={{ color: 'var(--color-gold)' }}
            >
              Sangeeth Grand
            </span>
            <span
              className="text-[0.6rem] tracking-[0.25em] uppercase font-medium"
              style={{ color: 'var(--color-ink-soft)' }}
            >
              Premium Celebrations
            </span>
          </div>
        </Link>

        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              end={link.to === '/'}
              className={({ isActive }) =>
                `relative text-sm font-medium tracking-wide uppercase transition-colors duration-200 pb-1 ${
                  isActive
                    ? 'text-[var(--color-maroon)]'
                    : 'text-[var(--color-ink)] hover:text-[var(--color-gold)]'
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.label}
                  {isActive && (
                    <span
                      className="absolute bottom-0 left-0 right-0 h-[2px] rounded-full"
                      style={{ backgroundColor: 'var(--color-maroon)' }}
                    />
                  )}
                </>
              )}
            </NavLink>
          ))}

          <Link
            to="/availability"
            className="btn-primary text-xs px-5 py-2.5"
          >
            Check Event Availability
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2 relative z-50"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span
            className={`block w-6 h-[2px] transition-all duration-300 origin-center ${
              mobileOpen ? 'rotate-45 translate-y-[5px] bg-[var(--color-ink)]' : scrolled ? 'bg-[var(--color-ink)]' : 'bg-[var(--color-ink)]'
            }`}
            style={{ backgroundColor: mobileOpen ? 'var(--color-ink)' : scrolled ? 'var(--color-ink)' : 'var(--color-ink)' }}
          />
          <span
            className={`block w-6 h-[2px] transition-all duration-300 ${
              mobileOpen ? 'opacity-0' : 'opacity-100'
            }`}
            style={{ backgroundColor: 'var(--color-ink)' }}
          />
          <span
            className={`block w-6 h-[2px] transition-all duration-300 origin-center ${
              mobileOpen ? '-rotate-45 -translate-y-[5px]' : ''
            }`}
            style={{ backgroundColor: 'var(--color-ink)' }}
          />
        </button>

        {/* Mobile Menu Overlay */}
        {mobileOpen && (
          <div
            className="fixed inset-0 bg-black/40 z-40 md:hidden"
            onClick={() => setMobileOpen(false)}
            aria-hidden="true"
          />
        )}

        {/* Mobile Menu Panel */}
        <div
          className={`fixed top-0 right-0 h-full w-[280px] z-40 bg-white shadow-2xl transform transition-transform duration-300 md:hidden flex flex-col ${
            mobileOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
          <div className="pt-20 px-6 flex flex-col gap-1 flex-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                end={link.to === '/'}
                className={({ isActive }) =>
                  `block py-3 px-4 text-base font-medium tracking-wide uppercase rounded transition-colors ${
                    isActive
                      ? 'text-[var(--color-maroon)] bg-[var(--color-ivory)]'
                      : 'text-[var(--color-ink)] hover:text-[var(--color-gold)] hover:bg-[var(--color-ivory)]'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ))}

            <div className="mt-6 pt-6 border-t border-[var(--color-ivory)]">
              <Link
                to="/availability"
                className="btn-primary w-full text-center text-sm py-3"
              >
                Check Event Availability
              </Link>
            </div>

            <div className="mt-auto pb-8 px-4">
              <a
                href="tel:+918106774567"
                className="flex items-center gap-2 text-sm text-[var(--color-ink-soft)] hover:text-[var(--color-gold)] transition-colors"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                081067 74567
              </a>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
