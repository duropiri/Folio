import React from "react";
import { Parallax } from "@/components/Parallax";

const AboutMe = () => {
  return (
    <div className="relative w-full h-full">
      {/* Title */}
      <div className="flex justify-start z-10">
        <span className="uppercase font-khand text-[64px] lg:text-[112px] font-semibold text-light-background dark:text-dark-background">
          About Me.
        </span>
      </div>

      <div>
        {/* Decoration */}
        {/* <div className="overflow-hidden ml-[11%] absolute bottom-[150px] z-0">
          
          <svg
            width="305"
            height="150"
            viewBox="0 0 305 150"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="text-light-secondary dark:text-dark-secondary"
          >
            <path
              d="M87.4999 150L0.897453 -4.006e-06L174.103 -2.87618e-07L87.4999 150Z"
              fill="currentColor"
            />
            <path
              d="M217.5 150L130.898 -4.006e-06L304.103 -2.87618e-07L217.5 150Z"
              fill="currentColor"
            />
          </svg>
        </div> */}

        {/* Parallax */}
        <Parallax>
          <div className=" z-0 max-w-sm 2xl:max-w-lg 3xl:max-w-xl relative mt-[-lvh*0.1] mx-auto pointer-events-none">
            <div className=" absolute w-[200%] h-full mt-[1%] ml-[-1%] bg-gradient-to-t from-light-primary dark:from-dark-primary via-transparent dark:via-transparent via-30%"/>
            <div
              data-speed="2"
              className="w-[533px] h-[650px] bg-light-background dark:bg-dark-background"
            ></div>
          </div>
        </Parallax>
      </div>
      {/* Bio */}
      <p className="indent-4 sm:indent-12 text-[16px] lg:text-[32px] font-medium items-end flex justify-end relative -mt-8 sm:-mt-12 leading-snug text-light-background dark:text-dark-background">
        <span className="max-w-[43ch]">
          Empowering all-scale startups with custom web experiences that are
          memorable and drive success. With a passion for design and
          development, I take projects from ideation to launch, ensuring a
          seamless journey that leaves a lasting impact in the digital
          landscape.
        </span>
      </p>
    </div>
  );
};

export default AboutMe;
