import fs from 'fs/promises';
import path from 'path';
import globby from 'globby';
import readingTime from 'reading-time';
import { bundleMDX } from 'mdx-bundler';

import type { Frontmatter } from '~/types';

const MDX_PATH = 'content/blog';

export async function getAllFrontMatters(): Promise<Frontmatter[]> {
  const paths = await globby([`${MDX_PATH}/**/*.mdx`]);
  const matters = await Promise.all(
    paths.map(async (filePath) => {
      const source = await fs.readFile(filePath, 'utf8');
      const { code, frontmatter } = await bundleMDX({ source });
      return {
        ...(frontmatter as Frontmatter),
        slug: path.basename(filePath).replace('.mdx', ''),
        readingTime: readingTime(code, { wordsPerMinute: 300 }),
      };
    })
  );

  return matters
    .filter(Boolean)
    .filter((post) => post.isPublished)
    .sort(
      (a, b) =>
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
    );
}

export async function getPost(slug: string) {
  const source = await fs.readFile(path.join(MDX_PATH, slug + '.mdx'), 'utf-8');

  const { default: rehypePrism } = await import('rehype-prism-plus');
  const { default: remarkGfm } = await import('remark-gfm');
  const { default: rehypeAutolinkHeadings } = await import(
    'rehype-autolink-headings'
  );

  const { default: rehypeToc } = await import('rehype-toc');
  const { default: rehypeSlug } = await import('rehype-slug');

  const post = await bundleMDX({
    source,
    mdxOptions(options) {
      options.remarkPlugins = [...(options.remarkPlugins ?? []), remarkGfm];
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeAutolinkHeadings,
        rehypeSlug,
        rehypeToc,
        rehypePrism,
      ];

      return options;
    },
  }).catch((e) => {
    console.error(e);
    throw e;
  });

  return post;
}