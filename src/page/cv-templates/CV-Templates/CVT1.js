import React from "react";
import "../CVT.css";

function CVT1({ data }) {
  console.log(data);
  return (
    <div className=" w-full max-lg:px-10 shadow-lg h-screen overflow-y-auto px-36 flex justify-center">
      {data.map((data, index) => (
        <div className=" m-5 max-w-screen-md" key={index}>
          <div className=" px-4 py-3">
            <h1 className="font-bold text-xl">{data.name}</h1>

            <p className=" font-bold text-[#529ba1]  text-base">{data.job}</p>
          </div>

          <div className=" w-full  bg-[#313b47] px-5 py-4  rounded-t-lg">
            <p className=" text-white font-normal text-base">{data.job_disc}</p>
          </div>
          <div className=" bg-[#449399] w-full  py-3 flex items-center justify-around rounded-b-lg">
            <div className=" flex items-center text-white text-base">
              <i class="fa-solid fa-envelope  mr-2"></i>
              <p>{data.email}</p>
            </div>
            <div className=" flex items-center text-white text-base">
              <i class=" fa-solid fa-mobile-button  mr-2"></i>
              <p>{data.phonoe_num}</p>
            </div>
            <div className=" flex items-center text-white text-base">
              <i class="fa-solid fa-location-dot  mr-2"></i>
              <p>{data.address}</p>
            </div>
            <div className=" flex items-center text-white text-base">
              <i class="fa-brands fa-linkedin  mr-2"></i>
              <p>{data.linkdin}</p>
            </div>
          </div>
          <div className=" w-full p-5">
            <div className=" w-full">
              <div className=" w-full flex items-center">
                <div className=" bg-[#313b47] p-2 rounded-full">
                  <i class="fa-solid fa-layer-group text-white"></i>
                </div>
                <h1 className=" uppercase font-bold text-xl ml-2">
                  Area of Expeerties
                </h1>
                <div className="cvt1line h-2 w-1/2 rounded-lg ml-4"></div>
              </div>
              <div className=" w-full flex items-center flex-wrap my-5">
                {data.skills.map((data, index) => (
                  <div
                    className=" w-fit text-sm bg-slate-400 px-3 py-1 font-bold text-white rounded-lg m-1"
                    key={index}
                  >
                    {data}
                  </div>
                ))}
              </div>
            </div>
            <div className=" w-full">
              <div className=" flex items-center mb-3">
                <div className=" bg-[#313b47] p-2 rounded-full">
                  <i class="fa-solid fa-briefcase text-white"></i>
                </div>
                <h1 className=" uppercase font-bold text-xl ml-2">
                  Wrok Experience
                </h1>
                <div className="cvt1line h-2 w-1/2 rounded-lg ml-4"></div>
              </div>
              {data.experience.map((data, index) => (
                <div className=" w-full my-5" key={index}>
                  <h1 className=" text-xl font-bold">{data.company}</h1>
                  <p className=" text-lg font-semibold">{data.jobtitle}</p>
                  <p className=" font-medium text-[#529ba1]  text-base">
                    {data.period}
                  </p>
                  <ul className=" list-disc ml-5">
                    {data.list.map((data, index) => (
                      <li className=" font-semibold text-sm">{data}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default CVT1;
