import React from "react";
import MainLogo from "../assets/images/Logo.png";
import { Link } from "react-router";
import Button from "../components/Common/Button";

const Navbar = () => {
  // Common Nav Design
  const navDesign =
    "text-primaryWhite text-xs md:text-lg font-medium text-medium";

  return (
    <nav className={`bg-primaryBlack py-5 xl:py-8 fixed left-0 w-full z-40`}>
      <div className="container">
        <div className="flex justify-between items-center">
          <Link to={"/"} className="w-[100px] md:w-[165px] h-auto">
            {/* <MainLogo /> */}
            <img src={MainLogo} alt="not found" className="w-full max-w-full" />
          </Link>

          <div className="flex gap-8 md:gap-[54px] items-center">
            <ul className="sm:flex gap-10 items-center hidden">
              <li>
                <Link to={"/"} className={navDesign}>
                  For Restaurants
                </Link>
              </li>
            </ul>

            <div>
              <Button />
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
