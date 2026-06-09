// prototype4 component — bold modern. Only prototype4 imports this.
export default function Card({ project }) {
  return (
    <article className="relative bg-[#0F2236] border-2 border-[#1C3A57] rounded-none p-6 hover:border-[#38E1C8] transition-colors">
      <div className="flex items-start justify-between">
        <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#38E1C8]">{project.status}</span>
        <span className="text-xs text-white/40">#{String(project.id).padStart(2, '0')}</span>
      </div>
      <h3 className="mt-6 text-3xl font-black uppercase leading-none text-white">{project.name}</h3>
      <p className="mt-2 text-sm text-white/50">{project.developer} / {project.area}</p>
      <div className="mt-6 text-2xl font-black text-[#38E1C8] tabular-nums">
        AED {project.priceFrom.toLocaleString()}
      </div>
    </article>
  );
}
