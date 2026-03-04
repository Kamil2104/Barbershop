import React from 'react'

import SmallTitle from './SmallTitle'
import SmallParagraph from './SmallParagraph'

import type { Review } from '@/types/review'

const ReviewCard: React.FC<Review> = ({ author, rating, text, date }) => {
  return (
    <div className="bg-surface-secondary p-6 md:p-8 rounded-2xl border border-transparent hover:border-text-primary transition-all duration-300 flex flex-col h-full">
      <div className="flex justify-between items-start mb-4">
        <div>
          <SmallTitle text={author} className="text-text-primary text-sm" />
          <span className="text-[10px] uppercase tracking-widest text-text-muted">{date}</span>
        </div>
        <div className="flex text-yellow-500">
          {[...Array(5)].map((_, i) => (
            <span key={i} className={i < rating ? "opacity-100" : "opacity-30"}>★</span>
          ))}
        </div>
      </div>
      <SmallParagraph text={`"${text}"`} className="text-text-muted italic grow" />
    </div>
  )
}

export default React.memo(ReviewCard)