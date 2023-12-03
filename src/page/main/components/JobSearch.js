import React from "react";
import ebook from "../assets/ebook-cover.webp";
import jobseeker from "../assets/jobseekers@2x.webp";
function JobSearch() {
  return (
    <div className="w-full my-20 bg-ebook">
      <div>
        <svg
          version="1.1"
          id="Wave"
          x="0px"
          y="0px"
          viewBox="0 0 1000 200"
          style={{ enableBackground: "new 0 0 1000 200" }}
        >
          <style type="text/css">
            {`.st0 {
              fill: #4bccef;
            }`}
          </style>
          <path
            id="myClip"
            className="st0"
            d="M0,100c0,0,250,150,500,0s500,0,500,0v100H0V100z"
          ></path>
        </svg>
        <img src={ebook} alt="" />
      </div>
      <div className=" relative" style={{ background: "#f5f5f5" }}>
        <svg
          className="shape-svg-mid -mt-3"
          viewBox="0 0 1920 140.049"
          x="0px"
          y="0px"
          xmlSpace="preserve"
          style={{ fill: "#00C8AA" }}
        >
          <path
            d="M0 396.309l.023.006a4922.834 4922.834 0 0 0 1919.977.107v-45.593H0z"
            transform="translate(0 -350.829)"
          ></path>
        </svg>
        <svg
          class="shape-svg-mid"
          viewBox="0 0 1920 140.049"
          x="0px"
          y="0px"
          xmlSpace="preserve"
          style={{ fill: "#f5f5f5" }}
        >
          <path
            d="M0 396.309l.023.006a4922.834 4922.834 0 0 0 1919.977.107v-45.593H0z"
            transform="translate(0 -350.829)"
          ></path>
        </svg>

        <div className=" absolute top-0 right-0 w-full px-36 max-lg:px-2">
          <div className="flex justify-between rounded-3xl bxs py-8 max-lg:w-full">
            <div className=" w-1/2 flex flex-col items-center">
              <h1 className=" max-lg:text-base text-2xl font-bold">
                THE JOBSEEKER'S
              </h1>
              <h1 className=" max-lg:text-3xl text-6xl font-extrabold">
                ODYSSEY
              </h1>
              <p className=" max-lg:text-sm text-lg font-normal">
                The guide to getting hired in 2023
              </p>
            </div>
            <div className=" relative w-1/2">
              <div className=" absolute bottom-0 right-0">
                <img src={jobseeker} alt="" className=" w-full h-auto" />
              </div>
            </div>
          </div>
        </div>
        <div
          className=" px-36 max-lg:px-10 max-lg:mt-20 py-4"
          style={{ background: "#f5f5f5" }}
        >
          <h1 className=" text-4xl font-bold"> Job Search Masterclass</h1>
          <div className=" line3 mb-5 mt-2"></div>
          <p className=" text-lg w-2/3 max-lg:w-full">
            Don’t have much career experience? Not sure how to write your
            resume, ace your interview, or land that job? Check out our Job
            Search Masterclass! We’ll teach you how to do the following:
          </p>
          <ul className=" list-disc ml-5 text-base mt-2 mb-6">
            <li>
              Create a Resume That Grabs Recruiters’ Attention Every Single Time
            </li>
            <li>Ace Your Interview (Even if You’re an Introvert)</li>
            <li>Find a Job You’ll Love (And Actually Get It)</li>
          </ul>
          <div className=" w-fit bg-amber-300 py-2 px-5 rounded-full cursor-pointer hover:bg-amber-400 font-medium">
            Get It Now
          </div>
        </div>
      </div>
      <svg
        version="1.1"
        id="Wave"
        x="0px"
        y="0px"
        viewBox="0 0 1000 200"
        xmlSpace="preserve"
        style={{ fill: "#f5f5f5", transform: "scaleY(-1)" }}
        className=" -mt-1"
      >
        <path
          id="myClip"
          d="M0,100c0,0,250,150,500,0s500,0,500,0v100H0V100z"
        ></path>
      </svg>
    </div>
  );
}

export default JobSearch;
