import React, { useState } from 'react'
import useServicesItemsLimit from '../hooks/useServicesItemsLimit'

import BigTitle from './components/BigTitle'
import MediumTitle from './components/MediumTitle'
import Service from './components/Service'
import Section from './layout/Section'

import { offerings } from '../data/offerings'

import type { OfferingItem } from '../types/service'

const Services: React.FC = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  const itemsToShow = useServicesItemsLimit()

  return (
    <Section id="services" background="bg-surface-primary">
        <BigTitle text="Services" className='text-text-primary' />

        <div className="lg:mt-8 md:space-y-12 lg:space-y-16">
          {(['Haircut', 'Beard Trim', 'Full Grooming'] as const).map((type) => {
            const isExpanded = expanded[type]
            const filtered = offerings.filter((o: OfferingItem) => o.type === type)
            const visibleOffers = isExpanded ? filtered : filtered.slice(0, itemsToShow)

            return (
              <div key={type}>

                {/* Minimal Section Header */}
                <div>
                  <MediumTitle text={type} className="text-text-primary" />
                  <div className="mt-2 mb-4 h-[2px] w-16 bg-text-primary" />
                </div>

                {/* Modern Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-5">
                  {visibleOffers.map((o: OfferingItem) => (
                    <Service key={o.name} offer={o} />
                  ))}
                </div>

                <div className="mt-6 flex justify-center">
                  <button
                    onClick={() =>
                      setExpanded((prev) => ({
                        ...prev,
                        [type]: !prev[type],
                      }))
                    }
                    className="group inline-flex items-center gap-2 px-4 py-2 md:px-6 md:py-3 rounded-full border border-border-subtle bg-surface-secondary text-text-primary text-xs lg:text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:border-text-primary hover:bg-surface-primary cursor-pointer"
                  >
                    <span>{isExpanded ? 'Show Less' : 'Show More'}</span>
                    <span
                      className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
                    >
                      ↓
                    </span>
                  </button>
                </div>
              </div>
            )
          })}
        </div>
    </Section>
  )
}

export default Services