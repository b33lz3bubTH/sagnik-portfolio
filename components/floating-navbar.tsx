"use client"

import { useState } from "react"
import { Menu, X, Home, Code, GraduationCap, Github, Linkedin, Mail } from "lucide-react"
import { cn } from "@/lib/utils"

const navLinks = [
  { label: "Home", href: "#home", icon: Home },
  { label: "Skills", href: "#skills", icon: Code },
  { label: "Education", href: "#education", icon: GraduationCap },
]

const socialLinks = [
  { label: "GitHub", href: "#github", icon: Github },
  { label: "LinkedIn", href: "#", icon: Linkedin },
  { label: "Contact", href: "#contact", icon: Mail },
]

export default function FloatingNavbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center pointer-events-none">
      {/* BAR */}
      <div className="w-full max-w-6xl mx-auto px-4">
        <div className="bg-gray-900/70 backdrop-blur border border-gray-700/40 rounded-full px-6 py-3 flex items-center justify-between shadow-lg pointer-events-auto">
          {/* LOGO / NAME */}
          <a
            href="#home"
            className="text-lg font-bold bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent"
          >
            Sagnik&nbsp;Paul
          </a>

          {/* DESKTOP LINKS */}
          <nav className="hidden md:flex items-center gap-4">
            {navLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-purple-500/10 transition-colors"
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </a>
            ))}

            {socialLinks.map(({ label, href, icon: Icon }) => (
              <a
                key={label}
                href={href}
                className="flex items-center gap-2 rounded-md px-3 py-2 text-sm hover:bg-purple-500/10 transition-colors"
              >
                <Icon className="w-4 h-4" />
                <span>{label}</span>
              </a>
            ))}
          </nav>

          {/* HAMBURGER */}
          <button
            aria-label="Toggle menu"
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 rounded-md hover:bg-gray-700/50 transition"
          >
            {open ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER */}
      <nav
        className={cn(
          "fixed top-0 left-0 right-0 bg-gray-900/95 backdrop-blur-md pt-20 pb-8 space-y-6 transition-transform md:hidden pointer-events-auto",
          open ? "translate-y-0" : "-translate-y-full",
        )}
      >
        <button
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          className="absolute right-4 top-4 p-2 rounded-md hover:bg-gray-700/70 transition"
        >
          <X className="w-5 h-5" />
        </button>
        {[...navLinks, ...socialLinks].map(({ label, href }) => (
          <a
            key={label}
            href={href}
            onClick={() => setOpen(false)}
            className="block w-max mx-auto text-lg font-medium hover:text-purple-400"
          >
            {label}
          </a>
        ))}
      </nav>
    </header>
  )
}
