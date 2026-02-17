import React from 'react'

import type { Content } from '../../types/text'

const BigTitle: React.FC<Content> = ({ text, textColor }) => {
  return (
    <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-6 ${textColor}`}>
        {text}
    </h1>
  )
}

export default BigTitle