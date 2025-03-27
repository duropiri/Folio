"layout.js";
import "./globals.css";
import SmoothScrolling from "@/components/ui/SmoothScrolling";
import { ThemeProvider } from "@/components/ui/ThemeContext";
import ThemeToggle from "@/components/ui/Dock";
import CustomCursor from "@/components/ui/CustomCursor";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { khand, generalSans } from "./fonts";


export const metadata = {
  title:
    "Duro Pirisola | Full-Stack Developer, UI/UX Designer & Content Producer",
  description:
    "Discover the innovative world of Duro Pirisola, a seasoned Full-Stack Developer, UI/UX Designer, and Content Producer with a passion for creating seamless digital experiences. Explore a portfolio that blends functionality with aesthetics, and learn how Durotimi's expertise can elevate your next project.",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <ThemeProvider>
      <html lang="en">
        <body className={`${khand.variable} ${generalSans.variable} dark`}>
          <SpeedInsights />
          <>
            <div className="hidden xl:block z-[999]">
              <CustomCursor />
            </div>
            <div className="texture-overlay"></div>
            <div className="flex flex-col">
              <SmoothScrolling>{children}</SmoothScrolling>
            </div>
            <div className="fixed inset-x-0 bottom-1 z-50 xl:block hidden shadow-lg">
              <ThemeToggle />
            </div>
          </>
        </body>
      </html>
    </ThemeProvider>
  );
}
