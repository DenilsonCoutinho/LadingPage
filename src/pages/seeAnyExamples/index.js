import Image from "next/image";
import image1 from "../../assets/seeAnyExamples/image 1.svg";
import image2 from "../../assets/seeAnyExamples/image 2.svg";
import image3 from "../../assets/seeAnyExamples/landing-ce 1.svg";
import image4 from "../../assets/seeAnyExamples/PAGE1 1.svg";

export default function SeeAnyExamples() {
  return (
    <>
      <div className="flex flex-col justify-center items-center max-w-[1000px] m-auto my-44 px-4">
        <h1 className="linearText text-center lg:text-4xl text-3xl  font-semibold ">Veja alguns exemplos</h1>
        <div className="grid grid-cols-2 gap-16 mt-24">
            <Image src={image1}/>
            <Image src={image2}/>
            <Image src={image3}/>
            <Image src={image4}/>
        </div>
      </div>
    </>
  );
}
