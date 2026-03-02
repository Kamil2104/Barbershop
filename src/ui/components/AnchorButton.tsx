import React from 'react'

import SmartLink from './SmartLink'

interface AnchorButtonProps {
    text: string
    href: string
    onClick?: () => void
    className?: string
}

const AnchorButton: React.FC<AnchorButtonProps> = ({ text, href, onClick, className }) => {
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