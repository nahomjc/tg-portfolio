import { motion } from 'framer-motion';

interface ImagePlaceholderProps {
  className?: string;
  variant?: 'default' | 'profile' | 'card';
}

export default function ImagePlaceholder({ 
  className = '', 
  variant = 'default' 
}: ImagePlaceholderProps) {
  const baseClasses = "bg-gradient-to-br from-gray-200 to-gray-300 dark:from-gray-700 dark:to-gray-800 animate-pulse";
  
  const variantClasses = {
    default: "rounded-lg",
    profile: "rounded-full",
    card: "rounded-xl"
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
    >
      <div className="w-full h-full flex items-center justify-center">
        <svg
          className="w-8 h-8 text-gray-400 dark:text-gray-500"
          fill="currentColor"
          viewBox="0 0 20 20"
        >
          <path
            fillRule="evenodd"
            d="M4 3a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V5a2 2 0 00-2-2H4zm12 12H4l4-8 3 6 2-4 3 6z"
            clipRule="evenodd"
          />
        </svg>
      </div>
    </motion.div>
  );
}
