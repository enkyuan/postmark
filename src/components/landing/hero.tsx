"use client"

import { TypewriterEffect } from "@/components/landing/typewriter-effect";
import { Link } from "react-router-dom";

export function Hero() {
  const words = [
    {
      text: "Postmark",
    },
    {
      text: "can",
    },
    {
      text: "help",
    },
    {
      text: "you",
    },
    {
      text: "with",
    },
    {
      text: "that.",
      className: "text-current dark:text-current",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center h-[40rem] ">
      <p className="text-neutral-600 dark:text-neutral-200 text-base  mb-10">
        Had no idea what you just read?
      </p>
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <Link to="/auth/signup">
          <button className="w-40 h-10 rounded-xl bg-current border dark:border-white border-transparent text-white text-sm">
            Join now
          </button>
        </Link>
        <Link to="/auth/">
          <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
            Login
          </button>
        </Link>
      </div>
    </div>
  );
}
