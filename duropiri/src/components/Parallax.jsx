"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Parallax({ className, children, speed = 1, id = "parallax" }) {
  const trigger = useRef();
  const target = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const updateParallax = () => {
      const windowHeight = window.innerHeight;
      const y = windowHeight * speed * 0.1;
      const setY = gsap.quickSetter(target.current, "y", "px");

      const recalculateStart = () => {
        const elementTop = trigger.current.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;
        const initialVisibilityOffset = elementTop - viewportHeight;
        return initialVisibilityOffset < 0 ? `top+=${Math.abs(initialVisibilityOffset)} bottom` : "top bottom";
      };

      ScrollTrigger.create({
        id: id,
        trigger: trigger.current,
        start: recalculateStart(),
        end: "bottom top",
        scrub: true,
        markers: false, // Useful for debugging
        onUpdate: (self) => {
          const yPos = self.progress * y;
          setY(yPos);
        },
        onRefresh: (self) => self.update({ // Listen for resize events and update start position
          start: recalculateStart(),
          end: "bottom top",
        }),
      });
    };

    updateParallax(); // Initial setup

    ScrollTrigger.addEventListener("refreshInit", updateParallax); // Reinitialize on resize

    return () => {
      ScrollTrigger.getById(id)?.kill();
      ScrollTrigger.removeEventListener("refreshInit", updateParallax); // Cleanup
    };
  }, [speed, id]);

  return (
    <div ref={trigger} className={className}>
      <div ref={target} className={className}>{children}</div>
    </div>
  );
}
