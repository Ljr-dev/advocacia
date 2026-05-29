
import { Navbar } from "@/components/layout/Navbar";

import { Hero } from "@/components/sections/Hero";
import { Projects } from "@/components/sections/Projects";
import { About } from "@/components/sections/About";
import { Testimonials } from "@/components/sections/Testimonials";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";

import { CursorGlow } from "@/components/ui/CursorGlow";
import { WhatsappButton } from "@/components/ui/WhatsappButton";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden bg-[#050505] text-white">

      {/* CURSOR */}
      <CursorGlow />

      {/* NAVBAR */}
      <Navbar />

      {/* HERO */}
      <Hero />

      {/* CONTENT */}
      <div className="relative z-10 flex flex-col gap-24 md:gap-32 lg:gap-40">

        {/* ESPECIALIDADES */}
        <Projects />

        {/* SOBRE */}
        <About />

        {/* DEPOIMENTOS */}
        <Testimonials />

        {/* CONTATO */}
        <Contact />
        
        
      </div>

      {/* FOOTER */}
      <Footer />

      {/* FLOAT BUTTON */}
      <WhatsappButton />

    </main>
  );
}

