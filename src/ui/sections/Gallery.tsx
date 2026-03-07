import { useState, useMemo } from "react";

import useServicesItemsLimit from "@/hooks/useServicesItemsLimit";

import Section from "@/ui/layout/Section";
import Typography from "@/ui/components/Typography";
import Photo from "@/ui/components/Photo";
import ExpandButton from "@/ui/components/ExpandButton";

import { images } from "@/data/galleryImages";

import type { Image } from "@/types/images";

const Gallery = () => {
  const [expanded, setExpanded] = useState(false);

  const itemsToShow = useServicesItemsLimit({ section: "gallery" });

  const visiblePhotos = useMemo(
    () => (expanded ? images : images.slice(0, itemsToShow)),
    [expanded, itemsToShow],
  );

  return (
    <Section id="gallery" background="bg-surface-primary">
      <Typography variant="h1" className="text-text-primary">
        Gallery
      </Typography>

      <div className="mt-6 md:mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {visiblePhotos.map((img: Image) => (
          <Photo key={img.src} {...img} />
        ))}
      </div>

      <div className="flex justify-center w-full mt-7 md:mt-10">
        <ExpandButton
          isExpanded={expanded}
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
