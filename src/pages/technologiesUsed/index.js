import styles from "../../styles/TechnologiesUsed.module.css";

//context
import { useScreenSize } from "@/context/screenSizeContext";

// Import Swiper styles
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Autoplay, Navigation, FreeMode } from "swiper";
import { useEffect, useRef, useState } from "react";
export default function TechnologiesUsed() {
  const { screenX } = useScreenSize();
  const [innerWidth, setInnerWidth] = useState();
  useEffect(() => {
    setInnerWidth(window.innerWidth);
  }, [screenX]);
  const progressCircle = useRef(null);
  const progressContent = useRef(null);
  const onAutoplayTimeLeft = (s, time, progress) => {
    progressCircle.current.style.setProperty("--progress", 1 - progress);
    progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
  };
  const [topSwiper, setTopSwiper] = useState(null);

  const handleBottomSlideClick = (index) => {
    setActiveIndex(index);
    if (topSwiper) {
      topSwiper.slideTo(index);
    }
  };

  return (
    <>
      <p className="mt-44  font-bold linearText lg:text-4xl text-2xl  text-center">
        Tecnologias utilizadas
      </p>
      <div className="bg-[#042233] mt-10">
        <div
          className={` ${
            innerWidth > 700 ? "w-[560px] " : "w-[140px]"
          }  h-56 flex justify-center items-center m-auto`}
        >
          <Swiper
            slidesPerView={innerWidth > 700 ? 3 : 1}
            spaceBetween={10}
            navigation={innerWidth > 700 ?true:false}
            pagination
            modules={[Navigation, Pagination, Autoplay, FreeMode]}
            className="mySwiper2 "
            onSwiper={setTopSwiper}
            onAutoplayTimeLeft={onAutoplayTimeLeft}
            autoplay={{
              delay: 3500,
              disableOnInteraction: false,
            }}
          >
            <SwiperSlide className="">
              <img
                className="lg:w-28 w-28"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original-wordmark.svg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="lg:w-28 w-28"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original-wordmark.svg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="lg:w-28 w-28"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="lg:w-28 w-28"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original-wordmark.svg"
              />
            </SwiperSlide>
            <SwiperSlide>
              <img
                className="lg:w-28 w-28"
                src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original-wordmark.svg"
              />
            </SwiperSlide>
            <div
              className={`autoplay-progress translate-y-5`}
              slot="container-end"
            >
              {
                <svg viewBox="0 0 48 48" ref={progressCircle}>
                  <circle cx="24" cy="24" r="20"></circle>
                </svg>
              }
              <span ref={progressContent}></span>
            </div>
          </Swiper>
        </div>
      </div>
    </>
  );
}
