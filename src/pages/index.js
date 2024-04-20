import Head from "next/head";
//pages
import Presentation from "./presentation";
import Carousel from "./Carousel";
import SellMore from "./sellMore";
import OurDiferential from "./ourDiferential";
import StepOfDevelopment from "./stepOfDevelopment";
import SeeAnyExamples from "./seeAnyExamples";
import Footer from "@/components/footer";
//icons
import { FaArrowUp, FaWhatsapp } from "react-icons/fa";
import { scrollToDiv } from "@/utils/scrollToDiv";
import IntegrateTools from "./integrateTools";
import HighPerformanceDesigns from "./highPerformanceDesigns";
import CommonQuestions from "./commonQuestions";
import { useEffect } from "react";
export default function Home() {
  function scrollHome() {
    scrollToDiv("scrollHome")
  }

  let join = 0
  function userView() {
    if (document.visibilityState === 'visible') {
      join++
      console.log(join)
    } else {
      console.log('saiu')
    }
  }

  useEffect(() => {
    document.addEventListener('visibilitychange', userView)
  }, [])

  return (
    <div id="scrollHome" className="bg-[#011826] ">
      <Head>
        <title>Deni - LandingPages</title>
        <meta name="description" content="Deni"></meta>
        <meta name="autor" content="Deni" key="desc"></meta>
        <meta property="og:description" content="Deni"></meta>
        <meta property="og:title" content="Deni"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div onClick={() => scrollHome()} className='z-[200] bg-aatupyBlue hover:bg-aatupyLightBlue transitoon-all duration-200 text-white flex flex-col items-center justify-center fixed right-6 bottom-6 text-lg cursor-pointer w-10 h-10 border border-aatupyLightBlue p-2 rounded-full hover:bg-adeCollorSecondary '>
        <FaArrowUp className="text-white" />
      </div>
      <a href='https://wa.me/5548991109700?text=Olá, quero criar meu site!' aria-label='whatsapp' target='__blank' className='fixed right-5 bottom-20 text-5xl text-transparent  cursor-pointer z-50'>
        <span id='blink' className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-80`}></span>
        <FaWhatsapp className='text-green-500' />
      </a>
      <Presentation />
      <Carousel />
      <SellMore />
      <OurDiferential />
      <SeeAnyExamples />
      <IntegrateTools />
      {/* <HighPerformanceDesigns /> */}
      <Carousel />
      <StepOfDevelopment />
      <CommonQuestions />
      <Footer />
    </div>
  );
}
