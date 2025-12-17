"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Highlights", href: "#highlights" },
  { name: "Speakers", href: "#speakers" },
  { name: "Schedule", href: "#schedule" },
  { name: "Team", href: "#team" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/20 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-black/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold tracking-wider text-white">
              DHC<span className="text-primary">2026</span>
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="text-gray-300 hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium uppercase tracking-wide"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#register"
                className="bg-primary hover:bg-cyan-400 text-black px-4 py-2 rounded-full font-bold text-sm transition-all shadow-[0_0_10px_rgba(0,240,255,0.5)] hover:shadow-[0_0_20px_rgba(0,240,255,0.7)]"
              >
                Register
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-white/10 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden glass border-b border-white/10"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-primary block px-3 py-2 rounded-md text-base font-medium"
                >
                  {link.name}
                </Link>
              ))}
              <Link
                href="#register"
                onClick={() => setIsOpen(false)}
                className="text-black bg-primary hover:bg-cyan-400 block px-3 py-2 rounded-md text-base font-bold mt-4 text-center shadow-[0_0_10px_rgba(0,240,255,0.5)]"
              >
                Register Now
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
