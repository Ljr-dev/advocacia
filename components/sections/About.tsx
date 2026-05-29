import Image from "next/image";

export function About() {
  return (
    <section
      id="sobre"
      className="relative py-28 md:py-36 bg-[#050505] text-white overflow-hidden"
    >

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-20" />

      {/* GLOW */}
      <div className="absolute top-[-220px] right-[-120px] w-[550px] h-[550px] bg-[#C6A15B] rounded-full blur-[150px] opacity-[0.06]" />

      {/* CONTAINER */}
      <div className="container-premium relative z-10">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">

          {/* LEFT */}
          <div className="flex flex-col items-center lg:items-start text-center lg:text-left max-w-2xl mx-auto lg:mx-0">

            {/* BADGE */}
            <div className="inline-flex border border-[#C6A15B]/20 bg-[#C6A15B]/5 px-5 md:px-6 py-3 rounded-full">

              <span className="uppercase tracking-[0.35em] text-[#C6A15B] text-[10px] md:text-[11px] font-medium">
                Sobre o Advogado
              </span>

            </div>

            {/* TITLE */}
            <h2 className="mt-10 text-4xl md:text-5xl lg:text-6xl font-black leading-[0.95] tracking-[-0.05em]">

              Excelência jurídica
              <br />
              com atendimento
              <br />
              humanizado.

            </h2>

            {/* DESCRIPTION */}
            <p className="mt-10 text-zinc-400 text-base md:text-lg leading-relaxed max-w-xl">

              Dr. João Almeida atua há mais de 10 anos
              oferecendo assessoria jurídica estratégica,
              atendimento personalizado e soluções eficientes
              para clientes em todo o Brasil.

            </p>

            {/* FEATURES */}
            <div className="mt-12 flex flex-col gap-5 w-full max-w-md">

              {/* ITEM */}
              <div className="flex items-center justify-center lg:justify-start gap-4">

                <div className="w-3 h-3 rounded-full bg-[#C6A15B]" />

                <p className="text-zinc-300">
                  Atendimento jurídico estratégico
                </p>

              </div>

              {/* ITEM */}
              <div className="flex items-center justify-center lg:justify-start gap-4">

                <div className="w-3 h-3 rounded-full bg-[#C6A15B]" />

                <p className="text-zinc-300">
                  Atendimento nacional especializado
                </p>

              </div>

              {/* ITEM */}
              <div className="flex items-center justify-center lg:justify-start gap-4">

                <div className="w-3 h-3 rounded-full bg-[#C6A15B]" />

                <p className="text-zinc-300">
                  Mais de 500 casos atendidos
                </p>

              </div>

            </div>

            {/* STATS */}
            <div className="mt-14 flex items-center justify-center lg:justify-start gap-14 w-full flex-wrap">

              {/* ITEM */}
              <div className="text-center lg:text-left">

                <h3 className="text-4xl md:text-5xl font-black text-[#C6A15B]">
                  +500
                </h3>

                <p className="mt-3 text-zinc-500 uppercase tracking-[0.3em] text-xs">
                  Casos
                </p>

              </div>

              {/* ITEM */}
              <div className="text-center lg:text-left">

                <h3 className="text-4xl md:text-5xl font-black text-[#C6A15B]">
                  10+
                </h3>

                <p className="mt-3 text-zinc-500 uppercase tracking-[0.3em] text-xs">
                  Anos
                </p>

              </div>

            </div>

          </div>

          {/* RIGHT */}
          <div className="relative flex justify-center">

            <div className="relative rounded-[40px] overflow-hidden border border-zinc-800 min-h-[460px] md:min-h-[520px] w-full max-w-[520px] bg-zinc-950/50">

              {/* IMAGE */}
              <Image
                src="/images/lawyer.jpg"
                alt="Advogado"
                fill
                className="object-cover brightness-[0.75]"
              />

              {/* OVERLAY */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* CONTENT */}
              <div className="absolute bottom-0 left-0 w-full p-8 md:p-10 flex flex-col items-center text-center">

                <div className="inline-flex border border-[#C6A15B]/20 bg-black/40 backdrop-blur-sm px-5 py-2 rounded-full">

                  <span className="uppercase tracking-[0.3em] text-[#C6A15B] text-[10px] font-medium">
                    OAB 000.000
                  </span>

                </div>

                <h3 className="mt-6 text-3xl md:text-4xl font-black">
                  Dr. João Almeida
                </h3>

                <p className="mt-4 text-zinc-300 leading-relaxed max-w-md text-sm md:text-base">

                  Especialista em soluções jurídicas
                  estratégicas para pessoas e empresas.

                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
