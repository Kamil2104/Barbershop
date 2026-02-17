import React from 'react'

interface SmallTitleProps {
    text: string
}

const SmallTitle: React.FC<SmallTitleProps> = ({ text }) => {
  return (
    <h4 className='font-semibold text-zinc-900 uppercase tracking-wide text-base lg:text-xl'> {text} </h4>
  )
}

export default SmallTitle