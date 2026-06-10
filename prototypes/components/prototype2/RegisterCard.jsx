// prototype2 — floating "Register Your Interest" card (right rail).
import { BadgeCheck, Phone, MessageCircle } from 'lucide-react';

export default function RegisterCard({ developer, launchLabel, launchPrice }) {
  return (
    <div className="overflow-hidden rounded-3xl border border-brand-pale bg-white">
      {/* developer header band */}
      <div className="flex flex-col items-center bg-gradient-to-b from-cream-100 to-white px-6 pb-5 pt-6 text-center">
        <div className="grid h-16 w-16 place-items-center rounded-2xl bg-brand-deeper text-[10px] font-bold tracking-widest text-cream">
          {developer.toUpperCase()}
        </div>
        <span className="mt-3 text-[11px] uppercase tracking-[0.16em] text-ink-faint">
          Developer
        </span>
        <span className="font-serif text-base font-semibold text-ink">{developer}</span>
      </div>

      <div className="px-6 pb-6">
        <div className="border-t border-brand-pale pt-5 text-center">
          <span className="block text-[11px] uppercase tracking-[0.14em] text-ink-faint">
            {launchLabel}
          </span>
          <span className="mt-1 block font-serif text-3xl font-semibold text-ink">
            AED {launchPrice.toLocaleString()}
          </span>
        </div>

        <button className="group mt-5 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-brand py-3 text-sm font-semibold text-cream transition-colors hover:bg-brand-dark">
          <BadgeCheck size={16} />
          Register Your Interest
        </button>

        <div className="mt-3 grid grid-cols-2 gap-3">
          <button className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-brand-pale py-2.5 text-[13px] font-medium text-ink-soft transition-colors hover:border-brand-soft hover:text-ink">
            <Phone size={14} className="text-brand" /> Call
          </button>
          <button className="inline-flex items-center justify-center gap-1.5 rounded-xl border border-brand-pale py-2.5 text-[13px] font-medium text-ink-soft transition-colors hover:border-brand-soft hover:text-ink">
            <MessageCircle size={14} className="text-brand" /> Chat
          </button>
        </div>

        <p className="mt-4 text-center text-[11px] leading-relaxed text-ink-faint">
          Speak to a Fortune Realty advisor. No obligation.
        </p>
      </div>
    </div>
  );
}
