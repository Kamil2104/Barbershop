import { useState, useMemo } from "react";

import useScreenSize from "@/hooks/useScreenSize";

import Section from "@/ui/layout/Section";
import Typography from "@/ui/components/Typography";
import ChangeViewButton from "@/ui/components/ChangeViewButton";
import AnimatedImage from "../components/AnimatedImage";

import { SHOP_IMAGES } from "@/data/galleryImages";

import type { Image } from "@/types/images";

const Gallery = () => {
  const [expanded, setExpanded] = useState(false);

  const itemsToShow = useScreenSize() === 'md' ? 4 : 3

  const visiblePhotos = useMemo(
    () => (expanded ? SHOP_IMAGES : SHOP_IMAGES.slice(0, itemsToShow)),
    [expanded, itemsToShow],
  );

  return (
    <Section id="gallery" background="bg-surface-primary">
      <Typography variant="h1" className="text-text-primary">
        Gallery
      </Typography>

      <div className="mt-6 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visiblePhotos.map((img: Image) => (
          <div key={img.src} className="overflow-hidden rounded-xl group">
            <AnimatedImage className="h-[200px] md:h-[300px] lg:h-[400px]" {...img} />
          </div>
        ))}
      </div>

      <div className="flex justify-center w-full mt-7 md:mt-10">
        <ChangeViewButton
          text={expanded ? "Show Less" : "Show More"}
          iconRotation={expanded ? 'rotate-180' : ''}
          onClick={() =>
            setExpanded(prev => !prev)
          }
          className="px-4 py-2 md:px-6 md:py-3 mb-6 md:mb-3 lg:mb-0"
        />
      </div>
    </Section>
  );
};

export default Gallery;
