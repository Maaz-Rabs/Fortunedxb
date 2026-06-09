// prototype4 OWN layout + theme — bold modern (deep navy + electric cyan).
export const metadata = { title: 'Prototype 4 — Bold Modern' };

export default function Prototype4Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#0B1A2A] text-white flex flex-col font-sans">
      <header className="flex items-center justify-between px-6 md:px-12 py-6 border-b-2 border-[#1C3A57]">
        <span className="text-xl font-black uppercase tracking-tight">FORTUNE<span className="text-[#38E1C8]">/</span>04</span>
        <nav className="flex gap-7 text-xs font-bold uppercase tracking-[0.15em] text-white/50">
          <a href="/prototype4" className="hover:text-[#38E1C8] transition-colors">Home</a>
          <a href="/" className="hover:text-[#38E1C8] transition-colors">All</a>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="px-6 md:px-12 py-6 border-t-2 border-[#1C3A57] text-xs text-white/35">
        Prototype 4 · bold modern · mock data
      </footer>
    </div>
  );
}
