"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ThemeToggle } from "../app/components/ThemeLayout";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/resume", label: "Resume" },
    { href: "/portfolio", label: "Portfolio" },
    { href: "/blog", label: "Blog" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className="fixed top-0 w-full bg-white/70 dark:bg-gray-900/70 backdrop-blur-xl border-b border-[#3d4c41]/20 dark:border-[#3d4c41]/40 shadow-lg z-50 rounded-b-2xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-3 group">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5 }}
                className="w-10 h-10 rounded-full bg-gradient-to-br from-[#3d4c41] via-[#4d5c51] to-[#2d3c31] flex items-center justify-center text-white font-extrabold text-lg shadow-lg border-2 border-white dark:border-[#3d4c41] group-hover:shadow-[#3d4c41]/40 transition-shadow duration-300 relative"
              >
                <span className="drop-shadow-[0_2px_12px_rgba(61,76,65,0.25)]">
                  TF
                </span>
                <span className="absolute -bottom-1 -right-1 w-3 h-3 bg-[#3d4c41] rounded-full blur-sm animate-pulse" />
              </motion.div>
              <span className="w-1 h-8 bg-gradient-to-b from-[#3d4c41] to-[#4d5c51] rounded-full hidden md:inline-block" />
              <span className="text-2xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#3d4c41] via-[#4d5c51] to-[#2d3c31] dark:from-[#4d5c51] dark:to-[#3d4c41] tracking-tight">
                Tigist Fiseha
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="relative px-2 py-1 font-semibold text-[#3d4c41] dark:text-[#4d5c51] transition group"
              >
                <span className="relative z-10">{item.label}</span>
                <span className="absolute left-0 bottom-0 w-full h-0.5 bg-gradient-to-r from-[#3d4c41] to-[#4d5c51] rounded-full scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left z-0" />
              </Link>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden flex items-center space-x-2">
            <ThemeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-[#3d4c41] dark:text-[#4d5c51] hover:text-[#2d3c31] dark:hover:text-[#3d4c41] focus:outline-none"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className={`${isOpen ? "hidden" : "block"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
              <svg
                className={`${isOpen ? "block" : "hidden"} h-6 w-6`}
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl border-b border-[#3d4c41]/20 dark:border-[#3d4c41]/40 shadow-lg rounded-b-2xl"
          >
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="block px-3 py-2 rounded-md text-base font-semibold text-[#3d4c41] dark:text-[#4d5c51] hover:bg-[#3d4c41]/10 dark:hover:bg-[#3d4c41]/30 transition"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
