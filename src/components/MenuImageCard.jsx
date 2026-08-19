function MenuImageCard({ image, name, price, description }) {
  return <article className="paper-card flex flex-1 flex-col overflow-hidden shadow-[6px_6px_0_var(--color-line)]"><div className="h-48 overflow-hidden border-b border-line"><img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" /></div><div className="flex flex-col gap-2 px-5 pb-7 pt-5"><div className="flex items-start justify-between gap-2"><h3 className="text-xl leading-7 text-heading-brown">{name}</h3><span className="font-label text-xs text-maroon">{price}</span></div><p className="text-sm leading-5 text-body-brown">{description}</p></div></article>
}
export default MenuImageCard
