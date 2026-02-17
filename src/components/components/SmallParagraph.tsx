import React from 'react'

interface SmallParagraphProps {
    text: string
}

const SmallParagraph: React.FC<SmallParagraphProps> = ({ text }) => {
  return (
    <p className='text-zinc-600 text-sm md:text-base mt-1'> {text} </p>
  )
}

export default SmallParagraph