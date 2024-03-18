import React from "react";
import { Parallax } from "@/components/Parallax";

const Hero = () => {
  return (
    <section className="flex items-end sm:items-center section-padding sticky top-0 custom-height z-0">
      {/* SVG */}
      <div className="flex fixed w-full justify-end pr-0 xl:pr-[12%] mt-[5vh]  pointer-events-none">
          <div className="overflow-hidden">
            <div className="absolute w-full h-full mt-[1%] bg-gradient-to-t from-light-background dark:from-dark-background"></div>
            <svg
              width="1114"
              height="1055"
              viewBox="0 0 1114 1055"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="text-light-primary/25 dark:text-dark-primary/25"
            >
              <ellipse
                cx="557"
                cy="527.5"
                rx="557"
                ry="527.5"
                fill="currentColor"
              />
            </svg>
          </div>
      </div>

      {/* Content */}
      <Parallax speed={4} endOpacity={0} className="w-full h-full z-10 relative select-none">
        <div className="flex flex-col h-full justify-center gap-y-3 sm:mb-0 sm:gap-y-8 items-start sm:items-start">
          {/* Title */}
          <ul className="font-khand hero-text mb-[25px] whitespace-nowrap duration-500">
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
      </Parallax>
    </section>
  );
};

export default Hero;
