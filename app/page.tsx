"use client"

import { useEffect, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import FloatingNavbar from "@/components/floating-navbar"
import HeroSection from "@/components/hero-section"
import SkillsSection from "@/components/skills-section"
import EducationSection from "@/components/education-section"
import GithubSection from "@/components/github-section"
import VideoCarousel from "@/components/video-carousel"
import FeaturedProjects from "@/components/featured-projects"
import Footer from "@/components/footer"
import ContactModal from "@/components/contact-modal"

gsap.registerPlugin(ScrollTrigger)

export default function Portfolio() {
  const [openContact, setOpenContact] = useState(false)

  useEffect(() => {
    // Initial page load animation
    gsap.fromTo("body", { opacity: 0 }, { opacity: 1, duration: 1, ease: "power2.out" })
  }, [])

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 overflow-x-hidden">
      <FloatingNavbar />
      <main className="relative">
        <HeroSection onContact={() => setOpenContact(true)} />
        <SkillsSection />
        <EducationSection />
        <FeaturedProjects />
        <GithubSection />
        <VideoCarousel />
      </main>
      <ContactModal open={openContact} onOpenChange={setOpenContact} />
      <Footer />
    </div>
  )
}
