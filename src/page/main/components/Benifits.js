import React from "react";
import img1 from "../assets/why-0@2x.png";
import img2 from "../assets/why-1@2x.png";
import img3 from "../assets/why-2@2x.png";
import img4 from "../assets/why-3@2x.png";
import img5 from "../assets/why-4@2x.png";
import img6 from "../assets/why-5@2x.png";
import { Fade } from "react-reveal";

const Data = [
  {
    image: img1,
    heading: "Free AND Premium",
    descp:
      "We offer both free and premium features. Want your resume to have that extra punch? Upgrade to Premium. On a budget? That's OK too - you can use our resume buider completely free of charge",
  },
  {
    image: img2,
    heading: "Creative and Professional Resume Templates",
    descp:
      "Whatever resume template you're looking for, we've got it! Whether it's a classic black-and-white template, or something a bit more outside the box, we have what you need!",
  },
  {
    image: img3,
    heading: "NO Hidden Fees",
    descp:
      "With Novorésumé, you won’t spend hours working on your resume, just to be hit with a hidden paywall. Our resume builder will notify you if you’re using any of our premium features in advance",
  },
  {
    image: img4,
    heading: "ATS-Friendly",
    descp:
      "Our resume templates are ATS-friendly. It means your resume won’t automatically be rejected because an ATS can’t read it.",
  },
  {
    image: img5,
    heading: "Live Content Feedback",
    descp:
      "Our CV builder provides real-time feedback on your resume content, ensuring that your resume reaches its full potential!",
  },
  {
    image: img6,
    heading: "Edit Your Resume in Real Time",
    descp:
      "As you edit your resume with our builder, you’ll immediately see the changes applied to your document.",
  },
];
function Benifits() {
  return (
    <div className=" max-lg:px-10 px-36 w-full mt-20">
      <div className=" max-lg:m-auto w-full">
        <h1 className=" font-extrabold text-4xl mb-5 w-1/2 max-lg:w-full">
          Why Use The Novorésumé Resume Builder?
        </h1>
        <div className="line2 "></div>
      </div>
      <div className=" w-full flex flex-wrap">
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
              <p className="w-full max-lg:text-base text-lg max-xl:pr-0 pr-20">
                {data.descp}
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className=" w-full mt-5">
        <div className=" bgbtn rounded-full py-3 cursor-pointer hover:opacity-70 px-10 w-fit m-auto bclr text-lg font-semibold">
          Try It Out Yourself
        </div>
      </div>
    </div>
  );
}

export default Benifits;
