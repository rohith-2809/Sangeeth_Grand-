import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function StickyBookingBar() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > window.innerHeight);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-0 left-0 right-0 z-40 md:hidden transition-transform duration-300 ${
        visible ? 'translate-y-0' : 'translate-y-full'
      }`}
    >
      <div className="bg-white/95 backdrop-blur-md border-t border-[var(--color-gold)]/20 px-4 py-3 safe-area-bottom">
        <Link
          to="/availability"
          className="btn-primary w-full text-center text-sm py-3 block"
        >
          Check Event Availability
        </Link>
      </div>
    </div>
  );
}
