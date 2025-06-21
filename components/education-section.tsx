"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { GraduationCap, Calendar, MapPin } from "lucide-react"

const education = [
  {
    degree: "Master of Computer Applications (MCA)",
    institution: "University Name",
    year: "2022 - 2024",
    location: "City, State",
    description: "Advanced studies in computer science, software engineering, and application development.",
    grade: "First Class",
    highlights: ["Advanced Algorithms", "Software Architecture", "Database Management", "Web Technologies"],
  },
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "College Name",
    year: "2019 - 2022",
    location: "City, State",
    description: "Foundation in computer science, programming languages, and software development.",
    grade: "First Class",
    highlights: ["Programming Fundamentals", "Data Structures", "Web Development", "Database Systems"],
  },
]

export default function EducationSection() {
  const sectionRef = useRef<HTMLDivElement>(null)
  const titleRef = useRef<HTMLHeadingElement>(null)

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

    // Education cards animation
    gsap.fromTo(
      ".education-card",
      { opacity: 0, x: -50 },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".education-container",
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
      },
    )
  }, [])

  return (
    <section id="education" ref={sectionRef} className="py-20 px-6 bg-gray-900/30">
      <div className="max-w-4xl mx-auto">
        <h2
          ref={titleRef}
          className="text-5xl md:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent"
        >
          Education
        </h2>

        <div className="education-container space-y-8">
          {education.map((edu, index) => (
            <div
              key={index}
              className="education-card bg-gray-800/50 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 hover:border-blue-500/50 transition-all duration-300 group hover:shadow-lg hover:shadow-blue-500/10"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center">
                    <GraduationCap className="w-8 h-8 text-white" />
                  </div>
                </div>

                <div className="flex-grow">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-blue-500/20 text-blue-400 border border-blue-500/30">
                      {edu.grade}
                    </span>
                  </div>

                  <h4 className="text-xl text-gray-300 font-semibold mb-3">{edu.institution}</h4>

                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 mb-4 text-gray-400">
                    <div className="flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      <span>{edu.year}</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MapPin className="w-4 h-4" />
                      <span>{edu.location}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">{edu.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {edu.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-gray-700/50 text-gray-300 rounded-full text-sm border border-gray-600/50"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-blue-500/20 to-cyan-500/20 rounded-full border border-blue-500/30">
            <GraduationCap className="w-5 h-5 text-blue-400" />
            <span className="text-blue-400 font-semibold">Academic Excellence</span>
          </div>
          <p className="text-gray-300 mt-4 max-w-2xl mx-auto">
            Strong academic foundation with consistent performance and deep understanding of computer science
            fundamentals and advanced concepts.
          </p>
        </div>
      </div>
    </section>
  )
}
