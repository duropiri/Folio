"use client";
import React, { useState, useEffect } from "react";
import gsap from "gsap";

import Hero from "@/components/Hero";
import Body from "@/components/Body";
import Contact from "@/components/Contact";
import Navbar from "@/components/Navbar";

import SplashScreen from "@/components/SplashScreen";
import { usePathname } from "next/navigation";

export default function Home() {
  const pathname = usePathname();
  const isHome = pathname === "/";
  const [isLoading, setIsLoading] = useState(isHome);

  useEffect(() => {
    // This ensures that any initialization or preloading logic can run here
    // For simplicity, this is just immediately set to false after a delay to simulate loading
    if (isLoading) {
      setTimeout(() => setIsLoading(false), 4000); // Simulate loading time
    }
  }, [isLoading]);

  return (
    <div className="relative min-h-screen">
      {/* Splash Screen Overlay */}
      {isLoading && isHome && (
        <SplashScreen finishLoading={() => setIsLoading(false)} />
      )}

      {/* Main Content */}
      {/* You might want to add `opacity-0` class initially and then remove it once isLoading is false */}
      <main className={`flex flex-col`}>
        {/* Hero Section */}
        <div id="home" className="mb-[-100svh] py-0">
          <Navbar />
          <Hero />
        </div>
        <div aria-hidden="true" className="h-svh pointer-events-none"></div>

        {/* Body Section */}
        <Body />

        {/* Contact Section */}
        <div className="mt-[-100svh]">
          <div aria-hidden="true" className="h-svh relative pointer-events-none"></div>
          <section id="contact" className="section-padding sticky bottom-[-40%] no-padding-y">
            <Contact />
          </section>
        </div>
      </main>
    </div>
  );
}
