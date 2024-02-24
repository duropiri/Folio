'page.js'
import Hero from "@/components/Hero";
import Body from "@/components/Body";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      <div className="px-[25px] lg:px-[50px] xl:px-[150px]">
        <Hero />
      </div>
      <Body />
      <div className="px-[25px] lg:px-[50px] xl:px-[150px] min-h-screen">
        <Contact />
      </div>
    </main>
  );
}
