function MenuImageCard({ image, name, price, description }) {
  return (
    <article className="flex flex-1 flex-col overflow-hidden rounded-2xl bg-white shadow-[var(--shadow-soft)]">
      <div className="h-48">
        <img src={image} alt={name} className="h-full w-full object-cover" />
      </div>
      <div className="flex flex-col gap-2 px-5 pb-9 pt-5">
        <div className="flex items-start justify-between gap-2">
          <h3 className="text-xl leading-7 text-heading-brown">{name}</h3>
          <span className="whitespace-nowrap text-sm font-semibold leading-5 tracking-[0.7px] text-maroon">
            {price}
          </span>
        </div>
        <p className="text-sm leading-5 text-body-brown">{description}</p>
      </div>
    </article>
  )
}

export default MenuImageCard
