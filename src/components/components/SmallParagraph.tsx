import React from 'react'

import type { Content } from '../../types/text'

const SmallParagraph: React.FC<Content> = ({ text, className }) => {
  return (
    <p className={`text-sm md:text-base ${className ?? ''}`}>
      {text}
    </p>
  )
}

export default SmallParagraph