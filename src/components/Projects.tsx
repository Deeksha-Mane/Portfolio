'use client'

import { Github, ExternalLink, Folder, Code2 } from 'lucide-react'
import { useEffect, useRef } from 'react'

const Projects = () => {
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

    const elements = sectionRef.current?.querySelectorAll('.project-card')
    elements?.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  const projects = [
    {
      title: "JobSensei",
      description: "An AI-powered career guidance platform for students in non-metro regions. Features personalized job recommendations, skill gap analysis, free course integration, and smart resume builder with Firebase backend.",
      tech: ["HTML5", "CSS3", "JavaScript", "Firebase", "Google Gemini API", "YouTube Data API"],
      github: "https://github.com/Deeksha-Mane/JobSenseii",
      live: "#",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      title: "WhisperLink",
      description: "A magical Harry Potter-themed MERN app for creating self-destructing secret messages. Features burning animations, floating particles, and enchanted UI with messages that vanish after one view.",
      tech: ["React", "Node.js", "Express", "MongoDB", "Framer Motion"],
      github: "https://github.com/Deeksha-Mane/WhisperLink",
      live: "https://whisper-link-brown.vercel.app/",
      gradient: "from-blue-500 to-indigo-500"
    },
    {
      title: "Memory Mirror",
      description: "A real-time face recognition system built with Streamlit, OpenCV, and DeepFace. Features multilingual support, personalized voice messages, local face database management, and privacy-focused design.",
      tech: ["Python", "Streamlit", "OpenCV", "DeepFace", "TensorFlow"],
      github: "https://github.com/Deeksha-Mane/MemoryMirror",
      live: "#",
      gradient: "from-indigo-500 to-purple-500"
    }
  ]

  return (
    <section id="projects" ref={sectionRef} className="py-24 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="inline-flex items-center justify-center w-20 h-20 glass rounded-2xl mb-6 border border-cyan-500/30 card-3d animate-pulse-glow">
            <Folder className="w-10 h-10 text-cyan-400" />
          </div>
          <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4 text-code">
            <span className="text-cyan-400">&lt;</span>
            Featured Projects
            <span className="text-cyan-400">/&gt;</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-6">
            Here are some of my recent projects that showcase my skills and passion for development.
          </p>
          <div className="w-32 h-1 holographic mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="project-card group glass rounded-3xl border border-cyan-500/20 hover:border-cyan-500/40 transition-all duration-500 overflow-hidden opacity-0 card-3d"
              style={{ animationDelay: `${index * 150}ms` }}
            >
              {/* Gradient header with 3D effect */}
              <div className={`h-2 bg-gradient-to-r ${project.gradient} relative`}>
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-gradient-shift" />
              </div>
              
              <div className="p-8">
                {/* Icon with glow */}
                <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${project.gradient} rounded-2xl mb-6 shadow-lg shadow-cyan-500/50 group-hover:shadow-cyan-500/70 group-hover:scale-110 transition-all duration-300`}>
                  <Code2 className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-cyan-400 transition-all duration-300 text-code">
                  {project.title}
                </h3>
                
                <p className="text-gray-400 mb-6 leading-relaxed">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-8">
                  {project.tech.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="px-3 py-1 glass text-cyan-400 text-sm rounded-lg border border-cyan-500/30 font-medium text-code hover:border-cyan-500/50 hover:bg-cyan-500/10 transition-all duration-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center space-x-2 text-gray-400 hover:text-cyan-400 transition-colors duration-300 group/link"
                  >
                    <Github size={20} className="group-hover/link:scale-110 transition-transform duration-300" />
                    <span className="font-medium text-code">Code</span>
                  </a>
                  
                  {project.live !== "#" ? (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-cyan-400 hover:text-blue-400 transition-colors duration-300 group/link"
                    >
                      <ExternalLink size={20} className="group-hover/link:scale-110 transition-transform duration-300" />
                      <span className="font-medium text-code">Live Demo</span>
                    </a>
                  ) : (
                    <span className="flex items-center space-x-2 text-gray-500 cursor-not-allowed">
                      <ExternalLink size={20} />
                      <span className="font-medium text-code">Coming Soon</span>
                    </span>
                  )}
                </div>
              </div>

              {/* Hover effect overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/0 to-blue-500/0 group-hover:from-cyan-500/5 group-hover:to-blue-500/5 transition-all duration-500 pointer-events-none" />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Projects