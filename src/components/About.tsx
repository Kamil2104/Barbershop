import React from 'react'

import BigTitle from './components/BigTitle'
import SmallTitle from './components/SmallTitle'
import BigParagraph from './components/BigParagraph'
import SmallParagraph from './components/SmallParagraph'
import AnchorButton from './components/AnchorButton'

import barbershopInterior from '../assets/barbershop.svg'

interface USP {
  title: string,
  description: string
}

const About: React.FC = () => {
  // Unique Selling Proposition
  const USP: USP[] = [
    { title: 'Precision & Detail', description: 'Every cut is crafted with accuracy and care.'},
    { title: 'Premium Products', description: 'We use only high-quality grooming essentials.'},
    { title: 'Relaxed Atmosphere', description: 'A modern space designed for comfort and style.'},
    { title: 'Experienced Barbers', description: 'Skilled professionals dedicated to your look.'},
  ]

  return (
    <section className="w-full bg-zinc-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <BigTitle text="About Us" className='text-zinc-900' />

          <BigParagraph
            text="We combine traditional barbering techniques with modern style to
                  deliver precision cuts tailored to your personality. Every visit is
                  more than just a haircut — it's an experience."
            className='text-zinc-700'
          />

          <BigParagraph
            text="With years of experience, premium grooming products, and attention
                  to every detail, we make sure you leave confident and sharp."
            className='text-zinc-700'
          />

          {/* Highlights */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {USP.map((p) => (
              <div key={p.title}>
                <SmallTitle text={p.title} className='text-zinc-900' />
                <SmallParagraph text={p.description} className='text-zinc-600 mt-1' />
              </div>
            ))}
          </div>

          {/* Subtle CTA */}
          <div className="mt-10">
            <AnchorButton
              text='Book Your Visit'
              href='#booking'
              onClick={() => console.log('scrolling...')}
              className='inline-block px-8 py-3 bg-zinc-900 text-zinc-100 text-sm font-semibold hover:bg-zinc-700'
            />
          </div>
        </div>

        {/* Image */}
        <div className="relative w-full h-auto overflow-hidden rounded-lg shadow-lg self-center flex items-center">
          <img
            src={barbershopInterior}
            alt="Barbershop interior"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default About