'use client'

import { Moon, Sun } from 'lucide-react'
import { useTheme } from '@/contexts/ThemeContext'

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme()

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-8 right-8 z-50 flex items-center justify-center w-14 h-14 glass rounded-2xl border border-cyan-500/30 hover:border-cyan-500/50 transition-all duration-300 hover:scale-110 card-3d group cursor-pointer"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="w-6 h-6 text-cyan-400 group-hover:rotate-180 transition-transform duration-500" />
      ) : (
        <Moon className="w-6 h-6 text-blue-600 group-hover:-rotate-180 transition-transform duration-500" />
      )}
    </button>
  )
}

export default ThemeToggle