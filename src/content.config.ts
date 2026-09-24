import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

// One YAML file per show in src/content/shows/.
const shows = defineCollection({
  loader: glob({ pattern: '**/*.{yaml,yml}', base: './src/content/shows' }),
  schema: z.object({
    date: z.coerce.date(),
    city: z.string(),
    venue: z.string().optional().default(''),
    address: z.string().optional().default(''),
    doors: z.string().optional().default(''),
    show_time: z.string().optional().default(''),
    price: z.string().optional().default(''),
    ages: z.string().optional().default(''),
    with: z.array(z.string()).optional().default([]),
    link: z.string().optional().default(''),
    accessibility: z.string().optional().default(''),
    notes: z.string().optional().default(''),
  }),
});

// One Markdown file per release in src/content/releases/. The body holds credits and notes.
const releases = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/releases' }),
  schema: z.object({
    title: z.string(),
    type: z.enum(['LP', 'EP', 'Single', '2-track']),
    date: z.coerce.date(),
    summary: z.string().optional().default(''),
    cover: z.string().optional().default(''),
    bandcamp_url: z.string().optional().default(''),
    bandcamp_id: z.string().optional().default(''),
    bandcamp_kind: z.enum(['album', 'track']).optional().default('album'),
    spotify_url: z.string().optional().default(''),
    tracks: z.array(z.string()).optional().default([]),
    tint: z.string().optional().default('#2a1d3f'),
  }),
});

export const collections = { shows, releases };
