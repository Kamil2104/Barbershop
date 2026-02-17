import React from 'react'

import type { Content } from '../../types/text'

const SmallParagraph: React.FC<Content> = ({ text }) => {
  return (
    <p className='text-zinc-600 text-sm md:text-base mt-1'> {text} </p>
  )
}

export default SmallParagraph