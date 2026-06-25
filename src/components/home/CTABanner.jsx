import { Link } from 'react-router-dom';
import useScrollReveal from '../../hooks/useScrollReveal';

export default function CTABanner() {
  const ref = useScrollReveal(0.2);

  return (
    <section
      ref={ref}
      className="reveal relative py-24 sm:py-32 overflow-hidden"
      id="cta-banner"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/wedding.png"
          alt=""
          loading="lazy"
          decoding="async"
          className="w-full h-full object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-black/75" />
      </div>

      {/* Gold corner accents */}
      <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-[var(--color-gold)]/40" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-[var(--color-gold)]/40" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-2xl mx-auto">
        <p className="eyebrow text-[var(--color-gold)] mb-4">Begin Your Journey</p>
        <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
          Your Masterpiece{' '}
          <span className="font-script italic" style={{ color: 'var(--color-gold)' }}>
            Starts Here
          </span>
        </h2>
        <p className="text-white/80 max-w-xl mx-auto mb-8 leading-relaxed font-light">
          Share your desired date and guest count with us. Our dedicated event managers will craft a fully bespoke proposal—seamlessly integrating world-class décor, exquisite catering, and flawless coordination from a single, expert team.
        </p>
        <Link to="/availability" className="btn-primary text-sm px-10 py-4">
          Check Event Availability
        </Link>
      </div>
    </section>
  );
}
