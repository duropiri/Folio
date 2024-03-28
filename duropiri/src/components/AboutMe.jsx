import React from "react";
import { Parallax } from "@/components/Parallax";
import { ScrollTriggeredAnimation } from "./ScrollTriggeredAnimation";

const AboutMe = () => {
  return (
    <div>
      <div className="relative">
        {/* Title */}
        <h2 className="relative font-khand section-heading text-light-background dark:text-dark-background mb-[-10%]">
          <span aria-hidden="true">
            <span class=" inline-block">
              <span class="pb-1 sm:pb-2 relative overflow-hidden inline-flex">
                <span className="header-text">About Me.</span>
              </span>
            </span>
          </span>
        </h2>

        {/* Parallax */}
        {/* <Parallax
            speed={2}
            className="flex justify-center z-0 max-w-sm 2xl:max-w-lg 3xl:max-w-xl relative mx-auto pointer-events-none -mt-24"
          > */}
        <ScrollTriggeredAnimation offset={"profileimage"} className="profileimage flex justify-center z-0 max-w-sm 2xl:max-w-lg 3xl:max-w-xl relative mx-auto pointer-events-none -mt-24">
          {/* <div className="absolute w-[200%] h-[100%] mt-[10%] bg-gradient-to-t from-light-primary dark:from-dark-primary via-transparent dark:via-transparent via-60%" /> */}
          <div className="mt-[5vh] w-[500px] h-[600px] bg-gradient-to-t from-transparent dark:from-transparent via-light-background dark:via-dark-background via-100% rounded-3xl pointer-events-none"></div>
        </ScrollTriggeredAnimation>
        {/* </Parallax> */}
      </div>
      {/* Bio */}
      <p className="body-text items-end flex justify-end w-full relative -mt-16 sm:-mt-24 text-light-background dark:text-dark-background">
        <span aria-hidden="true" className="max-w-[43ch]">
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
