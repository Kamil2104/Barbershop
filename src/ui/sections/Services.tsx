import { useState, useMemo } from 'react'

import useServicesItemsLimit from '@/hooks/useServicesItemsLimit'

import Typography from '@/ui/components/Typography'
import Service from '@/ui/components/Service'
import Section from '@/ui/layout/Section'
import ExpandButton from '@/ui/components/ExpandButton'

import { offerings } from '@/data/offerings'

import type { OfferingItem } from '@/types/service'

const Services = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  const itemsToShow = useServicesItemsLimit({ section: 'services' })

  const groupedOfferings = useMemo(() => {
    return offerings.reduce<Record<string, OfferingItem[]>>((acc, offering) => {
      if (!acc[offering.type]) {
        acc[offering.type] = []
      }

      acc[offering.type].push(offering)

      return acc
    }, {})
  }, [])

  return (
    <Section id="services" background="bg-surface-primary">
        <Typography variant="h1" className='text-text-primary'>
          Services
        </Typography>

        <div className="lg:mt-8 md:space-y-12 lg:space-y-16">
          {(['Haircut', 'Beard Trim', 'Full Grooming'] as const).map((type) => {
            const isExpanded = expanded[type]
            const filtered = groupedOfferings[type] ?? []
            const visibleOffers = isExpanded ? filtered : filtered.slice(0, itemsToShow)

            return (
              <div key={type}>

                <div>
                  <Typography variant="h2" className='text-text-primary'>
                    {type}
                  </Typography>
                  <div className="mt-2 mb-0 md:mb-4 h-[2px] w-16 bg-text-primary" />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-5">
                  {visibleOffers.map((o: OfferingItem) => (
                    <Service key={o.name} {...o} />
                  ))}
                </div>

                <div className="mt-2 md:mt-4 lg:mt-6 flex justify-center">
                  <ExpandButton
                    isExpanded={isExpanded}
                    onClick={() =>
                      setExpanded((prev) => ({
                        ...prev,
                        [type]: !prev[type],
                      }))}
                    className='px-4 py-2 md:px-6 md:py-3 mb-4'
                  />
                </div>
              </div>
            )
          })}
        </div>
    </Section>
  )
}

export default Services