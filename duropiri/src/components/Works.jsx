import React from "react";
import ScrambleText from "./ScrambleText";

const Works = () => {
  return (
    <div className="relative w-full h-full">
      <div className="flex flex-col justify-start z-10 gap-[10px]">
        <h2 className="relative font-khand section-heading text-light-background dark:text-dark-background">
          <span aria-hidden="true">
            <span class=" inline-block">
              <span class="pb-1 sm:pb-2 relative  overflow-hidden inline-flex">
                <span className="header-text">Selected Works.</span>
              </span>
            </span>
          </span>
        </h2>

        <div className="flex flex-col">
          <div className="w-full h-[2px] bg-light-background dark:bg-dark-background"></div>
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
                <div className="text-[32px] lg:text-[56px] font-medium text-light-background dark:text-dark-background">
                  <ScrambleText text="WORK-0" />
                </div>
                <div className="flex gap-1">
                  <div className="badge badge-outline text-[12px] font-medium text-dark-text dark:text-light-text p-3 uppercase">
                    Design
                  </div>
                  <div className="badge badge-outline text-[12px] font-medium text-dark-text dark:text-light-text p-3 uppercase">
                    Development
                  </div>
                  <div className="badge badge-secondary text-[12px] font-medium text-dark-text dark:text-light-text p-3 uppercase bg-light-accent dark:bg-dark-accent border-light-accent dark:border-dark-accent">
                    2024
                  </div>
                </div>
              </div>
            </figure>
          </div>
          <div className="w-full h-[2px] bg-light-background dark:bg-dark-background"></div>
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
                <div className="text-[32px] lg:text-[56px] font-medium text-light-background dark:text-dark-background">
                  <ScrambleText text="WORK-1" />
                </div>
                <div className="flex gap-1">
                  <div className="badge badge-outline text-[12px] font-medium text-dark-text dark:text-light-text p-3 uppercase">
                    Design
                  </div>
                  <div className="badge badge-outline text-[12px] font-medium text-dark-text dark:text-light-text p-3 uppercase">
                    Development
                  </div>
                  <div className="badge badge-secondary text-[12px] font-medium text-dark-text dark:text-light-text p-3 uppercase bg-light-accent dark:bg-dark-accent border-light-accent dark:border-dark-accent">
                    2024
                  </div>
                </div>
              </div>
            </figure>
          </div>
          <div className="w-full h-[2px] bg-light-background dark:bg-dark-background"></div>
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
                <div className="text-[32px] lg:text-[56px] font-medium text-light-background dark:text-dark-background">
                  <ScrambleText text="WORK-2" />
                </div>
                <div className="flex gap-1">
                  <div className="badge badge-outline text-[12px] font-medium text-dark-text dark:text-light-text p-3 uppercase">
                    Design
                  </div>
                  <div className="badge badge-outline text-[12px] font-medium text-dark-text dark:text-light-text p-3 uppercase">
                    Development
                  </div>
                  <div className="badge badge-secondary text-[12px] font-medium text-dark-text dark:text-light-text p-3 uppercase bg-light-accent dark:bg-dark-accent border-light-accent dark:border-dark-accent">
                    2024
                  </div>
                </div>
              </div>
            </figure>
          </div>
          <div className="w-full h-[2px] bg-light-background dark:bg-dark-background"></div>
          <div className="p-6">
            <button className="btn btn-link no-underline transition-all transform hover:underline-offset-4 duration-300 text-[18px] lg:text-[24px] font-medium text-light-background dark:text-dark-background"
            ><ScrambleText text="View More" /></button>
          </div>
        </div>

        {/* <div className="flex flex-col xl:flex-row gap-[10px] xl:gap-[30px] w-full">
          <div className="flex flex-col gap-[10px] xl:gap-[30px] w-full xl:w-1/2">
            <div className="w-full h-[200px]">
              <figure
                className="relative group w-full h-full rounded-md hover:rounded-2xl transition-all duration-300 ease-in-out overflow-hidden followerchangetest"
                data-follower-text="View"
                data-scale={3}
                href="https://github.com/duropiri?tab=repositories"
              >
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://placehold.co/3840x2160.mp4?text=Hello+World"
                />
                <div className=" bottom-0 left-0 w-full h-full transition-transform duration-500 transform translate-y-full group-hover:translate-y-0 bg-gradient-to-b from-transparent to-light-primary dark:to-dark-primary">
                  <div className="card-body flex-col text-dark-background justify-center items-center h-full">
                    <span className="card-title header-text font-semibold text-[24px] xl:text-[24px] uppercase">
                      WORK-3
                    </span>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline text-[12px] font-medium text-light-text p-3 uppercase">
                        Design
                      </div>
                      <div className="badge badge-outline text-[12px] font-medium text-light-text p-3 uppercase">
                        Development
                      </div>
                      <div className="badge badge-secondary text-[12px] font-medium text-dark-text dark:text-light-text p-3 uppercase bg-light-primary dark:bg-dark-primary border-light-primary dark:border-dark-primary">
                        2024
                      </div>
                    </div>
                  </div>
                </div>
              </figure>
            </div>
            <div className="w-full h-[200px]">
              <figure
                className="relative group w-full h-full rounded-md hover:rounded-2xl transition-all duration-300 ease-in-out overflow-hidden followerchangetest"
                data-follower-text="View"
                data-scale={3}
                href="https://github.com/duropiri?tab=repositories"
              >
                <video
                  className="absolute top-0 left-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src="https://placehold.co/3840x2160.mp4?text=Hello+World"
                />
                <div className=" bottom-0 left-0 w-full transition-transform duration-500 transform translate-y-full group-hover:translate-y-0 bg-gradient-to-b from-transparent to-light-primary dark:to-dark-primary  h-full">
                  <div className="card-body flex-col text-dark-background justify-center items-center h-full">
                    <span className="card-title header-text font-semibold text-[24px] xl:text-[24px] uppercase">
                      WORK-4
                    </span>
                    <div className="card-actions justify-end">
                      <div className="badge badge-outline text-[12px] font-medium text-light-text p-3 uppercase">
                        Design
                      </div>
                      <div className="badge badge-outline text-[12px] font-medium text-light-text p-3 uppercase">
                        Development
                      </div>
                      <div className="badge badge-secondary text-[12px] font-medium text-dark-text dark:text-light-text p-3 uppercase bg-light-primary dark:bg-dark-primary border-light-primary dark:border-dark-primary">
                        2024
                      </div>
                    </div>
                  </div>
                </div>
              </figure>
            </div>
          </div>

          <p className="body-text items-start flex justify-start w-full relative text-light-background dark:text-dark-background">
            <span aria-hidden="true">
              Dive into a curated showcase of transformative digital projects.
              Each piece represents a unique solution sculpted to enhance brand
              presence and drive engagement. From intuitive interfaces to robust
              back-end architectures, these works embody a fusion of aesthetics
              and functionality—crafted to navigate the complexities of the
              digital landscape and propel businesses towards growth and
              success. Experience the synergy of design and technology, where
              every click leads to a story of collaboration, innovation, and
              results that speak for themselves.
            </span>
          </p>
        </div> */}
      </div>
    </div>
  );
};

export default Works;
