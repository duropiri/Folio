// Menu.jsx
"use client";
import React, { useState } from "react";
import MenuDropdown from "./MenuDropdown";

const Menu = ({}) => {
  const [isDropdownVisible, setIsDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownVisible(!isDropdownVisible);
  };

  const labelPositionClass = isDropdownVisible
    ? "fixed top-0 right-0 mr-[25px] lg:mr-[50px]"
    : "relative";

  return (
    <div className="relative flex w-full">
      <div
        className={`flex h-[100px] justify-end items-center cursor-pointer z-50 ${labelPositionClass}`}
      >
        <label className="btn btn-circle swap swap-rotate bg-black/0 border-none">
          {/* this hidden checkbox controls the state */}
          <input
            type="checkbox"
            onChange={toggleDropdown}
            checked={isDropdownVisible}
            style={{ display: "none" }}
          />

          {/* hamburger icon */}
          <svg
            className="swap-off fill-current text-light-accent dark:text-dark-accent cursor-pointer w-12 h-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <path d="M64,384H448V341.33H64Zm0-106.67H448V234.67H64ZM64,128v42.67H448V128Z" />
          </svg>

          {/* close icon */}
          <svg
            className="swap-on fill-current text-light-accent dark:text-dark-accent cursor-pointer w-12 h-12"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <polygon points="400 145.49 366.51 112 256 222.51 145.49 112 112 145.49 222.51 256 112 366.51 145.49 400 256 289.49 366.51 400 400 366.51 289.49 256 400 145.49" />
          </svg>
        </label>
      </div>
      {isDropdownVisible && (
        <div className="w-full">
          <div
            className="fixed lg:inset-0 bg-black bg-opacity-75 z-10"
            onClick={toggleDropdown}
          ></div>
          <MenuDropdown onClose={toggleDropdown} isOpen={isDropdownVisible} />
        </div>
      )}
    </div>
  );
};

export default Menu;
