import useScrollReveal from '../../hooks/useScrollReveal';

const stats = [
  { value: '170', label: 'Seated Capacity', suffix: ' guests' },
  { value: '450', label: 'Floating Capacity', suffix: ' guests' },
  { value: '50', label: 'Parking Spaces', suffix: ' cars' },
  { value: '3.9', label: 'Google Rating', suffix: '★' },
];

export default function TrustStrip() {
  const ref = useScrollReveal(0.2);

  return (
    <section
      ref={ref}
      className="reveal bg-white py-8 sm:py-12 border-y border-[var(--color-gold)]/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="flex items-baseline justify-center gap-0.5">
                <span
                  className="font-display text-3xl sm:text-4xl font-bold"
                  style={{ color: 'var(--color-gold)' }}
                >
                  {stat.value}
                </span>
                <span className="text-sm text-[var(--color-ink-soft)]">{stat.suffix}</span>
              </div>
              <p className="text-xs sm:text-sm text-[var(--color-ink-soft)] mt-1 uppercase tracking-[0.1em]">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
