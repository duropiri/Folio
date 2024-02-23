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
    <div className="relative flex">
      <div
        className="flex w-[84px] h-[100px] justify-center items-center cursor-pointer"
        onClick={toggleDropdown}
      >
        <svg
          width="48"
          height="32"
          viewBox="0 0 48 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-light-accent dark:text-dark-accent cursor-pointer"
        >
          <path
            d="M0 32H48V26.6667H0V32ZM0 18.6667H48V13.3333H0V18.6667ZM0 0V5.33333H48V0H0Z"
            fill="currentColor"
          />
        </svg>
      </div>
      {isDropdownVisible && (
        <>
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-10"
            onClick={toggleDropdown}
          ></div>
          <MenuDropdown onClose={toggleDropdown}/>
        </>
      )}
    </div>
  );
};

export default Menu;
