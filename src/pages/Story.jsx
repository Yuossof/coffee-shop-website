import Navbar from '../components/Navbar.jsx'
import Footer from '../components/Footer.jsx'
import Button from '../components/Button.jsx'
import Container from '../components/Container.jsx'
import { IconSparkle, IconLoaf, IconHeart } from '../components/Icons.jsx'

function Story() {
  return (
    <div className="bg-dark-bg">
      <Navbar />

      <section className="py-12 md:py-24">
        <Container className="flex flex-col items-center gap-8 md:flex-row md:gap-24">
          <div className="flex flex-1 flex-col items-start gap-8">
            <span className="inline-flex items-center gap-2 rounded-full bg-peach-2 px-4 py-1.5 text-xs font-medium leading-4 text-body-brown">
              <IconSparkle />
              EST. 2019
            </span>
            <h1 className="text-4xl font-bold italic leading-tight tracking-[-1.12px] text-muted-brown md:text-[56px] md:leading-[64px]">
              <span className="text-maroon">Freshly Brewed</span>
              <br />
              <em className="italic text-muted-brown">Happiness.</em>
            </h1>
            <p className="max-w-[448px] text-lg leading-[28px] text-body-brown">
              Aura began with a simple belief: the best moments in life are
              shared over a warm cup and a fresh pastry. Every sourdough loaf
              is slow-fermented, and every espresso shot is pulled with
              intention.
            </p>
            <Button variant="wine" size="sm" className="-mt-2">
              Read Our Manifesto
            </Button>
          </div>
          <div className="relative h-[280px] w-full flex-1 overflow-hidden rounded-2xl shadow-[var(--shadow-soft)] md:h-[600px]">
            <img
              src="https://api.builder.io/api/v1/image/assets/TEMP/80de57d57aec0f1c44555d7ffbb36a6df1ddb0c0?width=1056"
              alt="Barista pouring latte art"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(0deg,rgba(65,4,22,0.4)_0%,rgba(65,4,22,0)_100%)]" />
          </div>
        </Container>
      </section>

      <section className="bg-[#fff1e8] px-6 py-16 md:px-16 md:py-24">
        <div className="mx-auto flex max-w-[1280px] flex-col gap-16">
          <div className="flex flex-col items-center gap-4 text-center">
            <h2 className="text-3xl leading-10 text-maroon">The Art of the Craft</h2>
            <p className="max-w-[672px] text-base leading-6 text-body-brown">
              From the early morning flour dusting to the final espresso
              pour, our process is a labor of love dedicated to the tactile
              joy of baking.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 md:[grid-template-rows:300px_300px]">
            <div className="relative min-h-[280px] overflow-hidden rounded-2xl shadow-[var(--shadow-soft)] sm:col-span-2">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/a00c83392117d07009b07c83a77ae4eca06a7149?width=1520"
                alt="Baker kneading dough"
                className="h-full w-full object-cover"
              />
              <div className="absolute inset-0 flex flex-col justify-end bg-[linear-gradient(0deg,rgba(32,29,23,0.8)_0%,rgba(32,29,23,0.2)_50%,rgba(32,29,23,0)_100%)] p-8">
                <h3 className="mb-2 text-2xl leading-8 text-cream">Slow Fermentation</h3>
                <p className="max-w-[448px] text-base leading-6 text-peach-2">
                  Time is our most important ingredient. Our breads rest for
                  48 hours to develop their complex flavor.
                </p>
              </div>
            </div>

            <div className="flex min-h-[280px] flex-col items-center justify-center gap-4 rounded-2xl bg-cream p-8 text-center shadow-[var(--shadow-soft)]">
              <span className="flex text-muted-brown">
                <IconLoaf />
              </span>
              <h3 className="text-2xl leading-8 text-maroon">Locally Sourced</h3>
              <p className="text-base leading-6 text-body-brown">
                Partnering with regional farmers to bring the freshest dairy
                and grains to our community.
              </p>
            </div>

            <div className="min-h-[280px] overflow-hidden rounded-2xl shadow-[var(--shadow-soft)]">
              <img
                src="https://api.builder.io/api/v1/image/assets/TEMP/c5129ea562dac57bc67501525aa9f29fea84dfed?width=736"
                alt="Espresso machine pouring coffee"
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex min-h-[280px] items-start gap-6 rounded-2xl bg-peach-2 p-8 sm:col-span-2">
              <span className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white text-maroon">
                <IconHeart />
              </span>
              <div>
                <h3 className="mb-3 text-2xl leading-8 text-maroon">Made for Moments</h3>
                <p className="text-base leading-6 text-body-brown">
                  Whether it&apos;s a quiet morning with a book or a lively
                  weekend brunch with friends, our space is designed to be
                  the backdrop to your favorite memories.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Container className="flex flex-col items-center gap-8 py-16 md:flex-row md:gap-16 md:py-24">
        <div className="h-[360px] w-full flex-1 overflow-hidden rounded-2xl shadow-[var(--shadow-soft)] md:h-[500px] md:rounded-t-full">
          <img
            src="https://api.builder.io/api/v1/image/assets/TEMP/88a0a501a65538ddadb8a797d09aba3cb52c95e4?width=1088"
            alt="Bakers holding bread trays"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="flex flex-1 flex-col items-start gap-4">
          <p className="text-sm font-semibold uppercase leading-5 tracking-[1.4px] text-muted-brown">
            The Faces Behind the Bake
          </p>
          <h2 className="text-3xl leading-10 !text-[#cab6b5]">Meet Our Community</h2>
          <p className="text-base leading-6 text-body-brown">
            Aura isn&apos;t just about the recipes; it&apos;s about the
            people who bring them to life every single day. Our team of
            passionate bakers, meticulous baristas, and friendly faces are
            united by a shared dedication to quality and warmth.
          </p>
          <p className="text-base leading-6 text-body-brown">
            We believe in fostering a supportive environment where
            creativity thrives, ensuring that every pastry crafted carries a
            little piece of that joy to you.
          </p>
          <Button variant="outline-muted" size="sm">
            Join Our Team
          </Button>
        </div>
      </Container>

      <Footer variant="story" />
    </div>
  )
}

export default Story
