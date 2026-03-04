import type { Content } from '@/types/text'

const MediumTitle = ({ text, className }: Content) => {
  return (
    <h2 className={`text-2xl md:text-3xl lg:text-4xl mt-4 md:mt-0 font-semibold tracking-tight ${className ?? className}`}>
       {text}
    </h2>
  )
}

export default MediumTitle