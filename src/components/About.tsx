import React from 'react'

import BigTitle from './components/BigTitle'
import SmallTitle from './components/SmallTitle'
import BigParagraph from './components/BigParagraph'
import SmallParagraph from './components/SmallParagraph'

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
          <BigTitle text="About Us" />

          <BigParagraph
            text="We combine traditional barbering techniques with modern style to
            deliver precision cuts tailored to your personality. Every visit is
            more than just a haircut — it's an experience."
          />

          <BigParagraph
            text="With years of experience, premium grooming products, and attention
            to every detail, we make sure you leave confident and sharp."
          />

          {/* Highlights */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {USP.map((p) => (
              <div>
                <SmallTitle text={p.title} />
                <SmallParagraph text={p.description} />
              </div>
            ))}
          </div>

          {/* Subtle CTA */}
          <div className="mt-10">
            <a
              href="#booking"
              className="inline-block px-8 py-3 bg-zinc-900 text-zinc-100 text-sm font-semibold uppercase tracking-wide rounded-md transition-all duration-300 hover:bg-zinc-700"
            >
              Book Your Visit
            </a>
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