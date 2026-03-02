import React from 'react'

import SmallParagraph from './SmallParagraph'

import type { OfferingItem } from '../../types/service'

const Service: React.FC<{ offer: OfferingItem }> = ({ offer }) => {
  return (
    <div
      key={offer.name}
      className="group relative bg-surface-secondary rounded-2xl p-5 md:p-6 lg:p-8 transition-all duration-300 hover:-translate-y-2"
    >
      <div className="flex flex-col h-full justify-between">

      <div>
        <h3 className="text-text-primary text-lg md:text-xl font-medium tracking-tight mb-1 md:mb-2">
          {offer.name}
        </h3>

        <SmallParagraph text={offer.description} className='text-text-muted text-sm leading-relaxed'/>
        </div>

        <div className="mt-4 md:mt-6 lg:mt-8 flex items-end justify-between">
          <span className="text-text-primary text-lg md:text-xl lg:text-2xl font-semibold tracking-tight">
            £{offer.price}
          </span>

          <span className="text-text-muted text-xs uppercase tracking-widest">
            {offer.duration} min
          </span>
        </div>
      </div>

      {/* Subtle Hover Accent */}
      <div className="absolute inset-0 rounded-2xl border border-transparent group-hover:border-text-primary transition-colors duration-300 pointer-events-none" />
    </div>
  )
}

export default Service