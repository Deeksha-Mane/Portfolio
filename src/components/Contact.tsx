'use client'

import { useState, useRef } from 'react'
import { Send, CheckCircle, AlertCircle, MessageSquare, Terminal } from 'lucide-react'
import emailjs from '@emailjs/browser'

interface FormData {
  name: string
  email: string
  message: string
}

interface FormStatus {
  type: 'success' | 'error' | null
  message: string
}

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null)
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [status, setStatus] = useState<FormStatus>({ type: null, message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setStatus({ type: null, message: '' })

    try {
      // EmailJS configuration
      const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!
      const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!
      const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!

      // Send email using EmailJS
      await emailjs.send(
        serviceId,
        templateId,
        {
          name: formData.name,
          email: formData.email,
          message: formData.message
        },
        publicKey
      )

      setStatus({
        type: 'success',
        message: 'Thank you for your message! I\'ll get back to you soon.'
      })
      setFormData({ name: '', email: '', message: '' })
    } catch (error) {
      console.error('EmailJS Error:', error)
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or email me directly.'
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-24 bg-gradient-to-br from-slate-950 via-indigo-950 to-slate-950 relative overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 bg-grid-pattern opacity-10" />
      <div className="absolute top-0 left-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{ animationDelay: '1s' }} />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-20 h-20 glass rounded-2xl mb-6 border border-cyan-500/30 card-3d animate-pulse-glow">
              <MessageSquare className="w-10 h-10 text-cyan-400" />
            </div>
            <h2 className="text-5xl sm:text-6xl font-bold text-white mb-4 text-code">
              <span className="text-cyan-400">&lt;</span>
              Get In Touch
              <span className="text-cyan-400">/&gt;</span>
            </h2>
            <p className="text-lg text-gray-400 mb-6">
              Have a project in mind or want to collaborate? I'd love to hear from you!
            </p>
            <div className="w-32 h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 mx-auto rounded-full" />
          </div>

          <div className="glass rounded-3xl p-8 sm:p-12 border border-cyan-500/20 card-3d">
            {/* Terminal-style header */}
            <div className="flex items-center space-x-2 mb-8 pb-4 border-b border-cyan-500/20">
              <Terminal className="w-5 h-5 text-cyan-400" />
              <span className="text-cyan-400 text-code">$ send-message</span>
            </div>

            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              {/* Name Field */}
              <div className="group">
                <label htmlFor="name" className="block text-sm font-semibold text-cyan-400 mb-2 text-code">
                  // Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-slate-900/50 border-2 border-cyan-500/20 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 hover:border-cyan-500/40 text-code"
                  placeholder="Your full name"
                />
              </div>

              {/* Email Field */}
              <div className="group">
                <label htmlFor="email" className="block text-sm font-semibold text-cyan-400 mb-2 text-code">
                  // Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-5 py-4 bg-slate-900/50 border-2 border-cyan-500/20 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 text-white placeholder-gray-500 hover:border-cyan-500/40 text-code"
                  placeholder="your.email@example.com"
                />
              </div>

              {/* Message Field */}
              <div className="group">
                <label htmlFor="message" className="block text-sm font-semibold text-cyan-400 mb-2 text-code">
                  // Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={6}
                  className="w-full px-5 py-4 bg-slate-900/50 border-2 border-cyan-500/20 rounded-2xl focus:ring-2 focus:ring-cyan-500 focus:border-transparent transition-all duration-300 resize-vertical text-white placeholder-gray-500 hover:border-cyan-500/40 text-code"
                  placeholder="Tell me about your project or just say hello!"
                />
              </div>

              {/* Status Message */}
              {status.type && (
                <div className={`flex items-center space-x-3 p-4 rounded-2xl animate-fade-in border-2 ${
                  status.type === 'success' 
                    ? 'bg-green-500/10 text-green-400 border-green-500/30' 
                    : 'bg-red-500/10 text-red-400 border-red-500/30'
                }`}>
                  {status.type === 'success' ? (
                    <CheckCircle size={24} className="flex-shrink-0" />
                  ) : (
                    <AlertCircle size={24} className="flex-shrink-0" />
                  )}
                  <span className="font-medium text-code">{status.message}</span>
                </div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className={`group w-full flex items-center justify-center space-x-2 px-8 py-5 rounded-2xl font-semibold text-lg transition-all duration-300 text-code cursor-pointer ${
                  isSubmitting
                    ? 'bg-gray-600 cursor-not-allowed'
                    : 'bg-gradient-to-r from-cyan-500 via-blue-500 to-indigo-500 hover:shadow-2xl hover:shadow-cyan-500/50 hover:scale-105 border border-cyan-400/50'
                } text-white`}
              >
                {isSubmitting ? (
                  <>
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                    <span>Sending...</span>
                  </>
                ) : (
                  <>
                    <Send size={22} className="group-hover:translate-x-1 transition-transform duration-300" />
                    <span>Send Message</span>
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact