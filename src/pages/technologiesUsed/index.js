import styles from "../../styles/TechnologiesUsed.module.css";
import ImageReact from "../../assets/bannerTecnoligiesUsed/png-transparent-aperture-laboratories-science-technology-laboratory-portal-science-blue-text-computer-thumbnail-removebg-preview 1.svg";
import ImageNext from "../../assets/bannerTecnoligiesUsed/png-transparent-nextjs-hd-logo-thumbnail-removebg-preview 1.svg";
import ImageJs from "../../assets/bannerTecnoligiesUsed/png-clipart-product-design-logo-brand-trademark-javascript-logo-text-trademark-removebg-preview 1.svg";
import ImageCss from "../../assets/bannerTecnoligiesUsed/486-4866189_html-css-logo-png-transparent-png-removebg-preview 1.svg";
import ImageHtml from "../../assets/bannerTecnoligiesUsed/486-4866189_html-css-logo-png-transparent-png-removebg-preview 2.svg";
import Image from "next/image";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
export default function TechnologiesUsed() {
  return (
    <>
      <p className="mt-44  font-bold linearText lg:text-4xl text-3xl  text-center">
        Tecnologias utilizadas
      </p>
      <div className="bg-[#042233] mt-10 ">
        <div
          className={`px-2
        flex flex-col   max-w-[1000px] m-auto overflow-hidden items-center lg:items-start justify-between w-full`}
        >
          <div className=" w-full flex flex-col justify-center gap-12 items-start">
            <>
              <Swiper
                navigation={true}
                pagination={true}
                slidesPerView={3}
                modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                className=" w-[1200px] flex justify-center items-center"
              >
                <SwiperSlide>
                  <Image src={ImageReact}  className="mt-6"/>
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={ImageNext} className="mt-12" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={ImageJs} className="mt-5" />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={ImageCss} />
                </SwiperSlide>
                <SwiperSlide>
                  <Image src={ImageHtml} />
                </SwiperSlide>
              </Swiper>
            </>
          </div>
        </div>
      </div>
    </>
  );
}
