import React, { useEffect, useState } from "react";

export default function CursorDot() {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const moveDot = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", moveDot);
    return () => window.removeEventListener("mousemove", moveDot);
  }, []);

  return (
    <div
      className="fixed w-3 h-3 bg-blue-600 rounded-full pointer-events-none transition-transform duration-75 ease-out"
      style={{
        transform: `translate(${position.x - 10}px, ${position.y - 10}px)`,
      }}
    ></div>
  );
}
