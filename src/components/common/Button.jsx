import { Link } from 'react-router-dom';

export default function Button({ to, href, onClick, variant = 'primary', children, className = '', type = 'button', ...props }) {
  const baseClass = variant === 'primary' ? 'btn-primary' : 'btn-outline';
  const classes = `${baseClass} ${className}`.trim();

  if (to) {
    return (
      <Link to={to} className={classes} {...props}>
        {children}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={classes} target="_blank" rel="noopener noreferrer" {...props}>
        {children}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} className={classes} {...props}>
      {children}
    </button>
  );
}
