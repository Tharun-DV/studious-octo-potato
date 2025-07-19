import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');
  const publishedPosts = posts.filter(post => !post.data.draft);

  const sitemapItems = [
    {
      url: 'https://blog.dv08.in',
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: '1.0',
    },
    {
      url: 'https://blog.dv08.in/blog',
      lastmod: new Date().toISOString(),
      changefreq: 'daily',
      priority: '0.9',
    },
    {
      url: 'https://blog.dv08.in/about',
      lastmod: new Date().toISOString(),
      changefreq: 'monthly',
      priority: '0.7',
    },
    ...publishedPosts.map(post => ({
      url: `https://blog.dv08.in/blog/${post.slug}`,
      lastmod: post.data.pubDate.toISOString(),
      changefreq: 'monthly',
      priority: '0.8',
    })),
  ];

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
      ${sitemapItems.map(item => `
        <url>
          <loc>${item.url}</loc>
          <lastmod>${item.lastmod}</lastmod>
          <changefreq>${item.changefreq}</changefreq>
          <priority>${item.priority}</priority>
        </url>
      `).join('')}
    </urlset>`;

  return new Response(sitemap, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}; 