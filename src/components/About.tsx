'use client'

import { useEffect, useRef } from 'react'
import { User, Code, Heart, Cpu } from 'lucide-react'

const About = () => {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in-up')
          }
        })
      },
      { threshold: 0.1 }
    )

    const elements = sectionRef.current?.querySelectorAll('.observe-me')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  return (
    <section id="about" ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-20 observe-me opacity-0">
            <div className="inline-flex items-center justify-center w-20 h-20 glass rounded-2xl mb-6 border border-cyan-500/30 card-3d animate-pulse-glow">
              <User className="w-10 h-10 text-cyan-400" />
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4 text-code">
              <span className="text-cyan-400">&lt;</span>
              About Me
              <span className="text-cyan-400">/&gt;</span>
            </h2>
            <div className="w-32 h-1 holographic mx-auto rounded-full" />
          </div>
          
          {/* Content cards with 3D effect */}
          <div className="space-y-8">
            <div className="observe-me opacity-0 glass p-8 rounded-3xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 card-3d group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 holographic rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-500/70 transition-all duration-300">
                    <Code className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-cyan-400 mb-4 text-code">// The Journey Begins</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    From debugging my first "Hello World" to architecting full-stack applications, my coding journey 
                    has been fueled by curiosity and determination. I transform complex problems into elegant solutions, 
                    one commit at a time. Every bug fixed is a lesson learned, every feature shipped is a victory celebrated.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="observe-me opacity-0 glass p-8 rounded-3xl border border-blue-500/20 hover:border-blue-500/40 transition-all duration-500 card-3d group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg shadow-blue-500/50 group-hover:shadow-blue-500/70 transition-all duration-300">
                    <Cpu className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-blue-400 mb-4 text-code">// What Drives Me</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    I believe great code is like poetry—clean, purposeful, and impactful. Whether it's crafting 
                    pixel-perfect UIs with React or building robust APIs with Node.js, I'm obsessed with creating 
                    experiences that users love and developers admire. Performance isn't just a metric; it's a mindset.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="observe-me opacity-0 glass p-8 rounded-3xl border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-500 card-3d group">
              <div className="flex items-start space-x-6">
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/50 group-hover:shadow-indigo-500/70 transition-all duration-300">
                    <Heart className="w-8 h-8 text-white" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold text-indigo-400 mb-4 text-code">// Beyond the Screen</h3>
                  <p className="text-lg text-gray-300 leading-relaxed">
                    When I'm not pushing code to GitHub, you'll find me weaving words into poetry—because I believe 
                    both code and poetry share the same soul: the art of expressing complex emotions in elegant simplicity. 
                    Whether debugging a function or crafting a verse, I'm always seeking beauty in structure and meaning in chaos. 
                    Let's connect and create something extraordinary together!
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About