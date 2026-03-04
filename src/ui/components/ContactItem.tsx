import React from 'react'

import type { ContactOption } from '@/types/contact'

const ContactItem = ({ text, link, logo }: ContactOption) => {
  return (
    <li key={text}>
        <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 md:gap-3 text-text-muted hover:text-text-inverted transition-colors duration-300"
        >
            <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                {logo}
            </span>
            <span className="text-sm tracking-wide">
                {text}
            </span>
        </a>
    </li>
  )
}

export default React.memo(ContactItem)