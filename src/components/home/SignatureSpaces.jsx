import useScrollReveal from '../../hooks/useScrollReveal';
import SectionDivider from '../common/SectionDivider';
import LazyImage from '../common/LazyImage';

const spaces = [
  {
    title: 'The Grand Hall',
    description: 'Step into a world of refined elegance. Our signature banquet space is meticulously designed to host up to 170 seated guests in absolute comfort. Featuring centralised climate control, breathtaking crystal chandeliers, and a fully equipped, customisable stage, it provides the perfect canvas for majestic weddings, grand receptions, and unforgettable milestone celebrations.',
    image: '/images/hero.png',
    features: ['Comfortably seats 170 guests (450 floating)', 'Centralised climate control', 'Acoustically treated environment', 'Fully equipped & customisable stage'],
  },
  {
    title: 'The Dedicated Dining Lounge',
    description: 'We believe your celebration space should remain pristine throughout the event. That’s why we offer a separate, dedicated dining lounge where your guests can indulge in an exquisite, in-house curated multi-course feast. No makeshift arrangements, no disruptions—just a seamless transition from celebration to dining.',
    image: '/images/dining.png',
    features: ['Exclusive dining floor, separate from event hall', 'Premium in-house culinary team', 'Flawless multi-course service', 'Elegant seating arrangements'],
  },
];

export default function SignatureSpaces() {
  const ref = useScrollReveal(0.1);

  return (
    <section className="py-20 sm:py-28" id="signature-spaces">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="eyebrow mb-3">Our Spaces</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-ink)] mb-4">
            Two Thoughtfully<br />
            <span className="font-script italic" style={{ color: 'var(--color-gold)' }}>Designed</span>{' '}Spaces
          </h2>
          <p className="text-[var(--color-ink-soft)] max-w-xl mx-auto">
            The celebration happens in one room. The feast, in another. No compromises on either.
          </p>
        </div>

        <SectionDivider />

        <div ref={ref} className="reveal space-y-20 mt-12">
          {spaces.map((space, i) => (
            <div
              key={space.title}
              className={`flex flex-col ${
                i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
              } gap-8 lg:gap-16 items-center`}
            >
              {/* Image */}
              <div className="w-full lg:w-1/2 relative group">
                <div className="overflow-hidden rounded-[var(--radius-card)]">
                  <LazyImage
                    src={space.image}
                    alt={space.title}
                    width={800}
                    height={540}
                    className="w-full h-[300px] sm:h-[400px] lg:h-[460px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Gold accent line */}
                <div
                  className={`hidden lg:block absolute top-6 ${i % 2 === 0 ? '-right-4' : '-left-4'} w-[2px] h-24`}
                  style={{ backgroundColor: 'var(--color-gold)' }}
                />
              </div>

              {/* Content */}
              <div className="w-full lg:w-1/2">
                <h3 className="font-display text-2xl sm:text-3xl font-bold mb-4 text-[var(--color-ink)]">
                  {space.title}
                </h3>
                <p className="text-[var(--color-ink-soft)] leading-relaxed mb-6">
                  {space.description}
                </p>
                <ul className="space-y-2">
                  {space.features.map((feat) => (
                    <li key={feat} className="flex items-center gap-3 text-sm text-[var(--color-ink)]">
                      <span
                        className="w-1.5 h-1.5 rounded-full flex-shrink-0"
                        style={{ backgroundColor: 'var(--color-gold)' }}
                      />
                      {feat}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
