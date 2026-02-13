'use client'

import { Heart, ArrowUp, Code2, Terminal } from 'lucide-react'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <footer className="relative bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 text-white py-16 overflow-hidden border-t border-cyan-500/20">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center space-y-8">
          {/* Scroll to top button */}
          <button
            onClick={scrollToTop}
            className="group flex items-center justify-center w-14 h-14 glass rounded-2xl hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110 border border-cyan-500/30 card-3d"
            aria-label="Scroll to top"
          >
            <ArrowUp className="w-6 h-6 text-cyan-400 group-hover:-translate-y-1 transition-transform duration-300" />
          </button>

          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Terminal className="w-8 h-8 text-cyan-400 animate-pulse" />
            <span className="text-2xl font-bold text-code">
              <span className="text-cyan-400">&lt;</span>
              <span className="text-white neon-text">Deeksha</span>
              <span className="text-cyan-400">/&gt;</span>
            </span>
          </div>

          {/* Main content */}
          <div className="text-center space-y-4">
            <p className="flex items-center justify-center space-x-2 text-gray-400 text-code">
              <span>Made with</span>
              <Heart className="w-5 h-5 text-cyan-400 fill-cyan-400 animate-pulse" />
              <span>and</span>
              <Code2 className="w-5 h-5 text-blue-400" />
              <span>by Deeksha</span>
            </p>
            
            <p className="text-gray-500 text-sm text-code">
              © {currentYear} All rights reserved. Built with Next.js & TypeScript
            </p>
          </div>

          {/* Decorative line */}
          <div className="w-32 h-1 holographic rounded-full" />

          {/* Code snippet */}
          <div className="glass px-6 py-3 rounded-xl border border-cyan-500/20">
            <p className="text-cyan-400 text-sm text-code">
              <span className="text-gray-500">console</span>.log(<span className="text-blue-400">"Thanks for visiting!"</span>);
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer