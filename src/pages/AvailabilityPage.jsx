import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import SectionDivider from '../components/common/SectionDivider';

const eventTypes = [
  { value: '', label: 'Select event type' },
  { value: 'wedding-reception', label: 'Wedding / Reception' },
  { value: 'engagement-sangeet', label: 'Engagement / Sangeet / Mehndi' },
  { value: 'birthday-anniversary', label: 'Birthday / Anniversary' },
  { value: 'naming-ceremony', label: 'Naming Ceremony / Baby Shower' },
  { value: 'corporate', label: 'Corporate Get-Together' },
];

const decorThemes = [
  { value: '', label: 'No preference' },
  { value: 'traditional', label: 'Traditional / Mandap' },
  { value: 'modern', label: 'Modern Minimalist' },
  { value: 'floral', label: 'Floral Garden' },
  { value: 'royal', label: 'Royal & Regal' },
  { value: 'custom', label: 'Custom — I have ideas' },
];

export default function AvailabilityPage() {
  const [formData, setFormData] = useState({
    eventType: '',
    guestCount: 170,
    preferredDate: '',
    preferredSlot: '',
    decorTheme: '',
    name: '',
    phone: '',
    email: '',
  });

  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const guestLabel = formData.guestCount <= 170
    ? `Intimate · up to 170 seated`
    : `Grand · up to ${formData.guestCount} floating`;

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
    if (errors[field]) {
      setErrors((prev) => ({ ...prev, [field]: '' }));
    }
  };

  const handleSliderChange = (e) => {
    setFormData((prev) => ({ ...prev, guestCount: parseInt(e.target.value, 10) }));
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.eventType) newErrors.eventType = 'Please select an event type';
    if (!formData.preferredDate) newErrors.preferredDate = 'Please select a date';
    if (!formData.preferredSlot) newErrors.preferredSlot = 'Please select a time slot';
    if (!formData.name.trim()) newErrors.name = 'Please enter your name';
    if (!formData.phone.trim()) newErrors.phone = 'Please enter your phone number';
    else if (!/^[6-9]\d{9}$/.test(formData.phone.replace(/\s/g, '')))
      newErrors.phone = 'Please enter a valid 10-digit mobile number';
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validate();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <>
        <Helmet>
          <title>Enquiry Received — Hotel Sangeeth Grand</title>
        </Helmet>
        <section className="pt-28 sm:pt-36 pb-24 min-h-screen flex items-center">
          <div className="max-w-lg mx-auto px-4 sm:px-6 text-center">
            {/* Success icon */}
            <div className="w-20 h-20 mx-auto mb-6 rounded-full flex items-center justify-center" style={{ backgroundColor: 'var(--color-gold)' }}>
              <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>

            <h1 className="font-display text-3xl sm:text-4xl font-bold text-[var(--color-ink)] mb-4">
              We Have Your Details
            </h1>
            <p className="text-[var(--color-ink-soft)] leading-relaxed mb-8">
              Our event manager will call you within 2 hours to discuss your{' '}
              <strong className="text-[var(--color-ink)]">
                {eventTypes.find((t) => t.value === formData.eventType)?.label}
              </strong>{' '}
              on your preferred date. If you need to reach us sooner:
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-6">
              <a
                href="tel:+918106774567"
                className="btn-primary text-sm px-8 py-3.5 flex items-center gap-2 w-full sm:w-auto justify-center"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/>
                </svg>
                Call Now — 081067 74567
              </a>

              <a
                href="https://wa.me/918106774567?text=Hi%2C%20I%20just%20submitted%20an%20enquiry%20for%20an%20event%20at%20Sangeeth%20Grand."
                target="_blank"
                rel="noopener noreferrer"
                className="btn-outline text-sm px-8 py-3.5 flex items-center gap-2 w-full sm:w-auto justify-center"
                style={{ color: '#25D366', borderColor: '#25D366' }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>

            <div className="mt-8 p-6 bg-white rounded-[var(--radius-card)] shadow-[var(--shadow-soft)] text-left">
              <h3 className="font-display text-sm font-semibold uppercase tracking-wider text-[var(--color-gold)] mb-3">Your Enquiry Summary</h3>
              <dl className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <dt className="text-[var(--color-ink-soft)]">Event</dt>
                  <dd className="font-medium text-[var(--color-ink)]">
                    {eventTypes.find((t) => t.value === formData.eventType)?.label}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[var(--color-ink-soft)]">Guests</dt>
                  <dd className="font-medium text-[var(--color-ink)]">{formData.guestCount}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[var(--color-ink-soft)]">Date</dt>
                  <dd className="font-medium text-[var(--color-ink)]">{formData.preferredDate}</dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[var(--color-ink-soft)]">Slot</dt>
                  <dd className="font-medium text-[var(--color-ink)]">
                    {formData.preferredSlot === 'morning' ? 'Morning (9 AM – 3:30 PM)' : 'Evening (5 PM – 12 AM)'}
                  </dd>
                </div>
                <div className="flex justify-between">
                  <dt className="text-[var(--color-ink-soft)]">Contact</dt>
                  <dd className="font-medium text-[var(--color-ink)]">{formData.name} — {formData.phone}</dd>
                </div>
              </dl>
            </div>
          </div>
        </section>
      </>
    );
  }

  return (
    <>
      <Helmet>
        <title>Check Event Availability — Hotel Sangeeth Grand</title>
        <meta name="description" content="Check availability for your celebration at Hotel Sangeeth Grand. Share your event details and our team will respond within 2 hours." />
      </Helmet>

      {/* Page Header */}
      <section className="pt-28 sm:pt-36 pb-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <p className="eyebrow mb-3">Book Your Celebration</p>
          <h1 className="font-display text-4xl sm:text-5xl font-bold text-[var(--color-ink)] mb-4">
            Check Event{' '}
            <span className="font-script italic" style={{ color: 'var(--color-gold)' }}>Availability</span>
          </h1>
          <p className="text-[var(--color-ink-soft)] max-w-xl mx-auto">
            Share your event details below. Our event manager will call you within
            2 hours with a personalised proposal.
          </p>
        </div>
      </section>

      <SectionDivider />

      {/* Form */}
      <section className="py-8 sm:py-12 pb-24">
        <div className="max-w-2xl mx-auto px-4 sm:px-6">
          <form onSubmit={handleSubmit} noValidate className="space-y-8">
            {/* Event Type */}
            <div>
              <label htmlFor="eventType" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
                Event Type <span className="text-[var(--color-maroon)]">*</span>
              </label>
              <select
                id="eventType"
                value={formData.eventType}
                onChange={handleChange('eventType')}
                className={`w-full px-4 py-3 bg-white border rounded-[var(--radius-card)] text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] transition-all ${
                  errors.eventType ? 'border-[var(--color-maroon)]' : 'border-[var(--color-ink-faint)]/30'
                }`}
                aria-describedby={errors.eventType ? 'eventType-error' : undefined}
              >
                {eventTypes.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
              {errors.eventType && (
                <p id="eventType-error" className="text-sm text-[var(--color-maroon)] mt-1">{errors.eventType}</p>
              )}
            </div>

            {/* Guest Count Slider */}
            <div>
              <label htmlFor="guestCount" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
                Expected Guests
              </label>
              <div className="flex items-center justify-between mb-2">
                <span className="text-2xl font-display font-bold" style={{ color: 'var(--color-gold)' }}>
                  {formData.guestCount}
                </span>
                <span className="text-sm font-medium px-3 py-1 rounded-full bg-[var(--color-ivory)] text-[var(--color-ink-soft)]">
                  {guestLabel}
                </span>
              </div>
              <input
                id="guestCount"
                type="range"
                min="50"
                max="450"
                step="10"
                value={formData.guestCount}
                onChange={handleSliderChange}
                className="w-full h-2 rounded-full appearance-none cursor-pointer"
                style={{
                  background: `linear-gradient(to right, var(--color-gold) 0%, var(--color-gold) ${((formData.guestCount - 50) / 400) * 100}%, #e5e1d8 ${((formData.guestCount - 50) / 400) * 100}%, #e5e1d8 100%)`,
                }}
              />
              <div className="flex justify-between text-xs text-[var(--color-ink-faint)] mt-1">
                <span>50</span>
                <span>170 (seated max)</span>
                <span>450</span>
              </div>
            </div>

            {/* Date and Slot */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label htmlFor="preferredDate" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
                  Preferred Date <span className="text-[var(--color-maroon)]">*</span>
                </label>
                <input
                  id="preferredDate"
                  type="date"
                  value={formData.preferredDate}
                  onChange={handleChange('preferredDate')}
                  min={new Date().toISOString().split('T')[0]}
                  className={`w-full px-4 py-3 bg-white border rounded-[var(--radius-card)] text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] transition-all ${
                    errors.preferredDate ? 'border-[var(--color-maroon)]' : 'border-[var(--color-ink-faint)]/30'
                  }`}
                  aria-describedby={errors.preferredDate ? 'date-error' : undefined}
                />
                {errors.preferredDate && (
                  <p id="date-error" className="text-sm text-[var(--color-maroon)] mt-1">{errors.preferredDate}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-[var(--color-ink)] mb-2">
                  Preferred Slot <span className="text-[var(--color-maroon)]">*</span>
                </label>
                <div className="flex gap-3">
                  {[
                    { value: 'morning', label: 'Morning', time: '9 AM – 3:30 PM' },
                    { value: 'evening', label: 'Evening', time: '5 PM – 12 AM' },
                  ].map((slot) => (
                    <label
                      key={slot.value}
                      className={`flex-1 cursor-pointer border rounded-[var(--radius-card)] p-3 text-center transition-all ${
                        formData.preferredSlot === slot.value
                          ? 'border-[var(--color-gold)] bg-[var(--color-gold)]/5 ring-2 ring-[var(--color-gold)]'
                          : errors.preferredSlot
                            ? 'border-[var(--color-maroon)]'
                            : 'border-[var(--color-ink-faint)]/30 hover:border-[var(--color-gold)]/50'
                      }`}
                    >
                      <input
                        type="radio"
                        name="preferredSlot"
                        value={slot.value}
                        checked={formData.preferredSlot === slot.value}
                        onChange={handleChange('preferredSlot')}
                        className="sr-only"
                      />
                      <span className="block text-sm font-medium text-[var(--color-ink)]">{slot.label}</span>
                      <span className="block text-xs text-[var(--color-ink-soft)] mt-0.5">{slot.time}</span>
                    </label>
                  ))}
                </div>
                {errors.preferredSlot && (
                  <p className="text-sm text-[var(--color-maroon)] mt-1">{errors.preferredSlot}</p>
                )}
              </div>
            </div>

            {/* Decor Theme */}
            <div>
              <label htmlFor="decorTheme" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
                Décor Theme Interest <span className="text-[var(--color-ink-soft)]">(optional)</span>
              </label>
              <select
                id="decorTheme"
                value={formData.decorTheme}
                onChange={handleChange('decorTheme')}
                className="w-full px-4 py-3 bg-white border border-[var(--color-ink-faint)]/30 rounded-[var(--radius-card)] text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] transition-all"
              >
                {decorThemes.map((t) => (
                  <option key={t.value} value={t.value}>{t.label}</option>
                ))}
              </select>
            </div>

            {/* Contact Details */}
            <div className="space-y-6">
              <h3 className="font-display text-lg font-semibold text-[var(--color-ink)] border-b border-[var(--color-ivory)] pb-2">
                Contact Details
              </h3>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
                  Your Name <span className="text-[var(--color-maroon)]">*</span>
                </label>
                <input
                  id="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange('name')}
                  placeholder="Full name"
                  className={`w-full px-4 py-3 bg-white border rounded-[var(--radius-card)] text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] transition-all ${
                    errors.name ? 'border-[var(--color-maroon)]' : 'border-[var(--color-ink-faint)]/30'
                  }`}
                  aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                  <p id="name-error" className="text-sm text-[var(--color-maroon)] mt-1">{errors.name}</p>
                )}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
                    Phone <span className="text-[var(--color-maroon)]">*</span>
                  </label>
                  <input
                    id="phone"
                    type="tel"
                    value={formData.phone}
                    onChange={handleChange('phone')}
                    placeholder="10-digit mobile"
                    className={`w-full px-4 py-3 bg-white border rounded-[var(--radius-card)] text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] transition-all ${
                      errors.phone ? 'border-[var(--color-maroon)]' : 'border-[var(--color-ink-faint)]/30'
                    }`}
                    aria-describedby={errors.phone ? 'phone-error' : undefined}
                  />
                  {errors.phone && (
                    <p id="phone-error" className="text-sm text-[var(--color-maroon)] mt-1">{errors.phone}</p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-[var(--color-ink)] mb-2">
                    Email <span className="text-[var(--color-ink-soft)]">(optional)</span>
                  </label>
                  <input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange('email')}
                    placeholder="your@email.com"
                    className="w-full px-4 py-3 bg-white border border-[var(--color-ink-faint)]/30 rounded-[var(--radius-card)] text-[var(--color-ink)] focus:outline-none focus:ring-2 focus:ring-[var(--color-gold)] transition-all"
                  />
                </div>
              </div>
            </div>

            {/* Submit */}
            <button type="submit" className="btn-primary w-full py-4 text-sm">
              Check Event Availability
            </button>

            <p className="text-xs text-center text-[var(--color-ink-faint)]">
              Our event manager will call you within 2 hours. You can also reach us at{' '}
              <a href="tel:+918106774567" className="underline hover:text-[var(--color-gold)]">081067 74567</a>.
            </p>
          </form>
        </div>
      </section>
    </>
  );
}
