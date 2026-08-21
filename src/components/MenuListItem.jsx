import { IconPlus } from './Icons.jsx'

function MenuListItem({ name, price, description }) {
  return (
    <article className="flex min-h-[210px] flex-1 flex-col justify-between gap-4 rounded-lg border border-line bg-paper p-6 shadow-[var(--shadow-soft)]">
      <div className="flex flex-col gap-2">
        <div className="flex items-start justify-between gap-3">
          <h3 className="text-2xl leading-8 text-heading-brown">{name}</h3>
          <span className="whitespace-nowrap text-sm font-semibold leading-5 tracking-[0.7px] text-maroon">
            {price}
          </span>
        </div>
        <p className="text-base leading-6 text-body-brown">{description}</p>
      </div>
      <button
        type="button"
        className="inline-flex self-start items-center gap-1 border-none bg-transparent p-0 text-sm font-semibold leading-5 tracking-[0.7px] text-maroon"
      >
        Add to Order <IconPlus />
      </button>
    </article>
  )
}

export default MenuListItem
