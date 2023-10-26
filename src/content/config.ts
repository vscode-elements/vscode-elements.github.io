import {defineCollection, z} from 'astro:content';

const componentsCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

const apiCollection = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
  }),
});

export const collections = {
  components: componentsCollection,
  api: apiCollection,
};
