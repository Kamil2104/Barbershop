import React from 'react'

import Title from './components/Title'

import barbershop from '../assets/barbershop.svg'

const Hero: React.FC = () => {
  return (
    <section className="relative w-full h-[calc(100vh-10vh)] flex items-center justify-center overflow-hidden">
      {/* Background SVG */}
      <img
        src={barbershop}
        alt="Barbershop background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div className="relative text-center px-6">
        <Title text="Modern Men's Grooming" textColor='text-zinc-100'/>
        <p className="mt-2 md:mt-3 lg:mt-4 text-sm md:text-base max-w-xl mx-auto text-zinc-200">
          Premium haircuts and beard styling tailored to your style.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-col-reverse sm:flex-row items-center justify-center gap-4">
          <a
            href="#booking"
            className="px-8 py-3 bg-zinc-100 text-zinc-900 text-sm md:text-base font-semibold uppercase tracking-wide rounded-md transition-all duration-300 hover:bg-zinc-300"
          >
            Book Appointment
          </a>

          <a
            href="#services"
            className="px-8 py-3 border border-zinc-100 text-zinc-100 text-sm md:text-base font-semibold uppercase tracking-wide rounded-md transition-all duration-300 hover:bg-zinc-100 hover:text-zinc-900"
          >
            View Services
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero