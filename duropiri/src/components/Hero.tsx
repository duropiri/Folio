"use client";
import React from "react";
import { ScrollTriggeredAnimation } from "@/components/ui/ScrollTriggeredAnimation";
import { useTheme } from "@/components/ui/ThemeContext";

const Hero: React.FC = () => {
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
                <stop offset="0%" stopColor="currentColor" stopOpacity="1" />
                <stop
                  offset="0%"
                  stopColor="currentColor"
                  stopOpacity="0.7"
                />
                <stop
                  offset="20%"
                  stopColor="currentColor"
                  stopOpacity="0.5"
                />
                <stop
                  offset="40%"
                  stopColor="currentColor"
                  stopOpacity="0.3"
                />
                <stop offset="80%" stopColor="currentColor" stopOpacity="0" />
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
        offset={`top-=${navbarHeight}`}
      >
        <div className="flex flex-col h-full justify-center gap-y-3 sm:gap-y-8 items-start sm:items-start">
          {/* Title */}
          <ul className="font-khand hero-text whitespace-nowrap duration-500">
            <li className="text-light-primary dark:text-dark-primary">
              <span className="text-stroke-1 sm:text-stroke-2 lg:text-stroke-3 xl:text-stroke-4 text-stroke-light-primary dark:text-stroke-dark-primary text-transparent">
                Duro
              </span>{" "}
              Piri.
            </li>
            <li className="text-light-primary dark:text-dark-primary">
              Duro{" "}
              <span className="text-stroke-1 sm:text-stroke-2 lg:text-stroke-3 xl:text-stroke-4 text-stroke-light-primary dark:text-stroke-dark-primary text-transparent">
                Piri.
              </span>
            </li>
          </ul>
          {/* Description */}
          <p className="font-medium body-text text-light-primary dark:text-dark-primary leading-snug lg:w-4/5 max-w-[50ch]">
            A <span className="font-bold underline">Full Stack Developer</span>{" "}&{" "}
            <span className="font-bold underline">Marketing Specialist</span> helping business owners leverage proven,
            results-driven systems.
          </p>
        </div>
      </ScrollTriggeredAnimation>
    </section>
  );
};

export default Hero; 