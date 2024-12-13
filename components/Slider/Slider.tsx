"use client";

import { useCallback, useLayoutEffect, useRef, useState } from "react";
import gsap from "gsap";
import { slides } from "@/data/slider";
import Icon from "../Icon/Icon";
import SplitType from "split-type";
import Image from "next/image";

// slider timeline
const sliderTimeline = gsap.timeline({
  defaults: { duration: 1, ease: "power2.inOut" },
});

const Slider = () => {
  const sliderContainerRef = useRef<HTMLDivElement>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  /* States */
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [totalSlides] = useState<number>(slides.length);

  /* Handlers */
  const moveToSlide = useCallback(
    (nextIndex: number, forwards: boolean) => {
      if (sliderTimeline.isActive()) {
        return;
      }
      const sliderContainer = sliderContainerRef.current as HTMLDivElement;
      const sliderItems = sliderContainer?.childNodes;

      // hiding all the slides
      sliderItems?.forEach((slideItem) => {
        if (slideItem instanceof HTMLElement) {
          slideItem.style.display = "none";
        }
      });
      // styling previous and next child
      const prevItem = sliderItems[activeIndex] as HTMLDivElement;
      prevItem.style.display = "flex";
      const nextItem = sliderItems[nextIndex] as HTMLDivElement;
      nextItem.style.display = "flex";

      let titleFrom = -100;
      let titleDelay = "<";
      if (forwards) {
        titleFrom = 100;
        titleDelay = "<50%";
      }

      if (forwards) {
        sliderTimeline.fromTo(
          nextItem,
          { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 100% 100%)" },
          { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, -30% 100%)" }
        );
        sliderTimeline.fromTo(
          prevItem,
          { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
          { clipPath: "polygon(0% 0%, 0% 0%, -30% 100%, 0% 100%)" },
          "<"
        );
      } else {
        sliderTimeline.fromTo(
          nextItem,
          { clipPath: "polygon(0% 0%, 0% 0%, 0% 100%, 0% 100%)" },
          { clipPath: "polygon(0% 0%, 100% 0%, 130% 100%, 0% 100%)" }
        );
        sliderTimeline.fromTo(
          prevItem,
          { clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)" },
          { clipPath: "polygon(100% 0%, 100% 0%, 100% 100%, 130% 100%)" },
          "<"
        );
      }

      const nextSlideTitle = nextItem.querySelector(
        ".slide-title"
      ) as HTMLElement;
      const ourText = new SplitType(nextSlideTitle, { types: "words" });

      sliderTimeline.fromTo(
        ourText.words,
        { yPercent: titleFrom, opacity: 0 },
        { yPercent: 0, duration: 0.7, stagger: { amount: 0.5 }, opacity: 1 },
        titleDelay
      );
      setActiveIndex(nextIndex);
    },
    [activeIndex]
  );

  const goToNextSlide = useCallback(() => {
    let nextIndex = activeIndex + 1;
    if (nextIndex > totalSlides - 1) nextIndex = 0;
    moveToSlide(nextIndex, true);
  }, [activeIndex, moveToSlide, totalSlides]);

  const goToPrevSlide = useCallback(() => {
    let prevIndex = activeIndex - 1;
    if (prevIndex < 0) prevIndex = totalSlides - 1;
    moveToSlide(prevIndex, false);
  }, [activeIndex, moveToSlide, totalSlides]);

  /* Effects */

  useLayoutEffect(() => {}, []);

  return (
    <section id="slider-section" title="slider">
      <div className="2xl:mt-8 w-full 3xl:container mx-auto" ref={sliderRef}>
        <div className="bg-purple 2xl:rounded-3xl relative overflow-hidden h-[398px] md:h-[592px] 2xl:h-[800px] 2xl:mx-8 -mx-8">
          <div className="slider-container" ref={sliderContainerRef}>
            {slides.map(({ imgUrl, description }, index) => {
              return (
                <div
                  className="absolute h-full w-full hidden first:flex"
                  key={index}
                >
                  <Image
                    src={imgUrl}
                    alt="demo"
                    className="w-full h-full max-w-full block absolute object-cover"
                    fill={true}
                    loading="eager"
                    priority={false}
                  />
                  <div className="img-title relative p-9 flex items-center justify-center">
                    <div className="w-full p-8 lg:max-w-[45%] 2xl:max-w-[65%]">
                      <p className="text-fluid-h5 leading-fluid-h5 font-bold text-center slide-title 2xl:text-fluid-h3 2xl:leading-fluid-h3">
                        {description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="previous-slide absolute h-full flex items-center justify-center">
            <button
              onClick={goToPrevSlide}
              aria-label="go to previous slide"
              className="bg-white w-9 h-32 md:w-12 md:h-32 flex justify-center items-center rounded-tr-3xl rounded-br-3xl"
            >
              <Icon icon="arrow" size={24} className="rotate-180" />
            </button>
          </div>
          <div className="next-slide absolute h-full right-0 flex items-center justify-center">
            <button
              onClick={goToNextSlide}
              aria-label="go to next slide"
              className="bg-white w-9 h-32 md:w-12 md:h-32 flex justify-center items-center rounded-tl-3xl rounded-bl-3xl"
            >
              <Icon icon="arrow" size={24} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Slider;
