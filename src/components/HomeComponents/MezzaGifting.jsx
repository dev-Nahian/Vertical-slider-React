import React from "react";
import MezzaGiftingImg from "../../assets/images/MezzaGifting.png";

const MezzaGifting = () => {
  return (
    <section className="bg-primaryBlack pb-10 lg:pb-20 xl:pb-[210px]">
      <div className="w-full h-[100px] lg:h-[190px]">
        <img
          className="w-full h-full object-cover"
          src={MezzaGiftingImg}
          alt="not found"
        />
      </div>

      <div className="container">
        <div className="mt-5 lg:mt-14">
          <div className="backBg h-auto lg:h-[400px] xl:h-[516px] p-8 sm:p-10 lg:pt-[57px] lg:pl-[100px]">
            <h3 className="text-primaryWhite text-[24px] lg:text-[48px] text-semibold">
              Spread the love, serve up food
            </h3>
            <p className="mt-5 text-regular text-[16px] lg:text-[24px] max-w-[636px] text-primaryWhite">
              Seamlessly send dining credit to your loved ones through the Mezza
              App
            </p>
          </div>

          <div className="mt-[30px] flex flex-col lg:flex-row justify-between gap-y-8">
            <div className="bgTwo h-auto xl:h-[516px] p-5 sm:p-10 xl:pt-[63px] xl:pb-0 xl:pl-[104px] xl:pr-[35px] w-full lg:w-[49%]">
              <h3 className="text-primaryWhite text-[20px] lg:text-[34px] xl:text-[48px] text-semibold">
                Pay with your Mezza App
              </h3>
              <p className="mt-5 text-regular text-[16px] lg:text-[20px] xl:text-[24px] max-w-[636px] text-primaryWhite">
                Gift your existing Mezza credit or use your credit card to share
                the love
              </p>
            </div>

            <div className="bgThree h-auto xl:h-[516px] p-5 sm:p-10 xl:pt-[63px] xl:pb-0 xl:pl-[104px] xl:pr-[35px] w-full lg:w-[49%]">
              <h3 className="text-primaryBlack text-[20px] lg:text-[34px] xl:text-[48px] text-semibold">
                Pay with your Mezza App
              </h3>
              <p className="mt-5 text-regular text-[16px] lg:text-[20px] xl:text-[24px] max-w-[636px] text-primaryBlack">
                Gift your existing Mezza credit or use your credit card to share
                the love
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MezzaGifting;
