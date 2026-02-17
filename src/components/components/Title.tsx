import React from 'react'

interface TitleProps {
    text: string,
    textColor: string
}

const Title: React.FC<TitleProps> = ({ text, textColor }) => {
  return (
    <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight ${textColor}`}>
        {text}
    </h1>
  )
}

export default Title