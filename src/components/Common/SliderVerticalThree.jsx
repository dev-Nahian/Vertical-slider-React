import { useEffect, useRef, useState } from "react";
import sliderImg1 from "../../assets/images/sliderImg1.png";
import sliderImg2 from "../../assets/images/sliderImg2.png";
import sliderImg4 from "../../assets/images/sliderFour.png";
import sliderImg5 from "../../assets/images/sliderImgFive.png";
import sliderFourRight from "../../assets/images/sliderFourRight.png";
import sliderFourRightTwo from "../../assets/images/imgFourElementTwo.png";

function SliderVerticalThree() {
  const cardsRef = useRef([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          let newActiveIndex = activeIndex;

          cardsRef.current.forEach((card, index) => {
            if (!card) return;
            const rect = card.getBoundingClientRect();

            console.log(rect);

            if (rect.top >= 60 && rect.top <= window.innerHeight * 0.3) {
              newActiveIndex = index;
            }
          });

          if (newActiveIndex !== activeIndex) {
            setActiveIndex(newActiveIndex);
          }

          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [activeIndex]);

  return (
    <div className="w-full mx-auto grid gap-10 relative sm:mt-8 2xl:mt-0">
      {/* <div className="h-[10vh]"></div> */}

      {/* Slider 1 */}
      <div
        ref={(el) => (cardsRef.current[0] = el)}
        className="bg-white rounded-[30px] overflow-hidden sticky top-0 transition-transform w-full h-auto 2xl:h-[90vh]"
      >
        <div className="flex flex-col h-full bg-white lg:flex-row">
          <div className="pt-10 lg:pt-20 xl:pt-[90px] pb-8 lg:pb-20 xl:pb-[90px] 2xl:pb-[130px] px-8 xl:px-20 2xl:px-[150px] min-w-[50%] h-full flex flex-col justify-between bg-[#F4F4F4]">
            <div>
              <h5 className="text-primaryOrange text-semibold text-xl xl:text-base capitalize leading-normal">
                get started
              </h5>

              <h2 className="text-[28px] xl:text-[38px] 2xl:text-[48px] xl:leading-[55px] 2xl:leading-[60px] text-black text-semibold mt-4">
                Pre-purchase dining credit and earn up to
                <span className="text-primaryOrange"> 35%</span> back
              </h2>

              <p className="text-[16px] xl:text-[20px] 2xl:text-[24px] text-[#979797] mt-5 xl:mt-[40px] max-w-[533px]">
                Load your Mezza Wallet, get extra credit and enjoy top-rated
                restaurants experiences
              </p>
            </div>

            
            <div className="flex gap-3 mt-10 xl:mt-0">
              <div
                className={`h-[6px] w-[50px] xl:w-[65px] 2xl:w-[97px] rounded-full transition-all ${
                  activeIndex === 0 ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`h-[6px] w-[50px] xl:w-[65px] 2xl:w-[97px] rounded-full transition-all ${
                  activeIndex === 1 ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`h-[6px] w-[50px] xl:w-[65px] 2xl:w-[97px] rounded-full transition-all ${
                  activeIndex === 2 ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`h-[6px] w-[50px] xl:w-[65px] 2xl:w-[97px] rounded-full transition-all ${
                  activeIndex === 3 ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`h-[6px] w-[50px] xl:w-[65px] 2xl:w-[97px] rounded-full transition-all ${
                  activeIndex === 4 ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
            </div>
          </div>

          <div className="w-full min-w-[50%] h-[400px] md:h-full">
            <img
              src={sliderImg1}
              alt=""
              className="w-full h-full object-fill aspect-square md:aspect-auto"
            />
          </div>
        </div>
      </div>

      {/* Slider 2 */}
      <div
        ref={(el) => (cardsRef.current[1] = el)}
        className="bg-white rounded-[30px] overflow-hidden sticky top-0 transition-transform w-full h-auto 2xl:h-[90vh]"
      >
        <div className="flex flex-col h-full rounded-[30px] bg-gradient-custom lg:flex-row-reverse">
          <div className="pt-10 lg:pt-20 xl:pt-[90px] pb-8 lg:pb-20 xl:pb-[90px] 2xl:pb-[130px] px-8 xl:px-20 2xl:px-[150px] min-w-[50%] h-full flex flex-col justify-between">
            <div>
              <h5 className="text-primaryOrange text-semibold text-xl xl:text-base capitalize leading-normal">
                ENJOY MEZZA ADVANTAGES
              </h5>
              <h2 className="text-[28px] xl:text-[38px] 2xl:text-[48px] xl:leading-[55px] 2xl:leading-[60px] text-black text-semibold mt-4">
                Enjoy benefits and exclusive perks for all of your visits
              </h2>
              <p className="text-[16px] xl:text-[20px] 2xl:text-[24px] text-[#979797] mt-5 xl:mt-[40px] max-w-[533px]">
                Pack all of your dining experiences with savings and rewards
              </p>
            </div>
            <div className="flex gap-3 mt-10 xl:mt-0">
              <div
                className={`h-[6px] w-[50px] xl:w-[65px] 2xl:w-[97px] rounded-full transition-all ${
                  activeIndex === 0 ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`h-[6px] w-[50px] xl:w-[65px] 2xl:w-[97px] rounded-full transition-all ${
                  activeIndex === 1 ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`h-[6px] w-[50px] xl:w-[65px] 2xl:w-[97px] rounded-full transition-all ${
                  activeIndex === 2 ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`h-[6px] w-[50px] xl:w-[65px] 2xl:w-[97px] rounded-full transition-all ${
                  activeIndex === 3 ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`h-[6px] w-[50px] xl:w-[65px] 2xl:w-[97px] rounded-full transition-all ${
                  activeIndex === 4 ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
            </div>
          </div>

          <div className="min-w-[50%] h-full relative">
            <img
              src={sliderImg4}
              alt=""
              className="w-full h-full object-fill aspect-square xl:aspect-auto"
            />

            <div className="w-[335px] h-[104px] absolute right-[-30px] top-[57%] translate-y-[-50%] hidden xl:block">
              <img src={sliderFourRight} alt="not found" />
            </div>
            <div className="w-[335px] h-[200px] absolute right-[30px] bottom-[-15px] hidden xl:block">
              <img
                className="w-full h-full"
                src={sliderFourRightTwo}
                alt="not found"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Slider 3 */}
      <div
        ref={(el) => (cardsRef.current[2] = el)}
        className="bg-white rounded-[30px] overflow-hidden sticky top-0 transition-transform w-full 2xl:h-[90vh]"
      >
        <div className="flex flex-col h-full bg-[#F4F4F4] rounded-[30px] lg:flex-row">
          <div className="pt-10 lg:pt-20 xl:pt-[90px] pb-8 lg:pb-20 xl:pb-[90px] 2xl:pb-[130px] px-8 xl:px-20 2xl:px-[150px] min-w-[40%] h-full flex flex-col justify-between bg-[#F4F4F4]">
            <div>
              <h5 className="text-primaryOrange text-semibold text-xl xl:text-base capitalize leading-normal">
                PAY WITH YOUR APP
              </h5>
              <h2 className="text-[28px] xl:text-[38px] 2xl:text-[48px] xl:leading-[55px] 2xl:leading-[60px] text-black text-semibold mt-4">
                Pay your bill with the Mezza{" "}
                <span className="text-primaryOrange">App</span>
              </h2>
              <p className="text-[16px] xl:text-[20px] 2xl:text-[24px] text-[#979797] mt-5 xl:mt-[40px] max-w-[533px]">
                Seamlessly pay your bill with your App, apply rewards and
                savings and keep a digital access to your dining history
              </p>
            </div>
            <div className="flex gap-3 mt-10 xl:mt-0">
              <div
                className={`h-[6px] w-[50px] xl:w-[65px] 2xl:xl:w-[97px] rounded-full transition-all ${
                  activeIndex === 0 ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`h-[6px] w-[50px] xl:w-[65px] 2xl:xl:w-[97px] rounded-full transition-all ${
                  activeIndex === 1 ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`h-[6px] w-[50px] xl:w-[65px] 2xl:xl:w-[97px] rounded-full transition-all ${
                  activeIndex === 2 ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`h-[6px] w-[50px] xl:w-[65px] 2xl:xl:w-[97px] rounded-full transition-all ${
                  activeIndex === 3 ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`h-[6px] w-[50px] xl:w-[65px] 2xl:xl:w-[97px] rounded-full transition-all ${
                  activeIndex === 4 ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
            </div>
          </div>

          <div className="min-w-[54.7%]">
            <img
              src={sliderImg2}
              alt=""
              className="w-full h-full object-fill aspect-square xl:aspect-auto"
            />
          </div>
        </div>
      </div>

      {/* Slider 4 */}
      <div
        ref={(el) => (cardsRef.current[3] = el)}
        className="bg-[#f4f4f4] rounded-[30px] overflow-hidden sticky top-0 transition-transform w-full 2xl:h-[90vh]"
      >
        <div className="flex flex-col h-full bg-[#F4F4F4] rounded-[30px] lg:flex-row-reverse">
          <div className="pt-10 lg:pt-20 xl:pt-[90px] pb-8 lg:pb-20 xl:pb-[90px] 2xl:pb-[130px] px-8 xl:px-20 2xl:px-[150px] min-w-[40%] h-full flex flex-col justify-between bg-[#F4F4F4]">
            <div>
              <h5 className="text-primaryOrange text-semibold text-xl xl:text-base capitalize leading-normal">
                FIND LOCAL HIDDEN GEMS
              </h5>
              <h2 className="text-[28px] xl:text-[38px] 2xl:text-[48px] xl:leading-[55px] 2xl:leading-[60px] text-black text-semibold mt-4">
                Discover tested and approved restaurants near you
              </h2>
              <p className="text-[16px] xl:text-[20px] 2xl:text-[24px] text-[#979797] mt-5 xl:mt-[40px] max-w-[533px]">
                And in your favorite cities. Find new gems to try with your
                friends, family and colleagues!
              </p>
            </div>
            <div className="flex gap-3 mt-10 xl:mt-0">
              <div
                className={`h-[6px] w-[50px] xl:w-[97px] rounded-full transition-all ${
                  activeIndex === 0 ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`h-[6px] w-[50px] xl:w-[97px] rounded-full transition-all ${
                  activeIndex === 1 ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`h-[6px] w-[50px] xl:w-[97px] rounded-full transition-all ${
                  activeIndex === 2 ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`h-[6px] w-[50px] xl:w-[97px] rounded-full transition-all ${
                  activeIndex === 3 ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`h-[6px] w-[50px] xl:w-[97px] rounded-full transition-all ${
                  activeIndex === 4 ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
            </div>
          </div>

          <div className="min-w-[54.7%]">
            <img
              src={sliderImg2}
              alt=""
              className="w-full h-full object-fill aspect-square xl:aspect-auto"
            />
          </div>
        </div>
      </div>

      {/* Slider 5 */}
      <div
        ref={(el) => (cardsRef.current[4] = el)}
        className="bg-[#f4f4f4] rounded-[30px] overflow-hidden sticky top-0 transition-transform w-full xl:h-[90vh]"
      >
        <div className="flex flex-col h-[102%] bg-[#F4F4F4] rounded-[30px] lg:flex-row">
          <div className="pt-10 lg:pt-20 xl:pt-[90px] pb-8 lg:pb-20 xl:pb-[90px] 2xl:pb-[130px] px-8 xl:px-20 2xl:px-[150px] min-w-[40%] h-full flex flex-col justify-between">
            <div>
              <h5 className="text-primaryOrange text-semibold text-xl xl:text-base capitalize leading-normal">
                MEZZA PRIME MEMBERSHIP
              </h5>
              <h2 className="text-[28px] xl:text-[38px] 2xl:text-[48px] xl:leading-[55px] 2xl:leading-[60px] text-black text-semibold mt-4">
                Coming soon: become a{" "}
                <span className="text-primaryOrange">Mezza</span> Prime member
              </h2>
              <p className="text-[16px] xl:text-[20px] 2xl:text-[24px] text-[#979797] mt-5 xl:mt-[40px] max-w-[533px]">
                Get exclusive deals, access to Prime-only select venues, pay
                with your Mezza App for food delivery... for only{" "}
                <span className="text-primaryOrange">$9,99</span> a month !
              </p>
              <h6 className="text-primaryOrange text-base xl:text-[22px] 2xl:text-[24px] text-semibold capitalize mt-5 2xl:mt-0">
                - available soon
              </h6>

              <button className="w-[200px] xl:w-[250px] 2xl:w-[290px] border border-[#AFAFAF] rounded-[45px] py-3 xl:py-[20px] 2xl:py-[26px] text-xl 2xl:text-[24px] text-semibold mt-5 xl:mt-[70px]">
                Check it out
              </button>
            </div>
            <div className="flex gap-3 mt-10 xl:mt-0">
              <div
                className={`h-[6px] w-[50px] xl:text-[38px] 2xl:w-[97px] rounded-full transition-all ${
                  activeIndex === 0 ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`h-[6px] w-[50px] xl:text-[38px] 2xl:w-[97px] rounded-full transition-all ${
                  activeIndex === 1 ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`h-[6px] w-[50px] xl:text-[38px] 2xl:w-[97px] rounded-full transition-all ${
                  activeIndex === 2 ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`h-[6px] w-[50px] xl:text-[38px] 2xl:w-[97px] rounded-full transition-all ${
                  activeIndex === 3 ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
              <div
                className={`h-[6px] w-[50px] xl:text-[38px] 2xl:w-[97px] rounded-full transition-all ${
                  activeIndex === 4 ? "bg-black" : "bg-gray-300"
                }`}
              ></div>
            </div>
          </div>
          <div className="min-w-[52.5%] h-full relative">
            <img
              src={sliderImg5}
              alt=""
              className="w-full h-full object-fill aspect-square xl:aspect-auto"
            />
          </div>
        </div>
      </div>

      {/* <div className="h-[80vh]"></div> */}
    </div>
  );
}

export default SliderVerticalThree;
