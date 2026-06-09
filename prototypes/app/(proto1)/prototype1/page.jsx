import Card from '@/components/prototype1/Card';
import { projects } from '@/mock/prototype1/projects';

export default function Prototype1Home() {
  return (
    <section className="px-6 md:px-12 py-16">
      <p className="text-[11px] uppercase tracking-[0.3em] text-[#B0905E]">Off-plan · Dubai</p>
      <h1 className="mt-3 text-4xl md:text-6xl font-light tracking-tight">Featured Projects</h1>
      <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((p) => (
          <Card key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
