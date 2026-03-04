import Typography from '@/ui/components/Typography'
import AnchorButton from '@/ui/components/AnchorButton'
import Section from '@/ui/layout/Section'

import barbershop from '@/assets/barbershop.svg'
import { scrollTo } from '@/utils/scrollTo'

const Hero = () => {
  return (
    <Section
      className="relative h-screen overflow-hidden flex items-center justify-center"
      background="bg-transparent"
    >
      <img
        src={barbershop}
        alt="Barbershop background"
        className="absolute inset-0 w-full h-full object-cover"
      />

      <div className="absolute inset-0 bg-black/50"></div>

      <div className="relative text-center">
        <Typography variant="h1" className='text-zinc-100 md:mb-5!'>
          Modern Men's Grooming
        </Typography>

        <Typography variant="p-sm" className=' max-w-xl mx-auto text-text-subtle'>
          Premium haircuts and beard styling tailored to your style.
        </Typography>

        <div className="mt-5 flex flex-col-reverse sm:flex-row items-center justify-center gap-4">
          <AnchorButton
            text="Book Appointment"
            href='https://booksy.com/pl-pl?gad_source=1&gad_campaignid=11490709833&gbraid=0AAAAADE3ZKsAEuOjtBhuOsQlGGFGAGbK4&gclid=CjwKCAiA-__MBhAKEiwASBmsBBWdmlTccRnmid2qaNU5pqVLznIT7ZEJpwu4BYm2G7pPeubrcQapghoCo6EQAvD_BwE#ba_s=seo'
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