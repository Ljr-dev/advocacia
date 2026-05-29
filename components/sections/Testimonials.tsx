"use client";

import { Reveal } from "@/components/ui/Reveal";

const testimonials = [
  {
    name: "Marcos Silva",
    text: "Atendimento extremamente profissional e humanizado. Meu processo foi conduzido com excelência.",
  },

  {
    name: "Fernanda Oliveira",
    text: "Excelente advogado. Sempre muito claro, estratégico e atencioso durante todo o atendimento.",
  },

  {
    name: "Carlos Mendes",
    text: "Consegui resolver meu caso com segurança e rapidez graças ao suporte jurídico prestado.",
  },
];

export function Testimonials() {
  return (
    <section className="relative py-28 md:py-36 bg-[#050505] text-white overflow-hidden">

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-20" />

      {/* GLOW */}
      <div className="absolute top-[-220px] left-[-120px] w-[550px] h-[550px] bg-[#C6A15B] rounded-full blur-[160px] opacity-[0.06]" />

      <Reveal>

        {/* CONTAINER */}
        <div className="container-premium relative z-10">

          {/* HEADER */}
          <div className="flex flex-col items-center text-center">

            {/* BADGE */}
            <div className="inline-flex border border-[#C6A15B]/20 bg-[#C6A15B]/5 px-5 md:px-6 py-3 rounded-full">

              <span className="uppercase tracking-[0.35em] text-[#C6A15B] text-[10px] md:text-[11px] font-medium">
                Depoimentos
              </span>

            </div>

            {/* TITLE */}
            <h2 className="mt-10 max-w-5xl text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-[-0.05em]">

              Confiança construída
              <br />
              através de resultados.

            </h2>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-2xl text-zinc-400 text-base md:text-lg leading-relaxed px-2">

              Clientes atendidos com excelência,
              estratégia jurídica e acompanhamento
              profissional durante todo o processo.

            </p>

          </div>

          {/* CARDS */}
          <div
            className="
              mt-20 md:mt-24
              grid
              grid-cols-1
              md:grid-cols-2
              xl:grid-cols-3
              gap-8
              justify-items-center
            "
          >

            {testimonials.map((item, index) => (
              <div
                key={index}
                className="
                  group
                  hover-lift
                  relative
                  w-full
                  max-w-[360px]
                  rounded-[32px]
                  border
                  border-zinc-800
                  bg-zinc-950/40
                  backdrop-blur-sm
                  overflow-hidden
                  p-8 md:p-10
                  hover:border-[#C6A15B]/30
                  transition duration-500
                "
              >

                {/* HOVER */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-[#C6A15B]/5 transition duration-500" />

                {/* CONTENT */}
                <div className="relative z-10 flex flex-col items-center text-center h-full">

                  {/* QUOTE */}
                  <span className="text-[#C6A15B]/70 text-6xl leading-none">
                    “
                  </span>

                  {/* TEXT */}
                  <p className="mt-8 text-zinc-300 leading-relaxed text-base md:text-lg max-w-sm">

                    {item.text}

                  </p>

                  {/* FOOTER */}
                  <div className="mt-10 pt-6 border-t border-zinc-800 w-full flex flex-col items-center">

                    <h3 className="font-bold text-lg">
                      {item.name}
                    </h3>

                    <span className="mt-2 text-zinc-500 uppercase tracking-[0.3em] text-xs">
                      Cliente
                    </span>

                  </div>

                </div>

              </div>
            ))}

          </div>

        </div>

      </Reveal>

    </section>
  );
}
