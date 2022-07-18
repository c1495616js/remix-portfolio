import React from 'react';
import { Link } from '@remix-run/react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

import logo from '~/assets/images/logo/logo.png';
import HomeCard from '~/components/share/HomeCard';
import MobileNav from './MobileNav';
import Nav from './Nav';
import Footer from '../share/Footer';

const Index: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
  const [menuOpen, setMenuOpen] = React.useState(false);
  return (
    <>
      <section className="bg-homeBg dark:bg-homeTwoBg-dark min-h-screen  bg-no-repeat bg-center bg-cover bg-fixed  md:pb-16 w-full">
        <div
          className="container   w-full bg-[#F3F6F6] dark:bg-black lg:bg-transparent lg:dark:bg-transparent flex justify-between py-5  lg:px-0 lg:pt-[50px]"
          data-aos="fade"
        >
          <div className="w-full flex justify-between  px-4">
            {/* website logo */}

            <Link to="/">
              <img className="w-[200px] lg:w-[300px]" src={logo} alt="logo" />
            </Link>

            <div className="flex items-center">
              {/* dark and light mode button */}

              {/* {!check ? (
                <span
                  onClick={() => handle("dark")}
                  className="bg-white w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full flex justify-center items-center hover:bg-[#ef4060] text-black hover:text-white transition-all duration-300 ease-in-out cursor-pointer  "
                >
                  <FiMoon className=" text-3xl " />
                </span>
              ) : (
                <span
                  onClick={() => handle("light")}
                  className="bg-[#4D4D4D] w-[40px] h-[40px] lg:w-[50px] lg:h-[50px] rounded-full flex justify-center items-center hover:bg-[#ef4060] transition-all duration-300 ease-in-out cursor-pointer  "
                >
                  <FiSun className="text-white text-3xl" />
                </span>
              )} */}

              {/* mobile menu button */}

              {!menuOpen ? (
                <span
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="lg:hidden   bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center items-center text-white dark:text-white text-3xl ml-3 "
                >
                  <AiOutlineMenu />
                </span>
              ) : (
                <span
                  onClick={() => setMenuOpen(!menuOpen)}
                  className="lg:opacity-0 lg:invisible visible opacity-100  bg-[#ef4060] w-[40px] h-[40px] rounded-full flex justify-center items-center text-white text-3xl ml-3 "
                >
                  <AiOutlineClose />
                </span>
              )}
            </div>
          </div>
        </div>

        {/* mobile nav */}
        <MobileNav menuOpen={menuOpen} setMenuOpen={setMenuOpen} />

        <div className="container grid grid-cols-12 md:gap-10  justify-between lg:mt-[220px] ">
          <div className="col-span-12 lg:col-span-4 hidden lg:block h-screen sticky top-44">
            {/* profile sidebar */}
            <HomeCard />
          </div>
          <div className="col-span-12 lg:col-span-8  ">
            {/* desktop nav  */}
            <Nav />
            {children}
            <Footer />
          </div>
        </div>
      </section>
    </>
  );
};

export default Index;
