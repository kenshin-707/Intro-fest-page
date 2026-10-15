import React from 'react'
import { Calendar, MapPin, IndianRupee, KeyRound, Building, ShieldCheck, Users, HelpCircle } from 'lucide-react'
import { siteConfig, JOINING_CODE } from '../config/site'
import { JoiningCodeBadge } from './JoiningCodeBadge'

export const SymposiumInfo: React.FC = () => {
  const infoRows = [
    { label: 'Event Name', value: siteConfig.name, icon: Building },
    { label: 'Event Nature', value: siteConfig.tagline, icon: ShieldCheck },
    { label: 'Official Date', value: siteConfig.date, icon: Calendar, highlight: true },
    { label: 'Registration Fee', value: siteConfig.registrationFee, icon: IndianRupee, highlightRed: true },
    { label: 'Required Joining Code', value: JOINING_CODE, icon: KeyRound, isCode: true },
    { label: 'Organizing Department', value: `${siteConfig.department.name} Department`, icon: ShieldCheck },
    { label: 'Host Institution', value: siteConfig.institution.name, icon: Building },
    { label: 'Campus Location', value: siteConfig.institution.address, icon: MapPin },
    { label: 'Participation Types', value: 'Individual & Team Formats', icon: Users },
    { label: 'Schedule & Batches', value: 'Detailed reporting timings will be announced soon', icon: HelpCircle, isMuted: true }
  ]

  return (
    <section id="symposium-info" className="py-20 sm:py-28 border-b border-[var(--theme-border)] bg-[var(--theme-bg)] tech-grid-pattern transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl space-y-2 pb-12 border-b border-[var(--theme-border)]">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#C62828]">
            <span className="w-2 h-2 rounded-full bg-[#C62828]" />
            <span>Verified Symposium Specifications</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-[var(--theme-text-main)] leading-[1.05]">
            SYMPOSIUM INFORMATION
          </h2>
          <p className="text-sm sm:text-base text-[var(--theme-text-secondary)] leading-relaxed pt-1">
            Official coordinates, registration terms, and verified parameters for INTERO FEST ’26.
          </p>
        </div>

        {/* Structured Spec Grid */}
        <div className="mt-12 bg-[var(--theme-surface)] border border-[var(--theme-border)] divide-y divide-[var(--theme-border)] shadow-2xs rounded-xs overflow-hidden">
          {infoRows.map((row) => {
            const Icon = row.icon
            return (
              <div
                key={row.label}
                className="p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3 hover:bg-[var(--theme-subtle)]/50 transition-colors"
              >
                <div className="flex items-center gap-3 sm:w-1/3">
                  <Icon className="w-4 h-4 text-[var(--theme-text-secondary)] shrink-0" />
                  <span className="font-mono text-xs uppercase tracking-wider text-[var(--theme-text-secondary)]">
                    {row.label}
                  </span>
                </div>

                <div className="sm:w-2/3 flex items-center justify-between gap-4">
                  <span
                    className={`text-sm sm:text-base ${
                      row.highlight
                        ? 'font-bold text-[var(--theme-text-main)]'
                        : row.highlightRed
                        ? 'font-bold text-[#C62828]'
                        : row.isMuted
                        ? 'italic text-[var(--theme-text-secondary)]'
                        : 'text-[var(--theme-text-main)]'
                    }`}
                  >
                    {row.value}
                  </span>

                  {row.isCode && <JoiningCodeBadge variant="navbar" />}
                </div>
              </div>
            )
          })}
        </div>

        {/* Accreditation and Heritage Bar */}
        <div className="mt-6 p-4 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-xs text-[var(--theme-text-secondary)]">
          <div className="space-y-1">
            <span className="text-[var(--theme-text-main)] font-semibold block">INSTITUTIONAL ACCREDITATION</span>
            <p className="text-[11px] text-[var(--theme-text-secondary)]">{siteConfig.institution.affiliation}</p>
          </div>

          <div className="text-right">
            <span className="text-[#C62828] font-bold block">{siteConfig.institution.reputation}</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SymposiumInfo
