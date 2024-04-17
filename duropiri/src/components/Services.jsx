import React from "react";
import { TechStack } from "./TechStack";
import ScrambleText from "./ScrambleText";
import Marquee from "./Marquee";

const WhatIDo = () => {
  return (
    <div className="relative w-full h-full">
      {/* Content */}
      <div className="flex flex-col justify-start gap-[50px] xl:gap-[100px] z-10">
        <div className="flex flex-col xl:flex-row gap-[10px] xl:gap-[25px]">
          {/* Title & Description */}
          <div className="flex flex-col w-full xl:w-1/2">
            <h2 className="relative font-khand section-heading text-light-background dark:text-dark-background">
              <span aria-hidden="true">
                <span class=" inline-block">
                  <span class="pb-1 sm:pb-2 relative  overflow-hidden inline-flex">
                    <span className="header-text">What I Do.</span>
                  </span>
                </span>
              </span>
            </h2>

            <p className="body-text items-start flex justify-start w-full relative max-w-[40ch] text-light-background dark:text-dark-background">
              <span aria-hidden="true">
                My obsession is to deliver a digital experience that not only
                serves a great purpose, but give your business an unfair
                advantage.
              </span>
            </p>
          </div>

          {/* Accordion */}
          <div className="flex flex-col w-full xl:w-1/2 py-[25px]">
            <div className="collapse collapse-plus">
              <input
                type="radio"
                name="my-accordion-3"
                defaultChecked
                className="followerchangetest"
              />
              <div className="collapse-title text-[32px] lg:text-[48px] font-medium text-light-background dark:text-dark-background">
                <ScrambleText text="Web Development" />
              </div>
              <div className="collapse-content body-text items-start flex justify-start w-full relative max-w-[40ch] text-light-background dark:text-dark-background">
                <p>
                  I create unique, custom-coded websites that are tailored to
                  your brand. I focus on scalability, performance,
                  accessibility, and engaging animations for a memorable
                  experience.
                </p>
              </div>
            </div>
            <div className="w-full h-[2px] bg-light-background dark:bg-dark-background"></div>
            <div className="collapse collapse-plus">
              <input
                type="radio"
                name="my-accordion-3"
                className="followerchangetest"
              />
              <div className="collapse-title text-[32px] lg:text-[48px] font-medium text-light-background dark:text-dark-background">
                <ScrambleText text="Web Design" />
              </div>
              <div className="collapse-content body-text items-start flex justify-start w-full relative max-w-[40ch] text-light-background dark:text-dark-background">
                <p>
                  I design user-centric websites that enhance your brand and
                  drive business goals. Clean typography and minimal layouts has
                  my full attention to create a compelling online presence.
                </p>
              </div>
            </div>
            <div className="w-full h-[2px] bg-light-background dark:bg-dark-background"></div>
            <div className="collapse collapse-plus">
              <input
                type="radio"
                name="my-accordion-3"
                className="followerchangetest"
              />
              <div className="collapse-title text-[32px] lg:text-[48px] font-medium text-light-background dark:text-dark-background">
                <ScrambleText text="SEO & Marketing" />
              </div>
              <div className="collapse-content body-text items-start flex justify-start w-full relative max-w-[40ch] text-light-background dark:text-dark-background">
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
            <h3 className="relative font-khand section-subheading text-light-background dark:text-dark-background">
              <span aria-hidden="true">
                <span class=" inline-block">
                  <span class="pb-1 sm:pb-2 relative overflow-hidden inline-flex">
                    <span className="header-text">Tech Stack.</span>
                  </span>
                </span>
              </span>
            </h3>
          </div>

          <div className="flex flex-row overflow-hidden gap-[50px] h-full relative">
            <div class="absolute h-[100%] top-0 left-0 w-52 bg-gradient-to-l from-transparent to-light-primary dark:to-dark-primary z-10"></div>

            <Marquee>
              {/* Programming languages */}
              <div className="flex flex-col gap-[10px] w-full h-full whitespace-nowrap">
                <p className="text-[16px] font-semibold text-light-background dark:text-dark-background w-full">
                  Programming Languages.
                </p>
                <ul className="flex flex-row text-dark-primary dark:text-light-primary w-full gap-[10px]">
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
                    Python
                  </li>
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
                    Java
                  </li>
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
                    JavaScript
                  </li>
                </ul>
              </div>
              {/* Frontend technologies */}
              <div className="flex flex-col gap-[10px] w-full h-full whitespace-nowrap">
                <p className="text-[16px] font-semibold text-light-background dark:text-dark-background w-full">
                  Frontend Technologies.
                </p>
                <ul className="flex flex-row text-dark-primary dark:text-light-primary w-full gap-[10px]">
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
                    ReactJS
                  </li>
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
                    TailwindCSS
                  </li>
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
                    GSAP
                  </li>
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
                    Figma
                  </li>
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
                    CSS
                  </li>
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
                    HTML
                  </li>
                </ul>
              </div>
              {/* Backend technologies */}
              <div className="flex flex-col gap-[10px] w-full h-full whitespace-nowrap">
                <p className="text-[16px] font-semibold text-light-background dark:text-dark-background w-full">
                  Backend Technologies.
                </p>
                <ul className="flex flex-row text-dark-primary dark:text-light-primary w-full gap-[10px]">
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
                    NodeJS
                  </li>
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
                    Docker
                  </li>
                </ul>
              </div>
              {/* DBMS */}
              <div className="flex flex-col gap-[10px] w-full h-full whitespace-nowrap">
                <p className="text-[16px] font-semibold text-light-background dark:text-dark-background w-full">
                  DBMS.
                </p>
                <ul className="flex flex-row text-dark-primary dark:text-light-primary w-full gap-[10px]">
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
                    MySQL
                  </li>
                </ul>
              </div>
              {/* DevOps and Cloud */}
              <div className="flex flex-col gap-[10px] w-full h-full whitespace-nowrap">
                <p className="text-[16px] font-semibold text-light-background dark:text-dark-background w-full">
                  DevOps and Cloud.
                </p>
                <ul className="flex flex-row text-dark-primary dark:text-light-primary w-full gap-[10px]">
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
                    AWS
                  </li>
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
                    Docker
                  </li>
                </ul>
              </div>
              {/* Version Control */}
              <div className="flex flex-col gap-[10px] w-full h-full whitespace-nowrap">
                <p className="text-[16px] font-semibold text-light-background dark:text-dark-background w-full">
                  Version Control.
                </p>
                <ul className="flex flex-row text-dark-primary dark:text-light-primary w-full gap-[10px]">
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
                    Git
                  </li>
                </ul>
              </div>
              {/* Other */}
              <div className="flex flex-col gap-[10px] w-full h-full whitespace-nowrap">
                <p className="text-[16px] font-semibold text-light-background dark:text-dark-background w-full">
                  Other.
                </p>
                <ul className="flex flex-row text-dark-primary dark:text-light-primary w-full gap-[10px]">
                  <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
                    Agile Scrum/Waterfall methodology
                  </li>
                </ul>
              </div>
            </Marquee>
            <div class="absolute h-[100%] top-0 right-0 w-52 bg-gradient-to-r from-transparent to-light-primary dark:to-dark-primary z-10"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
