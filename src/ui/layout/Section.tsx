import React from 'react'

interface SectionProps {
  children: React.ReactNode
  id?: string
  className?: string
  background?: string
}

const Section = ({
  children,
  id,
  className,
  background = 'bg-white'
}: SectionProps) => {
  return (
    <section id={id} className={`
        w-full
        px-10 md:px-15 lg:px-20
        pt-6 md:pt-10 lg:pt-12
        pb-2 md:pb-7 lg:pb-10
        ${background}
        ${className ?? ''}`
    }>
       {children}
    </section>
  )
}

export default Section