"use client"

import type React from "react"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import { Mail, Send, CheckCircle, X } from "lucide-react"

export interface ContactModalProps {
  open: boolean
  onOpenChange(open: boolean): void
}

export default function ContactModal({ open, onOpenChange }: ContactModalProps) {
  const [sending, setSending] = useState(false)
  const [sent, setSent] = useState(false)

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    setSending(true)
    await new Promise((r) => setTimeout(r, 1500)) // fake delay
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
        <DialogContent className="sm:max-w-lg bg-gray-900/95 backdrop-blur-md border border-gray-700/50 shadow-2xl">
          <DialogHeader className="text-center">
            <div className="mx-auto w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <DialogTitle className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-cyan-500 bg-clip-text text-transparent">
              Get In Touch
            </DialogTitle>
            <p className="text-gray-400 mt-2">
              Let's discuss your next project or just say hello!
            </p>
          </DialogHeader>

          <form onSubmit={handleSubmit} className="space-y-6 mt-6">
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Name</label>
              <input
                name="name"
                required
                placeholder="Your name"
                className="w-full rounded-lg bg-gray-800/50 border border-gray-700 px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Email</label>
              <input
                type="email"
                name="email"
                required
                placeholder="your.email@example.com"
                className="w-full rounded-lg bg-gray-800/50 border border-gray-700 px-4 py-3 text-white placeholder-gray-400 outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            
            <div className="space-y-2">
              <label className="text-sm font-medium text-gray-300">Message</label>
              <textarea
                name="message"
                required
                placeholder="Tell me about your project or just say hello..."
                rows={4}
                className="w-full rounded-lg bg-gray-800/50 border border-gray-700 px-4 py-3 text-white placeholder-gray-400 resize-none outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
              />
            </div>
            
            <Button 
              type="submit" 
              className="w-full bg-gradient-to-r from-blue-500 to-cyan-500 hover:from-blue-600 hover:to-cyan-600 text-white font-semibold py-3 rounded-lg transition-all duration-200 transform hover:scale-105 shadow-lg hover:shadow-blue-500/25" 
              disabled={sending}
            >
              {sending ? (
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                  Sending...
                </div>
              ) : (
                <div className="flex items-center gap-2">
                  <Send className="w-4 h-4" />
                  Send Message
                </div>
              )}
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* confirmation dialog */}
      <Dialog open={sent} onOpenChange={closeAll}>
        <DialogContent className="sm:max-w-md bg-gray-900/95 backdrop-blur-md border border-gray-700/50 shadow-2xl text-center">
          <div className="mx-auto w-20 h-20 bg-gradient-to-r from-green-500 to-emerald-500 rounded-full flex items-center justify-center mb-6">
            <CheckCircle className="w-10 h-10 text-white" />
          </div>
          
          <h3 className="text-2xl font-bold text-white mb-4">Message Sent! 🎉</h3>
          
          <div className="space-y-4">
            <p className="text-gray-300 leading-relaxed">
              Thank you for reaching out! I'll get back to you as soon as possible.
            </p>
            
            <div className="bg-gray-800/50 rounded-lg p-4 border border-gray-700">
              <p className="text-sm text-gray-400 mb-2">For faster response, you can also:</p>
              <a 
                href="mailto:sagnikpaul@gmail.com" 
                className="text-blue-400 hover:text-blue-300 font-medium transition-colors"
              >
                sagnikpaul@gmail.com
              </a>
            </div>
            
            <Button 
              onClick={closeAll} 
              className="bg-gradient-to-r from-gray-600 to-gray-700 hover:from-gray-700 hover:to-gray-800 text-white font-semibold py-2 px-6 rounded-lg transition-all duration-200"
            >
              Close
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </>
  )
}
