"use client";
import React from "react";
import ScrambleText from "@/components/ui/ScrambleText";
import ScrollingBanner from "@/components/ui/ScrollingBanner";

interface WorkItem {
  id: string;
  title: string;
  image: string;
  destination: string;
  tags: {
    label: string;
    isAccent?: boolean;
  }[];
}

const workItems: WorkItem[] = [
  {
    id: "bagi-creatives",
    title: "BAGI Creatives",
    image: "/bagicreatives_case_study.png",
    destination: "https://bagicreatives.com",
    tags: [
      { label: "Design" },
      { label: "Development" },
      { label: "2024", isAccent: true },
    ],
  },
  {
    id: "axcel",
    title: "ShotsByAxcel",
    image: "/shotsbyaxcel_case_study.png",
    destination: "https://axcel-xi.vercel.app/",
    tags: [
      { label: "Design" },
      { label: "Development" },
      { label: "2024", isAccent: true },
    ],
  },
  {
    id: "virtual-xposure",
    title: "Virtual Xposure",
    image: "/virtualxposure_case_study.png",
    destination: "https://virtualxposure.com",
    tags: [
      { label: "Design" },
      { label: "Development" },
      { label: "2024", isAccent: true },
    ],
  },
];

const Works: React.FC = () => {
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
          {workItems.map((work, index) => (
            <React.Fragment key={work.id}>
              <div className="rounded-none w-full p-4">
                <a
                  href={work.destination}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <figure
                    className="flex relative group h-44 w-full overflow-hidden pointerchangehover gap-4"
                    data-follower-text="View"
                    data-scale={3}
                  >
                    <div className="flex items-center justify-center left-0 aspect-[16/9] duration-300 transition-all transform -translate-x-full md:group-hover:translate-x-0 rounded-md hover:rounded-2xl ease-in-out overflow-hidden">
                      <img
                        className="object-cover size-full transition-all transform hover:scale-110 ease-in-out"
                        src={work.image}
                        alt={work.title}
                      />
                    </div>
                    <div className="flex flex-col w-full h-full justify-center transition-transform duration-300 transform -translate-x-[16.33%] md:group-hover:translate-x-0 pl-4">
                      <div className="text-[32px] lg:text-[56px] font-medium text-dark-background dark:text-light-background w-fit">
                        <ScrambleText text={work.title} />
                      </div>
                      <div className="flex gap-1 w-fit">
                        {work.tags.map((tag, tagIndex) => (
                          <div
                            key={`${work.id}-tag-${tagIndex}`}
                            className={`badge ${
                              tag.isAccent
                                ? "badge-secondary bg-light-accent dark:bg-dark-accent border-light-accent dark:border-dark-accent"
                                : "badge-outline"
                            } text-[12px] font-medium text-light-text dark:text-dark-text p-3 uppercase`}
                          >
                            {tag.label}
                          </div>
                        ))}
                      </div>
                    </div>
                  </figure>
                </a>
              </div>
              {index < workItems.length - 1 && (
                <div className="w-full h-[2px] bg-dark-background dark:bg-light-background"></div>
              )}
            </React.Fragment>
          ))}
          <div className="w-full h-[2px] bg-light-background dark:bg-light-background"></div>
          <div className="p-6">
            <button 
              onClick={() => window.open('https://github.com/duropiri', '_blank')}
              className="pointerchangehover btn btn-link no-underline transition-all transform hover:underline-offset-4 duration-300 text-[18px] lg:text-[24px] font-medium text-dark-background dark:text-light-background"
            >
              <ScrambleText text="View More" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Works; 