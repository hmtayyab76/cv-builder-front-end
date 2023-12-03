import React from "react";

function Footer() {
  return (
    <div className="flex flex-col">
      <div className=" w-full flex items-center justify-center fbg-1 py-4">
        <div className="bg-white rounded-full px-2 py-1 cursor-pointer mr-3">
          <i class="fa-brands fb fa-facebook hover:text-orange-600"></i>
        </div>
        <div className="bg-white rounded-full px-2 py-1 cursor-pointer mr-3">
          <i class="fa-brands fb fa-linkedin hover:text-orange-600"></i>
        </div>
        <div className="bg-white rounded-full px-2 py-1 cursor-pointer mr-3">
          <i class="fa-brands fb fa-twitter hover:text-orange-600"></i>
        </div>
        <div className="bg-white rounded-full px-2 py-1 cursor-pointer mr-3">
          <i class="fa-brands fb fa-instagram hover:text-orange-600"></i>
        </div>
      </div>
      <div className="fbg-2 w-full text-white flex p-8 max-lg:flex-col max-lg:px-10 px-20">
        <div className=" max-lg:w-full max-lg:mb-5 w-1/2 flex justify-around">
          <ul className=" max-lg:pr-0 pr-10">
            <li className=" max-lg:mb-5 mb-8 font-bold text-xl">
              <p>Novorésumé</p>
            </li>
            <li className=" max-lg:mb-5 mb-8 hover:underline font-normal opacity-70  text-md cursor-pointer">
              Homepage
            </li>
            <li className=" max-lg:mb-5 mb-8 hover:underline font-normal opacity-70  text-md cursor-pointer">
              Resume Templates
            </li>
            <li className=" max-lg:mb-5 mb-8 hover:underline font-normal opacity-70  text-md cursor-pointer">
              CV Templates
            </li>
            <li className=" max-lg:mb-5 mb-8 hover:underline font-normal opacity-70  text-md cursor-pointer">
              Cover Letters
            </li>
          </ul>
          <ul className=" max-lg:pl-0 pl-10">
            <li className=" max-lg:mb-5 mb-8 font-bold text-xl">
              <p>Learn</p>
            </li>
            <li className=" max-lg:mb-5 mb-8 hover:underline font-normal opacity-70  text-md cursor-pointer">
              Career Blog
            </li>
            <li className=" max-lg:mb-5 mb-8 hover:underline font-normal opacity-70  text-md cursor-pointer">
              How to Write a Resume
            </li>
            <li className=" max-lg:mb-5 mb-8 hover:underline font-normal opacity-70  text-md cursor-pointer">
              How to Write CV
            </li>
            <li className=" max-lg:mb-5 mb-8 hover:underline font-normal opacity-70  text-md cursor-pointer">
              How to Write a Cover Letter
            </li>
            <li className=" max-lg:mb-5 mb-8 hover:underline font-normal opacity-70  text-md cursor-pointer">
              Resume Examples
            </li>
            <li className=" max-lg:mb-5 mb-8 hover:underline font-normal opacity-70  text-md cursor-pointer">
              Cover Letter Examples
            </li>
          </ul>
        </div>
        <div className=" max-lg:w-full max-lg:mb-5 w-1/2 flex justify-around ">
          <ul className=" max-lg:pr-0 pr-10">
            <li className=" max-lg:mb-5 mb-8 font-bold text-xl">
              <p>Other</p>
            </li>
            <li className=" max-lg:mb-5 mb-8 hover:underline font-normal opacity-70  text-md cursor-pointer">
              Pricing
            </li>
            <li className=" max-lg:mb-5 mb-8 hover:underline font-normal opacity-70  text-md cursor-pointer">
              About Us
            </li>
            <li className=" max-lg:mb-5 mb-8 hover:underline font-normal opacity-70  text-md cursor-pointer">
              E-book
            </li>
            <li className=" max-lg:mb-5 mb-8 hover:underline font-normal opacity-70  text-md cursor-pointer">
              Help Center
            </li>
            <li className=" max-lg:mb-5 mb-8 hover:underline font-normal opacity-70  text-md cursor-pointer">
              Help Center
            </li>
          </ul>
          <ul className=" max-lg:pl-0 pl-10">
            <li className=" max-lg:mb-5 mb-8 font-bold text-xl">
              <p>Legal/Contact</p>
            </li>
            <li className=" max-lg:mb-5 mb-8 hover:underline font-normal opacity-70  text-md cursor-pointer">
              Terms of Use
            </li>
            <li className=" max-lg:mb-5 mb-8 hover:underline font-normal opacity-70  text-md cursor-pointer">
              Privacy Policy
            </li>
            <li className=" max-lg:mb-5 mb-8 hover:underline font-normal opacity-70  text-md cursor-pointer">
              Cookie Policy
            </li>
            <li className=" max-lg:mb-5 mb-8 hover:underline font-normal opacity-70  text-md cursor-pointer">
              contact@novoresume.com
            </li>
          </ul>
        </div>
      </div>
      <div className=" flex justify-center flex-col items-center fbg-3 text-white  py-5">
        <p className=" font-medium mb-3">Our Vision is to</p>
        <h2 className=" text-xl font-semibold mb-3">
          Fight Galactic Unemployment
        </h2>
        <div className="line2 mb-6"></div>
        <p className=" font-medium mb-2">Ny Carlsberg Vej 80</p>
        <p className=" font-medium mb-4">DK 1799 Copenhagen, Denmark</p>
        <p>Copyright © 2023 Novorésumé ApS. All Rights Reserved.</p>
      </div>
    </div>
  );
}

export default Footer;
