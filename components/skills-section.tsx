"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const skills = [
  { name: "Angular", level: 90, color: "from-red-500 to-red-600", icon: "🅰️" },
  { name: "TypeScript", level: 85, color: "from-blue-500 to-blue-600", icon: "📘" },
  { name: "Ionic", level: 80, color: "from-blue-400 to-blue-500", icon: "📱" },
  { name: "Node.js", level: 75, color: "from-green-500 to-green-600", icon: "🟢" },
  { name: "Golang", level: 70, color: "from-cyan-500 to-cyan-600", icon: "🐹" },
  { name: "MongoDB", level: 75, color: "from-green-400 to-green-500", icon: "🍃" },
  { name: "Tailwind CSS", level: 85, color: "from-teal-500 to-teal-600", icon: "🎨" },
  { name: "Capacitor", level: 80, color: "from-purple-500 to-purple-600", icon: "⚡" },
]

export default function SkillsSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)
  const skillsRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)

    // Title animation
    gsap.fromTo(
      titleRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: titleRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Skills cards animation
    gsap.fromTo(
      ".skill-card",
      { opacity: 0, y: 50, scale: 0.8 },
      {
        opacity: 1,
        y: 0,
        scale: 1,
        duration: 0.8,
        stagger: 0.1,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: skillsRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    )

    // Progress bar animations
    skills.forEach((skill, index) => {
      gsap.fromTo(
        `.progress-${index}`,
        { width: "0%" },
        {
          width: `${skill.level}%`,
          duration: 1.5,
          delay: index * 0.1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: `.skill-card-${index}`,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse",
          },
        },
      )
    })
  }, [])

  return (
    <section id="skills" ref={sectionRef} className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <h2
          ref={titleRef}
          className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent"
        >
          Skills & Technologies
        </h2>

        <div ref={skillsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              className={`skill-card skill-card-${index} bg-gray-800/50 backdrop-blur-sm rounded-2xl p-6 border border-gray-700/50 hover:border-purple-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-purple-500/10`}
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-3xl">{skill.icon}</span>
                <span className="text-sm text-gray-400 font-semibold">{skill.level}%</span>
              </div>

              <h3 className="text-xl font-semibold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {skill.name}
              </h3>

              <div className="w-full bg-gray-700 rounded-full h-2 overflow-hidden">
                <div
                  className={`progress-${index} h-full bg-gradient-to-r ${skill.color} rounded-full transition-all duration-300`}
                  style={{ width: "0%" }}
                ></div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <p className="text-lg text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Passionate about creating scalable, performant applications using modern technologies. Always learning and
            adapting to new frameworks and best practices in the ever-evolving world of web development.
          </p>
        </div>
      </div>
    </section>
  )
}
