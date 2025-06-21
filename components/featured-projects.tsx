"use client"

import { Briefcase } from "lucide-react"
import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

const projects = [
  {
    name: "E-commerce Platform",
    role: "Lead Frontend Engineer",
    period: "2023 - Present",
    tech: ["Angular", "Tailwind", "GSAP"],
    description: "Built a scalable multi-tenant e-commerce platform with slick UI animations.",
  },
  {
    name: "Real-time Chat App",
    role: "Full-Stack Developer",
    period: "2022",
    tech: ["Ionic", "Node.js", "MongoDB", "Socket.IO"],
    description: "Cross-platform chat application with push notifications and offline support.",
  },
]

export default function FeaturedProjects() {
  const ref = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.fromTo(
      ".project-card",
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: ref.current,
          start: "top 80%",
        },
      },
    )
  }, [])

  return (
    <section id="projects" className="py-20 px-6">
      <div ref={ref} className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-3 mb-12">
          <Briefcase className="w-8 h-8" /> Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((p) => (
            <div
              key={p.name}
              className="project-card bg-gray-800/50 border border-gray-700/50 rounded-xl p-6 hover:border-blue-500/50 transition-colors"
            >
              <h3 className="text-2xl font-semibold mb-2">{p.name}</h3>
              <p className="text-gray-400 text-sm mb-3">
                {p.role} • {p.period}
              </p>
              <p className="text-gray-300 mb-4">{p.description}</p>
              <ul className="flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <li key={t} className="px-3 py-1 bg-gray-700/50 rounded-full text-sm text-gray-300">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
