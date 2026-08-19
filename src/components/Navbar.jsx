import { NavLink } from 'react-router-dom'
import Button from './Button.jsx'
import Container from './Container.jsx'
import { IconBag } from './Icons.jsx'
const NAV_LINKS = [{to:'/menu',label:'Menu'},{to:null,label:'Gallery'},{to:'/story',label:'Story'},{to:'/visit',label:'Visit'}]
function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-cream/95 backdrop-blur-sm">
      <Container className="flex min-h-[82px] items-center justify-between gap-5">
        <NavLink to="/" aria-label="Aura Coffee and Bakes home" className="group flex items-center gap-3 text-maroon">
          <span className="flex size-10 items-center justify-center border border-maroon font-heading text-xl font-semibold leading-none transition-colors group-hover:bg-maroon group-hover:text-paper">A</span>
          <span className="flex flex-col leading-none">
            <span className="font-heading text-[21px] font-semibold tracking-[-.4px] md:text-2xl">Aura</span>
            <span className="mt-1 font-body text-[10px] font-semibold uppercase tracking-[1.4px] text-ink-soft">Coffee &amp; Bakes</span>
          </span>
        </NavLink>

        <nav aria-label="Main navigation" className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) => link.to ? (
            <NavLink key={link.label} to={link.to} className={({ isActive }) => `relative py-2 font-body text-[13px] font-semibold tracking-[.2px] ${isActive ? 'text-maroon after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gold' : 'text-body-brown hover:text-maroon'}`}>
              {link.label}
            </NavLink>
          ) : (
            <span key={link.label} className="cursor-default py-2 font-body text-[13px] font-semibold tracking-[.2px] text-faint-brown">{link.label}</span>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button type="button" aria-label="View cart" className="flex size-10 items-center justify-center border border-line text-body-brown hover:border-maroon hover:text-maroon"><IconBag /></button>
          <Button variant="primary" size="sm" className="hidden sm:inline-flex">Order Online</Button>
        </div>
      </Container>
    </header>
  )
}
export default Navbar
