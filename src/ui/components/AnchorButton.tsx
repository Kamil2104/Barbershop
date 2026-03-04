import SmartLink from '@/ui/components/SmartLink'

interface AnchorButtonProps {
    text: string
    href: string
    onClick?: () => void
    className?: string
}

const AnchorButton= ({ text, href, onClick, className }: AnchorButtonProps) => {
  return (
    <SmartLink
      href={href}
      onClick={onClick}
      className={`uppercase tracking-wide rounded-md transition-all duration-300 cursor-pointer flex items-center justify-center ${className ?? ''}`}
    >
      {text}
    </SmartLink>
  )
}

export default AnchorButton