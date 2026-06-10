// prototype2 OWN layout + theme — Fortune Realty (bronze / cream luxury).
import { Playfair_Display, Inter } from 'next/font/google';
import { ChevronLeft, Download } from 'lucide-react';
import { project } from '@/mock/prototype2/projects';

const serif = Playfair_Display({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-serif',
  display: 'swap',
});
const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

export const metadata = { title: 'Breez By Danube — Fortune Realty' };

export default function Prototype2Layout({ children }) {
  return (
    <div
      className={`${serif.variable} ${sans.variable} min-h-screen bg-cream text-ink flex flex-col font-sans antialiased selection:bg-brand/20`}
    >
      {/* Sticky property nav */}
      <header className="sticky top-0 z-40 border-b border-brand-pale bg-cream/85 backdrop-blur-md">
        <div className="mx-auto flex h-16 max-w-6xl items-center gap-4 px-4 md:px-8">
          <button className="shrink-0 rounded-full border border-brand-pale p-1.5 text-ink-soft transition-colors hover:bg-brand-pale hover:text-ink">
            <ChevronLeft size={16} />
          </button>

          <span className="hidden shrink-0 font-serif text-lg font-semibold tracking-tight text-ink md:block">
            Fortune<span className="text-brand">.</span>
          </span>

          <nav className="no-scrollbar flex flex-1 items-center gap-1 overflow-x-auto text-[13px]">
            {project.nav.map((item, i) => (
              <a
                key={item}
                href="#"
                className={
                  'whitespace-nowrap rounded-full px-3.5 py-1.5 transition-colors ' +
                  (i === 0
                    ? 'bg-brand-deeper font-medium text-cream'
                    : 'text-ink-soft hover:bg-brand-pale/70 hover:text-ink')
                }
              >
                {item}
              </a>
            ))}
          </nav>

          <button className="inline-flex shrink-0 items-center gap-1.5 rounded-full bg-brand px-4 py-2 text-[13px] font-medium text-cream shadow-sm transition-colors hover:bg-brand-dark">
            <Download size={14} />
            <span className="hidden sm:inline">Download Brochure</span>
          </button>
        </div>
      </header>

      <main className="flex-1">{children}</main>

      <footer className="border-t border-brand-pale px-6 py-10 md:px-16">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 sm:flex-row sm:items-center">
          <span className="font-serif text-base font-semibold text-ink">
            Fortune Realty <span className="text-brand-light">L.L.C</span>
          </span>
          <span className="text-xs text-ink-faint">Prototype · mock data · not for distribution</span>
        </div>
      </footer>
    </div>
  );
}
