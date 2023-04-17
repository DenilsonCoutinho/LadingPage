import React, { useEffect, useState } from "react";

export function InteractiveScroll() {

  function getAnimatedElementsNow(e) {
    let qtdElement = 0

   
        document.querySelectorAll(".animatedElementUpNow").forEach(element => {
            if (element.getClientRects()[0]) {
                element.getBoundingClientRect()?.top
                element.style.transform = "translateY(0px)"
                element.style.opacity = 1
                qtdElement = qtdElement + 0.1
                element.style.transitionDelay = qtdElement + 's'
            }
        })
    

    const elementBottom = document.querySelectorAll(".animatedElementBottomNow");
    if (elementBottom.length > 0) {
      elementBottom.forEach((e) => {
        if (e.getBoundingClientRect()) {
          e.style.opacity = "1";
          e.style.transform = "translateY(0px)";
          qtdElement = qtdElement + 0.2
          e.style.transitionDelay = qtdElement + 's'
        }
      });
    }
  }
  function getAnimatedElements(e) {
    const elementUp = document.querySelectorAll(".animatedElementUp");
    if (elementUp.length > 0) {
      elementUp.forEach((e) => {
        if (e.getBoundingClientRect().y <= window.innerHeight / 2) {
          e.style.opacity = "1";
          e.style.transform = "translateY(0px)";
        }
      });
    }

    const elementBottom = document.querySelectorAll(".animatedElementBottom");
    if (elementBottom.length > 0) {
      elementBottom.forEach((e) => {
        if (e.getBoundingClientRect().y <= window.innerHeight / 0.8) {
          e.style.opacity = "1";
          e.style.transform = "translateY(0px)";
        }
      });
    }

    const elementRight = document.querySelectorAll(".animatedElementRight");
    if (elementRight.length > 0) {
      elementRight.forEach((e) => {
        if (e.getBoundingClientRect().y <= window.innerHeight / 1.5) {
          e.style.opacity = "1";
          e.style.transform = "translateX(0px)";
        }
      });
    }

    const elementLeft = document.querySelectorAll(".animatedElementLeft");

    if (elementLeft.length > 0) {
      elementLeft.forEach((e) => {
        if (e.getBoundingClientRect().y <= window.innerHeight / 1.8) {
          e.style.opacity = "1";
          e.style.transform = "translateX(0px)";
        }
      });
    }
    const opacityElements = document.querySelectorAll(".animatedOpacity");
    if (opacityElements?.length > 0) {
      opacityElements.forEach((opacityElement) => {
        if (opacityElement.getClientRects()[0]?.y <= window.innerHeight / 1.6) {
          opacityElement.style.opacity = "1";
        }
      });
    }
    const scaleElements = document.querySelectorAll(".animatedScale");
    if (scaleElements?.length > 0) {
      scaleElements.forEach((scaleElement) => {
        if (
          scaleElement.style.transitionDelay != "0s" &&
          scaleElement.getClientRects()[0].y <= window.innerHeight / 1.2
        ) {
          scaleElement.style.transitionDelay = "0.8s";
          scaleElement.style.opacity = "1";
          scaleElement.style.transform = "scale(1)";
        }
      });
    }

    const animatedTitles = document.querySelectorAll(".animated_titles");
    let delay = 0.3;

    animatedTitles.forEach((title) => {
      if (title.getClientRects()[0].y <= window.innerHeight / 1.2) {
        Array.from(title.children).forEach((children) => {
          children.style.transitionDelay = delay + "s";
          children.style.opacity = 1;
          delay += 0.3;
        });
        setStartCountingAnimation(true);
        title.style.transform = "scale(1)";
      }
    });

    document.querySelectorAll(".interactiveScroll_title").forEach(element => {
            let elementPos = element.getBoundingClientRect().top

            if (elementPos < window.innerHeight / 1.2) {
                element.classList.add("revealed")
            }
        })

    
  }

  useEffect(() => {
  getAnimatedElementsNow()

    window.addEventListener("scroll", (e) => getAnimatedElements(e));
    return () => {
      window.removeEventListener("scroll", (e) => getAnimatedElements(e));
    };
  }, []);
}
