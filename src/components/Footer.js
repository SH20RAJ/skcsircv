import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <>
      <footer className="p-8 rounded-lg flex justify-center text-xl uppercase">
        Made by &nbsp; <Link href={"https://github.com/sh20raj"} target="_" className="bg-gradient-to-r from-blue-400 to-pink-500 bg-clip-text text-transparent"> SH20RAJ 🚀</Link>
      </footer>
    </>
  )
}
