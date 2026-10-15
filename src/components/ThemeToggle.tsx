import React from 'react'
import { Sun, Moon } from 'lucide-react'
import { useTheme } from '../context/ThemeContext'

interface ThemeToggleProps {
  className?: string
}

export const ThemeToggle: React.FC<ThemeToggleProps> = ({ className = '' }) => {
  const { theme, toggleTheme } = useTheme()
  const isDark = theme === 'dark'

  return (
    <button
      onClick={toggleTheme}
      type="button"
      className={`relative p-2 rounded-xs border border-[#E2E2DE] dark:border-white/15 bg-white dark:bg-[#1A1A1E] text-[#171717] dark:text-[#F7F7F5] hover:border-[#171717] dark:hover:border-white transition-all cursor-pointer shadow-2xs ${className}`}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
    >
      <div className="relative w-4 h-4 flex items-center justify-center">
        {isDark ? (
          <Sun className="w-4 h-4 text-[#F2C94C] transition-transform duration-300 hover:rotate-45" />
        ) : (
          <Moon className="w-4 h-4 text-[#171717] transition-transform duration-300 hover:-rotate-12" />
        )}
      </div>
    </button>
  )
}

export default ThemeToggle
