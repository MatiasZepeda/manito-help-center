import Link from 'next/link';
import { categories } from '@/content/categories';

export default function HomePage() {
  const customerCategories = categories.filter((c) => c.role === 'customer' || c.role === 'all');
  const providerCategories = categories.filter((c) => c.role === 'provider' || c.role === 'all');

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header style={{ backgroundColor: '#1E2B2E' }}>
        <div className="max-w-5xl mx-auto px-6 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-white">manito</span>
            <span className="text-xs px-2 py-0.5 rounded-full text-white font-medium" style={{ backgroundColor: '#F29A72' }}>
              ayuda
            </span>
          </Link>
          <nav className="flex gap-6 text-sm">
            <Link href="/#clientes" className="text-white/70 hover:text-white transition-colors">Para clientes</Link>
            <Link href="/#maestros" className="text-white/70 hover:text-white transition-colors">Para maestros</Link>
          </nav>
        </div>
      </header>

      {/* Hero */}
      <div style={{ backgroundColor: '#235F73' }} className="py-16 px-6">
        <div className="max-w-2xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-white mb-3">¿En qué podemos ayudarte?</h1>
          <p className="text-white/75 mb-8 text-base">
            Encuentra respuestas sobre cómo usar Manito, ya sea que necesites contratar un servicio o estés ofreciendo el tuyo.
          </p>
          <div className="relative">
            <input
              type="text"
              placeholder="Buscar artículos..."
              className="w-full px-5 py-3.5 rounded-xl text-base outline-none shadow-sm text-gray-800 placeholder:text-gray-400"
            />
            <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 text-lg">🔍</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <main className="max-w-5xl mx-auto px-6 py-14">

        {/* Para clientes */}
        <section id="clientes" className="mb-14">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-lg">🏠</span>
            <h2 className="text-lg font-bold" style={{ color: '#1E2B2E' }}>Para clientes</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {customerCategories.map((cat) => (
              <Link key={cat.id} href={`/c/${cat.slug}`} className="block">
                <div
                  className="p-5 rounded-xl border hover:shadow-md transition-all h-full"
                  style={{ backgroundColor: '#F7F3EF', borderColor: '#E5DDD4' }}
                >
                  <div className="text-2xl mb-3">{cat.icon}</div>
                  <h3 className="font-semibold text-sm mb-1.5" style={{ color: '#1E2B2E' }}>{cat.title}</h3>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: '#5C6665' }}>{cat.description}</p>
                  <span className="text-xs font-semibold" style={{ color: '#F29A72' }}>
                    {cat.articles.length} artículos →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Para maestros */}
        <section id="maestros">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-lg">🔧</span>
            <h2 className="text-lg font-bold" style={{ color: '#1E2B2E' }}>Para maestros</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {providerCategories.map((cat) => (
              <Link key={cat.id} href={`/c/${cat.slug}`} className="block">
                <div
                  className="p-5 rounded-xl border hover:shadow-md transition-all h-full"
                  style={{ backgroundColor: '#F7F3EF', borderColor: '#E5DDD4' }}
                >
                  <div className="text-2xl mb-3">{cat.icon}</div>
                  <h3 className="font-semibold text-sm mb-1.5" style={{ color: '#1E2B2E' }}>{cat.title}</h3>
                  <p className="text-xs leading-relaxed mb-3" style={{ color: '#5C6665' }}>{cat.description}</p>
                  <span className="text-xs font-semibold" style={{ color: '#235F73' }}>
                    {cat.articles.length} artículos →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t py-8 mt-4" style={{ borderColor: '#E5DDD4' }}>
        <div className="max-w-5xl mx-auto px-6 text-center text-xs" style={{ color: '#5C6665' }}>
          © 2026 Manito · Centro de Ayuda
        </div>
      </footer>
    </div>
  );
}
