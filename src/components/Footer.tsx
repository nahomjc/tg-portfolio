"use client";

import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/80 dark:bg-gray-800/80 border-t border-[#3d4c41]/20 dark:border-[#3d4c41]/40 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="col-span-2 md:col-span-1">
            <Link href="/" className="inline-block">
              <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#3d4c41] via-[#4d5c51] to-[#2d3c31] dark:from-[#4d5c51] dark:to-[#3d4c41]">
                Tigist Fiseha
              </h2>
            </Link>
            <p className="mt-4 text-gray-600 dark:text-gray-300 text-sm">
              Creating meaningful content that educates, inspires, and connects
              people.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#3d4c41] dark:text-[#4d5c51] mb-4">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#3d4c41] dark:hover:text-[#4d5c51] transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#3d4c41] dark:hover:text-[#4d5c51] transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#3d4c41] dark:hover:text-[#4d5c51] transition-colors"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/resume"
                  className="text-gray-600 dark:text-gray-300 hover:text-[#3d4c41] dark:hover:text-[#4d5c51] transition-colors"
                >
                  Resume
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-[#3d4c41] dark:text-[#4d5c51] mb-4">
              Contact
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-[#3d4c41] dark:text-[#4d5c51]"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                  />
                </svg>
                contact@tigistfiseha.com
              </li>
              <li className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="w-5 h-5 text-[#3d4c41] dark:text-[#4d5c51]"
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
                Addis Ababa, Ethiopia
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h3 className="text-lg font-semibold text-[#3d4c41] dark:text-[#4d5c51] mb-4">
              Follow Me
            </h3>
            <div className="flex gap-4">
              <a
                href="https://youtube.com/@Keyezerfu"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#3d4c41]/10 dark:bg-[#3d4c41]/30 flex items-center justify-center hover:bg-[#3d4c41]/20 dark:hover:bg-[#3d4c41]/40 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-[#3d4c41] dark:text-[#4d5c51]"
                >
                  <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                </svg>
              </a>
              <a
                href="https://t.me/yourtelegramchannel"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-[#3d4c41]/10 dark:bg-[#3d4c41]/30 flex items-center justify-center hover:bg-[#3d4c41]/20 dark:hover:bg-[#3d4c41]/40 transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  className="w-5 h-5 text-[#3d4c41] dark:text-[#4d5c51]"
                >
                  <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.562 8.248-1.97 9.341c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.535.223l.188-2.85 5.18-4.686c.217-.193-.047-.3-.335-.108l-6.4 4.02-2.76-.918c-.6-.2-.613-.6.126-.89l10.777-4.155c.5-.19.94.112.775.89z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-[#3d4c41]/20 dark:border-[#3d4c41]/40">
          <p className="text-center text-gray-600 dark:text-gray-300 text-sm">
            © {currentYear} Tigist Fiseha. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
