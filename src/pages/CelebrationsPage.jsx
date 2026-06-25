import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import useScrollReveal from '../hooks/useScrollReveal';
import SectionDivider from '../components/common/SectionDivider';
import occasions from '../data/occasions.json';

const imageMap = {
  'wedding-reception': '/images/wedding.png',
  'engagement-sangeet': '/images/engagement.png',
  'birthday-anniversary': '/images/birthday.png',
  'naming-ceremony': '/images/dining.png',
  'corporate': '/images/corporate.png',
};

function OccasionCard({ occasion, index }) {
  const ref = useScrollReveal(0.1);
  const isReversed = index % 2 !== 0;

  return (
    <div
      ref={ref}
      className={`reveal flex flex-col ${isReversed ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-8 lg:gap-16 items-center py-12`}
    >
      {/* Image */}
      <div className="w-full lg:w-1/2 relative group">
        <div className="overflow-hidden rounded-[var(--radius-card)]">
          <img
            src={imageMap[occasion.id]}
            alt={occasion.title}
            loading="lazy"
            decoding="async"
            width={800}
            height={540}
            className="w-full h-[280px] sm:h-[380px] object-cover transition-transform duration-700 group-hover:scale-105"
            style={{ aspectRatio: '800/540' }}
          />
        </div>
        {/* Capacity badge */}
        <div
          className="absolute bottom-4 left-4 bg-white/95 backdrop-blur-sm px-4 py-2 rounded-[var(--radius-card)] shadow-lg"
        >
          <span className="text-xs font-semibold uppercase tracking-wider text-[var(--color-gold)]">
            {occasion.capacity}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="w-full lg:w-1/2">
        <p className="eyebrow mb-2">{occasion.tagline}</p>
        <h3 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-ink)] mb-4">
          {occasion.title}
        </h3>
        <p className="text-[var(--color-ink-soft)] leading-relaxed mb-6">
          {occasion.description}
        </p>
        <Link to="/availability" className="btn-primary text-sm">
          Check Event Availability
        </Link>
      </div>
    </div>
  );
}

function CapacityTable() {
  const ref = useScrollReveal(0.15);

  return (
    <div ref={ref} className="reveal bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-soft)] overflow-hidden">
      <div className="p-6 sm:p-8 border-b border-[var(--color-ivory)]">
        <h3 className="font-display text-xl font-bold text-[var(--color-ink)]">Capacity & Amenities</h3>
        <p className="text-sm text-[var(--color-ink-soft)] mt-1">Everything your event needs, under one roof</p>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="bg-[var(--color-ivory)]">
              <th className="text-left py-3 px-6 font-display font-semibold text-[var(--color-ink)] uppercase tracking-wider text-xs">Feature</th>
              <th className="text-left py-3 px-6 font-display font-semibold text-[var(--color-ink)] uppercase tracking-wider text-xs">Details</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-[var(--color-ivory)]">
            {[
              ['Seated Capacity', '170 guests'],
              ['Floating / Standing', 'Up to 300–450 guests'],
              ['Air Conditioning', 'Centralised AC throughout'],
              ['Dress-Changing Rooms', 'Attached, private rooms'],
              ['Dining Hall', 'Separate dedicated space'],
              ['Parking', 'On-site, ~50 vehicles'],
              ['Catering', 'In-house only — curated menus'],
              ['Décor', 'In-house design team — fully customisable'],
              ['Morning Slot', '9:00 AM – 3:30 PM'],
              ['Evening Slot', '5:00 PM – 12:00 AM'],
            ].map(([feature, detail]) => (
              <tr key={feature} className="hover:bg-[var(--color-ivory)]/50 transition-colors">
                <td className="py-3 px-6 font-medium text-[var(--color-ink)]">{feature}</td>
                <td className="py-3 px-6 text-[var(--color-ink-soft)]">{detail}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default function CelebrationsPage() {
  return (
    <>
      <Helmet>
        <title>Celebrations & Packages — Hotel Sangeeth Grand</title>
        <meta name="description" content="Explore weddings, receptions, engagements, sangeet, birthdays, naming ceremonies, and corporate event packages at Hotel Sangeeth Grand, Hyderabad." />
      </Helmet>

      {/* Page Header */}
      <section className="pt-28 sm:pt-36 pb-12 sm:pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow mb-3">Occasions & Packages</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-ink)] mb-4">
            Celebrations{' '}
            <span className="font-script italic" style={{ color: 'var(--color-gold)' }}>Curated</span>{' '}
            for You
          </h1>
          <p className="text-[var(--color-ink-soft)] max-w-2xl mx-auto leading-relaxed">
            Every event is different. Our in-house team designs the décor, prepares the feast,
            and coordinates the flow — so you can focus on the people who matter.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Occasion Cards */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {occasions.map((occ, i) => (
            <div key={occ.id}>
              <OccasionCard occasion={occ} index={i} />
              {i < occasions.length - 1 && <SectionDivider />}
            </div>
          ))}
        </div>
      </section>

      {/* Capacity Table */}
      <section className="py-16 sm:py-24 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">At a Glance</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-ink)]">
              Venue Specifications
            </h2>
          </div>
          <CapacityTable />
        </div>
      </section>

      {/* In-House Advantage */}
      <section className="py-16 sm:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <p className="eyebrow mb-3">The Sangeeth Grand Advantage</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-ink)] mb-4">
              One Team,{' '}
              <span className="font-script italic" style={{ color: 'var(--color-gold)' }}>Start to Finish</span>
            </h2>
            <p className="text-[var(--color-ink-soft)] max-w-xl mx-auto">
              Our designers and chefs work from a single brief, so nothing is left
              to coordinate between vendors.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Bespoke Curated Décor',
                description: 'Our elite in-house design team meticulously crafts every visual element, from majestic mandaps to modern minimalism. No third-party decorators needed; we bring your exact vision to life with flawless execution.',
                accent: 'var(--color-gold)',
              },
              {
                title: 'World-Class In-House Catering',
                description: 'Indulge your guests in elaborate, multi-course culinary masterpieces. Our dedicated kitchen prepares everything on-premises, guaranteeing absolute freshness, exceptional taste, and a bespoke menu tailored to your event.',
                accent: 'var(--color-marigold)',
              },
              {
                title: 'Flawless Event Coordination',
                description: 'A dedicated event manager orchestrates your timeline, oversees vendor coordination, and manages day-of execution. Enjoy a single point of contact and zero stress, allowing you to be a guest at your own celebration.',
                accent: 'var(--color-maroon)',
              },
            ].map((item) => (
              <div key={item.title} className="card p-8 text-center">
                <div
                  className="w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center"
                  style={{ backgroundColor: item.accent + '15' }}
                >
                  <div className="w-3 h-3 rounded-full" style={{ backgroundColor: item.accent }} />
                </div>
                <h3 className="font-display text-lg font-bold text-[var(--color-ink)] mb-3">{item.title}</h3>
                <p className="text-sm text-[var(--color-ink-soft)] leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link to="/availability" className="btn-primary text-sm px-10">
              Check Event Availability
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
