"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Parallax({ className, children, speed = 1, id = "parallax", endOpacity = 100 }) {
  const trigger = useRef();
  const target = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const windowHeight = window.innerHeight;
    const y = windowHeight * speed * 0.1;
    const setY = gsap.quickSetter(target.current, "y", "px");
    const setOpacity = gsap.quickSetter(target.current, "opacity", "");

    // Calculate start position once
    const elementTop = trigger.current.getBoundingClientRect().top;
    const viewportHeight = window.innerHeight;
    const initialVisibilityOffset = elementTop - viewportHeight;
    const start = `top+=${windowHeight} bottom`;

    ScrollTrigger.create({
      id: id,
      trigger: trigger.current,
      start: start, // Use the calculated start position
      end: "bottom top",
      scrub: true,
      // markers: true, // Useful for debugging
      onUpdate: (self) => {
        const yPos = self.progress * y;
        const currentOpacity = 1 - self.progress * (1 - endOpacity);
        setY(yPos);
        setOpacity(currentOpacity);
      }
      // Removed the onRefresh callback to avoid recalculating start position on resize
    });

    // No longer need to reinitialize on resize
    // ScrollTrigger.addEventListener("refreshInit", updateParallax);

    return () => {
      ScrollTrigger.getById(id)?.kill();
      // ScrollTrigger.removeEventListener("refreshInit", updateParallax); // Cleanup not necessary for refreshInit
    };
  }, [speed, id]); // Dependencies remain the same

  return (
    <div ref={trigger} className={className}>
      <div ref={target} style={{ opacity: 1 }} className={className}>{children}</div>
    </div>
  );
}
