import React from 'react'

import Section from './layout/Section'
import ContactItem from './components/ContactItem'

import { contactOptions } from '../data/contactOptions'
import { openingHours } from '../data/openingHours'

import type { ContactOption } from '../types/contact'
import type { OpenHours } from '../types/openHours'

import MediumTitle from './components/MediumTitle'
import BigParagraph from './components/BigParagraph'
import SmallTitle from './components/SmallTitle'
import ListItem from './components/ListItem'

const Footer: React.FC = () => {
  return (
    <footer>
      <Section id='contact' background='bg-surface-inverted' className='pb-0!'>
        <div className="max-w-7xl mx-auto">
          {/* Main Grid */}
          <div className="flex flex-col md:flex-row justify-center md:gap-8 gap-12 pb-12 md:pb-14 lg:pb-20">

            {/* Brand Section */}
            <div className="flex flex-col w-full md:w-1/2">
              <MediumTitle
                text='Modern Barbershop'
                className='text-text-inverted uppercase tracking-wider mt-0!'
              />

              <BigParagraph
                text='Precision cuts. Premium grooming. A refined atmosphere crafted for modern gentlemen who value detail and confidence.'
                className='text-text-muted leading-relaxed'
              />

              <div>
                <a
                  href="#booking"
                  className="inline-block border border-border-subtle mt-4 px-4 lg:px-5 py-2.5 lg:py-3 text-xs lg:text-sm uppercase tracking-widest text-text-inverted hover:bg-text-inverted hover:text-surface-inverted transition-all duration-300"
                >
                  Book Appointment
                </a>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col-reverse md:flex-row justify-between md:justify-end items-start gap-12 sm:gap-10 md:gap-20 w-full md:w-1/2">

                {/* Contact */}
                <div className="w-full md:w-fit space-y-3 lg:space-y-4">
                  <SmallTitle text='Contact' className='text-text-inverted uppercase tracking-wider' />

                  <ul className="flex flex-row md:flex-col flex-wrap gap-6 md:gap-5">
                    {contactOptions.map((item: ContactOption) => (
                      <ContactItem key={item.text} item={item} />
                    ))}
                  </ul>
                </div>

                {/* Opening Hours */}
                <div className="w-full md:w-fit space-y-3 lg:space-y-4">
                  <SmallTitle text='Opening Hours' className='text-text-inverted uppercase tracking-wider' />

                  <ul className="flex flex-row md:flex-col flex-wrap justify-between md:justify-start gap-6 md:gap-5 text-text-muted text-sm w-full md:w-auto">
                    {openingHours.map((oH: OpenHours) => (
                      <ListItem key={oH.day} item={oH} />
                    ))}
                  </ul>
                </div>
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-border-subtle py-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-xs text-text-muted tracking-wider text-center">
              © {new Date().getFullYear()} Modern Barbershop. All rights reserved.
            </p>

            {/* Create reusable component for a */}
            <div className="flex gap-6 text-xs text-text-muted uppercase tracking-widest">
              <a href="#" className="hover:text-text-inverted transition-colors">Privacy</a>
              <a href="#" className="hover:text-text-inverted transition-colors">Terms</a>
            </div>
          </div>

        </div>
      </Section>
    </footer>
  )
}

export default Footer