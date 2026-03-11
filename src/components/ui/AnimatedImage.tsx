import { useState } from "react";

import LoadingImage from "./LoadingImage";
import FallbackImage from "./FallbackImage";

import type { Image } from "@/types/images";

const AnimatedImage = ({ src, alt, className }: Image) => {
  const [hasError, setHasError] = useState<boolean>(false);
  const [isLoaded, setIsLoaded] = useState<boolean>(false);

  return (
    <div className="relative w-full h-full overflow-hidden">
         {!isLoaded && !hasError && <LoadingImage />}

        {hasError ? (
          <FallbackImage alt={alt} />
        ) : (

          <img
            src={src}
            alt={alt}
            className={`w-full h-full object-cover transition-opacity duration-500 ${
              isLoaded ? "opacity-100" : "opacity-0"
            } lg:grayscale lg:group-hover:grayscale-0 lg:transition-all lg:duration-700 lg:group-hover:scale-105 ${className ?? ""}`}
            loading="lazy"
            onLoad={() => setIsLoaded(true)}
            onError={() => setHasError(true)}
          />
        )}
    </div>
  );
};

export default AnimatedImage;
