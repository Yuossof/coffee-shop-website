import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Button from '../components/Button.jsx'
import Container from '../components/Container.jsx'
import { IconMapPin, IconPhone, IconMail, IconClock, IconSend } from '../components/Icons.jsx'

const HOURS = [
  { day: 'Mon – Fri', time: '7:00 AM – 4:00 PM' },
  { day: 'Saturday', time: '8:00 AM – 5:00 PM' },
  { day: 'Sunday', time: 'Closed for Rest', muted: true },
]

const inputClass =
  'w-full rounded-lg border border-input-border bg-white px-4 py-[13px] font-body text-base text-heading-brown resize-y'

function Visit() {
  return (
    <div className="bg-dark-bg">
      <Navbar />

      <Container className="grid grid-cols-1 gap-6 pt-12 md:grid-cols-12 md:items-center md:pt-24">
        <div className="flex flex-col items-start gap-6 md:col-span-5">
          <span className="inline-flex items-center gap-2 rounded-full bg-peach-2 px-4 py-2 text-base text-body-brown">
            <IconClock width="11" height="14" />
            Find Us
          </span>
          <h1 className="text-4xl font-bold leading-tight tracking-[-1.12px] text-maroon md:text-[56px] md:leading-[64px]">
            Your daily ritual,
            <br />
            grounded here.
          </h1>
          <p className="max-w-[448px] text-lg leading-[29px] text-body-brown">
            Nestled in the heart of the artisan district, our bakery is a
            haven of warm pastry aromas and perfectly pulled espresso. Step
            out of the rush and into our space.
          </p>
          <div className="flex w-full flex-col gap-4 pt-4 sm:w-auto sm:flex-row">
            <Button variant="primary" className="!rounded-lg !px-8 !py-4">
              Book a Table
            </Button>
            <Button variant="outline-muted" className="!rounded-lg !px-8 !py-4">
              Get Directions
            </Button>
          </div>
        </div>

        <div className="relative h-[320px] min-h-[320px] overflow-hidden rounded-2xl shadow-[var(--shadow-soft)] md:col-span-7 md:h-[480px] md:min-h-[400px]">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/e2fcaa45a9da798bb5dc213bff0b9d0b037722da?width=1324"
            alt="Aura Coffee & Bakes storefront"
            className="h-full w-full object-cover"
          />
          <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 items-center gap-8 whitespace-nowrap rounded-xl border border-white/20 bg-cream/80 p-4 shadow-[var(--shadow-soft)] backdrop-blur-md">
            <span className="h-2 w-2 rounded-full bg-[#059669]" />
            <span className="mr-4 text-sm font-semibold tracking-[0.7px] text-heading-brown">
              Open Now
            </span>
            <span className="text-base text-body-brown">Closes at 4 PM</span>
          </div>
        </div>
      </Container>

      <Container className="grid grid-cols-1 gap-6 py-12 md:grid-cols-12 md:py-16">
        <div className="flex flex-col gap-8 rounded-2xl bg-cream p-8 shadow-[var(--shadow-soft)] md:col-span-4">
          <h2 className="text-3xl leading-10 text-maroon">Visit</h2>
          <ul className="flex flex-col gap-6">
            <li className="flex items-start gap-4">
              <IconMapPin className="mt-1 shrink-0 text-muted-brown" />
              <div>
                <p className="mb-1 text-sm font-semibold tracking-[0.7px] text-heading-brown">
                  Address
                </p>
                <p className="text-base leading-6 text-body-brown">
                  128 Artisan Way,
                  <br />
                  Suite 100
                  <br />
                  Portland, OR 97205
                </p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <IconPhone className="mt-1 shrink-0 text-muted-brown" />
              <div>
                <p className="mb-1 text-sm font-semibold tracking-[0.7px] text-heading-brown">
                  Phone
                </p>
                <p className="text-base leading-6 text-body-brown">(505) 555-0199</p>
              </div>
            </li>
            <li className="flex items-start gap-4">
              <IconMail className="mt-1 shrink-0 text-muted-brown" />
              <div>
                <p className="mb-1 text-sm font-semibold tracking-[0.7px] text-heading-brown">
                  Email
                </p>
                <p className="text-base leading-6 text-body-brown">hello@aurabakes.com</p>
              </div>
            </li>
          </ul>

          <span className="h-px bg-border-pink" />

          <div className="flex flex-col gap-4">
            <h3 className="text-2xl leading-8 text-maroon">Hours</h3>
            <ul className="flex flex-col gap-3">
              {HOURS.map((row) => (
                <li key={row.day} className="flex justify-between text-base leading-6">
                  <span className={row.muted ? 'text-faint-brown' : 'text-body-brown'}>
                    {row.day}
                  </span>
                  <span className={row.muted ? 'text-faint-brown' : 'text-heading-brown'}>
                    {row.time}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center gap-2 rounded-2xl bg-cream p-8 text-center shadow-[var(--shadow-soft)] md:col-span-8">
          <h2 className="text-2xl leading-8 text-heading-brown">Visit Us</h2>
          <p className="mb-4 text-base text-body-brown">Aura Coffee & Bakes</p>
          <div className="mb-4 flex min-h-[300px] w-full items-center justify-center rounded-xl bg-[#ece6d8] text-maroon">
            <IconMapPin width="32" height="48" />
          </div>
          <p className="font-heading text-lg font-semibold text-heading-brown">
            AURA COFFEE &amp; BAKES
          </p>
          <p className="text-sm text-body-brown">128 Artisan Way, City Center</p>
          <p className="mb-2 text-sm text-body-brown">
            Hours: Mon-Fri 7am-6pm / Sat-Sun 8am-5pm
          </p>
          <Button variant="primary" className="mb-2">
            Get Directions
          </Button>
          <button
            type="button"
            className="inline-flex items-center gap-2 border-none bg-transparent text-sm font-semibold tracking-[0.7px] text-body-brown"
          >
            <IconMapPin width="16" height="16" />
            Open in Maps
          </button>
        </div>
      </Container>

      <section className="px-6 pb-16 md:px-32 md:pb-24">
        <form className="mx-auto flex max-w-[896px] flex-col gap-10 rounded-2xl bg-cream p-8 shadow-[var(--shadow-soft)] md:p-12">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl leading-10 text-maroon">Reserve a Moment</h2>
            <p className="max-w-[512px] text-base leading-6 text-body-brown">
              Planning to stay awhile? We offer limited reservations for our
              quiet corner tables. For large parties or special inquiries,
              please let us know below.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <label htmlFor="fullName" className="text-sm font-semibold tracking-[0.7px] text-muted-brown">
                Full Name
              </label>
              <input id="fullName" type="text" placeholder="Jane Doe" className={inputClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="email" className="text-sm font-semibold tracking-[0.7px] text-muted-brown">
                Email Address
              </label>
              <input id="email" type="email" placeholder="jane@example.com" className={inputClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="date" className="text-sm font-semibold tracking-[0.7px] text-muted-brown">
                Preferred Date
              </label>
              <input id="date" type="date" className={inputClass} />
            </div>
            <div className="flex flex-col gap-2">
              <label htmlFor="guests" className="text-sm font-semibold tracking-[0.7px] text-muted-brown">
                Number of Guests
              </label>
              <select id="guests" defaultValue="2" className={inputClass}>
                <option value="1">1 Person</option>
                <option value="2">2 People</option>
                <option value="3">3 People</option>
                <option value="4">4 People</option>
                <option value="5+">5+ People</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="message" className="text-sm font-semibold tracking-[0.7px] text-muted-brown">
              Message or Special Requests
            </label>
            <textarea
              id="message"
              rows="4"
              placeholder="Tell us if you're celebrating something special..."
              className={inputClass}
            />
          </div>

          <div className="flex justify-center pt-4">
            <Button variant="primary" type="submit" className="!rounded-lg !px-10 !py-4">
              Send Request <IconSend />
            </Button>
          </div>
        </form>
      </section>

      <Footer variant="visit" />
    </div>
  )
}

export default Visit
