import React from "react";
import desktop from "../../../assets/desktop.webp";
import f1 from "../../../assets/logo-business-insider.png";
import f2 from "../../../assets/logo-forbes.png";
import f3 from "../../../assets/logo-independent.png";
import f4 from "../../../assets/logo-interesting-engineering.png";
import f5 from "../../../assets/logo-lifehacker.png";
import f6 from "../../../assets/logo-recruiter.png";
function Section_Head() {
  return (
    <div>
      <div className=" w-full my-8 flex justify-center relative z-auto">
        <div className=" w-full my-5">
          <div className="max-lg:px-10 px-36 max-lg:w-full ">
            <h1 className=" max-lg:text-center font-medium max-lg:text-3xl lg:text-5xl xl:text-5xl xl:pr-56  max-lg:mr-0 mr-16 ">
              The online resume builder getting folks hired by BBC, Google,
              Apple, Tesla, and Airbnb.
            </h1>
          </div>
          <div className="w-full flex max-lg:flex-col max-lg:justify-center justify-between max-lg:px-10 px-36 max-lg-mt-0 mt-10">
            <div className=" py-6 max:lg:w-full flex flex-col  relative max-lg:m-auto">
              <p className="max-lg-text-xl text-3xl my-1 font-semibold w-full max-lg:text-center">
                Build your brand-new resume in as little as 5 minutes.
              </p>
              <p className=" text-xl font-extrabold my-1 max-lg:text-center">
                Try it for fre
              </p>
              <div className=" cursor-pointer bg-blue-400 hover:bg-blue-500 w-fit py-3 max-lg:px-16 px-6 mt-6 mb-2 rounded-full text-white font-semibold max-lg:m-auto max-lg:mt-10">
                Get Started <i className="fa-solid fa-arrow-right ml-2"></i>
              </div>
              <p className=" text-md max-lg:text-center mt-1">
                No Credit card required
              </p>
            </div>
            <div className=" max-lg:w-full  max-lg:mx-0 mx-14 shadow-lg ">
              <div className="lg-p-28">
                <img src={desktop} alt="slider" className=" w-full" />
              </div>
            </div>
          </div>
          <div className=" max-lg:block hidden   w-ful  -z-10 opacity-100">
            <svg
              width="100%"
              height="100%"
              id="svg"
              viewBox="0 0 1440 490"
              xmlns="http://www.w3.org/2000/svg"
              class="transition duration-300 ease-in-out delay-150 opacity-60"
            >
              <defs>
                <linearGradient
                  id="gradient"
                  x1="19%"
                  y1="89%"
                  x2="81%"
                  y2="11%"
                >
                  <stop offset="5%" stop-color="#51e2c2"></stop>
                  <stop offset="95%" stop-color="#4bccef"></stop>
                </linearGradient>
              </defs>
              <path
                d="M 0,500 C 0,500 0,250 0,250 C 134.93333333333334,244 269.8666666666667,238 434,250 C 598.1333333333333,262 791.4666666666667,292 964,295 C 1136.5333333333333,298 1288.2666666666667,274 1440,250 C 1440,250 1440,500 1440,500 Z"
                stroke="none"
                stroke-width="0"
                fill="url(#gradient)"
                fill-opacity="1"
                class="transition-all duration-300 ease-in-out delay-150 path-0"
              ></path>
            </svg>
            <div className=" relative">
              <div className="shap  w-full px-10 py-5  ">
                <h1 className=" font-extrabold text-white text-3xl">
                  Featured In
                </h1>
                <div className="underline"></div>
                <div className=" w-full mt-5 ">
                  <ul className=" flex  flex-wrap justify-center  w-full">
                    <li className="p-4 w-1/2 cursor-pointer">
                      <img src={f1} alt="a" width={100} height={45} />
                    </li>
                    <li className="p-4 w-1/2 cursor-pointer">
                      <img src={f2} alt="a" width={100} height={45} />
                    </li>
                    <li className="p-4 w-1/2 cursor-pointer">
                      <img src={f3} alt="a" width={100} height={45} />
                    </li>
                    <li className="p-4 w-1/2 cursor-pointer">
                      <img src={f4} alt="a" width={100} height={45} />
                    </li>
                    <li className="p-4 w-1/2 cursor-pointer">
                      <img src={f5} alt="a" width={100} height={45} />
                    </li>
                    <li className="p-4 w-1/2 cursor-pointer">
                      <img src={f6} alt="a" width={100} height={45} />
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <svg
              width="100%"
              height="100%"
              id="svg"
              viewBox="0 0 1440 390"
              xmlns="http://www.w3.org/2000/svg"
              class="transition duration-300 ease-in-out delay-150 opacity-10"
            >
              <defs>
                <linearGradient
                  id="gradient"
                  x1="19%"
                  y1="89%"
                  x2="81%"
                  y2="11%"
                >
                  <stop offset="5%" stop-color="#51e2c2"></stop>
                  <stop offset="95%" stop-color="#4bccef"></stop>
                </linearGradient>
              </defs>
              <path
                d="M 0,400 C 0,400 0,200 0,200 C 190.2666666666667,188.26666666666665 380.5333333333334,176.53333333333333 530,191 C 679.4666666666666,205.46666666666667 788.1333333333334,246.13333333333333 933,252 C 1077.8666666666666,257.8666666666667 1258.9333333333334,228.93333333333334 1440,200 C 1440,200 1440,400 1440,400 Z"
                stroke="none"
                stroke-width="0"
                fill="url(#gradient)"
                fill-opacity="1"
                class="transition-all duration-300 ease-in-out delay-150 path-0"
                transform="rotate(-180 720 200)"
              ></path>
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section_Head;
