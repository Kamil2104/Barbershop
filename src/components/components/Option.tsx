import React from 'react'

import type { MenuItem } from '../../types/navigation'

interface OptionProps {
  item: MenuItem
  onClick?: () => void
}

const Option: React.FC<OptionProps> = ({ item, onClick }) => {
  return (
    <a
      href={item.href}
      onClick={onClick}
      className="relative text-sm font-bold uppercase tracking-wide text-zinc-900 lg:text-zinc-900 lg:after:content-[''] lg:after:absolute lg:after:left-0 lg:after:bottom-0 lg:after:h-px lg:after:w-0 lg:after:bg-zinc-900 lg:after:transition-all lg:hover:after:w-full transition-colors duration-200"
    >
      {item.label}
    </a>
  )
}

export default Option