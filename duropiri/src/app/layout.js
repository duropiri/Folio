"layout.js";
import "./globals.css";
import SmoothScrolling from "@/components/SmoothScrolling";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title:
    "Durotimi Duro-Pirisola | Full-Stack Developer, UI/UX Designer & Content Producer",
  description:
    "Discover the innovative world of Durotimi Duro-Pirisola, a seasoned Full-Stack Developer, UI/UX Designer, and Content Producer with a passion for creating seamless digital experiences. Explore a portfolio that blends functionality with aesthetics, and learn how Durotimi's expertise can elevate your next project.",
  icons: {
    icon: "/icon.ico",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="dark">
        <div className="flex flex-col">
          <SmoothScrolling>
            <div className=" z-50">
              <Navbar />
            </div>
            <div>{children}</div>
          </SmoothScrolling>
        </div>
      </body>
    </html>
  );
}