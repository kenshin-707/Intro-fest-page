import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, Compass } from 'lucide-react'

export const NotFound: React.FC = () => {
  return (
    <div className="min-h-[75vh] flex items-center justify-center py-24 px-4 tech-grid-pattern transition-colors duration-250">
      <div className="max-w-md w-full bg-[var(--theme-surface)] border border-[var(--theme-border)] p-8 text-center space-y-6 shadow-xs rounded-xs">
        <div className="w-12 h-12 mx-auto rounded-xs bg-[var(--theme-subtle)] border border-[var(--theme-border)] flex items-center justify-center text-[#C62828]">
          <Compass className="w-6 h-6" />
        </div>

        <div className="space-y-1">
          <span className="font-mono text-xs uppercase text-[#C62828] font-bold tracking-widest">
            ERROR 404 // ROUTE NOT FOUND
          </span>
          <h1 className="font-display font-extrabold text-3xl text-[var(--theme-text-main)]">
            Page Not Located
          </h1>
          <p className="text-sm text-[var(--theme-text-secondary)] pt-2 leading-relaxed">
            The requested symposium route does not exist. Please return to the homepage or explore our three featured events.
          </p>
        </div>

        <div className="pt-2 flex flex-col gap-2 font-mono text-xs">
          <Link
            to="/"
            className="inline-flex items-center justify-center gap-2 px-5 py-3 bg-[#171717] dark:bg-white text-[#F7F7F5] dark:text-[#171717] hover:bg-[#C62828] dark:hover:bg-[#C62828] dark:hover:text-white transition-colors rounded-xs uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Homepage</span>
          </Link>
          <Link
            to="/#events"
            className="inline-flex items-center justify-center px-4 py-2 text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-main)] transition-colors uppercase tracking-wider"
          >
            Explore Featured Events
          </Link>
        </div>
      </div>
    </div>
  )
}

export default NotFound
