import React from "react";
import faqimg1 from "../../main/assets/faq0@2x.png";
import faqimg2 from "../../main/assets/faq1@2x.png";
import faqimg3 from "../../main/assets/faq2@2x.png";
import faqimg4 from "../../main/assets/faq3@2x.png";
import faqimg5 from "../../main/assets/faq4@2x.png";
import faqimg6 from "../../main/assets/faq5@2x.png";

import { Fade } from "react-reveal";
const FAQData = [
  {
    image: faqimg1,
    Question: "What is a Curriculum Vitae (CV)?",
    p1: "A Curriculum Vitae, or CV for short, is a professional document that summarizes your work history, education, and skills. The main purpose of a CV is to sell you, as a candidate, to prospective employers.",
    p2: "When applying for a position, you’re always going to be asked for a CV, coupled with a cover letter.",
    list: false,
    isReverse: false,
  },
  {
    image: faqimg2,
    isReverse: true,
    Question: "What’s the Difference Between a CV and a Resume?",
    p1: "If you ask a European, the answer is that the two (for most people) are the same thing.",
    p2: "The term “resume” is more popular in the US, while “CV” is a lot more commonplace in Europe.",
    p3: "While a resume is short (one, two pages max) and comprehensive (only the relevant experience), an academic CV can be as many pages as you need, covering everything you’ve ever done in your career.",
    list: false,
  },
  {
    isReverse: false,
    image: faqimg3,
    Question: "How to Write a CV?",
    list: true,
    lt: "There’s a lot that goes into writing a good curriculum vitae, but here’s a quick summary:",
    l1: "Pick a Curriculum Vitae template that works for you. Applying for a creative position? Pick a creative CV template. Looking to work in a bank? Go for a professional CV template.",
    l2: "Follow our CV outline and fill in your work history, education, skills, and so on. If you want to learn how to do this, exactly, check out our complete guide on how to write a curriculum vitae (CV).",
    l3: "Follow the tips mentioned in our CV builder to help you polish your curriculum vitae.",
    l4: "Download your new CV and Start applying for jobs",
  },
  {
    image: faqimg4,
    isReverse: true,
    Question: "What to Include in a CV?",

    list: true,
    lt: "The most common sections that go on a CV are the following:",
    l1: "Your contact info. This includes email, name, professional title, and social profiles.",
    l2: "You can look at the resume summary as an introduction to your resume. It’s a small paragraph (2-4 sentences) that goes on top of your CV and gives a snapshot of your work history. Usually, it includes job titles, years of experience, and one or two top achievements. A resume objective, on the other hand, is suited for candidates with limited work experience, as it focuses more on intent to work at the company and skill-set.",
    l3: "Your work history in reverse-chronological order. Think, starting from the latest, and ending with the earliest.",
    l4: " A shortlist of your top competencies. This includes both soft skills and hard skills.",

    lh1: "Contact Information",
    lh2: "Resume Summary (or Resume Objective)",
    lh3: "Work Experience -",
    lh4: "Skills -",
  },
  {
    image: faqimg5,
    isReverse: false,
    Question: "How Long Should a CV Be?",
    p1: "The answer to this, of course, depends on what kind of Curriculum Vitae you’re talking about. If by CV you mean the same thing as a resume, it should be 1 page, 2 pages max.",
    p2: "If, on the other hand, you want to create an academic CV, then it can be as many pages as you need it to be!",
    list: false,
  },
  {
    image: faqimg6,
    isReverse: true,
    Question: "What’s the Best CV Template?",
    p1: "Spoiler: there’s no such thing as the “best cv template.” There’s no “best CV” either.",
    p2: "Everything related to CVs is highly subjective. One recruiter might LOVE your creative resume template, another might think it’s super tacky.",
    p3: "Then, you’ll be forwarded to our resume builder, where all you have to do is fill in your resume content!",
    list: true,
    lt: "So, how do you pick the best CV template for the job YOU’RE applying for? Our rule of thumbs is:",
    l1: "Are you applying for a company that values innovation and creativity? Pick a creative curriculum vitae template.",
    l2: "Applying for a more conservative company? E.g. bank, law firm, etc. Pick a more professional CV template.",
    l3: "Does the company you’re applying for fall somewhere between the two types we mentioned? Then pick a modern or simple CV template.",
    l4: " A shortlist of your top competencies. This includes both soft skills and hard skills.",
  },
];
function CVResources() {
  return (
    <div className="w-full max-lg:px-10 px-36 mt-20 ">
      <div className=" w-full">
        <h1 className=" font-bold text-5xl max-xl:text-4xl text-center mb-5">
          CV Resources
        </h1>
        <div className="line2 m-auto"></div>
      </div>
      <div className="w-full max-lg:mt-10 mt-10">
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
              <h1 className=" font-bold text-4xl mb-6 max-xl:text-2xl">
                {data.Question}
              </h1>
              <p className="  mb-4 text-base">{data.p1}</p>
              <p className=" mb-4 text-base">{data.p2}</p>
              <p className=" mb-4 text-base">{data.p3}</p>
              <p className=" mb-4 text-basem">{data.p4}</p>
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

export default CVResources;
