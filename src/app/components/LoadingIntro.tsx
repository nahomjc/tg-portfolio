import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const LoadingIntro = ({
  onLoadingComplete,
}: {
  onLoadingComplete: () => void;
}) => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 1);
      } else {
        onLoadingComplete();
      }
    }, 30);

    return () => clearTimeout(timer);
  }, [progress, onLoadingComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[9999] flex items-center justify-center bg-gradient-to-br from-pink-100 via-white to-pink-200 dark:from-gray-900 dark:via-pink-950/40 dark:to-gray-900 overflow-hidden"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(30)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-pink-400/60 dark:bg-pink-600/40 rounded-full blur-md"
            initial={{
              x: Math.random() * 1600 - 800,
              y: Math.random() * 900 - 450,
              opacity: 0.5 + Math.random() * 0.5,
              scale: 0.5 + Math.random(),
            }}
            animate={{
              x: Math.random() * 1600 - 800,
              y: Math.random() * 900 - 450,
              opacity: [0.5, 1, 0.5],
              scale: [0.5, 1.2, 0.5],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: i * 0.07,
            }}
          />
        ))}
      </div>
      {/* Glassmorphism card */}
      <motion.div
        initial={{ scale: 0.95, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.6 }}
        className="relative w-full max-w-lg px-8 py-12 bg-white/30 dark:bg-gray-900/40 rounded-3xl shadow-2xl border-2 border-pink-200/40 dark:border-pink-900/40 backdrop-blur-xl flex flex-col items-center"
        style={{ boxShadow: "0 8px 64px 0 rgba(236,72,153,0.15)" }}
      >
        {/* Animated glowing border */}
        <div className="absolute -inset-1 rounded-3xl pointer-events-none animate-glow-border" />
        {/* Animated logo */}
        <motion.div
          initial={{ scale: 0.7, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="mb-10"
        >
          <motion.div
            animate={{ rotate: [0, 360] }}
            transition={{ duration: 2.5, repeat: Infinity, ease: "linear" }}
            className="w-28 h-28 mx-auto mb-2 bg-gradient-to-tr from-pink-400 via-fuchsia-400 to-pink-200 rounded-full flex items-center justify-center shadow-lg border-4 border-white/60 dark:border-pink-400/40 relative"
          >
            <span className="text-4xl font-extrabold text-white drop-shadow-[0_2px_24px_rgba(236,72,153,0.25)] tracking-widest select-none">
              TF
            </span>
            <span className="absolute bottom-2 right-3 w-4 h-4 bg-pink-500 rounded-full blur-sm animate-pulse" />
          </motion.div>
        </motion.div>
        {/* Progress bar with neon glow */}
        <div className="relative w-full h-3 bg-pink-100 dark:bg-pink-900/40 rounded-full overflow-hidden shadow-inner mb-8">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="absolute top-0 left-0 h-full bg-gradient-to-r from-pink-500 via-fuchsia-400 to-pink-300 shadow-[0_0_16px_4px_rgba(236,72,153,0.25)] rounded-full"
            style={{ boxShadow: "0 0 24px 4px #ec4899aa" }}
          />
        </div>
        {/* Loading text */}
        <motion.p
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 1.5, repeat: Infinity }}
          className="text-lg md:text-xl font-semibold text-pink-700 dark:text-pink-300 tracking-wide text-center mb-2"
        >
          Loading your experience...
        </motion.p>
        <p className="text-sm text-gray-500 dark:text-gray-400 text-center">
          Please wait a moment
        </p>
      </motion.div>
    </motion.div>
  );
};

export default LoadingIntro;
