"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { name: "Home", href: "#hero" },
  { name: "About", href: "#about" },
  { name: "Key Dates", href: "#dates" },
  { name: "Highlights", href: "#highlights" },
  { name: "Speakers", href: "#speakers" },
  { name: "Schedule", href: "#schedule" },
  { name: "Team", href: "#team" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-6 left-0 right-0 z-50 flex justify-center px-4">
      <div className="w-full max-w-7xl bg-[#1a1f26]/80 backdrop-blur-md border border-white/10 rounded-full px-6 py-2 shadow-2xl flex items-center justify-between">
        {/* Logo */}
        <div className="flex-shrink-0 pl-2">
          <Link href="/" className="text-xl font-bold tracking-tighter text-white">
            DHC<span className="text-[#00abfb]">2026</span>
          </Link>
        </div>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="text-gray-300 hover:text-white transition-colors px-3 py-1.5 rounded-full text-xs font-medium"
            >
              {link.name}
            </Link>
          ))}

          <div className="h-6 w-[1px] bg-white/20 mx-4" /> {/* Separator */}

          <Link
            href="#register"
            className="bg-[#00abfb] hover:bg-[#0091d5] text-white px-6 py-2 rounded-full font-bold text-xs uppercase tracking-wider transition-all shadow-lg hover:shadow-[#00abfb]/20"
          >
            Registration
          </Link>
        </div>

        {/* Mobile menu button */}
        <div className="lg:hidden flex items-center gap-4">
          <Link
            href="#register"
            className="bg-[#00abfb] text-white px-4 py-1.5 rounded-full font-bold text-xs uppercase"
          >
            Register
          </Link>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-full text-gray-300 hover:text-white focus:outline-none"
          >
            {isOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-20 left-4 right-4 bg-[#1a1f26]/95 backdrop-blur-xl rounded-3xl border border-white/10 p-6 lg:hidden shadow-2xl"
          >
            <div className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="text-gray-300 hover:text-white px-4 py-2 text-sm font-medium border-b border-white/5 last:border-0"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
