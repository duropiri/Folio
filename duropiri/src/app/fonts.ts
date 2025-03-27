// app/fonts.ts
import localFont from "next/font/local";

export const khand = localFont({
  src: [
    {
      path: "../../public/fonts/Khand/WEB/fonts/Khand-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/Khand/WEB/fonts/Khand-Bold.ttf",
      weight: "700",
      style: "normal",
    },
  ],
  variable: "--font-khand",
  display: "swap",
});

export const generalSans = localFont({
  src: [
    {
      path: "../../public/fonts/GeneralSans/WEB/fonts/GeneralSans-Regular.ttf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/GeneralSans/WEB/fonts/GeneralSans-Bold.ttf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../../public/fonts/GeneralSans/WEB/fonts/GeneralSans-Italic.ttf",
      weight: "400",
      style: "italic",
    },
  ],
  variable: "--font-general-sans",
  display: "swap",
});
