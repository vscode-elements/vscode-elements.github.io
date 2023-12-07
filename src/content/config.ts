import {defineCollection, z} from 'astro:content';

const apiCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    tagName: z.string(),
  }),
});

const articlesCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

const componentsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  api: apiCollection,
  articles: articlesCollection,
  components: componentsCollection,
};
