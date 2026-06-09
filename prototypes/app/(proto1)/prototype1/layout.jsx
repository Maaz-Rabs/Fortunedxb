// prototype1 OWN layout + theme — dark luxury (charcoal + champagne gold).
export const metadata = { title: 'Prototype 1 — Dark Luxury' };

export default function Prototype1Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#161310] text-[#F5F2ED] flex flex-col font-sans">
      <header className="flex items-center justify-between px-6 md:px-12 py-5 border-b border-white/10">
        <span className="text-lg tracking-[0.3em] uppercase">Fortune · I</span>
        <nav className="flex gap-7 text-xs uppercase tracking-[0.18em] text-white/55">
          <a href="/prototype1" className="hover:text-[#B0905E] transition-colors">Home</a>
          <a href="/" className="hover:text-[#B0905E] transition-colors">All</a>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="px-6 md:px-12 py-6 border-t border-white/10 text-xs text-white/35">
        Prototype 1 · dark luxury · mock data
      </footer>
    </div>
  );
}
