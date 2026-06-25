export default function Skeleton({ width = '100%', height = '200px', className = '' }) {
  return (
    <div
      className={`animate-pulse rounded-[var(--radius-card)] ${className}`}
      style={{
        width,
        height,
        background: 'linear-gradient(90deg, var(--color-ivory) 25%, #f0ead9 50%, var(--color-ivory) 75%)',
        backgroundSize: '200% 100%',
      }}
      aria-hidden="true"
    />
  );
}
