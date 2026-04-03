import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MDXRemote } from 'next-mdx-remote/rsc';
import { categories, getCategoryBySlug } from '@/content/categories';
import { getArticleContent, getAllArticleSlugs } from '@/lib/articles';
import Header from '@/components/Header';

export async function generateStaticParams() {
  return getAllArticleSlugs().map(({ categorySlug, articleSlug }) => ({
    slug: categorySlug,
    article: articleSlug,
  }));
}

const TYPE_LABELS: Record<string, string> = {
  guide: 'Guía de usuario',
  faq: 'Preguntas frecuentes',
  intro: 'Introducción',
  tips: 'Consejos',
  troubleshooting: 'Solución de problemas',
};

// Custom MDX components
const mdxComponents = {
  // Render blockquotes that start with [SCREENSHOT as screenshot placeholders
  blockquote: ({ children }: { children: React.ReactNode }) => {
    const text = String(children);
    if (text.includes('[SCREENSHOT')) {
      const match = text.match(/\[SCREENSHOT:\s*(.+?)\]/);
      const caption = match ? match[1] : 'Captura de pantalla';
      return (
        <div
          className="rounded-lg p-6 my-4 text-center border-2 border-dashed"
          style={{ backgroundColor: '#DCF0F7', borderColor: '#235F73' }}
        >
          <div className="text-3xl mb-2">📸</div>
          <p className="text-sm font-medium" style={{ color: '#235F73' }}>{caption}</p>
          <p className="text-xs mt-1" style={{ color: '#5C6665' }}>Screenshot pendiente</p>
        </div>
      );
    }
    return (
      <blockquote
        className="border-l-4 pl-4 py-2 my-4 rounded-r-lg text-sm"
        style={{ borderColor: '#F29A72', backgroundColor: '#F7F3EF', color: '#3D4746' }}
      >
        {children}
      </blockquote>
    );
  },
};

export default function ArticlePage({ params }: { params: { slug: string; article: string } }) {
  const category = getCategoryBySlug(params.slug);
  if (!category) notFound();

  const articleMeta = category.articles.find((a) => a.slug === params.article);
  if (!articleMeta) notFound();

  const data = getArticleContent(params.slug, params.article);
  if (!data) notFound();

  const { meta, content } = data;
  const isProvider = category.role === 'provider';
  const accentColor = isProvider ? '#235F73' : '#F29A72';

  // Sidebar: other articles in same category
  const otherArticles = category.articles.filter((a) => a.slug !== params.article);

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Breadcrumb */}
      <div style={{ backgroundColor: '#F7F3EF', borderBottom: '1px solid #E5DDD4' }}>
        <div className="max-w-5xl mx-auto px-6 py-3 text-sm" style={{ color: '#5C6665' }}>
          <Link href="/" className="hover:underline">Centro de Ayuda</Link>
          <span className="mx-2">›</span>
          <Link href={`/c/${category.slug}`} className="hover:underline">{category.title}</Link>
          <span className="mx-2">›</span>
          <span style={{ color: '#1E2B2E' }}>{meta.title}</span>
        </div>
      </div>

      <main className="max-w-5xl mx-auto px-6 py-10">
        <div className="flex gap-10">

          {/* Article */}
          <div className="flex-1 min-w-0">
            {/* Article header */}
            <div className="mb-8">
              <span
                className="text-xs px-2 py-1 rounded-full font-medium"
                style={{ backgroundColor: isProvider ? '#DCF0F7' : '#FCE8E0', color: accentColor }}
              >
                {TYPE_LABELS[meta.type] || meta.type}
              </span>
              <h1 className="text-2xl font-bold mt-3 mb-2" style={{ color: '#1E2B2E' }}>
                {meta.title}
              </h1>
              <p className="text-sm" style={{ color: '#5C6665' }}>{meta.description}</p>
              <p className="text-xs mt-2" style={{ color: '#B8A894' }}>
                Actualizado el {meta.lastUpdated}
              </p>
            </div>

            {/* Article body */}
            <div className="article-content">
              <MDXRemote source={content} components={mdxComponents} />
            </div>

            {/* Was this helpful */}
            <div
              className="mt-12 p-6 rounded-xl text-center"
              style={{ backgroundColor: '#F7F3EF', border: '1px solid #E5DDD4' }}
            >
              <p className="font-semibold text-sm mb-3" style={{ color: '#1E2B2E' }}>
                ¿Este artículo te fue útil?
              </p>
              <div className="flex justify-center gap-3">
                <button
                  className="px-5 py-2 rounded-lg text-sm font-medium text-white transition-opacity hover:opacity-90"
                  style={{ backgroundColor: accentColor }}
                >
                  👍 Sí
                </button>
                <button
                  className="px-5 py-2 rounded-lg text-sm font-medium transition-colors"
                  style={{ backgroundColor: '#fff', border: '1px solid #E5DDD4', color: '#5C6665' }}
                >
                  👎 No
                </button>
              </div>
            </div>

            {/* Back */}
            <div className="mt-8">
              <Link
                href={`/c/${category.slug}`}
                className="text-sm font-medium hover:underline"
                style={{ color: accentColor }}
              >
                ← Volver a {category.title}
              </Link>
            </div>
          </div>

          {/* Sidebar */}
          <aside className="w-64 flex-shrink-0 hidden lg:block">
            <div
              className="rounded-xl p-5 sticky top-6"
              style={{ backgroundColor: '#F7F3EF', border: '1px solid #E5DDD4' }}
            >
              <p className="text-xs font-bold uppercase tracking-wide mb-4" style={{ color: '#5C6665' }}>
                En esta colección
              </p>
              <div className="space-y-1">
                {category.articles.map((a) => (
                  <Link key={a.slug} href={`/c/${category.slug}/${a.slug}`}>
                    <div
                      className={`text-xs py-2 px-3 rounded-lg transition-colors cursor-pointer ${
                        a.slug === params.article ? 'font-semibold' : 'hover:bg-white'
                      }`}
                      style={{
                        color: a.slug === params.article ? accentColor : '#3D4746',
                        backgroundColor: a.slug === params.article ? '#fff' : undefined,
                      }}
                    >
                      {a.title}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </aside>

        </div>
      </main>

      <footer className="border-t py-8 mt-4" style={{ borderColor: '#E5DDD4' }}>
        <div className="max-w-5xl mx-auto px-6 text-center text-xs" style={{ color: '#5C6665' }}>
          © 2026 Manito · Centro de Ayuda
        </div>
      </footer>
    </div>
  );
}
