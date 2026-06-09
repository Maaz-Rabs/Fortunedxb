// prototype3 OWN layout + theme — warm editorial (cream + terracotta, serif).
export const metadata = { title: 'Prototype 3 — Warm Editorial' };

export default function Prototype3Layout({ children }) {
  return (
    <div className="min-h-screen bg-[#F6EFE6] text-[#3A2A20] flex flex-col">
      <header className="flex items-center justify-between px-6 md:px-14 py-6 border-b border-[#E6D8C6]">
        <span className="text-xl font-serif tracking-tight">Fortune Living</span>
        <nav className="flex gap-7 text-sm text-[#8A6F5C]">
          <a href="/prototype3" className="hover:text-[#B5553B] transition-colors">Home</a>
          <a href="/" className="hover:text-[#B5553B] transition-colors">All</a>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="px-6 md:px-14 py-8 text-xs text-[#A8917C] border-t border-[#E6D8C6]">
        Prototype 3 · warm editorial · mock data
      </footer>
    </div>
  );
}
