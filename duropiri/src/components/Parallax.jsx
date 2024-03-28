"use client";
import { gsap } from "gsap";
import { useEffect, useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export function Parallax({ className, children, speed = 1, id = "parallax", endOpacity = 1 }) {
  const trigger = useRef();
  const target = useRef();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    // Initialize the target's opacity to 1 for full visibility
    gsap.set(target.current, { opacity: 1 });

    const windowHeight = window.innerHeight;
    const y = windowHeight * speed * 0.1;

    ScrollTrigger.create({
      id: id,
      trigger: trigger.current,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
      onUpdate: (self) => {
        // Calculate the target's Y position based on scroll progress
        const yPos = self.progress * y;
        gsap.set(target.current, { y: yPos });

        // Dynamically adjust the opacity based on scroll progress
        // Ensure the element becomes transparent (`endOpacity`) as it scrolls out
        const currentOpacity = 1 - self.progress * (1 - endOpacity);
        gsap.set(target.current, { opacity: currentOpacity });
      }
    });

    return () => ScrollTrigger.getById(target.current)?.kill();
  }, [speed, id, endOpacity]); // Dependencies remain the same

  return (
    <div ref={trigger} className={className}>
      <div ref={target} className={className}>{children}</div>
    </div>
  );
}
