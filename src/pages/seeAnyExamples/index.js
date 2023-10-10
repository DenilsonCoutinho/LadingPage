import Image from "next/image";
import img1 from '../../assets/whatIsLp 2/image 9.png'
import img2 from '../../assets/whatIsLp 2/image 10.png'
import img3 from '../../assets/whatIsLp 2/image 11.png'
import img4 from '../../assets/whatIsLp 2/image 7.png'
import img5 from '../../assets/whatIsLp 2/image 8.png'
import img6 from '../../assets/whatIsLp 2/image 12.png'

export default function SeeAnyExamples() {
  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-[1920px] m-auto my-44 px-4">
        <h1 className="linearText text-center lg:text-5xl text-3xl  font-semibold " id="pages">Designs de alta <br />performance</h1>
        <p className="text-white max-w-[600px] text-center" >oferece páginas inteligentes para negócios digitais. Desenvolvemos toda a estrutura web a partir da sua identidade visual.</p>
        <div className="flex flex-wrap justify-center lg:gap-16 gap-6 mt-24" >
          <Image src={img5} width={400} alt="image-1" />
          <Image src={img1} width={400} alt="image-2" />
          <Image src={img4} width={400} alt="image-3" />
          <Image src={img2} width={400} alt="image-4" />
          <Image src={img3} width={400} alt="image-5" />
          <Image src={img6} width={400} alt="image-6" />
        </div>
        <a href='https://wa.me/5548991109700' aria-label='whatsapp' target='__blank' >
          <button className="mt-10 uppercase hover:scale-105 duration-150 font-bold ButtonLinear w-72 h-14 rounded-2xl text-[#011826] mb-10 ">
            <span className="font-thin ">QUERO</span> minha Landing Page
          </button>
        </a>
      </div>
    </>
  );
}
