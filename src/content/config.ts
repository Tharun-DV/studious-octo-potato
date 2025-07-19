import { defineCollection, z } from 'astro:content';

const blogCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    author: z.string().default('M1NDB3ND3R'),
    tags: z.array(z.string()).default([]),
    password: z.string().optional(),
    draft: z.boolean().default(false),
    readingTime: z.number().optional(), // Will be calculated automatically
  }),
});

export const collections = {
  blog: blogCollection,
};