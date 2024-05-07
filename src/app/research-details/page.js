'use client'

import HeroSection from '@/components/HeroSection'
import Nav from '@/components/Nav'
import { Research } from '@/components/research'

export default function page() {
  return (
    <div>
        <div id="content"></div>
        <Research/>
        <HeroSection/>
    </div>
  )
}
