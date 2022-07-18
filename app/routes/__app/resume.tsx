import React from 'react';
import ResumeCard from '~/components/routes/resume/ResumeCard';
import { resumeArray } from '~/data';

const resume = () => {
  return (
    <section className="bg-white  lg:rounded-2xl dark:bg-[#111111]">
      <div data-aos="fade">
        <div className="container  sm:px-5 md:px-10 lg:px-20">
          <div className="py-12 px-4">
            {/*page title here */}
            <h2 className="after-effect after:left-44 mb-[40px] mt-12 lg:mt-0">
              Resume
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 ">
              {/* resume items map */}
              {resumeArray.map((item) => (
                <ResumeCard {...item} key={item.type} />
              ))}
            </div>
          </div>
        </div>
        {/* End education */}

        <div className="container bg-color-810 dark:bg-[#0D0D0D] py-12 px-4 sm:px-5 md:px-10 lg:px-20">
          <div className="grid grid-cols-1  md:grid-cols-2 gap-8">
            <div className="col-span-1">
              <h4 className="text-5xl dark:text-white font-medium mb-8">
                Working Skills
              </h4>

              {/* Knowledges items */}

              <div className="flex gap-x-3 gap-y-3 md:gap-y-6 md:gap-x-4">
                <button className="resume-btn">React</button>
                <button className="resume-btn">Typescript</button>
                <button className="resume-btn">TailwindCSS</button>
                <button className="resume-btn">Nest.js</button>
              </div>
            </div>
          </div>
        </div>
        {/* End Skills */}
      </div>
    </section>
  );
};

export default resume;
