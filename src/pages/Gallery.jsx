import { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Container from '../components/Container.jsx'

const IMAGE = 'https://api.builder.io/api/v1/image/assets/TEMP/'
const FILTERS = ['All', 'Atmosphere & Vibe', 'Coffee Craft', 'Fresh Bakes', 'Behind The Scenes']
const PHOTOS = [
  { id: 1, category: 'Atmosphere & Vibe', image: `${IMAGE}d8b655d97a49cd5daa2d57af77fef0d04138230a?width=1104`, title: 'Morning ritual', meta: 'Front room / 7:12 AM', caption: 'The first light finds the pastry case.', shape: 'hero' },
  { id: 2, category: 'Fresh Bakes', image: `${IMAGE}c12038127af96632ed9135c79deefe363e821009?width=528`, title: 'Butter, folded', meta: 'Bakehouse / 5:40 AM', caption: 'Croissant layers, before the rush.', shape: 'polaroid' },
  { id: 3, category: 'Coffee Craft', image: `${IMAGE}09b9e31c18034d83946ec81875b884caa82a7b07?width=528`, title: 'A slow pour', meta: 'Espresso bar / 8:30 AM', caption: 'Cold milk, bright espresso, clear intent.', shape: 'tall' },
  { id: 4, category: 'Fresh Bakes', image: `${IMAGE}38724c49d98de612cb400af71be48722b3a5c0bf?width=528`, title: 'Berry season', meta: 'Pastry bench / 6:05 AM', caption: 'A little sweetness from the market.', shape: 'standard' },
  { id: 5, category: 'Behind The Scenes', image: `${IMAGE}a00c83392117d07009b07c83a77ae4eca06a7149?width=1520`, title: 'Time is an ingredient', meta: 'Bakehouse / day 02', caption: 'Dough resting into something worth waiting for.', shape: 'wide' },
  { id: 6, category: 'Coffee Craft', image: `${IMAGE}c5129ea562dac57bc67501525aa9f29fea84dfed?width=736`, title: 'The bar at work', meta: 'Espresso bar / 9:18 AM', caption: 'Steam, crema, and the hum of a busy room.', shape: 'standard' },
  { id: 7, category: 'Behind The Scenes', image: `${IMAGE}88a0a501a65538ddadb8a797d09aba3cb52c95e4?width=1088`, title: 'Hands behind the bake', meta: 'Community / 10:22 AM', caption: 'Every loaf carries a little of its maker.', shape: 'polaroid' },
]

function Gallery() {
  const [filter, setFilter] = useState('All')
  const [selected, setSelected] = useState(null)
  const photos = filter === 'All' ? PHOTOS : PHOTOS.filter((photo) => photo.category === filter)

  useEffect(() => {
    if (!selected) return undefined
    const onKeyDown = (event) => { if (event.key === 'Escape') setSelected(null) }
    document.addEventListener('keydown', onKeyDown)
    document.body.style.overflow = 'hidden'
    return () => { document.removeEventListener('keydown', onKeyDown); document.body.style.overflow = '' }
  }, [selected])

  return <div className="grain-section min-h-screen"><Navbar /><main>
    <Container as="header" className="flex flex-col gap-7 border-b border-line py-14 md:py-20">
      <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end"><div><p className="eyebrow">Espresso bar vol. 01</p><h1 className="mt-3 max-w-3xl text-5xl leading-[.98] tracking-[-2px] md:text-7xl">A room made of rituals.</h1></div><p className="max-w-xs text-sm leading-6 text-ink-soft">A visual notebook from our morning bake, the people behind it, and the quiet details that make Aura feel like home.</p></div>
      <div className="flex flex-wrap gap-2" role="tablist" aria-label="Gallery categories">{FILTERS.map((item) => <button key={item} type="button" role="tab" aria-selected={filter === item} onClick={() => setFilter(item)} className={`rounded-full border px-4 py-2 font-label text-[10px] tracking-[.7px] transition ${filter === item ? 'border-oxblood bg-oxblood text-paper' : 'border-line bg-paper text-ink-soft hover:-translate-y-0.5 hover:border-oxblood hover:text-oxblood'}`}>{item}</button>)}</div>
    </Container>

    <Container as="section" className="py-10 md:py-16" aria-label="Photo gallery"><div className="grid grid-cols-1 gap-x-6 gap-y-12 md:grid-cols-3 md:gap-y-16">{photos.map((photo, index) => <button key={photo.id} type="button" onClick={() => setSelected(photo)} className={`group text-left ${photo.shape === 'hero' || photo.shape === 'wide' ? 'md:col-span-2' : ''} ${photo.shape === 'tall' ? 'md:row-span-2' : ''} ${index % 3 === 1 ? 'md:mt-8' : ''}`} aria-label={`Open ${photo.title} photo`}><figure className={`paper-frame overflow-visible transition duration-300 group-hover:-translate-y-1 ${photo.shape === 'polaroid' ? 'bg-paper p-3 pb-8' : ''}`}><div className={`relative overflow-hidden ${photo.shape === 'hero' || photo.shape === 'wide' ? 'aspect-[4/3]' : photo.shape === 'tall' ? 'aspect-[3/4]' : 'aspect-square'}`}><img src={photo.image} alt={photo.caption} className="h-full w-full object-cover transition duration-500 group-hover:scale-[1.03]" /><div className="absolute inset-0 bg-oxblood/0 transition group-hover:bg-oxblood/10" /><span className="absolute bottom-3 left-3 translate-y-2 rounded-full bg-paper/95 px-3 py-1 font-label text-[10px] tracking-[.7px] text-oxblood opacity-0 transition group-hover:translate-y-0 group-hover:opacity-100">{photo.title} — {photo.meta.split(' / ')[1]}</span></div><figcaption className="photo-caption flex flex-col gap-1"><span>{photo.caption}</span><span className="text-[9px] text-muted-brown">{photo.meta}</span></figcaption>{photo.shape === 'polaroid' && <span className="tape-note">field note / {String(photo.id).padStart(2, '0')}</span>}</figure></button>)}</div></Container>
  </main><Footer variant="home" />
  {selected && <div className="fixed inset-0 z-[60] flex items-center justify-center bg-dark-bg/95 p-4 md:p-10" role="dialog" aria-modal="true" aria-label={selected.title} onClick={() => setSelected(null)}><div className="relative flex max-h-full max-w-5xl flex-col gap-5" onClick={(event) => event.stopPropagation()}><button type="button" onClick={() => setSelected(null)} className="absolute right-0 top-0 z-10 rounded-full border border-paper/30 bg-dark-bg/70 px-3 py-2 font-label text-xs tracking-[1px] text-paper" aria-label="Close gallery image">Close</button><img src={selected.image} alt={selected.caption} className="max-h-[72vh] w-auto max-w-full object-contain" /><div className="flex flex-col gap-2 border-t border-paper/25 pt-4 text-paper"><p className="font-heading text-2xl">{selected.title}</p><p className="font-label text-xs tracking-[1px] text-gold">{selected.meta}</p><p className="text-sm text-paper/70">{selected.caption}</p></div></div></div>}
  </div>
}

export default Gallery
