// prototype2 OWN layout + theme — light minimal (white + ink).
export const metadata = { title: 'Prototype 2 — Light Minimal' };

export default function Prototype2Layout({ children }) {
  return (
    <div className="min-h-screen bg-white text-neutral-900 flex flex-col font-sans">
      <header className="flex items-center justify-between px-6 md:px-16 py-6">
        <span className="text-base font-semibold tracking-tight">fortune.</span>
        <nav className="flex gap-8 text-sm text-neutral-500">
          <a href="/prototype2" className="hover:text-black transition-colors">Home</a>
          <a href="/" className="hover:text-black transition-colors">All</a>
        </nav>
      </header>
      <main className="flex-1">{children}</main>
      <footer className="px-6 md:px-16 py-8 text-xs text-neutral-400 border-t border-neutral-100">
        Prototype 2 · light minimal · mock data
      </footer>
    </div>
  );
}
