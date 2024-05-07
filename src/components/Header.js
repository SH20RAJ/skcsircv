import Link from 'next/link'
import React from 'react'

export default function Header() {
  return (
    <>
      <header className="px-4 lg:px-6 h-14 flex items-center sticky top-0 shadow-lg z-40 backdrop-blur-md">
        <Link className="flex items-center justify-center" href="#">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
        <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 6.75 22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3-4.5 16.5" />
      </svg>

          <span className="sr-only">Professor s Portfolio</span>
        </Link>
        <nav className="ml-auto flex gap-4 sm:gap-6">
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#educational-qualification">
            Educational Qualification
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#research">
            Research
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#experience">
            Experience
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#teaching">
            Teaching
          </Link>
          <Link
            className="text-sm font-medium hover:underline underline-offset-4"
            href="#awards-achievements">
            Awards/Achievements
          </Link>
        </nav>
      </header>
    </>
  )
}
