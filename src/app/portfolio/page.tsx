"use client";

import { motion } from "framer-motion";

export default function Portfolio() {
  const projects = [
    {
      title: "E-learning Content Development",
      description:
        "Created comprehensive educational materials for online courses, focusing on interactive learning experiences and student engagement.",
      category: "E-learning",
      image:
        "https://plus.unsplash.com/premium_photo-1720503965220-10ea698bf0aa?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Content Creation", "Educational Design", "Digital Learning"],
    },
    {
      title: "Script Writing for Digital Media",
      description:
        "Developed compelling narratives and scripts for various digital platforms, ensuring engaging storytelling and clear communication.",
      category: "Writing",
      image:
        "https://plus.unsplash.com/premium_photo-1683491155621-cd42e847d646?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Storytelling", "Digital Media", "Content Strategy"],
    },
    {
      title: "News Broadcasting",
      description:
        "Delivered impactful news coverage and reporting, maintaining high journalistic standards and engaging presentation.",
      category: "Journalism",
      image:
        "https://images.unsplash.com/photo-1581092802858-671713398c0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["News Reporting", "Broadcasting", "Media Production"],
    },
    {
      title: "Podcast Production",
      description:
        "Produced and hosted educational podcasts, creating engaging audio content for diverse audiences.",
      category: "Podcasting",
      image:
        "https://plus.unsplash.com/premium_photo-1679079456041-732c3be113f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: ["Audio Production", "Content Creation", "Digital Media"],
    },
  ];
  const categories = [
    "All",
    "E-learning",
    "Writing",
    "Journalism",
    "Podcasting",
  ];
  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#3d4c41]/10 dark:from-gray-900 dark:to-[#3d4c41]/20">
      <main className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-12"
        >
          {/* Header */}
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#3d4c41] to-[#2d3c31] dark:from-[#4d5c51] dark:to-[#3d4c41]">
              My Portfolio
            </h1>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto mb-4">
              A collection of my work across various media and content creation
              disciplines.
            </p>
            {/* Category Filter (static) */}
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {categories.map((cat, idx) => (
                <button
                  key={cat}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border-2 border-[#3d4c41]/20 dark:border-[#3d4c41]/40 ${
                    idx === 0
                      ? "bg-[#3d4c41] text-white"
                      : "bg-white/80 dark:bg-gray-900/60 text-[#3d4c41] dark:text-[#4d5c51] hover:bg-[#3d4c41]/10 dark:hover:bg-[#3d4c41]/20"
                  }`}
                  disabled={idx === 0}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="relative bg-white/80 dark:bg-gray-800/80 rounded-2xl overflow-hidden shadow-xl border-2 border-[#3d4c41]/20 dark:border-[#3d4c41]/40 backdrop-blur-xl hover:scale-105 hover:shadow-[#3d4c41]/40 transition-transform duration-300 group"
              >
                {/* Project Image */}
                <div className="aspect-video bg-[#3d4c41]/10 dark:bg-[#3d4c41]/50 relative overflow-hidden">
                  {project.image ? (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300"
                    />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center text-[#3d4c41]">
                      <span className="text-4xl">📸</span>
                    </div>
                  )}
                  <div className="absolute top-2 left-2 px-3 py-1 bg-[#3d4c41]/10 dark:bg-[#3d4c41]/60 text-[#3d4c41] dark:text-[#4d5c51] rounded-full text-xs font-semibold shadow">
                    {project.category}
                  </div>
                </div>
                <div className="p-6 flex flex-col h-full">
                  <h3 className="text-xl font-semibold text-[#3d4c41] dark:text-[#4d5c51] mb-2">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 flex-1">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-[#3d4c41]/10 dark:bg-[#3d4c41]/30 text-[#3d4c41] dark:text-[#4d5c51] rounded text-xs font-medium"
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
