import React from "react";
import { ScrollTriggeredAnimation } from "./ScrollTriggeredAnimation";

const AboutMe = () => {
  return (
    <div>
      <div className="relative">
        {/* Title */}
        <h2 className="relative font-khand section-heading text-light-background dark:text-dark-background mb-[-10%]">
          <span aria-hidden="true">
            <span class=" inline-block">
              <span class="pb-1 sm:pb-2 relative overflow-hidden inline-flex z-50">
                <span className="header-text">About Me.</span>
              </span>
            </span>
          </span>
        </h2>

        <ScrollTriggeredAnimation
          offset={"profileimage"}
          className="profileimage flex justify-center z-0 max-w-sm 2xl:max-w-lg 3xl:max-w-xl relative mx-auto pointer-events-none -mt-24"
        >
          <div className="mt-[5vh] w-[500px] h-[600px] rounded-3xl overflow-hidden relative group">
            <img
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 pointer-events-none"
              src="https://placehold.co/500x600.png?text=Headshot"
              alt="Headshot"
            />
            <div className="absolute -inset-1 bg-gradient-to-t from-light-primary dark:from-dark-primary via-transparent dark:via-transparent via-100% opacity-100 pointer-events-none"></div>
          </div>
        </ScrollTriggeredAnimation>
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
