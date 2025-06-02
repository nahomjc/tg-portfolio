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
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 dark:from-gray-900 dark:to-pink-950/20">
      <main className="max-w-4xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-400 dark:from-pink-400 dark:to-pink-300">
              Resume
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              My professional journey and educational background
            </p>
          </div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-pink-100 dark:border-pink-900/50"
          >
            <h2 className="text-2xl font-bold mb-8 text-pink-600 dark:text-pink-400">
              Professional Experience
            </h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="relative pl-8 border-l-2 border-pink-200 dark:border-pink-800"
                >
                  <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-pink-500" />
                  <div className="mb-2">
                    <h3 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                      {exp.title}
                    </h3>
                    <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                      <span>{exp.company}</span>
                      <span>•</span>
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <ul className="list-disc list-inside space-y-2 text-gray-600 dark:text-gray-300">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white dark:bg-gray-800 rounded-xl p-8 shadow-lg border border-pink-100 dark:border-pink-900/50"
          >
            <h2 className="text-2xl font-bold mb-8 text-pink-600 dark:text-pink-400">
              Education
            </h2>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 * index }}
                  className="flex items-center justify-between p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg"
                >
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {edu.institution}
                    </p>
                  </div>
                  <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400 rounded-full text-sm">
                    {edu.year}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </main>
    </div>
  );
}
