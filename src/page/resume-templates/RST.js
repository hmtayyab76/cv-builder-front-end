import React from "react";
import Tab from "../Tabs/Tab";
import image from "../../assets/group.png";
const Data = {
  HeadingTop: "Resume Templates",
  EXP: "/ 0 - 5 years of experience",
  HeadingSec: "Pick from 8+ [Free] Resume Templates",
  Para: "Pick one of our free resume templates, fill it out, and land that dream job! Create and download your professional resume in less than 5 minutes.",
  image: image,
};
function RST() {
  return (
    <div>
      <Tab Data={Data} />
    </div>
  );
}

export default RST;
