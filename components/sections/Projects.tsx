"use client";

import { Reveal } from "@/components/ui/Reveal";

const services = [
  {
    title: "Direito Previdenciário",
    description:
      "Aposentadorias, benefícios e revisões do INSS com atendimento especializado.",
    link: "#contato",
  },

  {
    title: "Direito Trabalhista",
    description:
      "Defesa estratégica dos direitos trabalhistas com atuação humanizada.",
    link: "#contato",
  },

  {
    title: "Direito Civil",
    description:
      "Contratos, indenizações e assessoria jurídica para pessoas e empresas.",
    link: "#contato",
  },
];

export function Projects() {
  return (
    <section
      id="especialidades"
      className="relative py-28 md:py-36 bg-[#050505] text-white overflow-hidden"
    >

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-20" />

      {/* GLOW */}
      <div className="absolute bottom-[-250px] left-[-120px] w-[550px] h-[550px] bg-[#C6A15B] rounded-full blur-[160px] opacity-[0.06]" />

      <Reveal>

        {/* CONTAINER */}
        <div className="container-premium relative z-10">

          {/* HEADER */}
          <div className="flex flex-col items-center text-center">

            {/* BADGE */}
            <div className="inline-flex border border-[#C6A15B]/20 bg-[#C6A15B]/5 px-5 md:px-6 py-3 rounded-full">

              <span className="uppercase tracking-[0.35em] text-[#C6A15B] text-[10px] md:text-[11px] font-medium">
                Especialidades
              </span>

            </div>

            {/* TITLE */}
            <h2 className="mt-10 max-w-4xl text-4xl md:text-6xl lg:text-7xl font-black leading-[0.95] tracking-[-0.05em]">

              Áreas de atuação
              <br />
              jurídica.

            </h2>

            {/* DESCRIPTION */}
            <p className="mt-8 max-w-2xl text-zinc-400 text-base md:text-lg leading-relaxed px-2">

              Atendimento jurídico estratégico com foco em
              excelência, segurança e confiança profissional.

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

            {services.map((service, index) => (
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

                  {/* NUMBER */}
                  <span className="text-6xl font-black text-[#C6A15B]/20 leading-none">
                    0{index + 1}
                  </span>

                  {/* TITLE */}
                  <h3 className="mt-8 text-2xl md:text-3xl font-black leading-tight">

                    {service.title}

                  </h3>

                  {/* DESCRIPTION */}
                  <p className="mt-6 text-zinc-400 leading-relaxed max-w-sm text-sm md:text-base">

                    {service.description}

                  </p>

                  {/* BUTTON */}
                  <a
                    href={service.link}
                    className="group/button mt-10 inline-flex items-center gap-3 border border-zinc-700 px-6 py-3 rounded-full hover:border-[#C6A15B] hover:bg-[#C6A15B]/5 transition duration-300"
                  >

                    Agendar Consulta

                    <span className="group-hover/button:translate-x-1 transition duration-300">
                      →
                    </span>

                  </a>

                </div>

              </div>
            ))}

          </div>

        </div>

      </Reveal>

    </section>
  );
}
