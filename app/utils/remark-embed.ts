import remarkEmbedder from '@remark-embedder/core';
import oembedTransformer from '@remark-embedder/transformer-oembed';
import type { Pluggable } from 'unified';

const plugin: Pluggable<any[]> = [
  remarkEmbedder,
  {
    transformers: [oembedTransformer],
  },
];

export default plugin;
