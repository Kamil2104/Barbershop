import React from 'react'

interface AnchorButtonProps {
    text: string,
    href: string,
    onClick?: () => void,
    className?: string
}

const AnchorButton: React.FC<AnchorButtonProps> = ({ text, href, onClick, className }) => {
  return (
    <a
       href={href}
       onClick={onClick}
       className={`uppercase tracking-wide rounded-md transition-all duration-300 ${className ?? ''}`}
    >
       {text}
    </a>
  )
}

export default AnchorButton