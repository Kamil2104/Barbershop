import Section from "@/components/layout/Section";
import ContactItem from "@/components/ui/ContactItem";
import Typography from "@/components/ui/Typography";
import SmartLink from "@/components/ui/SmartLink";
import ListItem from "@/components/ui/ListItem";

import { CONTACT_OPTIONS } from "@/data/contactOptions";
import { OPENING_HOURS } from "@/data/openingHours";
import { FOOTER_LINKS } from "@/data/menu";

import type { ContactOption } from "@/types/contact";
import type { OpenHours } from "@/types/openHours";
import type { MenuItem } from "@/types/navigation";

const Footer = () => {
  return (
    <footer>
      <Section id="contact" background="bg-surface-inverted" className="pb-0!">
        <div className="flex flex-col md:flex-row justify-center gap-8 lg:gap-12 pb-8 md:pb-12 lg:pb-20">
          <div className="flex flex-col w-full md:w-1/2">
            <Typography
              variant="h2"
              className="text-text-inverted uppercase tracking-wider mt-0!"
            >
              Modern Barbershop
            </Typography>

            <Typography
              variant="p-lg"
              className="text-text-muted leading-relaxed mt-2! md:mt-4!"
            >
              Precision cuts. Premium grooming. A refined atmosphere crafted for
              modern gentlemen who value detail and confidence.
            </Typography>

            <div>
              <a
                href="https://booksy.com/pl-pl?gad_source=1&gad_campaignid=11490709833&gbraid=0AAAAADE3ZKsAEuOjtBhuOsQlGGFGAGbK4&gclid=CjwKCAiA-__MBhAKEiwASBmsBBWdmlTccRnmid2qaNU5pqVLznIT7ZEJpwu4BYm2G7pPeubrcQapghoCo6EQAvD_BwE#ba_s=seo"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block border border-border-subtle mt-4 px-4 lg:px-5 py-2.5 lg:py-3 text-xs lg:text-sm uppercase tracking-widest text-text-inverted lg:hover:bg-text-inverted lg:hover:text-surface-inverted lg:transition-all lg:duration-300"
              >
                Book Appointment
              </a>
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-between md:justify-end items-start gap-8 md:gap-20 w-full md:w-1/2">
            <div className="flex flex-row flex-start md:justify-end gap-8 md:gap-12 lg:gap-16 w-full">
              <div className="w-fit space-y-3 lg:space-y-4">
                <Typography
                  variant="h4"
                  className="text-text-inverted uppercase tracking-wider"
                >
                  Contact
                </Typography>

                <ul className="flex flex-col flex-wrap gap-6 md:gap-4">
                  {CONTACT_OPTIONS.map((option: ContactOption) => (
                    <ContactItem key={option.text} {...option} />
                  ))}
                </ul>
              </div>

              <div className="w-fit space-y-3 lg:space-y-4">
                <Typography
                  variant="h4"
                  className="text-text-inverted uppercase tracking-wider"
                >
                  Opening Hours
                </Typography>

                <ul className="flex flex-col flex-wrap md:justify-start gap-4 md:gap-4 text-text-muted text-sm w-full md:w-auto">
                  {OPENING_HOURS.map((option: OpenHours) => (
                    <ListItem key={option.day} {...option} />
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-text-muted py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-text-muted tracking-wider text-center">
            © {new Date().getFullYear()} Modern Barbershop. All rights reserved.
          </p>

          <div className="flex gap-6 text-xs text-text-muted uppercase tracking-widest">
            {FOOTER_LINKS.map((link: MenuItem) => (
              <SmartLink
                key={link.label}
                href={link.href}
                className="lg:hover:text-text-inverted lg:transition-colors lg:cursor-pointer"
              >
                {link.label}
              </SmartLink>
            ))}
          </div>
        </div>
      </Section>
    </footer>
  );
};

export default Footer;
