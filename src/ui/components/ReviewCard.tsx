import React from 'react'

import Typography from './Typography'

import type { Review } from '@/types/review'

const ReviewCard = ({ author, rating, text, date }: Review) => {
  return (
    <div className="flex flex-col h-full bg-surface-secondary p-3 md:p-4 lg:p-8 rounded-2xl border border-transparent lg:hover:border-text-primary lg:hover:-translate-y-2 lg:transition-all lg:duration-300">
      <div className="flex justify-between items-start mb-2 lg:mb-4">
        <div>
          <Typography variant="h4" className="text-text-primary text-sm">{author}</Typography>
          <span className="text-[10px] uppercase tracking-widest text-text-muted">{date}</span>
        </div>
        <div className="flex text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < rating ? "opacity-100" : "opacity-30"}>★</span>
          ))}
        </div>
      </div>
      <Typography variant="p-sm" className="text-text-muted italic grow">{text}</Typography>
    </div>
  )
}

export default React.memo(ReviewCard)