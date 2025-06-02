"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingIntroProps {
  onLoadingComplete: () => void;
}

const LoadingIntro = ({ onLoadingComplete }: LoadingIntroProps) => {
  const [progress, setProgress] = useState(0);
  const [showParticles, setShowParticles] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);

  const loadingSteps = [
    "Crafting Stories",
    "Loading Creative Assets",
    "Preparing Your Experience",
    "Welcome to My World",
  ];

  useEffect(() => {
    // Start particle animation after a short delay
    const particleTimer = setTimeout(() => {
      setShowParticles(true);
    }, 500);

    // Simulate loading progress
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 500);
          return 100;
        }
        // Update current step based on progress
        setCurrentStep(Math.floor((prev / 100) * loadingSteps.length));
        return prev + 2;
      });
    }, 50);

    return () => {
      clearInterval(interval);
      clearTimeout(particleTimer);
    };
  }, [onLoadingComplete]);

  // Generate creative particles
  const particles = Array.from({ length: 25 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 2 + 1,
    duration: Math.random() * 3 + 2,
    delay: Math.random() * 2,
    color: Math.random() > 0.5 ? "#ec4899" : "#f472b6", // Pink shades
  }));

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-gradient-to-br from-pink-950 via-pink-900 to-pink-950 flex items-center justify-center overflow-hidden"
      >
        {/* Elegant Background Pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1)_0%,transparent_100%)] opacity-50" />
        <div className="absolute inset-0 bg-[linear-gradient(45deg,rgba(255,255,255,0.05)_25%,transparent_25%,transparent_75%,rgba(255,255,255,0.05)_75%)] bg-[length:20px_20px]" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-pink-500/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.3, 0.2],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-pink-400/10 rounded-full blur-3xl"
          />
        </div>

        {/* Particles */}
        {showParticles && (
          <div className="absolute inset-0">
            {particles.map((particle) => (
              <motion.div
                key={particle.id}
                initial={{ opacity: 0, scale: 0 }}
                animate={{
                  opacity: [0, 0.6, 0],
                  scale: [0, 1, 0],
                  x: [particle.x + "%", particle.x + 10 + "%"],
                  y: [particle.y + "%", particle.y - 10 + "%"],
                }}
                transition={{
                  duration: particle.duration,
                  delay: particle.delay,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute rounded-full blur-[1px]"
                style={{
                  width: particle.size,
                  height: particle.size,
                  backgroundColor: particle.color,
                }}
              />
            ))}
          </div>
        )}

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center">
          {/* Logo Animation */}
          <motion.div
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{
              type: "spring",
              stiffness: 260,
              damping: 20,
            }}
            className="w-32 h-32 mb-12 relative"
          >
            <motion.div
              animate={{
                rotate: [0, 360],
                scale: [1, 1.1, 1],
              }}
              transition={{
                rotate: {
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                },
                scale: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
              className="absolute inset-0 bg-gradient-to-br from-pink-500 via-pink-400 to-pink-300 rounded-2xl shadow-2xl"
              style={{
                boxShadow: "0 0 30px rgba(236, 72, 153, 0.3)",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-4xl font-bold">
              TF
            </div>
          </motion.div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl font-bold mb-12 tracking-wider"
          >
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-pink-300 via-pink-200 to-pink-100">
              Welcome to My Creative Space
            </span>
          </motion.div>

          {/* Progress Bar Container */}
          <div className="w-96 h-2 bg-pink-900/30 rounded-full overflow-hidden mb-6 backdrop-blur-sm">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-gradient-to-r from-pink-400 via-pink-300 to-pink-200 relative"
            >
              <motion.div
                animate={{
                  opacity: [0.5, 1, 0.5],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 bg-white/20"
              />
            </motion.div>
          </div>

          {/* Progress Percentage */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-pink-200 mb-10"
          >
            {progress}%
          </motion.div>

          {/* Loading Steps */}
          <div className="space-y-3">
            {loadingSteps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: currentStep >= index ? 1 : 0.3,
                  x: currentStep >= index ? 0 : -20,
                }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-3 text-pink-100"
              >
                <motion.div
                  animate={{
                    scale: currentStep >= index ? [1, 1.2, 1] : 1,
                  }}
                  transition={{
                    duration: 1,
                    repeat: currentStep >= index ? Infinity : 0,
                  }}
                  className={`w-2 h-2 rounded-full ${
                    currentStep >= index
                      ? "bg-gradient-to-r from-pink-300 to-pink-200"
                      : "bg-pink-800"
                  }`}
                />
                <span className="text-sm tracking-wider font-light">
                  {step}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-pink-950 to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-pink-950 to-transparent" />
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingIntro;
