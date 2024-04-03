"use client";
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

const InfiniteMarquee = ({ content }) => {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const element = marqueeRef.current;
    const childrenWidth = element.scrollWidth;
    const parentWidth = element.offsetWidth;
    const cloneCount = Math.ceil(parentWidth / childrenWidth) + 1;

    for (let i = 0; i < cloneCount; i++) {
      element.appendChild(element.children[i].cloneNode(true));
    }

    gsap.to(element.children, {
      duration: 10,
      x: `-=${childrenWidth}`,
      ease: "linear",
      modifiers: {
        x: gsap.utils.unitize(x => parseFloat(x) % childrenWidth)
      },
      repeat: -1
    });

  }, []);

  return (
    <div ref={marqueeRef} className="infinite-marquee-container">
      {content.map((text, index) => (
        <span key={index} className="marquee-content">
          {text}
        </span>
      ))}
    </div>
  );
};

export default InfiniteMarquee;
