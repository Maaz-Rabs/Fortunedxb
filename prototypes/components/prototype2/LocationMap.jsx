'use client';
// prototype2 — Location & Connectivity. Full-width movable map, labels on the map itself.
import dynamic from 'next/dynamic';
import { Train } from 'lucide-react';

const MapInner = dynamic(() => import('./MapInner'), {
  ssr: false,
  loading: () => (
    <div className="grid h-full w-full place-items-center bg-cream-100 text-sm text-ink-faint">
      Loading map…
    </div>
  ),
});

export default function LocationMap({ data }) {
  return (
    // `isolate` + z-0 keep Leaflet's internal high z-indexes below the sticky nav.
    <div className="relative isolate z-0 h-[460px] overflow-hidden rounded-2xl border border-brand-pale md:h-[520px]">
      <MapInner data={data} />

      {/* metro lines chip */}
      <div className="pointer-events-none absolute right-3 top-3 z-[500] flex items-center gap-3 rounded-full border border-white/20 bg-brand-deeper/85 px-3.5 py-1.5 text-[11px] font-medium text-cream backdrop-blur">
        <span className="inline-flex items-center gap-1.5">
          <Train size={13} className="text-cream/80" /> Metro
        </span>
        {data.metroLines.map((l) => (
          <span key={l.name} className="inline-flex items-center gap-1.5">
            <span className="h-0.5 w-3.5 rounded" style={{ background: l.color }} />
            {l.name}
          </span>
        ))}
      </div>

      {/* legend */}
      <div className="pointer-events-none absolute bottom-3 left-3 z-[500] flex flex-col gap-1.5 rounded-xl border border-brand-pale bg-white/90 px-3 py-2.5 text-[11px] backdrop-blur">
        <span className="inline-flex items-center gap-2 text-ink-soft">
          <span className="h-2.5 w-2.5 rounded-full bg-brand" /> Project
        </span>
        <span className="inline-flex items-center gap-2 text-ink-soft">
          <span className="grid h-3.5 w-3.5 place-items-center rounded-full border border-brand bg-cream text-[8px]">
            ★
          </span>{' '}
          Connectivity
        </span>
      </div>
    </div>
  );
}
