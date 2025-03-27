"use client";
import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function ScrollTriggeredAnimation({
  className,
  children,
  fade = 1,
  offset = `top`,
}) {
  const trigger = useRef();
  const target = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);    

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: trigger.current,
        start: `${offset} top`, // When the top of the trigger hits the top of the viewport
        end: "+=500vh", // End after scrolling x distance beyond the start
        scrub: true, // Smooth scrubbing
        markers: false,
      },
    });

    tl.to(target.current, {
      y: "20vh", // Move x distance down; adjust as needed
      autoAlpha: fade, // Adjust the opacity to the value of the 'fade' prop
      ease: "none",
    });

    return () => {
      ScrollTrigger.getAll().forEach((st) => st.kill());
    };
  }, [fade]);

  return (
    <div ref={trigger} className={className}>
      <div ref={target} className={className}>
        {children}
      </div>
    </div>
  );
}
