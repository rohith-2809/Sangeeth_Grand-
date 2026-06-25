export default function LazyImage({ src, alt, width, height, eager = false, className = '' }) {
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchpriority={eager ? 'high' : 'auto'}
      className={className}
      style={{ aspectRatio: `${width}/${height}` }}
    />
  );
}
