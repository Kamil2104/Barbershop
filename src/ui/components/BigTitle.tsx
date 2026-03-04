import type { Content } from '@/types/text'

const BigTitle = ({ text, className }: Content) => {
  return (
    <h1 className={`text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-2 md:mb-6 lg:mb-10 ${className ?? ''}`}>
      {text}
    </h1>
  )
}

export default BigTitle