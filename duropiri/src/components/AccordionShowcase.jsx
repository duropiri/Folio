"use client";
import React, { useEffect, useRef, cloneElement, Children } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const AccordionShowcase = ({ children }) => {
  const elementsRef = useRef([]);

  useEffect(() => {
    elementsRef.current.forEach((el) => {
      gsap.fromTo(
        el,
        { autoAlpha: 0, y: 50 },
        {
          autoAlpha: 1,
          y: 0,
          duration: 1,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse',
          },
        }
      );
    });
  }, []);

  return (
    <div className="flex flex-col xl:flex-row gap-[10px]">
      {Children.map(children, (child, index) => (
        <div
          key={index}
          ref={(el) => { if (el) elementsRef.current[index] = el; }}
          className="accordion-item"
        >
          {cloneElement(child)}
        </div>
      ))}
    </div>
  );
};

export default AccordionShowcase;
