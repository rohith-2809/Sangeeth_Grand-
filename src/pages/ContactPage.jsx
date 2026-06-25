import { Helmet } from 'react-helmet-async';
import useScrollReveal from '../hooks/useScrollReveal';
import SectionDivider from '../components/common/SectionDivider';

export default function ContactPage() {
  const ref = useScrollReveal(0.1);

  return (
    <>
      <Helmet>
        <title>Location & Hours — Hotel Sangeeth Grand, Hyderabad</title>
        <meta name="description" content="Visit Hotel Sangeeth Grand at 90, Nagarjuna Sagar Road, Hasthinapuram Central, Hyderabad. Open 9 AM – 12 AM. Call 081067 74567." />
      </Helmet>

      {/* Page Header */}
      <section className="pt-28 sm:pt-36 pb-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow mb-3">Find Us</p>
          <h1 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold text-[var(--color-ink)] mb-4">
            Location &{' '}
            <span className="font-script italic" style={{ color: 'var(--color-gold)' }}>Hours</span>
          </h1>
          <p className="text-[var(--color-ink-soft)] max-w-xl mx-auto">
            Centrally located in Hastinapuram with on-site parking for 50 vehicles.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Contact Grid */}
      <section className="py-12 sm:py-16">
        <div ref={ref} className="reveal max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Map */}
            <div className="rounded-[var(--radius-card)] overflow-hidden shadow-[var(--shadow-soft)] h-[400px] lg:h-[500px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3808.0!2d78.55!3d17.33!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sHotel+Sangeeth+Grand!5e0!3m2!1sen!2sin!4v1"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Hotel Sangeeth Grand on Google Maps"
              />
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              {/* Address */}
              <div className="bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-soft)] p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-gold)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                      <circle cx="12" cy="10" r="3" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-[var(--color-ink)] mb-1">Address</h3>
                    <p className="text-[var(--color-ink-soft)] leading-relaxed">
                      90, Nagarjuna Sagar Road,<br />
                      Hasthinapuram Central,<br />
                      Laxmi Narasimha Puram Colony,<br />
                      Hastinapuram, Hyderabad,<br />
                      Telangana 500079
                    </p>
                    <a
                      href="https://maps.google.com/?q=Hotel+Sangeeth+Grand+Hastinapuram+Hyderabad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 mt-3 text-sm font-medium hover:underline"
                      style={{ color: 'var(--color-gold)' }}
                    >
                      Get Directions
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M7 17l9.2-9.2M17 17V8h-9" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>

              {/* Phone */}
              <div className="bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-soft)] p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-gold)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-[var(--color-ink)] mb-1">Phone</h3>
                    <a
                      href="tel:+918106774567"
                      className="text-xl font-display font-bold hover:underline"
                      style={{ color: 'var(--color-gold)' }}
                    >
                      081067 74567
                    </a>
                    <p className="text-sm text-[var(--color-ink-soft)] mt-1">
                      Call us to speak with our event manager
                    </p>
                    <a
                      href="https://wa.me/918106774567?text=Hi%2C%20I%20would%20like%20to%20check%20event%20availability%20at%20Sangeeth%20Grand."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 mt-3 text-sm font-medium px-4 py-2 rounded-[var(--radius-card)] transition-colors"
                      style={{ backgroundColor: '#25D366', color: 'white' }}
                    >
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                      </svg>
                      WhatsApp Us
                    </a>
                  </div>
                </div>
              </div>

              {/* Hours */}
              <div className="bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-soft)] p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-gold)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <polyline points="12 6 12 12 16 14" />
                    </svg>
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display text-lg font-bold text-[var(--color-ink)] mb-3">Hours & Slots</h3>
                    <table className="w-full text-sm">
                      <tbody>
                        <tr className="border-b border-[var(--color-ivory)]">
                          <td className="py-2 text-[var(--color-ink-soft)]">Venue Hours</td>
                          <td className="py-2 text-right font-medium text-[var(--color-ink)]">9:00 AM – 12:00 AM</td>
                        </tr>
                        <tr className="border-b border-[var(--color-ivory)]">
                          <td className="py-2 text-[var(--color-ink-soft)]">Morning Slot</td>
                          <td className="py-2 text-right font-medium text-[var(--color-ink)]">9:00 AM – 3:30 PM</td>
                        </tr>
                        <tr>
                          <td className="py-2 text-[var(--color-ink-soft)]">Evening Slot</td>
                          <td className="py-2 text-right font-medium text-[var(--color-ink)]">5:00 PM – 12:00 AM</td>
                        </tr>
                      </tbody>
                    </table>
                    <p className="text-xs text-[var(--color-ink-faint)] mt-3">Open all 7 days</p>
                  </div>
                </div>
              </div>

              {/* Parking */}
              <div className="bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-soft)] p-6 sm:p-8">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: 'var(--color-gold)' }}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <rect x="1" y="3" width="15" height="13" rx="2" ry="2" />
                      <path d="M16 8h2a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-2" />
                      <circle cx="5.5" cy="18" r="2" />
                      <circle cx="18.5" cy="18" r="2" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-display text-lg font-bold text-[var(--color-ink)] mb-1">Parking</h3>
                    <p className="text-[var(--color-ink-soft)]">
                      On-site parking available for approximately 50 vehicles.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
