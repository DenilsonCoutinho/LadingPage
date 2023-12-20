//images
import Image from "next/image";
import img1 from '../../assets/whatIsLp 2/image 19.svg'
import img2 from '../../assets/whatIsLp 2/image 10.svg'
import img3 from '../../assets/whatIsLp 2/image 18.svg'
import img4 from '../../assets/whatIsLp 2/image 7.svg'
import img5 from '../../assets/whatIsLp 2/image 8.svg'

//style
import style from "../../styles/TechnologiesUsed.module.css";
export default function Carousel() {
  return (
    <>
      <div className="flex justify-center items-center  m-auto">
        <div className={`${style.slide} `}>
          <div className={`${style.slider}`}>
            <div className={`${style.slideTrack} `}>
              <Image src={img1} width={400} />
              <Image src={img5} width={400} className="rounded-xl" />
              <Image src={img2} width={400} className="rounded-xl"  />
              <Image src={img3} width={400} className="rounded-xl"/>
              <Image src={img4} width={400} />

              <Image src={img2} width={400} className="rounded-xl"  />
              <Image src={img1} width={400} />
              <Image src={img3} width={400} />
              <Image src={img5} width={400} className="rounded-xl" />
              <Image src={img4} width={400} />
              
              <Image src={img1} width={400} />
              <Image src={img3} width={400} />
              <Image src={img2} width={400} className="rounded-xl"  />
              <Image src={img5} width={400} className="rounded-xl" />
              <Image src={img4} width={400} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
