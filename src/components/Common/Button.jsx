import React from "react";
import { Link } from "react-router";

const Button = ({ className, onClick }) => {
  return (
    <Link
      to={"/download"}
      onClick={onClick}
      className={`py-2 px-4 md:py-3 md:px-6 xl:py-[16px] lg:px-[46px] bg-primaryOrange text-primaryWhite w-fit text-md lg:text-[20px] font-semibold rounded-[36px] text-medium inline-block ${className}`}
    >
      Download Mezza
    </Link>
  );
};

export default Button;
