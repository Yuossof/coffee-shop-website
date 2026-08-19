function StatCard({ icon, value, label, bordered }) {
  return (
    <div
      className={`flex flex-1 flex-col items-center px-6 text-center ${
        bordered ? 'border-t border-line pt-6 sm:border-l sm:border-t-0 sm:pt-0' : ''
      }`}
    >
      <span className="mb-4 flex text-oxblood">{icon}</span>
      <h3 className="mb-2 font-display text-3xl leading-10 text-ink">{value}</h3>
      <p className="font-label text-xs font-medium uppercase tracking-[0.7px] text-ink-soft">
        {label}
      </p>
    </div>
  )
}

export default StatCard
