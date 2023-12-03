import React from "react";
import p1 from "../assets/premium-0.webp";
import p2 from "../assets/premium-left.webp";
import p3 from "../assets/premium-right.webp";
import p4 from "../assets/premium-2.webp";
import { Fade } from "react-reveal";
function PremiumFeatures() {
  return (
    <div className=" w-full mt-20">
      <div className=" w-full max-lg:px-10 px-36 my-10">
        <div className=" w-full">
          <h1 className=" w-1/2 max-lg:w-full  pb-2 m-auto text-4xl font-extrabold text-center">
            Premium Features for Ambitious Job-Seekers
          </h1>
          <div className=" line3 mt-1 m-auto"></div>
          <p className=" mt-10 w-1/2 m-auto text-center text-xl ">
            The job market today is competitive – you’ll need every edge to
            stand out. Here’s how Novorésumé Premium can help you:
          </p>
        </div>
        <div className=" w-full flex  justify-around max-lg:flex-wrap my-10">
          <div className=" relative w-1/3 py-10 max-lg:w-1/2 max-lg:my-2   max-md:w-full border  shadow-2xl mx-4 rounded- max-lg:p-10 p-5">
            <div className=" absolute -top-3 right-2/4  bg-cyan-400 w-fit p-1 rounded-full">
              <i class="fa-solid fa-star text-white"></i>
            </div>

            <Fade>
              <div className="p-5 flex justify-center w-full">
                <img src={p1} alt="" className=" w-full h-60" />
              </div>
            </Fade>

            <h1 className=" font-bold mt-5 max-lg:my-0">
              Unlimited Design Options
            </h1>
            <p className=" text-lg pl-0 p-3">
              Make your resume truly yours by customizing its design, layout,
              and much more.
            </p>
          </div>
          <div className=" w-1/3 py-10 max-lg:w-1/2 max-lg:my-2  max-md:w-full  border shadow-2xl mx-4 rounded-xl max-lg:p-10 p-5">
            <div className=" absolute -top-3 right-2/4  bg-cyan-400 w-fit p-1 rounded-full">
              <i class="fa-solid fa-star text-white"></i>
            </div>
            <Fade>
              <div className="p-5 flex justify-center  w-full overflow-hidden">
                <img src={p2} alt="" className=" w-40 trans1 mr-3" />
                <img src={p3} alt="" className=" w-40 trans2 ml-3" />
              </div>
            </Fade>

            <h1 className=" font-bold mt-5 max-lg:my-0">
              Cover Letter Templates
            </h1>
            <p className=" text-lg pl-0 p-3">
              Want your application to stand out from the rest? Create a
              matching cover letter for your resume and impress the hiring
              manager.
            </p>
          </div>
          <div className=" w-1/3 py-10 max-lg:w-1/2 max-lg:my-2  max-md:w-full  border shadow-2xl mx-4 rounded-xl max-lg:p-10 p-5">
            <div className=" absolute -top-3 right-2/4  bg-cyan-400 w-fit p-1 rounded-full">
              <i class="fa-solid fa-star text-white"></i>
            </div>
            <Fade>
              <div className="p-5 flex justify-center overflow-hidden ">
                <img src={p4} alt="" className=" w-40  trans3" />
              </div>
            </Fade>
            <h1 className=" font-bold mt-5 max-lg:my-0">Two Pages+</h1>
            <p className=" text-lg pl-0 p-3">
              Can’t fit your decade’s worth of experience on one page? Premium
              let’s you go beyond the one-page limit.
            </p>
          </div>
        </div>
      </div>
      <div className=" w-full relative">
        <div className=" bg-yellow-400 w-fit m-auto font-medium  mt-10 rounded-full py-3 px-6 cursor-pointer hover:bg-yellow-500  ">
          Check Out Premium
        </div>
        <div className=" absolute -bottom-10 opacity-70 max-lg:hidden  w-full left-0 -z-10 ">
          <svg
            className="shape-svg-bottom"
            x="0px"
            y="0px"
            viewBox="0 0 1000 200"
          >
            <defs>
              <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#51e2c2" />
                <stop offset="100%" stopColor="#4bccef" />
              </linearGradient>
            </defs>
            <path
              fill="url(#grad3)"
              d="M0,100c0,0,250,150,500,0s500,0,500,0v100H0V100z"
            ></path>
          </svg>
          <div className="shapp w-full"></div>
          <svg
            className="shape-svg-mid"
            viewBox="0 0 1920 140.049"
            x="0px"
            y="0px"
            xmlSpace="preserve"
          >
            <defs>
              <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop
                  offset="0%"
                  style={{ stopColor: "#51e2c2", stopOpacity: 1 }}
                />
                <stop
                  offset="100%"
                  style={{ stopColor: "#4bccef", stopOpacity: 1 }}
                />
              </linearGradient>
            </defs>
            <path
              fill="url(#grad2)"
              d="M0 396.309l.023.006a4922.834 4922.834 0 0 0 1919.977.107v-45.593H0z"
              transform="translate(0 -350.829)"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
}

export default PremiumFeatures;
