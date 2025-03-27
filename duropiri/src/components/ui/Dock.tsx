"use client";
import React from "react";
import { useTheme } from "./ThemeContext";
import GsapMagnetic from "./GsapMagnetic";

interface NavItem {
  id: string;
  label: string;
  scrollTo: (element: HTMLElement | null) => void;
}

export const navigationItems: NavItem[] = [
  {
    id: "home",
    label: "Home",
    scrollTo: (element) => element?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    id: "services",
    label: "Services",
    scrollTo: (element) => element?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    id: "works",
    label: "Works",
    scrollTo: (element) => element?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    id: "aboutMe",
    label: "About",
    scrollTo: (element) => element?.scrollIntoView({ behavior: "smooth" }),
  },
  {
    id: "contact",
    label: "Contact",
    scrollTo: () => {
      window.scrollTo({
        left: 0,
        top: document.documentElement.scrollHeight,
        behavior: "smooth",
      });
    },
  },
];

export default function ThemeToggle(): JSX.Element {
  const { toggleTheme } = useTheme();

  return (
    <div className="flex justify-center select-none">
      <div className="rounded-lg xl:opacity-25 hover:opacity-100 transition-opacity">
        <div className="px-2.5 rounded-md bg-dark-background dark:bg-light-background outline-none inline-flex items-center gap-4 m-1">
          <GsapMagnetic>
            <label className="swap swap-rotate followerchangetest">
              <input type="checkbox" onClick={toggleTheme} />

              {/* sun icon */}
              <svg
                className="swap-on fill-current w-6 h-6 text-dark-primary dark:text-light-primary"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
              </svg>

              {/* moon icon */}
              <svg
                className="swap-off fill-current w-6 h-6 text-dark-primary dark:text-light-primary"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
              </svg>
            </label>
          </GsapMagnetic>
          <ul className="flex flex-row text-[18px] gap-4">
            {navigationItems.map((item) => (
              <GsapMagnetic key={item.id}>
                <li className="group/button font-semibold text-dark-primary dark:text-light-primary p-2.5">
                  <a
                    className="followerchangetest"
                    onClick={() => {
                      if (item.id === "contact") {
                        item.scrollTo(null);
                      } else {
                        item.scrollTo(document.getElementById(item.id));
                      }
                    }}
                  >
                    <span className="relative flex overflow-hidden  pointer-events-none">
                      {/* Placeholder for spacing */}
                      <span className="opacity-0">{item.label}</span>

                      {/* Animated content */}
                      <span className="absolute w-full h-full left-1/2 -translate-x-1/2 translate-y-0 group-hover/button:-translate-y-[100%] group-hover/button:opacity-50 transition-all duration-300">
                        {item.label}
                      </span>
                      <span className="absolute w-full h-full left-1/2 -translate-x-1/2 opacity-50 translate-y-[100%] group-hover/button:-translate-y-0 group-hover/button:opacity-100 transition-all duration-300">
                        {item.label}
                      </span>
                    </span>
                  </a>
                </li>
              </GsapMagnetic>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
