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

export async function getPost(fileName: string) {
  const file = await fs.readFile(`../data/blog/${fileName}`);
  return file.toString();
}
