import React from "react";
import Tab from "../Tabs/Tab";
import image from "../../assets/cv-group.png";
// import Benifits from "./cvtComp/Benifits";
import Benifits from "./cvtComp/Benifits";
import CVResources from "./cvtComp/CVResources";
import CVTemplate from "./CVTemplate";

const Data = {
  HeadingTop: "CV Templates",
  EXP: "/ 5+ years of experience",
  HeadingSec: "Pick your CV template and get started",
  Para: "Our CV templates are designed with your success in mind. They’re all free (with premium features), ATS-friendly, and easy-to-read!",
  image: image,
};
function CVT() {
  return (
    <div>
      <Tab Data={Data} />

      <CVTemplate />
      <Benifits />
      <CVResources />
    </div>
  );
}

export default CVT;
