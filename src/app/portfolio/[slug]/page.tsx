"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";

export default function ProjectDetail() {
  const params = useParams();
  const projectSlug = params.slug as string;
  const [activeTab, setActiveTab] = useState("overview");

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
          "JavaScript",
          "CSS3",
          "Responsive Design",
        ],
        achievements: [
          "Developed 50+ interactive e-learning modules across multiple subjects",
          "Increased student engagement by 40% through gamified learning elements",
          "Created accessible content compliant with WCAG 2.1 standards",
          "Reduced course development time by 30% through standardized templates",
          "Mentored junior content developers and established best practices",
          "Implemented learning analytics to track student progress and improve content effectiveness",
          "Collaborated with subject matter experts to ensure content accuracy and relevance",
        ],
        challenges: [
          "Adapting complex subjects into digestible digital formats",
          "Ensuring content accessibility for diverse learning needs",
          "Maintaining consistency across multiple course modules",
          "Integrating multimedia elements for enhanced engagement",
          "Meeting tight deadlines while maintaining quality standards",
          "Balancing interactivity with content depth",
        ],
        solutions: [
          "Implemented microlearning strategies for better knowledge retention",
          "Created comprehensive accessibility guidelines and checklists",
          "Developed reusable component library for consistent design",
          "Utilized interactive simulations and real-world scenarios",
          "Established agile development workflows with regular quality checkpoints",
          "Created modular content architecture for flexible course assembly",
        ],
        companyInfo: {
          name: "Muyalogy",
          industry: "Educational Technology",
          description:
            "Muyalogy is a leading educational technology company specializing in digital learning solutions. The company focuses on creating innovative e-learning platforms that make education accessible, engaging, and effective for learners worldwide. With a mission to transform traditional education through technology, Muyalogy develops comprehensive learning management systems, interactive course content, and educational tools that cater to diverse learning styles and needs.",
          services: [
            "Learning Management Systems (LMS)",
            "Interactive E-learning Content",
            "Educational Mobile Applications",
            "Corporate Training Solutions",
            "Student Assessment Tools",
            "Learning Analytics and Reporting",
          ],
          targetAudience: [
            "K-12 Educational Institutions",
            "Higher Education Universities",
            "Corporate Training Departments",
            "Professional Development Organizations",
            "Individual Learners",
          ],
        },
        projectScope: {
          overview:
            "Led the development of comprehensive e-learning content for Muyalogy's educational platform, focusing on creating engaging, accessible, and effective learning experiences for diverse student populations.",
          objectives: [
            "Create interactive e-learning modules for multiple subjects",
            "Ensure accessibility compliance for all learners",
            "Implement gamification elements to increase engagement",
            "Develop standardized templates for efficient content creation",
            "Establish quality assurance processes for content delivery",
          ],
          deliverables: [
            "50+ interactive e-learning modules",
            "Accessibility compliance documentation",
            "Content development templates and guidelines",
            "Quality assurance checklists and processes",
            "Training materials for content developers",
          ],
        },
        technicalDetails: {
          platforms: [
            "Web-based LMS",
            "Mobile Learning Apps",
            "Desktop Applications",
          ],
          authoringTools: [
            "Articulate Storyline 360",
            "Adobe Captivate",
            "Camtasia Studio",
          ],
          technologies: [
            "HTML5",
            "CSS3",
            "JavaScript",
            "SCORM 1.2/2004",
            "xAPI (Tin Can)",
          ],
          accessibility: [
            "WCAG 2.1 AA Compliance",
            "Screen Reader Compatibility",
            "Keyboard Navigation",
            "High Contrast Support",
          ],
          multimedia: [
            "Interactive Videos",
            "Audio Narration",
            "Animations",
            "Simulations",
            "Gamification Elements",
          ],
        },
        impact: {
          metrics: [
            "40% increase in student engagement",
            "30% reduction in course development time",
            "50+ modules delivered on schedule",
            "100% accessibility compliance achieved",
            "95% positive student feedback",
          ],
          testimonials: [
            {
              quote:
                "The e-learning content developed by Tigist has transformed how our students engage with course material. The interactive elements and accessibility features have made learning more inclusive and effective.",
              author: "Dr. Sarah Johnson",
              role: "Director of Digital Learning, Muyalogy",
            },
            {
              quote:
                "Working with Tigist on our e-learning projects has been exceptional. Her attention to detail, understanding of educational principles, and technical expertise have consistently delivered outstanding results.",
              author: "Michael Chen",
              role: "Product Manager, Muyalogy",
            },
          ],
        },
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

  const project = projects.find((p) => p.slug === projectSlug);

  if (!project) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-white to-[#3d4c41]/10 dark:from-gray-900 dark:to-[#3d4c41]/20 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-[#3d4c41] dark:text-[#4d5c51] mb-4">
            Project Not Found
          </h1>
          <Link
            href="/portfolio"
            className="text-[#3d4c41] dark:text-[#4d5c51] hover:underline"
          >
            ← Back to Portfolio
          </Link>
        </div>
      </div>
    );
  }

  const tabs = [
    { id: "overview", label: "Overview" },
    { id: "company", label: "Company" },
    { id: "technical", label: "Technical Details" },
    { id: "impact", label: "Impact & Results" },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#3d4c41]/10 dark:from-gray-900 dark:to-[#3d4c41]/20">
      <main className="max-w-6xl mx-auto px-4 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Back Button */}
          <Link
            href="/portfolio"
            className="inline-flex items-center text-[#3d4c41] dark:text-[#4d5c51] hover:text-[#2d3c31] dark:hover:text-[#3d4c41] transition-colors duration-200 mb-8"
          >
            <svg
              className="w-5 h-5 mr-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 19l-7-7 7-7"
              />
            </svg>
            Back to Portfolio
          </Link>

          {/* Project Header */}
          <div className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 shadow-xl border-2 border-[#3d4c41]/20 dark:border-[#3d4c41]/40 backdrop-blur-xl">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Project Image */}
              <div className="lg:col-span-1">
                <div className="aspect-video rounded-2xl overflow-hidden shadow-lg">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Project Info */}
              <div className="lg:col-span-2">
                <div className="flex items-center mb-4">
                  <span className="px-3 py-1 bg-[#3d4c41]/10 dark:bg-[#3d4c41]/60 text-[#3d4c41] dark:text-[#4d5c51] rounded-full text-sm font-semibold">
                    {project.category}
                  </span>
                </div>
                <h1 className="text-4xl font-bold text-[#3d4c41] dark:text-[#4d5c51] mb-2">
                  {project.title}
                </h1>
                <p className="text-xl text-[#3d4c41]/70 dark:text-[#4d5c51]/70 mb-4">
                  {project.subtitle}
                </p>
                <p className="text-gray-600 dark:text-gray-300 mb-6 text-lg">
                  {project.description}
                </p>

                {/* Quick Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#3d4c41] dark:text-[#4d5c51]">
                      {project.details.duration}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Duration
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#3d4c41] dark:text-[#4d5c51]">
                      {project.details.technologies.length}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Technologies
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#3d4c41] dark:text-[#4d5c51]">
                      {project.details.achievements.length}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Achievements
                    </div>
                  </div>
                  <div className="text-center">
                    <div className="text-2xl font-bold text-[#3d4c41] dark:text-[#4d5c51]">
                      {project.details.company}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      Company
                    </div>
                  </div>
                </div>

                {/* Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 bg-[#3d4c41]/10 dark:bg-[#3d4c41]/30 text-[#3d4c41] dark:text-[#4d5c51] rounded-full text-sm font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Tabs Navigation */}
          <div className="bg-white/80 dark:bg-gray-800/80 rounded-2xl p-2 shadow-xl border-2 border-[#3d4c41]/20 dark:border-[#3d4c41]/40 backdrop-blur-xl">
            <div className="flex space-x-2">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 ${
                    activeTab === tab.id
                      ? "bg-[#3d4c41] text-white shadow-lg"
                      : "text-[#3d4c41] dark:text-[#4d5c51] hover:bg-[#3d4c41]/10 dark:hover:bg-[#3d4c41]/20"
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="bg-white/80 dark:bg-gray-800/80 rounded-3xl p-8 shadow-xl border-2 border-[#3d4c41]/20 dark:border-[#3d4c41]/40 backdrop-blur-xl">
            {activeTab === "overview" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-[#3d4c41] dark:text-[#4d5c51] mb-4">
                    Project Overview
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {project.details.projectScope?.overview ||
                      project.description}
                  </p>

                  {project.details.projectScope && (
                    <>
                      <h3 className="text-xl font-semibold text-[#3d4c41] dark:text-[#4d5c51] mb-3">
                        Objectives
                      </h3>
                      <ul className="space-y-2 mb-6">
                        {project.details.projectScope.objectives.map(
                          (objective, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-[#3d4c41] mr-3 mt-1">
                                •
                              </span>
                              <span className="text-gray-600 dark:text-gray-300">
                                {objective}
                              </span>
                            </li>
                          )
                        )}
                      </ul>

                      <h3 className="text-xl font-semibold text-[#3d4c41] dark:text-[#4d5c51] mb-3">
                        Deliverables
                      </h3>
                      <ul className="space-y-2">
                        {project.details.projectScope.deliverables.map(
                          (deliverable, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-[#3d4c41] mr-3 mt-1">
                                •
                              </span>
                              <span className="text-gray-600 dark:text-gray-300">
                                {deliverable}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </>
                  )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-[#3d4c41] dark:text-[#4d5c51] mb-3">
                      Key Achievements
                    </h3>
                    <ul className="space-y-2">
                      {project.details.achievements.map((achievement, idx) => (
                        <li key={idx} className="flex items-start">
                          <span className="text-[#3d4c41] mr-3 mt-1">•</span>
                          <span className="text-gray-600 dark:text-gray-300 text-sm">
                            {achievement}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-[#3d4c41] dark:text-[#4d5c51] mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.details.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-[#3d4c41]/10 dark:bg-[#3d4c41]/30 text-[#3d4c41] dark:text-[#4d5c51] rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            )}

            {activeTab === "company" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <div>
                  <h2 className="text-2xl font-bold text-[#3d4c41] dark:text-[#4d5c51] mb-4">
                    About {project.details.company}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-6 leading-relaxed">
                    {project.details.companyInfo?.description ||
                      `${
                        project.details.company
                      } is a leading company in the ${project.category.toLowerCase()} industry, focusing on delivering high-quality solutions and innovative approaches to meet client needs.`}
                  </p>
                </div>

                {project.details.companyInfo && (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-[#3d4c41] dark:text-[#4d5c51] mb-3">
                        Services
                      </h3>
                      <ul className="space-y-2">
                        {project.details.companyInfo.services.map(
                          (service, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-[#3d4c41] mr-3 mt-1">
                                •
                              </span>
                              <span className="text-gray-600 dark:text-gray-300">
                                {service}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[#3d4c41] dark:text-[#4d5c51] mb-3">
                        Target Audience
                      </h3>
                      <ul className="space-y-2">
                        {project.details.companyInfo.targetAudience.map(
                          (audience, idx) => (
                            <li key={idx} className="flex items-start">
                              <span className="text-[#3d4c41] mr-3 mt-1">
                                •
                              </span>
                              <span className="text-gray-600 dark:text-gray-300">
                                {audience}
                              </span>
                            </li>
                          )
                        )}
                      </ul>
                    </div>
                  </div>
                )}
              </motion.div>
            )}

            {activeTab === "technical" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <h2 className="text-2xl font-bold text-[#3d4c41] dark:text-[#4d5c51] mb-6">
                  Technical Details
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold text-[#3d4c41] dark:text-[#4d5c51] mb-3">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      {project.details.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-[#3d4c41]/10 dark:bg-[#3d4c41]/30 text-[#3d4c41] dark:text-[#4d5c51] rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {project.details.technicalDetails && (
                    <>
                      <div>
                        <h3 className="text-xl font-semibold text-[#3d4c41] dark:text-[#4d5c51] mb-3">
                          Platforms
                        </h3>
                        <ul className="space-y-2">
                          {project.details.technicalDetails.platforms.map(
                            (platform, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-[#3d4c41] mr-3 mt-1">
                                  •
                                </span>
                                <span className="text-gray-600 dark:text-gray-300">
                                  {platform}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-[#3d4c41] dark:text-[#4d5c51] mb-3">
                          Authoring Tools
                        </h3>
                        <ul className="space-y-2">
                          {project.details.technicalDetails.authoringTools.map(
                            (tool, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-[#3d4c41] mr-3 mt-1">
                                  •
                                </span>
                                <span className="text-gray-600 dark:text-gray-300">
                                  {tool}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      <div>
                        <h3 className="text-xl font-semibold text-[#3d4c41] dark:text-[#4d5c51] mb-3">
                          Accessibility Features
                        </h3>
                        <ul className="space-y-2">
                          {project.details.technicalDetails.accessibility.map(
                            (feature, idx) => (
                              <li key={idx} className="flex items-start">
                                <span className="text-[#3d4c41] mr-3 mt-1">
                                  •
                                </span>
                                <span className="text-gray-600 dark:text-gray-300">
                                  {feature}
                                </span>
                              </li>
                            )
                          )}
                        </ul>
                      </div>

                      <div className="md:col-span-2">
                        <h3 className="text-xl font-semibold text-[#3d4c41] dark:text-[#4d5c51] mb-3">
                          Multimedia Elements
                        </h3>
                        <div className="flex flex-wrap gap-2">
                          {project.details.technicalDetails.multimedia.map(
                            (element) => (
                              <span
                                key={element}
                                className="px-3 py-1 bg-[#3d4c41]/10 dark:bg-[#3d4c41]/30 text-[#3d4c41] dark:text-[#4d5c51] rounded-full text-sm"
                              >
                                {element}
                              </span>
                            )
                          )}
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </motion.div>
            )}

            {activeTab === "impact" && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="space-y-8"
              >
                <h2 className="text-2xl font-bold text-[#3d4c41] dark:text-[#4d5c51] mb-6">
                  Impact & Results
                </h2>

                {project.details.impact && (
                  <>
                    <div>
                      <h3 className="text-xl font-semibold text-[#3d4c41] dark:text-[#4d5c51] mb-4">
                        Key Metrics
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                        {project.details.impact.metrics.map((metric, idx) => (
                          <div
                            key={idx}
                            className="bg-[#3d4c41]/5 dark:bg-[#3d4c41]/20 rounded-xl p-4"
                          >
                            <div className="text-lg font-semibold text-[#3d4c41] dark:text-[#4d5c51]">
                              {metric}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-[#3d4c41] dark:text-[#4d5c51] mb-4">
                        Client Testimonials
                      </h3>
                      <div className="space-y-6">
                        {project.details.impact.testimonials.map(
                          (testimonial, idx) => (
                            <div
                              key={idx}
                              className="bg-[#3d4c41]/5 dark:bg-[#3d4c41]/20 rounded-xl p-6"
                            >
                              <blockquote className="text-gray-600 dark:text-gray-300 italic mb-4">
                                &quot;{testimonial.quote}&quot;
                              </blockquote>
                              <div className="flex items-center">
                                <div className="w-10 h-10 bg-[#3d4c41]/20 dark:bg-[#3d4c41]/40 rounded-full flex items-center justify-center text-[#3d4c41] dark:text-[#4d5c51] font-semibold">
                                  {testimonial.author
                                    .split(" ")
                                    .map((n) => n[0])
                                    .join("")}
                                </div>
                                <div className="ml-3">
                                  <div className="font-semibold text-[#3d4c41] dark:text-[#4d5c51]">
                                    {testimonial.author}
                                  </div>
                                  <div className="text-sm text-gray-600 dark:text-gray-400">
                                    {testimonial.role}
                                  </div>
                                </div>
                              </div>
                            </div>
                          )
                        )}
                      </div>
                    </div>
                  </>
                )}

                <div>
                  <h3 className="text-xl font-semibold text-[#3d4c41] dark:text-[#4d5c51] mb-4">
                    Challenges & Solutions
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div>
                      <h4 className="text-lg font-semibold text-[#3d4c41] dark:text-[#4d5c51] mb-3">
                        Challenges Faced
                      </h4>
                      <ul className="space-y-2">
                        {project.details.challenges.map((challenge, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-[#3d4c41] mr-3 mt-1">•</span>
                            <span className="text-gray-600 dark:text-gray-300 text-sm">
                              {challenge}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-lg font-semibold text-[#3d4c41] dark:text-[#4d5c51] mb-3">
                        Solutions Implemented
                      </h4>
                      <ul className="space-y-2">
                        {project.details.solutions.map((solution, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-[#3d4c41] mr-3 mt-1">•</span>
                            <span className="text-gray-600 dark:text-gray-300 text-sm">
                              {solution}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
