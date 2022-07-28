# Welcome to My Blog!

This blog is built by `remix-run` and `tailwindCSS`.

- [Remix Docs](https://remix.run/docs)

## Development

### local

```sh
npm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

### Add new article

Add `xxx.mdx` to the folder `blog`.

#### Template

```md
---
title: 
description: 
publishedAt: '2020-10-19'
tags: ['']
image: 'image url' # if has cover image.
isPublished: true # decide if publish
---
```

## Deployment

As `fs` is not working properly on `vercel`, so we use `github` api to fetch all the blog articles. That's why I add a `loading spinner` to indicate the loading state.
However, we use `fs` in local developement.
Please see the file `app/api/read-post.server.ts`