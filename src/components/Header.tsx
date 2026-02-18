import React, { useState } from 'react'

import type { MenuItem } from '../types/navigation'

import Option from './components/Option'
import AnchorButton from './components/AnchorButton'

interface HeaderProps {
    items: MenuItem[]
}

interface NavContentProps {
  items: MenuItem[]
  onItemClick?: () => void
  layoutClassName?: string
}

const Header: React.FC<HeaderProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="w-full min-h-[10vh] bg-zinc-100 text-zinc-900 flex items-center justify-between px-6 lg:px-12">
      {/* Logo */}
      <div className="text-2xl font-semibold tracking-wide">
        Barbershop
      </div>

      {/* Navigation */}
      <nav className="hidden lg:flex">
        <NavContent
          items={items}
          layoutClassName="flex items-center gap-6"
        />
      </nav>

      {/* Hamburger icon */}
      <div className="lg:hidden">
        <button
          onClick={() => {setIsOpen(!isOpen)}}
          className="flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-zinc-900"></span>
          <span className="w-6 h-0.5 bg-zinc-900"></span>
          <span className="w-6 h-0.5 bg-zinc-900"></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-[10vh] left-0 w-full bg-zinc-100/95 backdrop-blur-md border-t border-zinc-200 flex flex-col items-center gap-8 py-7 md:py-9 z-50 lg:hidden shadow-xl transform transition-all duration-300 ease-in-out origin-top ${
          isOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        <NavContent
          items={items}
          onItemClick={() => setIsOpen(false)}
          layoutClassName="flex flex-col items-center gap-6"
        />
      </div>
    </header>
  )
}

const NavContent: React.FC<NavContentProps> = ({ items, onItemClick, layoutClassName }) => {
  return (
    <div className={layoutClassName}>
      {items.map((item) => (
        <Option
          key={item.label}
          item={item}
          onClick={onItemClick}
        />
      ))}

      <AnchorButton
        text='Book now'
        href='#booking'
        onClick={onItemClick}
        className='px-5 py-2 bg-zinc-900 text-zinc-100 text-sm font-medium hover:bg-zinc-700 transition-colors duration-200'
      />
    </div>
  )
}

export default Header