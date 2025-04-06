import { useEffect, useRef } from "react";
import sliderImg1 from "../../assets/images/sliderImg1.png";

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
    heading: "get started",
    title: "Card Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. Eum fuga laborum quos expedita iste saepe similique, unde possimus quia at magnam sed cupiditate? Reprehenderit, harum!",
    image:
      "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100",
  },
  {
    heading: "get started",
    title: "Card Title",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab dicta error nam eaque. Eum fuga laborum quos expedita iste saepe similique, unde possimus quia at magnam sed cupiditate? Reprehenderit, harum!",
    image:
      "https://images.unsplash.com/photo-1620207418302-439b387441b0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=100",
  },
];

function SliderVertical() {
  const cardsRef = useRef([]);

  useEffect(() => {
    const handleScroll = () => {
      cardsRef.current.forEach((card, index) => {
        if (!card) return;
        const rect = card.getBoundingClientRect();
        const percentageY = Math.min(
          1,
          Math.max(0, rect.top / window.innerHeight)
        );
        const scaleValue =
          1 - (cardsData.length - 1 - index) * 0.1 * percentageY;
        const brightnessValue = 1 - (1 - 1) * percentageY;

        card.style.transform = `scale(${scaleValue})`;
        card.style.filter = `brightness(${brightnessValue})`;
        card.style.transition = "transform 0.2s ease-out, filter 0.2s ease-out";
      });
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
          className=" bg-white rounded-[30px] overflow-hidden sticky top-0 transition-transform w-full h-[90vh]"
        >
          <div className="flex flex-col h-full bg-white md:flex-row">
            <div className="py-[90px] px-[150px] min-w-[50%] bg-[#f4f4f4a1]">
              <h5 className="text-primaryOrange text-semibold text-[16px] capitalize">
                {card.heading}
              </h5>

              <h2 className="text-[48px] leading-[60px] text-black text-semibold mt-4">
                {card.title}
              </h2>
              <p className="text-[24px] text-[#979797] mt-[40px]">
                {card.description}
              </p>
            </div>

            <div className="min-w-[50%]">
              <div className="w-full h-full ">
                <img
                  src={card.image}
                  alt=""
                  className="w-full h-full object-fil aspect-square md:aspect-auto"
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

export default SliderVertical;
