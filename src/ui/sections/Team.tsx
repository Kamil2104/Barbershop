import { useState } from "react";
import useSceenSize from "@/hooks/useScreenSize";

import Section from "@/ui/layout/Section";
import Typography from "@/ui/components/Typography";
import Barber from "@/ui/components/Barber";
import ChangeViewButton from "../components/ChangeViewButton";

import { OUR_BARBERS } from "@/data/employees";

import type { Employee } from "@/types/employee";
import type { ScreenSize } from "@/types/screen";

const ITEMS_PER_VIEW: Record<ScreenSize, number> = {
  sm: 1,
  md: 2,
  lg: 3,
};

const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const screenSize = useSceenSize();

  const itemsPerPage = ITEMS_PER_VIEW[screenSize] || 1;

  const start = currentIndex * itemsPerPage;
  const end = start + itemsPerPage;
  const slicedBarbers = OUR_BARBERS.slice(start, end);

  const handleNext = () => {
    setCurrentIndex((prev) => {
      const nextIndex = prev + 1;
      return nextIndex * itemsPerPage >= OUR_BARBERS.length ? 0 : nextIndex;
    });
  };

  return (
    <Section
      id="team"
      background="bg-surface-primary"
      className="py-16 md:py-24"
    >
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 md:mb-12 lg:mb-16 gap-1 md:gap-2 lg:gap-4">
        <div className="max-w-xl">
          <Typography variant="h1" className="text-text-primary mb-0!">
            Meet Our Team
          </Typography>
          <Typography variant="p-lg" className="text-text-muted">
            Master barbers dedicated to the craft of men's grooming.
          </Typography>
        </div>

        <div className="text-text-muted text-xs font-mono uppercase tracking-widest">
          Page {currentIndex + 1} /{" "}
          {Math.ceil(OUR_BARBERS.length / itemsPerPage)}
        </div>
      </div>

      <div className="flex flex-col gap-4 md:gap-2 lg:gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 min-h-[300px] md:min-h-[400px]min-h-[500px] place-items-center">
          {slicedBarbers.map((e: Employee) => (
            <Barber key={e.name} {...e} />
          ))}
        </div>

        <div className="flex justify-center items-center gap-6">
          <ChangeViewButton
            text="Next"
            iconRotation="rotate-270"
            onClick={handleNext}
            className="px-6 py-2.5 lg:px-6 lg:py-3 shadow-lg active:scale-95 transition-transform"
          />
        </div>
      </div>
    </Section>
  );
};

export default Team;
