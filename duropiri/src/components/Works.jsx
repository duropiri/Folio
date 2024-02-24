import React from "react";

const Works = () => {
  return (
    <div className="relative w-full h-full">
      <div className="flex flex-col justify-start z-10 gap-[10px] xl:gap-[50px]">
        <span className="uppercase font-khand text-[64px] lg:text-[112px] font-semibold text-light-background dark:text-dark-background">
          Selected Works.
        </span>

        <div className="flex flex-col xl:flex-row gap-[10px]">
          <div className="w-full xl:w-1/3 h-[250px] xl:h-[500px] bg-light-background dark:bg-dark-background"></div>
          <div className="w-full xl:w-1/3 h-[250px] xl:h-[500px] bg-light-secondary dark:bg-dark-secondary"></div>
          <div className="w-full xl:w-1/3 h-[250px] xl:h-[500px] bg-light-accent dark:bg-dark-accent"></div>
        </div>

        <div className="flex flex-col xl:flex-row gap-[10px] xl:gap-[30px] w-full">
          <div className="flex flex-col gap-[10px] xl:gap-[30px] w-full xl:w-1/2">
            <div className="w-fill h-[200px] bg-light-accent dark:bg-dark-accent"></div>
            <div className="w-fill h-[200px] bg-light-accent dark:bg-dark-accent"></div>
          </div>
          <p className="text-[16px] lg:text-[32px] font-medium flex relative leading-snug text-light-background dark:text-dark-background w-full xl:w-1/2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Works;
