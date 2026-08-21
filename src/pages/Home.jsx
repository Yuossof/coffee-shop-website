import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Button from '../components/Button.jsx'
import Container from '../components/Container.jsx'
import ProductCard from '../components/ProductCard.jsx'
import { IconArrowRight, IconMapPin, IconStar } from '../components/Icons.jsx'

const IMAGE = 'https://api.builder.io/api/v1/image/assets/TEMP/'
const FAVORITES = [
  { image: `${IMAGE}c12038127af96632ed9135c79deefe363e821009?width=528`, name: 'Butter Croissant', description: 'Flaky, golden and made with European butter.', price: '4.50' },
  { image: `${IMAGE}09b9e31c18034d83946ec81875b884caa82a7b07?width=528`, name: 'Iced Latte', description: 'Smooth espresso layered with cold milk.', price: '5.50' },
  { image: `${IMAGE}38724c49d98de612cb400af71be48722b3a5c0bf?width=528`, name: 'Berry Danish', description: 'Laminated dough with seasonal berries.', price: '5.00' },
  { image: `${IMAGE}22737b70d859c9148306f7ed4ba269b4b2a41e87?width=528`, name: 'Sourdough Loaf', description: 'Slow-fermented for a rich, chewy crumb.', price: '8.00' },
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
  return <div id="top"><Navbar />
    <main>
      <section className="border-b border-line py-12 md:py-20"><Container className="grid items-center gap-10 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
        <div className="order-2 flex flex-col items-start gap-6 md:order-1"><p className="eyebrow">Independent coffee house / est. 2024</p><h1 className="max-w-xl text-5xl leading-[.98] tracking-[-2px] md:text-7xl">Coffee, baked slowly.</h1><p className="max-w-md text-base leading-7 text-ink-soft">A small, thoughtful corner for excellent coffee, long-fermented bread, and the quiet rituals that make a day feel considered.</p><div className="flex flex-wrap gap-3"><Button to="/menu" variant="primary">Explore the menu</Button><Button to="/story" variant="outline">Our approach <IconArrowRight /></Button></div><div className="flex items-center gap-3 border-t border-line pt-5"><IconStar width="16" height="16" /><span className="font-label text-xs tracking-[1px] text-ink-soft">Roasted weekly / baked daily / served warmly</span></div></div>
        <div className="order-1 md:order-2"><figure className="paper-frame aspect-[3/2]"><img src={`${IMAGE}d8b655d97a49cd5daa2d57af77fef0d04138230a?width=1104`} alt="Latte and croissant on a wooden table" className="h-full w-full object-cover" /><figcaption className="tape-note">morning ritual no. 01</figcaption></figure></div>
      </Container></section>

      <section className="py-16 md:py-24"><Container><div className="mb-10 flex flex-col justify-between gap-4 border-b border-line pb-5 md:flex-row md:items-end"><div><p className="eyebrow">The morning bake</p><h2 className="mt-2 text-4xl md:text-5xl">Fresh from the oven</h2></div><Countdown /></div><div className="grid gap-8 md:grid-cols-3"><div className="md:col-span-2"><div className="grid gap-5 sm:grid-cols-2">{['Mix & rest / 04:00', 'Shape & proof / 05:00', 'Bake & share / 06:00', 'Save one for later / always'].map((step, i) => <div key={step} className="border-l-2 border-oxblood pl-5 py-3"><span className="font-label text-xs text-oxblood">0{i + 1}</span><h3 className="mt-3 text-2xl">{step.split(' / ')[0]}</h3><p className="mt-2 text-sm leading-6 text-ink-soft">Time, temperature, and patience are the only shortcuts we take.</p></div>)}</div></div><aside className="border border-line bg-peach p-6 md:p-8"><p className="eyebrow">Today’s note</p><p className="mt-5 text-2xl leading-tight">The croissants are especially good before the city wakes up.</p><p className="mt-8 font-label text-xs text-ink-soft">— baker’s log / 08.21.26</p></aside></div></Container></section>

      <section className="border-y border-line bg-paper py-16 md:py-24"><Container><div className="grid gap-12 md:grid-cols-[.75fr_1.25fr] md:gap-24"><div><p className="eyebrow">A cup with a point of view</p><h2 className="mt-3 text-4xl leading-tight md:text-5xl">Trace the flavor back to the farm.</h2><p className="mt-6 max-w-sm text-sm leading-7 text-ink-soft">Our rotating coffee is selected for clarity and character, then brewed to let the place it came from speak.</p><a href="/story" className="mt-8 inline-flex items-center gap-2 font-label text-xs tracking-[1px] text-oxblood">Read the sourcing notes <IconArrowRight /></a></div><div className="grid grid-cols-2 border-t border-l border-line"><div className="origin-cell"><span className="eyebrow">Origin</span><strong>Huila, Colombia</strong></div><div className="origin-cell"><span className="eyebrow">Elevation</span><strong>1,700 masl</strong></div><div className="origin-cell"><span className="eyebrow">Process</span><strong>Washed</strong></div><div className="origin-cell"><span className="eyebrow">Notes</span><strong>Stone fruit / cacao</strong></div></div></div></Container></section>

      <section className="py-16 md:py-24"><Container><div className="mb-10 flex items-end justify-between border-b border-line pb-5"><div><p className="eyebrow">A considered pairing</p><h2 className="mt-2 text-4xl md:text-5xl">Brewed for the bite.</h2></div><span className="hidden font-label text-xs text-ink-soft sm:block">two good things / one quiet moment</span></div><div className="grid gap-6 md:grid-cols-4">{FAVORITES.map((item) => <ProductCard key={item.name} {...item} />)}</div></Container></section>

      <section className="pb-16 md:pb-24"><Container><div className="grid gap-5 md:grid-cols-12 md:grid-rows-2"><figure className="paper-frame md:col-span-7 md:row-span-2"><img src={`${IMAGE}e2b8f44aac46a6980a389d28a5d601515cc2cc26?width=1088`} alt="Baker working dough in the kitchen" className="h-full min-h-[360px] w-full object-cover" /><figcaption className="tape-note">hands at work</figcaption></figure><figure className="paper-frame md:col-span-5"><img src={`${IMAGE}38724c49d98de612cb400af71be48722b3a5c0bf?width=528`} alt="Berry danish on a plate" className="aspect-[4/3] w-full object-cover" /><figcaption className="photo-caption">seasonal / not forever</figcaption></figure><div className="flex items-end border border-line bg-peach p-7 md:col-span-5"><div><p className="eyebrow">Come as you are</p><h3 className="mt-3 text-3xl">A good place to pause.</h3><Button to="/visit" variant="outline-maroon" className="mt-6"><IconMapPin width="14" height="17" /> Find us</Button></div></div></div></Container></section>
    </main><Footer variant="home" /></div>
}
export default Home
