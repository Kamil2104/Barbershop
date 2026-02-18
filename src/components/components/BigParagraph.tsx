import React from 'react'

import type { Content } from '../../types/text'

const BigParagraph: React.FC<Content> = ({ text, textColor }) => {
  return (
    <p className={`mt-4 text-zinc-700 text-base lg:text-xl leading-relaxed ${textColor ? textColor : 'text-zinc-700'}`}>
      {text}
    </p>
  )
}

export default BigParagraph