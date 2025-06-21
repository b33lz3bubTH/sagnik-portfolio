"use client"

import { Github, Linkedin, Mail, Phone, Twitter } from "lucide-react"

const socials = [
  { icon: Linkedin, label: "LinkedIn", href: "#" },
  { icon: Github, label: "GitHub", href: "#" },
  { icon: Twitter, label: "Twitter", href: "#" },
  { icon: Mail, label: "Email", href: "mailto:example@example.com" },
  { icon: Phone, label: "Phone", href: "tel:+11234567890" },
]

export default function Footer() {
  return (
    <footer className="bg-gray-900/90 border-t border-gray-700/50 py-10 px-6 text-gray-400 backdrop-blur">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-sm">&copy; {new Date().getFullYear()} Samosha • All rights reserved</p>

        <ul className="flex gap-4">
          {socials.map((s) => (
            <li key={s.label}>
              <a
                href={s.href}
                aria-label={s.label}
                className="w-9 h-9 flex items-center justify-center rounded-full hover:bg-gray-700/50 transition-colors"
              >
                <s.icon className="w-5 h-5" />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  )
}
