"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { TextPlugin } from "gsap/TextPlugin"
import { ChevronDown } from "lucide-react"

gsap.registerPlugin(TextPlugin)

export interface HeroSectionProps {
  onContact?: () => void
}

export default function HeroSection({ onContact }: HeroSectionProps = {}) {
  const heroRef = useRef<HTMLDivElement>(null)
  const nameRef = useRef<HTMLHeadingElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const subtitleRef = useRef<HTMLParagraphElement>(null)
  const ctaRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const tl = gsap.timeline({ delay: 1 })

    tl.fromTo(nameRef.current, { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
      .to(titleRef.current, {
        text: "Frontend Engineer",
        duration: 2,
        ease: "none",
      })
      .fromTo(subtitleRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" })
      .fromTo(ctaRef.current, { opacity: 0, y: 30 }, { opacity: 1, y: 0, duration: 1, ease: "power2.out" }, "-=0.5")

    // Floating animation for the entire hero
    gsap.to(heroRef.current, {
      y: -10,
      duration: 3,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    })

    // Scroll indicator animation
    gsap.to(".scroll-indicator", {
      y: 10,
      duration: 1.5,
      repeat: -1,
      yoyo: true,
      ease: "power2.inOut",
    })
  }, [])

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative px-6">
      <div ref={heroRef} className="text-center max-w-4xl mx-auto">
        <h2 ref={nameRef} className="text-4xl md:text-5xl font-extrabold mb-4 text-white">
          Sagnik&nbsp;Paul
        </h2>

        <h1
          ref={titleRef}
          className="text-6xl md:text-8xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-600 bg-clip-text text-transparent"
        >
          {/* Text will be animated */}
        </h1>

        <p ref={subtitleRef} className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
          Crafting beautiful, responsive web applications with{" "}
          <span className="text-blue-400 font-semibold">Angular</span>,{" "}
          <span className="text-cyan-400 font-semibold">TypeScript</span>, and{" "}
          <span className="text-green-400 font-semibold">Node.js</span>
        </p>

        <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a
            href="/cv.pdf"
            download
            className="px-8 py-4 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-green-500/30 transition-all duration-300 transform hover:scale-105"
          >
            Download&nbsp;CV
          </a>
          <button className="px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full font-semibold text-white hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 transform hover:scale-105">
            View My Work
          </button>
          <button
            onClick={onContact}
            className="px-8 py-4 border border-gray-600 rounded-full font-semibold text-gray-300 hover:border-blue-400 hover:text-blue-400 transition-all duration-300"
          >
            Get In Touch
          </button>
        </div>
      </div>

      <div className="scroll-indicator absolute bottom-8 left-1/2 transform -translate-x-1/2 text-gray-400">
        <ChevronDown className="w-6 h-6 animate-bounce" />
      </div>
    </section>
  )
}
