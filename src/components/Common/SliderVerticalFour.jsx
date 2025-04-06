import React, { useEffect, useRef, useState } from "react";
import sliderImg1 from "../../assets/images/sliderImg1.png";
import sliderImg2 from "../../assets/images/sliderImg2.png";
import sliderImg3 from "../../assets/images/sliderImg3.png";
import sliderImg4 from "../../assets/images/sliderFour.png";
import sliderImg5 from "../../assets/images/sliderImgFive.png";

const cardsData = [
  {
    subtitle: "BUY DINING CREDIT",
    title: (
      <>
        Purchase food & beverage credit and earn up to{" "}
        <span className="text-primaryOrange">35%</span> back
      </>
    ),
    description:
      "Load your Mezza Wallet, get extra credit and enjoy top-rated restaurants experiences",
    image: sliderImg1,
  },
  {
    subtitle: "ENJOY MEZZA ADVANTAGES",
    title: <>Enjoy benefits and exclusive perks for all of your visits</>,
    description: "Pack all of your dining experiences with savings and rewards",
    image: sliderImg4,
  },
  {
    subtitle: "PAY WITH YOUR APP",
    title: (
      <>
        Pay your bill with the Mezza{" "}
        <span className="text-primaryOrange">App</span>
      </>
    ),
    description:
      "Seamlessly pay your bill with your App, apply rewards and savings and keep a digital access to your dining history",
    image: sliderImg2,
  },
  {
    subtitle: "FIND LOCAL HIDDEN GEMS",
    title: <>Discover tested and approved restaurants near you</>,
    description:
      "And in your favorite cities. Find new gems to try with your friends, family and colleagues!",
    image: sliderImg3,
  },
  {
    subtitle: "MEZZA PRIME MEMBERSHIP",
    title: (
      <>
        Coming soon: become a <span className="text-primaryOrange">Mezza</span>{" "}
        Prime member
      </>
    ),
    description: (
      <>
        Get exclusive deals, access to Prime-only select venues, pay with your
        Mezza App for food delivery... for only{" "}
        <span className="text-primaryOrange font-bold">$9,99</span> a month !{" "}
        <br />
        <span className="text-primaryOrange font-bold text-semibold">
          Available soon{" "}
        </span>
      </>
    ),
    image: sliderImg5,
  },
];

const clamp = (num, min, max) => Math.min(Math.max(num, min), max);

const valueAtPercentage = ({ from, to, percentage }) =>
  from + (to - from) * percentage;

const SliderVerticalFour = () => {
  const cardsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      let currentActiveIndex = 0;

      cardsRef.current.forEach((card, index) => {
        if (!card) return;

        const rect = card.getBoundingClientRect();
        const topThreshold = window.innerHeight / 2;

        if (rect.top <= topThreshold) {
          currentActiveIndex = index;
        }
      });

      setActiveIndex(currentActiveIndex);

      cardsRef.current.forEach((card, index) => {
        if (!card || index === cardsRef.current.length - 1) return;

        const nextCard = cardsRef.current[index + 1];
        const cardInner = card.querySelector(".card-inner");

        const rect = nextCard.getBoundingClientRect();
        const viewportHeight = window.innerHeight;
        const offsetTop = 40 + index * 40;
        const offsetBottom = window.innerHeight - card.clientHeight;
        const viewHeight = viewportHeight - offsetTop - offsetBottom;
        const percentageY = clamp(
          (viewportHeight - offsetBottom - rect.top) / viewHeight,
          0,
          1
        );

        const scale = valueAtPercentage({
          from: 1,
          to: 0.8 - index * 0.05,
          percentage: percentageY,
        });

        const brightness = valueAtPercentage({
          from: 1,
          to: 0.6,
          percentage: percentageY,
        });

        cardInner.style.transform = `scale(${scale})`;
        cardInner.style.filter = `brightness(${brightness})`;
      });
    };

    const resizeObserver = new ResizeObserver(() => handleScroll());
    cardsRef.current.forEach((card) => card && resizeObserver.observe(card));

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleScroll);

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
      resizeObserver.disconnect();
    };
  }, []);

  return (
    <section className="py-20">
      <div className="container">
        <div
          className="grid gap-10 mx-auto w-full h-full"
          style={{ gridTemplateRows: `repeat(${cardsData.length}, auto)` }}
        >
          {cardsData.map((card, index) => {
            const isLast = index === cardsData.length - 1;
            const isEven = index % 2 === 0;

            return (
              <div
                className="sticky top-0 w-full h-full"
                key={index}
                ref={(el) => (cardsRef.current[index] = el)}
              >
                <div
                  className={`card-inner flex ${
                    isEven ? "flex-row" : "flex-row-reverse"
                  } overflow-hidden rounded-[30px] bg-[#F4F4F4] transition-transform duration-300 ease-linear transform-origin-top w-full h-full`}
                >
                  <div
                    className={`pt-10 lg:pt-20 xl:pt-[90px] pb-[90px] min-w-[50%] h-full flex flex-col justify-between ${
                      index === 1 ? "bg-gradient-custom" : "bg-[#F4F4F4]"
                    }`}
                  >
                    <div className="pl-[104px]">
                      <h5 className="text-primaryOrange text-semibold text-base capitalize leading-normal">
                        {card.subtitle}
                      </h5>

                      <h2 className="text-[28px] xl:text-[38px] 2xl:text-[48px] xl:leading-[55px] 2xl:leading-[60px] text-black text-semibold mt-4 max-w-[602px]">
                        {card.title}
                      </h2>

                      <p className="text-[16px] xl:text-[20px] 2xl:text-[24px] text-[#979797] mt-5 xl:mt-[40px] max-w-[533px]">
                        {card.description}
                      </p>

                      {isLast && (
                        <button className="w-[200px] xl:w-[250px] 2xl:w-[290px] border border-[#AFAFAF] rounded-[45px] py-3 xl:py-[20px] 2xl:py-[26px] text-xl 2xl:text-[24px] text-semibold mt-5">
                          Check it out
                        </button>
                      )}
                    </div>

                    <div className="flex gap-3 mt-6 pl-[104px]">
                      {cardsData.map((_, i) => (
                        <div
                          key={i}
                          className={`h-[6px] w-[90px] rounded-full transition-all duration-300 ${
                            activeIndex === i ? "bg-black" : "bg-gray-300"
                          }`}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <div className="max-w-[50%] min-h-[750px] flex-shrink-0 sm:w-full sm:h-auto">
                    <img
                      src={card.image}
                      alt={`Image ${index + 1}`}
                      className="w-full h-full object-cover aspect-[1] sm:aspect-[16/9]"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default SliderVerticalFour;
