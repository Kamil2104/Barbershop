import React from "react"

import type { Employee } from "@/types/employee"

import Typography from "./Typography"
import AnimatedImage from "./AnimatedImage"

const Barber = ({ image, name, role, description }: Employee) => {
  return (
    <div className="group flex flex-col h-fit w-4/5 max-w-[300px] md:max-w-[350px] lg:max-w-[400px] md:w-full bg-surface-secondary rounded-3xl overflow-hidden border border-transparent lg:hover:border-text-primary/20 lg:transition-all lg:duration-500 lg:hover:shadow-2xl lg:hover:-translate-y-2">
      <div className="relative aspect-3/4 overflow-hidden">
        <AnimatedImage
          src={image}
          alt={`Our barber: ${name}`}
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500" />
      </div>

      <div className="flex flex-col py-2 px-4 md:p-8 grow">
        <div className="mb-2 md:mb-3 lg:mb-4">
          <Typography variant="h4" className="text-text-primary font-bold tracking-tighter mb-1">
            {name}
          </Typography>
          <div className="flex items-center gap-2">
             <span className="h-px w-4 bg-text-primary/40"></span>
             <Typography variant="p-sm" className="text-text-muted font-medium uppercase tracking-widest text-[10px]!">
               {role}
             </Typography>
          </div>
        </div>

        <Typography variant="p-sm" className="text-text-muted leading-relaxed line-clamp-3 italic">
          "{description}"
        </Typography>
      </div>
    </div>
  )
}

export default React.memo(Barber)