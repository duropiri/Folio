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
          text: "rgb(255, 255, 255)",
          background: "rgb(0, 0, 0)",
          primary: "rgb(255, 255, 255)",
          secondary: "rgb(49, 85, 116)",
          accent: "rgb(87, 147, 200)",
        },
        light: {
          text: "rgb(0, 0, 0)",
          background: "rgb(255, 255, 255)",
          primary: "rgb(0, 0, 0)",
          secondary: "rgb(140, 176, 207)",
          accent: "rgb(55, 116, 169)",
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
      fontFamily: {
  			'khand': [
  				'Khand',
  				'sans-serif'
  			],
  			'general-sans': [
  				'GeneralSans',
  				'sans-serif'
  			]
  		},
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
