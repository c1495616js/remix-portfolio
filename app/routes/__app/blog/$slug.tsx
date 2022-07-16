import { getMDXComponent } from 'mdx-bundler/client';
import { useMemo } from 'react';
import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';

import { getPost } from '~/api/read-post.server';
import { Link, useLoaderData } from '@remix-run/react';
import MdxComponents from '~/components/routes/blog/MdxComponents';
import imgPlaceholder from '~/assets/images/blog_images/1.jpg';

type LoaderData = {
  frontmatter: any;
  code: string;
};

export const loader: LoaderFunction = async ({ params, request }) => {
  const slug = params.slug;

  if (!slug) throw new Response('Not found', { status: 404 });

  const post = await getPost(slug);
  if (post) {
    const { frontmatter, code } = post;
    return json({ frontmatter, code });
  } else {
    throw new Response('Not found', { status: 404 });
  }
};

export default function Post() {
  const { code, frontmatter } = useLoaderData<LoaderData>();
  const Component = useMemo(() => getMDXComponent(code), [code]);
  const { slug, title, image, publishedAt, tags } = frontmatter;

  return (
    <>
      <header>
        <div className="overflow-hidden rounded-lg">
          <img
            //   onClick={() => handleModle(item?.id)}
            className="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
            src={image || imgPlaceholder}
            alt=""
          />
        </div>

        <div className="flex mt-4 text-tiny text-gray-lite dark:text-[#A6A6A6]">
          <span>{publishedAt}</span>
          <span className="pl-6 relative after:absolute after:h-1 after:w-1 after:bg-gray-lite after:rounded-full after:left-2 after:top-[50%] transform after:-translate-y-1/2">
            {tags.join(', ')}
          </span>
        </div>

        <h3
          // onClick={() => setIsOpen(true)}
          className="text-xl font-medium dark:text-white duration-300 transition cursor-pointer mt-3 pr-4 hover:text-[#FA5252] dark:hover:text-[#FA5252]"
        >
          {title}
        </h3>
      </header>
      <main className="text-white">
        <Component components={MdxComponents} />
      </main>
    </>
  );
}
