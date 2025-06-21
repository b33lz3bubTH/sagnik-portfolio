"use client"

import type React from "react"

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react"

export interface ContactModalProps {
  open: boolean
  onOpenChange(open: boolean): void
}

export default function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault() // required
    setSending(true)
    await new Promise((r) => setTimeout(r, 1000)) // fake delay
    setSending(false)
    setSent(true)
  }

  function closeAll() {
    setSent(false)
    onOpenChange(false)
  }

  return (
    <>
      {/* form dialog */}
      <Dialog open={open && !sent} onOpenChange={onOpenChange}>
        <DialogContent className="sm:max-w-lg">
          <DialogHeader>
            <DialogTitle>Contact Me</DialogTitle>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              name="name"
              required
              placeholder="Name"
              className="w-full rounded-md bg-gray-800 px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
              className="w-full rounded-md bg-gray-800 px-4 py-3 outline-none focus:ring-2 focus:ring-purple-500"
            />
            <textarea
              name="message"
              required
              placeholder="Message"
              className="w-full h-32 rounded-md bg-gray-800 px-4 py-3 resize-none outline-none focus:ring-2 focus:ring-purple-500"
            />
            <Button type="submit" className="w-full" disabled={sending}>
              {sending ? "Sending…" : "Send"}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* confirmation dialog */}
      <Dialog open={sent} onOpenChange={closeAll}>
        <DialogContent className="sm:max-w-md text-center space-y-4">
          <h3 className="text-xl font-semibold">Thank you! 🙌</h3>
          <p className="text-sm text-gray-300">
            To connect quicker, please email me at
            <br />
            <a href="mailto:sagnikpaul@gmail.com" className="text-purple-400 underline">
              sagnikpaul@gmail.com
            </a>
          </p>
          <Button onClick={closeAll} className="mx-auto">
            Close
          </Button>
        </DialogContent>
      </Dialog>
    </>
  )
}
