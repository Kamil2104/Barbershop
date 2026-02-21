import React from 'react'

interface SectionProps {
  children: React.ReactNode
  id?: string
  className?: string
  background?: string
}

const Section: React.FC<SectionProps> = ({
  children,
  id,
  className,
  background = 'bg-white'
}) => {
  return (
    <section id={id} className={`
        w-full
        px-10 md:px-15 lg:px-20
        pt-12 md:pt-14 lg:pt-20
        pb-6 md:pb-7 lg:pb-10
        ${background}
        ${className ?? ''}`
    }>
       {children}
    </section>
  )
}

export default Section