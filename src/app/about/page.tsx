"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 dark:from-gray-900 dark:to-pink-950/20 overflow-x-hidden">
      <main className="max-w-5xl mx-auto px-4 py-16">
        {/* Hero Section with Images */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="relative flex flex-col md:flex-row items-center gap-10 mb-16"
        >
          {/* Main Profile Image */}
          <div className="relative w-48 h-48 md:w-64 md:h-64 rounded-3xl overflow-visible flex-shrink-0">
            <div className="w-full h-full rounded-3xl overflow-hidden shadow-2xl border-4 border-pink-200 dark:border-pink-500 bg-white/40 dark:bg-pink-900/30 backdrop-blur-lg">
              <img
                src="/personla-image/1747396061958.jpg"
                alt="Tigist Fiseha profile"
                className="w-full h-full object-cover object-center rounded-3xl"
              />
            </div>
            {/* Accent Image - Overlapping Top Right */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, x: 40, y: -40, rotate: 8 }}
              animate={{ opacity: 1, scale: 1, x: 24, y: -32, rotate: 8 }}
              transition={{ delay: 0.4, type: "spring", stiffness: 60 }}
              className="absolute -top-8 right-0 w-20 h-20 md:w-28 md:h-28 rounded-2xl overflow-hidden shadow-xl border-4 border-pink-100 dark:border-pink-400 bg-white/60 dark:bg-pink-900/40 backdrop-blur-md z-10"
              style={{ boxShadow: "0 8px 32px 0 rgba(236,72,153,0.15)" }}
            >
              <img
                src="/personla-image/1747730100486.jpg"
                alt="Tigist Fiseha at work"
                className="w-full h-full object-cover object-center rounded-2xl"
              />
            </motion.div>
          </div>
          {/* Hero Text */}
          <div className="flex-1 text-center md:text-left mt-10 md:mt-0">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-5xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-fuchsia-500 to-pink-400 dark:from-pink-400 dark:to-pink-300 drop-shadow-[0_2px_24px_rgba(236,72,153,0.25)]"
            >
              Who am I?
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-4"
            >
              A multidisciplinary content creator passionate about storytelling,
              research, and digital education.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg text-pink-600 dark:text-pink-400 font-medium mb-4"
            >
              Based in Addis Ababa, Ethiopia
            </motion.p>
          </div>
        </motion.div>

        {/* Info Cards Section */}
        <div className="grid md:grid-cols-2 gap-10">
          {/* Personal Info Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 shadow-xl border-2 border-pink-100 dark:border-pink-900/40 backdrop-blur-xl"
          >
            <h2 className="text-2xl font-bold mb-6 text-pink-600 dark:text-pink-400">
              Personal Info
            </h2>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <span className="text-pink-500">📧</span>
                <span className="text-gray-600 dark:text-gray-300">
                  tigist@example.com
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-pink-500">📱</span>
                <span className="text-gray-600 dark:text-gray-300">
                  +251 123 456 789
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <span className="text-pink-500">📍</span>
                <span className="text-gray-600 dark:text-gray-300">
                  Addis Ababa, Ethiopia
                </span>
              </div>
            </div>
            <div className="mt-6">
              <h3 className="font-semibold text-gray-800 dark:text-gray-200 mb-2">
                Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {["English", "Amharic", "Gurganna"].map((lang) => (
                  <span
                    key={lang}
                    className="px-3 py-1 bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400 rounded-full text-sm"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Social Links Card */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-8 shadow-xl border-2 border-pink-100 dark:border-pink-900/40 backdrop-blur-xl flex flex-col justify-between"
          >
            <h2 className="text-2xl font-bold mb-6 text-pink-600 dark:text-pink-400">
              Connect With Me
            </h2>
            <div className="flex flex-wrap justify-center gap-6 mb-6">
              <Link
                href="https://linkedin.com/in/tigist-fiseha"
                className="flex items-center space-x-2 px-6 py-3 bg-[#0077B5] text-white rounded-lg hover:bg-[#006399] transition-colors"
              >
                <span>LinkedIn</span>
              </Link>
              <Link
                href="https://instagram.com/tigistfiseha"
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-[#833AB4] via-[#FD1D1D] to-[#F77737] text-white rounded-lg hover:opacity-90 transition-opacity"
              >
                <span>Instagram</span>
              </Link>
              <Link
                href="https://facebook.com/tigistfiseha"
                className="flex items-center space-x-2 px-6 py-3 bg-[#1877F2] text-white rounded-lg hover:bg-[#166FE5] transition-colors"
              >
                <span>Facebook</span>
              </Link>
            </div>
            <div className="text-center mt-auto">
              <Link
                href="/contact"
                className="inline-block px-8 py-3 rounded-full bg-gradient-to-r from-pink-600 to-fuchsia-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-pink-300/40 transition-transform duration-200 border-2 border-pink-400/30"
              >
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </main>
      {/* Timeline Section */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-400 dark:from-pink-400 dark:to-pink-300"
        >
          My Journey
        </motion.h2>
        <div className="relative border-l-4 border-pink-200 dark:border-pink-900/40 ml-4">
          {[
            {
              year: "2024",
              title: "Lead E-learning Content Developer",
              org: "Muyalogy",
              desc: "Developed engaging digital education content for diverse audiences.",
            },
            {
              year: "2022",
              title: "Script Writer & Journalist",
              org: "Ewqet.org & Hamer Media",
              desc: "Crafted compelling scripts and delivered impactful news stories.",
            },
            {
              year: "2020",
              title: "Podcast Host & Producer",
              org: "Keyezerfu Podcast",
              desc: "Launched and produced a successful podcast series.",
            },
            {
              year: "2018",
              title: "BA in Journalism",
              org: "Addis Ababa University",
              desc: "Graduated with honors in Journalism and Communication.",
            },
          ].map((item, idx) => (
            <motion.div
              key={item.year}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="mb-10 ml-6 relative"
            >
              <div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-fuchsia-400 border-4 border-white dark:border-gray-900 shadow-lg flex items-center justify-center text-white font-bold text-sm">
                {item.year}
              </div>
              <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg border border-pink-100 dark:border-pink-900/40 backdrop-blur-xl p-6">
                <h3 className="text-xl font-bold text-pink-600 dark:text-pink-400 mb-1">
                  {item.title}
                </h3>
                <div className="text-pink-500 dark:text-pink-300 font-semibold mb-2">
                  {item.org}
                </div>
                <div className="text-gray-600 dark:text-gray-300">
                  {item.desc}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
      {/* Skills Section */}
      <section className="max-w-5xl mx-auto px-4 py-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold mb-10 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-400 dark:from-pink-400 dark:to-pink-300"
        >
          My Skills
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-10">
          {[
            { skill: "Script Writing", level: 95 },
            { skill: "Journalism", level: 90 },
            { skill: "E-learning Development", level: 92 },
            { skill: "Podcasting", level: 88 },
            { skill: "Content Strategy", level: 85 },
          ].map((item, idx) => (
            <motion.div
              key={item.skill}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 * idx }}
              className="mb-6"
            >
              <div className="flex justify-between mb-2">
                <span className="font-semibold text-pink-600 dark:text-pink-400">
                  {item.skill}
                </span>
                <span className="font-semibold text-gray-500 dark:text-gray-300">
                  {item.level}%
                </span>
              </div>
              <div className="w-full h-4 bg-pink-100 dark:bg-pink-900/40 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: `${item.level}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.1 * idx }}
                  className="h-full bg-gradient-to-r from-pink-500 to-fuchsia-400 rounded-full shadow"
                />
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </div>
  );
}
