import React from 'react'

interface AnchorButtonProps {
    text: string,
    href: string,
    onClick?: () => void,
    className?: string
}

const AnchorButton: React.FC<AnchorButtonProps> = ({ text, href, onClick, className }) => {
  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    const isAnchorLink = href.startsWith('#')

    if (isAnchorLink) {
      e.preventDefault()
    }

    onClick?.()
  }

  return (
    <a
      href={href}
      onClick={handleClick}
      className={`uppercase tracking-wide rounded-md transition-all duration-300 cursor-pointer ${className ?? ''}`}
      target="_blank"
      rel="noopener noreferrer"
    >
      {text}
    </a>
  )
}

export default AnchorButton