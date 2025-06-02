export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-[#3d4c41]/10 dark:from-gray-900 dark:to-[#3d4c41]/20">
      <div className="relative">
        {/* Animated circles */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-16 h-16 border-4 border-[#3d4c41]/20 dark:border-[#3d4c41]/40 border-t-[#3d4c41] dark:border-t-[#4d5c51] rounded-full animate-spin"></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-24 h-24 border-4 border-[#3d4c41]/10 dark:border-[#3d4c41]/30 border-t-[#3d4c41] dark:border-t-[#4d5c51] rounded-full animate-spin"
            style={{ animationDuration: "2s" }}
          ></div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div
            className="w-32 h-32 border-4 border-[#3d4c41]/5 dark:border-[#3d4c41]/20 border-t-[#3d4c41] dark:border-t-[#4d5c51] rounded-full animate-spin"
            style={{ animationDuration: "3s" }}
          ></div>
        </div>

        {/* Loading text */}
        <div className="relative z-10 text-center mt-40">
          <h2 className="text-2xl font-semibold text-[#3d4c41] dark:text-[#4d5c51]">
            Loading...
          </h2>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            Please wait while we prepare your experience
          </p>
        </div>
      </div>
    </div>
  );
}
