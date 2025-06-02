"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  date: string;
  category: string;
  readTime: string;
  image: string;
}

// Mock blog data - In a real app, this would come from an API or CMS
const blogPosts: BlogPost[] = [
  {
    slug: "digital-storytelling-tips",
    title: "Mastering Digital Storytelling: Tips for Content Creators",
    excerpt:
      "Learn essential techniques for creating compelling digital narratives that engage and inspire your audience.",
    date: "March 15, 2024",
    category: "Content Creation",
    readTime: "8 min read",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "podcast-production-guide",
    title: "The Complete Guide to Podcast Production",
    excerpt:
      "A comprehensive guide to producing professional-quality podcasts, from equipment setup to post-production.",
    date: "March 10, 2024",
    category: "Podcasting",
    readTime: "12 min read",
    image:
      "https://images.unsplash.com/photo-1589903308904-1010c2294adc?q=80&w=2070&auto=format&fit=crop",
  },
  {
    slug: "e-learning-content-strategies",
    title: "Effective Strategies for E-Learning Content Development",
    excerpt:
      "Discover proven methods for creating engaging and effective e-learning content that maximizes student engagement.",
    date: "March 5, 2024",
    category: "E-Learning",
    readTime: "10 min read",
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop",
  },
  {
    slug: "journalism-in-digital-age",
    title: "Journalism in the Digital Age: Adapting to New Media",
    excerpt:
      "How traditional journalism is evolving in the digital era and what it means for content creators.",
    date: "February 28, 2024",
    category: "Journalism",
    readTime: "9 min read",
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
  },
];

const categories: string[] = [
  "All",
  "Content Creation",
  "Podcasting",
  "E-Learning",
  "Journalism",
];

export default function Blog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");

  const filteredPosts =
    selectedCategory === "All"
      ? blogPosts
      : blogPosts.filter((post) => post.category === selectedCategory);

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
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#3d4c41] to-[#2d3c31] dark:from-[#4d5c51] dark:to-[#3d4c41]">
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
            {categories.map((category: string) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                  selectedCategory === category
                    ? "bg-[#3d4c41] text-white"
                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:bg-[#3d4c41]/10 dark:hover:bg-[#3d4c41]/30"
                }`}
              >
                {category}
              </button>
            ))}
          </motion.div>

          {/* Blog Posts Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredPosts.map((post: BlogPost, index: number) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300"
              >
                <Link href={`/blog/${post.slug}`}>
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <span className="px-3 py-1 bg-[#3d4c41] text-white text-sm rounded-full">
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-4 text-sm text-gray-600 dark:text-gray-300 mb-3">
                      <span>{post.date}</span>
                      <span>•</span>
                      <span>{post.readTime}</span>
                    </div>
                    <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-3 hover:text-[#3d4c41] dark:hover:text-[#4d5c51] transition-colors">
                      {post.title}
                    </h2>
                    <p className="text-gray-600 dark:text-gray-300 mb-4">
                      {post.excerpt}
                    </p>
                    <div className="flex items-center text-[#3d4c41] dark:text-[#4d5c51] font-medium">
                      Read More
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-5 w-5 ml-2"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                      >
                        <path
                          fillRule="evenodd"
                          d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </main>
    </div>
  );
}
