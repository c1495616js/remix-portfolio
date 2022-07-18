import { useLocation, Link } from '@remix-run/react';
import React from 'react';

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

const Nav = () => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  const location = useLocation();
  return (
    <header className="lg:w-[440px] h-[144px] hidden lg:block  p-[30px] ml-auto mb-10  rounded-[16px] bg-white dark:bg-[#111111] ">
      {/* menu for mobile devices*/}
      <nav className={`${menuOpen ? 'block mx-auto' : 'hidden lg:block'}`}>
        <ul
          className={`${
            menuOpen ? 'block absolute left-0 top-20 w-full' : 'flex  '
          }  `}
        >
          {menuItems.map((item) => (
            <NavLink
              key={item.id}
              activeClassName="text-white  bg-gradient-to-r from-[#FA5252] to-[#DD2476] linked"
              inactiveClassName="transition-all duration-300 ease-in-out dark:hover:text-white dark:bg-[#212425] hover:text-white   hover:bg-gradient-to-r from-[#FA5252] to-[#DD2476]  "
              className={`w-20 h-20 rounded-[10px]  cursor-pointer  transition-all duration-300 ease-in-out    font-poppins  bg-[#F3F6F6]  font-medium mx-2.5  text-xtiny text-gray-lite dark:text-[#A6A6A6]    justify-center flex flex-col items-center ${
                location.pathname === item.link &&
                ' lg:text-white lg:dark:text-white   lg:bg-gradient-to-r from-[#FA5252] to-[#DD2476] '
              }`}
              to={item?.link}
            >
              <span className=" text-xl mb-1">{item?.icon}</span> {item?.name}
            </NavLink>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Nav;
