
export function WhatsappButton() {
  return (
    <a
      href="https://wa.me/5519982144043"
      target="_blank"
      rel="noreferrer"
      className="fixed bottom-6 right-6 z-[999] group"
    >

      <div className="relative flex items-center justify-center w-16 h-16 rounded-full bg-[#C6A15B] shadow-[0_0_40px_rgba(198,161,91,0.35)] hover:scale-110 transition duration-300">

        {/* PULSE */}
        <div className="absolute inset-0 rounded-full bg-[#C6A15B] animate-ping opacity-20" />

        {/* ICON */}
        <span className="relative text-2xl text-black">
          💬
        </span>

      </div>

    </a>
  );
}
