import React, { useEffect } from "react";
import QRCode from "../assets/images/qrCode.png";
import Button from "../components/Common/Button";
import iPhone16 from "../assets/images/iphone16.png";

const DownloadMezza = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, []);

  return (
    <section className="bg-primaryBlack w-full relative pt-[150px]">
      <div className="container h-full px-4 md:px-8 lg:px-16">
        <div className="flex flex-col lg:flex-row items-center h-full">
          {/* Left Content */}
          <div className="w-full lg:w-[40%] flex flex-col justify-center items-center text-center lg:text-left">
            <div className="flex flex-col-reverse gap-6 lg:gap-10">
              <div>
                <Button className="py-4 px-8 bg-primaryOrange text-primaryWhite w-fit text-lg md:text-xl rounded-full font-semibold" />
              </div>

              <div className="pt-6 pb-8 px-8 bg-[#242424] backdrop-blur-3xl bg-white/30 rounded-2xl w-fit">
                <div className="w-[180px] h-[180px] md:w-[205px] md:h-[210px]">
                  <img className="w-full h-full" src={QRCode} alt="QR Code" />
                </div>
                <h3 className="text-white text-base md:text-lg font-semibold text-center mt-2">
                  Scan to download
                </h3>
              </div>
            </div>

            <div className="flex flex-col justify-start items-center lg:items-start gap-6 md:gap-10">
              <h2 className="text-white text-2xl md:text-4xl lg:text-5xl font-semibold max-w-[690px] mt-10 md:mt-[125px] leading-tight">
                Receive up to{" "}
                <span className="text-primaryOrange">35% back</span> across
                hundreds of venues
              </h2>
              <p className="text-[#979797] text-base md:text-lg leading-normal max-w-[612px]">
                Use your credit at a wide range of casual and fine dining spots
                with the Mezza App -
                <span className="text-primaryOrange font-semibold">
                  {" "}
                  available now!
                </span>
              </p>
            </div>
          </div>

          {/* Right Image */}
          <div className="h-[400px] md:h-[600px] lg:h-[1054px] w-full lg:w-[60%] relative z-20">
            <img
              className="h-full w-full object-contain"
              src={iPhone16}
              alt="Phone Preview"
            />
          </div>
        </div>
      </div>
      <div
        className="bg-shapeBegun h-full w-full lg:w-[50%] absolute right-0 top-0"
        style={{
          maskImage: "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))",
          WebkitMaskImage:
            "linear-gradient(to left, rgba(0,0,0,1), rgba(0,0,0,0))",
        }}
      ></div>
    </section>
  );
};

export default DownloadMezza;
