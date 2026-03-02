import React from 'react'

import { Link as RouterLink } from 'react-router-dom'

import { scrollTo } from '../../utils/scrollTo'

interface SmartLinkProps {
  href: string
  children: React.ReactNode
  className?: string
  onClick?: () => void
}

const SmartLink: React.FC<SmartLinkProps> = ({ href, children, className, onClick }) => {
  const isExternal = href.startsWith('http') || href.startsWith('mailto:') || href.startsWith('tel:')
  const isAnchor = href.startsWith('#')

  // Handling of external links (Booksy, Social Media, Phone)
  if (isExternal) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={className}
        onClick={onClick}
      >
        {children}
      </a>
    )
  }

  // Handling of anchors (Smooth Scroll on the same page)
  if (isAnchor) {
    return (
      <a
        href={href}
        className={className}
        onClick={(e) => {
          e.preventDefault()
          scrollTo(href.replace('#', ''))
          onClick?.()
        }}
      >
        {children}
      </a>
    )
  }

  // Handling of navigation to SPA (e.g. /privacy, /terms)
  return (
    <RouterLink to={href} className={className} onClick={onClick}>
      {children}
    </RouterLink>
  )
}

export default SmartLink