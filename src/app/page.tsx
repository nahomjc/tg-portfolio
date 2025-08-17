"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import LoadingIntro from "./components/LoadingIntro";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import { ThemeProvider } from "@/components/ThemeProvider";
import Head from "next/head";

// Chatbot Q&A data
const chatbotQA = [
  {
    q: "Who is Tigist?",
    a: "Tigist Fiseha is a multidisciplinary content creator, script writer, journalist, e-learning content developer, and podcaster based in Addis Ababa, Ethiopia.",
  },
  {
    q: "What is Tigist's expertise?",
    a: "Tigist specializes in script writing, journalism, e-learning content development, and podcasting. She is passionate about storytelling, research, and digital education.",
  },
  {
    q: "How can I contact Tigist?",
    a: "You can contact Tigist via the contact form on this website or through her social media links provided in the Contact section.",
  },
  {
    q: "Show me Tigist's portfolio.",
    a: "You can view Tigist's featured work and portfolio by clicking the 'View My Work' button on the landing page or visiting the Portfolio section.",
  },
  {
    q: "Is Tigist single?",
    a: "🤔 Well, that's a complicated question! Let's just say Tigist is currently in a committed relationship with her work, her passion for storytelling, and her endless creativity. 💝 She's married to her craft, and her projects are her children! 📚🎙️✨ (But seriously, that's not really any of our business, is it? 😉)",
  },
];

function ChatBot() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      from: "bot",
      text: "Hi! I'm Tigist's assistant. Ask me anything about Tigist!",
    },
  ]);
  const [input, setInput] = useState("");
  const chatEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (open && chatEndRef.current) {
      chatEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages, open]);

  function handleSend(msg: string) {
    if (!msg.trim()) return;
    setMessages((prev) => [...prev, { from: "user", text: msg }]);
    // Find answer
    const found = chatbotQA.find(
      (qa) => qa.q.toLowerCase() === msg.toLowerCase()
    );
    setTimeout(() => {
      setMessages((prev) => [
        ...prev,
        {
          from: "bot",
          text: found
            ? found.a
            : "Sorry, I don't have an answer for that. Try asking about Tigist's background, expertise, or portfolio!",
        },
      ]);
    }, 600);
    setInput("");
  }

  return (
    <div>
      {/* Floating Chat Button */}
      <button
        onClick={() => setOpen((o) => !o)}
        className="fixed z-[9999] bottom-6 right-6 bg-[#3d4c41] hover:bg-[#2d3c31] dark:bg-[#4d5c51] dark:hover:bg-[#3d4c41] text-white rounded-full shadow-lg w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center text-3xl sm:text-4xl focus:outline-none transition-all duration-300 hover:scale-110 hover:shadow-2xl hover:shadow-[#3d4c41]/50 animate-pulse-slow border-4 border-white/20 dark:border-white/10"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? (
          "×"
        ) : (
          <span className="font-bold transform hover:scale-110 transition-transform">
            💬
          </span>
        )}
      </button>
      {/* Chat Window */}
      {open && (
        <div className="fixed z-[9999] bottom-24 right-6 w-80 max-w-[95vw] bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border-2 border-[#3d4c41]/20 dark:border-[#3d4c41]/40 flex flex-col overflow-hidden animate-fade-in transition-colors duration-300">
          <div className="bg-gradient-to-r from-[#3d4c41] to-[#4d5c51] text-white px-4 py-3 font-bold text-lg">
            Ask Tigist&apos;s Assistant
          </div>
          <div className="flex-1 p-4 space-y-2 overflow-y-auto max-h-72 text-sm">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`flex ${
                  msg.from === "bot" ? "justify-start" : "justify-end"
                }`}
              >
                <div
                  className={`px-4 py-2 rounded-2xl shadow ${
                    msg.from === "bot"
                      ? "bg-[#3d4c41]/10 dark:bg-[#3d4c41]/40 text-[#3d4c41] dark:text-[#4d5c51]"
                      : "bg-[#3d4c41] dark:bg-[#4d5c51] text-white"
                  } transition-colors duration-300`}
                >
                  {msg.text}
                </div>
              </div>
            ))}
            <div ref={chatEndRef} />
          </div>
          <div className="px-4 pb-3">
            <div className="flex gap-2 mb-2 flex-wrap">
              {chatbotQA.map((qa, idx) => (
                <button
                  key={idx}
                  onClick={() => handleSend(qa.q)}
                  className="px-3 py-1 rounded-full bg-[#3d4c41]/10 dark:bg-[#3d4c41]/30 text-[#3d4c41] dark:text-[#4d5c51] text-xs font-medium hover:bg-[#3d4c41]/20 dark:hover:bg-[#3d4c41]/40 transition-colors duration-300"
                >
                  {qa.q}
                </button>
              ))}
            </div>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSend(input);
              }}
              className="flex gap-2 items-center"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 min-w-0 px-3 py-2 rounded-full border border-[#3d4c41]/20 dark:border-[#3d4c41]/40 bg-white dark:bg-gray-700 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-[#3d4c41] outline-none transition-colors duration-300"
              />
              <button
                type="submit"
                className="flex-shrink-0 px-4 py-2 rounded-full bg-[#3d4c41] dark:bg-[#4d5c51] text-white font-semibold hover:bg-[#2d3c31] dark:hover:bg-[#3d4c41] transition-colors duration-300 whitespace-nowrap"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}

// Parallax and blob animation for hero section
function HeroBlobs() {
  const [pos, setPos] = useState({ x: 0.5, y: 0.5 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleMove(e: MouseEvent) {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width;
      const y = (e.clientY - rect.top) / rect.height;
      setPos({ x, y });
    }
    const node = ref.current;
    if (node) node.addEventListener("mousemove", handleMove);
    return () => {
      if (node) node.removeEventListener("mousemove", handleMove);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="absolute inset-0 z-0 pointer-events-auto overflow-hidden"
    >
      {/* Animated Blobs */}
      <motion.div
        animate={{
          x: (pos.x - 0.5) * 60,
          y: (pos.y - 0.5) * 40,
          scale: [1, 1.08, 1],
        }}
        transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
        className="absolute top-[-120px] left-[-120px] w-[340px] h-[340px] bg-gradient-to-br from-[#3d4c41]/40 via-[#3d4c41]/20 to-white/40 dark:from-[#3d4c41]/30 dark:via-[#3d4c41]/20 dark:to-[#3d4c41]/10 rounded-full blur-3xl mix-blend-multiply"
        style={{ filter: "blur(60px)" }}
      />
      <motion.div
        animate={{
          x: (pos.x - 0.5) * -40,
          y: (pos.y - 0.5) * 60,
          scale: [1, 1.12, 1],
        }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] bg-gradient-to-tr from-[#3d4c41]/20 via-[#4d5c51]/20 to-white opacity-30 rounded-full blur-2xl mix-blend-multiply"
        style={{ filter: "blur(40px)" }}
      />
      <motion.div
        animate={{
          x: (pos.x - 0.5) * 30,
          y: (pos.y - 0.5) * -30,
          scale: [1, 1.06, 1],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-40 h-40 bg-[#3d4c41] opacity-80 rounded-full"
        style={{ filter: "none" }}
      />

      {/* Floating Elements */}
      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: "-100vw", opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.1, 0.9, 1],
        }}
        className="absolute top-1/4 w-24 h-24"
      >
        <div className="w-full h-full bg-[#3d4c41]/20 rounded-full backdrop-blur-sm border border-[#3d4c41]/30 shadow-lg" />
      </motion.div>

      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: "-100vw", opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.1, 0.9, 1],
          delay: 5,
        }}
        className="absolute top-1/3 w-16 h-16"
      >
        <div className="w-full h-full bg-[#3d4c41]/20 rounded-full backdrop-blur-sm border border-[#3d4c41]/30 shadow-lg" />
      </motion.div>

      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: "-100vw", opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 30,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.1, 0.9, 1],
          delay: 10,
        }}
        className="absolute top-2/3 w-20 h-20"
      >
        <div className="w-full h-full bg-[#3d4c41]/20 rounded-full backdrop-blur-sm border border-[#3d4c41]/30 shadow-lg" />
      </motion.div>

      {/* Floating Icons */}
      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: "-100vw", opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.1, 0.9, 1],
          delay: 2,
        }}
        className="absolute top-1/2 w-12 h-12"
      >
        <div className="w-full h-full flex items-center justify-center text-[#3d4c41]/40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
            />
          </svg>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: "-100vw", opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.1, 0.9, 1],
          delay: 7,
        }}
        className="absolute top-2/5 w-12 h-12"
      >
        <div className="w-full h-full flex items-center justify-center text-[#3d4c41]/40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 3v11.25A2.25 2.25 0 006 16.5h2.25M3.75 3h-1.5m1.5 0h16.5m0 0h1.5m-1.5 0v11.25A2.25 2.25 0 0118 16.5h-2.25m-7.5 0h7.5m-7.5 0l-1 3m8.5-3l1 3m0 0l.5 1.5m-.5-1.5h-9.5m0 0l-.5 1.5m.75-9l3-3 2.148 2.148A12.061 12.061 0 0116.5 7.605"
            />
          </svg>
        </div>
      </motion.div>

      {/* Floating Text Elements */}
      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: "-100vw", opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 25,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.1, 0.9, 1],
          delay: 3,
        }}
        className="absolute top-1/4 w-32"
      >
        <div className="text-[#3d4c41]/30 dark:text-[#3d4c41]/40 font-light text-sm tracking-wider backdrop-blur-sm">
          Content Creator
        </div>
      </motion.div>

      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: "-100vw", opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.1, 0.9, 1],
          delay: 8,
        }}
        className="absolute top-3/4 w-32"
      >
        <div className="text-[#3d4c41]/30 font-light text-sm tracking-wider backdrop-blur-sm">
          Digital Storyteller
        </div>
      </motion.div>

      {/* Additional Floating Icons */}
      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: "-100vw", opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.1, 0.9, 1],
          delay: 4,
        }}
        className="absolute top-1/3 w-12 h-12"
      >
        <div className="w-full h-full flex items-center justify-center text-[#3d4c41]/40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"
            />
          </svg>
        </div>
      </motion.div>

      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: "-100vw", opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.1, 0.9, 1],
          delay: 6,
        }}
        className="absolute top-2/3 w-12 h-12"
      >
        <div className="w-full h-full flex items-center justify-center text-[#3d4c41]/40">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
            />
          </svg>
        </div>
      </motion.div>

      {/* Floating Decorative Elements */}
      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: "-100vw", opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 35,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.1, 0.9, 1],
          delay: 12,
        }}
        className="absolute top-1/2 w-16 h-16"
      >
        <div className="w-full h-full border-2 border-[#3d4c41]/20 rounded-lg rotate-45 backdrop-blur-sm" />
      </motion.div>

      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: "-100vw", opacity: [0, 1, 1, 0] }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.1, 0.9, 1],
          delay: 15,
        }}
        className="absolute top-1/4 w-14 h-14"
      >
        <div className="w-full h-full border-2 border-[#3d4c41]/20 rounded-full backdrop-blur-sm" />
      </motion.div>

      {/* Subtle Background Lines */}
      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: "-100vw", opacity: [0, 0.1, 0.1, 0] }}
        transition={{
          duration: 40,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.1, 0.9, 1],
        }}
        className="absolute top-1/2 w-full h-px bg-gradient-to-r from-transparent via-[#3d4c41]/10 to-transparent"
      />

      <motion.div
        initial={{ x: "100vw", opacity: 0 }}
        animate={{ x: "-100vw", opacity: [0, 0.1, 0.1, 0] }}
        transition={{
          duration: 45,
          repeat: Infinity,
          ease: "linear",
          times: [0, 0.1, 0.9, 1],
          delay: 20,
        }}
        className="absolute top-2/3 w-full h-px bg-gradient-to-r from-transparent via-[#3d4c41]/10 to-transparent"
      />
    </div>
  );
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  // Modal state for podcast video
  const [modalOpen, setModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  const [videoError, setVideoError] = useState<string | null>(null);

  // Podcast images and YouTube links
  const podcastData = [
    {
      img: "/podcast/youtube-2.jpg",
      youtube: "https://www.youtube.com/embed/KCc0myP8a-4",
    },
    {
      img: "/podcast/1746802085766.jpg",
      youtube: "https://www.youtube.com/embed/be9eMCgNHpo",
    },
    {
      img: "/podcast/1747317939155.jpg",
      youtube: "https://www.youtube.com/embed/2kRE-br79DA",
    },
    {
      img: "/podcast/youtube-1.jpg",
      youtube: "https://www.youtube.com/embed/Y8bFWxMceE",
    },
  ];

  // News Broadcasting videos
  const newsBroadcastingData = [
    {
      title: "News Report 1",
      description: "Latest news coverage and reporting",
      youtube: "https://www.youtube.com/embed/mnA5Nlu9Wh8",
      thumbnail: "https://img.youtube.com/vi/mnA5Nlu9Wh8/maxresdefault.jpg",
    },
    {
      title: "News Report 2",
      description: "In-depth news analysis and coverage",
      youtube: "https://www.youtube.com/embed/0P-tnV1bpfc",
      thumbnail: "https://img.youtube.com/vi/0P-tnV1bpfc/maxresdefault.jpg",
    },
    {
      title: "News Report 3",
      description: "Breaking news and live reporting",
      youtube: "https://www.youtube.com/embed/SFRuP8q5zlY",
      thumbnail: "https://img.youtube.com/vi/SFRuP8q5zlY/maxresdefault.jpg",
    },
  ];

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <ThemeProvider>
      <Head>
        {/* Preload critical images */}
        <link rel="preload" as="image" href="/photo1.jpg" />
        <link
          rel="preload"
          as="image"
          href="/certefication/certefication.jpg"
        />
        <link rel="dns-prefetch" href="//img.youtube.com" />
        <link rel="dns-prefetch" href="//images.unsplash.com" />

        {/* Image optimization hints */}
        <meta name="image-optimization" content="webp,avif" />
        <meta name="image-compression" content="85" />

        {/* Resource hints for better performance */}
        <link rel="preconnect" href="https://img.youtube.com" />
        <link rel="preconnect" href="https://images.unsplash.com" />
      </Head>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingIntro onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        {/* Hero Section */}
        <section className="relative min-h-screen pt-24 md:pt-32 lg:pt-36 flex items-center justify-center bg-gradient-to-br from-white via-[#3d4c41]/5 to-[#3d4c41]/10 dark:from-gray-900 dark:via-[#3d4c41]/10 dark:to-[#3d4c41]/20 overflow-hidden mobile-safe">
          {/* Enhanced Interactive Animated Blobs & Parallax */}
          <HeroBlobs />

          {/* Professional Background Pattern */}
          <div className="absolute inset-0 opacity-5 dark:opacity-10">
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%233d4c41%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
          </div>

          {/* Floating Professional Elements */}
          <motion.div
            animate={{
              y: [0, -10, 0],
              rotate: [0, 5, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-20 left-4 sm:left-10 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-[#3d4c41]/20 to-[#4d5c51]/20 rounded-2xl backdrop-blur-sm border border-[#3d4c41]/30 shadow-lg"
          />

          <motion.div
            animate={{
              y: [0, 15, 0],
              rotate: [0, -5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 2,
            }}
            className="absolute bottom-20 right-4 sm:right-10 w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-br from-[#4d5c51]/20 to-[#3d4c41]/20 rounded-full backdrop-blur-sm border border-[#3d4c41]/30 shadow-lg"
          />

          <div className="container mx-auto px-4 z-10 flex flex-col lg:flex-row items-center justify-center gap-16 lg:gap-20 max-w-full overflow-hidden">
            {/* Enhanced Profile Image with Professional Effects */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
              animate={{ opacity: 1, scale: 1, rotateY: 0 }}
              transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
              className="relative group"
            >
              {/* Main Image Container */}
              <div className="relative w-48 h-48 sm:w-64 sm:h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden shadow-2xl border-4 border-[#3d4c41]/20 dark:border-[#3d4c41]/40 bg-white/30 dark:bg-[#3d4c41]/30 backdrop-blur-lg flex-shrink-0">
                <Image
                  src="/photo1.jpg"
                  alt="Tigist Fiseha - Professional Content Creator"
                  fill
                  sizes="(max-width: 768px) 256px, (max-width: 1024px) 320px, 384px"
                  priority
                  quality={85}
                  className="object-cover object-center rounded-full border-4 border-[#3d4c41]/20 dark:border-[#3d4c41]/40 shadow-xl group-hover:scale-110 transition-transform duration-700"
                />

                {/* Professional Glow Effect */}
                <div className="absolute inset-0 rounded-full ring-4 ring-[#3d4c41]/30 animate-pulse" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-br from-transparent via-[#3d4c41]/10 to-transparent opacity-60" />
              </div>

              {/* Floating Professional Badges */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1, duration: 0.5 }}
                className="absolute -top-4 -right-4 bg-gradient-to-r from-[#3d4c41] to-[#4d5c51] text-white px-3 py-1 rounded-full text-xs font-semibold shadow-lg border border-white/20"
              >
                Available
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 1.2, duration: 0.5 }}
                className="absolute -bottom-4 -left-4 bg-white/90 dark:bg-gray-800/90 text-[#3d4c41] dark:text-[#4d5c51] px-3 py-1 rounded-full text-xs font-semibold shadow-lg border border-[#3d4c41]/20 backdrop-blur-sm"
              >
                5+ Years Exp
              </motion.div>

              {/* Professional Skills Pills */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.5, duration: 0.5 }}
                className="absolute -left-2 sm:-left-8 top-1/2 transform -translate-y-1/2 space-y-2 hidden sm:block"
              >
                {[
                  "Script Writing",
                  "Journalism",
                  "E-learning",
                  "Podcasting",
                ].map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
                    className="bg-white/90 dark:bg-gray-800/90 text-[#3d4c41] dark:text-[#4d5c51] px-3 py-1 rounded-full text-xs font-medium shadow-lg border border-[#3d4c41]/20 backdrop-blur-sm whitespace-nowrap"
                  >
                    {skill}
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* Mobile Skills Pills - Show below image on mobile */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.5, duration: 0.5 }}
              className="sm:hidden mt-4 flex flex-wrap justify-center gap-2"
            >
              {["Script Writing", "Journalism", "E-learning", "Podcasting"].map(
                (skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 1.7 + index * 0.1, duration: 0.5 }}
                    className="bg-white/90 dark:bg-gray-800/90 text-[#3d4c41] dark:text-[#4d5c51] px-3 py-1 rounded-full text-xs font-medium shadow-lg border border-[#3d4c41]/20 backdrop-blur-sm"
                  >
                    {skill}
                  </motion.div>
                )
              )}
            </motion.div>

            {/* Enhanced Hero Text Content */}
            <div className="text-center lg:text-left max-w-2xl">
              {/* Professional Title Badge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#3d4c41]/10 to-[#4d5c51]/10 dark:from-[#3d4c41]/20 dark:to-[#4d5c51]/20 px-4 py-2 rounded-full border border-[#3d4c41]/20 dark:border-[#3d4c41]/40 mb-6 backdrop-blur-sm"
              >
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-[#3d4c41] dark:text-[#4d5c51]">
                  Professional Content Creator
                </span>
              </motion.div>

              {/* Enhanced Main Title */}
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#3d4c41] via-[#4d5c51] to-[#2d3c31] dark:from-[#4d5c51] dark:via-[#3d4c41] dark:to-[#5d6c61] leading-tight break-words"
              >
                Tigist Fiseha
              </motion.h1>

              {/* Professional Subtitle */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-[#3d4c41] dark:text-[#4d5c51] mb-4 font-light tracking-wide break-words"
              >
                Multidisciplinary Content Creator
              </motion.p>

              {/* Professional Description */}
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7, duration: 0.6 }}
                className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 font-normal leading-relaxed max-w-lg mx-auto lg:mx-0 px-4 sm:px-0"
              >
                Crafting compelling narratives, delivering impactful news, and
                creating engaging educational content that connects with
                audiences worldwide.
              </motion.p>

              {/* Professional Stats */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.8, duration: 0.6 }}
                className="flex flex-wrap justify-center lg:justify-start gap-6 mb-8"
              >
                {[
                  { number: "50+", label: "Projects Completed" },
                  { number: "100K+", label: "Content Views" },
                  { number: "5+", label: "Years Experience" },
                ].map((stat) => (
                  <div key={stat.label} className="text-center">
                    <div className="text-2xl md:text-3xl font-bold text-[#3d4c41] dark:text-[#4d5c51]">
                      {stat.number}
                    </div>
                    <div className="text-sm text-gray-600 dark:text-gray-400">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Enhanced CTA Buttons */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.6 }}
                className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4 px-4 sm:px-0"
              >
                <Link
                  href="/portfolio"
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full bg-gradient-to-r from-[#3d4c41] to-[#4d5c51] text-white shadow-xl hover:shadow-2xl hover:shadow-[#3d4c41]/40 transition-all duration-300 border-2 border-[#3d4c41]/30 overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    View My Work
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 8l4 4m0 0l-4 4m4-4H3"
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-gradient-to-r from-[#4d5c51] to-[#3d4c41] opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>

                <Link
                  href="/contact"
                  className="group relative px-6 sm:px-8 py-3 sm:py-4 text-base sm:text-lg font-semibold rounded-full bg-white/90 dark:bg-gray-800/90 text-[#3d4c41] dark:text-[#4d5c51] border-2 border-[#3d4c41]/30 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm overflow-hidden"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get in Touch
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                      />
                    </svg>
                  </span>
                  <div className="absolute inset-0 bg-[#3d4c41]/10 dark:bg-[#3d4c41]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </Link>
              </motion.div>

              {/* Professional Social Proof */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.0, duration: 0.6 }}
                className="mt-8 pt-6 border-t border-[#3d4c41]/20 dark:border-[#3d4c41]/40"
              >
                <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
                  Trusted by leading organizations
                </p>
                <div className="flex flex-wrap justify-center lg:justify-start gap-4 opacity-60">
                  {["Muyalogy", "Ewqet.org", "Hamer Media", "Keyezerfu"].map(
                    (company) => (
                      <div
                        key={company}
                        className="text-xs font-medium text-[#3d4c41] dark:text-[#4d5c51] bg-white/50 dark:bg-gray-800/50 px-3 py-1 rounded-full border border-[#3d4c41]/20"
                      >
                        {company}
                      </div>
                    )
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="py-20 bg-gradient-to-b from-[#3d4c41]/10 to-white dark:from-[#3d4c41]/20 dark:to-gray-900 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-12 text-center text-[#3d4c41] dark:text-[#4d5c51]"
            >
              Featured Work
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "E-learning Development",
                  description:
                    "Creating engaging educational content for Muyalogy",
                  category: "E-learning",
                },
                {
                  title: "Script Writing",
                  description: "Crafting compelling narratives for Ewqet.org",
                  category: "Writing",
                },
                {
                  title: "News Broadcasting",
                  description: "Delivering news with impact at Hamer Media",
                  category: "Journalism",
                },
              ].map((project, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-[#3d4c41]/20 dark:border-[#3d4c41]/50 hover:shadow-lg transition-all duration-300 hover:border-[#3d4c41]/30 dark:hover:border-[#3d4c41]/40"
                >
                  <h3 className="text-xl font-semibold mb-2 text-[#3d4c41] dark:text-[#4d5c51]">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-[#3d4c41]/10 dark:bg-[#3d4c41]/50 text-[#3d4c41] dark:text-[#4d5c51] rounded-full text-sm">
                    {project.category}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Podcast Showcase Section */}
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#3d4c41] dark:text-[#4d5c51]"
            >
              Podcast Showcase
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto"
            >
              Explore some of my podcast work, where I share stories,
              interviews, and insights on a variety of topics. Each episode is
              crafted to inspire, educate, and entertain.
            </motion.p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
              {podcastData.map((pod, idx) => (
                <motion.div
                  key={pod.img}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-[#3d4c41]/20 dark:border-[#3d4c41]/40 bg-white/60 dark:bg-gray-800/60 hover:scale-105 hover:shadow-[#3d4c41]/40 transition-transform duration-300 group cursor-pointer h-64 sm:h-72"
                  onClick={() => {
                    setActiveVideo(pod.youtube);
                    setModalOpen(true);
                  }}
                  tabIndex={0}
                  aria-label={`Open podcast video ${idx + 1}`}
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveVideo(pod.youtube);
                      setModalOpen(true);
                    }
                  }}
                >
                  <Image
                    src={pod.img}
                    alt={`Podcast episode ${idx + 1}`}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 768px) 50vw, (max-width: 1024px) 25vw, 300px"
                    quality={75}
                    loading="lazy"
                    className="object-cover object-center group-hover:brightness-110 group-hover:blur-[1px] transition-all duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3d4c41]/60 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end p-4">
                    <span className="text-white text-lg font-semibold drop-shadow-lg">
                      Podcast Episode {idx + 1}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <a
                href="http://youtube.com/@Keyezerfu/featured"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#3d4c41] to-[#4d5c51] text-white font-semibold shadow-lg hover:scale-105 hover:shadow-[#3d4c41]/40 transition-transform duration-200 border-2 border-[#3d4c41]/30"
              >
                More on YouTube
              </a>
            </div>
          </div>
        </section>

        {/* Podcast Modal */}
        {modalOpen && (
          <div className="fixed inset-0 z-[99999] flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-2xl p-4 md:p-8 max-w-2xl w-full mx-4 flex flex-col items-center">
              <button
                onClick={() => setModalOpen(false)}
                className="absolute top-4 right-4 text-[#3d4c41] dark:text-[#4d5c51] text-2xl font-bold hover:text-[#2d3c31] dark:hover:text-[#3d4c41] focus:outline-none"
                aria-label="Close video modal"
              >
                ×
              </button>
              <div className="w-full aspect-video rounded-lg overflow-hidden bg-black">
                {activeVideo && (
                  <iframe
                    src={activeVideo}
                    title="Podcast YouTube Video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0 rounded-lg"
                  />
                )}
              </div>
            </div>
          </div>
        )}

        {/* News Broadcasting Section */}
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#3d4c41] dark:text-[#4d5c51]"
            >
              News Broadcasting
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto"
            >
              Experience my professional news broadcasting work, delivering
              accurate, timely, and engaging news coverage across various topics
              and events.
            </motion.p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsBroadcastingData.map((news, idx) => (
                <motion.div
                  key={news.youtube}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * idx }}
                  className="group relative bg-white dark:bg-gray-800 rounded-3xl overflow-hidden shadow-xl border border-[#3d4c41]/10 dark:border-[#3d4c41]/30 hover:shadow-2xl hover:shadow-[#3d4c41]/20 dark:hover:shadow-[#3d4c41]/30 transition-all duration-500 cursor-pointer transform hover:-translate-y-2"
                  onClick={() => {
                    setActiveVideo(news.youtube);
                    setModalOpen(true);
                  }}
                  tabIndex={0}
                  aria-label={`Open news video ${idx + 1}`}
                  role="button"
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      setActiveVideo(news.youtube);
                      setModalOpen(true);
                    }
                  }}
                >
                  {/* Card Header with Image */}
                  <div className="relative h-56 overflow-hidden">
                    <Image
                      src={news.thumbnail}
                      alt={news.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      quality={75}
                      loading="lazy"
                      className="object-cover object-center group-hover:scale-110 transition-transform duration-700"
                    />

                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                    {/* Play Button Overlay */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform scale-75 group-hover:scale-100">
                      <div className="w-20 h-20 bg-white/95 dark:bg-gray-900/95 rounded-full flex items-center justify-center shadow-2xl backdrop-blur-sm border-2 border-white/20">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          className="w-10 h-10 text-[#3d4c41] dark:text-[#4d5c51] ml-1"
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </div>
                    </div>

                    {/* News Badge */}
                    <div className="absolute top-4 left-4">
                      <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-red-500/90 text-white backdrop-blur-sm border border-red-400/30">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={2}
                          stroke="currentColor"
                          className="w-3 h-3 mr-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126zM12 15.75h.007v.008H12v-.008z"
                          />
                        </svg>
                        LIVE NEWS
                      </span>
                    </div>

                    {/* Duration Badge */}
                    <div className="absolute top-4 right-4">
                      <span className="inline-flex items-center px-2 py-1 rounded-md text-xs font-medium bg-black/70 text-white backdrop-blur-sm">
                        5:32
                      </span>
                    </div>
                  </div>

                  {/* Card Content */}
                  <div className="p-6">
                    {/* Category Tag */}
                    <div className="flex items-center mb-3">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-[#3d4c41]/10 dark:bg-[#3d4c41]/30 text-[#3d4c41] dark:text-[#4d5c51]">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-3 h-3 mr-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
                          />
                        </svg>
                        News Broadcasting
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-bold mb-3 text-[#3d4c41] dark:text-[#4d5c51] group-hover:text-[#2d3c31] dark:group-hover:text-[#3d4c41] transition-colors duration-300 line-clamp-2">
                      {news.title}
                    </h3>

                    {/* Description */}
                    <p className="text-gray-600 dark:text-gray-300 mb-4 text-sm leading-relaxed line-clamp-3">
                      {news.description}
                    </p>

                    {/* Footer with Date and View Count */}
                    <div className="flex items-center justify-between pt-4 border-t border-[#3d4c41]/10 dark:border-[#3d4c41]/20">
                      <div className="flex items-center text-xs text-[#3d4c41]/60 dark:text-[#4d5c51]/60">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-3 h-3 mr-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 012.25-2.25h13.5A2.25 2.25 0 0121 7.5v11.25m-18 0A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75m-18 0v-7.5A2.25 2.25 0 015.25 9h13.5A2.25 2.25 0 0121 11.25v7.5"
                          />
                        </svg>
                        Dec 15, 2024
                      </div>
                      <div className="flex items-center text-xs text-[#3d4c41]/60 dark:text-[#4d5c51]/60">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-3 h-3 mr-1"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.639 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.639 0-8.573-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                        2.4K views
                      </div>
                    </div>
                  </div>

                  {/* Hover Effect Border */}
                  <div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-[#3d4c41]/20 dark:group-hover:border-[#3d4c41]/40 transition-colors duration-500 pointer-events-none" />
                </motion.div>
              ))}
            </div>
            <div className="flex justify-center mt-10">
              <a
                href="http://youtube.com/@Keyezerfu/featured"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3 rounded-full bg-gradient-to-r from-[#3d4c41] to-[#4d5c51] text-white font-semibold shadow-lg hover:scale-105 hover:shadow-[#3d4c41]/40 transition-transform duration-200 border-2 border-[#3d4c41]/30"
              >
                More News Coverage
              </a>
            </div>
          </div>
        </section>

        {/* Certificate Section */}
        <section className="py-20 bg-gradient-to-b from-white to-[#3d4c41]/10 dark:from-gray-900 dark:to-[#3d4c41]/20 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 text-center text-[#3d4c41] dark:text-[#4d5c51]"
            >
              Professional Certification
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-gray-600 dark:text-gray-300 mb-12 text-center max-w-2xl mx-auto"
            >
              I&apos;m proud to have earned professional certifications that
              validate my expertise in journalism and content creation.
            </motion.p>
            <div className="max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-[#3d4c41]/20 dark:border-[#3d4c41]/40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl"
              >
                <Image
                  src="/certefication/certefication.jpg"
                  alt="Michigan State University Journalism Certificate"
                  width={800}
                  height={600}
                  sizes="(max-width: 768px) 100vw, 800px"
                  quality={80}
                  loading="lazy"
                  className="w-full h-auto object-contain"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3d4c41]/20 via-transparent to-transparent pointer-events-none" />
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="mt-8 text-center"
              >
                <h3 className="text-xl font-semibold mb-4 text-[#3d4c41] dark:text-[#4d5c51]">
                  Capstone: Create Your Own Professional Journalistic Portfolio
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  Michigan State University • Coursera • April 2024
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-400 max-w-2xl mx-auto">
                  This comprehensive course focused on developing professional
                  journalistic portfolios, enhancing storytelling skills, and
                  mastering digital content creation techniques. The
                  certification demonstrates my commitment to continuous
                  learning and professional development.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* About Preview Section */}
        <section className="py-20 bg-white dark:bg-gray-900 transition-colors duration-300">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
              {/* Personal Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="w-40 h-40 md:w-56 md:h-56 rounded-3xl overflow-hidden shadow-xl border-4 border-[#3d4c41]/20 dark:border-[#3d4c41]/40 bg-white/40 dark:bg-[#3d4c41]/30 backdrop-blur-lg flex-shrink-0 mb-8 md:mb-0"
              >
                <Image
                  src="/personla-image/image-11.jpg"
                  alt="Tigist Fiseha personal"
                  fill
                  sizes="(max-width: 768px) 160px, 224px"
                  quality={80}
                  loading="lazy"
                  className="object-cover object-center rounded-3xl"
                />
              </motion.div>
              {/* About Text */}
              <div className="flex-1">
                <motion.h2
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="text-3xl md:text-4xl font-bold mb-6 text-[#3d4c41] dark:text-[#4d5c51]"
                >
                  Who Am I?
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-lg text-gray-600 dark:text-gray-300 mb-8"
                >
                  I&apos;m a passionate storyteller with a background in
                  journalism, content development, and education. I specialize
                  in crafting engaging narratives across diverse platforms—from
                  scripts and podcasts to educational media and investigative
                  journalism. With a Master&apos;s in Literature and years of
                  experience in content creation, I bring creativity, clarity,
                  and purpose to every project I take on.
                </motion.p>
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Link
                    href="/about"
                    className="px-8 py-3 rounded-full bg-gradient-to-r from-[#3d4c41] to-[#4d5c51] dark:from-[#4d5c51] dark:to-[#3d4c41] text-white font-semibold shadow-lg hover:scale-105 hover:shadow-[#3d4c41]/40 dark:hover:shadow-[#3d4c41]/40 transition-all duration-300"
                  >
                    Learn More About Me
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Interview Video Section */}
        <section className="py-20 bg-gradient-to-b from-[#3d4c41]/10 to-white dark:from-[#3d4c41]/20 dark:to-gray-900">
          <div className="container mx-auto px-4 flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-[#3d4c41] to-[#2d3c31] dark:from-[#4d5c51] dark:to-[#3d4c41]"
            >
              New Interview: Behind the Camera
            </motion.h2>
            <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-xl border-2 border-[#3d4c41]/20 dark:border-[#3d4c41]/40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl mb-8">
              {videoError ? (
                <div className="w-full h-72 md:h-96 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-red-500">
                  {videoError}
                </div>
              ) : (
                <video
                  controls
                  preload="metadata"
                  playsInline
                  poster="/personla-image/1748065900567(1).jpg"
                  className="w-full h-72 md:h-96 object-cover bg-black"
                  onError={(e) => {
                    console.error("Video error:", e);
                    const videoElement = e.target as HTMLVideoElement;
                    const errorCode = videoElement.error?.code;
                    let errorMessage = "Error loading video";

                    switch (errorCode) {
                      case 1:
                        errorMessage = "Video loading aborted";
                        break;
                      case 2:
                        errorMessage = "Network error while loading video";
                        break;
                      case 3:
                        errorMessage = "Video decoding error";
                        break;
                      case 4:
                        errorMessage = "Video not supported";
                        break;
                    }

                    setVideoError(errorMessage);
                    console.error("Video error code:", errorCode);
                  }}
                >
                  <source src="/video/keyezerfu.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              )}
            </div>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl text-center mb-4">
              Watch Tigist Fiseha&apos;s latest interview about her journey and
              passion for cinematography.
            </p>
          </div>
        </section>

        {/* Telegram Join Section */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4 flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-4 text-center text-[#3d4c41] dark:text-[#4d5c51]"
            >
              Join Tigist on Telegram
            </motion.h2>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-xl text-center mb-6">
              Stay updated with the latest news, podcasts, and exclusive content
              by joining Tigist&apos;s Telegram community.
            </p>
            <a
              href="https://t.me/+QmFrtg1HwSw2YzNk" // Replace with actual Telegram link
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-[#3d4c41] to-[#4d5c51] text-white font-semibold shadow-lg hover:scale-105 hover:shadow-[#3d4c41]/40 transition-transform duration-200 border-2 border-[#3d4c41]/30 text-lg"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="w-7 h-7 text-white"
              >
                <path d="M9.036 16.927c-.38 0-.314-.144-.446-.504l-1.11-3.662 8.548-5.073c.377-.214.655.051.502.4l-2.06 6.44c-.143.41-.366.513-.744.32l-2.062-1.353-1 .963c-.099.098-.183.183-.37.183zm-1.36-4.13l.85 2.8c.07.23.13.32.28.32.15 0 .21-.09.28-.32l.85-2.8-2.26-1.34zm10.324-7.13c-1.13-1.13-2.64-1.13-3.77 0l-8.49 8.49c-1.13 1.13-1.13 2.64 0 3.77 1.13 1.13 2.64 1.13 3.77 0l8.49-8.49c1.13-1.13 1.13-2.64 0-3.77z" />
              </svg>
              Join Telegram
            </a>
          </div>
        </section>

        <ChatBot />
      </motion.div>
    </ThemeProvider>
  );
}
