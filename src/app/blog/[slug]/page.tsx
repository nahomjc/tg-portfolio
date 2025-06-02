"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useParams } from "next/navigation";

// Mock blog data - In a real app, this would come from an API or CMS
const blogPosts = [
  {
    slug: "digital-storytelling-tips",
    title: "Mastering Digital Storytelling: Tips for Content Creators",
    excerpt:
      "Learn essential techniques for creating compelling digital narratives that engage and inspire your audience.",
    date: "March 15, 2024",
    author: {
      name: "Tigist",
      role: "Content Creator & Educator",
      image: "/personla-image/photo_2025-04-28_12-01-26.jpg",
    },
    category: "Content Creation",
    readTime: "8 min read",
    content: `
      <p>Digital storytelling has become an essential skill in today's content-driven world. Whether you're creating educational content, marketing materials, or personal narratives, the ability to craft compelling digital stories is invaluable.</p>

      <h2>The Art of Digital Storytelling</h2>
      <p>At its core, digital storytelling combines traditional narrative techniques with modern digital tools to create engaging, interactive experiences. Here are some key elements to consider:</p>

      <ul>
        <li>Visual storytelling through images and videos</li>
        <li>Interactive elements that engage the audience</li>
        <li>Clear narrative structure and flow</li>
        <li>Authentic voice and perspective</li>
      </ul>

      <h2>Essential Tools and Techniques</h2>
      <p>To create effective digital stories, you'll need to master several tools and techniques:</p>

      <ol>
        <li>Content planning and storyboarding</li>
        <li>Visual design principles</li>
        <li>Audio and video editing</li>
        <li>Interactive media creation</li>
      </ol>

      <h2>Best Practices for Content Creators</h2>
      <p>Here are some proven strategies for creating engaging digital content:</p>

      <ul>
        <li>Start with a clear message and purpose</li>
        <li>Use multimedia elements strategically</li>
        <li>Maintain consistency in style and tone</li>
        <li>Engage with your audience through comments and feedback</li>
      </ul>

      <p>Remember, the most successful digital stories are those that resonate with their audience on a personal level while delivering valuable information or entertainment.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop",
    tags: [
      "Digital Storytelling",
      "Content Creation",
      "Media Production",
      "Education",
    ],
  },
  {
    slug: "podcast-production-guide",
    title: "The Complete Guide to Podcast Production",
    excerpt:
      "A comprehensive guide to producing professional-quality podcasts, from equipment setup to post-production.",
    date: "March 10, 2024",
    author: {
      name: "Tigist",
      role: "Content Creator & Educator",
      image: "/personla-image/photo_2025-04-28_12-01-26.jpg",
    },
    category: "Podcasting",
    readTime: "12 min read",
    content: `
      <p>Podcasting has become one of the most popular forms of content creation in recent years. With the right equipment and techniques, anyone can create professional-quality podcasts that engage and inform their audience.</p>

      <h2>Essential Equipment for Podcasting</h2>
      <p>To get started with podcasting, you'll need some basic equipment:</p>

      <ul>
        <li>High-quality microphone</li>
        <li>Audio interface or mixer</li>
        <li>Headphones for monitoring</li>
        <li>Recording software</li>
      </ul>

      <h2>Recording and Editing Process</h2>
      <p>The podcast production process involves several key steps:</p>

      <ol>
        <li>Planning and scripting your content</li>
        <li>Setting up your recording environment</li>
        <li>Recording your audio</li>
        <li>Editing and post-production</li>
        <li>Publishing and distribution</li>
      </ol>

      <h2>Tips for Professional Sound Quality</h2>
      <p>Here are some tips to ensure your podcast sounds professional:</p>

      <ul>
        <li>Use a quiet, well-treated recording space</li>
        <li>Practice proper microphone technique</li>
        <li>Edit out background noise and mistakes</li>
        <li>Add music and sound effects appropriately</li>
      </ul>

      <p>Remember, consistency and quality are key to building a loyal podcast audience.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1478737270239-2f02b77fc618?q=80&w=2070&auto=format&fit=crop",
    tags: ["Podcasting", "Audio Production", "Content Creation", "Media"],
  },
  {
    slug: "e-learning-content-strategies",
    title: "Effective Strategies for E-Learning Content Development",
    excerpt:
      "Discover proven methods for creating engaging and effective e-learning content that maximizes student engagement.",
    date: "March 5, 2024",
    author: {
      name: "Tigist",
      role: "Content Creator & Educator",
      image: "/personla-image/photo_2025-04-28_12-01-26.jpg",
    },
    category: "E-Learning",
    readTime: "10 min read",
    content: `
      <p>E-learning has revolutionized education, making it more accessible and flexible than ever before. Creating effective e-learning content requires careful planning and execution.</p>

      <h2>Key Principles of E-Learning Design</h2>
      <p>Successful e-learning content follows these principles:</p>

      <ul>
        <li>Clear learning objectives</li>
        <li>Engaging multimedia elements</li>
        <li>Interactive assessments</li>
        <li>Progress tracking</li>
      </ul>

      <h2>Content Development Process</h2>
      <p>Follow these steps to create effective e-learning content:</p>

      <ol>
        <li>Analyze your audience and their needs</li>
        <li>Define clear learning objectives</li>
        <li>Design the course structure</li>
        <li>Create engaging content</li>
        <li>Test and refine</li>
      </ol>

      <h2>Best Practices for Engagement</h2>
      <p>Keep your students engaged with these strategies:</p>

      <ul>
        <li>Use a variety of content types</li>
        <li>Include interactive elements</li>
        <li>Provide regular feedback</li>
        <li>Encourage community participation</li>
      </ul>

      <p>Remember, the goal is to create an engaging learning experience that helps students achieve their objectives.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?q=80&w=2074&auto=format&fit=crop",
    tags: ["E-Learning", "Education", "Content Development", "Online Learning"],
  },
  {
    slug: "journalism-in-digital-age",
    title: "Journalism in the Digital Age: Adapting to New Media",
    excerpt:
      "How traditional journalism is evolving in the digital era and what it means for content creators.",
    date: "February 28, 2024",
    author: {
      name: "Tigist",
      role: "Content Creator & Educator",
      image: "/personla-image/photo_2025-04-28_12-01-26.jpg",
    },
    category: "Journalism",
    readTime: "9 min read",
    content: `
      <p>The digital age has transformed journalism, creating new opportunities and challenges for content creators. Understanding these changes is crucial for success in modern media.</p>

      <h2>The Evolution of Digital Journalism</h2>
      <p>Digital journalism has changed how we consume news:</p>

      <ul>
        <li>Real-time reporting and updates</li>
        <li>Multimedia storytelling</li>
        <li>Social media integration</li>
        <li>Interactive content</li>
      </ul>

      <h2>Essential Skills for Digital Journalists</h2>
      <p>Modern journalists need to master these skills:</p>

      <ol>
        <li>Digital storytelling techniques</li>
        <li>Social media management</li>
        <li>Data visualization</li>
        <li>Mobile journalism</li>
      </ol>

      <h2>Adapting to New Media</h2>
      <p>Success in digital journalism requires:</p>

      <ul>
        <li>Understanding audience behavior</li>
        <li>Embracing new technologies</li>
        <li>Maintaining journalistic integrity</li>
        <li>Building digital presence</li>
      </ul>

      <p>The future of journalism lies in effectively combining traditional values with modern digital tools.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1504711434969-e33886168f5c?q=80&w=2070&auto=format&fit=crop",
    tags: ["Journalism", "Digital Media", "Content Creation", "News"],
  },
];

export default function BlogPost() {
  const params = useParams();
  const post = blogPosts.find((p) => p.slug === params.slug);

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-4">
            Post Not Found
          </h1>
          <Link
            href="/blog"
            className="text-[#3d4c41] hover:text-[#2d3c31] dark:text-[#4d5c51] dark:hover:text-[#3d4c41]"
          >
            Return to Blog
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-[#3d4c41]/10 dark:from-gray-900 dark:to-[#3d4c41]/20">
      <main className="max-w-4xl mx-auto px-4 py-16">
        <motion.article
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-8"
        >
          {/* Header */}
          <div className="text-center mb-12">
            <Link
              href="/blog"
              className="inline-flex items-center text-[#3d4c41] dark:text-[#4d5c51] hover:text-[#2d3c31] dark:hover:text-[#3d4c41] mb-6"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 mr-2"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M9.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L7.414 9H15a1 1 0 110 2H7.414l2.293 2.293a1 1 0 010 1.414z"
                  clipRule="evenodd"
                />
              </svg>
              Back to Blog
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#3d4c41] to-[#2d3c31] dark:from-[#4d5c51] dark:to-[#3d4c41]">
              {post.title}
            </h1>
            <div className="flex items-center justify-center gap-4 text-gray-600 dark:text-gray-300">
              <span>{post.date}</span>
              <span>•</span>
              <span>{post.readTime}</span>
              <span>•</span>
              <span className="px-3 py-1 bg-[#3d4c41]/10 dark:bg-[#3d4c41]/30 text-[#3d4c41] dark:text-[#4d5c51] rounded-full text-sm">
                {post.category}
              </span>
            </div>
          </div>

          {/* Featured Image */}
          <div className="relative h-[400px] rounded-2xl overflow-hidden">
            <img
              src={post.image}
              alt={post.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

          {/* Author Info */}
          <div className="flex items-center gap-4 p-6 bg-[#3d4c41]/5 dark:bg-[#3d4c41]/10 rounded-2xl">
            <img
              src={post.author.image}
              alt={post.author.name}
              className="w-16 h-16 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white">
                {post.author.name}
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                {post.author.role}
              </p>
            </div>
          </div>

          {/* Content */}
          <div
            className="prose prose-lg dark:prose-invert max-w-none"
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          {/* Tags */}
          <div className="flex flex-wrap gap-2 pt-8 border-t border-[#3d4c41]/20 dark:border-[#3d4c41]/40">
            {post.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-[#3d4c41]/10 dark:bg-[#3d4c41]/30 text-[#3d4c41] dark:text-[#4d5c51] rounded-full text-sm"
              >
                {tag}
              </span>
            ))}
          </div>
        </motion.article>
      </main>
    </div>
  );
}
