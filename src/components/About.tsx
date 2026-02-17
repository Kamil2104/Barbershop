import React from 'react'
import Title from './components/Title'
import barbershopInterior from '../assets/barbershop.svg'

const About: React.FC = () => {
  return (
    <section className="w-full bg-zinc-100 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <Title text="About Us" textColor="text-zinc-900" />

          <p className="mt-6 text-zinc-700 text-base lg:text-xl leading-relaxed">
            We combine traditional barbering techniques with modern style to
            deliver precision cuts tailored to your personality. Every visit is
            more than just a haircut — it's an experience.
          </p>

          <p className="mt-4 text-zinc-700 text-base lg:text-xl leading-relaxed">
            With years of experience, premium grooming products, and attention
            to every detail, we make sure you leave confident and sharp.
          </p>

          {/* Highlights */}
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <h4 className="font-semibold text-zinc-900 uppercase tracking-wide text-base lg:text-xl">
                Precision & Detail
              </h4>
              <p className="text-zinc-600 text-sm md:text-base mt-1">
                Every cut is crafted with accuracy and care.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-zinc-900 uppercase tracking-wide text-base lg:text-xl">
                Premium Products
              </h4>
              <p className="text-zinc-600 text-sm lg:text-base mt-1">
                We use only high-quality grooming essentials.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-zinc-900 uppercase tracking-wide text-base lg:text-xl">
                Relaxed Atmosphere
              </h4>
              <p className="text-zinc-600 text-sm lg:text-base mt-1">
                A modern space designed for comfort and style.
              </p>
            </div>

            <div>
              <h4 className="font-semibold text-zinc-900 uppercase tracking-wide text-base lg:text-xl">
                Experienced Barbers
              </h4>
              <p className="text-zinc-600 text-sm lg:text-base mt-1">
                Skilled professionals dedicated to your look.
              </p>
            </div>
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