import { useState, useMemo } from 'react'

import useScreenSize from '@/hooks/useScreenSize'

import Typography from '@/ui/components/Typography'
import Service from '@/ui/components/Service'
import Section from '@/ui/layout/Section'
import ChangeViewButton from '@/ui/components/ChangeViewButton'

import { SHOP_OFFERINGS } from '@/data/offerings'

import type { OfferingItem } from '@/types/service'

const Services = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({})

  const itemsToShow = useScreenSize() === 'md' ? 4 : 3

  const groupedOfferings = useMemo(() => {
    return SHOP_OFFERINGS.reduce<Record<string, OfferingItem[]>>((acc, offering) => {
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
                  <ChangeViewButton
                    text={isExpanded ? "Show Less" : "Show More"}
                    iconRotation={isExpanded ? 'rotate-180' : ''}
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