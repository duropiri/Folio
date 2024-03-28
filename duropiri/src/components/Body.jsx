"use client";
import React from "react";
import ScrollArrow from "./ScrollArrow";
import AboutMe from "./AboutMe";
import WhatIDo from "./Services";
import Works from "./Works";
import { Parallax } from "./Parallax";

const Body = () => {
  return (
    <div className="relative overflow-x-clip w-full min-h-screen z-20">
      {/* Arrow to About Me */}
      {/* <div
        className="cursor-pointer hidden"
        onClick={() =>
          document
            .getElementById("aboutMe")
            .scrollIntoView({ behavior: "smooth" })
        }
      >
        <ScrollArrow />
      </div> */}
      {/* What I Do Section */}
      <section
        id="services"
        className="bg-light-primary dark:bg-dark-primary section-padding rounded-t-3xl"
      >
        <WhatIDo />
      </section>
      {/* Selected Works */}
      <section
        id="works"
        className="bg-light-primary dark:bg-dark-primary section-padding "
      >
        <Works />
      </section>
      {/* About Me Section */}
      <section
        id="aboutMe"
        className="bg-light-primary dark:bg-dark-primary section-padding rounded-b-3xl"
      >
        <AboutMe />
      </section>
    </div>
  );
};

export default Body;
