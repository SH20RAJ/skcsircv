'use client'

import HeroSection from '@/components/HeroSection'
import Nav from '@/components/Nav'
import { Students } from '@/components/students'

export default function page() {
  return (
    <div>
        <div id="content"></div>
        <Students/>
        <HeroSection/>
    </div>
  )
}
