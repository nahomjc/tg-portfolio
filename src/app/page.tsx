"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import LoadingIntro from "./components/LoadingIntro";
import Link from "next/link";

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
        className="fixed z-[9999] bottom-6 right-6 bg-pink-600 hover:bg-pink-700 text-white rounded-full shadow-lg w-16 h-16 flex items-center justify-center text-3xl focus:outline-none"
        aria-label={open ? "Close chat" : "Open chat"}
      >
        {open ? "×" : <span className="font-bold">💬</span>}
      </button>
      {/* Chat Window */}
      {open && (
        <div className="fixed z-[9999] bottom-24 right-6 w-80 max-w-[95vw] bg-white dark:bg-gray-900 rounded-2xl shadow-2xl border-2 border-pink-200 dark:border-pink-900/40 flex flex-col overflow-hidden animate-fade-in">
          <div className="bg-gradient-to-r from-pink-600 to-fuchsia-500 text-white px-4 py-3 font-bold text-lg">
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
                      ? "bg-pink-100 dark:bg-pink-900/40 text-pink-700 dark:text-pink-200"
                      : "bg-pink-600 text-white"
                  }`}
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
                  className="px-3 py-1 rounded-full bg-pink-50 dark:bg-pink-900/30 text-pink-600 dark:text-pink-300 text-xs font-medium hover:bg-pink-100 dark:hover:bg-pink-800 transition"
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
              className="flex gap-2"
            >
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your question..."
                className="flex-1 px-3 py-2 rounded-full border border-pink-200 dark:border-pink-800 bg-white dark:bg-gray-800 text-gray-900 dark:text-gray-100 focus:ring-2 focus:ring-pink-500 outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-full bg-pink-600 text-white font-semibold hover:bg-pink-700 transition"
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
        className="absolute top-[-120px] left-[-120px] w-[340px] h-[340px] bg-gradient-to-br from-pink-300 via-pink-100 to-white opacity-40 rounded-full blur-3xl mix-blend-multiply"
        style={{ filter: "blur(60px)" }}
      />
      <motion.div
        animate={{
          x: (pos.x - 0.5) * -40,
          y: (pos.y - 0.5) * 60,
          scale: [1, 1.12, 1],
        }}
        transition={{ repeat: Infinity, duration: 7, ease: "easeInOut" }}
        className="absolute bottom-[-100px] right-[-100px] w-[260px] h-[260px] bg-gradient-to-tr from-pink-200 via-fuchsia-200 to-white opacity-30 rounded-full blur-2xl mix-blend-multiply"
        style={{ filter: "blur(40px)" }}
      />
      <motion.div
        animate={{
          x: (pos.x - 0.5) * 30,
          y: (pos.y - 0.5) * -30,
          scale: [1, 1.06, 1],
        }}
        transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
        className="absolute top-10 left-10 w-40 h-40 bg-pink-400 opacity-80 rounded-full"
        style={{ filter: "none" }}
      />
    </div>
  );
}

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  // Modal state for podcast video
  const [modalOpen, setModalOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);

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
    <>
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingIntro onLoadingComplete={() => setIsLoading(false)} />
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: isLoading ? 0 : 1 }}
        transition={{ duration: 0.5 }}
        className="min-h-screen pt-16"
      >
        {/* Hero Section */}
        <section className="relative h-[90vh] flex items-center justify-center bg-gradient-to-b from-white to-pink-50 dark:from-gray-900 dark:to-pink-950/20 overflow-hidden">
          {/* Interactive Animated Blobs & Parallax */}
          <HeroBlobs />
          <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center justify-center gap-12">
            {/* Profile Image with glassmorphism and glow */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2 }}
              className="relative w-56 h-56 md:w-72 md:h-72 rounded-full overflow-hidden shadow-2xl border-4 border-white/60 dark:border-pink-400/40 bg-white/30 dark:bg-pink-900/30 backdrop-blur-lg flex-shrink-0"
            >
              <img
                src="/photo1.jpg"
                alt="Tigist Fiseha profile"
                className="w-full h-full object-cover object-center rounded-full border-4 border-pink-200 dark:border-pink-500 shadow-xl"
              />
              <div className="absolute inset-0 rounded-full ring-4 ring-pink-400/30 animate-glow" />
            </motion.div>
            {/* Hero Text */}
            <div className="text-center md:text-left max-w-xl">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="text-5xl md:text-7xl font-extrabold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-pink-600 via-fuchsia-500 to-pink-400 dark:from-pink-400 dark:to-pink-300 drop-shadow-[0_2px_24px_rgba(236,72,153,0.25)]"
              >
                Tigist Fiseha
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="text-xl md:text-2xl text-pink-700 dark:text-pink-300 mb-8 font-medium tracking-wide"
              >
                Script Writer · Journalist · E-learning Content Developer ·
                Podcaster
              </motion.p>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="flex justify-center md:justify-start gap-4"
              >
                <Link
                  href="/portfolio"
                  className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-600 to-fuchsia-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-pink-300/40 transition-transform duration-200 border-2 border-pink-400/30"
                >
                  View My Work
                </Link>
                <Link
                  href="/contact"
                  className="px-8 py-3 rounded-full bg-white/80 dark:bg-gray-900/80 text-pink-600 dark:text-pink-300 font-semibold border-2 border-pink-400/30 shadow hover:bg-pink-50 dark:hover:bg-pink-900/40 hover:scale-105 transition-transform duration-200"
                >
                  Get in Touch
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Featured Work Section */}
        <section className="py-20 bg-gradient-to-b from-pink-50 to-white dark:from-pink-950/20 dark:to-gray-900">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-12 text-center text-pink-600 dark:text-pink-400"
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
                  className="bg-white dark:bg-gray-800 p-6 rounded-lg border border-pink-100 dark:border-pink-900/50 hover:shadow-lg transition-shadow hover:border-pink-200 dark:hover:border-pink-800"
                >
                  <h3 className="text-xl font-semibold mb-2 text-pink-600 dark:text-pink-400">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <span className="inline-block px-3 py-1 bg-pink-100 dark:bg-pink-900/50 text-pink-600 dark:text-pink-400 rounded-full text-sm">
                    {project.category}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Podcast Showcase Section */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-6 text-center text-pink-600 dark:text-pink-400"
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
                  className="relative rounded-2xl overflow-hidden shadow-lg border-2 border-pink-100 dark:border-pink-900/40 bg-white/60 dark:bg-gray-800/60 hover:scale-105 hover:shadow-pink-200/40 transition-transform duration-300 group cursor-pointer"
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
                  <div className="absolute inset-0 bg-gradient-to-t from-pink-600/60 to-transparent opacity-0 group-hover:opacity-80 transition-opacity duration-300 flex items-end p-4">
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
                className="px-8 py-3 rounded-full bg-gradient-to-r from-pink-600 to-fuchsia-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-pink-300/40 transition-transform duration-200 border-2 border-pink-400/30"
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
                className="absolute top-4 right-4 text-pink-600 dark:text-pink-300 text-2xl font-bold hover:text-pink-800 dark:hover:text-pink-400 focus:outline-none"
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
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-4">
            <div className="max-w-3xl mx-auto flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
              {/* Personal Image */}
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="w-40 h-40 md:w-56 md:h-56 rounded-3xl overflow-hidden shadow-xl border-4 border-pink-200 dark:border-pink-500 bg-white/40 dark:bg-pink-900/30 backdrop-blur-lg flex-shrink-0 mb-8 md:mb-0"
              >
                <img
                  src="/personla-image/1747396061958.jpg"
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
                  className="text-3xl md:text-4xl font-bold mb-6 text-pink-600 dark:text-pink-400"
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
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                >
                  <Link href="/about" className="btn-primary">
                    Learn More About Me
                  </Link>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Interview Video Section */}
        <section className="py-20 bg-gradient-to-b from-pink-50 to-white dark:from-pink-950/20 dark:to-gray-900">
          <div className="container mx-auto px-4 flex flex-col items-center">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-pink-600 to-pink-400 dark:from-pink-400 dark:to-pink-300"
            >
              New Interview: Behind the Camera
            </motion.h2>
            <div className="w-full max-w-2xl rounded-2xl overflow-hidden shadow-xl border-2 border-pink-100 dark:border-pink-900/40 bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl mb-8">
              <video
                controls
                preload="metadata"
                playsInline
                poster="/personla-image/1747396061958.jpg"
                className="w-full h-72 md:h-96 object-cover bg-black"
                onError={(e) => {
                  console.error("Video error:", e);
                  const videoElement = e.target as HTMLVideoElement;
                  console.error("Video error code:", videoElement.error?.code);
                }}
              >
                <source src="/video/keyezerfu.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
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
              className="text-3xl md:text-4xl font-bold mb-4 text-center text-pink-600 dark:text-pink-400"
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
              className="flex items-center gap-3 px-8 py-3 rounded-full bg-gradient-to-r from-pink-600 to-fuchsia-500 text-white font-semibold shadow-lg hover:scale-105 hover:shadow-pink-300/40 transition-transform duration-200 border-2 border-pink-400/30 text-lg"
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
    </>
  );
}
