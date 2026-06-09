import Link from 'next/link';

// Landing page — links to all 4 prototypes. Each runs on the same server,
// at its own URL. Open any to see that designer's independent work.
const PROTOTYPES = [
  { href: '/prototype1', label: 'Prototype 1', note: 'Dark luxury' },
  { href: '/prototype2', label: 'Prototype 2', note: 'Light minimal' },
  { href: '/prototype3', label: 'Prototype 3', note: 'Warm editorial' },
  { href: '/prototype4', label: 'Prototype 4', note: 'Bold modern' },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-neutral-950 text-neutral-100 flex flex-col items-center justify-center gap-10 px-6">
      <div className="text-center">
        <h1 className="text-3xl md:text-5xl font-semibold tracking-tight">Fortune DXB — Prototypes</h1>
        <p className="mt-3 text-neutral-400 text-sm">Four independent redesigns · mock data only</p>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full max-w-2xl">
        {PROTOTYPES.map((p) => (
          <Link
            key={p.href}
            href={p.href}
            className="group border border-neutral-800 rounded-xl p-6 hover:border-neutral-500 transition-colors"
          >
            <span className="block text-lg font-medium">{p.label}</span>
            <span className="block mt-1 text-sm text-neutral-500 group-hover:text-neutral-300 transition-colors">
              {p.note} →
            </span>
          </Link>
        ))}
      </div>
    </main>
  );
}
