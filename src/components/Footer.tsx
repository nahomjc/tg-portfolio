"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/80 dark:bg-gray-800/80 border-t border-[#3d4c41]/20 dark:border-[#3d4c41]/40 backdrop-blur-xl overflow-hidden">
      <div className="max-w-6xl mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {/* Brand Section */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <Link href="/" className="inline-block">
              <h2 className="text-xl sm:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3d4c41] via-[#4d5c51] to-[#2d3c31] dark:from-[#4d5c51] dark:to-[#3d4c41] break-words">
                Tigist Fiseha
              </h2>
            </Link>
            <p className="mt-3 sm:mt-4 text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
              Creating meaningful content that educates, inspires, and connects
              people.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-[#3d4c41] dark:text-[#4d5c51] mb-3 sm:mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#3d4c41] dark:hover:text-[#4d5c51] transition-colors text-sm sm:text-base"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#3d4c41] dark:hover:text-[#4d5c51] transition-colors text-sm sm:text-base"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#3d4c41] dark:hover:text-[#4d5c51] transition-colors text-sm sm:text-base"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/resume"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#3d4c41] dark:hover:text-[#4d5c51] transition-colors text-sm sm:text-base"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-[#3d4c41] dark:text-[#4d5c51] mb-3 sm:mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#3d4c41] dark:text-[#4d5c51] flex-shrink-0 mt-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                <span className="text-sm sm:text-base break-all">
                  tigistfseha@gmail.com
                </span>
              </li>
              <li className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#3d4c41] dark:text-[#4d5c51] flex-shrink-0 mt-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span className="text-sm sm:text-base">+251 937875776</span>
              </li>
              <li className="flex items-start gap-2 text-gray-600 dark:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#3d4c41] dark:text-[#4d5c51] flex-shrink-0 mt-0.5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z"
                  />
                </svg>
                <span className="text-sm sm:text-base">
                  Addis Ababa, Ethiopia
                </span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="col-span-1 sm:col-span-2 lg:col-span-1">
            <h3 className="text-base sm:text-lg font-semibold text-[#3d4c41] dark:text-[#4d5c51] mb-3 sm:mb-4">
              Follow Me
            </h3>
            <div className="flex flex-wrap gap-2 sm:gap-4">
              <a
                href="https://youtube.com/@Keyezerfu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#3d4c41]/10 dark:bg-[#3d4c41]/30 flex items-center justify-center hover:bg-[#3d4c41]/20 dark:hover:bg-[#3d4c41]/40 transition-colors"
                aria-label="YouTube"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#3d4c41] dark:text-[#4d5c51]"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/tigist-fiseha-432178292/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#3d4c41]/10 dark:bg-[#3d4c41]/30 flex items-center justify-center hover:bg-[#3d4c41]/20 dark:hover:bg-[#3d4c41]/40 transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#3d4c41] dark:text-[#4d5c51]"
                >
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/tigist_fiseha/profilecard/?igsh=MWxsdzVvbTJ6cWlicQ=="
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#3d4c41]/10 dark:bg-[#3d4c41]/30 flex items-center justify-center hover:bg-[#3d4c41]/20 dark:hover:bg-[#3d4c41]/40 transition-colors"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#3d4c41] dark:text-[#4d5c51]"
                >
                  <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z" />
                </svg>
              </a>
              <a
                href="https://www.facebook.com/share/16aibGpghk/?mibextid=wwXIfr"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#3d4c41]/10 dark:bg-[#3d4c41]/30 flex items-center justify-center hover:bg-[#3d4c41]/20 dark:hover:bg-[#3d4c41]/40 transition-colors"
                aria-label="Facebook"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#3d4c41] dark:text-[#4d5c51]"
                >
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                </svg>
              </a>
              <a
                href="https://t.me/+QmFrtg1HwSw2YzNk"
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-[#3d4c41]/10 dark:bg-[#3d4c41]/30 flex items-center justify-center hover:bg-[#3d4c41]/20 dark:hover:bg-[#3d4c41]/40 transition-colors"
                aria-label="Telegram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-4 h-4 sm:w-5 sm:h-5 text-[#3d4c41] dark:text-[#4d5c51]"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.562 8.248-1.97 9.341c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.535.223l.188-2.85 5.18-4.686c.217-.193-.047-.3-.335-.108l-6.4 4.02-2.76-.918c-.6-.2-.613-.6.126-.89l10.777-4.155c.5-.19.94.112.775.89z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 sm:mt-12 pt-6 sm:pt-8 border-t border-[#3d4c41]/20 dark:border-[#3d4c41]/40">
          <p className="text-center text-gray-600 dark:text-gray-300 text-xs sm:text-sm">
            © {currentYear} Tigist Fiseha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
