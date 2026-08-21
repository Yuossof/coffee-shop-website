import { IconHeart } from './Icons.jsx'

function ProductCard({ image, name, description, price }) {
  return (
    <article className="flex h-full flex-1 flex-col overflow-hidden rounded-2xl border border-line bg-paper/80 p-2 shadow-[var(--shadow-soft)]">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-line/40">
        <img src={image} alt={name} className="h-full w-full object-cover" />
        <button
          type="button"
          aria-label="Save favorite"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-paper/80 text-ink shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] backdrop-blur-sm"
        >
          <IconHeart />
        </button>
      </div>
      <div className="flex flex-col gap-2">
        <h3 className="font-display text-lg font-medium text-ink">{name}</h3>
        <p className="text-sm leading-relaxed text-ink-soft">{description}</p>
        <p className="font-label text-xs font-medium tracking-[0.5px] text-oxblood">
          ${price}
        </p>
      </div>
    </article>
  )
}

export default ProductCard
