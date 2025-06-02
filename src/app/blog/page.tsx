"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Blog() {
  const blogPosts = [
    {
      title: "The Future of Digital Education in Ethiopia",
      excerpt:
        "Exploring the growing trends and opportunities in digital education across Ethiopia, and how it's transforming traditional learning methods.",
      date: "March 15, 2024",
      category: "Education",
      readTime: "5 min read",
      image: "/images/blog/education.jpg",
    },
    {
      title: "Storytelling in the Digital Age",
      excerpt:
        "How modern technology is reshaping the art of storytelling and creating new opportunities for content creators.",
      date: "March 10, 2024",
      category: "Content Creation",
      readTime: "4 min read",
      image: "/images/blog/storytelling.jpg",
    },
    {
      title: "The Power of Podcasting",
      excerpt:
        "A deep dive into the impact of podcasting as a medium for education and entertainment in today's digital landscape.",
      date: "March 5, 2024",
      category: "Media",
      readTime: "6 min read",
      image: "/images/blog/podcasting.jpg",
    },
    {
      title: "Content Strategy for E-learning",
      excerpt:
        "Best practices and strategies for creating engaging and effective e-learning content that resonates with students.",
      date: "February 28, 2024",
      category: "E-learning",
      readTime: "7 min read",
      image: "/images/blog/elearning.jpg",
    },
  ];

  const categories = [
    "All Posts",
    "Education",
    "Content Creation",
    "Media",
    "E-learning",
    "Digital Trends",
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
              Blog
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Insights and thoughts on education, content creation, and digital
              media
            </p>
          </div>

          {/* Categories */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="flex flex-wrap justify-center gap-4 mb-12"
          >
            {categories.map((category, index) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  index === 0
                    ? "bg-pink-600 text-white"
                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-pink-50 dark:hover:bg-pink-900/20"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {blogPosts.map((post, index) => (
              <motion.article
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-pink-100 dark:border-pink-900/50 hover:shadow-xl transition-shadow"
              >
                <div className="aspect-video bg-pink-100 dark:bg-pink-900/50 relative">
                  {/* Placeholder for blog image */}
                  <div className="absolute inset-0 flex items-center justify-center text-pink-500">
                    <span className="text-4xl">📝</span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="px-3 py-1 bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400 rounded-full text-sm">
                      {post.category}
                    </span>
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.readTime}
                    </span>
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200 mb-3">
                    {post.title}
                  </h2>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500 dark:text-gray-400">
                      {post.date}
                    </span>
                    <Link
                      href="#"
                      className="text-pink-600 dark:text-pink-400 hover:text-pink-700 dark:hover:text-pink-300 font-medium"
                    >
                      Read More →
                    </Link>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
