import { Link } from 'react-router-dom';
import useScrollReveal from '../../hooks/useScrollReveal';
import SectionDivider from '../common/SectionDivider';

const occasions = [
  {
    title: 'Weddings & Receptions',
    image: '/images/wedding.png',
    description: 'From intimate nikahs to grand Telugu weddings. Our designers translate your vision into breathtaking mandap aesthetics, brilliant stage lighting, and bespoke floral décor.',
  },
  {
    title: 'Engagements & Sangeet',
    image: '/images/engagement.png',
    description: 'Ring ceremonies and sangeet nights that perfectly balance high energy with refined elegance. Enjoy flawless transitions with our attached, private changing suites.',
  },
  {
    title: 'Birthdays & Anniversaries',
    image: '/images/birthday.png',
    description: 'Celebrate life’s finest milestones without compromise. A dedicated dining hall ensures the celebration space stays immaculate while your guests savor an exquisite feast.',
  },
  {
    title: 'Corporate Events',
    image: '/images/corporate.png',
    description: 'Host premium team celebrations and annual galas in a fully air-conditioned venue with on-site parking. One invoice, absolute professionalism, zero logistical headaches.',
  },
];

export default function OccasionsPreview() {
  const ref = useScrollReveal(0.1);

  return (
    <section className="py-20 sm:py-28 bg-white" id="occasions-preview">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <p className="eyebrow mb-3">Celebrations We Host</p>
          <h2 className="font-display text-3xl sm:text-4xl md:text-5xl font-bold text-[var(--color-ink)] mb-4">
            Every Occasion,{' '}
            <span className="font-script italic" style={{ color: 'var(--color-gold)' }}>Elevated</span>
          </h2>
          <p className="text-[var(--color-ink-soft)] max-w-xl mx-auto">
            One team, start to finish — our designers and chefs work from a single brief,
            so nothing is left to coordinate between vendors.
          </p>
        </div>

        <SectionDivider />

        <div ref={ref} className="reveal grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
          {occasions.map((occ) => (
            <Link
              key={occ.title}
              to="/celebrations"
              className="card group cursor-pointer"
            >
              <div className="overflow-hidden">
                <img
                  src={occ.image}
                  alt={occ.title}
                  loading="lazy"
                  decoding="async"
                  width={600}
                  height={400}
                  className="w-full h-48 sm:h-52 object-cover transition-transform duration-500 group-hover:scale-110"
                  style={{ aspectRatio: '3/2' }}
                />
              </div>
              <div className="p-5">
                <h3 className="font-display text-lg font-bold mb-2 text-[var(--color-ink)] group-hover:text-[var(--color-gold)] transition-colors">
                  {occ.title}
                </h3>
                <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">
                  {occ.description}
                </p>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/celebrations" className="btn-outline text-sm">
            View All Celebrations
          </Link>
        </div>
      </div>
    </section>
  );
}
