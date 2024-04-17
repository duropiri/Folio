import React from "react";
import { TechStack } from "./TechStack";
import ScrambleText from "./ScrambleText";
import Marquee from "./Marquee";
import ScrollingBanner from "./ScrollingBanner";

const WhatIDo = () => {
  return (
    <div className="relative w-full h-full">
      {/* Content */}
      <div className="flex flex-col justify-start gap-[50px] xl:gap-[100px] z-10">
        <div className="end-to-end w-screen">
          {/* <div class="end-to-end absolute h-[100%] top-0 left-0 w-52 bg-gradient-to-l from-transparent to-dark-primary dark:to-light-primary z-10"></div> */}
          <ScrollingBanner baseVelocity={-100}>Services.</ScrollingBanner>
          {/* <div class="end-to-end absolute h-[100%] top-0 right-0 w-52 bg-gradient-to-r from-transparent to-dark-primary dark:to-light-primary z-10"></div> */}
        </div>
        <div className="flex flex-col xl:flex-row gap-[10px] xl:gap-[25px]">
          {/* Title & Description */}
          <div className="flex flex-col w-full xl:w-1/2">
            <p className="body-text items-start flex justify-start w-full relative max-w-[40ch] text-dark-background dark:text-light-background pt-[25px]">
              <span aria-hidden="true">
                My obsession is to deliver a digital experience that not only
                serves a great purpose, but give your business an unfair
                advantage. Empowering all-scale startups with custom web
                experiences that are memorable and drive success. With a passion
                for design and development, I take projects from ideation to
                launch, ensuring a seamless journey that leaves a lasting impact
                in the digital landscape.
              </span>
            </p>
          </div>

          {/* Accordion */}
          <div className="flex flex-col w-full xl:w-1/2 pb-[25px]">
            <div className="collapse collapse-plus">
              <input
                type="radio"
                name="my-accordion-3"
                defaultChecked
                className="followerchangetest"
              />
              <div className="collapse-title text-[32px] lg:text-[48px] font-medium text-dark-background dark:text-light-background">
                <ScrambleText text="Web Development" />
              </div>
              <div className="collapse-content body-text items-start flex justify-start w-full relative max-w-[40ch] text-dark-background dark:text-light-background">
                <p>
                  I create unique, custom-coded websites that are tailored to
                  your brand. I focus on scalability, performance,
                  accessibility, and engaging animations for a memorable
                  experience.
                </p>
              </div>
            </div>
            <div className="w-full h-[2px] bg-dark-background dark:bg-light-background"></div>
            <div className="collapse collapse-plus">
              <input
                type="radio"
                name="my-accordion-3"
                className="followerchangetest"
              />
              <div className="collapse-title text-[32px] lg:text-[48px] font-medium text-dark-background dark:text-light-background">
                <ScrambleText text="Web Design" />
              </div>
              <div className="collapse-content body-text items-start flex justify-start w-full relative max-w-[40ch] text-dark-background dark:text-light-background">
                <p>
                  I design user-centric websites that enhance your brand and
                  drive business goals. Clean typography and minimal layouts has
                  my full attention to create a compelling online presence.
                </p>
              </div>
            </div>
            <div className="w-full h-[2px] bg-dark-background dark:bg-light-background"></div>
            <div className="collapse collapse-plus">
              <input
                type="radio"
                name="my-accordion-3"
                className="followerchangetest"
              />
              <div className="collapse-title text-[32px] lg:text-[48px] font-medium text-dark-background dark:text-light-background">
                <ScrambleText text="SEO & Marketing" />
              </div>
              <div className="collapse-content body-text items-start flex justify-start w-full relative max-w-[40ch] text-dark-background dark:text-light-background">
                <p>
                  Beyond crafting visually memorable websites, I also optimize
                  your online presence to elevate your visibility in search
                  rankings so your voices can be heard in the digital landscape.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Tech Stack */}
        <div className="flex flex-col w-full">
          <div className="flex justify-center">
            <h3 className="relative font-khand section-subheading text-dark-background dark:text-light-background">
              <span aria-hidden="true">
                <span class=" inline-block">
                  <span class="pb-1 sm:pb-2 relative overflow-hidden inline-flex">
                    <span className="header-text">Tech Stack.</span>
                  </span>
                </span>
              </span>
            </h3>
          </div>

          <div className="end-to-end flex flex-row overflow-hidden gap-[50px] h-full relative">
            {/* <div class="absolute h-[100%] top-0 left-0 w-52 bg-gradient-to-l from-transparent to-dark-primary dark:to-light-primary z-10"></div> */}

            <Marquee>
              {/* Programming languages */}
              <div className="flex flex-col gap-[10px] w-full h-full whitespace-nowrap">
                <p className="text-[16px] font-semibold text-dark-background dark:text-light-background w-full">
                  Programming Languages.
                </p>
                <ul className="flex flex-row text-light-primary dark:text-dark-primary w-full gap-[10px]">
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px] hover:dark:text-light-primary hover:dark:bg-dark-primary hover:text-dark-primary hover:bg-light-primary">
                    Python
                  </li>
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px] hover:dark:text-light-primary hover:dark:bg-dark-primary hover:text-dark-primary hover:bg-light-primary">
                    Java
                  </li>
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px] hover:dark:text-light-primary hover:dark:bg-dark-primary hover:text-dark-primary hover:bg-light-primary">
                    JavaScript
                  </li>
                </ul>
              </div>
              {/* Frontend technologies */}
              <div className="flex flex-col gap-[10px] w-full h-full whitespace-nowrap">
                <p className="text-[16px] font-semibold text-dark-background dark:text-light-background w-full">
                  Frontend Technologies.
                </p>
                <ul className="flex flex-row text-light-primary dark:text-dark-primary w-full gap-[10px]">
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px] hover:dark:text-light-primary hover:dark:bg-dark-primary hover:text-dark-primary hover:bg-light-primary">
                    ReactJS
                  </li>
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px] hover:dark:text-light-primary hover:dark:bg-dark-primary hover:text-dark-primary hover:bg-light-primary">
                    TailwindCSS
                  </li>
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px] hover:dark:text-light-primary hover:dark:bg-dark-primary hover:text-dark-primary hover:bg-light-primary">
                    GSAP
                  </li>
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px] hover:dark:text-light-primary hover:dark:bg-dark-primary hover:text-dark-primary hover:bg-light-primary">
                    Figma
                  </li>
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px] hover:dark:text-light-primary hover:dark:bg-dark-primary hover:text-dark-primary hover:bg-light-primary">
                    CSS
                  </li>
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px] hover:dark:text-light-primary hover:dark:bg-dark-primary hover:text-dark-primary hover:bg-light-primary">
                    HTML
                  </li>
                </ul>
              </div>
              {/* Backend technologies */}
              <div className="flex flex-col gap-[10px] w-full h-full whitespace-nowrap">
                <p className="text-[16px] font-semibold text-dark-background dark:text-light-background w-full">
                  Backend Technologies.
                </p>
                <ul className="flex flex-row text-light-primary dark:text-dark-primary w-full gap-[10px]">
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px] hover:dark:text-light-primary hover:dark:bg-dark-primary hover:text-dark-primary hover:bg-light-primary">
                    NodeJS
                  </li>
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px] hover:dark:text-light-primary hover:dark:bg-dark-primary hover:text-dark-primary hover:bg-light-primary">
                    Docker
                  </li>
                </ul>
              </div>
              {/* DBMS */}
              <div className="flex flex-col gap-[10px] w-full h-full whitespace-nowrap">
                <p className="text-[16px] font-semibold text-dark-background dark:text-light-background w-full">
                  DBMS.
                </p>
                <ul className="flex flex-row text-light-primary dark:text-dark-primary w-full gap-[10px]">
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px] hover:dark:text-light-primary hover:dark:bg-dark-primary hover:text-dark-primary hover:bg-light-primary">
                    MySQL
                  </li>
                </ul>
              </div>
              {/* DevOps and Cloud */}
              <div className="flex flex-col gap-[10px] w-full h-full whitespace-nowrap">
                <p className="text-[16px] font-semibold text-dark-background dark:text-light-background w-full">
                  DevOps and Cloud.
                </p>
                <ul className="flex flex-row text-light-primary dark:text-dark-primary w-full gap-[10px]">
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px] hover:dark:text-light-primary hover:dark:bg-dark-primary hover:text-dark-primary hover:bg-light-primary">
                    AWS
                  </li>
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px] hover:dark:text-light-primary hover:dark:bg-dark-primary hover:text-dark-primary hover:bg-light-primary">
                    Docker
                  </li>
                </ul>
              </div>
              {/* Version Control */}
              <div className="flex flex-col gap-[10px] w-full h-full whitespace-nowrap">
                <p className="text-[16px] font-semibold text-dark-background dark:text-light-background w-full">
                  Version Control.
                </p>
                <ul className="flex flex-row text-light-primary dark:text-dark-primary w-full gap-[10px]">
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px] hover:dark:text-light-primary hover:dark:bg-dark-primary hover:text-dark-primary hover:bg-light-primary">
                    Git
                  </li>
                </ul>
              </div>
              {/* Other */}
              <div className="flex flex-col gap-[10px] w-full h-full whitespace-nowrap">
                <p className="text-[16px] font-semibold text-dark-background dark:text-light-background w-full">
                  Other.
                </p>
                <ul className="flex flex-row text-light-primary dark:text-dark-primary w-full gap-[10px]">
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px] hover:dark:text-light-primary hover:dark:bg-dark-primary hover:text-dark-primary hover:bg-light-primary">
                    Agile Scrum/Waterfall methodology
                  </li>
                </ul>
              </div>
            </Marquee>
            {/* <div class="absolute h-[100%] top-0 right-0 w-52 bg-gradient-to-r from-transparent to-dark-primary dark:to-light-primary z-10"></div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
