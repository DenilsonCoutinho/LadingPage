import styles from "../../styles/TechnologiesUsed.module.css";
import ImageReact from "../../assets/bannerTecnoligiesUsed/png-transparent-aperture-laboratories-science-technology-laboratory-portal-science-blue-text-computer-thumbnail-removebg-preview 1.svg";
import ImageNext from "../../assets/bannerTecnoligiesUsed/png-transparent-nextjs-hd-logo-thumbnail-removebg-preview 1.svg";
import ImageJs from "../../assets/bannerTecnoligiesUsed/png-clipart-product-design-logo-brand-trademark-javascript-logo-text-trademark-removebg-preview 1.svg"
import ImageCss from "../../assets/bannerTecnoligiesUsed/486-4866189_html-css-logo-png-transparent-png-removebg-preview 1.svg"
import ImageHtml from "../../assets/bannerTecnoligiesUsed/486-4866189_html-css-logo-png-transparent-png-removebg-preview 2.svg"
import Image from "next/image";
export default function TechnologiesUsed() {
  return (
    <>
        <p className="mt-44  font-bold linearText lg:text-4xl text-3xl  text-center">Tecnologias utilizadas</p> 
    <div className="bg-[#042233] mt-10 ">
      <div
        className={`px-2
        flex flex-col   max-w-[1000px] m-auto overflow-hidden items-center lg:items-start justify-between w-full`}
      >
        <div className=" w-full h-80 overflow-hidden flex flex-col justify-center gap-12 items-start">
          <div
            className={`${styles.slider} flex flex-row items-center justify-center`}
          >
            <div
              className={`${styles.slideTrack} flex flex-row items-center justify-center`}
            >
              <div
                className={`${styles.slide} gap-12 flex flex-row items-center`}
              >
                <Image src={ImageJs} className="overflow-hidden w-48" />
                <Image src={ImageReact} />
                <Image src={ImageNext} />
                <Image src={ImageCss} />
                <Image src={ImageHtml} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </>
  );
}
