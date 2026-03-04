import React from 'react'

import Section from '@/ui/layout/Section'
import ContactItem from '@/ui/components/ContactItem'

import { contactOptions } from '@/data/contactOptions'
import { openingHours } from '@/data/openingHours'
import { footerLinks } from '@/data/menu'

import type { ContactOption } from '@/types/contact'
import type { OpenHours } from '@/types/openHours'
import type { MenuItem } from '@/types/navigation'

import MediumTitle from '@/ui/components/MediumTitle'
import BigParagraph from '@/ui/components/BigParagraph'
import SmallTitle from '@/ui/components/SmallTitle'
import SmartLink from '@/ui/components/SmartLink'
import ListItem from '@/ui/components/ListItem'

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
                  href='https://booksy.com/pl-pl?gad_source=1&gad_campaignid=11490709833&gbraid=0AAAAADE3ZKsAEuOjtBhuOsQlGGFGAGbK4&gclid=CjwKCAiA-__MBhAKEiwASBmsBBWdmlTccRnmid2qaNU5pqVLznIT7ZEJpwu4BYm2G7pPeubrcQapghoCo6EQAvD_BwE#ba_s=seo'
                  target='_blank'
                  rel="noopener noreferrer"
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

            <div className="flex gap-6 text-xs text-text-muted uppercase tracking-widest">
              {footerLinks.map((link: MenuItem) => (
                <SmartLink
                  key={link.label}
                  href={link.href}
                  className="hover:text-text-inverted transition-colors cursor-pointer"
                >
                  {link.label}
                </SmartLink>
              ))}
            </div>
          </div>

        </div>
      </Section>
    </footer>
  )
}

export default Footer