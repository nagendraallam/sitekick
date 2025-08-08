"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar flex justify-between items-center fixed  bg-white/80 w-[80%]  left-1/2 -translate-x-1/2 px-8  top-2  rounded-md right-0 z-50 font-semibold text-black backdrop-blur-lg border-b border-base-300/20 shadow-sm">
      {" "}
      <div className="flex justify-between items-center">
        {/* Logo */}
        <a className="text-xl font-black hover:bg-transparent">
          <Image
            src="/l.png"
            alt="SiteKick Logo"
            width={150}
            height={50}
            className=" w-auto"
          />
        </a>
      </div>
      <div className="flex justify-end items-center gap-2">
        {/* Login button */}
        <a className="group btn btn-primary rounded-lg shadow-md hover:shadow-lg transition-all duration-300 hover:scale-105">
          <span>Login</span>
          <svg
            className="w-4 h-4 ml-1 group-hover:translate-x-0.5 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </a>
      </div>
    </div>
  );
}
