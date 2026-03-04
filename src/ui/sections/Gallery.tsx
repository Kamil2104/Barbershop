import { useState, useMemo } from 'react'

import useServicesItemsLimit from '@/hooks/useServicesItemsLimit'

import Section from '@/ui/layout/Section'
import Typography from '@/ui/components/Typography'
import Photo from '@/ui/components/Photo'

import { images }from '@/data/galleryImages'

import type { Image } from '@/types/images'

const Gallery = () => {
  const [expanded, setExpanded] = useState(false)

  const itemsToShow = useServicesItemsLimit({ section: 'gallery' })

  const visiblePhotos = useMemo(() =>expanded ? images : images.slice(0, itemsToShow), [expanded, itemsToShow])

  return (
    <Section id='gallery' background='bg-surface-primary'>
      <Typography variant="h1" className='text-text-primary'>
        Gallery
      </Typography>

      <div className='mt-12 grid grid-cols-2 lg:grid-cols-3 gap-6'>
        {visiblePhotos.map((img: Image) => (
          <Photo key={img.src} {...img} />
        ))}
      </div>

      <div className='flex justify-center w-full mt-10'>
        <button
          onClick={() =>
            setExpanded(!expanded)
            }
          className="group inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 mb-6 md:mb-3 lg:mb-0 rounded-full border border-border-subtle bg-surface-secondary text-text-primary text-xs lg:text-sm font-semibold uppercase tracking-wider transition-colors duration-300 hover:bg-text-primary/5 hover:border-text-primary cursor-pointer"
        >
          <span>{expanded ? 'Show Less' : 'Show More'}</span>
          <span
            className={`transition-transform duration-300 ${expanded ? 'rotate-180' : ''}`}
          >
            ↓
          </span>
        </button>
      </div>
    </Section>
  )
}

export default Gallery