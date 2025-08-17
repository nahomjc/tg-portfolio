"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

interface LoadingIntroProps {
  onLoadingComplete: () => void;
}

const LoadingIntro = ({ onLoadingComplete }: LoadingIntroProps) => {
  const [progress, setProgress] = useState(0);
  const [currentStep, setCurrentStep] = useState(0);

  const loadingSteps = [
    "Loading Assets",
    "Preparing Interface",
    "Establishing Connection",
    "Ready",
  ];

  useEffect(() => {
    // Faster, more efficient loading simulation
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(onLoadingComplete, 300);
          return 100;
        }
        // Update current step based on progress
        const newStep = Math.floor((prev / 100) * loadingSteps.length);
        if (newStep !== currentStep) {
          setCurrentStep(newStep);
        }
        return prev + 3; // Faster progress
      });
    }, 80); // Faster interval

    return () => {
      clearInterval(interval);
    };
  }, [onLoadingComplete, currentStep, loadingSteps.length]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="fixed inset-0 z-[9999] bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 flex items-center justify-center"
      >
        {/* Subtle Background Pattern */}
        <div className="absolute inset-0 opacity-5 dark:opacity-10">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg%20width%3D%2260%22%20height%3D%2260%22%20viewBox%3D%220%200%2060%2060%22%20xmlns%3D%22http%3A//www.w3.org/2000/svg%22%3E%3Cg%20fill%3D%22none%22%20fill-rule%3D%22evenodd%22%3E%3Cg%20fill%3D%22%233d4c41%22%20fill-opacity%3D%220.1%22%3E%3Ccircle%20cx%3D%2230%22%20cy%3D%2230%22%20r%3D%222%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        </div>

        {/* Main Content */}
        <div className="relative z-10 flex flex-col items-center max-w-md mx-auto px-6">
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{
              type: "spring",
              stiffness: 200,
              damping: 20,
            }}
            className="w-24 h-24 mb-8 relative"
          >
            <div className="w-full h-full bg-gradient-to-br from-[#3d4c41] via-[#4d5c51] to-[#2d3c31] rounded-2xl flex items-center justify-center text-white text-2xl font-bold shadow-lg">
              TF
            </div>
            <motion.div
              animate={{
                scale: [1, 1.05, 1],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="absolute inset-0 rounded-2xl border-2 border-[#3d4c41]/30"
            />
          </motion.div>

          {/* Loading Text */}
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-2xl font-bold mb-8 text-center text-[#3d4c41] dark:text-[#4d5c51]"
          >
            Welcome to Tigist&apos;s Portfolio
          </motion.h1>

          {/* Progress Bar */}
          <div className="w-full mb-6">
            <div className="w-full h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.3, ease: "easeOut" }}
                className="h-full bg-gradient-to-r from-[#3d4c41] to-[#4d5c51] rounded-full"
              />
            </div>
          </div>

          {/* Progress Percentage */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-sm text-gray-600 dark:text-gray-400 mb-8 font-medium"
          >
            {progress}% Complete
          </motion.div>

          {/* Loading Steps */}
          <div className="space-y-3 w-full">
            {loadingSteps.map((step, index) => (
              <motion.div
                key={step}
                initial={{ opacity: 0, x: -10 }}
                animate={{
                  opacity: currentStep >= index ? 1 : 0.4,
                  x: currentStep >= index ? 0 : -10,
                }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="flex items-center space-x-3"
              >
                <div className="flex items-center justify-center w-5 h-5">
                  {currentStep > index ? (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      className="w-2 h-2 bg-green-500 rounded-full"
                    />
                  ) : currentStep === index ? (
                    <motion.div
                      animate={{ scale: [1, 1.2, 1] }}
                      transition={{ duration: 1, repeat: Infinity }}
                      className="w-2 h-2 bg-[#3d4c41] dark:bg-[#4d5c51] rounded-full"
                    />
                  ) : (
                    <div className="w-2 h-2 bg-gray-300 dark:bg-gray-600 rounded-full" />
                  )}
                </div>
                <span className="text-sm text-gray-700 dark:text-gray-300 font-medium">
                  {step}
                </span>
              </motion.div>
            ))}
          </div>

          {/* Subtle Loading Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="mt-8 text-xs text-gray-500 dark:text-gray-400 text-center"
          >
            Please wait while we prepare your experience...
          </motion.div>
        </div>

        {/* Subtle Corner Decorations */}
        <div className="absolute top-8 left-8 w-16 h-16 border-l-2 border-t-2 border-[#3d4c41]/20 dark:border-[#4d5c51]/20 rounded-tl-lg" />
        <div className="absolute top-8 right-8 w-16 h-16 border-r-2 border-t-2 border-[#3d4c41]/20 dark:border-[#4d5c51]/20 rounded-tr-lg" />
        <div className="absolute bottom-8 left-8 w-16 h-16 border-l-2 border-b-2 border-[#3d4c41]/20 dark:border-[#4d5c51]/20 rounded-bl-lg" />
        <div className="absolute bottom-8 right-8 w-16 h-16 border-r-2 border-b-2 border-[#3d4c41]/20 dark:border-[#4d5c51]/20 rounded-br-lg" />
      </motion.div>
    </AnimatePresence>
  );
};

export default LoadingIntro;
