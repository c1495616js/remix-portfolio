import React from 'react';
import { Link } from '@remix-run/react';

import logo from '~/assets/images/logo/logo.png';
import HomeCard from '~/components/share/HomeCard';
import MobileNav from './MobileNav';
import Nav from './Nav';
import Footer from '../share/Footer';

const index: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
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
          </div>
        </div>

        {/* mobile nav */}
        <MobileNav />

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

export default index;
