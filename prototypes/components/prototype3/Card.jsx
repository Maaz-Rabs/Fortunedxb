// prototype3 component — warm editorial. Only prototype3 imports this.
export default function Card({ project }) {
  return (
    <article className="bg-[#FBF6EE] border border-[#E6D8C6] rounded-2xl p-6 hover:shadow-lg hover:shadow-[#B5553B]/10 transition-shadow">
      <span className="inline-block text-[11px] uppercase tracking-[0.15em] text-[#B5553B] font-medium">
        {project.status}
      </span>
      <h3 className="mt-3 text-2xl font-serif text-[#3A2A20]">{project.name}</h3>
      <p className="mt-1 text-sm text-[#8A6F5C]">{project.developer} — {project.area}</p>
      <div className="mt-5 pt-4 border-t border-[#E6D8C6] flex items-center justify-between">
        <span className="text-sm text-[#3A2A20]">From AED {project.priceFrom.toLocaleString()}</span>
        <span className="text-sm text-[#B5553B]">View →</span>
      </div>
    </article>
  );
}
