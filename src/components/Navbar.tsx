"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className="navbar flex justify-between items-center px-8 py-4 bg-transparent absolute top-0 left-0 right-0 z-50">
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
