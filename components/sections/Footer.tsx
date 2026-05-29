export function Footer() {
  return (
    <footer className="relative bg-[#050505] text-white overflow-hidden border-t border-zinc-900">

      {/* GRID */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#111_1px,transparent_1px),linear-gradient(to_bottom,#111_1px,transparent_1px)] bg-[size:5rem_5rem] opacity-10" />

      {/* CONTAINER */}
      <div className="container-premium relative z-10 py-16 md:py-20">

        <div className="flex flex-col items-center justify-center text-center">

          {/* LOGO */}
          <h2 className="text-3xl md:text-4xl font-black tracking-tight leading-none">

            DR. JOÃO
            <span className="text-[#C6A15B] ml-2">
              ALMEIDA
            </span>

          </h2>

          {/* DESCRIPTION */}
          <p className="mt-6 max-w-2xl text-zinc-500 leading-relaxed text-base md:text-lg px-2">

            Atendimento jurídico estratégico,
            humanizado e focado na defesa dos
            direitos dos clientes em todo o Brasil.

          </p>

          {/* CONTACT */}
          <div className="mt-10 flex flex-col md:flex-row items-center justify-center gap-5 md:gap-8 text-zinc-400 text-sm md:text-base">

            {/* WHATSAPP */}
            <a
              href="https://wa.me/5519982144043"
              target="_blank"
              rel="noreferrer"
              className="hover:text-[#C6A15B] transition duration-300"
            >
              WhatsApp
            </a>

            {/* DOT */}
            <span className="hidden md:block text-zinc-800">
              •
            </span>

            {/* EMAIL */}
            <a
              href="mailto:contato@advocacia.com"
              className="hover:text-[#C6A15B] transition duration-300"
            >
              contato@advocacia.com
            </a>

            {/* DOT */}
            <span className="hidden md:block text-zinc-800">
              •
            </span>

            {/* LOCATION */}
            <span>
              Atendimento Nacional
            </span>

          </div>

          {/* COPYRIGHT */}
          <div className="mt-14 pt-8 border-t border-zinc-900 w-full">

            <p className="text-zinc-600 text-sm text-center leading-relaxed">

              © 2026 Advocacia Premium.
              Todos os direitos reservados.

            </p>

          </div>

        </div>

      </div>

    </footer>
  );
}
