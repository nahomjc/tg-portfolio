"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";

export default function Portfolio() {
  const projects = [
    {
      id: 1,
      slug: "e-learning-content-development",
      title: "E-learning Content Development",
      subtitle: "Muyalogy - Educational Technology Platform",
      description:
        "Led comprehensive e-learning content development for Muyalogy, creating engaging educational materials that enhance student learning experiences across diverse subjects.",
      category: "E-learning",
      image:
        "https://plus.unsplash.com/premium_photo-1720503965220-10ea698bf0aa?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: [
        "Content Creation",
        "Educational Design",
        "Digital Learning",
        "Curriculum Development",
      ],
      details: {
        company: "Muyalogy",
        role: "Senior E-learning Content Developer",
        duration: "2023 - Present",
        technologies: [
          "Articulate Storyline",
          "Adobe Captivate",
          "Moodle LMS",
          "SCORM",
          "HTML5",
        ],
        achievements: [
          "Developed 50+ interactive e-learning modules across multiple subjects",
          "Increased student engagement by 40% through gamified learning elements",
          "Created accessible content compliant with WCAG 2.1 standards",
          "Reduced course development time by 30% through standardized templates",
          "Mentored junior content developers and established best practices",
        ],
        challenges: [
          "Adapting complex subjects into digestible digital formats",
          "Ensuring content accessibility for diverse learning needs",
          "Maintaining consistency across multiple course modules",
          "Integrating multimedia elements for enhanced engagement",
        ],
        solutions: [
          "Implemented microlearning strategies for better knowledge retention",
          "Created comprehensive accessibility guidelines and checklists",
          "Developed reusable component library for consistent design",
          "Utilized interactive simulations and real-world scenarios",
        ],
      },
    },
    {
      id: 2,
      slug: "script-writing-digital-media",
      title: "Script Writing for Digital Media",
      subtitle: "Ewqet.org - Digital Storytelling Platform",
      description:
        "Developed compelling narratives and scripts for various digital platforms, ensuring engaging storytelling and clear communication across multiple media formats.",
      category: "Writing",
      image:
        "https://plus.unsplash.com/premium_photo-1683491155621-cd42e847d646?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: [
        "Storytelling",
        "Digital Media",
        "Content Strategy",
        "Script Development",
      ],
      details: {
        company: "Ewqet.org",
        role: "Lead Script Writer",
        duration: "2022 - Present",
        technologies: [
          "Final Draft",
          "Adobe Premiere",
          "Storyboarding",
          "Content Management Systems",
        ],
        achievements: [
          "Wrote 100+ scripts for educational and entertainment content",
          "Increased viewer retention by 35% through improved storytelling",
          "Developed brand voice guidelines for consistent messaging",
          "Collaborated with production teams to optimize content delivery",
          "Created multilingual content for international audiences",
        ],
        challenges: [
          "Balancing educational value with entertainment appeal",
          "Adapting content for different cultural contexts",
          "Meeting tight production deadlines",
          "Maintaining narrative consistency across series",
        ],
        solutions: [
          "Implemented audience research-driven content strategies",
          "Created cultural adaptation frameworks",
          "Established efficient script development workflows",
          "Developed comprehensive story bible and character guides",
        ],
      },
    },
    {
      id: 3,
      slug: "news-broadcasting",
      title: "News Broadcasting",
      subtitle: "Hamer Media - Professional News Coverage",
      description:
        "Delivered impactful news coverage and reporting, maintaining high journalistic standards and engaging presentation across various news formats.",
      category: "Journalism",
      image:
        "https://images.unsplash.com/photo-1581092802858-671713398c0b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: [
        "News Reporting",
        "Broadcasting",
        "Media Production",
        "Investigative Journalism",
      ],
      details: {
        company: "Hamer Media",
        role: "News Anchor & Reporter",
        duration: "2021 - 2023",
        technologies: [
          "Adobe Premiere Pro",
          "Live Broadcasting Systems",
          "News Management Software",
          "Social Media Platforms",
        ],
        achievements: [
          "Anchored 200+ live news broadcasts reaching 500K+ viewers",
          "Conducted 50+ exclusive interviews with key political figures",
          "Led investigative reporting on major social issues",
          "Increased social media engagement by 60%",
          "Mentored junior reporters and interns",
        ],
        challenges: [
          "Delivering breaking news under pressure",
          "Maintaining objectivity in sensitive stories",
          "Adapting to rapidly changing news cycles",
          "Balancing speed with accuracy in reporting",
        ],
        solutions: [
          "Developed rapid fact-checking protocols",
          "Created editorial guidelines for sensitive topics",
          "Implemented flexible newsroom workflows",
          "Established reliable source verification systems",
        ],
      },
    },
    {
      id: 4,
      slug: "podcast-production",
      title: "Podcast Production",
      subtitle: "Keyezerfu - Educational Audio Content",
      description:
        "Produced and hosted educational podcasts, creating engaging audio content for diverse audiences across various educational topics.",
      category: "Podcasting",
      image:
        "https://plus.unsplash.com/premium_photo-1679079456041-732c3be113f9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      tags: [
        "Audio Production",
        "Content Creation",
        "Digital Media",
        "Educational Podcasting",
      ],
      details: {
        company: "Keyezerfu",
        role: "Podcast Host & Producer",
        duration: "2020 - Present",
        technologies: [
          "Adobe Audition",
          "Pro Tools",
          "Zoom",
          "Anchor.fm",
          "Spotify for Podcasters",
        ],
        achievements: [
          "Produced 150+ podcast episodes with 100K+ downloads",
          "Featured 50+ expert guests from various fields",
          "Built engaged community of 10K+ listeners",
          "Monetized podcast through sponsorships and partnerships",
          "Expanded to multiple podcast series",
        ],
        challenges: [
          "Maintaining consistent episode quality",
          "Growing audience in competitive podcast market",
          "Scheduling and coordinating guest appearances",
          "Balancing educational content with entertainment",
        ],
        solutions: [
          "Implemented content calendar and production schedules",
          "Developed strategic marketing and promotion plans",
          "Created efficient guest booking and preparation systems",
          "Established clear content themes and episode formats",
        ],
      },
    },
  ];

  const categories = [
    "All",
    "E-learning",
    "Writing",
    "Journalism",
    "Podcasting",
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

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
              disciplines, showcasing expertise in e-learning, journalism, and
              digital storytelling.
            </p>
            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 mt-4">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 border-2 border-[#3d4c41]/20 dark:border-[#3d4c41]/40 ${
                    activeCategory === cat
                      ? "bg-[#3d4c41] text-white"
                      : "bg-white/80 dark:bg-gray-900/60 text-[#3d4c41] dark:text-[#4d5c51] hover:bg-[#3d4c41]/10 dark:hover:bg-[#3d4c41]/20"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
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

                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#3d4c41] dark:text-[#4d5c51] mb-1">
                    {project.title}
                  </h3>
                  <p className="text-sm text-[#3d4c41]/70 dark:text-[#4d5c51]/70 mb-3 font-medium">
                    {project.subtitle}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300 mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Quick Info */}
                  <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                    <div>
                      <span className="font-semibold text-[#3d4c41] dark:text-[#4d5c51]">
                        Company:
                      </span>
                      <p className="text-gray-600 dark:text-gray-300">
                        {project.details.company}
                      </p>
                    </div>
                    <div>
                      <span className="font-semibold text-[#3d4c41] dark:text-[#4d5c51]">
                        Duration:
                      </span>
                      <p className="text-gray-600 dark:text-gray-300">
                        {project.details.duration}
                      </p>
                    </div>
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 bg-[#3d4c41]/10 dark:bg-[#3d4c41]/30 text-[#3d4c41] dark:text-[#4d5c51] rounded text-xs font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags.length > 3 && (
                      <span className="px-2 py-1 bg-[#3d4c41]/10 dark:bg-[#3d4c41]/30 text-[#3d4c41] dark:text-[#4d5c51] rounded text-xs font-medium">
                        +{project.tags.length - 3}
                      </span>
                    )}
                  </div>

                  {/* View Details Button */}
                  <Link
                    href={`/portfolio/${project.slug}`}
                    className="inline-block w-full text-center px-4 py-3 bg-[#3d4c41] text-white rounded-lg text-sm font-medium hover:bg-[#2d3c31] transition-colors duration-200"
                  >
                    View Details
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
