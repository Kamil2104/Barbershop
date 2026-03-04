import type { Content } from '@/types/text'

const SmallTitle = ({ text, className }: Content) => {
  return (
    <h4 className={`font-semibold uppercase tracking-wide text-base lg:text-xl ${className ?? ''}`}>
      {text}
    </h4>
  )
}

export default SmallTitle