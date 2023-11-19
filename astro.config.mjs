import {defineConfig} from 'astro/config';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeToc from 'rehype-toc';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
  site: 'https://vsc-elements.github.io',
  output: 'static',
  integrations: [mdx()],
  markdown: {
    shikiConfig: {
      theme: 'material-theme-lighter',
    },
    rehypePlugins: [
      rehypeSlug,
      [rehypeAutolinkHeadings, {behavior: 'wrap'}],
    ],
  },
});
