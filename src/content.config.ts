import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'zod';

const writing = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/writing' }),
  schema: z.object({
    title: z.string(),
    publishDate: z.date(),
    readingTime: z.string().optional(),
    published: z.boolean().default(true),
  }),
});

export const collections = { writing };
