import React from 'react'

import { FiStar } from 'react-icons/fi'

import { reviews } from '../data/clientReviews'

import type { Review } from '../types/review'

import Section from './layout/Section'
import BigTitle from './components/BigTitle'
import BigParagraph from './components/BigParagraph'
import ReviewCard from './components/ReviewCard'

const Reviews: React.FC = () => {
  return (
    <Section id="reviews" background="bg-surface-primary">
      <div className="mx-auto relative">
        <div className="relative flex flex-col lg:flex-row justify-between items-start lg:items-center gap-4 md:gap-6 mb-8 md:mb-12 lg:mb-16">
          <div className="max-w-2xl">

            {/* Minimalist Badge */}
            <div className="flex items-center gap-2 mb-4 text-yellow-600 font-bold text-xs uppercase tracking-[0.2em]">
              <FiStar className="fill-current" />
              <span>4.8 Rating on Google</span>
            </div>

            <BigTitle text="What Our Clients Say" className="text-text-primary mt-0" />

            <BigParagraph
              text="Your feedback helps us maintain the highest standards of grooming. Join our community of satisfied gentlemen."
              className="text-text-muted mt-4 max-w-lg"
            />
          </div>

          <div className="w-full md:w-auto flex justify-start md:justify-end">
            <a
              href="https://google.com/maps"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-block
                px-4 lg:px-6
                py-2 lg:py-3
                border border-text-pr imary
                text-sm md:text-base lg:text-xl
                text-text-primary
                font-medium
                rounded-md
                transition-colors duration-200
                hover:bg-text-primary hover:text-white
                self-start md:self-center
              "
            >
              Write a Review
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {reviews.map((rev: Review, index) => (
            <ReviewCard
              key={index}
              author={rev.author}
              rating={rev.rating}
              text={rev.text}
              date={rev.date}
            />
          ))}
        </div>
      </div>
    </Section>
  )
}

export default Reviews