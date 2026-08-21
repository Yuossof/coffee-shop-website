import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Button from '../components/Button.jsx'
import Container from '../components/Container.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { IconArrowRight, IconClock, IconMapPin, IconPhone, IconMail, IconStar } from '../components/Icons.jsx'

const FAVORITES = [
  { image: '/products-images/758563810_1561265132124561_7349670818616789488_n.jpg', name: 'Cappuccino', description: 'Rich espresso with smooth, velvety milk foam.', price: '4.50' },
  { image: '/products-images/759803439_1690906438631563_4897231595135180928_n.jpg', name: 'Iced Latte', description: 'Cold milk layered with bold espresso over ice.', price: '5.50' },
  { image: '/products-images/762432904_1396707635664420_4847625956536449615_n.jpg', name: 'Berry Cheesecake', description: 'Creamy cheesecake finished with a bright berry glaze.', price: '6.50' },
  { image: '/products-images/763895415_1754294809051162_2512378981006329488_n.jpg', name: 'Toasted Sandwich', description: 'Golden toasted bread served with crisp fries and dip.', price: '8.00' },
]

function Countdown() {
  const [left, setLeft] = useState(0)
  useEffect(() => {
    const tick = () => { const now = new Date(); const next = new Date(now); next.setHours(6, 0, 0, 0); if (next <= now) next.setDate(next.getDate() + 1); setLeft(next - now) }
    tick(); const timer = setInterval(tick, 1000); return () => clearInterval(timer)
  }, [])
  const hours = String(Math.floor(left / 3600000)).padStart(2, '0')
  const minutes = String(Math.floor((left % 3600000) / 60000)).padStart(2, '0')
  const seconds = String(Math.floor((left % 60000) / 1000)).padStart(2, '0')
  return <span className="font-label text-xs tracking-[1px] text-oxblood">Next bake in {hours}:{minutes}:{seconds}</span>
}

function Home() {
  return <div id="top"><Navbar /><main>
    <section className="grain-section w-full border-b border-line py-12 md:py-20"><Container className="grid items-center gap-10 md:grid-cols-[.9fr_1.1fr] md:gap-20">
      <div className="order-2 flex flex-col items-start gap-6 md:order-1"><p className="eyebrow">Independent coffee house / est. 2024</p><h1 className="max-w-xl text-5xl leading-[.98] tracking-[-2px] md:text-7xl">Coffee, baked slowly.</h1><p className="max-w-md text-base leading-7 text-ink-soft">A small, thoughtful corner for excellent coffee, long-fermented bread, and quiet rituals that make a day feel considered.</p><div className="flex flex-wrap gap-3"><Button to="/menu" variant="primary">View Menu</Button><Button to="/visit" variant="outline">Visit Us <IconArrowRight /></Button></div><div className="flex items-center gap-3 border-t border-line pt-5"><IconStar width="16" height="16" /><span className="font-label text-xs tracking-[1px] text-ink-soft">Roasted weekly / baked daily / served warmly</span></div></div>
      <figure className="paper-frame order-1 aspect-[3/2] md:order-2"><img src="/758896653_1043148961538718_9002362523386391879_n.jpg" alt="Latte and croissant on a wooden table" className="h-full w-full object-cover" /><figcaption className="tape-note">morning ritual no. 01</figcaption></figure>
    </Container></section>

    <section className="grain-section w-full bg-oxblood py-5 text-paper"><Container className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between"><div className="flex flex-wrap items-center gap-x-8 gap-y-2"><span className="eyebrow text-gold">Fresh oven schedule</span><span className="font-label text-xs tracking-[1px] text-paper">Mix 04:00</span><span className="font-label text-xs tracking-[1px] text-paper">Proof 05:00</span><span className="font-label text-xs tracking-[1px] text-paper">Bake 06:00</span></div><div className="flex items-center gap-3"><span className="status-dot" aria-hidden="true" /> <span className="font-label text-xs tracking-[1px] text-paper">Roaster online</span><Countdown /></div></Container></section>

    <section className="grain-section w-full py-16 md:py-24"><Container><div className="mb-10 flex flex-col justify-between gap-4 border-b border-line pb-5 md:flex-row md:items-end"><div><p className="eyebrow">Menu & specialty offerings</p><h2 className="mt-2 text-4xl md:text-5xl">Made for the morning.</h2></div><Button to="/menu" variant="outline-maroon" size="sm">See full menu <IconArrowRight /></Button></div><div className="grid gap-6 md:grid-cols-4">{FAVORITES.map((item) => <ProductCard key={item.name} {...item} />)}</div></Container></section>

    <section className="grain-section w-full border-y border-line bg-paper py-16 md:py-24"><Container className="grid items-center gap-10 md:grid-cols-[1fr_1.15fr] md:gap-20"><div><p className="eyebrow">Barista pairings</p><h2 className="mt-3 text-4xl leading-tight md:text-5xl">Brewed for the bite.</h2><p className="mt-6 max-w-md text-base leading-7 text-ink-soft">Our baristas pair each week&apos;s coffee with something warm from the oven: bright fruit, dark chocolate, or the unmistakable comfort of sourdough.</p><a href="/story" className="mt-8 inline-flex items-center gap-2 font-label text-xs tracking-[1px] text-oxblood">Read our story <IconArrowRight /></a></div><div className="grid grid-cols-2 gap-4"><figure className="paper-frame"><img src="/products-images/759803439_1690906438631563_4897231595135180928_n.jpg" alt="Iced latte with layered milk" className="aspect-square w-full object-cover" /><figcaption className="photo-caption">cold latte / bright fruit</figcaption></figure><figure className="paper-frame mt-10"><img src="/products-images/762432904_1396707635664420_4847625956536449615_n.jpg" alt="Berry cheesecake with fruit glaze" className="aspect-square w-full object-cover" /><figcaption className="photo-caption">berry cake / dark roast</figcaption></figure></div></Container></section>

    <section className="grain-section w-full bg-dark-bg py-16 text-paper md:py-24"><Container className="grid gap-10 md:grid-cols-[.8fr_1.2fr] md:gap-20"><div><p className="eyebrow !text-gold">Visit us & hours</p><h2 className="mt-3 text-4xl leading-tight !text-paper md:text-5xl">A good place to pause.</h2><p className="mt-6 max-w-md text-base leading-7 text-paper/80">Find us in the artisan district, where the first bake comes out before the city gets loud.</p><Button to="/visit" variant="white" className="mt-8"><IconMapPin width="15" height="17" /> Get directions</Button></div><div className="grid gap-6 sm:grid-cols-2"><div className="dark-info-card"><IconMapPin className="text-gold" /><p className="dark-label">Address</p><p className="text-paper">128 Artisan Way<br />Suite 100<br />Portland, OR 97205</p></div><div className="dark-info-card"><IconClock className="text-gold" /><p className="dark-label">Hours</p><p className="text-paper">Mon – Fri / 7–4<br />Saturday / 8–5<br />Sunday / Rest</p></div><div className="dark-info-card"><IconPhone className="text-gold" /><p className="dark-label">Call</p><p className="text-paper">(505) 555-0199</p></div><div className="dark-info-card"><IconMail className="text-gold" /><p className="dark-label">Email</p><p className="text-paper">hello@aurabakes.com</p></div></div></Container></section>
  </main><Footer variant="home" /></div>
}
export default Home
