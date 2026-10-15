import React, { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { JoiningCodeBadge } from './JoiningCodeBadge'
import { RegistrationButton } from './RegistrationButton'
import { WhatsAppButton } from './WhatsAppButton'
import { ThemeToggle } from './ThemeToggle'

export const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Close mobile drawer on route change
  useEffect(() => {
    setIsOpen(false)
  }, [location])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-200 border-b ${
        isScrolled
          ? 'bg-[var(--theme-bg)]/95 backdrop-blur-md border-[var(--theme-border)] shadow-xs'
          : 'bg-[var(--theme-bg)] border-[var(--theme-border)]'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 sm:h-20 flex items-center justify-between gap-4">
        {/* Brand / Logo */}
        <Link
          to="/"
          className="group flex flex-col justify-center select-none"
          aria-label="INTERO FEST 26 Home"
        >
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C62828] group-hover:bg-[#F2C94C] transition-colors" />
            <span className="font-display font-extrabold text-lg sm:text-xl tracking-tight text-[var(--theme-text-main)]">
              INTERO <span className="text-[#C62828]">FEST</span> ’26
            </span>
          </div>
          <span className="font-mono text-[9px] uppercase tracking-widest text-[var(--theme-text-secondary)] pl-4.5">
            AIML & CYBER // SSEC TECHNICAL CAMPUS
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <nav className="hidden lg:flex items-center gap-6 font-mono text-xs uppercase tracking-wider text-[var(--theme-text-secondary)]">
          <Link
            to="/"
            className="hover:text-[var(--theme-text-main)] transition-colors py-1 hover:border-b-2 hover:border-[#C62828]"
          >
            Home
          </Link>
          <a
            href="/#events"
            className="hover:text-[var(--theme-text-main)] transition-colors py-1 hover:border-b-2 hover:border-[#C62828]"
          >
            Our Events
          </a>
          <a
            href="/#about"
            className="hover:text-[var(--theme-text-main)] transition-colors py-1 hover:border-b-2 hover:border-[#C62828]"
          >
            About
          </a>
          <a
            href="/#symposium-info"
            className="hover:text-[var(--theme-text-main)] transition-colors py-1 hover:border-b-2 hover:border-[#C62828]"
          >
            Symposium Info
          </a>
          <a
            href="/#contact"
            className="hover:text-[var(--theme-text-main)] transition-colors py-1 hover:border-b-2 hover:border-[#C62828]"
          >
            Helpdesk
          </a>
        </nav>

        {/* Right Actions: Theme Toggle + Code Badge + WhatsApp + Register CTA */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Dark / Light Theme Toggle */}
          <ThemeToggle />

          {/* Prominent Joining Code Pill with copy */}
          <JoiningCodeBadge variant="navbar" />

          {/* WhatsApp Action */}
          <WhatsAppButton variant="outline" size="sm" showArrow={false} />

          {/* Registration Button */}
          <RegistrationButton variant="primary" size="sm" showArrow={true} label="Register" />
        </div>

        {/* Mobile menu and controls */}
        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />
          <JoiningCodeBadge variant="navbar" className="text-[11px]" />
          <button
            onClick={() => setIsOpen(!isOpen)}
            type="button"
            className="p-2 text-[var(--theme-text-main)] border border-[var(--theme-border)] hover:border-[var(--theme-text-main)] rounded-xs cursor-pointer bg-[var(--theme-surface)]"
            aria-label={isOpen ? 'Close Menu' : 'Open Menu'}
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {isOpen && (
        <div className="sm:hidden border-t border-[var(--theme-border)] bg-[var(--theme-bg)] px-4 pt-4 pb-6 space-y-4 shadow-lg animate-in fade-in slide-in-from-top-2 duration-150">
          <div className="font-mono text-xs text-[var(--theme-text-secondary)] uppercase pb-2 border-b border-[var(--theme-border)]">
            Navigation Menu
          </div>
          <nav className="flex flex-col space-y-3 font-mono text-sm uppercase">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="py-1 text-[var(--theme-text-main)] hover:text-[#C62828]"
            >
              Home
            </Link>
            <a
              href="/#events"
              onClick={() => setIsOpen(false)}
              className="py-1 text-[var(--theme-text-main)] hover:text-[#C62828]"
            >
              Our Events (3)
            </a>
            <a
              href="/#about"
              onClick={() => setIsOpen(false)}
              className="py-1 text-[var(--theme-text-main)] hover:text-[#C62828]"
            >
              About Department
            </a>
            <a
              href="/#symposium-info"
              onClick={() => setIsOpen(false)}
              className="py-1 text-[var(--theme-text-main)] hover:text-[#C62828]"
            >
              Symposium Info
            </a>
            <a
              href="/#contact"
              onClick={() => setIsOpen(false)}
              className="py-1 text-[var(--theme-text-main)] hover:text-[#C62828]"
            >
              Contact & Location
            </a>
          </nav>

          <div className="pt-3 border-t border-[var(--theme-border)] space-y-3">
            <div className="text-xs text-[var(--theme-text-secondary)] font-mono">
              Joining Code Required: <strong className="text-[#C62828]">SSEC101</strong>
            </div>
            <div className="grid grid-cols-2 gap-2">
              <WhatsAppButton variant="outline" size="sm" className="w-full justify-center" />
              <RegistrationButton variant="primary" size="sm" className="w-full justify-center" />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}

export default Navbar
