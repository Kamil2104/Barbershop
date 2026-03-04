import type { Content } from '@/types/text'

const BigParagraph = ({ text, className }: Content) => {
  return (
    <p className={`text-base lg:text-xl leading-relaxed mt-4 ${className ?? ''}`}>
      {text}
    </p>
  )
}

export default BigParagraph