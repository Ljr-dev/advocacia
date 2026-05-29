
export function Hero() {
  return (
    <section className="relative min-h-screen bg-[#050505] text-white overflow-hidden">

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-20" />

      {/* GLOW */}
      <div className="absolute top-[-250px] right-[-150px] w-[650px] h-[650px] bg-[#C6A15B] rounded-full blur-[160px] opacity-[0.06]" />

      {/* CONTAINER */}
      <div className="container-premium relative z-10 min-h-screen flex items-center justify-center">

        {/* CONTENT */}
        <div className="w-full flex flex-col items-center text-center pt-32 md:pt-40 pb-20">

          {/* BADGE */}
          <div className="inline-flex items-center justify-center border border-[#C6A15B]/20 bg-[#C6A15B]/5 px-5 md:px-6 py-3 rounded-full">

            <span className="uppercase tracking-[0.35em] text-[#C6A15B] text-[10px] md:text-xs font-medium">
              Advocacia Especializada
            </span>

          </div>

          {/* TITLE */}
          <h1 className="mt-10 max-w-5xl font-black leading-[0.9] tracking-[-0.06em] text-center text-5xl sm:text-6xl md:text-7xl lg:text-[84px] xl:text-[96px]">

            Defendendo seus
            <br />
            direitos com
            <br />
            excelência jurídica.

          </h1>

          {/* DESCRIPTION */}
          <p className="mt-10 max-w-3xl text-zinc-400 text-base sm:text-lg md:text-xl leading-relaxed px-2">

            Atendimento jurídico estratégico,
            humanizado e focado na melhor solução
            para o seu caso em todo o Brasil.

          </p>

          {/* BUTTONS */}
          <div className="mt-14 flex flex-col sm:flex-row items-center justify-center gap-5 w-full max-w-2xl">

            {/* PRIMARY */}
            <a
              href="#contato"
              className="group w-full sm:w-auto min-w-[260px] bg-[#C6A15B] text-black px-8 md:px-10 py-4 md:py-5 rounded-full font-semibold flex items-center justify-center gap-3 hover:scale-[1.02] transition duration-300"
            >

              Agendar Consulta

              <span className="group-hover:translate-x-1 transition duration-300">
                →
              </span>

            </a>

            {/* SECONDARY */}
            <a
              href="#especialidades"
              className="group w-full sm:w-auto min-w-[260px] border border-zinc-700 px-8 md:px-10 py-4 md:py-5 rounded-full flex items-center justify-center gap-3 hover:border-[#C6A15B] hover:bg-[#C6A15B]/5 transition duration-300"
            >

              Áreas de Atuação

              <span className="group-hover:translate-x-1 transition duration-300">
                →
              </span>

            </a>

          </div>

          {/* STATS */}
          <div className="mt-20 md:mt-24 w-full max-w-5xl border-t border-zinc-900 pt-10 md:pt-14">

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-14">

              {/* ITEM */}
              <div className="flex flex-col items-center text-center">

                <h3 className="text-5xl lg:text-6xl font-black text-[#C6A15B]">
                  +500
                </h3>

                <p className="mt-4 text-zinc-500 uppercase tracking-[0.35em] text-xs">
                  Casos Atendidos
                </p>

              </div>

              {/* ITEM */}
              <div className="flex flex-col items-center text-center">

                <h3 className="text-5xl lg:text-6xl font-black text-[#C6A15B]">
                  10+
                </h3>

                <p className="mt-4 text-zinc-500 uppercase tracking-[0.35em] text-xs">
                  Anos de Experiência
                </p>

              </div>

              {/* ITEM */}
              <div className="flex flex-col items-center text-center">

                <h3 className="text-5xl lg:text-6xl font-black text-[#C6A15B]">
                  Brasil
                </h3>

                <p className="mt-4 text-zinc-500 uppercase tracking-[0.35em] text-xs">
                  Atendimento Nacional
                </p>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
