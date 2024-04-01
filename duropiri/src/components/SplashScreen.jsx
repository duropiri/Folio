"use client";
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import Logo from "./Logo";

const SplashScreen = ({ finishLoading }) => {
  const circleRef = useRef(null);
  const logoRef = useRef(null);

  useEffect(() => {
    // Animate the pulsating of the logo, then shrinking of the circle and logo
    const timeline = gsap.timeline({
      defaults: { ease: "power2.inOut" },
      onComplete: finishLoading,
    });

    // Pulsate effect for the logo
    timeline
      .to(logoRef.current, {
        scale: 1.1, // Slightly larger scale for the pulsate effect
        duration: 0.4,
        ease: "power1.inOut",
      })
      .to(logoRef.current, {
        scale: 1, // Return to original scale
        duration: 0.4,
        ease: "power1.inOut",
      });

    // After the pulsate, proceed to shrink the logo and circle
    timeline
      .to(logoRef.current, {
        scale: 0,
        duration: 1.2,
        ease: "power2.in",
      })
      .to(circleRef.current, {
        scale: 0,
        duration: 1.2,
        ease: "power2.in",
        delay: -0.5, // Overlap with logo animation for a smooth transition
      }, ">-0.5");

  }, [finishLoading]);

  return (
    <div className="fixed inset-0 overflow-hidden z-[999] flex items-center justify-center bg-transparent">
      {/* The circle, styled to be large and circular immediately */}
      <div ref={circleRef} className="absolute top-1/2 left-1/2 bg-light-background dark:bg-dark-background" style={{
        borderRadius: '50%',
        width: '300vw',
        height: '300vw',
        transform: 'translate(-50%, -50%)',
      }}></div>
      {/* The logo, centered */}
      <div ref={logoRef}>
        <Logo />
      </div>
    </div>
  );
};

export default SplashScreen;
