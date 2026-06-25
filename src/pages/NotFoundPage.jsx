import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Page Not Found — Hotel Sangeeth Grand</title>
      </Helmet>
      <section className="min-h-screen flex items-center justify-center px-4">
        <div className="text-center max-w-md">
          <span
            className="font-display text-8xl sm:text-9xl font-bold block mb-4"
            style={{ color: 'var(--color-gold)', opacity: 0.3 }}
          >
            404
          </span>
          <h1 className="font-display text-2xl sm:text-3xl font-bold text-[var(--color-ink)] mb-4">
            This Page Doesn't Exist
          </h1>
          <p className="text-[var(--color-ink-soft)] mb-8">
            The page you're looking for might have been moved or no longer exists.
            Let's get you back to planning your celebration.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link to="/" className="btn-primary text-sm">
              Back to Home
            </Link>
            <Link to="/availability" className="btn-outline text-sm">
              Check Event Availability
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
