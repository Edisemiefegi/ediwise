import About from "@/components/landing/About";
import Contact from "@/components/landing/Contact";
import Features from "@/components/landing/Features";
import Navbar from "@/components/landing/Navbar";
import Pricing from "@/components/landing/Pricing";

export default function Home() {
  return (
    <main className="">
      <Navbar />
      <div className="md:py-16 py-10 space-y-20">
        <section id="Features">
          {" "}
          <Features />
        </section>
        <section id="Pricing">
          {" "}
          <Pricing />
        </section>
        <section id="About">
          {" "}
          <About />
        </section>
        <section id="Contact">
          {" "}
          <Contact />
        </section>
      </div>
      <div className="bg-secondary ">
        <div className="flex text-xs  container w-10/12 mx-auto p-4 justify-between">
          <p className=" text-gray">© 2025 EdiWise. All rights reserved.</p>
          <a
            href="https://portfolio-k97c.onrender.com"
            className="text-primary font-bold cursor-pointer hover:opacity-70"
          >
            My portfolio Link
          </a>
        </div>
      </div>
    </main>
  );
}
