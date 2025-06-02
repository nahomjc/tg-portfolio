"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import LoadingIntro from "./components/LoadingIntro";
import Link from "next/link";
import React from "react";
import { ThemeProvider } from "@/components/ThemeProvider";

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
    <div ref={ref} className="absolute inset-0 z-0 pointer-events-auto">
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
      img: "/podcast/1745078730179.jpg",
      youtube: "https://www.youtube.com/embed/MRjoAHKxETA",
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
      img: "/podcast/1747833282645.jpg",
      youtube: "https://www.youtube.com/embed/JgqSCh0V0OM",
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
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingIntro onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen pt-16 bg-white dark:bg-gray-900 transition-colors duration-300"
      >
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-b from-white to-[#3d4c41]/10 dark:from-gray-900 dark:to-[#3d4c41]/20 overflow-hidden">
          {/* Interactive Animated Blobs & Parallax */}
          <HeroBlobs />
          <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Profile Image with glassmorphism and glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-[#3d4c41]/20 dark:border-[#3d4c41]/40 bg-white/30 dark:bg-[#3d4c41]/30 backdrop-blur-lg flex-shrink-0"
            >
              <img
                src="/photo1.jpg"
                alt="Tigist Fiseha profile"
                className="w-full h-full object-cover object-center rounded-full border-4 border-[#3d4c41]/20 dark:border-[#3d4c41]/40 shadow-xl"
              />
              <div className="absolute inset-0 rounded-full ring-4 ring-[#3d4c41]/30 animate-glow" />
            </motion.div>
            {/* Hero Text */}
            <div className="text-center md:text-left max-w-xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-[#3d4c41] via-[#4d5c51] to-[#2d3c31] dark:from-[#4d5c51] dark:to-[#3d4c41] drop-shadow-[0_2px_24px_rgba(61,76,65,0.25)]"
              >
                Tigist Fiseha
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-[#3d4c41] dark:text-[#4d5c51] mb-8 font-medium tracking-wide"
              >
                Script Writer · Journalist · E-learning Content Developer ·
                Podcaster
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex flex-col sm:flex-row justify-center md:justify-start gap-4"
              >
                <Link
                  href="/portfolio"
                  className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full bg-gradient-to-r from-[#3d4c41] to-[#4d5c51] text-white font-semibold shadow-lg hover:scale-105 hover:shadow-[#3d4c41]/40 transition-transform duration-200 border-2 border-[#3d4c41]/30"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="px-6 sm:px-8 py-2.5 sm:py-3 text-sm sm:text-base rounded-full bg-white/80 dark:bg-gray-900/80 text-[#3d4c41] dark:text-[#4d5c51] font-semibold border-2 border-[#3d4c41]/30 shadow hover:bg-[#3d4c41]/10 dark:hover:bg-[#3d4c41]/40 hover:scale-105 transition-transform duration-200"
                >
                  Get in Touch
                </Link>
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
                  className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-[#3d4c41]/20 dark:border-[#3d4c41]/40 bg-white/60 dark:bg-gray-800/60 hover:scale-105 hover:shadow-[#3d4c41]/40 transition-transform duration-300 group cursor-pointer"
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
                  <img
                    src={pod.img}
                    alt={`Podcast episode ${idx + 1}`}
                    className="w-full h-64 object-cover object-center group-hover:brightness-110 group-hover:blur-[1px] transition-all duration-300"
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
                <img
                  src="/personla-image/photo_2025-04-28_12-01-26.jpg"
                  alt="Tigist Fiseha personal"
                  className="w-full h-full object-cover object-center rounded-3xl"
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
                  About Me
                </motion.h2>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 }}
                  className="text-lg text-gray-600 dark:text-gray-300 mb-8"
                >
                  A multidisciplinary content creator passionate about
                  storytelling, research, and digital education. Based in Addis
                  Ababa, Ethiopia, I combine my expertise in journalism, script
                  writing, and e-learning to create impactful content that
                  educates and inspires.
                </motion.p>
                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.15 }}
                  className="text-base text-[#3d4c41] dark:text-[#4d5c51] mb-6 font-semibold"
                >
                  Yourself comes first—taking care of yourself is the foundation
                  for everything else.
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
              href="https://t.me/yourtelegramchannel" // Replace with actual Telegram link
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
