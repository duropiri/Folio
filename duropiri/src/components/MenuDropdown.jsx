// MenuDropdown.jsx
"use client";
import React, { useEffect, useRef, useState } from "react";
import InfoPane from "./InfoPane";
import ThemeToggle from "./Dock";
import { useTheme } from "./ThemeContext";
import { gsap } from "gsap";

const MenuDropdown = ({ onClose, isOpen }) => {
  const { theme, toggleTheme } = useTheme();

  const dropdownRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      // Opening animation: Expand out from the right
      gsap.fromTo(
        dropdownRef.current,
        { x: "100%", opacity: 0 }, // Start from the right and fully transparent
        { x: "0%", opacity: 1, duration: 1, ease: "power2.out" } // Move to its original position and fade in
      );
    } else {
      // Closing animation: Fade out
      gsap.to(
        dropdownRef.current,
        {
          opacity: 0,
          duration: 0.5,
          ease: "power2.in",
          onComplete: () => gsap.set(dropdownRef.current, { x: "100%" }),
        } // Optionally move it to the right after fading out
      );
    }
  }, [isOpen]);

  return (
    <div
      ref={dropdownRef}
      className="dropdown-nav dropdown-content shadow-lg lg:rounded-[25px] sm:mr-[0px] lg:mr-[25px] bg-light-background dark:bg-dark-background overflow-hidden"
      style={{ opacity: 0, transform: "translateX(100%)" }} // Initial state off-screen to the right
    >
      {/* SVG */}
      <div className="flex fixed justify-end pointer-events-none">
        <div className="overflow-hidden">
          <svg
            viewBox="0 0 1114 1055"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-11/12 h-[1055px] text-light-primary/25 dark:text-dark-primary/25"
          >
            <defs>
              <linearGradient
                id="fadeGradient"
                x1="0%"
                y1="0%"
                x2="0%"
                y2="80%"
              >
                <stop offset="0%" stop-color="currentColor" stop-opacity="1" />
                <stop
                  offset="0%"
                  stop-color="currentColor"
                  stop-opacity="0.7"
                />
                <stop
                  offset="20%"
                  stop-color="currentColor"
                  stop-opacity="0.5"
                />
                <stop
                  offset="40%"
                  stop-color="currentColor"
                  stop-opacity="0.3"
                />
                <stop offset="80%" stop-color="currentColor" stop-opacity="0" />
              </linearGradient>
            </defs>
            <ellipse
              cx="557"
              cy="527.5"
              rx="557"
              ry="527.5"
              fill="url(#fadeGradient)"
            />
          </svg>
        </div>
      </div>
      <div className="nav-container justify-end gap-6">
        {/* Info Panel */}
        <div className="hidden sm:inline-block w-full">
          <InfoPane all={true} dropdown={true} />
        </div>
        {/* Menu Close */}
        <div className="flex h-[100px] justify-end items-center w-12"></div>
      </div>
      {/* Navigation */}
      <div className="flex w-full h-[410px] justify-end items-center">
        <ul className="flex flex-col items-end navigation-text">
          <li
            className="font-semibold text-light-primary dark:text-dark-primary flex h-[78px]"
            onClick={() => {
              document
                .getElementById("home")
                .scrollIntoView({ behavior: "smooth" });
              onClose(); // Make sure onClose is called as a function
            }}
          >
            Home
          </li>
          <li
            className="font-semibold text-light-primary dark:text-dark-primary flex h-[78px]"
            onClick={() => {
              document
                .getElementById("services")
                .scrollIntoView({ behavior: "smooth" });
              onClose(); // Make sure onClose is called as a function
            }}
          >
            Services
          </li>
          <li
            className="font-semibold text-light-primary dark:text-dark-primary flex h-[78px]"
            onClick={() => {
              document
                .getElementById("works")
                .scrollIntoView({ behavior: "smooth" });
              onClose(); // Make sure onClose is called as a function
            }}
          >
            Works
          </li>
          <li
            className="font-semibold text-light-primary dark:text-dark-primary flex h-[78px]"
            onClick={() => {
              document
                .getElementById("aboutMe")
                .scrollIntoView({ behavior: "smooth" });
              onClose(); // Make sure onClose is called as a function
            }}
          >
            About
          </li>
          <li
            className="font-semibold text-light-primary dark:text-dark-primary flex h-[78px]"
            onClick={() => {
              window.scrollTo({
                left: 0,
                top: document.documentElement.scrollHeight,
                behavior: "smooth",
              });
              onClose(); // Make sure onClose is called as a function
            }}
          >
            Contact
          </li>
        </ul>
      </div>

      {/* Social Media SVGs */}
      <div className="flex flex-row w-full h-[32px] justify-between mt-6">
        <label className="swap swap-rotate">
          {/* this hidden checkbox controls the state */}
          <input type="checkbox" onClick={toggleTheme} />

          {/* sun icon */}
          <svg
            className="swap-on fill-current w-8 h-8 text-[var(--accent)]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
          </svg>

          {/* moon icon */}
          <svg
            className="swap-off fill-current w-8 h-8 text-[var(--accent)]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
          >
            <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
          </svg>
        </label>
        <ul className="flex flex-row justify-end sm:justify-start h-full items-start gap-2 sm:gap-6">
          <li>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-light-accent dark:text-dark-accent"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M2.66667 0C1.1939 0 0 1.1939 0 2.66667V29.3333C0 30.806 1.1939 32 2.66667 32H29.3333C30.806 32 32 30.806 32 29.3333V2.66667C32 1.1939 30.806 0 29.3333 0H2.66667ZM9.81468 7.11595C9.82469 8.81595 8.5522 9.86345 7.04219 9.85595C5.61968 9.84844 4.37968 8.71595 4.38718 7.11845C4.39468 5.61595 5.58219 4.40844 7.12469 4.44345C8.68969 4.47845 9.82469 5.62596 9.81468 7.11595ZM16.4972 12.0209H12.0173H12.0148V27.2384H16.7497V26.8834C16.7497 26.208 16.7492 25.5324 16.7486 24.8567C16.7472 23.0544 16.7456 21.2501 16.7548 19.4484C16.7573 19.0108 16.7772 18.5559 16.8898 18.1383C17.3122 16.5783 18.7148 15.5708 20.2798 15.8185C21.2848 15.9758 21.9497 16.5584 22.2297 17.506C22.4023 18.0983 22.4798 18.7358 22.4873 19.3534C22.5076 21.2158 22.5047 23.0782 22.5019 24.9408C22.5008 25.5982 22.4997 26.256 22.4997 26.9134V27.2359H27.2498V26.8709C27.2498 26.0674 27.2494 25.264 27.2489 24.4606C27.248 22.4526 27.2469 20.4446 27.2523 18.4359C27.2548 17.5284 27.1573 16.6334 26.9348 15.7559C26.6023 14.4508 25.9148 13.3708 24.7973 12.5909C24.0048 12.0359 23.1348 11.6784 22.1623 11.6384C22.0516 11.6338 21.9399 11.6278 21.8277 11.6217C21.3305 11.5948 20.8251 11.5675 20.3497 11.6634C18.9897 11.9359 17.7948 12.5584 16.8923 13.6558C16.7874 13.7817 16.6848 13.9095 16.5317 14.1003L16.4972 14.1435V12.0209ZM4.76736 27.2434H9.47986V12.0308H4.76736V27.2434Z"
                fill="currentColor"
              />
            </svg>
          </li>
          <li>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-light-accent dark:text-dark-accent"
            >
              <path
                d="M32 16.0978C32 7.20722 24.8366 0 16 0C7.16344 0 0 7.20722 0 16.0978C0 24.1325 5.85094 30.7923 13.5 32V20.751H9.4375V16.0978H13.5V12.5512C13.5 8.51674 15.8888 6.28819 19.5434 6.28819C21.2941 6.28819 23.125 6.60261 23.125 6.60261V10.5642H21.1075C19.12 10.5642 18.5 11.8052 18.5 13.0782V16.0978H22.9374L22.2282 20.751H18.5V32C26.1491 30.7923 32 24.1328 32 16.0978Z"
                fill="currentColor"
              />
            </svg>
          </li>
          <li>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-light-accent dark:text-dark-accent"
            >
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M23.1111 0H8.88889C3.9797 0 0 3.9797 0 8.88889V23.1111C0 28.0203 3.9797 32 8.88889 32H23.1111C28.0203 32 32 28.0203 32 23.1111V8.88889C32 3.9797 28.0203 0 23.1111 0ZM28.8889 23.1111C28.8791 26.298 26.298 28.8791 23.1111 28.8889H8.88889C5.70196 28.8791 3.12087 26.298 3.11111 23.1111V8.88889C3.12087 5.70196 5.70196 3.12087 8.88889 3.11111H23.1111C26.298 3.12087 28.8791 5.70196 28.8889 8.88889V23.1111ZM24.4444 9.33333C25.4263 9.33333 26.2222 8.53739 26.2222 7.55556C26.2222 6.57372 25.4263 5.77778 24.4444 5.77778C23.4626 5.77778 22.6667 6.57372 22.6667 7.55556C22.6667 8.53739 23.4626 9.33333 24.4444 9.33333ZM16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24C20.4183 24 24 20.4183 24 16C24.0048 13.8768 23.1634 11.8392 21.662 10.3379C20.1607 8.8366 18.1232 7.99527 16 8ZM11.1111 16C11.1111 18.7001 13.2999 20.8889 16 20.8889C18.7001 20.8889 20.8889 18.7001 20.8889 16C20.8889 13.2999 18.7001 11.1111 16 11.1111C13.2999 11.1111 11.1111 13.2999 11.1111 16Z"
                fill="currentColor"
              />
            </svg>
          </li>
          <li>
            <svg
              width="36"
              height="32"
              viewBox="0 0 36 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="w-8 h-8 text-light-accent dark:text-dark-accent"
            >
              <path
                d="M28.3522 0H33.8724L21.8122 13.5548L36 32H24.8912L16.1902 20.8132L6.23446 32H0.71088L13.6103 17.5016L0 0H11.3909L19.2558 10.2252L28.3522 0ZM26.4146 28.7508H29.4736L9.72882 3.07856H6.4464L26.4146 28.7508Z"
                fill="currentColor"
              />
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MenuDropdown;
