import React from "react";
// import Revel from '../../assets/images/RevelLogo.png'
// import micros from '../../assets/images/Micros.png'
// import NCR from '../../assets/images/NCR.png'
// import toastLogo from '../../assets/images/Toast.png'
import wagamama from "../../assets/images/wangama.png";

const LogoSlide = () => {
  const Logos = [
    {
      id: crypto.randomUUID(),
      image: wagamama,
    },
    {
      id: crypto.randomUUID(),
      image: wagamama,
    },
    {
      id: crypto.randomUUID(),
      image: wagamama,
    },
    {
      id: crypto.randomUUID(),
      image: wagamama,
    },
    {
      id: crypto.randomUUID(),
      image: wagamama,
    },
    {
      id: crypto.randomUUID(),
      image: wagamama,
    },
  ];

  return (
    <div className="slider">
      <div className="flex gap-x-10 sm:gap-[80px] w-full items-center relative slide-track">
        {Logos.map((items) => (
          <div
            key={items.id}
            className="max-w-[100px] sm:max-w-[150px] md:max-w-[200px] 2xl:max-w-[350px] w-fit h-auto slide"
          >
            <img
              className="w-full h-full object-cover"
              src={items.image}
              alt="not found"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default LogoSlide;
