import Link from 'next/link';

export default function Header() {
  return (
    <header style={{ backgroundColor: '#1E2B2E' }}>
      <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold text-white">manito</span>
          <span
            className="text-xs px-2 py-0.5 rounded-full text-white font-medium"
            style={{ backgroundColor: '#F29A72' }}
          >
            ayuda
          </span>
        </Link>
        <nav className="flex gap-6 text-sm">
          <Link href="/#clientes" className="text-white/70 hover:text-white transition-colors">
            Para clientes
          </Link>
          <Link href="/#maestros" className="text-white/70 hover:text-white transition-colors">
            Para maestros
          </Link>
        </nav>
      </div>
    </header>
  );
}
