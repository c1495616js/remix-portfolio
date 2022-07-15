import React from 'react';

import type { Frontmatter } from '~/types';

const BlogItem = ({
  title,
  slug,
  publishedAt,
  tags,
  readingTime,
  description,
}: Frontmatter) => {
  return (
    <div
      style={{
        background: `${'transparent'}`,
      }}
      className="p-5 rounded-lg mb-2 h-full dark:border-[#212425] dark:border-2"
    >
      <div className="overflow-hidden rounded-lg">
        {/* <img
        //   onClick={() => handleModle(item?.id)}
        className="rounded-lg w-full cursor-pointer transition duration-200 ease-in-out transform hover:scale-110"
        src={item?.imgSmall}
        alt=""
      /> */}
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
      <h6 className="dark:text-white/70 py-2 text-sm">{description}</h6>
    </div>
  );
};

export default BlogItem;
