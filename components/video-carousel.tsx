"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"

const videos = [
  { id: "P7gRzeC0Syg", title: "Premium SingleShop E-commerce" },
  { id: "oeZZAozxjdM", title: "WhatsApp Commerce Integration" },
  { id: "qI1DaCZxsuM", title: "Neural Network Capabilities" },
  { id: "uzyoZjI9m6Y", title: "Multi-Tenant Solution Overview" },
  { id: "fRt2jodBWPo", title: "Mobile App Demonstration" },
  { id: "G7YTUVidbHY", title: "Advanced Admin Dashboard" },
]

export default function VideoCarousel() {
  const [index, setIndex] = useState(0)

  function prev() {
    setIndex((i) => (i - 1 + videos.length) % videos.length)
  }
  function next() {
    setIndex((i) => (i + 1) % videos.length)
  }

  const current = videos[index]

  return (
    <section id="videos" className="py-20 px-6 bg-gray-900/40">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">Project Videos</h2>

        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
          <iframe
            key={current.id}
            src={`https://www.youtube.com/embed/${current.id}`}
            title={current.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            className="w-full h-full"
          />
          <button
            onClick={prev}
            className="absolute left-0 top-1/2 -translate-y-1/2 bg-gray-800/60 p-2 rounded-r-full hover:bg-gray-700/80"
          >
            <ChevronLeft />
          </button>
          <button
            onClick={next}
            className="absolute right-0 top-1/2 -translate-y-1/2 bg-gray-800/60 p-2 rounded-l-full hover:bg-gray-700/80"
          >
            <ChevronRight />
          </button>
        </div>

        <p className="mt-4 text-gray-400">{current.title}</p>
      </div>
    </section>
  )
}
