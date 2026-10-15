import React from 'react'
import { Phone, MapPin, MessageSquare, ArrowUpRight } from 'lucide-react'
import { siteConfig, WHATSAPP_GROUP_URL } from '../config/site'

export const ContactSection: React.FC = () => {
  return (
    <section id="contact" className="py-20 sm:py-28 border-b border-[var(--theme-border)] bg-[var(--theme-surface)] transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl space-y-2 pb-12 border-b border-[var(--theme-border)]">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#C62828]">
            <span className="w-2 h-2 rounded-full bg-[#C62828]" />
            <span>Support &amp; Campus Coordinates</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-[var(--theme-text-main)] leading-[1.05]">
            CONTACT &amp; VENUE
          </h2>
          <p className="text-sm sm:text-base text-[var(--theme-text-secondary)] leading-relaxed pt-1">
            Have questions regarding events, registration, or transportation? Reach out to the official symposium helpdesk.
          </p>
        </div>

        {/* Contact Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Official Helplines */}
          <div className="p-6 bg-[var(--theme-subtle)] border border-[var(--theme-border)] rounded-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xs bg-[var(--theme-surface)] border border-[var(--theme-border)] flex items-center justify-center text-[#C62828]">
                <Phone className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--theme-text-main)]">Campus Helplines</h3>
              <p className="text-xs text-[var(--theme-text-secondary)]">
                Official institutional telephone inquiry lines during academic working hours.
              </p>
              <div className="space-y-1.5 pt-2 font-mono text-xs">
                <a
                  href={`tel:${siteConfig.institution.phone}`}
                  className="block text-[var(--theme-text-main)] hover:text-[#C62828] font-bold"
                >
                  {siteConfig.institution.phone}
                </a>
                <a
                  href={`tel:${siteConfig.institution.altPhone}`}
                  className="block text-[var(--theme-text-secondary)] hover:text-[#C62828]"
                >
                  {siteConfig.institution.altPhone}
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-[var(--theme-border)] font-mono text-[10px] text-[var(--theme-text-secondary)] uppercase">
              INSTITUTIONAL DIRECTORY
            </div>
          </div>

          {/* Card 2: Digital Channels */}
          <div className="p-6 bg-[var(--theme-subtle)] border border-[var(--theme-border)] rounded-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xs bg-[var(--theme-surface)] border border-[var(--theme-border)] flex items-center justify-center text-[#25D366]">
                <MessageSquare className="w-5 h-5 text-[#25D366]" />
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--theme-text-main)]">WhatsApp &amp; Email</h3>
              <p className="text-xs text-[var(--theme-text-secondary)]">
                Connect with participants and organizers on the official community group.
              </p>
              <div className="space-y-2 pt-2 font-mono text-xs">
                <a
                  href={WHATSAPP_GROUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[var(--theme-text-main)] hover:text-[#25D366] font-bold"
                >
                  <span>Official WhatsApp Channel</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <a
                  href={`mailto:${siteConfig.institution.email}`}
                  className="block text-[var(--theme-text-secondary)] hover:text-[#C62828]"
                >
                  {siteConfig.institution.email}
                </a>
              </div>
            </div>

            <div className="pt-3 border-t border-[var(--theme-border)] font-mono text-[10px] text-[var(--theme-text-secondary)] uppercase">
              COMMUNITY DIRECTORY
            </div>
          </div>

          {/* Card 3: Physical Address */}
          <div className="p-6 bg-[var(--theme-subtle)] border border-[var(--theme-border)] rounded-xs space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-10 h-10 rounded-xs bg-[var(--theme-surface)] border border-[var(--theme-border)] flex items-center justify-center text-[#C62828]">
                <MapPin className="w-5 h-5" />
              </div>
              <h3 className="font-display font-bold text-lg text-[var(--theme-text-main)]">Campus Location</h3>
              <p className="text-xs text-[var(--theme-text-secondary)]">
                Situated on the Ooty Main Road with convenient bus connectivity from Coimbatore junction.
              </p>
              <div className="pt-2 font-mono text-xs text-[var(--theme-text-main)] leading-relaxed">
                <strong>{siteConfig.institution.name}</strong>
                <p className="text-[var(--theme-text-secondary)] text-[11px] pt-1">{siteConfig.institution.address}</p>
              </div>
            </div>

            <div className="pt-3 border-t border-[var(--theme-border)] font-mono text-[10px] text-[var(--theme-text-secondary)] uppercase flex justify-between items-center">
              <span>COIMBATORE - 641 104</span>
              <a
                href={siteConfig.institution.website}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#C62828] inline-flex items-center gap-1"
              >
                <span>sreesakthi.edu.in</span>
                <ArrowUpRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </div>

        {/* Verified Student Coordinators Bar */}
        <div className="mt-8 p-5 bg-[var(--theme-subtle)] border border-[var(--theme-border)] rounded-xs flex flex-col md:flex-row items-start md:items-center justify-between gap-4 font-mono text-xs">
          <div className="space-y-1">
            <div className="flex items-center gap-2 text-[var(--theme-text-main)] font-bold">
              <span className="w-2 h-2 rounded-full bg-[#C62828]" />
              <span>EVENT STUDENT COORDINATORS // THE LAST ARTIFACT</span>
            </div>
            <p className="text-[11px] text-[var(--theme-text-secondary)]">
              Direct student support for forensic challenge briefing, team formation, and reporting.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-2 px-3 py-1.5 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-xs">
              <span className="text-[var(--theme-text-secondary)] uppercase text-[10px]">Tharunkumar:</span>
              <a href="tel:9345517643" className="text-[#C62828] font-bold hover:underline">
                +91 93455 17643
              </a>
            </div>

            <div className="flex items-center gap-2 px-3 py-1.5 bg-[var(--theme-surface)] border border-[var(--theme-border)] rounded-xs">
              <span className="text-[var(--theme-text-secondary)] uppercase text-[10px]">Kumaresan:</span>
              <a href="tel:9159218627" className="text-[#C62828] font-bold hover:underline">
                +91 91592 18627
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection
