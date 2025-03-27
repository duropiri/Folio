"use client";
import React, { createContext, useContext, useState, useEffect } from "react";

const ThemeContext = createContext();

export function useTheme() {
  return useContext(ThemeContext);
}

export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("dark"); // Default theme
  const [navbarHeight, setNavbarHeight] = useState(0); // Initialize navbar height state

  // Effect to apply the theme to the body class
  useEffect(() => {
    document.body.className = theme;
  }, [theme]);

  // Effect to calculate and update navbar height
  useEffect(() => {
    const updateNavbarHeight = () => {
      const navbar = document.querySelector(".nav-container"); // Ensure this selector matches your navbar's class
      if (navbar) {
        setNavbarHeight(navbar.offsetHeight + 50);
      }
    };

    // Calculate navbar height on mount
    updateNavbarHeight();

    // Re-calculate navbar height on window resize
    window.addEventListener("resize", updateNavbarHeight);

    // Cleanup event listener
    return () => window.removeEventListener("resize", updateNavbarHeight);
  }, []); // Empty dependency array ensures this runs only once on mount

  const toggleTheme = () => {
    setTheme((currTheme) => (currTheme === "dark" ? "light" : "dark"));
  };

  // Provide both theme and navbarHeight in context value
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, navbarHeight }}>
      {children}
    </ThemeContext.Provider>
  );
};
