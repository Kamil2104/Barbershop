import React from 'react'

import type { Content } from '../../types/text'

const SmallTitle: React.FC<Content> = ({ text }) => {
  return (
    <h4 className='font-semibold text-zinc-900 uppercase tracking-wide text-base lg:text-xl'> {text} </h4>
  )
}

export default SmallTitle