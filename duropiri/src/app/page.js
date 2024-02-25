"page.js";
import Hero from "@/components/Hero";
import Body from "@/components/Body";
import Contact from "@/components/Contact";
import { Parallax } from "@/components/Parallax";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <div id="home" className="mb-[-100svh] py-0">
        <Navbar />

        <Hero />
      </div>
      <div className="h-svh"></div>
      {/* Body Section */}

      <Body />

      <div className="mt-[-100svh]">
        <div aria-hidden="true" className="h-svh relative"></div>
        <section id="contact" className="section-padding sticky bottom-[-40%] no-padding-y">
          <Contact />
        </section>
      </div>

      {/* Footer Section */}

      {/* <div className="px-[25px] lg:px-[50px] xl:px-[150px] min-h-screen">
        <Parallax speed={1} className="z-10">
          <Contact />
        </Parallax>
      </div> */}
    </main>
  );
}
