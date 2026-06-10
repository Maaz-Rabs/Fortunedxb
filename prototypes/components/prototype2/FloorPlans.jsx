'use client';
// prototype2 — expandable Floor Plans & Layouts accordion.
import { useState } from 'react';
import { ChevronDown, Maximize2, Layers } from 'lucide-react';

// Small on-brand floor-plan thumbnail (schematic, no external asset).
function FloorThumb({ flip = false }) {
  return (
    <svg viewBox="0 0 80 56" className="h-11 w-14 rounded-md border border-brand-pale">
      <rect width="80" height="56" fill="#FAF7F3" />
      {/* colored side panel */}
      <rect x={flip ? 50 : 4} y="4" width="26" height="48" rx="2" fill="#8C6A52" />
      {/* schematic walls */}
      <g stroke="#5E4636" strokeWidth="1.4" fill="none" opacity="0.55">
        <rect x="34" y="8" width="40" height="40" />
        <line x1="34" y1="28" x2="74" y2="28" />
        <line x1="54" y1="8" x2="54" y2="28" />
        <line x1="48" y1="28" x2="48" y2="48" />
      </g>
      <g stroke="#A6886F" strokeWidth="1" fill="none" opacity="0.7">
        <rect x="38" y="12" width="10" height="10" />
      </g>
    </svg>
  );
}

export default function FloorPlans({ plans }) {
  const [open, setOpen] = useState('studio'); // first open by default, like the screenshot

  return (
    <div className="space-y-3">
      {plans.map((p, idx) => {
        const isOpen = open === p.key;
        return (
          <div
            key={p.key}
            className={
              'overflow-hidden rounded-2xl border bg-white transition-colors ' +
              (isOpen ? 'border-brand-soft' : 'border-brand-pale')
            }
          >
            {/* header row (clickable) */}
            <button
              onClick={() => setOpen(isOpen ? null : p.key)}
              className={
                'flex w-full items-center justify-between gap-4 px-5 py-4 text-left transition-colors ' +
                (isOpen ? 'bg-cream-100' : 'hover:bg-cream-100')
              }
            >
              <div className="flex items-baseline gap-2.5">
                <span className="font-serif text-base font-semibold text-ink">{p.beds}</span>
                <span className="text-xs text-ink-faint">from {p.from}</span>
              </div>
              <div className="flex items-center gap-5 text-xs text-ink-soft">
                <span className="inline-flex items-center gap-1.5">
                  <Maximize2 size={13} className="text-brand" /> {p.range}
                </span>
                <span className="inline-flex items-center gap-1.5">
                  <Layers size={13} className="text-brand" /> {p.count}
                </span>
                <ChevronDown
                  size={16}
                  className={'text-ink-faint transition-transform duration-300 ' + (isOpen ? 'rotate-180' : '')}
                />
              </div>
            </button>

            {/* expanded layout table */}
            {isOpen && (
              <div className="animate-floatUp border-t border-brand-pale">
                {/* table head */}
                <div className="grid grid-cols-[1fr_1fr_auto] items-center gap-4 border-b border-brand-pale bg-cream/60 px-5 py-3 text-[11px] font-semibold uppercase tracking-wider text-ink-faint">
                  <span>Layout type</span>
                  <span>Size</span>
                  <span className="text-right">Floor plan</span>
                </div>
                {/* rows */}
                {p.layouts.map((l, i) => (
                  <div
                    key={l.name}
                    className={
                      'grid grid-cols-[1fr_1fr_auto] items-center gap-4 px-5 py-4 transition-colors hover:bg-cream-100 ' +
                      (i < p.layouts.length - 1 ? 'border-b border-brand-pale' : '')
                    }
                  >
                    <span className="text-sm font-medium text-ink">{l.name}</span>
                    <span className="text-sm text-ink-soft">{l.size}</span>
                    <span className="flex justify-end">
                      <FloorThumb flip={(idx + i) % 2 === 1} />
                    </span>
                  </div>
                ))}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
}
