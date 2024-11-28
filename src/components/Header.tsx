"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const menuItems = ["Home", "Rooms", "Services", "About", "Contact"];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-xl border-b border-white/10"
    >
      {/* Top Bar */}
      <div className="py-2 border-b border-white/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-4">
              <a href="tel:+97141234567" className="flex items-center text-sm text-amber-400 hover:text-amber-300">
                <svg className="w-4 h-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                +971 4 123 4567
              </a>
              <span className="hidden sm:inline-block text-white/30">|</span>
              <span className="hidden sm:block text-sm text-white/60">Downtown Dubai, UAE</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="/contact" className="text-sm text-amber-400 hover:text-amber-300">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center space-x-3"
          >
            <Link href="/" className="flex items-center space-x-3">
              <div className="w-12 h-12 relative">
                <div className="absolute inset-0 bg-gradient-to-r from-amber-400 to-amber-600 rounded-full transform rotate-45"></div>
                <div className="absolute inset-1 bg-black rounded-full flex items-center justify-center">
                  <span className="font-playfair text-2xl font-bold text-amber-400">N</span>
                </div>
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-playfair text-2xl font-bold tracking-wider">NAJMA</span>
                <span className="text-sm text-amber-400 tracking-[0.3em] font-light">HOTELS</span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Menu */}
          <motion.nav
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="hidden md:flex items-center space-x-8"
          >
            {menuItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <Link
                  href={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
                  className="text-sm font-medium hover:text-amber-400 transition-colors"
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <Link
              href="/contact"
              className="rounded-full bg-amber-500 px-6 py-2.5 text-black text-sm font-semibold hover:bg-amber-400 transition-colors"
            >
              Book Now
            </Link>
          </motion.nav>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            <div className="space-y-2">
              <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isOpen ? 'rotate-45 translate-y-2.5' : ''}`} />
              <span className={`block w-8 h-0.5 bg-white transition-opacity duration-300 ${isOpen ? 'opacity-0' : ''}`} />
              <span className={`block w-8 h-0.5 bg-white transition-transform duration-300 ${isOpen ? '-rotate-45 -translate-y-2.5' : ''}`} />
            </div>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          initial={false}
          animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className={`md:hidden overflow-hidden`}
        >
          <div className="py-4 space-y-2">
            {menuItems.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: isOpen ? 1 : 0, x: isOpen ? 0 : -20 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
              >
                <Link
                  href={item.toLowerCase() === "home" ? "/" : `/${item.toLowerCase()}`}
                  className="block py-2 text-sm hover:text-amber-400 transition-colors"
                  onClick={() => setIsOpen(false)}
                >
                  {item}
                </Link>
              </motion.div>
            ))}
            <Link
              href="/contact"
              className="block mt-4 text-center rounded-full bg-amber-500 px-6 py-2.5 text-black text-sm font-semibold hover:bg-amber-400 transition-colors"
              onClick={() => setIsOpen(false)}
            >
              Book Now
            </Link>
          </div>
        </motion.div>
      </div>
    </motion.header>
  );
}
