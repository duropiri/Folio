'page.js'
import Image from "next/image";
import { Parallax } from "@/components/Parallax";
import Hero from "@/components/Hero";
import Body from "@/components/Body";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="px-[25px] lg:px-[50px]">
        <Hero />
      </div>
      <Body />
      <div className="px-[25px] lg:px-[50px]">
        <Contact />
      </div>
    </main>
  );
}
