import { IconPlus } from './Icons.jsx'
function MenuListItem({ name, price, description }) {
  return <article className="paper-card flex flex-1 flex-col justify-between gap-6 p-6 shadow-[6px_6px_0_var(--color-line)]"><div className="flex flex-col gap-2"><div className="flex items-start justify-between gap-3"><h3 className="text-2xl leading-8 text-heading-brown">{name}</h3><span className="font-label text-xs text-maroon">{price}</span></div><p className="text-base leading-6 text-body-brown">{description}</p></div><button type="button" className="inline-flex self-start items-center gap-1 border-none bg-transparent p-0 font-label text-xs uppercase tracking-[.8px] text-maroon hover:text-gold">Add to Order <IconPlus /></button></article>
}
export default MenuListItem
