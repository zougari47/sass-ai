import { buttonVariants } from '@/components/ui/button'
import Link from 'next/link'
import React from 'react'

const HomePage = () => {
  return (
    <div className="container space-y-10">
      <h1>landing page </h1>

      <div>
        <Link href="/dashboard" className={buttonVariants()}>
          Dashboard
        </Link>
      </div>
    </div>
  )
}

export default HomePage
