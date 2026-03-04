import type { Content } from '@/types/text'

const SmallParagraph = ({ text, className }: Content) => {
  return (
    <p className={`text-sm md:text-base ${className ?? ''}`}>
      {text}
    </p>
  )
}

export default SmallParagraph