import React from "react";
import template0 from "../assets/template0.png";
import template1 from "../assets/template1.png";
import template2 from "../assets/template2.png";
import { Fade } from "react-reveal";

function CareerPath() {
  return (
    <div className=" max-lg:px-10  px-36 w-full">
      <div className="  ready-bg rounded-2xl p-10">
        <div className=" flex flex-col  items-center w-full ">
          <h1 className=" text-4xl font-extrabold max-lg:text-2xl text-center mb-1">
            Resume Templates for Every Career Path.
          </h1>
          <div className="line2 mb-10 max-lg:mb-5"></div>
          <p className="text-lg text-center w-10/12 max-lg:w-full">
            You can pick one of our handcrafted resume templates above. You can
            start building your resume in less than 5 seconds, using predefined
            sections approved by recruiters worldwide. You can also customize it
            to your own needs and personality and hit 'Download'. It's THAT easy
            to use, even if you've never made a resume in your life before!
          </p>
        </div>
        <div className=" w-full flex overflow-x-auto p-10 max-lg:flex-wrap">
          <div className=" w-1/3 max-lg:w-1/2 max-md:w-full">
            <div className=" p-5">
              <Fade>
                <img src={template0} alt="" className="" />
              </Fade>
            </div>
            <div className=" p-5">
              <h1 className=" text-xl font-extrabold">
                Creative Resume Template
              </h1>
              <p className=" text-base font-medium">
                A resume template as creative as your imagination
              </p>
            </div>
          </div>
          <div className=" w-1/3 max-lg:w-1/2 max-md:w-full">
            <div className=" p-5">
              <Fade>
                <img src={template1} alt="" className="" />
              </Fade>
            </div>
            <div className=" p-5">
              <h1 className=" text-xl font-extrabold">
                Professional Resume template
              </h1>
              <p className=" text-base font-medium">
                Put your best foot forward with a professional resume template
              </p>
            </div>
          </div>
          <div className=" w-1/3 max-lg:w-1/2 max-md:w-full">
            <div className=" p-5">
              <Fade>
                <img src={template2} alt="" className="" />
              </Fade>
            </div>
            <div className=" p-5">
              <h1 className=" text-xl font-extrabold">
                College Resume Template
              </h1>
              <p className=" text-base font-medium">
                No experience? No problem!
              </p>
            </div>
          </div>
        </div>
        <div className=" w-full m-auto">
          <div className=" bg-emerald-500 w-fit py-3 px-5 cursor-pointer hover:bg-emerald-600 rounded-full m-auto text-white font-medium">
            Discover More Resume Template
          </div>
        </div>
      </div>
    </div>
  );
}

export default CareerPath;
