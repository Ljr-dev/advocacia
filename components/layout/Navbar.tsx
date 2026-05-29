"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleScroll() {
      setScrolled(window.scrollY > 20);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{
        y: -80,
        opacity: 0,
      }}
      animate={{
        y: 0,
        opacity: 1,
      }}
      transition={{
        duration: 0.6,
      }}
      className={`fixed top-0 left-0 w-full z-50 transition duration-500 ${
        scrolled
          ? "bg-black/70 backdrop-blur-xl border-b border-zinc-900"
          : "bg-transparent"
      }`}
    >

      {/* CONTAINER */}
      <div className="container-premium h-20 md:h-24 flex items-center justify-between">

        {/* LOGO */}
        <a
          href="#"
          className="flex items-center text-xl sm:text-2xl md:text-3xl font-black tracking-tight leading-none"
        >

          DR. JOÃO

          <span className="text-[#C6A15B] ml-2">
            ALMEIDA
          </span>

        </a>

        {/* MENU */}
        <nav className="hidden md:flex items-center gap-8 lg:gap-10">

          <a
            href="#especialidades"
            className="uppercase tracking-[0.28em] text-[11px] text-zinc-400 hover:text-white transition duration-300"
          >
            Especialidades
          </a>

          <a
            href="#sobre"
            className="uppercase tracking-[0.28em] text-[11px] text-zinc-400 hover:text-white transition duration-300"
          >
            Sobre
          </a>

          <a
            href="#contato"
            className="uppercase tracking-[0.28em] text-[11px] text-zinc-400 hover:text-white transition duration-300"
          >
            Contato
          </a>

        </nav>

        {/* CTA */}
        <a
          href="https://wa.me/5519982144043"
          target="_blank"
          rel="noreferrer"
          className="hidden sm:flex items-center justify-center border border-[#C6A15B]/20 bg-[#C6A15B]/5 px-5 md:px-6 py-3 rounded-full text-sm font-medium hover:bg-[#C6A15B] hover:text-black transition duration-300"
        >

          WhatsApp

        </a>

      </div>

    </motion.header>
  );
}
