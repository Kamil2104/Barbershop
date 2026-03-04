import BigTitle from '@/ui/components/BigTitle'
import SmallTitle from '@/ui/components/SmallTitle'
import BigParagraph from '@/ui/components/BigParagraph'
import SmallParagraph from '@/ui/components/SmallParagraph'
import AnchorButton from '@/ui/components/AnchorButton'
import Section from '@/ui/layout/Section'

import barbershopInterior from '@/assets/barbershop.svg'

interface USP {
  title: string,
  description: string
}

const About = () => {
  // Unique Selling Proposition
  const USP: USP[] = [
    { title: 'Precision & Detail', description: 'Every cut is crafted with accuracy and care.'},
    { title: 'Premium Products', description: 'We use only high-quality grooming essentials.'},
    { title: 'Relaxed Atmosphere', description: 'A modern space designed for comfort and style.'},
    { title: 'Experienced Barbers', description: 'Skilled professionals dedicated to your look.'},
  ]

  return (
    <Section id='about' background="bg-surface-primary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div>
          <BigTitle text="About Us" className='text-text-primary' />

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
                <SmallTitle text={p.title} className='text-text-primary' />
                <SmallParagraph text={p.description} className='text-text-muted mt-1' />
              </div>
            ))}
          </div>

          {/* Subtle CTA */}
          <div className="mt-10">
            <AnchorButton
              text='Book Your Visit'
              href='https://booksy.com/pl-pl?gad_source=1&gad_campaignid=11490709833&gbraid=0AAAAADE3ZKsAEuOjtBhuOsQlGGFGAGbK4&gclid=CjwKCAiA-__MBhAKEiwASBmsBBWdmlTccRnmid2qaNU5pqVLznIT7ZEJpwu4BYm2G7pPeubrcQapghoCo6EQAvD_BwE#ba_s=seo'
              className='inline-block px-8 py-3 bg-surface-inverted text-text-inverted text-sm font-semibold hover:bg-zinc-700'
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
    </Section>
  )
}

export default About