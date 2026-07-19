import { Helmet } from 'react-helmet-async'; 
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import useScrollReveal from '../hooks/useScrollReveal';
import SectionDivider from '../components/common/SectionDivider';

export default function AboutPage() {
  const refStory = useScrollReveal(0.1);
  const refPhilosophy = useScrollReveal(0.15);

  return (
    <>
      <Helmet>
        <title>About Us — Hotel Sangeeth Grand</title>
        <meta name="description" content="Discover the story behind Hotel Sangeeth Grand, Hastinapuram's premier luxury event venue." />
      </Helmet>

      {/* Page Header */}
      <section className="relative pt-32 pb-24 overflow-hidden bg-[var(--color-ink)]">
        <div className="absolute inset-0 opacity-40">
          <img
            src="/images/wedding.png"
            alt="Sangeeth Grand elegant interior"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/90" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.p 
            className="eyebrow text-[var(--color-gold)] mb-4 tracking-[0.2em]"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Our Heritage & Vision
          </motion.p>
          <motion.h1 
            className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            Crafting Unforgettable{' '}
            <span className="font-script italic" style={{ color: 'var(--color-gold)' }}>Legacies</span>
          </motion.h1>
          <motion.p 
            className="text-white/80 text-lg max-w-2xl mx-auto font-light leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 0.4 }}
          >
            Hotel Sangeeth Grand was founded on a simple yet profound belief: the most important days of your life deserve a setting that is absolutely flawless, deeply personal, and completely stress-free.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 sm:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={refStory} className="reveal grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="space-y-6">
              <p className="eyebrow text-[var(--color-gold)]">The Story</p>
              <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-ink)]">
                A Landmark in Hastinapuram
              </h2>
              <p className="text-[var(--color-ink-soft)] leading-relaxed text-lg">
                For years, families in Hyderabad had to choose between chaotic open-air venues and sterile corporate hotels. We built Hotel Sangeeth Grand to bridge that gap—creating a dedicated, premium celebration space that offers the warmth of traditional hospitality with the refined elegance of a modern luxury hotel.
              </p>
              <p className="text-[var(--color-ink-soft)] leading-relaxed text-lg">
                Every architectural detail, from our acoustically treated high ceilings to our signature gold-accented interiors, was deliberately chosen to provide a breathtaking canvas for your milestone moments. 
              </p>
            </div>
            <div className="relative">
              <img 
                src="/images/hero.png" 
                alt="The Grand Hall at Sangeeth Grand" 
                className="rounded-[var(--radius-card)] shadow-[var(--shadow-elevated)] w-full h-auto object-cover"
              />
              <div className="absolute -bottom-6 -left-6 w-32 h-32 border-b-4 border-l-4 border-[var(--color-gold)]/30 rounded-bl-[var(--radius-card)]" />
              <div className="absolute -top-6 -right-6 w-32 h-32 border-t-4 border-r-4 border-[var(--color-gold)]/30 rounded-tr-[var(--radius-card)]" />
            </div>
          </div>
        </div>
      </section>

      <SectionDivider />

      {/* Our Philosophy */}
      <section className="py-20 sm:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div ref={refPhilosophy} className="reveal max-w-3xl mx-auto">
            <p className="eyebrow text-[var(--color-gold)] mb-4">Our Philosophy</p>
            <h2 className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-ink)] mb-8">
              The "One Team" Advantage
            </h2>
            <p className="text-[var(--color-ink-soft)] leading-relaxed text-lg mb-6">
              We fundamentally rejected the industry standard of renting an empty room and forcing families to juggle dozens of disjointed vendors. Instead, we curated an elite, in-house team of culinary masters, décor specialists, and event managers.
            </p>
            <p className="text-[var(--color-ink-soft)] leading-relaxed text-lg mb-10">
              When our chefs and designers work from the exact same brief under the same roof, the result is an incredibly cohesive, perfectly timed, and visually stunning masterpiece. Your only job is to celebrate.
            </p>
            <Link to="/celebrations" className="btn-primary">
              Explore Our Packages
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
