import Section from '@/ui/layout/Section'
import Typography from '@/ui/components/Typography'

const Map = () => {
  return (
    <Section id="location" background='bg-surface-primary' className="pb-12! md:pb-14! lg:pb-20!">
        <Typography variant="h1" className='text-text-primary'>
          Find us
        </Typography>

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