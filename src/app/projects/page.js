'use client'
import HeroSection from "@/components/HeroSection";
import Nav from "@/components/Nav";
import { Projects } from "@/components/projects";


export default function page() {
  return (
    <div>
        <Projects/>
        {/* <div id="content"></div> */}
        <HeroSection/>
    </div>
  )
}
