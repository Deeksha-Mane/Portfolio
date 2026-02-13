'use client'

import { useEffect, useRef } from 'react'
import { Zap, Code, Database, Wrench, BookOpen } from 'lucide-react'

const Skills = () => {
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

    const elements = sectionRef.current?.querySelectorAll('.skill-category')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const skills = {
    Frontend: {
      items: ["HTML5", "CSS3", "JavaScript", "React.js", "Tailwind CSS", "Bootstrap", "Next.js"],
      icon: Code,
      gradient: "from-cyan-500 to-blue-500"
    },
    Backend: {
      items: ["Node.js", "Express.js", "Firebase", "REST APIs", "FastAPI"],
      icon: Database,
      gradient: "from-blue-500 to-indigo-500"
    },
    Database: {
      items: ["PostgreSQL", "MongoDB", "Firebase"],
      icon: Database,
      gradient: "from-indigo-500 to-purple-500"
    },
    Tools: {
      items: ["Git", "GitHub", "Postman", "VS Code", "Vercel", "Render"],
      icon: Wrench,
      gradient: "from-purple-500 to-pink-500"
    },
    "Core CS": {
      items: ["Data Structures & Algorithms", "OOP", "Operating Systems", "Computer Networks", "DBMS"],
      icon: BookOpen,
      gradient: "from-pink-500 to-cyan-500"
    }
  }

  return (
    <section id="skills" ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 glass rounded-2xl mb-6 border border-cyan-500/30 card-3d animate-pulse-glow">
            <Zap className="w-10 h-10 text-cyan-400" />
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4 text-code">
            <span className="text-cyan-400">&lt;</span>
            Skills & Technologies
            <span className="text-cyan-400">/&gt;</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-6">
            Here are the technologies and tools I work with to bring ideas to life.
          </p>
          <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {Object.entries(skills).map(([category, { items, icon: Icon, gradient }], index) => (
            <div 
              key={category} 
              className="skill-category opacity-0"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="glass p-8 rounded-3xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 h-full card-3d group">
                {/* Category header with 3D icon */}
                <div className="flex items-center space-x-4 mb-8">
                  <div className={`w-16 h-16 bg-gradient-to-br ${gradient} rounded-2xl flex items-center justify-center shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-500/70 group-hover:scale-110 transition-all duration-300`}>
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${gradient} text-code`}>
                    {category}
                  </h3>
                </div>
                
                {/* Skills grid */}
                <div className="flex flex-wrap gap-3">
                  {items.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="group/skill px-4 py-2 glass text-gray-300 rounded-xl border border-cyan-500/20 hover:border-cyan-500/40 hover:bg-cyan-500/10 transition-all duration-300 text-sm font-medium cursor-default hover:scale-105 text-code"
                      style={{ animationDelay: `${(index * 150) + (skillIndex * 50)}ms` }}
                    >
                      <span className="group-hover/skill:text-cyan-400 transition-colors duration-300">
                        {skill}
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative code elements */}
        <div className="mt-16 text-center">
          <div className="inline-block glass px-8 py-4 rounded-2xl border border-cyan-500/20">
            <p className="text-cyan-400 text-code">
              <span className="text-gray-500">const</span> skills = <span className="text-gray-500">{'{'}</span> 
              <span className="text-cyan-400"> frontend</span>, 
              <span className="text-blue-400"> backend</span>, 
              <span className="text-indigo-400"> database</span>,
              <span className="text-purple-400"> tools</span>,
              <span className="text-pink-400"> coreCS</span>
              <span className="text-gray-500">{'}'}</span>;
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills