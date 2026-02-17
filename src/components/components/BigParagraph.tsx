import React from 'react'

interface BigParagraphProps {
    text: string
}

const BigParagraph: React.FC<BigParagraphProps> = ({ text }) => {
  return (
    <p className='mt-4 text-zinc-700 text-base lg:text-xl leading-relaxed'> {text} </p>
  )
}

export default BigParagraph