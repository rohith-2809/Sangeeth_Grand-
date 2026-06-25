import { Helmet } from 'react-helmet-async';
import Hero from '../components/home/Hero';
import TrustStrip from '../components/home/TrustStrip';
import SignatureSpaces from '../components/home/SignatureSpaces';
import OccasionsPreview from '../components/home/OccasionsPreview';
import TestimonialCarousel from '../components/home/TestimonialCarousel';
import CTABanner from '../components/home/CTABanner';

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>Hotel Sangeeth Grand — Premium Celebrations Venue, Hyderabad</title>
        <meta name="description" content="Host your wedding, reception, engagement, birthday, or corporate event at Hotel Sangeeth Grand — a premium banquet venue in Hastinapuram, Hyderabad with in-house catering, curated décor, and capacity for up to 450 guests." />
      </Helmet>
      <Hero />
      <TrustStrip />
      <SignatureSpaces />
      <OccasionsPreview />
      <TestimonialCarousel />
      <CTABanner />
    </>
  );
}
