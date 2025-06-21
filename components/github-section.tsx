"use client"

import { useEffect, useState } from "react"
import { Github, Star } from "lucide-react"
import { cn } from "@/lib/utils"

type Repo = {
  id: number
  name: string
  html_url: string
  description: string
  stargazers_count: number
  language: string | null
}

type GHUser = {
  public_repos: number
  followers: number
  following: number
}

/**
 * GitHub info for @pjdpaulsagnik
 */
export default function GithubSection() {
  const username = "pjdpaulsagnik"

  const [repos, setRepos] = useState<Repo[]>([])
  const [user, setUser] = useState<GHUser | null>(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function load() {
      try {
        // Fetch profile data
        const profileResp = await fetch(`https://api.github.com/users/${username}`)
        const profileJson: GHUser = await profileResp.json()
        setUser(profileJson)

        // Fetch repos (sorted by recently updated)
        const reposResp = await fetch(`https://api.github.com/users/${username}/repos?per_page=9&sort=updated`)
        const reposJson: Repo[] = await reposResp.json()
        setRepos(reposJson)
      } catch (_) {
        // ignore errors silently
      } finally {
        setLoading(false)
      }
    }
    load()
  }, [])

  return (
    <section id="github" className="py-20 px-6 bg-gray-900/40">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Heading */}
        <header className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-6">
          <h2 className="text-4xl md:text-5xl font-bold flex items-center gap-3">
            <Github className="w-8 h-8" /> GitHub Highlights
          </h2>

          {user && (
            <div className="flex flex-wrap gap-4 text-gray-300">
              <Stat label="Repos" value={user.public_repos} />
              <Stat label="Followers" value={user.followers} />
              <Stat label="Following" value={user.following} />
            </div>
          )}
        </header>

        {/* Contribution graph */}
        <div className="w-full overflow-x-auto rounded-xl border border-gray-700/50">
          {/* ghchart generates a yearly contribution SVG */}
          <img
            src={`https://ghchart.rshah.org/42f5ef/${username}`}
            alt={`${username} GitHub contribution graph`}
            className="w-[800px] sm:w-full h-auto object-contain"
          />
        </div>

        {/* Repositories */}
        <div>
          <h3 className="text-2xl font-semibold mb-6">Latest Public Repositories</h3>

          {loading ? (
            <p className="text-gray-400">Loading repositories…</p>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {repos.map((repo) => (
                <a
                  key={repo.id}
                  href={repo.html_url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-6 bg-gray-800/50 border border-gray-700/50 rounded-xl hover:border-blue-500/50 transition-colors"
                >
                  <h4 className="text-xl font-semibold mb-2">{repo.name}</h4>
                  <p className="text-sm text-gray-400 line-clamp-3 mb-4">{repo.description}</p>

                  <div className="flex justify-between items-center text-sm text-gray-500">
                    <span className={cn(repo.language ? "capitalize" : "italic")}>{repo.language ?? "Unknown"}</span>
                    <span className="inline-flex items-center gap-1">
                      <Star className="w-4 h-4" />
                      {repo.stargazers_count}
                    </span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  )
}

/* ---------- helpers ---------- */

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <span className="inline-flex flex-col items-center px-3 py-2 rounded-lg bg-gray-800/60">
      <span className="text-lg font-bold text-white">{value}</span>
      <span className="text-xs uppercase tracking-wider text-gray-400">{label}</span>
    </span>
  )
}
