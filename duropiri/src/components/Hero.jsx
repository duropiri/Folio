"use client";
import React, { useEffect, useState } from "react";
import { ScrollTriggeredAnimation } from "./ScrollTriggeredAnimation";
import { useTheme } from "@/components/ThemeContext";

const Hero = () => {
  const { navbarHeight } = useTheme();

  return (
    <section className="flex items-end sm:items-center section-padding sticky top-0 custom-height z-0">
      {/* SVG */}
      <div className="flex fixed w-full justify-end xl:pr-[12%] mt-[5vh] mr-[-25px] md:mr-0 pointer-events-none">
        <div className="overflow-hidden">
          <svg
            viewBox="0 0 1114 1055"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className=" w-11/12 h-[1055px] text-light-primary/25 dark:text-dark-primary/25"
          >
            <defs>
              <linearGradient
                id="fadeGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="80%"
              >
                <stop offset="0%" stop-color="currentColor" stop-opacity="1" />
                <stop
                  offset="0%"
                  stop-color="currentColor"
                  stop-opacity="0.7"
                />
                <stop
                  offset="20%"
                  stop-color="currentColor"
                  stop-opacity="0.5"
                />
                <stop
                  offset="40%"
                  stop-color="currentColor"
                  stop-opacity="0.3"
                />
                <stop offset="80%" stop-color="currentColor" stop-opacity="0" />
              </linearGradient>
            </defs>
            <ellipse
              cx="557"
              cy="527.5"
              rx="557"
              ry="527.5"
              fill="url(#fadeGradient)"
            />
          </svg>
        </div>
      </div>

      {/* Content */}
      <ScrollTriggeredAnimation
        className="w-full h-full z-10"
        fade={0}
        offset={`top-=${(navbarHeight)}`}
      >
        <div className="flex flex-col h-full justify-center gap-y-3 sm:gap-y-8 items-start sm:items-start">
          {/* Title */}
          <ul className="font-khand hero-text whitespace-nowrap duration-500">
            <li className="text-light-primary dark:text-dark-primary">
              <span className="font-outline text-transparent">Duro</span> Piri.
            </li>
            <li className="text-light-primary dark:text-dark-primary">
              Duro <span className="font-outline text-transparent">Piri.</span>
            </li>
          </ul>
          {/* Description */}
          <p className="font-medium text-[16px] lg:text-[32px] text-light-primary dark:text-dark-primary leading-snug">
            A Full Stack Developer & Marketing Specialist helping business
            <br />
            owners leverage proven, results-driven systems.
          </p>
        </div>
      </ScrollTriggeredAnimation>
    </section>
  );
};

export default Hero;
