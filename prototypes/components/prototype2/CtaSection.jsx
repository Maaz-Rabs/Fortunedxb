'use client';
// prototype2 — bottom "Ready to make your move?" CTA with Buy / Sell / Rent.
import { useState } from 'react';
import { ArrowRight, Search, Home, KeyRound, X } from 'lucide-react';

const OPTIONS = [
  { key: 'buy', label: 'Buy', icon: Search },
  { key: 'sell', label: 'Sell', icon: Home },
  { key: 'rent', label: 'Rent', icon: KeyRound },
];

export default function CtaSection() {
  const [active, setActive] = useState('buy');

  return (
    <section className="relative overflow-hidden rounded-[28px] bg-brand-deeper px-6 py-12 text-cream shadow-lift md:px-12 md:py-16">
      {/* warm glow */}
      <div className="pointer-events-none absolute -bottom-24 -right-20 h-72 w-72 rounded-full bg-brand/30 blur-3xl" />
      <div className="pointer-events-none absolute -left-16 -top-20 h-56 w-56 rounded-full bg-brand-light/10 blur-3xl" />

      <button className="absolute right-5 top-5 inline-flex items-center gap-1 text-xs text-cream/60 transition-colors hover:text-cream">
        <X size={14} /> Close
      </button>

      <div className="relative grid gap-10 md:grid-cols-2 md:items-center">
        <div>
          <h2 className="font-serif text-3xl font-semibold leading-tight md:text-4xl">
            Ready to make
            <br /> your move?
          </h2>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-cream/70">
            You&apos;ve seen the numbers for Breez By Danube. Let&apos;s turn insights
            into action.
          </p>
        </div>

        <div>
          <span className="block text-sm text-cream/70">I am interested to</span>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {OPTIONS.map(({ key, label, icon: Icon }) => {
              const isActive = active === key;
              return (
                <button
                  key={key}
                  onClick={() => setActive(key)}
                  className={
                    'flex flex-col items-center gap-2 rounded-2xl border py-4 transition-colors ' +
                    (isActive
                      ? 'border-brand bg-brand text-cream'
                      : 'border-cream/15 bg-white/5 text-cream/80 hover:bg-white/10')
                  }
                >
                  <Icon size={20} />
                  <span className="text-sm">{label}</span>
                </button>
              );
            })}
          </div>
          <button className="group mt-4 inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2.5 text-sm font-medium text-cream transition-colors hover:bg-brand-dark">
            Continue <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
          </button>
        </div>
      </div>
    </section>
  );
}
