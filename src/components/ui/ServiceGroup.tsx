import Typography from "./Typography";
import Service from "./Service";
import ChangeViewButton from "./ChangeViewButton";

import type { OfferingItem } from "@/types/service";

interface ServicesGroupProps {
  type: string;
  offerings: OfferingItem[];
  itemsToShow: number;
  expanded: boolean;
  onToggle: () => void;
}

const ServicesGroup = ({
  type,
  offerings,
  itemsToShow,
  expanded,
  onToggle,
}: ServicesGroupProps) => {
  const visibleOffers = expanded ? offerings : offerings.slice(0, itemsToShow);

  return (
    <div>
      <div>
        <Typography variant="h2" className="text-text-primary">
          {type}
        </Typography>

        <div className="mt-2 mb-0 md:mb-4 h-[2px] w-16 bg-text-primary" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 md:gap-5">
        {visibleOffers.map((o) => (
          <Service key={o.name} {...o} />
        ))}
      </div>

      <div className="mt-2 md:mt-4 lg:mt-6 flex justify-center">
        <ChangeViewButton
          text={expanded ? "Show Less" : "Show More"}
          iconRotation={expanded ? "rotate-180" : ""}
          onClick={onToggle}
          className="px-4 py-2 md:px-6 md:py-3 mb-4"
        />
      </div>
    </div>
  );
};

export default ServicesGroup;
