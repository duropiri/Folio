"use client";
import React from "react";
import AboutMe from "./AboutMe";
import WhatIDo from "./Services";
import Works from "./Works";

const Body = () => {
  return (
    <div className="relative overflow-x-clip overflow-y-clip w-full min-h-screen z-20 rounded-t-3xl rounded-b-3xl bg-dark-primary/90 dark:bg-light-primary/90 backdrop-blur-sm">
      {/* What I Do Section */}
      <section
        id="services"
        className=" section-padding"
      >
        <WhatIDo />
      </section>
      {/* Selected Works */}
      <section
        id="works"
        className="section-padding "
      >
        <Works />
      </section>
      {/* About Me Section */}
      {/* <section
        id="aboutMe"
        className="section-padding"
      >
        <AboutMe />
      </section> */}
    </div>
  );
};

export default Body;
