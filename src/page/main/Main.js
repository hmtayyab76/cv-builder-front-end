import React from "react";
import SectionHead from "./components/SectionHead";
import SectionUsers from "./components/SectionUsers";
import "./main.css";
import ReadyCareer from "./components/ReadyCareer";
import ResumeFAQ from "./components/ResumeFAQ";
import Benifits from "./components/Benifits";
import HowToUse from "./components/HowToUse";
import PremiumFeatures from "./components/PremiumFeatures";
import CareerPath from "./components/CareerPath";
import JobSearch from "./components/JobSearch";
import UserRatings from "./components/UserRatings";
function Main() {
  return (
    <div className=" w-full">
      <SectionHead />
      <SectionUsers />
      <CareerPath />
      <HowToUse />
      <Benifits />
      <PremiumFeatures />
      <UserRatings />
      <JobSearch />
      <ResumeFAQ />
      <ReadyCareer />
    </div>
  );
}

export default Main;
