import React, { useState } from 'react'
import { useParams, Link, Navigate } from 'react-router-dom'
import { ArrowLeft, ArrowRight, AlertCircle, ZoomIn, Phone, Terminal, Bot, Lightbulb, Users } from 'lucide-react'
import { events, getEventBySlug } from '../data/events'
import { siteConfig, JOINING_CODE } from '../config/site'
import { RegistrationButton } from '../components/RegistrationButton'
import { WhatsAppButton } from '../components/WhatsAppButton'
import { JoiningCodeBadge } from '../components/JoiningCodeBadge'
import { BeatTheBotVisual, TheLastArtifactVisual, IplAuctionVisual } from '../components/Visuals'
import { PosterModal } from '../components/PosterModal'

export const EventPage: React.FC = () => {
  const { slug } = useParams<{ slug: string }>()
  const event = slug ? getEventBySlug(slug) : undefined
  const [posterOpen, setPosterOpen] = useState(false)

  if (!event) {
    return <Navigate to="/404" replace />
  }

  // Find next event for navigation
  const currentIndex = events.findIndex((e) => e.slug === event.slug)
  const nextEvent = events[(currentIndex + 1) % events.length]
  const prevEvent = events[(currentIndex - 1 + events.length) % events.length]

  const isLastArtifact = event.slug === 'the-last-artifact'
  const isBeatTheBot = event.slug === 'beat-the-bot'

  return (
    <div className="pt-20 sm:pt-24 pb-20 transition-colors duration-250">
      {/* Top Breadcrumb & Navigation Bar */}
      <div className="bg-[var(--theme-surface)] border-b border-[var(--theme-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-wrap items-center justify-between gap-4 font-mono text-xs">
          <Link
            to="/#events"
            className="inline-flex items-center gap-2 text-[var(--theme-text-main)] hover:text-[#C62828] font-bold uppercase transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Events</span>
          </Link>

          <div className="flex items-center gap-3">
            <span className="text-[var(--theme-text-secondary)]">
              EVENT [{event.number} OF 03]
            </span>
            <span className="hidden sm:inline text-[var(--theme-border)]">•</span>
            <span
              className={`px-2 py-0.5 rounded-xs font-semibold ${
                event.category === 'Technical'
                  ? 'bg-[#171717] dark:bg-white text-[#F7F7F5] dark:text-[#171717]'
                  : 'bg-[#F2C94C] text-[#171717]'
              }`}
            >
              {event.category}
            </span>
          </div>
        </div>
      </div>

      {/* Main Event Hero Section */}
      <section className="bg-[var(--theme-bg)] border-b border-[var(--theme-border)] py-12 sm:py-20 tech-grid-pattern">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            {/* Left Column (7 cols): Title, Tagline, CTAs */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--theme-surface)] border border-[var(--theme-border)] text-xs font-mono uppercase tracking-wider text-[var(--theme-text-main)] rounded-xs shadow-2xs">
                <span className="w-1.5 h-1.5 rounded-full bg-[#C62828]" />
                <span>{event.organizerBadge || 'AIML & CYBER DEPARTMENT'}</span>
              </div>

              <div>
                <span className="font-mono text-xs font-bold text-[#C62828] block mb-1">
                  EVENT {event.number}
                </span>
                <h1 className="font-display font-extrabold text-[clamp(2.5rem,6vw,4.5rem)] leading-[0.95] tracking-tight text-[var(--theme-text-main)]">
                  {event.name}
                </h1>
                <p className="mt-3 font-mono text-sm sm:text-base text-[#C62828] italic font-medium">
                  {event.tagline}
                </p>
              </div>

              <p className="text-base text-[var(--theme-text-secondary)] leading-relaxed max-w-xl">
                {event.shortDescription}
              </p>

              {/* Joining Code & Action Buttons */}
              <div className="pt-2 space-y-4">
                <JoiningCodeBadge variant="callout" />

                <div className="flex flex-wrap items-center gap-3">
                  <RegistrationButton
                    variant="primary"
                    size="md"
                    label={`Register for ${event.name}`}
                  />
                  <WhatsAppButton
                    variant="outline"
                    size="md"
                    label="Join WhatsApp Channel"
                  />
                  {event.posterImage && (
                    <button
                      onClick={() => setPosterOpen(true)}
                      type="button"
                      className="inline-flex items-center gap-2 px-4 py-2.5 bg-[var(--theme-surface)] border border-[var(--theme-border)] hover:border-[var(--theme-text-main)] font-mono text-xs uppercase tracking-wider text-[var(--theme-text-main)] rounded-xs transition-colors cursor-pointer shadow-2xs"
                    >
                      <ZoomIn className="w-3.5 h-3.5 text-[#C62828]" />
                      <span>Inspect Official Poster</span>
                    </button>
                  )}
                </div>
              </div>
            </div>

            {/* Right Column (5 cols): Dynamic Visual or Poster Thumbnail */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="w-full max-w-[480px] shadow-sm border border-[var(--theme-border)] overflow-hidden bg-[var(--theme-surface)] rounded-xs">
                {event.visualTheme === 'neural-bot' && <BeatTheBotVisual />}
                
                {event.visualTheme === 'forensic-artifact' && (
                  <div className="relative group">
                    {/* Real Poster from detials folder showcase */}
                    <div
                      className="relative aspect-[3/4] max-h-[460px] w-full overflow-hidden bg-black flex items-center justify-center cursor-pointer"
                      onClick={() => setPosterOpen(true)}
                    >
                      <img
                        src="/images/the-last-artifact-poster.jpg"
                        alt="The Last Artifact Official Poster from detials folder"
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30 pointer-events-none" />
                      
                      {/* Top badge */}
                      <div className="absolute top-3 left-3 bg-[#C62828] text-white px-2.5 py-1 text-[10px] font-mono uppercase font-bold tracking-widest shadow-md">
                        CYRA COMMUNITY POSTER
                      </div>

                      {/* Click overlay indicator */}
                      <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between p-2.5 bg-black/85 backdrop-blur-xs border border-white/20 text-white text-xs font-mono rounded-xs">
                        <span className="text-white/80 font-medium">Click to inspect high-res poster</span>
                        <ZoomIn className="w-4 h-4 text-[#F2C94C]" />
                      </div>
                    </div>
                  </div>
                )}

                {event.visualTheme === 'ipl-auction' && <IplAuctionVisual />}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Structured Details and Parameters Grid */}
      <section className="py-16 sm:py-20 bg-[var(--theme-surface)] border-b border-[var(--theme-border)]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12">
            {/* Main Content Column (8 cols) */}
            <div className="lg:col-span-8 space-y-12">
              {/* Event Overview */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#C62828]">
                  <span className="w-2 h-2 rounded-full bg-[#C62828]" />
                  <span>Event Brief</span>
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-[var(--theme-text-main)]">
                  Overview
                </h2>
                <div className="prose text-[var(--theme-text-secondary)] text-base leading-relaxed space-y-4">
                  <p>{event.fullOverview || event.shortDescription}</p>
                </div>
              </div>

              {/* BEAT THE BOT: Dedicated 7 Levels & Prompt Tricks Guide */}
              {isBeatTheBot && event.exampleTricks && (
                <div className="space-y-6 pt-6 border-t border-[var(--theme-border)]">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#C62828]">
                    <span className="w-2 h-2 rounded-full bg-[#C62828]" />
                    <span>How It Works // 7 Defense Levels</span>
                  </div>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-[var(--theme-text-main)]">
                    Adversarial Prompting &amp; Example Tricks
                  </h2>
                  <p className="text-sm text-[var(--theme-text-secondary)] leading-relaxed">
                    An AI chatbot is guarding a secret password across 7 escalating security stages. Each level makes the bot significantly harder to fool. No coding is needed—only smart, creative talking.
                  </p>

                  <div className="p-5 bg-[var(--theme-subtle)] border border-[var(--theme-border)] rounded-xs space-y-4">
                    <div className="flex items-center gap-2 text-xs font-mono font-bold text-[var(--theme-text-main)] uppercase tracking-wider">
                      <Lightbulb className="w-4 h-4 text-[#F2C94C]" />
                      <span>Example Tricks Players Use</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {event.exampleTricks.map((trick, idx) => (
                        <div
                          key={idx}
                          className="p-3 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-xs font-mono text-xs text-[var(--theme-text-main)] flex items-start gap-2 shadow-2xs"
                        >
                          <span className="text-[#C62828] font-bold">[{idx + 1}]</span>
                          <span className="italic">{trick}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Batch password rotation notice */}
                  <div className="p-4 bg-[var(--theme-surface)] border-l-4 border-l-[#F2C94C] border border-[var(--theme-border)] rounded-xs font-mono text-xs text-[var(--theme-text-secondary)]">
                    <strong className="text-[var(--theme-text-main)] block mb-1">
                      Competitive Integrity Note:
                    </strong>
                    Passwords are dynamically rotated every batch so teams cannot share answers. Live rankings will update on the lab projector screen.
                  </div>
                </div>
              )}

              {/* Verified Participation Format */}
              <div className="space-y-4 pt-6 border-t border-[var(--theme-border)]">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#C62828]">
                  <span className="w-2 h-2 rounded-full bg-[#C62828]" />
                  <span>Structure</span>
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-[var(--theme-text-main)]">
                  Participation Format &amp; Team Size
                </h2>
                {event.format || event.teamSize ? (
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                    {event.format && (
                      <div className="p-4 bg-[var(--theme-subtle)] border border-[var(--theme-border)] rounded-xs">
                        <span className="font-mono text-xs text-[var(--theme-text-secondary)] block uppercase">
                          Format
                        </span>
                        <strong className="text-base text-[var(--theme-text-main)]">{event.format}</strong>
                      </div>
                    )}
                    {event.teamSize && (
                      <div className="p-4 bg-[var(--theme-subtle)] border border-[var(--theme-border)] rounded-xs">
                        <span className="font-mono text-xs text-[var(--theme-text-secondary)] block uppercase">
                          Team Size
                        </span>
                        <strong className="text-base text-[var(--theme-text-main)]">{event.teamSize}</strong>
                      </div>
                    )}
                  </div>
                ) : (
                  <div className="p-4 bg-[var(--theme-subtle)] border border-[var(--theme-border)] rounded-xs font-mono text-xs text-[var(--theme-text-secondary)] flex items-center gap-2">
                    <AlertCircle className="w-4 h-4 text-[#C62828]" />
                    <span>Participation format and team configuration will be announced soon.</span>
                  </div>
                )}
              </div>

              {/* For The Last Artifact: Dedicated Poster & Clue Dossier Block */}
              {isLastArtifact && (
                <div className="space-y-4 pt-6 border-t border-[var(--theme-border)]">
                  <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#C62828]">
                    <span className="w-2 h-2 rounded-full bg-[#C62828]" />
                    <span>Authoritative Clue File</span>
                  </div>
                  <h2 className="font-display font-bold text-2xl sm:text-3xl text-[var(--theme-text-main)]">
                    Official Event Poster Dossier
                  </h2>
                  <div className="p-5 bg-[var(--theme-subtle)] border border-[var(--theme-border)] rounded-xs flex flex-col sm:flex-row items-center gap-6">
                    <img
                      src="/images/the-last-artifact-poster.jpg"
                      alt="The Last Artifact Official Poster"
                      className="w-32 sm:w-40 h-auto rounded-xs border border-[var(--theme-border)] shadow-md cursor-pointer hover:opacity-90 transition-opacity"
                      onClick={() => setPosterOpen(true)}
                    />
                    <div className="space-y-3 font-mono text-xs text-[var(--theme-text-secondary)]">
                      <div className="space-y-1">
                        <strong className="text-sm font-display text-[var(--theme-text-main)] block">
                          Verified Case Briefing from CYRA Community
                        </strong>
                        <p className="text-[11px] leading-relaxed">
                          Sourced directly from the official event documents in the details folder. Features the official registration QR, venue coordinates (205 Gallery Hall), and 2-hour timeline constraints.
                        </p>
                      </div>
                      <button
                        onClick={() => setPosterOpen(true)}
                        type="button"
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#171717] dark:bg-white text-white dark:text-[#171717] hover:bg-[#C62828] dark:hover:bg-[#C62828] dark:hover:text-white rounded-xs transition-colors cursor-pointer text-[11px] uppercase tracking-wider font-bold"
                      >
                        <ZoomIn className="w-3.5 h-3.5" />
                        <span>Inspect Full Resolution Poster</span>
                      </button>
                    </div>
                  </div>
                </div>
              )}

              {/* Rules and Regulations */}
              <div className="space-y-4 pt-6 border-t border-[var(--theme-border)]">
                <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#C62828]">
                  <span className="w-2 h-2 rounded-full bg-[#C62828]" />
                  <span>Evaluation &amp; Protocol</span>
                </div>
                <h2 className="font-display font-bold text-2xl sm:text-3xl text-[var(--theme-text-main)]">
                  Rules &amp; Regulations
                </h2>
                {event.rules && event.rules.length > 0 ? (
                  <ul className="space-y-3 font-mono text-sm text-[var(--theme-text-main)]">
                    {event.rules.map((rule, idx) => (
                      <li key={idx} className="flex items-start gap-3 p-3 bg-[var(--theme-subtle)] border border-[var(--theme-border)] rounded-xs">
                        <span className="text-[#C62828] font-bold">[{idx + 1}]</span>
                        <span>{rule}</span>
                      </li>
                    ))}
                  </ul>
                ) : (
                  <div className="p-5 bg-[var(--theme-subtle)] border border-[var(--theme-border)] rounded-xs space-y-2">
                    <div className="flex items-center gap-2 text-xs font-mono text-[var(--theme-text-main)] font-semibold">
                      <AlertCircle className="w-4 h-4 text-[#C62828]" />
                      <span>Official Rules Coming Soon</span>
                    </div>
                    <p className="text-xs text-[var(--theme-text-secondary)]">
                      Detailed rulebooks, evaluation rubrics, and submission parameters will be announced soon by the AIML &amp; Cyber Department coordinators.
                    </p>
                  </div>
                )}
              </div>

              {/* Requirements & Preparation */}
              {event.requirements && (
                <div className="space-y-4 pt-6 border-t border-[var(--theme-border)]">
                  <h2 className="font-display font-bold text-2xl text-[var(--theme-text-main)]">
                    Requirements &amp; Preparation
                  </h2>
                  <ul className="space-y-2 text-sm text-[var(--theme-text-secondary)]">
                    {event.requirements.map((req, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <span className="text-[#C62828]">•</span>
                        <span>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>

            {/* Sidebar Specifications Column (4 cols) */}
            <div className="lg:col-span-4 space-y-6">
              {/* Event Specification Card */}
              <div className="p-6 bg-[var(--theme-subtle)] border border-[var(--theme-border)] rounded-xs space-y-5">
                <div className="flex items-center justify-between border-b border-[var(--theme-border)] pb-3">
                  <span className="font-mono text-xs uppercase font-bold text-[var(--theme-text-main)]">
                    EVENT DATA SHEET
                  </span>
                  <span className="font-mono text-xs text-[#C62828] font-bold">[{event.number}]</span>
                </div>

                <div className="space-y-4 font-mono text-xs">
                  <div>
                    <span className="text-[var(--theme-text-secondary)] uppercase block text-[10px]">Date</span>
                    <strong className="text-[var(--theme-text-main)] text-sm">{siteConfig.date}</strong>
                  </div>

                  <div>
                    <span className="text-[var(--theme-text-secondary)] uppercase block text-[10px]">Registration Fee</span>
                    <strong className="text-[#C62828] text-sm">{event.fee}</strong>
                  </div>

                  <div>
                    <span className="text-[var(--theme-text-secondary)] uppercase block text-[10px]">Venue</span>
                    <strong className="text-[var(--theme-text-main)]">
                      {event.venue || 'To be announced soon'}
                    </strong>
                  </div>

                  {event.duration && (
                    <div>
                      <span className="text-[var(--theme-text-secondary)] uppercase block text-[10px]">Duration</span>
                      <strong className="text-[var(--theme-text-main)]">{event.duration}</strong>
                    </div>
                  )}

                  <div>
                    <span className="text-[var(--theme-text-secondary)] uppercase block text-[10px]">Campus</span>
                    <strong className="text-[var(--theme-text-main)] block leading-tight">
                      {siteConfig.institution.campus}
                    </strong>
                  </div>

                  <div className="pt-2 border-t border-[var(--theme-border)]">
                    <span className="text-[var(--theme-text-secondary)] uppercase block text-[10px]">Joining Code</span>
                    <strong className="text-[var(--theme-text-main)] text-sm tracking-wider">{JOINING_CODE}</strong>
                  </div>
                </div>

                <div className="pt-4 border-t border-[var(--theme-border)] space-y-2">
                  <RegistrationButton
                    variant="primary"
                    size="md"
                    className="w-full justify-center"
                    label="Register Now"
                  />
                  <WhatsAppButton
                    variant="outline"
                    size="md"
                    className="w-full justify-center"
                    label="Join WhatsApp"
                  />
                </div>
              </div>

              {/* Event Coordinators Card (when contacts are available) */}
              {event.contacts && event.contacts.length > 0 && (
                <div className="p-6 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-xs space-y-4">
                  <div className="flex items-center gap-2 border-b border-[var(--theme-border)] pb-3">
                    <Phone className="w-4 h-4 text-[#C62828]" />
                    <span className="font-mono text-xs uppercase font-bold text-[var(--theme-text-main)]">
                      Event Coordinators
                    </span>
                  </div>

                  <div className="space-y-3 font-mono text-xs">
                    {event.contacts.map((coordinator) => (
                      <div
                        key={coordinator.name}
                        className="p-3 bg-[var(--theme-subtle)] border border-[var(--theme-border)] rounded-xs space-y-1"
                      >
                        <div className="flex items-center justify-between">
                          <strong className="text-[var(--theme-text-main)]">{coordinator.name}</strong>
                          <span className="text-[10px] text-[var(--theme-text-secondary)] uppercase">
                            {coordinator.role}
                          </span>
                        </div>
                        {coordinator.phone && (
                          <a
                            href={`tel:${coordinator.phone.replace(/\s+/g, '')}`}
                            className="inline-flex items-center gap-1.5 text-[#C62828] hover:underline font-bold text-xs pt-1"
                          >
                            <Phone className="w-3 h-3" />
                            <span>{coordinator.phone}</span>
                          </a>
                        )}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Institution Footnote */}
              <div className="p-4 border border-[var(--theme-border)] bg-[var(--theme-surface)] rounded-xs font-mono text-xs text-[var(--theme-text-secondary)] space-y-1">
                <span className="font-bold text-[var(--theme-text-main)] block">Sree Sakthi Engineering College</span>
                <p className="text-[11px] leading-relaxed">
                  Autonomous Technical Campus, Karamadai, Coimbatore.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Switcher Navigation between Events */}
      <section className="bg-[var(--theme-bg)] border-b border-[var(--theme-border)] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-6">
          <Link
            to={`/events/${prevEvent.slug}`}
            className="flex items-center gap-3 p-4 bg-[var(--theme-surface)] border border-[var(--theme-border)] hover:border-[var(--theme-text-main)] rounded-xs transition-colors w-full sm:w-auto"
          >
            <ArrowLeft className="w-4 h-4 text-[#C62828]" />
            <div className="text-left font-mono">
              <span className="text-[10px] text-[var(--theme-text-secondary)] uppercase block">PREVIOUS EVENT</span>
              <strong className="text-xs text-[var(--theme-text-main)]">{prevEvent.name}</strong>
            </div>
          </Link>

          <Link
            to={`/events/${nextEvent.slug}`}
            className="flex items-center justify-between sm:justify-end gap-3 p-4 bg-[var(--theme-surface)] border border-[var(--theme-border)] hover:border-[var(--theme-text-main)] rounded-xs transition-colors w-full sm:w-auto"
          >
            <div className="text-right font-mono">
              <span className="text-[10px] text-[var(--theme-text-secondary)] uppercase block">NEXT EVENT</span>
              <strong className="text-xs text-[var(--theme-text-main)]">{nextEvent.name}</strong>
            </div>
            <ArrowRight className="w-4 h-4 text-[#C62828]" />
          </Link>
        </div>
      </section>

      {/* Poster viewer modal */}
      {event.posterImage && (
        <PosterModal
          isOpen={posterOpen}
          onClose={() => setPosterOpen(false)}
          imageSrc={event.posterImage}
          title={`${event.name} Official Poster`}
          caption="Verified event branding sourced from the details folder (CYRA Community / SSEC)"
        />
      )}
    </div>
  )
}

export default EventPage
