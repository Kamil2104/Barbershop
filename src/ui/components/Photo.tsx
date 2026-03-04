import React from 'react'

import type{ Image } from '@/types/images'

interface PhotoProps {
    index: number,
    img: Image
}

const Photo: React.FC<PhotoProps> = ({index, img}) => {
  return (
    <div
        key={index}
        className='overflow-hidden rounded-xl group'
    >
        <img
            src={img.src}
            alt={img.alt}
            className='w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover lg:grayscale lg:transition-all lg:duration-500 lg:group-hover:scale-105 lg:group-hover:grayscale-0'
            loading='lazy'
        />
    </div>
  )
}

export default Photo