import React from 'react'

import type { Content } from '../../types/text'

const BigParagraph: React.FC<Content> = ({ text }) => {
  return (
    <p className='mt-4 text-zinc-700 text-base lg:text-xl leading-relaxed'> {text} </p>
  )
}

export default BigParagraph