import { IconPlus } from './Icons.jsx'

function MenuListItem({ name, price, description }) {
  return (
    <article className="flex min-h-[210px] flex-1 flex-col justify-between gap-5">
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="font-display text-lg font-medium text-ink">{name}</h3>
          <span className="whitespace-nowrap font-label text-xs font-medium tracking-[0.5px] text-oxblood">
            {price}
          </span>
        </div>
        <p className="text-sm leading-relaxed text-ink-soft">{description}</p>
      </div>
      <button
        type="button"
        className="inline-flex self-start items-center gap-1 border-none bg-transparent p-0 font-label text-xs font-medium tracking-[0.5px] text-oxblood"
      >
        Add to Order <IconPlus />
      </button>
    </article>
  )
}

export default MenuListItem
