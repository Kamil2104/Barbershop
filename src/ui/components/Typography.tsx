import type { ElementType, ReactNode } from 'react'

interface TypographyProps {
  variant: 'h1' | 'h2' | 'h4' | 'p-lg' | 'p-sm'
  children: ReactNode
  className?: string
}

const Typography = ({ variant, children, className = '' }: TypographyProps) => {
  const styles = {
    // Big title
    h1: "text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2 md:mb-6 lg:mb-10",
    // Medium title
    h2: "text-2xl md:text-3xl lg:text-4xl mt-4 md:mt-0 font-semibold tracking-tight",
    // Small title
    h4: "font-semibold uppercase tracking-wide text-base lg:text-xl",
    // Big paragraph
    "p-lg": "text-base lg:text-xl leading-relaxed mt-4",
    // Small paragraph
    "p-sm": "text-sm md:text-base"
  }

  const Tag: ElementType =
    variant === 'h1' || variant === 'h2' || variant === 'h4' ? variant : 'p'

  return (
    <Tag className={`${styles[variant]} ${className}`}>
      {children}
    </Tag>
  )
}

export default Typography