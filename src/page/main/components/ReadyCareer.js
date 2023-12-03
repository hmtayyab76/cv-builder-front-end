import React from "react";
import img from "../assets/wave-with-people.webp";
function ReadyCareer() {
  return (
    <div>
      <div id="sec-ready-shape" className="w-full">
        <svg
          id="wave"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
          className=" w-full"
        >
          <defs>
            <linearGradient id="sw-gradient-0" x1="0" x2="0" y1="1" y2="0">
              <stop stop-color="rgba(245, 245, 245, 1)" offset="0%"></stop>
              <stop stop-color="rgba(245, 245, 245, 1)" offset="100%"></stop>
            </linearGradient>
          </defs>
          <path
            fill="url(#sw-gradient-0)"
            d="M0,112L48,96C96,80,192,48,288,50.7C384,53,480,91,576,106.7C672,123,768,117,864,104C960,91,1056,69,1152,58.7C1248,48,1344,48,1440,50.7C1536,53,1632,59,1728,66.7C1824,75,1920,85,2016,85.3C2112,85,2208,75,2304,69.3C2400,64,2496,64,2592,61.3C2688,59,2784,53,2880,64C2976,75,3072,101,3168,96C3264,91,3360,53,3456,45.3C3552,37,3648,59,3744,66.7C3840,75,3936,69,4032,77.3C4128,85,4224,107,4320,104C4416,101,4512,75,4608,56C4704,37,4800,27,4896,29.3C4992,32,5088,48,5184,56C5280,64,5376,64,5472,53.3C5568,43,5664,21,5760,24C5856,27,5952,53,6048,61.3C6144,69,6240,59,6336,50.7C6432,43,6528,37,6624,32C6720,27,6816,21,6864,18.7L6912,16L6912,160L6864,160C6816,160,6720,160,6624,160C6528,160,6432,160,6336,160C6240,160,6144,160,6048,160C5952,160,5856,160,5760,160C5664,160,5568,160,5472,160C5376,160,5280,160,5184,160C5088,160,4992,160,4896,160C4800,160,4704,160,4608,160C4512,160,4416,160,4320,160C4224,160,4128,160,4032,160C3936,160,3840,160,3744,160C3648,160,3552,160,3456,160C3360,160,3264,160,3168,160C3072,160,2976,160,2880,160C2784,160,2688,160,2592,160C2496,160,2400,160,2304,160C2208,160,2112,160,2016,160C1920,160,1824,160,1728,160C1632,160,1536,160,1440,160C1344,160,1248,160,1152,160C1056,160,960,160,864,160C768,160,672,160,576,160C480,160,384,160,288,160C192,160,96,160,48,160L0,160Z"
          ></path>
        </svg>

        <div className=" w-full ready-bg flex flex-col justify-center items-center">
          <h1 className=" text-5xl max-xl:text-3xl font-extrabold my-10">
            Ready to Jump-Start Your Career
          </h1>
          <div className="line2 m-auto"></div>
          <div className=" ready-btn rounded-full my-6 hover:opacity-70  cursor-pointer text-white font-semibold py-2 px-5 max-lg:mb-10 mb-20 flex items-center justify-center">
            <p>Get Starded Now</p>
            <i class="fa-solid fa-arrow-right mt-1 ml-3 bclr text-base"></i>
          </div>
          <div className=" w-full">
            <img src={img} alt="Wave Image" className=" w-full" aria-hidden />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReadyCareer;
