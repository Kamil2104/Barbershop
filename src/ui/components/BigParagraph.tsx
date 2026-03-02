import React from 'react'

import type { Content } from '../../types/text'

const BigParagraph: React.FC<Content> = ({ text, className }) => {
  return (
    <p className={`text-base lg:text-xl leading-relaxed mt-4 ${className ?? ''}`}>
      {text}
    </p>
  )
}

export default BigParagraph