import React from 'react';

import { useLoaderData } from '@remix-run/react';
import { BsXCircle } from 'react-icons/bs';
import Modal from 'react-modal';
import { json, LoaderFunction } from '@remix-run/node';

import user from '../../assets/images/about/about.jpg';
import {
  FaDribbble,
  FaFacebookF,
  FaLinkedinIn,
  FaTwitter,
} from 'react-icons/fa';
// import { blogsData } from '~/data';
import { getAllFrontMatters } from '~/api/read-post.server';
import BlogItem from '~/components/routes/blog/BlogItem';

export const loader: LoaderFunction = async () => {
  const data = await getAllFrontMatters();
  console.log('data:', data);
  return json<{ data: Awaited<ReturnType<typeof getAllFrontMatters>> }>({
    data,
  });
};

const Blog = () => {
  //   const handleModle = (id) => {
  //     handleBlogsData(id);
  //   };

  //   const blogDescriptionSplit = singleData?.description?.split('\n');

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

            {/* Blog modal End  */}
          </div>
          {/* End .blog */}
        </div>
      </section>
    </>
  );
};

export default Blog;
