import fs from 'fs/promises';
import path from 'path';
import globby from 'globby';
import readingTime from 'reading-time';
import { bundleMDX } from 'mdx-bundler';

import type { Frontmatter } from '~/types';

const MDX_PATH = 'blog';

export async function getAllFrontMatters(): Promise<Frontmatter[]> {
  const paths = await globby([`${MDX_PATH}/**/*.mdx`]);

  const matters = await Promise.all(
    paths.map(async (filePath) => {
      const source = await fs.readFile(path.join(filePath), 'utf8');
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

export async function getAllRemoteFrontMatters(): Promise<Frontmatter[]> {
  const files = await fetchMarkdownFiles();
  const matters = await Promise.all(
    files.map(async (file: any) => {
      const source = (await fetchMarkdownFile(file.name)) || '';
      const { code, frontmatter } = await bundleMDX({ source });
      return {
        ...(frontmatter as Frontmatter),
        slug: path.basename(file.name).replace('.mdx', ''),
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

export async function getRemotePost(slug: string) {
  const source = (await fetchMarkdownFile(slug + '.mdx')) || '';

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

export async function fetchMarkdownFile(fileName: string) {
  const accessToken = process.env.GITHUB_ACCESS_TOKEN;
  const accountName = 'c1495616js';
  const repoName = 'remix-portfolio';
  const headers = new Headers();
  headers.set('Accept', 'application/vnd.github.v3.raw');
  headers.set('Authorization', `token ${accessToken}`);
  headers.set('User-Agent', '<your-app-name>');

  const repo = `https://api.github.com/repos/${accountName}/${repoName}`;
  const dir = '/contents/blog/';
  const url = new URL(repo + dir + fileName);

  const response = await fetch(url, { headers });
  if (!response.ok || response.status !== 200) {
    if (response.status === 404) {
      return undefined; // File not found
    }
    throw Error(
      `Fetching Markdown file from GitHub failed with ${response.status}: ${response.statusText}`
    );
  }
  return response.text();
}

export async function fetchMarkdownFiles() {
  const accessToken = process.env.GITHUB_ACCESS_TOKEN;
  const accountName = 'c1495616js';
  const repoName = 'remix-portfolio';
  const headers = new Headers();
  headers.set('Accept', 'application/vnd.github.v3.raw');
  headers.set('Authorization', `token ${accessToken}`);
  headers.set('User-Agent', '<your-app-name>');

  const repo = `https://api.github.com/repos/${accountName}/${repoName}`;
  const dir = '/contents/blog/';
  const url = new URL(repo + dir);

  const response = await fetch(url, { headers });
  if (!response.ok || response.status !== 200) {
    if (response.status === 404) {
      return undefined; // File not found
    }
    throw Error(
      `Fetching Markdown file from GitHub failed with ${response.status}: ${response.statusText}`
    );
  }
  return response.json();
}
