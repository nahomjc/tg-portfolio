"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function About() {
  const skills = [
    {
      category: "Content Creation",
      items: ["Script Writing", "Digital Storytelling", "Educational Content"],
    },
    {
      category: "Media Production",
      items: ["Podcasting", "Video Production", "News Broadcasting"],
    },
    {
      category: "Education",
      items: ["E-learning Development", "Curriculum Design", "Teaching"],
    },
  ];

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
              About Me
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A passionate content creator and educator dedicated to making a
              difference through storytelling and digital media.
            </p>
          </div>

          {/* Profile Section */}
          <section className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square rounded-2xl overflow-hidden shadow-xl border-4 border-[#3d4c41]/20 dark:border-[#3d4c41]/40">
                <Image
                  src="/personla-image/image-12.jpg"
                  alt="Tigist Fiseha"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#3d4c41]/10 dark:bg-[#3d4c41]/30 rounded-full blur-2xl" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-[#3d4c41] dark:text-[#4d5c51]">
                My Journey
              </h2>
              <p className="text-gray-600 dark:text-gray-300">
                With a background in literature and a passion for digital media,
                I&apos;ve dedicated my career to creating engaging content that
                educates and inspires. My journey has taken me through various
                roles in journalism, education, and digital content creation.
              </p>
              <p className="text-gray-600 dark:text-gray-300">
                I believe in the power of storytelling to connect people and
                share knowledge. Whether it&apos;s through educational content,
                podcasts, or news broadcasting, I strive to make information
                accessible and engaging for all audiences.
              </p>
            </motion.div>
          </section>

          {/* Skills Section */}
          <section>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl font-bold text-center mb-12 text-[#3d4c41] dark:text-[#4d5c51]"
            >
              Skills & Expertise
            </motion.h2>
            <div className="grid md:grid-cols-3 gap-8">
              {skills.map((skillGroup, index) => (
                <motion.div
                  key={skillGroup.category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg border border-[#3d4c41]/20 dark:border-[#3d4c41]/40 backdrop-blur-xl p-6"
                >
                  <h3 className="text-xl font-semibold mb-4 text-[#3d4c41] dark:text-[#4d5c51]">
                    {skillGroup.category}
                  </h3>
                  <ul className="space-y-2">
                    {skillGroup.items.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-gray-600 dark:text-gray-300"
                      >
                        <span className="w-2 h-2 rounded-full bg-[#3d4c41] dark:bg-[#4d5c51]" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Mission Statement */}
          <section className="bg-white/80 dark:bg-gray-800/80 rounded-2xl shadow-xl border border-[#3d4c41]/20 dark:border-[#3d4c41]/40 backdrop-blur-xl p-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center max-w-3xl mx-auto"
            >
              <h2 className="text-3xl font-bold mb-6 text-[#3d4c41] dark:text-[#4d5c51]">
                My Mission
              </h2>
              <p className="text-lg text-gray-600 dark:text-gray-300">
                To create meaningful content that educates, inspires, and
                connects people. Through my work in digital media and education,
                I aim to make knowledge accessible and engaging for everyone.
              </p>
            </motion.div>
          </section>
        </motion.div>
      </main>
    </div>
  );
}
