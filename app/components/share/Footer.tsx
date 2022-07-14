import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="overflow-hidden rounded-b-2xl dark:bg-[#111111]">
      <p className="text-center py-6 text-gray-lite  dark:text-color-910 ">
        © {new Date().getFullYear()} All Rights Reserved by{' '}
        <a
          className="hover:text-[#FA5252] duration-300 transition"
          href="https://themeforest.net/user/ib-themes"
          target="_blank"
          rel="noopener noreferrer"
        >
          ib-themes
        </a>
        .
      </p>
    </footer>
  );
};

export default Footer;
