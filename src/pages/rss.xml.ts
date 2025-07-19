import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');
  const publishedPosts = posts
    .filter(post => !post.data.draft)
    .sort((a, b) => b.data.pubDate.getTime() - a.data.pubDate.getTime());

  const rssItems = publishedPosts.map(post => `
    <item>
      <guid isPermaLink="true">https://blog.dv08.in${post.slug}</guid>
      <title>${post.data.title}</title>
      <link>https://blog.dv08.in${post.slug}</link>
      <description>${post.data.description}</description>
      <pubDate>${post.data.pubDate.toUTCString()}</pubDate>
      <author>${post.data.author}</author>
      ${post.data.tags.map(tag => `<category>${tag}</category>`).join('')}
    </item>
  `).join('');

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
      <channel>
        <title>M1NDB3ND3R - Computer Science Blog</title>
        <description>A computer science student's journey through algorithms, programming, and technology</description>
        <link>https://blog.dv08.in</link>
        <atom:link href="https://blog.dv08.in/rss.xml" rel="self" type="application/rss+xml"/>
        <language>en</language>
        <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
        ${rssItems}
      </channel>
    </rss>`;

  return new Response(rss, {
    status: 200,
    headers: {
      'Content-Type': 'application/xml',
    },
  });
}; 