import React from "react";
import Button from "../Common/Button";
import heroBanner from "../../assets/images/heroBanner.png";
import left1 from "../../assets/images/bannerLeft1.png";
import leftPay from "../../assets/images/leftPay.png";
import ClosedNow from "../../assets/images/closedNow.png";
import OpenNow from "../../assets/images/openNow.png";
import LogoSlide from "./LogoSlide";

const Banner = () => {
  return (
    <section className="bg-primaryBlack pt-[120px] xl:pt-[220px] pb-8 xl:pb-[50px] 2xl:pb-[120px] ">
      <div className="container">
        <div className="xl:pl-[57px] xl:pr-[44px] flex flex-col-reverse lg:flex-row justify-between items-center">
          <div className="text-center lg:text-left">
            <h1 className="lg:max-w-[90%] xl:max-w-full text-[40px] sm:text-6xl lg:text-[70px] xl:text-[90px] 2xl:text-[100px] 3xl:text-[120px] text-primaryOrange font-BebasNeue">
              DINE THE MEZZA WAY
            </h1>

            <h3 className="lg:max-w-[90%] 3xl:max-w-[718px] text-primaryWhite text-xl xl:text-[30px] 2xl:text-[40px] 3xl:text-[64px] text-semibold leading-[200%] xl:leading-[170%] 3xl:leading-[70px] mt-5 xl:mt-8 3xl:mt-[90px]">
              Get up to <span className="text-primaryOrange">35%</span> back on
              all of your bills across hundreds of venues
            </h3>

            <p className="max-w-[90%] xl:max-w-[571px] text-[#979797] text-[14px] sm:text-[16px] xl:text-[18px] 2xl:text-[24px] mt-5 xl:mt-[45px] text-regular mx-auto lg:mx-0">
              Enjoy unforgettable experiences at the best spots in town, from
              trendy coffee shops to upscale restaurants and bars, all at
              discounted prices
            </p>

            <div className="mt-10 xl:mt-[70px]">
              <Button />
            </div>
          </div>

          <div className="max-w-[400px] sm:max-w-[500px] 2xl:max-w-[827px] h-auto 2xl:h-[864px] rounded-[30px] relative mb-16 2xl:mb-0 mx-auto 2xl:mx-0">
            <img
              className="w-full h-full object-cover"
              src={heroBanner}
              alt="not found"
            />

            <div className="max-w-[120px] 2xl:max-w-[288px] 2xl:h-[336px] absolute right-1 2xl:right-[-34px] bottom-[40px] z-[5] 2xl:hidden 3xl:block">
              <img
                className="w-full h-full object-cover rounded-[18px]"
                src={left1}
                alt="not found"
              />
            </div>

            <div className="max-w-[120px] 2xl:max-w-[335px] h-auto 2xl:h-[104px] absolute right-[160px] bottom-[320px] shadow-text-shadow rounded-[18px]">
              <img
                className="w-full h-full object-cover"
                src={leftPay}
                alt="not found"
              />
            </div>

            <div className="max-w-[110px] 2xl:max-w-[335px] h-auto 2xl:h-[232px] rounded-[18px] absolute -bottom-5 2xl:bottom-[-50px] left-[20%] 2xl:left-[46%] translate-x-[-50%] 2xl:hidden 3xl:block">
              <img
                className="w-full h-full object-cover"
                src={ClosedNow}
                alt="not found"
              />
            </div>

            <div className="max-w-[150px] 2xl:max-w-[335px] h-auto 2xl:h-[56px] rounded-[18px] absolute bottom-[205px] left-[20%] 2xl:left-[37%] translate-x-[-50%]">
              <img
                className="w-full h-full rounded-[18px] object-cover"
                src={OpenNow}
                alt="not found"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="overflow-x-auto mt-20 2xl:mt-[220px]">
        <LogoSlide />
      </div>
    </section>
  );
};

export default Banner;
