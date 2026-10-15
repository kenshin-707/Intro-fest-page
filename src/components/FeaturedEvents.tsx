import React from 'react'
import { events } from '../data/events'
import { EventCard } from './EventCard'
import { KeyRound } from 'lucide-react'
import { JOINING_CODE } from '../config/site'

interface FeaturedEventsProps {
  onOpenPoster?: (src: string, title: string) => void
}

export const FeaturedEvents: React.FC<FeaturedEventsProps> = ({ onOpenPoster }) => {
  return (
    <section id="events" className="py-20 sm:py-28 border-b border-[var(--theme-border)] bg-[var(--theme-bg)] tech-grid-pattern transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading Row */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-12 border-b border-[var(--theme-border)]">
          <div className="space-y-2 max-w-2xl">
            <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#C62828]">
              <span className="w-2 h-2 rounded-full bg-[#C62828]" />
              <span>DEPARTMENT OF AIML &amp; CYBER // SIGNATURE ARENAS</span>
            </div>
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-[var(--theme-text-main)] leading-[1.05]">
              THREE EVENTS. THREE WAYS TO THINK.
            </h2>
            <p className="text-sm sm:text-base text-[var(--theme-text-secondary)] leading-relaxed pt-1">
              Select your arena. Two technical showdowns in artificial intelligence and digital forensics, paired with one high-stakes non-technical strategic bidding simulation.
            </p>
          </div>

          {/* Joining Code Reminder Pill */}
          <div className="shrink-0 p-3 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-xs font-mono text-xs flex items-center gap-2.5 shadow-2xs">
            <KeyRound className="w-4 h-4 text-[#C62828]" />
            <div>
              <span className="text-[var(--theme-text-secondary)] text-[10px] block uppercase">Shared Registration Code</span>
              <strong className="text-[var(--theme-text-main)] font-bold text-sm tracking-wider">{JOINING_CODE}</strong>
            </div>
          </div>
        </div>

        {/* The 3 Featured Event Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {events.map((event) => (
            <EventCard key={event.slug} event={event} onOpenPoster={onOpenPoster} />
          ))}
        </div>

        {/* Footnote on Single Shared Registration */}
        <div className="mt-10 p-4 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-xs flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 font-mono text-xs text-[var(--theme-text-secondary)]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#F2C94C]" />
            <span>
              All 3 events are registered through the single official Google Form with Joining Code <strong className="text-[var(--theme-text-main)]">{JOINING_CODE}</strong>.
            </span>
          </div>
          <span className="text-[#C62828] font-bold shrink-0">₹250 / Person</span>
        </div>
      </div>
    </section>
  )
}

export default FeaturedEvents
