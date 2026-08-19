import { Link } from 'react-router-dom'

const BASE =
  'inline-flex items-center justify-center gap-2 rounded-full font-body text-sm font-semibold leading-5 tracking-[0.7px] text-center whitespace-nowrap transition-opacity hover:opacity-90'

const SIZES = {
  md: 'px-8 py-[18px]',
  sm: 'px-8 py-3',
}

const VARIANTS = {
  primary:
    'bg-maroon text-white shadow-[0_10px_15px_-3px_rgba(65,4,22,0.2),0_4px_6px_-4px_rgba(65,4,22,0.2)]',
  outline: 'bg-transparent text-heading-brown border-2 border-border-pink-30',
  'outline-maroon': 'bg-transparent text-maroon border-2 border-maroon',
  'outline-muted': 'bg-transparent text-muted-brown border-2 border-muted-brown',
  white: 'bg-white text-maroon',
  wine: 'bg-wine text-pink shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]',
}

function Button({
  as,
  to,
  href,
  variant = 'primary',
  size = 'md',
  className = '',
  children,
  ...rest
}) {
  const classes = `${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`.trim()

  if (to) {
    return (
      <Link to={to} className={classes} {...rest}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a href={href} className={classes} {...rest}>
        {children}
      </a>
    )
  }

  const Tag = as || 'button'
  return (
    <Tag className={classes} {...rest}>
      {children}
    </Tag>
  )
}

export default Button
