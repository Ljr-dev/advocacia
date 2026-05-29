export function Contact() {
  return (
    <section
      id="contato"
      className="relative py-28 md:py-36 bg-[#050505] text-white overflow-hidden"
    >

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-20" />

      {/* GLOW */}
      <div className="absolute bottom-[-220px] right-[-120px] w-[550px] h-[550px] bg-[#C6A15B] rounded-full blur-[160px] opacity-[0.05]" />

      {/* CONTAINER */}
      <div className="container-premium relative z-10 flex justify-center">

        {/* CARD */}
        <div className="relative w-full max-w-6xl rounded-[42px] border border-zinc-800 bg-zinc-950/40 backdrop-blur-sm overflow-hidden">

          {/* LIGHT */}
          <div className="absolute inset-0 bg-[#C6A15B]/[0.03]" />

          {/* CONTENT */}
          <div className="relative z-10 flex flex-col items-center text-center">

            {/* TOP */}
            <div className="w-full flex flex-col items-center text-center px-8 md:px-16 pt-16 md:pt-24 pb-14">

              {/* BADGE */}
              <div className="inline-flex border border-[#C6A15B]/20 bg-[#C6A15B]/5 px-5 md:px-6 py-3 rounded-full">

                <span className="uppercase tracking-[0.35em] text-[#C6A15B] text-[10px] md:text-[11px] font-medium">
                  Contato
                </span>

              </div>

              {/* TITLE */}
              <h2 className="mt-10 max-w-5xl mx-auto text-center text-4xl md:text-6xl lg:text-7xl font-black leading-[0.9] tracking-[-0.05em]">

                Precisa de
                <br />
                orientação jurídica?

              </h2>

              {/* DESCRIPTION */}
              <p className="mt-8 max-w-3xl mx-auto text-center text-zinc-400 text-base md:text-xl leading-relaxed">

                Entre em contato agora mesmo e receba
                atendimento jurídico estratégico,
                humanizado e focado na melhor solução
                para o seu caso.

              </p>

              {/* BUTTON */}
              <div className="mt-14 flex justify-center w-full">

                <a
                  href="https://wa.me/5519982144043"
                  target="_blank"
                  rel="noreferrer"
                  className="group inline-flex items-center justify-center gap-4 bg-[#C6A15B] text-black px-10 md:px-12 py-4 rounded-full font-semibold text-base md:text-lg hover:scale-[1.02] transition duration-300"
                >

                  <span className="text-lg">
                    ✆
                  </span>

                  Falar no WhatsApp

                  <span className="group-hover:translate-x-1 transition duration-300">
                    →
                  </span>

                </a>

              </div>

            </div>

            {/* BOTTOM */}
            <div className="w-full border-t border-zinc-800">

              <div className="grid grid-cols-1 md:grid-cols-3">

                {/* ITEM */}
                <div className="flex flex-col items-center justify-center text-center px-8 py-10 md:border-r border-zinc-800">

                  {/* ICON */}
                  <div className="w-14 h-14 rounded-full border border-[#C6A15B]/20 bg-[#C6A15B]/5 flex items-center justify-center">

                    <span className="text-[#C6A15B] text-xl">
                      ◎
                    </span>

                  </div>

                  {/* LABEL */}
                  <p className="mt-5 text-zinc-500 uppercase tracking-[0.35em] text-xs text-center">
                    Atendimento
                  </p>

                  {/* VALUE */}
                  <p className="mt-4 text-2xl font-semibold text-center">
                    Todo o Brasil
                  </p>

                </div>

                {/* ITEM */}
                <div className="flex flex-col items-center justify-center text-center px-8 py-10 md:border-r border-zinc-800">

                  {/* ICON */}
                  <div className="w-14 h-14 rounded-full border border-[#C6A15B]/20 bg-[#C6A15B]/5 flex items-center justify-center">

                    <span className="text-[#C6A15B] text-xl">
                      ◔
                    </span>

                  </div>

                  {/* LABEL */}
                  <p className="mt-5 text-zinc-500 uppercase tracking-[0.35em] text-xs text-center">
                    Horário
                  </p>

                  {/* VALUE */}
                  <p className="mt-4 text-2xl font-semibold text-center">
                    Seg à Sex • 08h às 18h
                  </p>

                </div>

                {/* ITEM */}
                <div className="flex flex-col items-center justify-center text-center px-8 py-10">

                  {/* ICON */}
                  <div className="w-14 h-14 rounded-full border border-[#C6A15B]/20 bg-[#C6A15B]/5 flex items-center justify-center">

                    <span className="text-[#C6A15B] text-xl">
                      ☏
                    </span>

                  </div>

                  {/* LABEL */}
                  <p className="mt-5 text-zinc-500 uppercase tracking-[0.35em] text-xs text-center">
                    WhatsApp
                  </p>

                  {/* VALUE */}
                  <p className="mt-4 text-2xl font-semibold text-center">
                    (19) 98214-4043
                  </p>

                </div>

              </div>

            </div>

          </div>

        </div>

      </div>

    </section>
  );
}
