import { Link } from 'react-router-dom'
import { ArrowUpRight } from 'lucide-react'
import { siteConfig, GOOGLE_FORM_URL, WHATSAPP_GROUP_URL, JOINING_CODE } from '../config/site'

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#171717] text-[#F7F7F5] border-t border-white/10 tech-grid-dark">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          {/* Brand & Department Info (2 cols) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#C62828]" />
              <span className="font-display font-extrabold text-2xl tracking-tight text-white">
                INTERO <span className="text-[#C62828]">FEST</span> ’26
              </span>
            </div>

            <p className="font-mono text-xs uppercase tracking-wider text-[#A0A09C]">
              One-Day National-Level Technical Symposium
            </p>

            <p className="text-sm text-white/70 max-w-sm leading-relaxed">
              Presented by the <strong className="text-white">AIML & Cyber Department</strong> of{' '}
              <strong className="text-white">Sree Sakthi Engineering College</strong> (Autonomous Technical Campus), Karamadai, Coimbatore.
            </p>

            <div className="pt-2">
              <div className="inline-block p-3 bg-white/5 border border-white/10 rounded-xs space-y-1">
                <span className="text-[10px] font-mono uppercase tracking-widest text-white/50 block">
                  SYMPOSIUM JOINING CODE
                </span>
                <div className="flex items-center gap-2">
                  <span className="font-mono font-bold text-sm text-[#F2C94C] tracking-widest">
                    {JOINING_CODE}
                  </span>
                  <span className="text-xs text-white/50">— Required during registration</span>
                </div>
              </div>
            </div>
          </div>

          {/* Quick Navigation */}
          <div className="space-y-3 font-mono text-xs uppercase">
            <div className="text-white font-bold tracking-wider text-xs border-b border-white/10 pb-2">
              Navigation
            </div>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link to="/" className="hover:text-white transition-colors">
                  Home Overview
                </Link>
              </li>
              <li>
                <a href="/#events" className="hover:text-white transition-colors">
                  Our 3 Events
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-white transition-colors">
                  About Department
                </a>
              </li>
              <li>
                <a href="/#symposium-info" className="hover:text-white transition-colors">
                  Symposium Info
                </a>
              </li>
              <li>
                <a href="/#contact" className="hover:text-white transition-colors">
                  Helpdesk & Venue
                </a>
              </li>
            </ul>
          </div>

          {/* Featured Events */}
          <div className="space-y-3 font-mono text-xs uppercase">
            <div className="text-white font-bold tracking-wider text-xs border-b border-white/10 pb-2">
              Featured Events
            </div>
            <ul className="space-y-2 text-white/70">
              <li>
                <Link
                  to="/events/beat-the-bot"
                  className="hover:text-[#F2C94C] transition-colors flex items-center justify-between"
                >
                  <span>01. Beat the Bot</span>
                  <span className="text-[10px] text-white/40">TECH</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/events/the-last-artifact"
                  className="hover:text-[#F2C94C] transition-colors flex items-center justify-between"
                >
                  <span>02. The Last Artifact</span>
                  <span className="text-[10px] text-white/40">TECH</span>
                </Link>
              </li>
              <li>
                <Link
                  to="/events/ipl-auction"
                  className="hover:text-[#F2C94C] transition-colors flex items-center justify-between"
                >
                  <span>03. IPL Auction</span>
                  <span className="text-[10px] text-white/40">NON-TECH</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Official Channels */}
          <div className="space-y-3 font-mono text-xs uppercase">
            <div className="text-white font-bold tracking-wider text-xs border-b border-white/10 pb-2">
              Official Links
            </div>
            <ul className="space-y-2.5 text-white/70">
              <li>
                <a
                  href={GOOGLE_FORM_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#C62828] hover:text-white transition-colors"
                >
                  <span>Google Registration</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={WHATSAPP_GROUP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-[#25D366] hover:text-white transition-colors"
                >
                  <span>WhatsApp Community</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li>
                <a
                  href={siteConfig.institution.website}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 hover:text-white transition-colors text-white/60"
                >
                  <span>SSEC Website</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </li>
              <li className="pt-1 text-[11px] text-white/40 normal-case">
                Helpline: {siteConfig.institution.phone}
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Editorial Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs text-white/50">
          <div className="flex items-center gap-2">
            <span>© 2026 INTERO FEST ’26</span>
            <span>•</span>
            <span>AIML & CYBER DEPARTMENT</span>
          </div>

          <div className="flex items-center gap-4 text-[11px]">
            <span>OCTOBER 31, 2026</span>
            <span>•</span>
            <span>KARAMADAI, COIMBATORE</span>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
