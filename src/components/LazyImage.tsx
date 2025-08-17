import Image, { ImageProps } from "next/image";
import { useState } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import ImagePlaceholder from "./ImagePlaceholder";

interface LazyImageProps
  extends Omit<ImageProps, "onLoad" | "onError" | "placeholder"> {
  customPlaceholder?: React.ReactNode;
  fallbackSrc?: string;
}

export default function LazyImage({
  src,
  alt,
  customPlaceholder,
  fallbackSrc = "/placeholder.jpg",
  className = "",
  ...props
}: LazyImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentSrc, setCurrentSrc] = useState<string | null>(null);

  const { elementRef, isIntersecting } = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: "100px",
  });

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    if (currentSrc !== fallbackSrc) {
      setCurrentSrc(fallbackSrc);
    } else {
      setIsLoaded(true);
    }
  };

  // Only set the src when the element is intersecting
  if (isIntersecting && !currentSrc) {
    setCurrentSrc(src as string);
  }

  return (
    <div
      ref={elementRef as React.RefObject<HTMLDivElement>}
      className={`relative ${className}`}
    >
      {!isLoaded &&
        (customPlaceholder || <ImagePlaceholder variant="default" />)}

      {currentSrc && (
        <Image
          {...props}
          src={currentSrc}
          alt={alt}
          onLoad={handleLoad}
          onError={handleError}
          className={`transition-opacity duration-500 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${className}`}
        />
      )}
    </div>
  );
}
