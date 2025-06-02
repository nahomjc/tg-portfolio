"use client";

import { motion } from "framer-motion";

export default function Resume() {
  const experiences = [
    {
      title: "E-learning Content Developer",
      company: "Muyalogy",
      period: "2023 - Present",
      description: [
        "Develop comprehensive educational materials for online courses",
        "Create interactive learning experiences",
        "Design engaging content for diverse learning styles",
      ],
    },
    {
      title: "Script Writer",
      company: "Ewqet.org",
      period: "2022 - 2023",
      description: [
        "Develop compelling narratives for digital media",
        "Create engaging storytelling content",
        "Collaborate with production teams",
      ],
    },
    {
      title: "News Anchor",
      company: "Hamer Media",
      period: "2021 - 2022",
      description: [
        "Deliver news broadcasts with professional presentation",
        "Conduct interviews and research",
        "Maintain high journalistic standards",
      ],
    },
    {
      title: "Content Writer/Host",
      company: "Fayda Academy",
      period: "2020 - 2021",
      description: [
        "Create educational content for digital platforms",
        "Host educational sessions and workshops",
        "Develop content strategies",
      ],
    },
    {
      title: "Communications Officer",
      company: "NEBE",
      period: "2019 - 2020",
      description: [
        "Manage internal and external communications",
        "Develop communication strategies",
        "Coordinate with various departments",
      ],
    },
    {
      title: "Teacher",
      company: "Progress Academy",
      period: "2018 - 2019",
      description: [
        "Develop and implement lesson plans",
        "Create engaging learning materials",
        "Monitor student progress",
      ],
    },
  ];

  const education = [
    {
      degree: "MA in Literature",
      institution: "Bahir Dar University",
      year: "2023",
    },
    {
      degree: "BA in Ethiopian Language & Literature",
      institution: "Bahir Dar University",
      year: "2021",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 dark:from-gray-900 dark:to-pink-950/20 overflow-x-hidden">
      <main className="max-w-5xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-16"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-fuchsia-500 to-pink-400 dark:from-pink-400 dark:to-pink-300 drop-shadow-[0_2px_24px_rgba(236,72,153,0.25)]">
              Resume
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My professional journey and educational background
            </p>
          </div>

          {/* Experience Timeline Section */}
          <section>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold mb-10 text-pink-600 dark:text-pink-400 text-center"
            >
              Professional Experience
            </motion.h2>
            <div className="relative border-l-4 border-pink-200 dark:border-pink-900/40 ml-4">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="mb-10 ml-6 relative"
                >
                  <div className="absolute -left-8 top-0 w-6 h-6 rounded-full bg-gradient-to-br from-pink-400 to-fuchsia-400 border-4 border-white dark:border-gray-900 shadow-lg flex items-center justify-center text-white font-bold text-base">
                    <span>💼</span>
                  </div>
                  <div className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg border border-pink-100 dark:border-pink-900/40 backdrop-blur-xl p-6">
                    <div className="flex items-center justify-between mb-2">
                      <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-400">
                        {exp.title}
                      </h3>
                      <span className="text-xs px-3 py-1 bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400 rounded-full font-semibold">
                        {exp.period}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400 mb-2">
                      <span>{exp.company}</span>
                    </div>
                    <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                      {exp.description.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </section>

          {/* Education Section */}
          <section>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-2xl md:text-3xl font-bold mb-10 text-pink-600 dark:text-pink-400 text-center"
            >
              Education
            </motion.h2>
            <div className="grid md:grid-cols-2 gap-10">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index }}
                  className="bg-white/80 dark:bg-gray-800/80 rounded-xl shadow-lg border border-pink-100 dark:border-pink-900/40 backdrop-blur-xl p-6 flex flex-col justify-between"
                >
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-400 to-fuchsia-400 flex items-center justify-center text-white text-2xl shadow">
                      🎓
                    </div>
                    <div>
                      <h3 className="text-lg font-semibold text-pink-600 dark:text-pink-400">
                        {edu.degree}
                      </h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {edu.institution}
                      </p>
                    </div>
                  </div>
                  <span className="self-end px-3 py-1 bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400 rounded-full text-sm font-semibold">
                    {edu.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </section>
        </motion.div>
      </main>
    </div>
  );
}
