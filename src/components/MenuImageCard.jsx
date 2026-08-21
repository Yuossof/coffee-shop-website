function MenuImageCard({ image, name, price, description }) {
  return (
    <article className="flex h-full flex-1 flex-col gap-5">
      <div className="relative aspect-square overflow-hidden rounded-2xl bg-line/40">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-medium text-ink">{name}</h3>
          <span className="whitespace-nowrap font-label text-xs font-medium tracking-[0.5px] text-oxblood">
            {price}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-ink-soft">{description}</p>
      </div>
    </article>
  )
}

export default MenuImageCard
