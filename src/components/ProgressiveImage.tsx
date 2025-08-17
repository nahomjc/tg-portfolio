import Image, { ImageProps } from "next/image";
import { useState } from "react";

interface ProgressiveImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
  lowQualitySrc?: string;
  fallbackSrc?: string;
}

export default function ProgressiveImage({
  src,
  alt,
  lowQualitySrc,
  fallbackSrc = "/placeholder.jpg",
  className = "",
  ...props
}: ProgressiveImageProps) {
  const [isHighQualityLoaded, setIsHighQualityLoaded] = useState(false);
  const [isLowQualityLoaded, setIsLowQualityLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string | null>(null);

  const handleHighQualityLoad = () => {
    setIsHighQualityLoaded(true);
  };

  const handleLowQualityLoad = () => {
    setIsLowQualityLoaded(true);
  };

  const handleError = () => {
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setIsHighQualityLoaded(true);
    }
  };

  // Start with low quality if available
  if (!currentSrc) {
    setCurrentSrc(lowQualitySrc || (src as string));
  }

  return (
    <div className={`relative ${className}`}>
      {/* Low quality image (blurred) */}
      {lowQualitySrc && isLowQualityLoaded && !isHighQualityLoaded && (
        <Image
          {...props}
          src={lowQualitySrc}
          alt={alt}
          onLoad={handleLowQualityLoad}
          className={`absolute inset-0 object-cover blur-sm scale-110 ${className}`}
          quality={10}
        />
      )}

      {/* High quality image */}
      <Image
        {...props}
        src={src}
        alt={alt}
        onLoad={handleHighQualityLoad}
        onError={handleError}
        className={`transition-opacity duration-700 ${
          isHighQualityLoaded ? "opacity-100" : "opacity-0"
        } ${className}`}
      />
    </div>
  );
}
