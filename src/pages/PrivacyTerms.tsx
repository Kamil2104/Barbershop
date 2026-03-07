import { useEffect } from 'react'
import { Link } from 'react-router-dom'

import Section from '@/ui/layout/Section'
import Typography from '@/ui/components/Typography'

import type { PolicyItem } from '@/types/privacy&terms'

interface PrivacyTermsProps {
  title: string,
  items: PolicyItem[]
}

const PrivacyTerms = ({ title, items }: PrivacyTermsProps) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <Section background="bg-surface-primary" className="pt-8! md:pt-10! lg:pt-12! pb-8! md:pb-10! lg:pb-12! min-h-screen">
      <div className="mx-auto">
        <Link to="/" className="text-sm md:text-base text-text-muted hover:text-text-primary mb-3 md:mb-4 inline-block transition-colors">
          ← Back to Home
        </Link>

        <Typography variant='h1' className='text-text-primary mb-1! lg:mb-2!'>{title}</Typography>
        <p className="text-text-muted mb-3 md:mb-5 lg:mb-8 italic text-sm md:text-base">Last updated: {new Date().toLocaleDateString()}</p>

        <div className="space-y-4 md:space-y-6">
          {items.map((item: PolicyItem) => (
            <div>
              <Typography variant='h4' className='text-text-primary'>{item.title}</Typography>
              <Typography variant='p-lg' className='text-text-muted mt-0.5! md:mt-1! lg:mt-2!'>{item.content}</Typography>
            </div>
          ))}
        </div>
      </div>
    </Section>
  )
}

export default PrivacyTerms