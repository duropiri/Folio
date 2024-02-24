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
        // Beige colors
        // dark: {
        //   text: "#e9e8e6",
        //   background: "#0a0908",
        //   primary: "#c8beb0",
        //   secondary: "#6b5b43",
        //   accent: "#b0956f",
        // },
        // light: {
        //   text: "#181716",
        //   background: "#f6f5f4",
        //   primary: "#4e4436",
        //   secondary: "#bcac94",
        //   accent: "#917650",
        // },
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
    },
  },
  plugins: [],
};
