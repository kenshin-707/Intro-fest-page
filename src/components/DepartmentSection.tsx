import React from 'react'
import { siteConfig } from '../config/site'
import { Shield, Brain, Building2 } from 'lucide-react'

export const DepartmentSection: React.FC = () => {
  return (
    <section id="about" className="py-20 sm:py-28 border-b border-[var(--theme-border)] bg-[var(--theme-surface)] transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Tag */}
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#C62828] mb-4">
          <span className="w-2 h-2 rounded-full bg-[#C62828]" />
          <span>Organizing Department</span>
        </div>

        {/* Editorial Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          {/* Left Column (6 cols): Oversized Heading */}
          <div className="lg:col-span-6 space-y-4">
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-[var(--theme-text-main)] leading-[1.05]">
              WHERE MACHINE INTELLIGENCE CONVERGES WITH DIGITAL DEFENSE.
            </h2>
            <div className="w-16 h-1 bg-[#C62828]" />
            <p className="font-mono text-xs uppercase tracking-wider text-[var(--theme-text-secondary)] pt-2">
              DEPARTMENT OF AIML &amp; CYBERSECURITY // SSEC
            </p>
          </div>

          {/* Right Column (6 cols): Department Narrative & Verified Metadata */}
          <div className="lg:col-span-6 space-y-6">
            <p className="text-base sm:text-lg text-[var(--theme-text-main)] leading-relaxed font-normal">
              {siteConfig.department.presentationText}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              {/* Pillar 1: AI & ML */}
              <div className="p-4 bg-[var(--theme-subtle)] border border-[var(--theme-border)] rounded-xs space-y-2">
                <div className="flex items-center gap-2 text-[#C62828]">
                  <Brain className="w-4 h-4" />
                  <span className="font-mono font-bold text-xs uppercase tracking-wider text-[var(--theme-text-main)]">
                    Machine Intelligence
                  </span>
                </div>
                <p className="text-xs text-[var(--theme-text-secondary)] leading-relaxed">
                  Focusing on computational models, algorithmic logic, and reasoning under adversary constraints.
                </p>
              </div>

              {/* Pillar 2: Cybersecurity & Forensics */}
              <div className="p-4 bg-[var(--theme-subtle)] border border-[var(--theme-border)] rounded-xs space-y-2">
                <div className="flex items-center gap-2 text-[#C62828]">
                  <Shield className="w-4 h-4" />
                  <span className="font-mono font-bold text-xs uppercase tracking-wider text-[var(--theme-text-main)]">
                    Forensics & Defense
                  </span>
                </div>
                <p className="text-xs text-[var(--theme-text-secondary)] leading-relaxed">
                  Investigating cyber traces, log anomalies, digital artifacts, and tactical incident response.
                </p>
              </div>
            </div>

            {/* Institutional Metadata Card */}
            <div className="p-4 border border-[var(--theme-border)] rounded-xs bg-[var(--theme-subtle)]/70 font-mono text-xs space-y-2">
              <div className="flex items-center gap-2 text-[var(--theme-text-main)] font-semibold">
                <Building2 className="w-4 h-4 text-[#C62828]" />
                <span>{siteConfig.institution.name}</span>
              </div>
              <p className="text-[var(--theme-text-secondary)] text-[11px] leading-relaxed">
                {siteConfig.institution.campus} • {siteConfig.institution.address}
              </p>
              <div className="text-[10px] text-[var(--theme-text-secondary)] pt-1 border-t border-[var(--theme-border)]">
                {siteConfig.institution.affiliation}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default DepartmentSection
