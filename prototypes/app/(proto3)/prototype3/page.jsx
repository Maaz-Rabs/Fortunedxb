import Card from '@/components/prototype3/Card';
import { projects } from '@/mock/prototype3/projects';

export default function Prototype3Home() {
  return (
    <section className="px-6 md:px-14 py-16">
      <div className="max-w-2xl">
        <h1 className="text-5xl md:text-6xl font-serif leading-tight">
          Homes with a sense of place.
        </h1>
        <p className="mt-4 text-[#8A6F5C]">A curated selection of Dubai’s off-plan residences.</p>
      </div>
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((p) => (
          <Card key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
