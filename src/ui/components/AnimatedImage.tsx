import type { Image } from "@/types/images"

const AnimatedImage = ({ src, alt, className }: Image) => {
  return (
    <img
        src={src}
        alt={alt}
        className={`w-full h-full object-cover object-top lg:grayscale lg:group-hover:grayscale-0 lg:transition-all lg:duration-700 lg:group-hover:scale-105 ${className ?? ""}`}
        loading="lazy"
    />
  )
}

export default AnimatedImage