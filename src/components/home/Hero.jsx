import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useReducedMotion from '../../hooks/useReducedMotion';

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden" id="hero">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="/images/hero.png"
          alt="Elegant banquet hall interior at Hotel Sangeeth Grand with golden chandeliers and wedding décor"
          className="w-full h-full object-cover"
          loading="eager"
          fetchpriority="high"
          decoding="async"
          width="1920"
          height="1080"
          style={{ aspectRatio: '1920/1080' }}
        />
        {/* Overlay gradient - Darker black for visibility */}
        <div className="absolute inset-0 bg-black/60 sm:bg-black/50" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/80" />
      </div>

      {/* Drawn Gold Border */}
      <div className="absolute inset-6 sm:inset-10 md:inset-16 pointer-events-none drawn-border">
        <span className="border-bottom" aria-hidden="true" />
        <span className="border-left" aria-hidden="true" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-8 max-w-4xl mx-auto">
        <motion.p 
          className="eyebrow text-[var(--color-gold)] mb-6 tracking-[0.25em]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Welcome to Hotel Sangeeth Grand
        </motion.p>

        <motion.h1 
          className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-8 leading-[1.15]"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.4, ease: "easeOut" }}
        >
          Where Every<br />
          <span className="font-script italic" style={{ color: 'var(--color-gold)' }}>
            Celebration
          </span>{' '}
          Becomes<br />a Masterpiece
        </motion.h1>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="space-y-4 max-w-2xl mx-auto mb-10"
        >
          <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light">
            Located in the heart of Hastinapuram, we offer an opulent, fully climate-controlled venue tailored for up to 450 guests. We pride ourselves on delivering an unparalleled experience where every detail is meticulously planned.
          </p>
          <p className="text-base sm:text-lg text-white/90 leading-relaxed font-light hidden sm:block">
            From world-class in-house catering to breathtaking custom décor, our dedicated team orchestrates your event with absolute precision, ensuring you can simply be a guest at your own masterpiece.
          </p>
        </motion.div>

        <motion.div 
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <Link to="/availability" className="btn-primary text-sm px-8 py-3.5 w-full sm:w-auto">
            Check Event Availability
          </Link>
          <Link to="/gallery" className="btn-outline text-sm px-8 py-3.5 border-white/40 text-white hover:bg-white/10 hover:border-white/60 w-full sm:w-auto">
            Explore Our Spaces
          </Link>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <div
        className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 ${
          prefersReducedMotion ? '' : 'animate-bounce'
        }`}
        style={{ animationDuration: '2s' }}
      >
        <span className="text-[0.65rem] uppercase tracking-[0.2em]">Scroll</span>
        <svg width="16" height="24" viewBox="0 0 16 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 4v16m0 0l-4-4m4 4l4-4" />
        </svg>
      </div>
    </section>
  );
}
