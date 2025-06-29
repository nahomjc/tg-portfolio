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
    "Initializing Neural Interface",
    "Synchronizing Digital Assets",
    "Calibrating Experience Matrix",
    "Establishing Connection",
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
  const particles = Array.from({ length: 40 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 3 + 1,
    duration: Math.random() * 4 + 2,
    delay: Math.random() * 2,
    color: Math.random() > 0.5 ? "#3d4c41" : "#4d5c51", // Dark forest colors
  }));

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-gradient-to-br from-[#2d3c31] via-[#3d4c41] to-[#2d3c31] flex items-center justify-center overflow-hidden"
      >
        {/* Futuristic Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:50px_50px]" />

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-[#3d4c41]/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="absolute bottom-1/4 right-1/4 w-[600px] h-[600px] bg-[#4d5c51]/10 rounded-full blur-3xl"
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
                  opacity: [0, 0.8, 0],
                  scale: [0, 1, 0],
                  x: [particle.x + "%", particle.x + 15 + "%"],
                  y: [particle.y + "%", particle.y - 15 + "%"],
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
                  boxShadow: `0 0 ${particle.size * 2}px ${particle.color}`,
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
            className="w-40 h-40 mb-12 relative"
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
              className="absolute inset-0 bg-gradient-to-br from-[#3d4c41] via-[#4d5c51] to-[#2d3c31] rounded-2xl"
              style={{
                boxShadow: "0 0 40px rgba(61, 76, 65, 0.3)",
              }}
            />
            <div className="absolute inset-0 flex items-center justify-center text-white text-5xl font-bold tracking-wider">
              TF
            </div>
          </motion.div>

          {/* Loading Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="text-4xl font-bold mb-12 tracking-wider text-center w-full"
          >
            <span className="text-white">Enter the Digital Frontier</span>
          </motion.div>

          {/* Progress Bar Container */}
          <div className="w-full max-w-96 h-3 bg-[#2d3c31]/50 rounded-full overflow-hidden mb-6 backdrop-blur-sm border border-[#3d4c41]/20">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-gradient-to-r from-[#3d4c41] via-[#4d5c51] to-[#2d3c31] relative"
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
                className="absolute inset-0 bg-white/30"
              />
            </motion.div>
          </div>

          {/* Progress Percentage */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-white mb-10 font-mono"
          >
            {progress}%
          </motion.div>

          {/* Loading Steps */}
          <div className="space-y-4 w-full max-w-96">
            {loadingSteps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -20 }}
                animate={{
                  opacity: currentStep >= index ? 1 : 0.3,
                  x: currentStep >= index ? 0 : -20,
                }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center space-x-4 text-white"
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
                      ? "bg-gradient-to-r from-[#3d4c41] to-[#4d5c51]"
                      : "bg-[#2d3c31]"
                  }`}
                />
                <span className="text-sm tracking-wider font-mono">{step}</span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative Elements */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#2d3c31] to-transparent" />
        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#2d3c31] to-transparent" />
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingIntro;
