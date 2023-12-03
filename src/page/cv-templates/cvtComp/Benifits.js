import React from "react";
import img1 from "../../main/assets/why-0@2x.png";
import img2 from "../../main/assets/why-1@2x.png";
import img3 from "../../main/assets/why-2@2x.png";
import img4 from "../../main/assets/why-3@2x.png";
import { Fade } from "react-reveal";

const Data = [
  {
    image: img1,
    heading: "Free AND Premium",
    descp:
      "All the CV templates on this page are free to start with. If you want to take advantage of some of our premium CV builder features, you can also upgrade to Novorésumé Premium.",
  },
  {
    image: img2,
    heading: "Creative & Professional CV Templates",
    descp:
      "Whatever type of job you’re applying for, we have a template for you. Student applying for your first job? Use our college CV template. Advertiser looking for something more imaginative? Pick our creative CV template.",
  },
  {
    image: img3,
    heading: "NO Hidden Fees",
    descp:
      "Tried any of the other CV builders? You probably spent an hour or ten trying to make that perfect CV, and the moment you’re ready to hit “Download,” you get a notification: “Upgrade now to download your resume!”  At Novorésumé, we don’t do that. We have NO hidden fees - upgrade to Premium if you LOVE our CVs",
  },
  {
    image: img4,
    heading: "ATS-Friendly",
    descp:
      "We offer both free and premium CV templates, so whatever your budget might be, you can still take advantage of our CV builder.",
  },
];
function Benifits() {
  return (
    <div className=" max-lg:px-10 px-36 w-full mt-20">
      <div className=" max-lg:m-auto w-full">
        <h1 className=" font-extrabold text-4xl text-center  mb-5  max-lg:w-full">
          Why Novorésumé?
        </h1>
        <div className="line2 m-auto"></div>
      </div>
      <div className=" w-full flex flex-wrap mt-3">
        {Data.map((data, index) => (
          <div
            className=" w-1/2 flex max-lg:flex-col p-5 max-md:w-full"
            key={index}
          >
            <div className=" w-44 h-44 max-md:m-auto">
              <Fade top>
                <img src={data.image} alt=" " aria-hidden />
              </Fade>
            </div>
            <div className=" w-full mt-3">
              <h1 className=" font-extrabold max-lg:text-xl text-2xl max-xl:pr-0 pr-20">
                {data.heading}
              </h1>
              <p className="w-full max-lg:text-base text-base mt-3 font-normal">
                {data.descp}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className=" w-full my-5">
        <div className=" bgbtn rounded-full py-3 cursor-pointer hover:opacity-70 px-10 w-fit m-auto bclr text-lg font-semibold">
          Try It Out Yourself
        </div>
      </div>
    </div>
  );
}

export default Benifits;
