import Card from '@/components/prototype2/Card';
import { projects } from '@/mock/prototype2/projects';

export default function Prototype2Home() {
  return (
    <section className="px-6 md:px-16 py-20 max-w-3xl">
      <h1 className="text-4xl md:text-5xl font-medium tracking-tight">Projects</h1>
      <p className="mt-3 text-neutral-500">A quiet, list-first view of available off-plan properties.</p>
      <div className="mt-12">
        {projects.map((p) => (
          <Card key={p.id} project={p} />
        ))}
      </div>
    </section>
  );
}
