import Card from '@/components/prototype4/Card';
import { projects } from '@/mock/prototype4/projects';

export default function Prototype4Home() {
  return (
    <section className="px-6 md:px-12 py-16">
      <h1 className="text-6xl md:text-8xl font-black uppercase leading-[0.9] tracking-tighter">
        Own the<br /><span className="text-[#38E1C8]">skyline.</span>
      </h1>
      <p className="mt-6 max-w-md text-white/50">Off-plan investments in Dubai’s most-watched developments.</p>
      <div className="mt-14 grid grid-cols-1 sm:grid-cols-2 gap-5">
        {projects.map((p) => (
          <Card key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
