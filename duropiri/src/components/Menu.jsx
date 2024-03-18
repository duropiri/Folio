// Menu.jsx
"use client";
import React, { useState } from "react";
import MenuDropdown from "./MenuDropdown";

const Menu = () => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  return (
    <div className="relative flex w-full">
      <div
        className="flex h-[100px] justify-end items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <svg
          width="48"
          height="38"
          viewBox="0 0 48 38"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-light-accent dark:text-dark-accent cursor-pointer"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M46.6667 5.66665H1.33333C0.59696 5.66665 0 5.06969 0 4.33331V1.66665C0 0.930273 0.59696 0.333313 1.33333 0.333313H46.6667C47.4029 0.333313 48 0.930273 48 1.66665V4.33331C48 5.06969 47.4029 5.66665 46.6667 5.66665ZM40
             20.3333V17.6666C40 16.9304 39.4029 16.3333 38.6667 16.3333H9.33333C8.59696 16.3333 8 16.9304 8 17.6666V20.3333C8 21.0696 8.59696 21.6666 9.33333 21.6666H38.6667C39.4029 21.6666 40 21.0696 40 20.3333ZM32 33.6666V36.3333C32 37.0696 31.4029 37.6666 30.6667 37.6666H17.3333C16.597 37.6666 16 37.0696 16 36.3333V33.6666C16 32.9304 16.597 32.3333 17.3333 32.3333H30.6667C31.4029 32.3333 32 32.9304 32 33.6666Z"
            fill="currentColor"
          />
        </svg>
      </div>
      {isDropdownVisible && (
        <div className="w-full">
          <div
            className="fixed lg:inset-0 bg-black bg-opacity-50 z-10"
            onClick={toggleDropdown}
          ></div>
          <MenuDropdown onClose={toggleDropdown}/>
        </div>
      )}
    </div>
  );
};

export default Menu;
