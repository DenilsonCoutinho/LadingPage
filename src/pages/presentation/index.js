import { useEffect, useState } from "react";
//images
import Image from "next/image";
import Logo from "../../assets/logo/Black_White_Minimalist_Logo__1_-removebg-preview.png";
//style
import styles from "../../styles/presentation.module.css";
//context
import { useScreenSize } from "@/context/screenSizeContext";
import { InteractiveScroll } from "@/utils/interactiveScroll";
export default function presentation() {
  const { screenY, screenX } = useScreenSize();
  const [changeSide, setChangeSide] = useState(false);
  const [startAnimatiomCircles, setStartAnimationCircles] = useState(false);
  const [showCircles, setShowCircles] = useState(true);
  const totalCircles = [
    { total: "1", size: "20px" },
    { total: "1", size: "30px" },
    { total: "1", size: "30px" },
    { total: "1", size: "30px" },
    { total: "1", size: "30px" },
    { total: "1", size: "10px" },
    { total: "1", size: "10px" },
  ];
  const [innerWidth, setInnerWidth] = useState();
  const [innerHeigth, setInnerHeigth] = useState();

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  useEffect(() => {
    setInnerWidth(window.innerWidth);
    setInnerHeigth(window.innerHeigth);
  }, [screenX,screenY]);

  useEffect(() => {
    async function waitAnimationCircles() {
      await new Promise((resolve) => setTimeout(resolve, 500));
    }

    if (!startAnimatiomCircles) {
      waitAnimationCircles();
      setStartAnimationCircles(true);
    }
  }, []);

  useEffect(() => {
    const texts = document.querySelectorAll(".text_animation");
    const cardContainer = document.querySelectorAll(".cards_animation");

    let delayTime = 0.2;
    texts.forEach((text) => {
      text.style.transition = "1.3s";
      text.style.transitionDelay = delayTime + "s";
      text.style.opacity = "1";
      text.style.transform = "translateY(0px)";
    });

    cardContainer.forEach((text) => {
      text.style.transition = "1.3s";
      text.style.transitionDelay = delayTime + "s";
      text.style.opacity = "1";
      text.style.transform = "translateY(0px)";
      delayTime += 0.4;
    });
  }, []);

  useEffect(() => {
    async function changeSideFunction() {
      await new Promise((resolve) => setTimeout(resolve, 25000));
      setChangeSide(!changeSide);
    }

    if (startAnimatiomCircles) {
      animateCircles();
      changeSideFunction();
    }

    function animateCircles() {
      let delayTime = 0.001;
      const circles = document.querySelectorAll(".circle_animation");
      circles.forEach((text, index) => {
        text.style.transition = "45s";
        text.style.transitionDelay = delayTime + "s";

        text.style.opacity = "1";
        text.style.transform = `translate(${getRandomInt(
          1,
          innerWidth - 150
        )}px, ${getRandomInt(1, screenY - 150)}px)`;
        if (index < 8) {
          delayTime += delayTime;
        }
      });

      let delayTimeTwo = 0.001;
      const circlesTwo = document.querySelectorAll(".circle_animationTwo");
      circlesTwo.forEach((text, index) => {
        text.style.transition = "45s";
        text.style.transitionDelay = delayTimeTwo + "s";
        text.style.opacity = "1";
        text.style.transform = `translate(${getRandomInt(
          1,
          -innerWidth - 150
        )}px, ${getRandomInt(-screenY - 150, 1)}px)`;
        if (index < 8) {
          delayTimeTwo += delayTimeTwo;
        }
      });
    }
  }, [changeSide, startAnimatiomCircles, showCircles]);
  return (
    <>
      <InteractiveScroll />
      <main className={`${styles.bgPresentation} bg-no-repeat lg:h-[99vh]`}>
        {showCircles &&
          totalCircles.map((circle, index) => {
            return (
              <span
                key={index + "circles"}
                className={`${styles.circles} circle_animation`}
                style={{
                  width: circle.size,
                  height: circle.size,
                  transform: `translate(${getRandomInt(
                    1,
                    innerWidth - 100
                  )}px, ${getRandomInt(innerHeigth - 100, 1)}px)`,
                }}
              ></span>
            );
          })}
        {showCircles &&
          totalCircles.map((circle, index) => {
            return (
              <span
                key={index + "circlesTwo"}
                className={`${styles.circlesTwo} circle_animationTwo`}
                style={{
                  width: circle.size,
                  height: circle.size,
                  transform: `translate(${getRandomInt(
                    1,
                    -innerWidth - 100
                  )}px, ${getRandomInt(-innerHeigth - 100, 1)}px)`,
                }}
              ></span>
            );
          })}
        <div className=" flex flex-col justify-center items-center  gap-10 lg:pt-24 max-w-[1300px] m-auto">
          <Image
            src={Logo}
            width={300}
            height={300}
            className="animatedElementBottomNow"
          />
          <h1 className=" animatedElementBottomNow  text-4xl linearText font-bold text-center">
            Criamos Landing Pages de <br />
            alta conversão.
          </h1>
          <h1 className="animatedElementBottomNow linearText  lg:text-2xl text-lg text-center px-2">
            Aumente os resultados do seu negócio com estratégias de marketing
            <br />
            digital para impressionar seus clientes e aumentar suas vendas!
          </h1>
          <a
            href="https://wa.me/5548991109700"
            aria-label="whatsapp"
            target="__blank"
            className="buttonAnimation"
          >
            {" "}
            <button className="animatedElementBottomNow bg-[#21A500] w-52 h-14 rounded-2xl text-white mb-10 ">
              Quero minha Landing Page
            </button>
          </a>
        </div>
      </main>
    </>
  );
}
