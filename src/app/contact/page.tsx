"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission here
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#3d4c41]/10 dark:from-gray-900 dark:to-[#3d4c41]/20">
      <main className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#3d4c41] via-[#4d5c51] to-[#2d3c31] dark:from-[#4d5c51] dark:to-[#3d4c41] drop-shadow-[0_2px_24px_rgba(61,76,65,0.25)]">
              Get in Touch
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Have a question or want to work together? I&apos;d love to hear
              from you.
            </p>
          </div>

          {/* Contact Form Section */}
          <section className="grid md:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg border border-[#3d4c41]/20 dark:border-[#3d4c41]/40 backdrop-blur-xl p-6">
                <h2 className="text-2xl font-bold mb-6 text-[#3d4c41] dark:text-[#4d5c51]">
                  Contact Information
                </h2>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#3d4c41]/10 dark:bg-[#3d4c41]/30 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-[#3d4c41] dark:text-[#4d5c51]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#3d4c41] dark:text-[#4d5c51]">
                        Email
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        tigistfseha@gmail.com
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#3d4c41]/10 dark:bg-[#3d4c41]/30 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-[#3d4c41] dark:text-[#4d5c51]"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                        />
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#3d4c41] dark:text-[#4d5c51]">
                        Phone
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        +251 937875776
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-[#3d4c41]/10 dark:bg-[#3d4c41]/30 flex items-center justify-center">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6 text-[#3d4c41] dark:text-[#4d5c51]"
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
                    </div>
                    <div>
                      <h3 className="font-semibold text-[#3d4c41] dark:text-[#4d5c51]">
                        Location
                      </h3>
                      <p className="text-gray-600 dark:text-gray-300">
                        Addis Ababa, Ethiopia
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Social Media Links */}
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg border border-[#3d4c41]/20 dark:border-[#3d4c41]/40 backdrop-blur-xl p-6">
                <h2 className="text-2xl font-bold mb-6 text-[#3d4c41] dark:text-[#4d5c51]">
                  Connect with Me
                </h2>
                <div className="flex gap-4">
                  <a
                    href="https://youtube.com/@Keyezerfu"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#3d4c41]/10 dark:bg-[#3d4c41]/30 flex items-center justify-center hover:bg-[#3d4c41]/20 dark:hover:bg-[#3d4c41]/40 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-[#3d4c41] dark:text-[#4d5c51]"
                    >
                      <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.linkedin.com/in/tigist-fiseha-432178292/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#3d4c41]/10 dark:bg-[#3d4c41]/30 flex items-center justify-center hover:bg-[#3d4c41]/20 dark:hover:bg-[#3d4c41]/40 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-[#3d4c41] dark:text-[#4d5c51]"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.instagram.com/tigist_fiseha/profilecard/?igsh=MWxsdzVvbTJ6cWlicQ=="
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#3d4c41]/10 dark:bg-[#3d4c41]/30 flex items-center justify-center hover:bg-[#3d4c41]/20 dark:hover:bg-[#3d4c41]/40 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-[#3d4c41] dark:text-[#4d5c51]"
                    >
                      <path d="M12.017 0C5.396 0 .029 5.367.029 11.987c0 6.62 5.367 11.987 11.988 11.987 6.62 0 11.987-5.367 11.987-11.987C24.014 5.367 18.637.001 12.017.001zM8.449 16.988c-1.297 0-2.448-.49-3.323-1.297C4.198 14.895 3.708 13.744 3.708 12.447s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323c-.875.807-2.026 1.297-3.323 1.297zm7.718-1.297c-.875.807-2.026 1.297-3.323 1.297s-2.448-.49-3.323-1.297c-.807-.875-1.297-2.026-1.297-3.323s.49-2.448 1.297-3.323c.875-.807 2.026-1.297 3.323-1.297s2.448.49 3.323 1.297c.807.875 1.297 2.026 1.297 3.323s-.49 2.448-1.297 3.323z" />
                    </svg>
                  </a>
                  <a
                    href="https://www.facebook.com/share/16aibGpghk/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#3d4c41]/10 dark:bg-[#3d4c41]/30 flex items-center justify-center hover:bg-[#3d4c41]/20 dark:hover:bg-[#3d4c41]/40 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-[#3d4c41] dark:text-[#4d5c51]"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  </a>
                  <a
                    href="https://t.me/+QmFrtg1HwSw2YzNk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 rounded-full bg-[#3d4c41]/10 dark:bg-[#3d4c41]/30 flex items-center justify-center hover:bg-[#3d4c41]/20 dark:hover:bg-[#3d4c41]/40 transition-colors"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-[#3d4c41] dark:text-[#4d5c51]"
                    >
                      <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm5.562 8.248-1.97 9.341c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.535.223l.188-2.85 5.18-4.686c.217-.193-.047-.3-.335-.108l-6.4 4.02-2.76-.918c-.6-.2-.613-.6.126-.89l10.777-4.155c.5-.19.94.112.775.89z" />
                    </svg>
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg border border-[#3d4c41]/20 dark:border-[#3d4c41]/40 backdrop-blur-xl p-6"
            >
              <h2 className="text-2xl font-bold mb-6 text-[#3d4c41] dark:text-[#4d5c51]">
                Send a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-[#3d4c41] dark:text-[#4d5c51] mb-1"
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-[#3d4c41]/20 dark:border-[#3d4c41]/40 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#3d4c41] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-[#3d4c41] dark:text-[#4d5c51] mb-1"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-[#3d4c41]/20 dark:border-[#3d4c41]/40 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#3d4c41] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="subject"
                    className="block text-sm font-medium text-[#3d4c41] dark:text-[#4d5c51] mb-1"
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-2 rounded-lg border border-[#3d4c41]/20 dark:border-[#3d4c41]/40 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#3d4c41] outline-none transition-colors"
                  />
                </div>
                <div>
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-[#3d4c41] dark:text-[#4d5c51] mb-1"
                  >
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border border-[#3d4c41]/20 dark:border-[#3d4c41]/40 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#3d4c41] outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 rounded-lg bg-[#3d4c41] text-white font-semibold hover:bg-[#2d3c31] transition-colors"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </section>
        </motion.div>
      </main>
    </div>
  );
}
