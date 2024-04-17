"use client";
import {
  motion,
  useAnimationFrame,
  useMotionValue,
  useScroll,
  useSpring,
  useTransform,
  useVelocity,
  wrap,
} from "framer-motion";

import { useRef } from "react";

export default function ScrollingBanner({ children, baseVelocity = 300 }) {
  const baseX = useMotionValue(0);
  const { scrollY } = useScroll();
  const scrollVelocity = useVelocity(scrollY);
  const smoothVelocity = useSpring(scrollVelocity, {
    damping: 50,
    stiffness: 400,
  });
  const velocityFactor = useTransform(smoothVelocity, [0, 1000], [0, 2], {
    clamp: false,
  });

  const x = useTransform(baseX, (v) => `${wrap(-20, -45, v)}%`);

  const directionFactor = useRef(1);
  useAnimationFrame((t, delta) => {
    let moveBy =
      directionFactor.current * (baseVelocity / 1000) * (delta / 1000);

    if (velocityFactor.get() < 0) {
      directionFactor.current = -1;
    } else if (velocityFactor.get() > 0) {
      directionFactor.current = 1;
    }

    moveBy += directionFactor.current * moveBy * velocityFactor.get();

    baseX.set(baseX.get() + moveBy);
  });

  return (
    <div className="relative m-0 flex h-24 flex-nowrap items-center overflow-hidden whitespace-nowrap bg-dark-background dark:bg-light-background lg:h-36">
      <motion.div
        style={{
          x,
        }}
        className="font-khand font-bold flex flex-row flex-nowrap items-center whitespace-nowrap text-[100px] uppercase text-dark-text dark:text-light-text lg:text-[150px]"
      >
        {Array.from({ length: 180 }).map((_, index) => (
          <span className="mx-4" key={index}>
            {children}
          </span>
        ))}
      </motion.div>
    </div>
  );
}
