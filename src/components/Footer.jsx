import Container from './Container.jsx'

const headingClass = 'mb-6 text-sm font-bold leading-5 tracking-[0.7px] uppercase text-heading-brown'
const linkListClass = 'flex flex-col gap-4 text-base leading-6 text-body-brown'
const brandNameClass = 'mb-4 font-heading text-2xl font-semibold leading-8 text-maroon'
const taglineClass = 'max-w-[320px] text-base leading-6 text-body-brown'

function Footer({ variant = 'home' }) {
  if (variant === 'menu') {
    return (
      <footer className="bg-peach py-16">
        <Container className="grid grid-cols-1 gap-6 pb-10 sm:grid-cols-3">
          <div>
            <p className={brandNameClass}>Aura Coffee & Bakes</p>
            <p className={taglineClass}>
              © 2024 Aura Coffee & Bakes. Artisanal
              <br />
              moments, daily rituals.
            </p>
          </div>
          <ul className={linkListClass}>
            <li>Locations</li>
            <li>Careers</li>
          </ul>
          <ul className={linkListClass}>
            <li>Privacy Policy</li>
            <li>Instagram</li>
          </ul>
        </Container>
      </footer>
    )
  }

  if (variant === 'story') {
    return (
      <footer className="border-t border-border-pink-30 bg-peach py-16">
        <Container className="grid grid-cols-1 gap-6 pb-10 sm:grid-cols-3">
          <div>
            <p className={brandNameClass}>Aura</p>
            <p className={taglineClass}>
              © 2024 Aura Coffee & Bakes. Artisanal
              <br />
              moments, daily rituals.
            </p>
          </div>
          <div>
            <p className={headingClass}>Explore</p>
            <ul className={linkListClass}>
              <li>Locations</li>
              <li>Careers</li>
            </ul>
          </div>
          <div>
            <p className={headingClass}>Connect</p>
            <ul className={linkListClass}>
              <li>Instagram</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </Container>
      </footer>
    )
  }

  if (variant === 'visit') {
    return (
      <footer className="border-t border-border-pink-30 bg-peach py-16">
        <Container className="flex flex-col items-start justify-between gap-6 pb-6 sm:flex-row sm:items-start">
          <div>
            <p className={brandNameClass}>Aura Coffee & Bakes</p>
            <p className={taglineClass}>Artisanal moments, daily rituals.</p>
          </div>
          <ul className="flex flex-col items-start gap-3 text-base text-body-brown sm:items-end">
            <li>Locations</li>
            <li>Careers</li>
            <li>Privacy Policy</li>
            <li>Instagram</li>
          </ul>
        </Container>
        <Container className="flex flex-col items-start justify-between gap-2 border-t border-border-pink-30 pt-8 text-base text-body-brown sm:flex-row sm:items-center">
          <p>© 2024 Aura Coffee & Bakes. All rights reserved.</p>
          <a href="#top" className="text-body-brown">
            Back to top ↑
          </a>
        </Container>
      </footer>
    )
  }

  return (
    <footer className="w-full bg-dark-bg py-14 text-paper">
      <Container className="grid grid-cols-1 gap-10 pb-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
        <div>
          <p className="mb-4 font-heading text-2xl font-semibold leading-8 text-paper">Aura Coffee & Bakes</p>
          <p className="max-w-[320px] text-base leading-6 text-paper/75">Artisanal moments, daily rituals. A quiet corner for exceptional coffee and hand-crafted pastries.</p>
          <a href="#social" aria-label="Social" className="mt-6 inline-flex h-10 w-10 items-center justify-center rounded-full border border-paper/25 font-semibold text-paper">@</a>
        </div>
        <div><p className="mb-6 font-label text-xs uppercase tracking-[1px] text-gold">Explore</p><ul className="flex flex-col gap-4 text-base leading-6 text-paper/85"><li>Menu</li><li>Our Story</li><li>Gallery</li></ul></div>
        <div><p className="mb-6 font-label text-xs uppercase tracking-[1px] text-gold">Visit Us</p><ul className="flex flex-col gap-4 text-base leading-6 text-paper/85"><li>Locations</li><li>Contact</li><li>Careers</li></ul></div>
        <div><p className="mb-6 font-label text-xs uppercase tracking-[1px] text-gold">Today</p><p className="flex items-center gap-2 text-base text-paper"><span className="status-dot" aria-hidden="true" /> Open until 4 PM</p><p className="mt-3 text-sm leading-6 text-paper/65">Mon – Fri / 7:00 AM – 4:00 PM</p></div>
      </Container>
      <Container className="flex flex-col items-start justify-between gap-2 border-t border-paper/20 pt-8 text-sm text-paper/65 sm:flex-row sm:items-center"><p>© 2024 Aura Coffee & Bakes. Artisanal moments, daily rituals.</p><a href="#top" className="text-paper/75">Back to top ↑</a></Container>
    </footer>
  )
}

export default Footer
