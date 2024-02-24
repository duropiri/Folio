import React from "react";
import { TechStack } from "./TechStack";

const WhatIDo = () => {
  return (
    <div className="relative w-full h-full">
      <div className="flex flex-col justify-start gap-[50px] xl:gap-[100px] z-10">
        <div className="flex flex-col xl:flex-row gap-[10px] xl:gap-[25px]">
          <div className="flex flex-col w-full xl:w-1/2">
            <span className="uppercase font-khand text-[64px] lg:text-[112px] font-semibold text-light-background dark:text-dark-background">
              What I Do.
            </span>

            <p className="text-[16px] lg:text-[32px] font-medium flex relative leading-snug text-light-background dark:text-dark-background w-full">
              My obsession is to deliver a digital experience that not only
              serves a great purpose, but give your business an unfair
              advantage.
            </p>
          </div>

          {/* Accordion */}
          <div className="flex flex-col w-full xl:w-1/2">
            <ul className="flex flex-col gap-[20px]">
              <li className="flex justify-between">
                <span className="text-[32px] lg:text-[56px] font-medium text-light-background dark:text-dark-background">
                  Web Development
                </span>
                <span className="text-[32px] lg:text-[56px] font-medium text-light-background dark:text-dark-background">
                  +
                </span>
              </li>
              <div className="w-full h-[2px] bg-light-background dark:bg-dark-background"></div>
              <li className="flex justify-between">
                <span className="text-[32px] lg:text-[56px] font-medium text-light-background dark:text-dark-background">
                  Web Design
                </span>
                <span className="text-[32px] lg:text-[56px] font-medium text-light-background dark:text-dark-background">
                  +
                </span>
              </li>
              <div className="w-full h-[2px] bg-light-background dark:bg-dark-background"></div>
              <li className="flex justify-between">
                <span className="text-[32px] lg:text-[56px] font-medium text-light-background dark:text-dark-background">
                  SEO & Marketing
                </span>
                <span className="text-[32px] lg:text-[56px] font-medium text-light-background dark:text-dark-background">
                  +
                </span>
              </li>
              <div className="w-full h-[2px] bg-light-background dark:bg-dark-background"></div>
              <li className="flex justify-between">
                <span className="text-[32px] lg:text-[56px] font-medium text-light-background dark:text-dark-background">
                  Audio Engineering
                </span>
                <span className="text-[32px] lg:text-[56px] font-medium text-light-background dark:text-dark-background">
                  +
                </span>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col w-full">
          <span className="flex uppercase font-khand text-[32px] lg:text-[64px] font-semibold text-light-background dark:text-dark-background justify-center">
            Tech Stack.
          </span>

          <div
            id="categories"
            className="categories flex flex-row overflow-hidden gap-[50px] h-full"
          >
            <TechStack />
            <TechStack />
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;
