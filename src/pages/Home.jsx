import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Button from '../components/Button.jsx'
import Container from '../components/Container.jsx'
import SectionIntro from '../components/SectionIntro.jsx'
import ProductCard from '../components/ProductCard.jsx'
import StatCard from '../components/StatCard.jsx'
import {
  IconPeople,
  IconStar,
  IconWheat,
  IconLocationRibbon,
  IconArrowRight,
  IconMapPin,
} from '../components/Icons.jsx'

const FAVORITES = [
  {
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/c12038127af96632ed9135c79deefe363e821009?width=528',
    name: 'Butter Croissant',
    description: 'Flaky, golden and made with real, high-quality European butter.',
    price: '4.50',
  },
  {
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/09b9e31c18034d83946ec81875b884caa82a7b07?width=528',
    name: 'Iced Latte',
    description: 'Smooth artisanal espresso layered with cold milk, poured over ice.',
    price: '5.50',
  },
  {
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/38724c49d98de612cb400af71be48722b3a5c0bf?width=528',
    name: 'Berry Danish',
    description: 'Buttery laminated dough encasing seasonal mixed berries and vanilla…',
    price: '5.00',
  },
  {
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/22737b70d859c9148306f7ed4ba269b4b2a41e87?width=528',
    name: 'Sourdough Loaf',
    description: 'Slow-fermented for 48 hours for rich flavor and a perfectly chewy…',
    price: '8.00',
  },
]

function Home() {
  return (
    <div id="top">
      <Navbar />

      <section className="overflow-hidden py-12 pb-24 md:pt-22">
        <Container className="flex flex-col items-center gap-8 md:flex-row md:gap-16">
          <div className="flex flex-1 flex-col items-start gap-6 md:pr-8">
            <span className="relative pb-2.5 font-label text-xs font-medium uppercase tracking-[2px] text-oxblood after:absolute after:bottom-0 after:left-0 after:h-px after:w-8 after:bg-oxblood">
              Est. 2024
            </span>
            <h1 className="font-display text-[40px] font-medium leading-[1.05] tracking-[-1.5px] text-ink md:text-[60px]">
              Artisanal Coffee &amp;
              <br />
              Hand-Crafted
              <br />
              Pastries
            </h1>
            <p className="max-w-[420px] font-ui text-base leading-relaxed text-ink-soft md:text-[17px]">
              Savor the moment in our cozy corner. Handmade coffee, soft
              sourdoughs, and slow-fermented pastries — crafted each morning
              to bring a touch of quiet luxury to your daily ritual.
            </p>
            <div className="flex w-full items-center gap-4 pt-3 sm:w-auto sm:flex-row">
              <Button to="/menu" variant="primary">
                View Menu
              </Button>
              <Button variant="outline">Order Online</Button>
            </div>
          </div>

          <div className="relative w-full flex-1 before:absolute before:-left-5 before:right-5 before:bottom-[-20px] before:top-5 before:z-0 before:rounded-3xl before:bg-gold before:content-[''] md:h-[640px]">
            <div className="relative h-[280px] w-full md:h-full">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/d8b655d97a49cd5daa2d57af77fef0d04138230a?width=1104"
                alt="Latte and croissant on a wooden table"
                className="relative z-10 h-full w-full rounded-3xl object-cover border border-ink"
              />
              <div className="absolute bottom-6 left-6 z-20 flex max-w-[260px] -rotate-2 items-center gap-3.5 rounded border border-ink bg-paper px-5 py-4 shadow-[0_8px_24px_rgba(24,20,15,0.15)]">
                <span className="flex shrink-0 text-oxblood">
                  <IconStar width="14" height="14" />
                </span>
                <div>
                  <p className="font-display text-sm font-semibold text-ink">Freshly Baked</p>
                  <p className="font-label text-[11px] tracking-[0.4px] text-ink-soft">
                    Every morning — 6:00 AM
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <div className="flex flex-col gap-6 border-y border-line py-10 sm:flex-row sm:gap-0">
          <StatCard icon={<IconPeople />} value="10K+" label="Happy Customers" />
          <StatCard icon={<IconStar />} value="4.9" label="Average Rating" bordered />
          <StatCard icon={<IconWheat />} value="Handmade" label="Real Ingredients" bordered />
        </div>
      </Container>

      <section className="pt-16 md:pt-24">
        <Container>
          <div className="flex flex-col gap-10 md:gap-14">
            <SectionIntro
              tag="Our Favorites"
              title="Made for Moments Like These"
              divider
            />
            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-4 md:gap-10">
              {FAVORITES.map((item) => (
                <ProductCard key={item.name} {...item} />
              ))}
            </div>
            <div className="flex justify-center border-t border-line pt-2">
              <Button to="/menu" variant="outline-maroon">
                View Full Menu
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Container>
        <div className="flex flex-col items-center gap-8 border-t border-line py-14 md:flex-row md:gap-18 md:py-24">
          <div className="h-[340px] w-full flex-1 overflow-hidden rounded-[20px] border border-ink shadow-[7px_7px_0_var(--color-gold)] md:h-[560px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/e2b8f44aac46a6980a389d28a5d601515cc2cc26?width=1088"
              alt="Baker kneading dough"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-1 flex-col items-start gap-4 md:pl-4">
            <SectionIntro align="left" tag="Our Story" />
            <h2 className="font-display text-[28px] font-medium leading-[1.25] text-ink md:text-[34px]">
              Crafted with Intention, Baked
              <br />
              with Love.
            </h2>
            <p className="font-ui text-sm leading-[1.7] text-ink-soft">
              Aura Coffee & Bakes began with a simple belief: the best moments
              in life are often the quietest, accompanied by the perfect cup of
              coffee and a pastry made with genuine care.
            </p>
            <p className="font-ui text-sm leading-[1.7] text-ink-soft">
              We source our beans from ethical, small-batch roasters who share
              our passion for quality. Our bakers arrive before dawn, using
              traditional European techniques and long fermentation processes
              to create breads and pastries that are as nourishing as they are
              delicious.
            </p>
            <p className="font-ui text-sm leading-[1.7] text-ink-soft">
              Every detail of our space, from the warm lighting to the
              comfortable seating, is designed to offer you a brief, beautiful
              respite from the busy world outside.
            </p>
            <a
              href="#top"
              className="inline-flex items-center gap-2 pt-4 font-label text-[13px] tracking-[0.5px] text-oxblood"
            >
              Read More About Us <IconArrowRight />
            </a>
          </div>
        </div>
      </Container>

      <Container>
        <div className="mb-16 flex flex-col items-start gap-6 rounded-3xl bg-oxblood px-8 py-10 border border-cream md:flex-row md:items-center md:justify-between md:px-16 md:py-14">
          <div className="flex items-center gap-6">
            <span className="flex h-14 w-14 shrink-0 items-center justify-center border border-white/25 text-paper">
              <IconLocationRibbon />
            </span>
            <div>
              <h3 className="mb-1.5 font-display text-[22px] font-medium leading-[1.3] text-paper md:text-[28px]">
                Good coffee. Warm hearts.
              </h3>
              <p className="font-ui text-sm leading-relaxed text-paper/65">
                Come visit our cozy corner and find your new favorite daily
                ritual.
              </p>
            </div>
          </div>
          <Button to="/visit" variant="white">
            <IconMapPin width="14" height="17" />
            Find Our Location
          </Button>
        </div>
      </Container>

      <Footer variant="home" />
    </div>
  )
}

export default Home
