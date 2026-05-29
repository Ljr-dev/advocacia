
"use client";

import { useEffect, useState } from "react";

export function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    }

    window.addEventListener("mousemove", handleMove);

    return () => {
      window.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div
      className="pointer-events-none fixed z-30 w-[500px] h-[500px] rounded-full bg-[#C6A15B]/10 blur-[120px] transition duration-300"
      style={{
        left: position.x - 250,
        top: position.y - 250,
      }}
    />
  );
}
