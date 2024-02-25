"use client";
import React from "react";
import ScrollArrow from "./ScrollArrow";
import AboutMe from "./AboutMe";
import WhatIDo from "./Services";
import Works from "./Works";
import { Parallax } from "./Parallax";

const Body = () => {
  return (
    <div className="relative rounded-[20px] overflow-x-clip w-full min-h-screen z-20">
      {/* Arrow to About Me */}
      <div
        className="cursor-pointer hidden"
        onClick={() =>
          document
            .getElementById("aboutMe")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        <ScrollArrow />
      </div>
      {/* About Me Section */}
      <section
        id="aboutMe"
        className="bg-light-primary dark:bg-dark-primary section-padding"
      >
        <AboutMe />
        {/* Arrow to What I Do */}
        {/* <div
          onClick={() =>
            document
              .getElementById("services")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <ScrollArrow />
        </div> */}
      </section>
      {/* What I Do Section */}
      <section
        id="services"
        className="bg-light-primary dark:bg-dark-primary section-padding"
      >
        <WhatIDo />
        {/* Arrow to Works */}
        {/* <div
          onClick={() =>
            document
              .getElementById("works")
              .scrollIntoView({ behavior: "smooth" })
          }
        >
          <ScrollArrow />
        </div> */}
      </section>
      {/* Selected Works */}
      <section
        id="works"
        className="bg-light-primary dark:bg-dark-primary section-padding"
      >
        <Works />
      </section>
    </div>
  );
};

export default Body;
