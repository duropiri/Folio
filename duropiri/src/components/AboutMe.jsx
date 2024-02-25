import React from "react";
import { Parallax } from "@/components/Parallax";

const AboutMe = () => {
  return (
    <>
      <div className="relative">
        {/* Title */}

        <h2 className="relative font-khand section-heading text-light-background dark:text-dark-background mb-[-10%]">
          <span aria-hidden="true">
            <span class=" inline-block">
              <span class="pb-1 sm:pb-2 relative  overflow-hidden inline-flex">
                <span className="header-text">About Me.</span>
              </span>
            </span>
          </span>
        </h2>

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
        <Parallax
          speed={3}
          className="flex justify-center z-0 max-w-sm 2xl:max-w-lg 3xl:max-w-xl relative mx-auto pointer-events-none "
        >
          <div className=" absolute w-[200%] h-full mt-[10%] bg-gradient-to-t from-light-primary dark:from-dark-primary via-transparent dark:via-transparent via-60%" />
          <div className="w-[500px] h-[650px] bg-light-background dark:bg-dark-background"></div>
        </Parallax>
      </div>
      {/* Bio */}
      <p className="body-text items-end flex justify-end w-full relative -mt-8 sm:-mt-12 text-light-background dark:text-dark-background">
        <span aria-hidden="true" className="max-w-[43ch]">
          Empowering all-scale startups with custom web experiences that are
          memorable and drive success. With a passion for design and
          development, I take projects from ideation to launch, ensuring a
          seamless journey that leaves a lasting impact in the digital
          landscape.
        </span>
      </p>
    </>
  );
};

export default AboutMe;
