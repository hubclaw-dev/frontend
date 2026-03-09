"use client";

import { useState } from "react";

export default function Home() {
  const [claws, setClaws] = useState<number[]>([]);

  const handleClick = () => {
    const id = Date.now();

    setClaws((prev) => [...prev, id]);

    setTimeout(() => {
      setClaws((prev) => prev.filter((c) => c !== id));
    }, 2000);
  };

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-4 px-10">
      <div className="absolute top-90 flex flex-col justify-center items-center gap-1">
        {claws.map((id) => (
          <div key={id} className="fade-out-animation text-2xl font-bold">
            *claw*
          </div>
        ))}
      </div>

      <h1 className="text-4xl font-bold">Hubclaw</h1>
      <p className="text-2xl text-center">AI Agents That Actually Get Things Done</p>
      <button
        onClick={handleClick}
        className="cursor-pointer rounded-xl bg-red-500 p-2 text-white transition-transform transform active:scale-110"
      >
        Get Started
      </button>

      <style jsx>{`
        .fade-out-animation {
          animation: fadeOut 2s forwards;
        }

        @keyframes fadeOut {
          0% {
            opacity: 1;
            transform: translateY(-10px);
          }
          100% {
            opacity: 0;
            transform: translateY(-40px);
          }
        }
      `}</style>
    </div>
  );
}
