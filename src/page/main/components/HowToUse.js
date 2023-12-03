import React from "react";
import shap0 from "../assets/shap0.png";
import shap1 from "../assets/shap1.png";
import shap2 from "../assets/shap2.png";
import shap3 from "../assets/shap3.png";
import shap4 from "../assets/shap4.png";
import shap5 from "../assets/shap5.png";
import shap6 from "../assets/shap6.png";
import shap7 from "../assets/shap7.png";

import { Fade } from "react-reveal";

const Uses = [
  {
    num: 1,
    heading: "Pick a Template",
    para: "Don't sabotage your job search before it has even begun. Choose from our ATS-friendly, hand-crafted resume templates",
    image: "",
  },
  {
    num: 2,
    heading: "Customize Your Layout",
    para: "Make the resume template truly your own. Customize the layout based on your experience level.",
    image: "",
  },
  {
    num: 3,
    heading: "Fill in the Blanks",
    para: "Fill in your resume information, let our AI content analyzer do its job, and see your resume changes dynamically in real time.",
    image: "",
  },
  {
    num: 4,
    heading: "Hit 'Download!'",
    para: "And yes, it's free! We don't hit you with a paywall once you've completed your resume in the Basic Account. If you use any of our premium features, the software will let you know about it.",
    image: "",
  },
];

function HowToUse() {
  return (
    <div className=" w-full max-lg:px-10 px-36 my-10">
      <div className=" w-full">
        <div className=" flex flex-col  items-center w-full">
          <h1 className=" text-4xl font-extrabold max-lg:text-2xl text-center mb-1">
            Build Your Resume Fast and Easy.
          </h1>
          <div className="line2 mb-10 max-lg:mb-5"></div>
          <p className="text-2xl text-center px-36 max-lg:px-0">
            Novorésumé is lightning fast. There's no software to download. No
            multi-part sign-up form. No long-winded tutorials. Just a
            straightforward process.
          </p>
        </div>
        {Uses.map((data, index) => (
          <div
            className={`mt-10 w-full flex max-sm:flex-col-reverse max-md:bg-slate-100 max-sm:p-5 max-sm:rounded-3xl ${
              data.num % 2 === 1 ? " flex-row" : " flex-row-reverse"
            } `}
            key={index}
          >
            <div className=" flex flex-col w-1/2 m-2 max-sm:w-full">
              <div
                className={` max-md:hidden flex justify-center items-center ${
                  data.num % 2 === 1
                    ? "bg-emerald-500 self-end"
                    : "bg-cyan-400 self-start "
                }  rounded-3xl w-36 text-center h-36 text-7xl text-white font-bold mb-4`}
              >
                <span>{data.num}</span>
              </div>
              <div className="ready-bg rounded-2xl py-16 px-10 max-sm:px-5 max-sm:py-10">
                <h1 className=" text-2xl font-bold mb-5">
                  <span className=" max-md:inline hidden"> {data.num} -</span>
                  {data.heading}
                </h1>
                <p className=" text-2xl">{data.para}</p>
              </div>
            </div>
            <div
              className={`w-1/3 max-sm:w-full max-sm:h-96 max-lg:w-1/2 relative overflow-hidden   rounded-3xl m-2 ${
                data.num % 2 === 1 ? "bg-emerald-500" : "bg-cyan-400"
              }`}
            >
              <Fade>
                <div className=" absolute w-full bottom-0 left-4 ">
                  <Fade left>
                    <img src={shap0} alt="" className=" w-28 -mb-1 " />
                    <img src={shap1} alt="" className="w-28" />
                  </Fade>
                  <div className=" absolute w-full top-32 -mt-1 left-20 ">
                    <Fade right>
                      <img src={shap2} alt="" className=" w-28 " />
                    </Fade>
                  </div>
                </div>
                <div className=" absolute top-6 right-44">
                  <Fade top>
                    <img src={shap6} alt="" className=" w-24" />
                  </Fade>
                </div>
                <div className=" absolute top-0 right-10">
                  <Fade top>
                    <img src={shap7} alt="" className=" w-24" />
                  </Fade>
                </div>
                <div className=" absolute bottom-10 -right-6 z-50">
                  <Fade top>
                    <img src={shap4} alt="" className=" w-56 " />
                  </Fade>
                </div>
                <div className=" absolute bottom-0 -right-10">
                  <Fade bottom>
                    <img src={shap5} alt="" className=" w-60" />
                  </Fade>
                </div>
                <div className=" absolute top-40 right-20">
                  <Fade right>
                    <img src={shap3} alt="" className=" w-36" />
                  </Fade>
                </div>
              </Fade>
              <Fade top></Fade>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default HowToUse;
