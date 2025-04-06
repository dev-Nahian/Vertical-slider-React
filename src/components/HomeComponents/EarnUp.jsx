import React from "react";
import EarnUpImg from "../../assets/images/EarnUpImg.png";
import payWithMezza from "../../assets/images/payWithMezza.png";
import resturantName from "../../assets/images/RestaurantName.png";
import { Link } from "react-router";

const EarnUp = () => {
  return (
    <section className="py-[60px]">
      <div className="container">
        <div className="flex flex-col-reverse md:flex-row items-center">
          <div className="flex flex-col 2xl:mt-[133px]">
            <div className="p-8 2xl:pt-[77px] 2xl:pr-[63px] 2xl:pb-[92px] 2xl:pl-[102px] bg-[#F4F4F4] max-w-[910px] rounded-[30px] flex flex-col gap-5 xl:gap-[54px]">
              <h3 className="text-[18px] xl:text-[40px] 2xl:text-[48px] xl:leading-[55px] 2xl:leading-[60px] font-semibold">
                Earn up to <span className="text-primaryOrange">35% back</span>{" "}
                across hundreds of venues
              </h3>
              <p className="text-[14px] xl:text-[22px] 2xl:text-[24px] text-[#979797] text-regular max-w-[640px]">
                Purchase credit, get bonus cash and pay with the Mezza App at a
                wide range of casual and fine dining spots -{" "}
                <span className="text-primaryOrange">Available now!</span>
              </p>
            </div>

            <div className="flex mt-5 3xl:mt-[172px]">
              <div className="2xl:pl-[99px] w-full">
                <Link
                  to="/download"
                  className="py-4 2xl:py-[33px] w-full block 2xl:w-[394px] text-[16px] 2xl:text-[24px] leading-normal rounded-[60px] bg-black text-primaryWhite text-semibold text-center"
                >
                  Download the App
                </Link>
              </div>
            </div>
          </div>

          <div className="w-[90%] sm:w-[70%] md:w-[60%] xl:w-[50%] 3xl:w-[827px] 3xl:h-[1170px] relative mx-auto 2xl:mx-0">
            <img
              className="w-full h-full object-cover"
              src={EarnUpImg}
              alt="not found"
            />

            <div className="hidden 3xl:flex flex-col gap-[10px] absolute left-[-227px] bottom-[166px]">
              <div className="w-[335px] h-[200px] rounded-2xl overflow-hidden">
                <img
                  className="w-full h-full rounded-2xl"
                  src={payWithMezza}
                  alt="not found"
                />
              </div>
              <div className="w-[335px] h-[104px] rounded-2xl overflow-hidden">
                <img
                  className="w-full h-full rounded-2xl"
                  src={resturantName}
                  alt="not found"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EarnUp;
