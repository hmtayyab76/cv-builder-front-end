import React from "react";
import Tab from "../Tabs/Tab";
import image from "../../assets/cl-group.png";
const Data = {
  HeadingTop: "Cover Letter Templates",
  EXP: " / Any years of experience",
  HeadingSec: "16+ Convincing Cover Letter Templates [Pick & Download]",
  Para: "Looking to create a cover letter that stands out? Try one of our 12 cover letter templates (and land that job)!",
  image: image,
};
function CoverLetter() {
  return (
    <div>
      <Tab Data={Data} />
    </div>
  );
}

export default CoverLetter;
