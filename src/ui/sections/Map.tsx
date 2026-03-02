import React from 'react'

import Section from '../layout/Section'
import BigTitle from '../components/BigTitle'

const Map: React.FC = () => {
  return (
    <Section id="location" background='bg-surface-primary' className="pb-12! md:pb-14! lg:pb-20!">
        <BigTitle text='Find us' className='text-text-primary' />

      <div className="w-full h-[450px] md:h-[550px] overflow-hidden rounded-xl border border-border-subtle">
        <iframe
          title="Barbershop Location"
          src="https://www.google.com/maps?q=Uniwersytet%20Morski%20w%20Gdyni&output=embed"
          width="100%"
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-full h-full"
        />
      </div>
    </Section>
  )
}

export default Map