import React from "react";
import { Fade } from "react-reveal";
import template0 from "../../assets/creative-cv-template.png";
import template1 from "../../assets/modern-cv-template.png";
import template2 from "../../assets/combined-cv-template.png";
import template3 from "../../assets/basic-cv-template.png";
import template4 from "../../assets/hybrid-cv-template (1).png";
import template5 from "../../assets/traditional-cv-template.png";
import template6 from "../../assets/minimalist-cv-template.png";
import template7 from "../../assets/general-cv-template.png";
import { Link } from "react-router-dom";

const TData = [
  {
    image: template0,
    name: "Hybrid ",
    countdoc: "5/16",
    disc: "Use the hybrid format when you need a CV that perfectly combines your skills and professional experiences.",
  },
  {
    image: template1,
    name: "Traditional",
    countdoc: "6/16",
    disc: "The traditional CV template will allow you to finish your job application within minutes, focusing on the essential sections.",
  },
  {
    image: template2,
    name: "General",
    countdoc: "7/16",
    disc: "A general template that is versatile and can easily be adjusted and used for job applications in any industry.",
  },
  {
    image: template3,
    name: "Modern",
    countdoc: "8/16",
    disc: "The focus on your modern Curriculum Vitae (CV) template should be on your achievements during your work at the previous Companies and your impact on the overall performance.",
  },
  {
    image: template4,
    name: "Executive",
    countdoc: "9/16",
    disc: "Executive Curriculum Vitae (CV) sample used when applying for positions that require more than five years of relevant work experience.",
  },
  {
    image: template5,
    name: "IT",
    countdoc: "10/16",
    disc: "Are you looking to land a job in the IT industry? This premium template will ensure that your CV stands out from the rest.",
  },
  {
    image: template6,
    name: "Simple",
    countdoc: "11/16",
    disc: "A simple Curriculum Vitae (CV) layout that was developed for Seniors that have extensive experience in conservative industries such as banking or law.",
  },
  {
    image: template0,
    name: "Functional",
    countdoc: "12/16",
    disc: "A functional Curriculum Vitae (CV) template in which it is recommended to focus on the work experience and skills you developed in the last 10 years.",
  },
];
function CVTemplate() {
  const handleMouseEnter = (e) => {
    const createCvElement = e.currentTarget.querySelector(".absolute");
    if (createCvElement) {
      createCvElement.style.visibility = "visible";
    }
  };

  const handleMouseLeave = (e) => {
    const createCvElement = e.currentTarget.querySelector(".absolute");
    if (createCvElement) {
      createCvElement.style.visibility = "hidden";
    }
  };
  return (
    <div className=" mx-28 max-lg:mx-10">
      <div className=" w-full flex items-center justify-around flex-wrap my-20">
        {TData.map((data, index) => (
          <div className=" my-4" key={index}>
            <div className=" w-72 h-full ">
              <Link to={"/create-cv-template"}>
                <div
                  className=" relative hover:scale-105 transition-all duration-300 hover:rotate-2  cursor-pointer"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <div
                    className="absolute left-16 top-2/4 w-40 h-10 text-base font-bold bg-[#b7b7b7] opacity-90 text-white py-2 px-3 text-center rounded-2xl z-50 pointer-events-none"
                    style={{ visibility: "hidden" }}
                  >
                    <div className="mt-1 bg-[#4d555e] p-2 absolute w-full h-full rounded-2xl -z-10">
                      <span className=" shadow-lg">Create My CV</span>
                    </div>
                  </div>
                  <Fade>
                    <img
                      src={data.image}
                      alt=""
                      className="w-full image-corner-bend"
                    />
                  </Fade>
                </div>
              </Link>
              <div className=" mt-2">
                <h1 className=" text-lg font-extrabold">
                  {data.name}{" "}
                  <span className=" font-light ml-2">{data.countdoc}</span>
                </h1>
                <p className=" text-sm mt-2 h-auto">{data.disc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CVTemplate;
