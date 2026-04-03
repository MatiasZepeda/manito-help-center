import Link from 'next/link';
import { notFound } from 'next/navigation';
import { categories, getCategoryBySlug } from '@/content/categories';
import Header from '@/components/Header';

export async function generateStaticParams() {
  return categories.map((c) => ({ slug: c.slug }));
}

const TYPE_LABELS: Record<string, string> = {
  guide: 'Guía de usuario',
  faq: 'Preguntas frecuentes',
  intro: 'Introducción',
  tips: 'Consejos',
  troubleshooting: 'Solución de problemas',
};

const TYPE_COLORS: Record<string, string> = {
  guide: '#DCF0F7',
  faq: '#FCE8E0',
  intro: '#EFE9E3',
  tips: '#d4edda',
  troubleshooting: '#fff3cd',
};

const TYPE_TEXT: Record<string, string> = {
  guide: '#235F73',
  faq: '#E8854A',
  intro: '#5C6665',
  tips: '#2d6a4f',
  troubleshooting: '#856404',
};

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  const isProvider = category.role === 'provider';
  const accentColor = isProvider ? '#235F73' : '#F29A72';

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div style={{ backgroundColor: '#F7F3EF', borderBottom: '1px solid #E5DDD4' }}>
        <div className="max-w-5xl mx-auto px-6 py-3 text-sm" style={{ color: '#5C6665' }}>
          <Link href="/" className="hover:underline">Centro de Ayuda</Link>
          <span className="mx-2">›</span>
          <span style={{ color: '#1E2B2E' }}>{category.title}</span>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-12">
        {/* Category header */}
        <div className="mb-10">
          <div className="flex items-center gap-3 mb-3">
            <span className="text-3xl">{category.icon}</span>
            <h1 className="text-2xl font-bold" style={{ color: '#1E2B2E' }}>{category.title}</h1>
          </div>
          <p style={{ color: '#5C6665' }} className="text-sm max-w-xl">{category.description}</p>
          <div className="mt-2 text-xs font-medium" style={{ color: accentColor }}>
            {category.articles.length} artículos
          </div>
        </div>

        {/* Article list */}
        <div className="divide-y" style={{ borderColor: '#E5DDD4' }}>
          {category.articles.map((article) => (
            <Link key={article.slug} href={`/c/${category.slug}/${article.slug}`} className="block group">
              <div className="py-5 flex items-start justify-between gap-4 hover:bg-gray-50 -mx-4 px-4 rounded-lg transition-colors">
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1">
                    <span
                      className="text-xs px-2 py-0.5 rounded-full font-medium"
                      style={{
                        backgroundColor: TYPE_COLORS[article.type] || '#EFE9E3',
                        color: TYPE_TEXT[article.type] || '#5C6665',
                      }}
                    >
                      {TYPE_LABELS[article.type] || article.type}
                    </span>
                  </div>
                  <h3
                    className="font-semibold text-sm group-hover:underline"
                    style={{ color: '#1E2B2E' }}
                  >
                    {article.title}
                  </h3>
                  <p className="text-xs mt-1 leading-relaxed" style={{ color: '#5C6665' }}>
                    {article.description}
                  </p>
                </div>
                <span className="text-gray-400 text-lg flex-shrink-0 mt-1">›</span>
              </div>
            </Link>
          ))}
        </div>
      </main>

      {/* Back link */}
      <div className="max-w-5xl mx-auto px-6 pb-12">
        <Link href="/" className="text-sm font-medium hover:underline" style={{ color: accentColor }}>
          ← Volver al Centro de Ayuda
        </Link>
      </div>

      <footer className="border-t py-8" style={{ borderColor: '#E5DDD4' }}>
        <div className="max-w-5xl mx-auto px-6 text-center text-xs" style={{ color: '#5C6665' }}>
          © 2026 Manito · Centro de Ayuda
        </div>
      </footer>
    </div>
  );
}
