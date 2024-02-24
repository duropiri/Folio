"use client"
import React from "react";
import ScrollArrow from "./ScrollArrow";
import AboutMe from "./AboutMe";
import WhatIDo from "./WhatIDo";
import Works from "./Works";

const Body = () => {
  return (
    <div className="flex flex-col w-full justify-center items-center bg-light-primary dark:bg-dark-primary z-10 py-[50px] px-[25px] lg:px-[50px] xl:px-[150px] gap-[50px] rounded-[20px] mt-[-128px]">
      {/* Arrow to About Me */}
      <div
        onClick={() =>
          document
            .getElementById("aboutMe")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        <ScrollArrow />
      </div>
      {/* About Me Section */}
      <div
        id="aboutMe"
        className="flex flex-col w-full min-h-lvh justify-between pb-[50px]"
      >
        <AboutMe />
        {/* Arrow to What I Do */}
        <div
          onClick={() =>
            document
              .getElementById("services")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <ScrollArrow />
        </div>
      </div>
      {/* What I Do Section */}
      <div
        id="services"
        className="flex flex-col w-full min-h-lvh justify-between pb-[50px]"
      >
        <WhatIDo />
        {/* Arrow to Works */}
        <div
          onClick={() =>
            document
              .getElementById("works")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <ScrollArrow />
        </div>
      </div>
      {/* Selected Works */}
      <div
        id="works"
        className="flex flex-col w-full min-h-lvh justify-between pb-[50px]"
      >
        <Works />
      </div>
    </div>
  );
};

export default Body;
