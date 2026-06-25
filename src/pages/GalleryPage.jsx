import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import useScrollReveal from '../hooks/useScrollReveal';
import SectionDivider from '../components/common/SectionDivider';

const categories = ['All', 'Banquet Hall', 'Dining Hall', 'Décor', 'Stage & Mandap', 'Outdoor'];

const galleryImages = [
  { src: '/images/hero.png', alt: 'Grand banquet hall with chandeliers', category: 'Banquet Hall', span: 'col-span-2 row-span-2' },
  { src: '/images/wedding.png', alt: 'Wedding stage with floral décor', category: 'Stage & Mandap', span: '' },
  { src: '/images/engagement.png', alt: 'Engagement ceremony setup', category: 'Décor', span: '' },
  { src: '/images/dining.png', alt: 'Separate dining hall with buffet setup', category: 'Dining Hall', span: 'col-span-2' },
  { src: '/images/birthday.png', alt: 'Birthday celebration décor', category: 'Décor', span: '' },
  { src: '/images/corporate.png', alt: 'Corporate event arrangement', category: 'Banquet Hall', span: '' },
  { src: '/images/wedding.png', alt: 'Reception stage lighting', category: 'Stage & Mandap', span: '' },
  { src: '/images/hero.png', alt: 'Hall interior wide angle', category: 'Banquet Hall', span: '' },
];

export default function GalleryPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const ref = useScrollReveal(0.1);

  const filtered = activeCategory === 'All'
    ? galleryImages
    : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <>
      <Helmet>
        <title>Spaces & Décor Gallery — Hotel Sangeeth Grand</title>
        <meta name="description" content="Explore the interiors, décor themes, and event setups at Hotel Sangeeth Grand — banquet hall, dining hall, mandap designs, and celebration arrangements." />
      </Helmet>

      {/* Page Header */}
      <section className="pt-28 sm:pt-36 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow mb-3">Our Spaces</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-ink)] mb-4">
            Spaces &{' '}
            <span className="font-script italic" style={{ color: 'var(--color-gold)' }}>Décor</span>
          </h1>
          <p className="text-[var(--color-ink-soft)] max-w-xl mx-auto">
            Every corner of our venue is designed to elevate your celebration.
            Browse our interiors and décor themes below.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Category Filter */}
      <section className="py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-2 text-sm font-medium rounded-[var(--radius-card)] transition-all duration-200 ${
                  activeCategory === cat
                    ? 'bg-[var(--color-gold)] text-white shadow-md'
                    : 'bg-white text-[var(--color-ink-soft)] hover:bg-[var(--color-gold)]/10 hover:text-[var(--color-gold)]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-8 sm:py-12">
        <div ref={ref} className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filtered.map((img, i) => (
              <div
                key={`${img.src}-${i}`}
                className={`group cursor-pointer overflow-hidden rounded-[var(--radius-card)] relative ${
                  i === 0 ? 'sm:col-span-2 sm:row-span-2' : ''
                }`}
                onClick={() => setLightboxIndex(i)}
              >
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  decoding="async"
                  className={`w-full object-cover transition-transform duration-700 group-hover:scale-110 ${
                    i === 0 ? 'h-[300px] sm:h-full' : 'h-[250px] sm:h-[280px]'
                  }`}
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[var(--color-ink)]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-white text-sm font-medium">{img.alt}</p>
                    <p className="text-white/60 text-xs mt-1">{img.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[var(--color-ink)]/95 flex items-center justify-center p-4"
          onClick={() => setLightboxIndex(null)}
        >
          <button
            className="absolute top-6 right-6 text-white/60 hover:text-white transition-colors"
            onClick={() => setLightboxIndex(null)}
            aria-label="Close lightbox"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>

          {/* Previous */}
          <button
            className="absolute left-4 text-white/60 hover:text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev - 1 + filtered.length) % filtered.length);
            }}
            aria-label="Previous image"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6" />
            </svg>
          </button>

          {/* Image */}
          <img
            src={filtered[lightboxIndex].src}
            alt={filtered[lightboxIndex].alt}
            className="max-w-full max-h-[85vh] object-contain rounded-[var(--radius-card)]"
            onClick={(e) => e.stopPropagation()}
          />

          {/* Next */}
          <button
            className="absolute right-4 text-white/60 hover:text-white transition-colors"
            onClick={(e) => {
              e.stopPropagation();
              setLightboxIndex((prev) => (prev + 1) % filtered.length);
            }}
            aria-label="Next image"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M9 18l6-6-6-6" />
            </svg>
          </button>

          {/* Caption */}
          <div className="absolute bottom-8 text-center text-white/80">
            <p className="text-sm">{filtered[lightboxIndex].alt}</p>
            <p className="text-xs text-white/50 mt-1">
              {lightboxIndex + 1} / {filtered.length}
            </p>
          </div>
        </div>
      )}
    </>
  );
}
