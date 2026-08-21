function MenuImageCard({ image, name, price, description }) {
  return <article className="paper-card flex min-h-full flex-1 flex-col overflow-hidden"><div className="aspect-[4/3] overflow-hidden border-b border-line bg-peach-2 p-1"><img src={image} alt={name} className="h-full w-full object-cover transition-transform duration-500 hover:scale-105" /></div><div className="flex flex-1 flex-col gap-2 px-5 pb-7 pt-5"><div className="flex items-start justify-between gap-2"><h3 className="text-xl leading-7 text-heading-brown">{name}</h3><span className="font-label text-xs text-maroon">{price}</span></div><p className="text-sm leading-5 text-body-brown">{description}</p></div></article>
}
export default MenuImageCard
