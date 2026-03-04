import React from 'react'

import Typography from './Typography'

import type { Review } from '@/types/review'

const ReviewCard = ({ author, rating, text, date }: Review) => {
  return (
    <div className="bg-surface-secondary p-6 md:p-8 rounded-2xl border border-transparent hover:border-text-primary transition-all duration-300 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
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