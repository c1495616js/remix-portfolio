import React from 'react';
import { BsXCircle } from 'react-icons/bs';
import { Link } from '@remix-run/react';

const BlogContentLayout: React.FC<React.PropsWithChildren<{}>> = ({
  children,
}) => {
  return (
    <div className="w-full flex items-center lg:w-[850px] bg-white dark:bg-[#323232] mx-auto rounded-xl p-2 md:p-8 absolute left-1/2 top-1/2  h-screen lg:h-auto transform -translate-x-[50%] -translate-y-[50%] shadow-lg ">
      <div
        className={`${'scrollbarDark scrollbar-hide'} overflow-y-auto max-h-[100vh] lg:max-h-[80vh]`}
      >
        <div className="pr-3 pb-2">
          <Link to="/blog">
            <BsXCircle
              // onClick={onClose}
              className="text-7xl cursor-pointer  absolute right-2 -top-12 md:-right-10 md:-top-6  text-white transition transform hover:rotate-45 duration-300 ease-in-out "
            />
          </Link>
          {/* <img
                className=" w-full md:h-[450px]  object-cover rounded-xl mt-6"
                src={singleData.img}
                alt=""
              />
              <div className="flex mt-4 text-tiny text-black dark:text-white">
                <span>{singleData?.date}</span>
                <span className="pl-6 relative after:absolute after:h-1 after:w-1 after:bg-gray-lite after:rounded-full after:left-2 after:top-[50%] transform after:-translate-y-1/2">
                  {singleData?.category}
                </span>
              </div>
              <h2 className="dark:text-white sm:text-3xl mt-2 font-medium">
                {singleData.title}
              </h2> */}
          {/* {blogDescriptionSplit?.map((item, j) => (
                <p
                  className="dark:text-white font-normal text-[15px] sm:text-sm my-4"
                  key={j}
                >
                  {item}
                </p>
              ))} */}
        </div>

        {/* Comment show section */}
        <div className="rounded-lg my-4 bg-gradient-to-r from-[#FA5252] to-[#DD2476] p-[1px]">
          <div className=" dark:bg-[#232220] bg-[#ffffff]   flex  p-4 rounded-lg  ">
            <div>
              {/* <img
                    className="  md:w-[125px] rounded-xl "
                    src={user}
                    alt=""
                  /> */}
            </div>
            <div className="w-full relative">
              <section className="block lg:hidden fixed top-12 right-8 z-20 bg-slate-500 p-2 mr-4 rounded-md">
                <Link to="/blog">
                  <BsXCircle
                    // onClick={onClose}
                    className="text-7xl cursor-pointer   text-white transition transform hover:rotate-45 duration-300 ease-in-out "
                  />
                </Link>
              </section>
              {/* <div className="flex justify-between items-center">
                    <h3 className="dark:text-white text-[22px] font-medium">
                      Rafia Ana
                    </h3>{' '}
                    <span className="dark:text-[#dedede] text-tiny ">
                      15 min ago
                    </span>
                  </div>
                  <p className="dark:text-white  md:pr-16">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                    Sequi nam ad, unde vel aut soluta atque consequatur. Omnis,
                    debitis nihil?
                  </p>
                  <button className="dark:text-[#dedede] text-tiny hover:text-[#FA5252] dark:hover:text-[#FA5252]">
                    Reply
                  </button> */}

              {children}
            </div>
          </div>
        </div>
        {/* End Comment show Section */}

        {/* Start Social Share */}

        {/* End Social Share */}

        {/* Start Comment Box */}

        {/* <div className="pt-3">
            <div className=" pr-3 pb-4">
              <form className="w-full ">
                <label className="block mb-2">
                  <span className="dark:text-white text-[25px] font-medium  ">
                    Leave a Reply
                  </span>
                  <textarea
                    className="block w-full mt-3 p-3 dark:text-white hover:outline-none hover:border-0 focus:outline-none rounded dark:bg-[#0b0b0b5e] bg-gray  "
                    rows={3}
                  ></textarea>
                </label>
                <button className="flex items-center  bg-gradient-to-r from-[#FA5252] to-[#DD2476] duration-200 transition ease-linear  hover:bg-gradient-to-l from-[#DD2476]  to-[#fa5252ef] px-8 py-[12px] text-lg text-white rounded-[35px] mt-8">
                  Comment
                </button>
              </form>
            </div>
          </div> */}
        {/* End Comment Box */}
      </div>
    </div>
  );
};

export default BlogContentLayout;
