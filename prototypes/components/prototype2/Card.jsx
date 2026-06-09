// prototype2 component — light minimal. Only prototype2 imports this.
export default function Card({ project }) {
  return (
    <article className="flex items-baseline justify-between gap-6 py-6 border-b border-neutral-200 group">
      <div>
        <h3 className="text-lg text-neutral-900 group-hover:text-black transition-colors">{project.name}</h3>
        <p className="mt-1 text-sm text-neutral-500">{project.developer} · {project.area}</p>
      </div>
      <div className="text-right shrink-0">
        <span className="block text-sm text-neutral-900 tabular-nums">AED {project.priceFrom.toLocaleString()}</span>
        <span className="block mt-1 text-[11px] uppercase tracking-wide text-neutral-400">{project.status}</span>
      </div>
    </article>
  );
}
