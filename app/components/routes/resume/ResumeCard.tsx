import React from 'react';
import type { IconType } from 'react-icons/lib';

interface ResumeDetail {
  id: string;
  date: string;
  title: string;
  place: string;
  bg: string;
}

type Props = {
  type: string;
  icon: IconType;
  data: ResumeDetail[];
};

const ResumeCard = ({ type, icon, data }: Props) => {
  const Icon = icon;
  return (
    <div>
      <div className="flex items-center space-x-2 mb-4 ">
        <Icon className="text-6xl text-[#F95054]" />
        <h4 className="text-5xl dark:text-white font-medium">{type}</h4>
      </div>
      {data.map(({ date, id, title, place }) => (
        <div
          key={id}
          style={{
            background: `'transparent'`,
          }}
          className="py-4 pl-5 pr-3 space-y-2 mb-6 rounded-lg  dark:border-[#212425] dark:border-2"
        >
          <span className="text-tiny text-gray-lite dark:text-[#b7b7b7]">
            {date}
          </span>
          <h3 className="text-xl dark:text-white">{title}</h3>
          <p className="dark:text-[#b7b7b7]">{place}</p>
        </div>
      ))}
    </div>
  );
};

export default ResumeCard;
