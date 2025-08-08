"use client";

import Image from "next/image";
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
    <div className="relative">
      {/* Main Footer */}
      <footer className="relative bg-gradient-to-b from-base-200/50 to-base-300 border-t border-base-300/30">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-primary/2 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/4 w-48 h-48 bg-secondary/2 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {/* Company Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-3 mb-6">
                <Image
                  src="/l.png"
                  alt="SiteKick Logo"
                  width={220}
                  height={40}
                  className="h-20 w-auto"
                />
              </div>
              <p className="text-base-content/70 text-lg leading-relaxed mb-6 max-w-md">
                Transform your website visitors into customers with AI-powered
                chatbots, lead capture tools, and smart conversion optimization.
              </p>
              <div className="flex items-center gap-4">
                <div className="inline-flex items-center gap-2 bg-success/10 text-success px-4 py-2 rounded-full text-sm font-medium border border-success/20">
                  <span className="w-2 h-2 bg-success rounded-full animate-pulse"></span>
                  Trusted by 100+ businesses
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold text-base-content mb-4">
                Get in Touch
              </h3>
              <div className="space-y-3">
                <div className="flex items-center gap-3 text-base-content/70">
                  <FaEnvelope className="text-primary" />
                  <a
                    href="mailto:hello@sitekick.app"
                    className="hover:text-primary transition-colors"
                  >
                    hello@sitekick.app
                  </a>
                </div>
                <div className="flex items-center gap-3 text-base-content/70">
                  <FaPhone className="text-primary" />
                  <a
                    href="tel:+1234567890"
                    className="hover:text-primary transition-colors"
                  >
                    +1 (234) 567-890
                  </a>
                </div>
                <div className="flex items-center gap-3 text-base-content/70">
                  <FaMapMarkerAlt className="text-primary" />
                  <span>San Francisco, CA</span>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-base-content mb-4">
                Follow Us
              </h3>
              <div className="flex gap-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-base-100 rounded-lg flex items-center justify-center text-base-content/70 hover:text-white hover:bg-primary transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  <FaTwitter className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-base-100 rounded-lg flex items-center justify-center text-base-content/70 hover:text-white hover:bg-primary transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  <FaLinkedin className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-base-100 rounded-lg flex items-center justify-center text-base-content/70 hover:text-white hover:bg-primary transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  <FaFacebook className="w-5 h-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-base-100 rounded-lg flex items-center justify-center text-base-content/70 hover:text-white hover:bg-primary transition-all duration-300 hover:scale-110 shadow-sm"
                >
                  <FaInstagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="bg-base-300 border-t border-base-300/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-base-content/60 text-sm">
              © {currentYear} SiteKick. All rights reserved.
            </p>
            <div className="flex gap-6 text-sm">
              <a
                href="#privacy"
                className="text-base-content/60 hover:text-primary transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#terms"
                className="text-base-content/60 hover:text-primary transition-colors"
              >
                Terms of Service
              </a>
              <a
                href="#cookies"
                className="text-base-content/60 hover:text-primary transition-colors"
              >
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
