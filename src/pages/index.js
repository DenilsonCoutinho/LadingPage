import Head from "next/head";
//pages
import Presentation from "./presentation";
import WhatIsLp from "./whatIsLp";
import WhyToHave from "./whyToHave";
import OurDiferential from "./ourDiferential";
import StepOfDevelopment from "./stepOfDevelopment";
import TechnologiesUsed from "./technologiesUsed";
import SeeAnyExamples from "./seeAnyExamples";
import Footer from "@/components/footer";
export default function Home() {
  return (
    <div className="bg-[#011826] ">
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
      <Presentation />
      <div className="BorderLinear h-2"></div>
      <WhatIsLp />
      <WhyToHave />
      <OurDiferential />
      <StepOfDevelopment />
      <TechnologiesUsed />
      <SeeAnyExamples/>
      <Footer/>
    </div>
  );
}
