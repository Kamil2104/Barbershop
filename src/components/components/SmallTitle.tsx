import React from 'react'

import type { Content } from '../../types/text'

const SmallTitle: React.FC<Content> = ({ text, className }) => {
  return (
    <h4 className={`font-semibold uppercase tracking-wide text-base lg:text-xl ${className ?? ''}`}>
      {text}
    </h4>
  )
}

export default SmallTitle