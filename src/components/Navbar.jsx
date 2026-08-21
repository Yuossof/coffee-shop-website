import { NavLink } from 'react-router-dom'
import Button from './Button.jsx'
import Container from './Container.jsx'
import { IconBag } from './Icons.jsx'

const NAV_LINKS = [
  { to: '/menu', label: 'Menu' },
  { to: null, label: 'Gallery' },
  { to: '/story', label: 'Story' },
  { to: '/visit', label: 'Visit' },
]

function Navbar() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-line bg-cream/85 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between">
        <NavLink to="/" className="font-heading text-2xl font-semibold leading-8 text-maroon">
          Aura Coffee & Bakes
        </NavLink>

        <nav className="hidden items-center gap-6 md:flex">
          {NAV_LINKS.map((link) =>
            link.to ? (
              <NavLink
                key={link.label}
                to={link.to}
                className={({ isActive }) =>
                  `border-b-2 pb-1 text-sm font-semibold leading-5 tracking-[0.7px] ${
                    isActive
                      ? 'border-maroon font-bold text-maroon'
                      : 'border-transparent text-body-brown'
                  }`
                }
              >
                {link.label}
              </NavLink>
            ) : (
              <span
                key={link.label}
                className="border-b-2 border-transparent pb-1 text-sm font-semibold leading-5 tracking-[0.7px] text-body-brown"
              >
                {link.label}
              </span>
            ),
          )}
        </nav>

        <div className="flex items-center gap-2 md:gap-4">
          <button
            type="button"
            className="flex items-center justify-center rounded-full bg-transparent p-2 text-body-brown"
            aria-label="View cart"
          >
            <IconBag />
          </button>
          <Button variant="primary" size="sm" className="!px-4 !py-2 md:!px-6">
            Order Online
          </Button>
        </div>
      </Container>
    </header>
  )
}

export default Navbar
