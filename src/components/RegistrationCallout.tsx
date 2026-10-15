import React from 'react'
import { siteConfig, JOINING_CODE } from '../config/site'
import { RegistrationButton } from './RegistrationButton'
import { WhatsAppButton } from './WhatsAppButton'
import { JoiningCodeBadge } from './JoiningCodeBadge'
import { Ticket } from 'lucide-react'

export const RegistrationCallout: React.FC = () => {
  return (
    <section className="py-20 sm:py-28 bg-[#171717] text-[#F7F7F5] tech-grid-dark relative overflow-hidden">
      {/* Subtle decorative glow */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#C62828]/20 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 border border-white/20 text-xs font-mono uppercase tracking-wider text-[#F2C94C] rounded-xs">
            <Ticket className="w-3.5 h-3.5" />
            <span>NATIONAL-LEVEL TECHNICAL SYMPOSIUM</span>
          </div>

          <h2 className="font-display font-extrabold text-3xl sm:text-5xl lg:text-6xl tracking-tight text-white leading-tight">
            READY TO COMPETE AT <span className="text-[#C62828]">INTERO FEST</span> ’26?
          </h2>

          <p className="text-base sm:text-lg text-white/70 max-w-xl mx-auto leading-relaxed">
            Presented by the AIML &amp; Cyber Department on <strong className="text-white">October 31, 2026</strong>. One shared registration gives you access to the symposium arena.
          </p>

          {/* Joining Code Badge Box in Dark Mode */}
          <div className="p-4 sm:p-5 bg-white/5 border border-white/15 rounded-xs max-w-lg mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left space-y-0.5">
              <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 block">
                MANDATORY JOINING CODE
              </span>
              <span className="font-mono font-bold text-lg text-[#F2C94C] tracking-widest">
                {JOINING_CODE}
              </span>
            </div>

            <JoiningCodeBadge variant="navbar" className="bg-[#171717] text-white border-white/30" />
          </div>

          {/* CTAs */}
          <div className="pt-2 flex flex-wrap items-center justify-center gap-4">
            <RegistrationButton
              variant="primary"
              size="lg"
              label="Register via Google Form"
              className="bg-[#C62828] hover:bg-[#8F1717] text-white border-[#C62828]"
            />

            <WhatsAppButton
              variant="outline"
              size="lg"
              label="Join WhatsApp Group"
              className="bg-white/10 text-white border-white/20 hover:bg-white hover:text-[#171717]"
            />
          </div>

          <p className="text-xs font-mono text-white/50 pt-2">
            Registration Fee: <span className="text-white font-bold">{siteConfig.registrationFee}</span> • Sree Sakthi Engineering College, Karamadai
          </p>
        </div>
      </div>
    </section>
  )
}

export default RegistrationCallout
