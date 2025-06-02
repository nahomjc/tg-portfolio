"use client";

import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "E-learning Content Development",
      description:
        "Created comprehensive educational materials for online courses, focusing on interactive learning experiences and student engagement.",
      category: "E-learning",
      image: "/images/e-learning.jpg",
      tags: ["Content Creation", "Educational Design", "Digital Learning"],
    },
    {
      title: "Script Writing for Digital Media",
      description:
        "Developed compelling narratives and scripts for various digital platforms, ensuring engaging storytelling and clear communication.",
      category: "Writing",
      image: "/images/script-writing.jpg",
      tags: ["Storytelling", "Digital Media", "Content Strategy"],
    },
    {
      title: "News Broadcasting",
      description:
        "Delivered impactful news coverage and reporting, maintaining high journalistic standards and engaging presentation.",
      category: "Journalism",
      image: "/images/broadcasting.jpg",
      tags: ["News Reporting", "Broadcasting", "Media Production"],
    },
    {
      title: "Podcast Production",
      description:
        "Produced and hosted educational podcasts, creating engaging audio content for diverse audiences.",
      category: "Podcasting",
      image: "/images/podcast.jpg",
      tags: ["Audio Production", "Content Creation", "Digital Media"],
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-pink-50 dark:from-gray-900 dark:to-pink-950/20">
      <main className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-400 dark:from-pink-400 dark:to-pink-300">
              My Portfolio
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              A collection of my work across various media and content creation
              disciplines
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-pink-100 dark:border-pink-900/50 hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-pink-100 dark:bg-pink-900/50 relative">
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center text-pink-500">
                    <span className="text-4xl">📸</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="text-xl font-semibold text-pink-600 dark:text-pink-400">
                      {project.title}
                    </h3>
                    <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400 rounded-full text-sm">
                      {project.category}
                    </span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
