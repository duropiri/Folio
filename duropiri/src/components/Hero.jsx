import React from "react";
import { Parallax } from "@/components/Parallax";

const Hero = () => {
  return (
    <div className="w-full h-auto py-[150px] flex relative">
      <Parallax
        speed={3}
        className="flex self-start absolute w-full justify-end pr-0 xl:pr-[12%] "
      >
        <svg
          width="1114"
          height="1055"
          viewBox="0 0 1114 1055"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="mt-[-31%] text-light-background dark:text-dark-background"
        >
          <g filter="url(#filter0_i_20_21256)">
            <ellipse
              cx="557"
              cy="527.5"
              rx="557"
              ry="527.5"
              fill="currentColor"
            />
          </g>
          <defs>
            <filter
              id="filter0_i_20_21256"
              x="0"
              y="0"
              width="1114"
              height="1305"
              filterUnits="userSpaceOnUse"
              color-interpolation-filters="sRGB"
            >
              <feFlood flood-opacity="0" result="BackgroundImageFix" />
              <feBlend
                mode="normal"
                in="SourceGraphic"
                in2="BackgroundImageFix"
                result="shape"
              />
              <feColorMatrix
                in="SourceAlpha"
                type="matrix"
                values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                result="hardAlpha"
              />
              <feOffset dy="500" />
              <feGaussianBlur stdDeviation="125" />
              <feComposite
                in2="hardAlpha"
                operator="arithmetic"
                k2="-1"
                k3="1"
              />
              <feColorMatrix
                type="matrix"
                values="0 0 0 0 0.784314 0 0 0 0 0.745098 0 0 0 0 0.690196 0 0 0 0.17 0"
              />
              <feBlend
                mode="normal"
                in2="shape"
                result="effect1_innerShadow_20_21256"
              />
            </filter>
          </defs>
        </svg>
      </Parallax>
      <div className="flex-row z-10">
        <ul className="font-khand font-bold text-[180px] uppercase leading-[150px] mb-[25px]">
          <li className="text-light-primary dark:text-dark-primary">
            <span className="font-outline text-transparent">Duro</span> Piri.
          </li>
          <li className="text-light-primary dark:text-dark-primary">
            Duro <span className="font-outline text-transparent">Piri.</span>
          </li>
        </ul>
        <p className="font-medium text-[32px] text-light-primary dark:text-dark-primary leading-snug">
          A Full Stack Developer & Marketing Specialist helping business
          <br />
          owners leverage proven, results-driven systems.
        </p>
      </div>
    </div>
  );
};

export default Hero;
