import { getCollection } from 'astro:content';
import type { APIRoute } from 'astro';

export const GET: APIRoute = async () => {
  const posts = await getCollection('blog');
  
  const searchData = posts
    .filter(post => !post.data.draft)
    .map(post => ({
      slug: post.slug,
      title: post.data.title,
      description: post.data.description,
      tags: post.data.tags,
      content: post.body, // This includes the markdown content for searching
      pubDate: post.data.pubDate.toISOString(),
    }));

  return new Response(JSON.stringify(searchData), {
    status: 200,
    headers: {
      'Content-Type': 'application/json',
    },
  });
};