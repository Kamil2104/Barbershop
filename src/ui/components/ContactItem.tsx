import React from 'react'

import type { ContactOption } from '@/types/contact'

const ContactItem: React.FC<{ item: ContactOption }> = ({ item }) => {
  return (
    <li key={item.text}>
        <a
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-1.5 md:gap-3 text-text-muted hover:text-text-inverted transition-colors duration-300"
        >
            <span className="text-lg group-hover:scale-110 transition-transform duration-300">
                {item.logo}
            </span>
            <span className="text-sm tracking-wide">
                {item.text}
            </span>
        </a>
    </li>
  )
}

export default ContactItem