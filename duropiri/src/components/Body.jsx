import React from "react";
import { Parallax } from "@/components/Parallax";
import { TechStack } from "./TechStack";

const Body = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center bg-light-primary dark:bg-dark-primary z-10 p-[50px] gap-[50px] rounded-[20px]">
      {/* Arrow */}
      <div className="flex justify-center items-center w-full h-[64px] z-10">
        <svg
          width="34"
          height="20"
          viewBox="0 0 34 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-light-background dark:text-dark-background"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M18.0605 19.5412C17.4747 20.127 16.5251 20.127 15.9393 19.5412L0.646366 4.24822C0.0605862 3.66242 0.0605862 2.71282 0.646366 2.12702L1.35349 1.41982C1.93927 0.834019 2.88901 0.834019 3.47481 1.41982L16.9999 14.945L30.5251 1.41982C31.1109 0.834019 32.0605 0.834019 32.6463 1.41982L33.3535 2.12702C33.9393 2.71282 33.9393 3.66242 33.3535 4.24822L18.0605 19.5412Z"
            fill="currentColor"
          />
        </svg>
      </div>
      {/* About Me Section */}
      <div className="relative w-full">
        <div className="flex justify-start z-10">
          <span className="uppercase font-khand text-[112px] font-semibold text-light-background dark:text-dark-background">
            About Me.
          </span>
        </div>

        <div className="flex ml-[22%] absolute">
          <svg
            width="305"
            height="150"
            viewBox="0 0 305 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M87.4999 150L0.897453 -4.006e-06L174.103 -2.87618e-07L87.4999 150Z"
              fill="#6B5B43"
            />
            <path
              d="M217.5 150L130.898 -4.006e-06L304.103 -2.87618e-07L217.5 150Z"
              fill="#6B5B43"
            />
          </svg>
        </div>

        <Parallax
          speed={0.5}
          className="overflow-hidden z-0 max-w-sm 2xl:max-w-lg 3xl:max-w-xl relative  mx-auto pointer-events-none"
        >
          <div className="w-[533px] h-[650px] bg-light-background dark:bg-dark-accent"></div>
        </Parallax>
        <p className="indent-4 text-[32px] font-medium items-end flex justify-end relative -mt-8 sm:-mt-12 leading-snug text-light-background dark:text-dark-background">
          Empowering all-scale startups with custom web experiences that are
          memorable and drive success. With a passion for design and
          development, I take projects from ideation to launch, ensuring a
          seamless journey that leaves a lasting impact in the digital
          landscape.
        </p>
      </div>

      {/* What I Do Section */}
      <div className="relative w-full">
        <div className="flex flex-col justify-start gap-[50px] xl:gap-[100px] z-10">
          <div className="flex flex-col xl:flex-row gap-[10px] xl:gap-[25px]">
            <div className="flex flex-col w-full xl:w-1/2">
              <span className="uppercase font-khand text-[112px] font-semibold text-light-background dark:text-dark-background">
                What I Do.
              </span>

              <p className="text-[32px] font-medium flex relative leading-snug text-light-background dark:text-dark-background w-full">
                My obsession is to deliver a digital experience that not only
                serves a great purpose, but give your business an unfair
                advantage.
              </p>
            </div>

            {/* Accordion */}
            <div className="flex flex-col w-full xl:w-1/2">
              <ul className="flex flex-col gap-[20px]">
                <li className="flex justify-between">
                  <span className="text-[56px] font-medium text-light-background dark:text-dark-background">
                    Web Development
                  </span>
                  <span className="text-[56px] font-medium text-light-background dark:text-dark-background">
                    +
                  </span>
                </li>
                <div className="w-full h-[2px] bg-light-background dark:bg-dark-background"></div>
                <li className="flex justify-between">
                  <span className="text-[56px] font-medium text-light-background dark:text-dark-background">
                    Web Design
                  </span>
                  <span className="text-[56px] font-medium text-light-background dark:text-dark-background">
                    +
                  </span>
                </li>
                <div className="w-full h-[2px] bg-light-background dark:bg-dark-background"></div>
                <li className="flex justify-between">
                  <span className="text-[56px] font-medium text-light-background dark:text-dark-background">
                    SEO & Marketing
                  </span>
                  <span className="text-[56px] font-medium text-light-background dark:text-dark-background">
                    +
                  </span>
                </li>
                <div className="w-full h-[2px] bg-light-background dark:bg-dark-background"></div>
                <li className="flex justify-between">
                  <span className="text-[56px] font-medium text-light-background dark:text-dark-background">
                    Audio Engineering
                  </span>
                  <span className="text-[56px] font-medium text-light-background dark:text-dark-background">
                    +
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-col w-full">
            <span className="flex uppercase font-khand text-[64px] font-semibold text-light-background dark:text-dark-background justify-center">
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

      {/* Selected Works */}
      <div className="relative w-full">
        <div className="flex flex-col justify-start z-10 gap-[10px] xl:gap-[50px]">
          <span className="uppercase font-khand text-[112px] font-semibold text-light-background dark:text-dark-background">
            Selected Works.
          </span>

          <div className="flex flex-col xl:flex-row gap-[10px]">
            <div className="w-full xl:w-1/3 h-[250px] xl:h-[500px] bg-light-background dark:bg-dark-background"></div>
            <div className="w-full xl:w-1/3 h-[250px] xl:h-[500px] bg-light-secondary dark:bg-dark-secondary"></div>
            <div className="w-full xl:w-1/3 h-[250px] xl:h-[500px] bg-light-accent dark:bg-dark-accent"></div>
          </div>

          <div className="flex flex-col xl:flex-row gap-[10px] xl:gap-[30px] w-full">
            <div className="flex flex-col gap-[10px] xl:gap-[30px] w-full xl:w-1/2">
              <div className="w-fill h-[200px] bg-light-accent dark:bg-dark-accent"></div>
              <div className="w-fill h-[200px] bg-light-accent dark:bg-dark-accent"></div>
            </div>
            <p className="text-[32px] font-medium flex relative leading-snug text-light-background dark:text-dark-background w-full xl:w-1/2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
