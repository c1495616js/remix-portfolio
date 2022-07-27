import React from 'react';

import { useLoaderData, Outlet, useParams } from '@remix-run/react';
import type { LoaderFunction } from '@remix-run/node';
import { json } from '@remix-run/node';

import type { getAllFrontMatters } from '~/api/read-post.server';
import {
  fetchMarkdownFiles,
  getAllRemoteFrontMatters,
} from '~/api/read-post.server';
import BlogItem from '~/components/routes/blog/BlogItem';
import BlogModal from '~/components/routes/blog/BlogModal';
import BlogContentLayout from '~/components/routes/blog/BlogContentLayout';

export const loader: LoaderFunction = async () => {
  const data = await getAllRemoteFrontMatters();

  return json<{ data: Awaited<ReturnType<typeof getAllFrontMatters>> }>({
    data,
  });
};

const Blog = () => {
  const { slug } = useParams();

  const { data: blogsData } = useLoaderData<{
    data: Awaited<ReturnType<typeof getAllFrontMatters>>;
  }>();
  return (
    <>
      <section className="bg-white  lg:rounded-2xl dark:bg-[#111111]">
        <div data-aos="fade">
          <div className="container px-4 sm:px-5 md:px-10 lg:px-[60px]">
            <div className="py-12">
              {/* Blog page title */}
              <h2 className="after-effect after:left-32 mt-12 lg:mt-0">
                Blogs
              </h2>
              <div className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-2  mt-[30px] grid  gap-x-10 gap-y-7  mb-6">
                {/* Blog items start */}
                {blogsData.map((item) => (
                  <BlogItem {...item} key={item.slug} />
                ))}
              </div>
            </div>
            {/* Blog items End */}

            {/* Blog modal start  */}

            <BlogModal isOpen={!!slug}>
              <BlogContentLayout>
                <Outlet />
              </BlogContentLayout>
            </BlogModal>

            {/* Blog modal End  */}
          </div>
          {/* End .blog */}
        </div>
      </section>
    </>
  );
};

export default Blog;
