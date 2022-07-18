import { useLocation, Link } from '@remix-run/react';
import React from 'react';
import { FiMoon, FiSun } from 'react-icons/fi';
import { menuItems } from '~/data';

// Active navlinks function
function NavLink({
  to,
  className,
  activeClassName,
  inactiveClassName,
  ...rest
}: any) {
  let location = useLocation();
  let isActive = location.pathname === to;
  let allClassNames =
    className + (isActive ? `${activeClassName}` : `${inactiveClassName}`);
  return <Link className={allClassNames} to={to} {...rest} />;
}

const MobileNav = ({ menuOpen, setMenuOpen }: any) => {
  const location = useLocation();
  return (
    <nav className={`${menuOpen ? 'block lg:hidden' : 'hidden'}`}>
      {/* mobile menu items */}
      <ul
        className={`${
          menuOpen
            ? 'block  rounded-b-[20px] shadow-md absolute left-0 top-20 z-[22222222222222] w-full bg-white dark:bg-[#1d1d1d]'
            : 'flex my-12 '
        }`}
      >
        {menuItems.map((item) => (
          <li onClick={() => setMenuOpen(false)} key={item.id}>
            <NavLink
              key={item.id}
              activeClassName=" text-[#FA5252]  hover:text-[#FA5252] "
              inactiveClassName=" dark:text-white dark:hover:text-[#FA5252]  hover:text-[#FA5252]  "
              className={`${
                menuOpen ? ' pl-4' : ' mx-2.5 rounded-md '
              }    cursor-pointer  transition-colors duration-300 ease-in-out  font-poppins   text-gray-lite font-medium   flex text-xtiny py-2.5 md:px-4 xl:px-5 items-center  ${
                location.pathname === '/homeTwo' && item.id === '01'
                  ? ' dark:text-[#FA5252] text-[#FA5252]   '
                  : ''
              }`}
              to={item?.link}
            >
              <span className="mr-2 text-xl">{item?.icon}</span> {item?.name}
            </NavLink>
          </li>
        ))}

        {/* mobile dark and light mode button */}

        {/* {!check ? (
          <span
            onClick={() => handle('dark')}
            className="bg-white text-black hover:text-white w-[40px] hidden  h-[40px] rounded-full lg:flex justify-center items-center  hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer "
          >
            <FiMoon className=" text-3xl " />
          </span>
        ) : (
          <span
            onClick={() => handle('light')}
            className="bg-black w-[40px] h-[40px] hidden  rounded-full lg:flex justify-center items-center   hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer "
          >
            <FiSun className="text-white text-3xl" />
          </span>
        )} */}
      </ul>
    </nav>
  );
};

export default MobileNav;
