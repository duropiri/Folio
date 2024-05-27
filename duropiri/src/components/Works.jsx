import React from "react";
import ScrambleText from "./ScrambleText";
import ScrollingBanner from "./ScrollingBanner";

const Works = () => {
  return (
    <div className="relative w-full h-full">
      <div className="flex flex-col justify-start z-10 gap-[10px]">
        <div className="end-to-end w-screen">
          {/* <div class="end-to-end absolute h-[100%] top-0 left-0 w-52 bg-gradient-to-l from-transparent to-dark-primary dark:to-light-primary z-10"></div> */}
          <ScrollingBanner
            baseVelocity={-100}
            banner="h-24 lg:h-36"
            child="font-khand font-bold text-[100px] uppercase text-light-text dark:text-dark-text lg:text-[150px]"
          >
            Works.{" "}
          </ScrollingBanner>
          {/* <div class="end-to-end absolute h-[100%] top-0 right-0 w-52 bg-gradient-to-r from-transparent to-dark-primary dark:to-light-primary z-10"></div> */}
        </div>

        <div className="flex flex-col">
          {/* <div className="w-full h-[2px] bg-light-background dark:bg-light-background"></div> */}
          <div className="rounded-none w-full p-4">
            <figure
              className="flex relative group h-44 w-full overflow-hidden followerchangetest gap-4"
              data-follower-text="View"
              data-scale={3}
            >
              <div className="flex left-0 w-1/4 h-full duration-300 transition-all transform -translate-x-full md:group-hover:translate-x-0 rounded-md hover:rounded-2xl ease-in-out overflow-hidden pr-2">
                <img
                  className="object-cover transition-all transform group-hover:scale-110 ease-in-out"
                  src="https://placehold.co/3840x2160.png?text=Hello+World"
                />
              </div>
              <div className="flex flex-col w-full h-full justify-center transition-transform duration-300 transform -translate-x-1/4 md:group-hover:translate-x-0">
                <div className="text-[32px] lg:text-[56px] font-medium text-dark-background dark:text-light-background">
                  <ScrambleText text="WORK-0" />
                </div>
                <div className="flex gap-1">
                  <div className="badge badge-outline text-[12px] font-medium text-light-text dark:text-dark-text p-3 uppercase">
                    Design
                  </div>
                  <div className="badge badge-outline text-[12px] font-medium text-light-text dark:text-dark-text p-3 uppercase">
                    Development
                  </div>
                  <div className="badge badge-secondary text-[12px] font-medium text-light-text dark:text-dark-text p-3 uppercase bg-light-accent dark:bg-dark-accent border-light-accent dark:border-dark-accent">
                    2024
                  </div>
                </div>
              </div>
            </figure>
          </div>
          <div className="w-full h-[2px] bg-dark-background dark:bg-light-background"></div>
          <div className="rounded-none w-full p-4">
            <figure
              className="flex relative group h-44 w-full overflow-hidden followerchangetest gap-4"
              data-follower-text="View"
              data-scale={3}
            >
              <div className="flex left-0 w-1/4 h-full duration-300 transition-all transform -translate-x-full md:group-hover:translate-x-0 rounded-md hover:rounded-2xl ease-in-out overflow-hidden pr-2">
                <img
                  className="object-cover transition-all transform group-hover:scale-110 ease-in-out"
                  src="https://placehold.co/3840x2160.png?text=Hello+World"
                />
              </div>
              <div className="flex flex-col w-full h-full justify-center transition-transform duration-300 transform -translate-x-1/4 md:group-hover:translate-x-0">
                <div className="text-[32px] lg:text-[56px] font-medium text-dark-background dark:text-light-background">
                  <ScrambleText text="WORK-1" />
                </div>
                <div className="flex gap-1">
                  <div className="badge badge-outline text-[12px] font-medium text-light-text dark:text-dark-text p-3 uppercase">
                    Design
                  </div>
                  <div className="badge badge-outline text-[12px] font-medium text-light-text dark:text-dark-text p-3 uppercase">
                    Development
                  </div>
                  <div className="badge badge-secondary text-[12px] font-medium text-light-text dark:text-dark-text p-3 uppercase bg-light-accent dark:bg-dark-accent border-light-accent dark:border-dark-accent">
                    2024
                  </div>
                </div>
              </div>
            </figure>
          </div>
          <div className="w-full h-[2px] bg-dark-background dark:bg-light-background"></div>
          <div className="rounded-none w-full p-4">
            <figure
              className="flex relative group h-44 w-full overflow-hidden followerchangetest gap-4"
              data-follower-text="View"
              data-scale={3}
            >
              <div className="flex left-0 w-1/4 h-full duration-300 transition-all transform -translate-x-full md:group-hover:translate-x-0 rounded-md hover:rounded-2xl ease-in-out overflow-hidden pr-2">
                <img
                  className="object-cover transition-all transform group-hover:scale-110 ease-in-out"
                  src="https://placehold.co/3840x2160.png?text=Hello+World"
                />
              </div>
              <div className="flex flex-col w-full h-full justify-center transition-transform duration-300 transform -translate-x-1/4 md:group-hover:translate-x-0">
                <div className="text-[32px] lg:text-[56px] font-medium text-dark-background dark:text-light-background">
                  <ScrambleText text="WORK-2" />
                </div>
                <div className="flex gap-1">
                  <div className="badge badge-outline text-[12px] font-medium text-light-text dark:text-dark-text p-3 uppercase">
                    Design
                  </div>
                  <div className="badge badge-outline text-[12px] font-medium text-light-text dark:text-dark-text p-3 uppercase">
                    Development
                  </div>
                  <div className="badge badge-secondary text-[12px] font-medium text-light-text dark:text-dark-text p-3 uppercase bg-light-accent dark:bg-dark-accent border-light-accent dark:border-dark-accent">
                    2024
                  </div>
                </div>
              </div>
            </figure>
          </div>
          <div className="w-full h-[2px] bg-light-background dark:bg-light-background"></div>
          <div className="p-6">
            <button className="btn btn-link no-underline transition-all transform hover:underline-offset-4 duration-300 text-[18px] lg:text-[24px] font-medium text-dark-background dark:text-light-background">
              <ScrambleText text="View More" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works;
