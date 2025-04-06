import { useEffect, useRef, useState } from "react";
import sliderImg1 from "../../assets/images/sliderImg1.png";
import sliderImg2 from "../../assets/images/sliderImg2.png";
import sliderImg3 from "../../assets/images/sliderImg3.png";

const cardsData = [
  {
    heading: "get started",
    title: (
      <>
        Pre-purchase dining credit and earn up to{" "}
        <span className="text-primaryOrange">35%</span> cashback
      </>
    ),
    description:
      "Earn cashback on your dining expenses while enjoying top-rated restaurant experiences.",
    image: sliderImg1,
  },
  {
    heading: "FIND LOCAL HIDDEN GEMS",
    title: "Browse tested and approved partner restaurants near you",
    description:
      "And in your favorite cities. Find new gems to try with your friends, family and colleagues!",
    image: sliderImg2,
  },
  {
    heading: "PURCHASE DISCOUNTED CREDITS",
    title: "Use pre-purchased discounted dining credits at any Mezza venues",
    description:
      "Enjoy dining experiences at lower cost, but same quality",
    image: sliderImg3,
  },
];

function SliderVerticalTwo() {
  const cardsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let newActiveIndex = 0;

      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        if (rect.top >= 0 && rect.top <= window.innerHeight / 2) {
          newActiveIndex = index;
        }
      });

      setActiveIndex(newActiveIndex);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="w-full mx-auto grid gap-10 relative">
      <div className="h-[10vh]"></div>

      {cardsData.map((card, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className="bg-white rounded-[30px] overflow-hidden shadow-custom sticky top-0 transition-transform w-full h-[90vh]"
        >
          <div className="flex flex-col h-full bg-white  md:flex-row">
            <div className="pt-[90px] pb-[130px] px-[150px] min-w-[50%] h-full flex flex-col justify-between  ">
              <div>
                <h5 className="text-primaryOrange text-semibold text-[16px] capitalize">
                  {card.heading}
                </h5>

                <h2 className="text-[48px] leading-[60px] text-black text-semibold mt-4">
                  {card.title}
                </h2>
                <p className="text-[24px] text-[#979797] mt-[40px] max-w-[533px]">
                  {card.description}
                </p>
              </div>

              {/* Progress Indicator */}
              <div className="flex gap-3">
                {cardsData.map((_, index) => (
                  <div
                    key={index}
                    className={`h-2 w-[80px] rounded-full transition-all ${
                      activeIndex === index ? "bg-black" : "bg-gray-300"
                    }`}
                  ></div>
                ))}
              </div>
            </div>

            <div className="min-w-[50%]">
              <div className="w-full h-full">
                <img
                  src={card.image}
                  alt=""
                  className="w-full h-full object-fill aspect-square md:aspect-auto"
                />
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="h-[90vh]"></div>
    </div>
  );
}

export default SliderVerticalTwo;
