import React from 'react'

import type { Content } from '../../types/text'

const SmallTitle: React.FC<Content> = ({ text, textColor }) => {
  return (
    <h4 className={`font-semibold uppercase tracking-wide text-base lg:text-xl ${textColor ? textColor : 'text-zinc-900'}`}>
      {text}
    </h4>
  )
}

export default SmallTitle