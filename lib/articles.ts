import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const articlesDir = path.join(process.cwd(), 'content', 'articles');

export interface ArticleMeta {
  title: string;
  description: string;
  category: string;
  type: string;
  lastUpdated: string;
}

export function getArticleContent(categorySlug: string, articleSlug: string): { meta: ArticleMeta; content: string } | null {
  const filePath = path.join(articlesDir, categorySlug, `${articleSlug}.mdx`);
  if (!fs.existsSync(filePath)) return null;
  const raw = fs.readFileSync(filePath, 'utf-8');
  const { data, content } = matter(raw);
  return { meta: data as ArticleMeta, content };
}

export function getAllArticleSlugs(): { categorySlug: string; articleSlug: string }[] {
  if (!fs.existsSync(articlesDir)) return [];
  const slugs: { categorySlug: string; articleSlug: string }[] = [];
  const categories = fs.readdirSync(articlesDir);
  for (const cat of categories) {
    const catDir = path.join(articlesDir, cat);
    if (!fs.statSync(catDir).isDirectory()) continue;
    const files = fs.readdirSync(catDir);
    for (const file of files) {
      if (file.endsWith('.mdx')) {
        slugs.push({ categorySlug: cat, articleSlug: file.replace('.mdx', '') });
      }
    }
  }
  return slugs;
}
