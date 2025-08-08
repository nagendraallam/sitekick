"use client";

import {
  FaRocket,
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <div className="bg-gradient-to-br from-neutral to-neutral-focus text-neutral-content">
      {/* Main Footer */}
      <footer className="footer p-10 lg:p-16">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <aside className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="p-3 rounded-xl bg-primary/20 backdrop-blur-sm">
                <FaRocket className="text-primary text-2xl" />
              </div>
              <span className="text-2xl font-bold">
                Site<span className="text-primary">Kick</span>
                <span className="text-primary/60">.app</span>
              </span>
            </div>
            <p className="text-neutral-content/80 leading-relaxed mb-6 max-w-sm">
              Empowering small businesses across Ireland with AI-powered tools
              to grow their online presence and connect with customers.
              Transform your business today.
            </p>
            <div className="space-y-2">
              <div className="flex items-center space-x-3 text-sm text-neutral-content/70">
                <FaMapMarkerAlt className="text-primary" />
                <span>Dublin, Ireland</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-neutral-content/70">
                <FaPhone className="text-primary" />
                <span>+353 1 234 5678</span>
              </div>
              <div className="flex items-center space-x-3 text-sm text-neutral-content/70">
                <FaEnvelope className="text-primary" />
                <span>hello@sitekick.app</span>
              </div>
            </div>
          </aside>

          {/* Services */}
          <nav className="lg:col-span-1">
            <h6 className="text-lg font-bold text-white mb-6 relative">
              Services
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
            </h6>
            <div className="space-y-3">
              <a
                href="#features"
                className="link link-hover text-neutral-content/80 hover:text-primary transition-all duration-300 flex items-center group"
              >
                <span className="w-2 h-2 bg-primary/40 rounded-full mr-3 group-hover:bg-primary transition-all duration-300"></span>
                AI Chatbot
              </a>
              <a
                href="#features"
                className="link link-hover text-neutral-content/80 hover:text-primary transition-all duration-300 flex items-center group"
              >
                <span className="w-2 h-2 bg-primary/40 rounded-full mr-3 group-hover:bg-primary transition-all duration-300"></span>
                Review Booster
              </a>
              <a
                href="#features"
                className="link link-hover text-neutral-content/80 hover:text-primary transition-all duration-300 flex items-center group"
              >
                <span className="w-2 h-2 bg-primary/40 rounded-full mr-3 group-hover:bg-primary transition-all duration-300"></span>
                Analytics Reports
              </a>
              <a
                href="#pricing"
                className="link link-hover text-neutral-content/80 hover:text-primary transition-all duration-300 flex items-center group"
              >
                <span className="w-2 h-2 bg-primary/40 rounded-full mr-3 group-hover:bg-primary transition-all duration-300"></span>
                Pricing Plans
              </a>
            </div>
          </nav>

          {/* Company */}
          <nav className="lg:col-span-1">
            <h6 className="text-lg font-bold text-white mb-6 relative">
              Company
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
            </h6>
            <div className="space-y-3">
              <a className="link link-hover text-neutral-content/80 hover:text-primary transition-all duration-300 flex items-center group">
                <span className="w-2 h-2 bg-primary/40 rounded-full mr-3 group-hover:bg-primary transition-all duration-300"></span>
                About Us
              </a>
              <a className="link link-hover text-neutral-content/80 hover:text-primary transition-all duration-300 flex items-center group">
                <span className="w-2 h-2 bg-primary/40 rounded-full mr-3 group-hover:bg-primary transition-all duration-300"></span>
                Our Story
              </a>
              <a
                href="#contact"
                className="link link-hover text-neutral-content/80 hover:text-primary transition-all duration-300 flex items-center group"
              >
                <span className="w-2 h-2 bg-primary/40 rounded-full mr-3 group-hover:bg-primary transition-all duration-300"></span>
                Contact
              </a>
              <a className="link link-hover text-neutral-content/80 hover:text-primary transition-all duration-300 flex items-center group">
                <span className="w-2 h-2 bg-primary/40 rounded-full mr-3 group-hover:bg-primary transition-all duration-300"></span>
                Careers
              </a>
            </div>
          </nav>

          {/* Legal & Newsletter */}
          <nav className="lg:col-span-1">
            <h6 className="text-lg font-bold text-white mb-6 relative">
              Stay Connected
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-blue-500 rounded-full"></span>
            </h6>

            {/* Newsletter Signup */}
            <div className="mb-6">
              <p className="text-sm text-neutral-content/80 mb-3">
                Get the latest updates and tips for growing your business
                online.
              </p>
              <div className="flex space-x-2">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="input input-sm bg-neutral-content/10 border-neutral-content/20 text-neutral-content placeholder-neutral-content/60 flex-1"
                />
                <button className="btn btn-primary btn-sm hover:scale-105 transition-all duration-300">
                  Subscribe
                </button>
              </div>
            </div>

            {/* Legal Links */}
            <div className="space-y-3">
              <a className="link link-hover text-neutral-content/80 hover:text-primary transition-all duration-300 flex items-center group">
                <span className="w-2 h-2 bg-primary/40 rounded-full mr-3 group-hover:bg-primary transition-all duration-300"></span>
                Privacy Policy
              </a>
              <a className="link link-hover text-neutral-content/80 hover:text-primary transition-all duration-300 flex items-center group">
                <span className="w-2 h-2 bg-primary/40 rounded-full mr-3 group-hover:bg-primary transition-all duration-300"></span>
                Terms of Service
              </a>
              <a className="link link-hover text-neutral-content/80 hover:text-primary transition-all duration-300 flex items-center group">
                <span className="w-2 h-2 bg-primary/40 rounded-full mr-3 group-hover:bg-primary transition-all duration-300"></span>
                Cookie Policy
              </a>
            </div>
          </nav>
        </div>
      </footer>

      {/* Bottom Bar */}
      <footer className="footer px-10 py-6 border-t border-neutral-content/10 bg-neutral-focus/50">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <aside className="flex items-center space-x-4">
            <p className="text-neutral-content/70 text-sm">
              © {currentYear} SiteKick.app - All rights reserved.
            </p>
            <div className="hidden md:flex items-center space-x-2 text-xs text-neutral-content/50">
              <span>Made with ❤️ in Ireland</span>
            </div>
          </aside>

          <nav className="flex items-center space-x-4">
            <div className="flex space-x-3">
              <a
                href="#"
                className="p-2 rounded-lg bg-neutral-content/10 hover:bg-primary/20 hover:scale-110 transition-all duration-300 group"
              >
                <FaFacebook className="text-lg text-neutral-content/70 group-hover:text-primary" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-neutral-content/10 hover:bg-primary/20 hover:scale-110 transition-all duration-300 group"
              >
                <FaInstagram className="text-lg text-neutral-content/70 group-hover:text-primary" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-neutral-content/10 hover:bg-primary/20 hover:scale-110 transition-all duration-300 group"
              >
                <FaLinkedin className="text-lg text-neutral-content/70 group-hover:text-primary" />
              </a>
              <a
                href="#"
                className="p-2 rounded-lg bg-neutral-content/10 hover:bg-primary/20 hover:scale-110 transition-all duration-300 group"
              >
                <FaTwitter className="text-lg text-neutral-content/70 group-hover:text-primary" />
              </a>
            </div>
          </nav>
        </div>
      </footer>
    </div>
  );
}
