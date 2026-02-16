import React, { useState } from 'react'

import type { MenuItem } from '../types/navigation'

import Option from './Option'

interface HeaderProps {
    items: MenuItem[]
}

const Header: React.FC<HeaderProps> = ({ items }) => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <header className="relative w-full min-h-[10vh] bg-zinc-100 text-zinc-900 flex items-center justify-between px-6 lg:px-12">
      {/* Logo */}
      <div className="text-2xl font-semibold tracking-wide">
        Barbershop
      </div>

      {/* Navigation */}
      <nav className="hidden lg:flex items-center gap-6">
        {items.map((item) => (
          <Option item={item} />
        ))}

        {/* Booking Button */}
        <a
          href="#booking"
          className="px-5 py-2 bg-zinc-900 text-zinc-100 text-sm font-medium uppercase tracking-wide rounded-md hover:bg-zinc-700 transition-colors duration-200"
        >
          Book Now
        </a>
      </nav>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex flex-col gap-1"
        >
          <span className="w-6 h-0.5 bg-zinc-900"></span>
          <span className="w-6 h-0.5 bg-zinc-900"></span>
          <span className="w-6 h-0.5 bg-zinc-900"></span>
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`absolute top-[10vh] left-0 w-full bg-zinc-100 flex flex-col items-center gap-6 py-6 lg:hidden shadow-md transform transition-all duration-300 ease-in-out origin-top ${
          isOpen
            ? "scale-y-100 opacity-100"
            : "scale-y-0 opacity-0 pointer-events-none"
        }`}
      >
        {items.map((item) => (
          <Option item={item} onClick={() => setIsOpen(false)} />
        ))}

        <a
          href="#booking"
          onClick={() => setIsOpen(false)}
          className="px-5 py-2 bg-zinc-900 text-zinc-100 text-sm font-medium uppercase tracking-wide rounded-md hover:bg-zinc-700 transition-colors duration-200"
        >
          Book Now
        </a>
      </div>
    </header>
  )
}

export default Header