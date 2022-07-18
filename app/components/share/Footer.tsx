import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="overflow-hidden rounded-b-2xl dark:bg-[#111111]">
      <p className="text-center py-6 text-gray-lite  dark:text-color-910 ">
        © {new Date().getFullYear()} All Rights Reserved.
      </p>
    </footer>
  );
};

export default Footer;
