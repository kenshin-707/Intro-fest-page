import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, ArrowUpRight, MapPin, Users, FileSearch } from 'lucide-react'
import { EventItem } from '../data/events'
import { BeatTheBotVisual, TheLastArtifactVisual, IplAuctionVisual } from './Visuals'
import { GOOGLE_FORM_URL, isFormConfigured } from '../config/site'

interface EventCardProps {
  event: EventItem
  onOpenPoster?: (src: string, title: string) => void
}

export const EventCard: React.FC<EventCardProps> = ({ event, onOpenPoster }) => {
  const isFormActive = isFormConfigured()
  const isLastArtifact = event.slug === 'the-last-artifact'

  return (
    <article
      className="group relative bg-[var(--theme-surface)] border border-[var(--theme-border)] hover:border-[var(--theme-text-main)] transition-all duration-300 flex flex-col justify-between shadow-2xs hover:shadow-md rounded-xs"
    >
      {/* Top Header Row */}
      <div className="p-5 border-b border-[var(--theme-border)] flex items-center justify-between">
        <div className="flex items-center gap-2">
          <span className="font-mono text-xs font-bold text-[#C62828] bg-[#C62828]/10 px-2 py-0.5 rounded-xs">
            [{event.number}]
          </span>
          <span className="font-mono text-[10px] uppercase tracking-wider text-[var(--theme-text-secondary)]">
            {event.organizerBadge || 'AIML & CYBER'}
          </span>
        </div>
        <span
          className={`font-mono text-[10px] uppercase font-semibold px-2 py-0.5 rounded-xs ${
            event.category === 'Technical'
              ? 'bg-[#171717] dark:bg-white text-[#F7F7F5] dark:text-[#171717]'
              : 'bg-[#F2C94C] text-[#171717]'
          }`}
        >
          {event.category}
        </span>
      </div>

      {/* Visual Header */}
      <div className="w-full overflow-hidden border-b border-[var(--theme-border)] bg-[var(--theme-subtle)] relative">
        {event.visualTheme === 'neural-bot' && <BeatTheBotVisual />}
        {event.visualTheme === 'forensic-artifact' && (
          <div className="relative">
            <TheLastArtifactVisual />
            {event.posterImage && onOpenPoster && (
              <button
                type="button"
                onClick={() => onOpenPoster(event.posterImage!, 'The Last Artifact Official Poster')}
                className="absolute bottom-2 right-2 z-20 px-2.5 py-1 bg-black/80 hover:bg-[#C62828] text-white text-[10px] font-mono tracking-wider rounded-xs border border-white/20 flex items-center gap-1.5 transition-colors cursor-pointer shadow-md"
                title="Inspect official CYRA poster"
              >
                <FileSearch className="w-3 h-3 text-[#F2C94C]" />
                <span>View Official Poster</span>
              </button>
            )}
          </div>
        )}
        {event.visualTheme === 'ipl-auction' && <IplAuctionVisual />}
      </div>

      {/* Content Body */}
      <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
        <div>
          <Link to={`/events/${event.slug}`} className="block group-hover:text-[#C62828] transition-colors">
            <h3 className="font-display font-bold text-2xl sm:text-3xl tracking-tight text-[var(--theme-text-main)] leading-tight">
              {event.name}
            </h3>
          </Link>
          <p className="mt-1 font-mono text-xs text-[#C62828] font-medium italic">
            {event.tagline}
          </p>
          <p className="mt-3 text-sm text-[var(--theme-text-secondary)] line-clamp-3 leading-relaxed">
            {event.shortDescription}
          </p>
        </div>

        {/* Verified Metadata Chips */}
        <div className="pt-2 border-t border-[var(--theme-border)] grid grid-cols-2 gap-2 text-xs font-mono text-[var(--theme-text-secondary)]">
          <div className="flex items-center gap-1.5">
            <span className="text-[var(--theme-text-main)] font-semibold">Fee:</span>
            <span className="text-[#C62828] font-bold">{event.fee}</span>
          </div>

          <div className="flex items-center gap-1.5 truncate">
            <Users className="w-3.5 h-3.5 shrink-0 text-[var(--theme-text-secondary)]" />
            <span className="truncate">{event.teamSize || 'Individual / Team'}</span>
          </div>

          {event.venue && (
            <div className="flex items-center gap-1.5 col-span-2 text-[var(--theme-text-main)] truncate">
              <MapPin className="w-3.5 h-3.5 shrink-0 text-[#C62828]" />
              <span className="truncate">Venue: {event.venue}</span>
            </div>
          )}
        </div>
      </div>

      {/* Action Footer */}
      <div className="p-5 border-t border-[var(--theme-border)] bg-[var(--theme-subtle)] flex items-center justify-between gap-3">
        <Link
          to={`/events/${event.slug}`}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-wider text-[var(--theme-text-main)] hover:text-[#C62828] transition-colors py-1 group/btn"
        >
          <span>Explore Event</span>
          <ArrowRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover/btn:translate-x-1" />
        </Link>

        <div className="flex items-center gap-3">
          {event.posterImage && onOpenPoster && (
            <button
              type="button"
              onClick={() => onOpenPoster(event.posterImage!, `${event.name} Official Poster`)}
              className="inline-flex items-center gap-1 text-[11px] font-mono text-[var(--theme-text-secondary)] hover:text-[#C62828] transition-colors py-1 cursor-pointer"
            >
              <span>Poster</span>
            </button>
          )}

          {isFormActive && (
            <a
              href={GOOGLE_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-[11px] font-mono text-[var(--theme-text-secondary)] hover:text-[var(--theme-text-main)] transition-colors py-1"
              title="Register for this event"
            >
              <span>Direct Register</span>
              <ArrowUpRight className="w-3 h-3" />
            </a>
          )}
        </div>
      </div>
    </article>
  )
}

export default EventCard
