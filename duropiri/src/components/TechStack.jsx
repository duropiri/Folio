import React from "react";

export const TechStack = () => {
  return (
    <div
      id="tech-stack-slider"
      className="whitespace-nowrap infinity-carousel flex flex-row gap-[50px] select-none"
    >
      {/* Programming languages */}
      <div className="flex flex-col gap-[10px]">
        <p className="text-[16px] font-semibold text-light-background dark:text-dark-background w-full">
          Programming Languages.
        </p>
        <ul className="flex flex-row text-dark-primary dark:text-light-primary w-full gap-[10px]">
          <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
            Python
          </li>
          <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
            Java
          </li>
          <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
            JavaScript
          </li>
        </ul>
      </div>
      {/* Frontend technologies */}
      <div className="flex flex-col gap-[10px]">
        <p className="text-[16px] font-semibold text-light-background dark:text-dark-background w-full">
          Frontend Technologies.
        </p>
        <ul className="flex flex-row text-dark-primary dark:text-light-primary w-full gap-[10px]">
          <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
            ReactJS
          </li>
          <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
            TailwindCSS
          </li>
          <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
            GSAP
          </li>
          <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
            Figma
          </li>
          <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
            CSS
          </li>
          <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
            HTML
          </li>
        </ul>
      </div>
      {/* Backend technologies */}
      <div className="flex flex-col gap-[10px]">
        <p className="text-[16px] font-semibold text-light-background dark:text-dark-background w-full">
          Backend Technologies.
        </p>
        <ul className="flex flex-row text-dark-primary dark:text-light-primary w-full gap-[10px]">
          <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
            NodeJS
          </li>
          <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
            Docker
          </li>
        </ul>
      </div>
      {/* DBMS */}
      <div className="flex flex-col gap-[10px]">
        <p className="text-[16px] font-semibold text-light-background dark:text-dark-background w-full">
          DBMS.
        </p>
        <ul className="flex flex-row text-dark-primary dark:text-light-primary w-full gap-[10px]">
          <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
            MySQL
          </li>
        </ul>
      </div>
      {/* DevOps and Cloud */}
      <div className="flex flex-col gap-[10px]">
        <p className="text-[16px] font-semibold text-light-background dark:text-dark-background w-full">
          DevOps and Cloud.
        </p>
        <ul className="flex flex-row text-dark-primary dark:text-light-primary w-full gap-[10px]">
          <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
            AWS
          </li>
          <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
            Docker
          </li>
        </ul>
      </div>
      {/* Version Control */}
      <div className="flex flex-col gap-[10px]">
        <p className="text-[16px] font-semibold text-light-background dark:text-dark-background w-full">
          Version Control.
        </p>
        <ul className="flex flex-row text-dark-primary dark:text-light-primary w-full gap-[10px]">
          <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
            Git
          </li>
        </ul>
      </div>
      {/* Other */}
      <div className="flex flex-col gap-[10px]">
        <p className="text-[16px] font-semibold text-light-background dark:text-dark-background w-full">
          Other.
        </p>
        <ul className="flex flex-row text-dark-primary dark:text-light-primary w-full gap-[10px]">
          <li className="badge badge-outline h-full text-[18px] font-medium  py-[10px] px-[25px]">
            Agile Scrum/Waterfall methodology
          </li>
        </ul>
      </div>
    </div>
  );
};
