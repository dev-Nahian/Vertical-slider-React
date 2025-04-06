import React from "react";
import { Link } from "react-router";
import Button from "../components/Common/Button";
import QRCode from "../assets/images/qrCode.png";

const Footer = () => {
  return (
    <footer className="bg-primaryBlack pb-10 pt-[70px] lg:pb-[90px]">
      <div className="container">
        <div className="flex flex-col md:flex-row justify-between items-center xl:items-start">
          <div>
            <h2 className="text-semibold text-[20px] sm:text-[28px] lg:text-[48px] leading-normal text-white">
              Dining companion, payment, and big discounts
            </h2>
            <p className="text-regular text- lg:text-[24px] leading-normal text-white mt-[20px]">
              All in one place with{" "}
              <span className="text-primaryOrange">Mezza</span>
            </p>

            <div className="mt-10 lg:mt-[88px] flex flex-wrap lg:flex-nowrap justify-between lg:justify-normal gap-y-[40px] lg:gap-[135px] items-start">
              <ul className="w-[48%] sm:w-[32%] flex flex-col gap-1 items-start">
                <li className="mb-[5px]">
                  <Link className="text-[#979797] text-base font-medium leading-normal ">
                    Mezza Membership
                  </Link>
                </li>
                <li>
                  <Link className="text-[#FFF] text-lg lg:text-base lg:font-medium leading-normal">
                    About Mezza
                  </Link>
                </li>
                <li>
                  <Link className="text-[#FFF] text-lg lg:text-base lg:font-medium leading-normal">
                    How it works
                  </Link>
                </li>
                <li>
                  <Link className="text-[#FFF] text-lg lg:text-base lg:font-medium leading-normal">
                    Gift cards
                  </Link>
                </li>
                <li>
                  <Link className="text-[#FFF] text-lg lg:text-base lg:font-medium leading-normal">
                    Prime Membership
                  </Link>
                </li>
                <li>
                  <Link className="text-[#FFF] text-lg lg:text-base lg:font-medium leading-normal">
                    Contact us
                  </Link>
                </li>
              </ul>

              <ul className="w-[48%] sm:w-[32%] flex flex-col gap-1 items-start">
                <li className="mb-[5px]">
                  <Link className="text-[#979797] text-base font-medium leading-normal ">
                    Restaurants
                  </Link>
                </li>
                <li>
                  <Link className="text-[#FFF] text-lg lg:text-base lg:font-medium leading-normal">
                    Partner with us
                  </Link>
                </li>
                <li>
                  <Link className="text-[#FFF] text-lg lg:text-base lg:font-medium leading-normal">
                    Get in touch
                  </Link>
                </li>
                <li>
                  <Link className="text-[#FFF] text-lg lg:text-base lg:font-medium leading-normal">
                    Our integrations
                  </Link>
                </li>
              </ul>

              <ul className="w-[48%] sm:w-[32%] flex flex-col gap-1 items-start">
                <li className="mb-[5px]">
                  <Link className="text-[#979797] text-base font-medium leading-normal">
                    Terms & Policies
                  </Link>
                </li>
                <li>
                  <Link className="text-[#FFF] text-lg lg:text-base lg:font-medium leading-normal">
                    Legal Terms
                  </Link>
                </li>
                <li>
                  <Link className="text-[#FFF] text-lg lg:text-base lg:font-medium leading-normal">
                    Politique de confidentialité
                  </Link>
                </li>
                <li>
                  <Link className="text-[#FFF] text-lg lg:text-base lg:font-medium leading-normal">
                    Conditions générales d’utilisation
                  </Link>
                </li>
                <li>
                  <Link className="text-[#FFF] text-lg lg:text-base lg:font-medium leading-normal">
                    Politique des cookies
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="flex flex-col-reverse lg:flex-col gap-[24px] mx-auto items-center mt-10 lg:mt-0">
            <div>
              <Button className={"py-3 px-5"} />
            </div>

            <div className="px-5 pt-5 pb-3 lg:pt-[26px] lg:pb-[30px] lg:px-[30px] bg-[#242424] backdrop-blur-3xl bg-white/30 rounded-[30px] w-fit flex flex-col gap-y-3">
              <div className="w-[200px] lg:w-[205px] h-[210px]">
                <img className="w-full h-full" src={QRCode} alt="not found" />
              </div>
              <h3 className="text-white text-[16px] leading-normal text-semibold text-center">
                Scan to download
              </h3>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
