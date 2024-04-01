/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        dark: {
          text: "#eef0f1",
          background: "#06080a",
          primary: "#aac0d3",
          secondary: "#315574",
          accent: "#5793c8",
        },
        light: {
          text: "#0e1011",
          background: "#f5f7f9",
          primary: "#2b4154",
          secondary: "#8cb0cf",
          accent: "#3774a9",
        },
      },
      textStrokeWidth: {
        1: "1px",
        2: "2px",
        3: "3px",
        4: "4px",
        5: "5px",
        6: "6px",
      },
      textStrokeColor: (theme) => ({
        primary: theme("colors.light-primary"),
      }),
    },
  },
  plugins: [
    require("daisyui"),
    // Plugin for text stroke width
    function ({ addUtilities, theme, e }) {
      const newUtilities = {};
      Object.entries(theme("textStrokeWidth")).forEach(([key, value]) => {
        newUtilities[`.text-stroke-${e(key)}`] = {
          "-webkit-text-stroke-width": value,
        };
      });
      addUtilities(newUtilities, ["responsive", "hover"]);
    },
    // Plugin for text stroke color, adjusted for light and dark modes
    function ({ addUtilities, theme, e }) {
      const newUtilities = {};

      // Light theme colors
      Object.entries(theme("colors.light")).forEach(([key, value]) => {
        newUtilities[`.text-stroke-light-${e(key)}`] = {
          "-webkit-text-stroke-color": value,
        };
      });

      // Dark theme colors
      Object.entries(theme("colors.dark")).forEach(([key, value]) => {
        newUtilities[`.text-stroke-dark-${e(key)}`] = {
          "-webkit-text-stroke-color": value,
        };
      });

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
