import { IconHeart } from './Icons.jsx'
function ProductCard({ image, name, description, price }) {
  return <article className="flex flex-1 flex-col gap-5">
    <div className="photo-frame relative aspect-[4/3]">
      <img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" />
      <button type="button" aria-label={`Save ${name} as a favorite`} className="absolute right-3 top-3 flex size-9 items-center justify-center border border-ink bg-paper text-ink hover:bg-gold hover:text-ink"><IconHeart /></button>
    </div>
    <div className="flex flex-col gap-2"><h3 className="font-display text-lg font-medium text-ink">{name}</h3><p className="text-sm leading-relaxed text-ink-soft">{description}</p><p className="font-label text-xs tracking-[.5px] text-oxblood">${price}</p></div>
  </article>
}
export default ProductCard
