import React from 'react'
import { ArrowDown, Calendar, MapPin } from 'lucide-react'
import { siteConfig } from '../config/site'
import { JoiningCodeBadge } from './JoiningCodeBadge'
import { RegistrationButton } from './RegistrationButton'
import { WhatsAppButton } from './WhatsAppButton'
import { HeroVisual } from './Visuals'

interface HeroProps {
  onOpenPoster: () => void
}

export const Hero: React.FC<HeroProps> = ({ onOpenPoster }) => {
  return (
    <section className="relative pt-24 sm:pt-32 pb-16 sm:pb-24 border-b border-[var(--theme-border)] overflow-hidden tech-grid-pattern transition-colors duration-250">
      {/* Subtle background ambient red accent */}
      <div className="absolute top-10 right-0 w-[420px] h-[420px] bg-[#C62828]/5 dark:bg-[#C62828]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Metadata Strip */}
        <div className="flex flex-wrap items-center justify-between gap-3 pb-6 border-b border-[var(--theme-border)] font-mono text-xs uppercase tracking-wider text-[var(--theme-text-secondary)]">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#C62828]" />
            <span className="text-[var(--theme-text-main)] font-semibold">
              {siteConfig.institution.campus}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[var(--theme-text-main)]">
              <Calendar className="w-3.5 h-3.5 text-[#C62828]" />
              {siteConfig.date}
            </span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:flex items-center gap-1.5">
              <MapPin className="w-3.5 h-3.5 text-[var(--theme-text-secondary)]" />
              {siteConfig.institution.location}
            </span>
          </div>
        </div>

        {/* Main Editorial Hero Grid */}
        <div className="mt-8 lg:mt-12 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          {/* Left Column (7 cols): Typography and CTAs */}
          <div className="lg:col-span-7 space-y-6">
            {/* Department Label */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-[var(--theme-surface)] border border-[var(--theme-border)] text-xs font-mono uppercase tracking-wider text-[var(--theme-text-main)] rounded-xs shadow-2xs">
              <span className="w-1.5 h-1.5 rounded-full bg-[#F2C94C]" />
              <span>PRESENTED BY {siteConfig.department.name} DEPARTMENT</span>
            </div>

            {/* Oversized Event Typography */}
            <div className="space-y-1">
              <h1 className="font-display font-extrabold text-[clamp(2.8rem,7.5vw,5.6rem)] leading-[0.92] tracking-tight text-[var(--theme-text-main)]">
                INTERO <span className="text-[#C62828]">FEST</span>
                <span className="block text-[var(--theme-text-main)]">’26</span>
              </h1>
              <p className="font-mono text-xs sm:text-sm uppercase tracking-widest text-[var(--theme-text-secondary)] pt-2">
                {siteConfig.tagline}
              </p>
            </div>

            {/* Creative Direction Headline */}
            <div className="border-l-2 border-[#C62828] pl-4 py-1">
              <p className="font-display text-xl sm:text-2xl font-bold tracking-tight text-[var(--theme-text-main)] leading-snug">
                {siteConfig.creativeHeadline}
              </p>
              <p className="mt-1 text-sm text-[var(--theme-text-secondary)] max-w-xl leading-relaxed">
                Three focused challenges bridging machine cognition, digital forensics, and live auction tactics. Form your team, pick your domain, and compete.
              </p>
            </div>

            {/* Critical Joining Code Callout Banner */}
            <div className="pt-2">
              <JoiningCodeBadge variant="hero" className="w-full sm:w-auto" />
              <p className="mt-1.5 text-[11px] font-mono text-[var(--theme-text-secondary)]">
                * Remember to enter code <strong className="text-[var(--theme-text-main)]">SSEC101</strong> on the Google Form &amp; WhatsApp group upon joining.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="#events"
                className="inline-flex items-center gap-2 px-5 py-3 bg-[#171717] dark:bg-white text-[#F7F7F5] dark:text-[#171717] font-mono text-xs uppercase tracking-wider hover:bg-[#C62828] dark:hover:bg-[#C62828] dark:hover:text-white transition-colors rounded-xs border border-[#171717] dark:border-white hover:border-[#C62828] shadow-xs cursor-pointer"
              >
                <span>Explore Our Events (3)</span>
                <ArrowDown className="w-4 h-4" />
              </a>

              <RegistrationButton
                variant="primary"
                size="md"
                label="Register for Symposium"
              />

              <WhatsAppButton
                variant="outline"
                size="md"
                label="Join WhatsApp"
              />
            </div>

            {/* Verified Poster Inspection Link */}
            <div className="pt-1">
              <button
                onClick={onOpenPoster}
                type="button"
                className="inline-flex items-center gap-2 text-xs font-mono text-[var(--theme-text-secondary)] hover:text-[#C62828] underline underline-offset-4 cursor-pointer"
              >
                <span>View Official INTERO FEST ’26 Poster</span>
              </button>
            </div>
          </div>

          {/* Right Column (5 cols): Spatial Interactive Visual */}
          <div className="lg:col-span-5 flex justify-center">
            <HeroVisual />
          </div>
        </div>

        {/* Bottom Verified Stats / Highlights Ticker */}
        <div className="mt-14 pt-6 border-t border-[var(--theme-border)] grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs">
          <div className="p-3 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-xs">
            <span className="text-[var(--theme-text-secondary)] text-[10px] uppercase block">EVENTS PRESENTED</span>
            <strong className="text-sm sm:text-base font-bold text-[var(--theme-text-main)]">3 SIGNATURE ARENAS</strong>
          </div>

          <div className="p-3 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-xs">
            <span className="text-[var(--theme-text-secondary)] text-[10px] uppercase block">REGISTRATION FEE</span>
            <strong className="text-sm sm:text-base font-bold text-[#C62828]">{siteConfig.registrationFee}</strong>
          </div>

          <div className="p-3 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-xs">
            <span className="text-[var(--theme-text-secondary)] text-[10px] uppercase block">EVENT DATE</span>
            <strong className="text-sm sm:text-base font-bold text-[var(--theme-text-main)]">OCTOBER 31, 2026</strong>
          </div>

          <div className="p-3 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-xs">
            <span className="text-[var(--theme-text-secondary)] text-[10px] uppercase block">PERKS</span>
            <strong className="text-sm sm:text-base font-bold text-[var(--theme-text-main)]">PRIZES + CERTIFICATE</strong>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
