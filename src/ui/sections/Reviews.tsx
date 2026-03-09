import { FiStar } from 'react-icons/fi'

import { CLIENT_REVIEWS } from '@/data/clientReviews'

import type { Review } from '@/types/review'

import Section from '@/ui/layout/Section'
import Typography from '@/ui/components/Typography'
import ReviewCard from '@/ui/components/ReviewCard'

const Reviews= () => {
  return (
    <Section id="reviews" background="bg-surface-primary">
      <div className="mx-auto relative">
        <div className="relative flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 md:gap-6 mb-4 md:mb-12 lg:mb-16">
          <div className="max-w-2xl">

            {/* Minimalist Badge */}
            <div className="flex items-center gap-2 mb-4 text-yellow-600 font-bold text-xs uppercase tracking-[0.2em]">
              <FiStar className="fill-current" />
              <span>4.8 Rating on Google</span>
            </div>

            <Typography variant="h1" className='text-text-primary mt-0'>
              What Our Clients Say
            </Typography>

            <Typography variant="p-lg" className='text-text-muted mt-4 max-w-lg'>
              Your feedback helps us maintain the highest standards of grooming. Join our community of satisfied gentlemen.
            </Typography>
          </div>

          <div className="w-full md:w-auto flex justify-start md:justify-end">
            <a
              href="https://google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                px-3.5 md:px-4 lg:px-6
                py-1.5 md:py-2 lg:py-3
                mb-1 md:mb-0
                border border-text-pr imary
                text-sm md:text-base lg:text-xl
                text-text-primary
                font-medium
                rounded-md
                lg:transition-colors lg:duration-200
                lg:hover:bg-text-primary lg:hover:text-white
                self-start md:self-center
              "
            >
              Write a Review
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1 md:gap-0 lg:gap-10">
          {CLIENT_REVIEWS.map((rev: Review) => (
            <ReviewCard
              key={rev.author}
              {...rev}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Reviews