import React from "react";
import faqimg1 from "../assets/faq0@2x.png";
import faqimg2 from "../assets/faq1@2x.png";
import faqimg3 from "../assets/faq2@2x.png";
import faqimg4 from "../assets/faq3@2x.png";
import faqimg5 from "../assets/faq4@2x.png";
import faqimg6 from "../assets/faq5@2x.png";
import faqimg7 from "../assets/faq6@2x.png";

import { Fade } from "react-reveal";
const FAQData = [
  {
    image: faqimg1,
    Question: "Why should I use a resume builder?",
    p1: "Using a resume builder makes the process of creating a resume significantly faster and easier. Ever tried building your resume with Word?",
    p2: "The whole process is a huge pain – you make a TINY change to your resume, and the entire resume layout gets completely messed up.",
    p3: "With a resume builder, you don’t have to worry about the nitty gritty of resume creation, like font selection, layout, formatting, etc.",
    p4: "All you have to do is pick a resume template, fill it in, and then you’re ready to start applying for jobs!",
    list: false,
    isReverse: false,
  },
  {
    image: faqimg2,
    isReverse: true,
    Question: "What is the best resume builder?",
    p1: "Over the past 7 years, we’ve been working hard to make Novorésumé the best resume builder out there.",
    p2: "",
    p3: "",
    list: true,

    lt: "And we’d say we succeeded! Here’s what sets us apart from the rest of the competition:",

    lh1: "Easy to use ",
    lh2: "Get started under 5 minutes",
    lh3: "it's 100% Free",
    lh4: "Cover Letter Builder",
    lh5: "Tons of Customization and Design Options",
    lh6: "ATS-Friendly Resume Templates ",

    l1: "Our builder is very easy to use, even if you're not too tech-friendly.",
    l2: "Just pick one of our resume templates, and you're good to go!",
    l3: "Some resume builders out there pretend to be free… and then they hit you with a paywall once you’re done writing your resume! We don’t do that. Our builder will instantly notify you if you’re using any of our premium features",
    l4: "If you’re using Novorésumé Premium, you gain access to our cover letter builder for free (including matching cover letter templates).",
    l5: "Our builder offers a ton of customization. You can make changes to the layout, color schemes, and much more.",
    l6: "Our resume templates are built on top of some of the most popular applicant tracking systems out there. Meaning, your resume won't automatically get rejected by any ATS.",
  },
  {
    isReverse: false,
    image: faqimg3,
    Question: "Is this a completely free resume builder?",
    p1: "Yes, Novorésumé is a 100% free resume builder.",
    p2: "If you’re on a budget, you can use it to create your resume completely free of charge. And no, unlike some other resume builders out there, we don’t hit you with a paywall once you’ve completed your resume.",
    p3: "If you use any of our premium features, the software will let you know about it. It will then ask if you did it accidentally, or if you would like to upgrade to Novorésumé Premium. You're in control!",
    list: false,
  },
  {
    image: faqimg4,
    isReverse: true,
    Question: "What is a resume?",
    p1: "A resume (also known as a CV, or curriculum vitae) is a 1-2 page document that summarizes your work experience and career history.",
    p2: "It usually includes information about the following:",
    p3: "",
    list: true,
    lt: "Your work history",
    l1: "Educational background",
    l2: "Achievements",
    l3: "Contact information",
    l4: "Resume summary or resume objective",
    l5: "Skills",
    l6: "Time Management",
    l7: "",
    lh1: "",
    lh2: "",
    lh3: "",
    lh4: "",
    lh5: "",
    lh6: "",
  },
  {
    image: faqimg5,
    isReverse: false,
    Question: "What's the difference between a CV and a resume?",
    p1: 'In the EU, the words "CV" and "resume" are used interchangeably',
    p2: "In the United States, however, a resume is a document you use to apply for jobs, while a CV is mainly used by academics.",
    p3: "Want to learn more? Check out our article on the differences between CVs and resumes.",
    list: false,
  },
  {
    image: faqimg6,
    isReverse: true,
    Question: "How can I create my resume?",
    p1: "Making a resume with Novorésumé is very straightforward",
    p2: "Just pick one of our professional resume templates.",
    p3: "Then, you’ll be forwarded to our resume builder, where all you have to do is fill in your resume content!",
    list: false,
  },
  {
    isReverse: false,
    image: faqimg7,
    Question: "What should a resume include?",
    p1: "The must-have contents in your resume include the following sections:",
    p2: "",
    p3: "",
    list: true,
    lt: "The optional ones are:",
    l1: "Work Experience",
    l2: "Educational Background",
    l3: "Contact Information",
    l4: "Resume summary or Resume Objective",
    l5: "Hobbies & Interests",
    l6: "Skills",
    l7: "Volunteering Experience",
    lh1: "",
    lh2: "",
    lh3: "",
    lh4: "",
    lh5: "",
    lh6: "",
  },
];
function ResumeFAQ() {
  return (
    <div className="w-full max-lg:px-10 px-36">
      <div className=" w-full">
        <h1 className=" font-extrabold text-5xl max-xl:text-4xl text-center mb-5">
          Resume Builder FAQ.
        </h1>
        <div className="line2 m-auto"></div>
      </div>
      <div className="w-full max-lg:mt-10 mt-20">
        {FAQData.map((data, index) => (
          <div
            className={`w-full flex mb-10 flex-wrap max-md:items-center max-md:flex-col ${
              data.isReverse ? "flex-row-reverse" : "flex-row"
            }`}
            key={index}
          >
            <div className=" max-lg:p-1 p-5">
              <Fade top>
                <img
                  src={data.image}
                  alt="Side Image"
                  className=" w-60 h-60 "
                  aria-hidden
                />
              </Fade>
            </div>
            <div className=" w-1/2 max-md:w-full ">
              <h1 className=" font-extrabold text-4xl mb-6 max-xl:text-2xl">
                {data.Question}
              </h1>
              <p className=" font-medium mb-4 text-sm">{data.p1}</p>
              <p className=" font-medium mb-4 text-sm">{data.p2}</p>
              <p className=" font-medium mb-4 text-sm">{data.p3}</p>
              <p className=" font-medium mb-4  text-sm">{data.p4}</p>
              {data.list && (
                <>
                  <li className="mb-2 list-none font-semibold max-xl:text-base text-lg">
                    {data.lt}
                  </li>
                  <ul className=" list-disc ml-5">
                    <li className="mb-1 max-xl:text-medium text-base">
                      <span className=" font-bold max-xl:text-medium text-base">
                        {data.lh1}
                      </span>
                      <span>{data.l1}</span>
                    </li>
                    <li className="mb-1 max-xl:text-medium text-base">
                      <span className=" font-bold max-xl:text-medium text-base">
                        {data.lh2}
                      </span>
                      <span>{data.l2}</span>
                    </li>
                    <li className="mb-1 max-xl:text-medium text-base">
                      <span className=" font-bold max-xl:text-medium text-base">
                        {data.lh3}
                      </span>
                      <span>{data.l3}</span>
                    </li>
                    <li className="mb-1 max-xl:text-medium text-base">
                      <span className=" font-bold max-xl:text-medium text-base">
                        {data.lh4}
                      </span>
                      <span>{data.l4}</span>
                    </li>
                    <li className="mb-1 max-xl:text-medium text-base">
                      <span className=" font-bold max-xl:text-medium text-base">
                        {data.lh5}
                      </span>
                      <span>{data.l5}</span>
                    </li>
                    <li className="mb-1 max-xl:text-medium text-base">
                      <span className=" font-bold max-xl:text-medium text-base">
                        {data.lh6}
                      </span>
                      <span>{data.l6}</span>
                    </li>
                  </ul>
                </>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ResumeFAQ;
