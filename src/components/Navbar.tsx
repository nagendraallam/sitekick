"use client";

import { FaRocket } from "react-icons/fa";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="navbar px-6 bg-white shadow-sm sticky top-0 z-50 border-b border-gray-100">
      <div className="navbar-start">
        <div className="flex items-center space-x-2">
          <FaRocket className="text-blue-600 text-xl" />
          <span className="text-xl font-bold text-gray-900">
            Site<span className="text-blue-600">Kick</span>.app
          </span>
        </div>
      </div>

      <div className="navbar-end">
        {/* Desktop CTA */}
        <div className="hidden lg:flex space-x-3">
          <button className="btn btn-ghost text-gray-700 hover:text-blue-600 rounded-lg">
            Sign In
          </button>
          <button className="btn bg-blue-600 hover:bg-blue-700 text-white rounded-lg border-0">
            Get Started Free
          </button>
        </div>

        {/* Mobile Menu */}
        <div className="dropdown dropdown-end lg:hidden">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost rounded-lg"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? (
              <HiX className="h-5 w-5" />
            ) : (
              <HiMenu className="h-5 w-5" />
            )}
          </div>
          {isOpen && (
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow-lg bg-white rounded-lg w-52 border border-gray-200"
            >
              <li>
                <a
                  href="#features"
                  className="text-gray-700 hover:text-blue-600 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="text-gray-700 hover:text-blue-600 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-700 hover:text-blue-600 rounded-lg"
                  onClick={() => setIsOpen(false)}
                >
                  Contact
                </a>
              </li>
              <div className="divider my-2"></div>
              <li>
                <button className="btn btn-ghost text-gray-700 hover:text-blue-600 justify-start rounded-lg">
                  Sign In
                </button>
              </li>
              <li>
                <button className="btn bg-blue-600 hover:bg-blue-700 text-white justify-start mt-2 rounded-lg border-0">
                  Get Started Free
                </button>
              </li>
            </ul>
          )}
        </div>
      </div>
    </div>
  );
}
