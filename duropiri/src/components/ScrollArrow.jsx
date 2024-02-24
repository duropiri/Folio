"use client";
import React from "react";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";

const ScrollArrow = () => {
    useEffect(() => {
        gsap.to(".bounce", {
            y: -10, // Move up by 10 pixels
            repeat: -1, // Infinite loop
            yoyo: true, // Go back and forth
            ease: "power1.inOut", // Smoothing the animation
            duration: 0.8 // Duration of one bounce
        });
        
    });
  return (
    <div className="bounce flex justify-center items-center w-full h-[64px] z-10">
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
  );
};

export default ScrollArrow;
