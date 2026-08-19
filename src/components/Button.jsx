import { Link } from 'react-router-dom'

const BASE = 'inline-flex items-center justify-center gap-2 border font-label text-xs uppercase tracking-[1px] text-center whitespace-nowrap transition-transform hover:-translate-y-0.5 active:translate-x-0.5 active:translate-y-0.5'
const SIZES = { md: 'px-7 py-4', sm: 'px-5 py-3' }
const VARIANTS = {
  primary: 'border-maroon bg-maroon text-cream',
  outline: 'border-ink text-ink bg-transparent hover:bg-peach-2',
  'outline-maroon': 'border-maroon text-maroon bg-transparent hover:bg-peach-2',
  'outline-muted': 'border-muted-brown text-muted-brown bg-transparent hover:bg-peach-2',
  white: 'border-cream bg-cream text-maroon',
  wine: 'border-wine bg-wine text-cream',
}
function Button({ as, to, href, variant='primary', size='md', className='', children, ...rest }) {
  const classes = `${BASE} ${SIZES[size]} ${VARIANTS[variant]} ${className}`.trim()
  if (to) return <Link to={to} className={classes} {...rest}>{children}</Link>
  if (href) return <a href={href} className={classes} {...rest}>{children}</a>
  const Tag = as || 'button'
  return <Tag className={classes} {...rest}>{children}</Tag>
}
export default Button
