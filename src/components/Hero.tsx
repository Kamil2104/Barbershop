import React from 'react'

import BigTitle from './components/BigTitle'
import SmallParagraph from './components/SmallParagraph'
import AnchorButton from './components/AnchorButton'
import Section from './layout/Section'

import barbershop from '../assets/barbershop.svg'
import { scrollTo } from '../utils/scrollTo'

const Hero: React.FC = () => {
  return (
    <Section
      className="relative h-[calc(100vh-10vh)] overflow-hidden flex items-center justify-center"
      background="bg-transparent"
    >
      {/* Background SVG */}
      <img
        src={barbershop}
        alt="Barbershop background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-center">
        <BigTitle
          text="Modern Men's Grooming"
          className="text-zinc-100"
        />

        <SmallParagraph
          text="Premium haircuts and beard styling tailored to your style."
          className="mt-2 md:mt-3 max-w-xl mx-auto text-text-subtle"
        />

        {/* Buttons */}
        <div className="mt-6 flex flex-col-reverse sm:flex-row items-center justify-center gap-4">
          <AnchorButton
            text="Book Appointment"
            href="#booking"
            onClick={() => console.log('scrolling...')}
            className="px-8 py-3 bg-surface-primary text-text-primary text-sm md:text-base font-semibold hover:bg-zinc-300"
          />

          <AnchorButton
            text="View Services"
            href="#services"
            onClick={() => scrollTo('services')}
            className="px-8 py-3 border border-surface-primary text-text-inverted text-sm md:text-base font-semibold hover:bg-surface-primary hover:text-text-primary"
          />
        </div>
      </div>
    </Section>
  )
}

export default Hero