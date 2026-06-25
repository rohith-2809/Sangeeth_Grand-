import { useState, useEffect, useCallback, useRef } from 'react';
import useScrollReveal from '../../hooks/useScrollReveal';
import useReducedMotion from '../../hooks/useReducedMotion';
import SectionDivider from '../common/SectionDivider';
import testimonials from '../../data/testimonials.json';

// Star rating component
function Stars({ rating }) {
  if (!rating) return null;
  const fullStars = Math.floor(rating);
  const hasHalf = rating % 1 >= 0.5;

  return (
    <div className="flex items-center gap-0.5" aria-label={`${rating} out of 5 stars`}>
      {[...Array(5)].map((_, i) => (
        <svg
          key={i}
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill={i < fullStars ? 'var(--color-gold)' : i === fullStars && hasHalf ? 'url(#halfGrad)' : 'none'}
          stroke="var(--color-gold)"
          strokeWidth="1.5"
        >
          {i === fullStars && hasHalf && (
            <defs>
              <linearGradient id="halfGrad">
                <stop offset="50%" stopColor="var(--color-gold)" />
                <stop offset="50%" stopColor="transparent" />
              </linearGradient>
            </defs>
          )}
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ))}
    </div>
  );
}

// Platform logos as inline SVG
function PlatformLogo({ platform }) {
  if (platform === 'Google') {
    return (
      <div className="flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24">
          <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
          <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
          <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
          <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
        </svg>
        <span className="font-semibold text-sm text-[var(--color-ink)]">Google Reviews</span>
      </div>
    );
  }
  if (platform === 'Zomato') {
    return (
      <div className="flex items-center gap-2">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="#E23744">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 .9 3 2s-1.34 2-3 2-3-.9-3-2 1.34-2 3-2zm-5 7c0-1.1.9-2 2-2h6c1.1 0 2 .9 2 2v2c0 1.1-.9 2-2 2H9c-1.1 0-2-.9-2-2v-2z"/>
        </svg>
        <span className="font-semibold text-sm text-[var(--color-ink)]">Zomato</span>
      </div>
    );
  }
  if (platform === 'Venuebookingz') {
    return (
      <div className="flex items-center gap-2">
        <div
          className="w-6 h-6 rounded-full flex items-center justify-center text-white text-xs font-bold"
          style={{ backgroundColor: 'var(--color-maroon)' }}
        >
          V
        </div>
        <span className="font-semibold text-sm text-[var(--color-ink)]">Venuebookingz</span>
      </div>
    );
  }
  return null;
}

export default function TestimonialCarousel() {
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const intervalRef = useRef(null);
  const prefersReducedMotion = useReducedMotion();
  const revealRef = useScrollReveal(0.15);

  const next = useCallback(() => {
    setCurrent((prev) => (prev + 1) % testimonials.length);
  }, []);

  const prev = useCallback(() => {
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  }, []);

  // Auto-rotate (disabled if reduced motion or paused)
  useEffect(() => {
    if (prefersReducedMotion || paused) return;
    intervalRef.current = setInterval(next, 5000);
    return () => clearInterval(intervalRef.current);
  }, [prefersReducedMotion, paused, next]);

  return (
    <section className="py-20 sm:py-28" id="social-proof">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">Trusted By Families</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-ink)] mb-4">
            What Guests{' '}
            <span className="font-script italic" style={{ color: 'var(--color-gold)' }}>Say</span>
          </h2>
          <p className="text-[var(--color-ink-soft)] max-w-xl mx-auto">
            Verified ratings from leading platforms — curated summaries of real guest sentiment.
          </p>
        </div>

        <SectionDivider />

        {/* Carousel */}
        <div
          ref={revealRef}
          className="reveal mt-12 max-w-4xl mx-auto"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={() => setPaused(false)}
        >
          {/* Cards */}
          <div className="relative overflow-hidden">
            <div
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${current * 100}%)` }}
            >
              {testimonials.map((t) => (
                <div
                  key={t.platform}
                  className="w-full flex-shrink-0 px-2"
                >
                  <div className="bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-soft)] p-8 sm:p-12 text-center">
                    <PlatformLogo platform={t.platform} />

                    <div className="flex items-center justify-center gap-3 mt-6 mb-4">
                      {t.rating && <Stars rating={t.rating} />}
                      {t.rating && (
                        <span className="font-display text-2xl font-bold" style={{ color: 'var(--color-gold)' }}>
                          {t.rating}
                        </span>
                      )}
                      {t.reviewCount && (
                        <span className="text-sm text-[var(--color-ink-soft)]">
                          from {t.reviewCount.toLocaleString()} reviews
                        </span>
                      )}
                    </div>

                    <blockquote className="text-lg sm:text-xl text-[var(--color-ink)] leading-relaxed font-light italic max-w-2xl mx-auto mb-6">
                      "{t.summary}"
                    </blockquote>

                    <a
                      href={t.linkOut}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm font-medium hover:underline transition-colors"
                      style={{ color: 'var(--color-gold)' }}
                    >
                      Read more on {t.platform}
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17l9.2-9.2M17 17V8h-9" />
                      </svg>
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-10 h-10 rounded-full border border-[var(--color-gold)]/30 flex items-center justify-center text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-white transition-all"
              aria-label="Previous review"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current
                      ? 'w-8 bg-[var(--color-gold)]'
                      : 'w-2 bg-[var(--color-gold)]/30 hover:bg-[var(--color-gold)]/50'
                  }`}
                  aria-label={`Go to review ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-10 h-10 rounded-full border border-[var(--color-gold)]/30 flex items-center justify-center text-[var(--color-gold)] hover:bg-[var(--color-gold)] hover:text-white transition-all"
              aria-label="Next review"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
