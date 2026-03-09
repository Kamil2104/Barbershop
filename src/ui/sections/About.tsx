import Typography from "@/ui/components/Typography";
import AnchorButton from "@/ui/components/AnchorButton";
import Section from "@/ui/layout/Section";

interface USP {
  title: string;
  description: string;
}

const About = () => {
  // Unique Selling Proposition
  const USP: USP[] = [
    {
      title: "Precision & Detail",
      description: "Every cut is crafted with accuracy and care.",
    },
    {
      title: "Premium Products",
      description: "We use only high-quality grooming essentials.",
    },
    {
      title: "Relaxed Atmosphere",
      description: "A modern space designed for comfort and style.",
    },
    {
      title: "Experienced Barbers",
      description: "Skilled professionals dedicated to your look.",
    },
  ];

  return (
    <Section id="about" background="bg-surface-primary">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
        <div>
          <Typography variant="h1" className="text-text-primary">
            About Us
          </Typography>

          <Typography variant="p-lg" className="text-zinc-700">
            We combine traditional barbering techniques with modern style to
            deliver precision cuts tailored to your personality. Every visit is
            more than just a haircut — it&apos;s an experience.
          </Typography>

          <Typography variant="p-lg" className="text-zinc-700">
            With years of experience, premium grooming products, and attention
            to every detail, we make sure you leave confident and sharp.
          </Typography>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {USP.map((p) => (
              <div key={p.title}>
                <Typography variant="h4" className="text-text-primary">
                  {p.title}
                </Typography>
                <Typography variant="p-sm" className="text-text-muted mt-1">
                  {p.description}
                </Typography>
              </div>
            ))}
          </div>

          <div className="mt-6 md:mt-8 lg:mt-10">
            <AnchorButton
              text="Book Your Visit"
              href="https://booksy.com/pl-pl?gad_source=1&gad_campaignid=11490709833&gbraid=0AAAAADE3ZKsAEuOjtBhuOsQlGGFGAGbK4&gclid=CjwKCAiA-__MBhAKEiwASBmsBBWdmlTccRnmid2qaNU5pqVLznIT7ZEJpwu4BYm2G7pPeubrcQapghoCo6EQAvD_BwE#ba_s=seo"
              className="inline-block px-6 md:px-8 py-2.5 md:py-3 bg-surface-inverted text-text-inverted text-sm font-semibold lg:hover:bg-zinc-700"
            />
          </div>
        </div>

        <div className="flex justify-center items-center relative w-full h-auto overflow-hidden self-center">
          <img
            src="https://images.pexels.com/photos/1813272/pexels-photo-1813272.jpeg"
            alt="Barbershop interior"
            className="w-3xl h-auto grayscale rounded-lg shadow-lg "
          />
        </div>
      </div>
    </Section>
  );
};

export default About;
