import { useState, useMemo } from "react";

import useScreenSize from "@/hooks/useScreenSize";

import Typography from "@/components/ui/Typography";
import Section from "@/components/layout/Section";
import ServicesGroup from "./ui/ServiceGroup";

import { SHOP_OFFERINGS } from "@/data/offerings";

import type { OfferingItem } from "@/types/service";

const Services = () => {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({});
  const itemsToShow = useScreenSize() === "md" ? 4 : 3;

  const servicesGroups = ["Haircut", "Beard Trim", "Full Grooming"];
  const groupedOfferings = useMemo(() => {
    return SHOP_OFFERINGS.reduce<Record<string, OfferingItem[]>>(
      (acc, offering) => {
        if (!acc[offering.type]) {
          acc[offering.type] = [];
        }

        acc[offering.type].push(offering);

        return acc;
      },
      {},
    );
  }, []);

  return (
    <Section id="services" background="bg-surface-primary">
      <Typography variant="h1" className="text-text-primary">
        Services
      </Typography>

      <div className="lg:mt-8 md:space-y-12 lg:space-y-16">
        {servicesGroups.map((type) => {
          return (
            <ServicesGroup
              key={type}
              type={type}
              offerings={groupedOfferings[type] ?? []}
              itemsToShow={itemsToShow}
              expanded={expanded[type]}
              onToggle={() =>
                setExpanded((prev) => ({
                  ...prev,
                  [type]: !prev[type],
                }))
              }
            />
          );
        })}
      </div>
    </Section>
  );
};

export default Services;
