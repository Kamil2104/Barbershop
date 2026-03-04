import React from 'react'

import type{ Image } from '@/types/images'

const Photo: React.FC<Image> = ({src, alt}) => {
  return (
    <div
        key={src}
        className='overflow-hidden rounded-xl group'
    >
        <img
            src={src}
            alt={alt}
            className='w-full h-[200px] md:h-[300px] lg:h-[400px] object-cover lg:grayscale lg:transition-all lg:duration-500 lg:group-hover:scale-105 lg:group-hover:grayscale-0'
            loading='lazy'
        />
    </div>
  )
}

export default React.memo(Photo)