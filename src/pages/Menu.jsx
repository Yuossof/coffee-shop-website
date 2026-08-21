import { useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Button from '../components/Button.jsx'
import Container from '../components/Container.jsx'
import MenuListItem from '../components/MenuListItem.jsx'
import MenuImageCard from '../components/MenuImageCard.jsx'

const FILTERS = ['All', 'Coffee', 'Tea', 'Pastries', 'Cakes']

const COFFEE_ITEMS = [
  {
    name: 'Espresso',
    price: '$3.50',
    description: 'A rich, full-bodied shot of our signature house blend with a thick crema.',
  },
  {
    name: 'Cappuccino',
    price: '$4.50',
    description: 'Equal parts espresso, steamed milk, and velvety milk foam.',
  },
  {
    name: 'Pour Over',
    price: '$5.00',
    description: 'Hand-poured single-origin coffee, brewed to highlight delicate flavor notes.',
  },
]

const PASTRY_ITEMS = [
  {
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/c01ce618f353fd8fff69cf8616893688759b8ff0?width=540',
    name: 'Opera Cake',
    price: '$7.00',
    description: 'Layers of almond sponge, coffee syrup, and chocolate ganache.',
  },
  {
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/abadceb25f6b50c641333474b91dea0eeb10eca4?width=540',
    name: 'Seasonal Tart',
    price: '$6.50',
    description: 'Crisp pastry shell filled with vanilla cream and fresh seasonal fruit.',
  },
  {
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/1848b86ceefee98f69a510ac113cebd7d1a9c4f4?width=540',
    name: 'Cinnamon Roll',
    price: '$4.00',
    description: 'Soft, pillowy dough layered with cinnamon sugar and cream cheese icing.',
  },
  {
    image:
      'https://api.builder.io/api/v1/image/assets/TEMP/1d027c208b6f4412488eb698d72fa1909b17275f?width=540',
    name: 'Country Loaf',
    price: '$8.00',
    description: 'Our signature slow-fermented sourdough, baked to a deep golden crust.',
  },
]

function Menu() {
  const [activeFilter, setActiveFilter] = useState('All')

  return (
    <div>
      <Navbar />

      <Container as="header" className="flex flex-col items-center gap-4 py-16 text-center md:py-24">
        <h1 className="text-4xl font-bold leading-tight tracking-[-1.12px] text-maroon md:text-[56px] md:leading-[64px]">
          Our Menu
        </h1>
        <p className="max-w-[672px] text-lg leading-[28px] text-body-brown">
          Artisanal coffee, delicate teas, and freshly baked moments. Crafted
          daily with passion.
        </p>
        <div className="flex flex-wrap justify-center gap-4 pt-4">
          {FILTERS.map((filter) => (
            <button
              key={filter}
              type="button"
              onClick={() => setActiveFilter(filter)}
              className={`rounded-full border border-line px-5 py-2 text-sm font-semibold leading-5 tracking-[0.7px] shadow-sm transition-colors ${
                filter === activeFilter
                  ? 'bg-oxblood text-paper'
                  : 'bg-peach/70 text-heading-brown hover:bg-peach-2'
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      </Container>

      <Container as="main" className="flex flex-col gap-16 pb-16 md:gap-24 md:pb-24">
        <section className="flex flex-col gap-12">
          <div className="flex items-center gap-4">
            <h2 className="whitespace-nowrap text-3xl leading-10 text-maroon">Coffee</h2>
            <span className="h-px flex-1 bg-border-pink-30" />
          </div>
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {COFFEE_ITEMS.map((item) => (
              <MenuListItem key={item.name} {...item} />
            ))}
          </div>
        </section>

        <section className="grid grid-cols-1 gap-8 overflow-hidden rounded-3xl bg-peach p-6 md:grid-cols-12 md:gap-12 md:p-12">
          <div className="order-1 overflow-hidden rounded-2xl shadow-[var(--shadow-soft)] md:order-2 md:col-span-7">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/b7582db10f5cb88e995cb09f5570c18adb607042?width=1212"
              alt="The Classic Croissant on a wooden board"
              className="h-[280px] w-full min-h-[260px] object-cover md:h-full"
            />
          </div>
          <div className="order-2 flex flex-col items-start justify-center gap-4 md:order-1 md:col-span-5">
            <span className="inline-flex rounded-full bg-wine px-3 py-1 text-xs font-medium leading-4 text-pink">
              Baker&apos;s Choice
            </span>
            <h2 className="text-4xl font-bold leading-tight tracking-[-0.8px] text-maroon md:text-[40px] md:leading-[48px]">
              The Classic
              <br />
              Croissant
            </h2>
            <p className="max-w-[420px] text-lg leading-[28px] text-body-brown">
              Flaky, golden, and made with high-quality European butter.
              Baked fresh every morning until perfect.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <span className="font-heading text-2xl font-semibold leading-8 text-maroon">
                $4.50
              </span>
              <Button variant="primary" size="sm">
                Order Now
              </Button>
            </div>
          </div>
        </section>

        <section className="flex flex-col gap-12">
          <div className="flex items-center gap-4">
            <h2 className="whitespace-nowrap text-3xl leading-10 text-maroon">
              Pastries &amp; Cakes
            </h2>
            <span className="h-px flex-1 bg-border-pink-30" />
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {PASTRY_ITEMS.map((item) => (
              <MenuImageCard key={item.name} {...item} />
            ))}
          </div>
        </section>
      </Container>

      <Footer variant="menu" />
    </div>
  )
}

export default Menu
