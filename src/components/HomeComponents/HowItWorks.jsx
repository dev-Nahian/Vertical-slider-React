import React from "react";
import SubHeader from "../Common/SubHeader";
import SliderVerticalThree from "../Common/SliderVerticalThree";
import SliderVerticalFour from "../Common/SliderVerticalFour";
// import SliderVertical from "../Common/SliderVertical";
// import SliderVerticalTwo from "../Common/SliderVerticalTwo";

const HowItWorks = () => {
  return (
    <section className="pt-[50px] pb-[50px] md:pb-[100px]">
      <div className="container">
        <div>
          <div>
            <SubHeader color="primaryBlack" content="How it works" />
          </div>

          <div>
            {/* <SliderVertical /> */}
            {/* <SliderVerticalTwo /> */}
            {/* <SliderVerticalThree /> */}
            <SliderVerticalFour/>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
