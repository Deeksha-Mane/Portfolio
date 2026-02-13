'use client'

import { Github, Linkedin, Mail, ArrowDown, Terminal } from 'lucide-react'
import { useEffect, useState } from 'react'

const Hero = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [text, setText] = useState('')
  const fullText = 'Full-Stack Developer'

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY })
      })
    }
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  useEffect(() => {
    let index = 0
    const interval = setInterval(() => {
      if (index <= fullText.length) {
        setText(fullText.slice(0, index))
        index++
      } else {
        clearInterval(interval)
      }
    }, 80)
    return () => clearInterval(interval)
  }, [])

  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950">
      {/* Animated background grid */}
      <div className="absolute inset-0 bg-grid-pattern opacity-20" />
      
      {/* 3D floating elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div 
          className="absolute w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-float will-change-transform"
          style={{
            top: '10%',
            left: '10%',
            transform: `translate(${mousePosition.x * 0.015}px, ${mousePosition.y * 0.015}px)`,
            animationDelay: '0s'
          }}
        />
        <div 
          className="absolute w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-float will-change-transform"
          style={{
            bottom: '10%',
            right: '10%',
            animationDelay: '1s',
            transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`
          }}
        />
      </div>

      {/* Code rain effect */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute text-cyan-400 text-xs font-mono will-change-transform"
            style={{
              left: `${i * 6.67}%`,
              animation: `matrix-rain ${5 + Math.random() * 5}s linear infinite`,
              animationDelay: `${Math.random() * 5}s`
            }}
          >
            {'{code}'}
          </div>
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center pt-20 z-10">
        <div className="max-w-5xl mx-auto">
          {/* Greeting badge */}
          <div className="inline-flex items-center space-x-2 px-6 py-3 glass rounded-full shadow-lg mb-8 animate-fade-in border border-cyan-500/30 card-3d cursor-pointer">
            <Terminal className="w-5 h-5 text-cyan-400 animate-pulse" />
            <span className="text-sm font-medium text-gray-300 text-code">$ whoami</span>
          </div>

          {/* Main heading - CLEAR AND VISIBLE */}
          <div className="mb-8">
            <div className="text-gray-400 text-code text-lg sm:text-xl mb-4 animate-fade-in">
              {'<h1>'}
            </div>
            
            <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 animate-fade-in-up">
              <span className="block text-gray-300 mb-3 text-3xl sm:text-5xl lg:text-6xl">Hi, I'm</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-400 to-cyan-400 text-5xl sm:text-7xl lg:text-8xl font-extrabold tracking-tight">
                Deeksha
              </span>
            </h1>
            
            <div className="text-gray-400 text-code text-lg sm:text-xl animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              {'</h1>'}
            </div>
          </div>
          
          {/* Typing effect subtitle */}
          <div className="mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <div className="inline-block glass px-6 py-3 rounded-2xl border border-cyan-500/30">
              <p className="text-xl sm:text-2xl lg:text-3xl text-cyan-400 font-light text-code">
                {text}
                <span className="animate-pulse text-cyan-300">|</span>
              </p>
            </div>
          </div>
          
          <p className="text-base sm:text-lg lg:text-xl text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            Crafting elegant solutions with clean code. Passionate about building scalable applications 
            and exploring cutting-edge technologies.
          </p>

          {/* Social Links */}
          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <a
              href="https://github.com/Deeksha-Mane"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 glass px-6 py-3 rounded-xl hover:bg-cyan-500/10 transition-all duration-300 hover:scale-110 border border-cyan-500/30 card-3d cursor-pointer shadow-lg hover:shadow-cyan-500/50"
            >
              <Github size={20} className="text-cyan-400 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-gray-300 group-hover:text-cyan-400 transition-colors duration-300">GitHub</span>
            </a>
            
            <a
              href="https://www.linkedin.com/in/deeksha-mane-6971a22b0/"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center space-x-2 glass px-6 py-3 rounded-xl hover:bg-blue-500/10 transition-all duration-300 hover:scale-110 border border-blue-500/30 card-3d cursor-pointer shadow-lg hover:shadow-blue-500/50"
            >
              <Linkedin size={20} className="text-blue-400 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-gray-300 group-hover:text-blue-400 transition-colors duration-300">LinkedIn</span>
            </a>
            
            <a
              href="mailto:manediksha264@gmail.com"
              className="group flex items-center space-x-2 glass px-6 py-3 rounded-xl hover:bg-indigo-500/10 transition-all duration-300 hover:scale-110 border border-indigo-500/30 card-3d cursor-pointer shadow-lg hover:shadow-indigo-500/50"
            >
              <Mail size={20} className="text-indigo-400 group-hover:rotate-12 transition-transform duration-300" />
              <span className="text-gray-300 group-hover:text-indigo-400 transition-colors duration-300">Email</span>
            </a>
          </div>

          {/* CTA Button */}
          <button
            onClick={() => document.querySelector('#projects')?.scrollIntoView({ behavior: 'smooth' })}
            className="group relative inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 hover:scale-110 animate-fade-in-up overflow-hidden border border-cyan-400/50 shadow-lg shadow-cyan-500/50 hover:shadow-2xl hover:shadow-cyan-500/70 cursor-pointer"
            style={{ animationDelay: '0.6s' }}
          >
            <span className="relative z-10 text-code">View My Work</span>
            <ArrowDown className="w-5 h-5 relative z-10 group-hover:animate-bounce" />
          </button>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <div className="w-6 h-10 border-2 border-cyan-400/50 rounded-full flex justify-center">
              <div className="w-1 h-3 bg-cyan-400 rounded-full mt-2 animate-scroll" />
            </div>
          </div>
        </div>
      </div>

      {/* Decorative code brackets */}
      <div className="absolute top-20 left-10 text-cyan-500/20 text-9xl font-bold text-code animate-float pointer-events-none">{'{'}</div>
      <div className="absolute bottom-20 right-10 text-cyan-500/20 text-9xl font-bold text-code animate-float pointer-events-none" style={{ animationDelay: '1s' }}>{'}'}</div>
    </section>
  )
}

export default Hero