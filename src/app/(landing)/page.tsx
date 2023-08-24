import LandingContent from '@/components/landing-content'
import LandingHero from '@/components/landing-hero'
import LandingNavbar from '@/components/landing-navbar'
import { buttonVariants } from '@/components/ui/button'

import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div className="h-full">
      <LandingNavbar />
      <LandingHero />
      <LandingContent />
    </div>
  )
}

export default HomePage
