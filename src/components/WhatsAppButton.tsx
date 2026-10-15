import React from 'react'
import { MessageSquare, ArrowUpRight } from 'lucide-react'
import { WHATSAPP_GROUP_URL, isWhatsAppConfigured } from '../config/site'

interface WhatsAppButtonProps {
  variant?: 'outline' | 'solid' | 'compact' | 'dark'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  showArrow?: boolean
  label?: string
}

export const WhatsAppButton: React.FC<WhatsAppButtonProps> = ({
  variant = 'outline',
  size = 'md',
  className = '',
  showArrow = true,
  label = 'Join WhatsApp'
}) => {
  const configured = isWhatsAppConfigured()

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-4.5 py-2.5 text-sm',
    lg: 'px-6 py-3.5 text-base font-semibold'
  }

  const variantStyles = {
    outline:
      'bg-[var(--theme-surface)] text-[var(--theme-text-main)] hover:bg-[#171717] dark:hover:bg-white hover:text-[#F7F7F5] dark:hover:text-[#171717] border border-[var(--theme-border)] hover:border-[var(--theme-text-main)] shadow-2xs',
    solid:
      'bg-[#171717] dark:bg-white text-[#F7F7F5] dark:text-[#171717] hover:bg-[#25D366] dark:hover:bg-[#25D366] hover:text-[#171717] border border-[#171717] dark:border-white',
    compact:
      'bg-[var(--theme-surface)] text-[var(--theme-text-main)] hover:bg-[#171717] dark:hover:bg-white hover:text-[#F7F7F5] dark:hover:text-[#171717] border border-[var(--theme-border)] px-3 py-1.5 text-xs',
    dark:
      'bg-[#171717] text-[#F7F7F5] border border-white/20 hover:border-[#F2C94C] hover:text-[#F2C94C]'
  }

  if (!configured) {
    return (
      <button
        type="button"
        disabled
        className={`inline-flex items-center justify-center gap-2 font-mono uppercase tracking-wider rounded-xs cursor-not-allowed opacity-60 border border-[var(--theme-border)] bg-[var(--theme-subtle)] text-[var(--theme-text-secondary)] ${sizeStyles[size]} ${className}`}
        title="WhatsApp group link will be announced soon"
      >
        <MessageSquare className="w-3.5 h-3.5" />
        <span>WhatsApp Link Soon</span>
      </button>
    )
  }

  return (
    <a
      href={WHATSAPP_GROUP_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 font-mono uppercase tracking-wider rounded-xs transition-all duration-200 active:scale-[0.98] cursor-pointer ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      title="Join Official INTERO FEST ’26 WhatsApp Discussion Channel (New Tab)"
      aria-label="Join Official WhatsApp Group"
    >
      {/* Custom styled WhatsApp SVG icon */}
      <svg
        className="w-4 h-4 fill-current shrink-0 text-[#25D366] group-hover:text-inherit transition-colors"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <path d="M17.472 14.382c-.301-.15-1.782-.879-2.057-.98-.276-.1-.477-.15-.678.15-.201.3-.778.98-.954 1.18-.175.201-.351.226-.652.075-.301-.15-1.272-.469-2.423-1.496-.895-.799-1.5-1.786-1.676-2.087-.175-.301-.019-.464.132-.614.136-.135.301-.351.452-.527.15-.176.201-.301.301-.502.1-.201.05-.376-.025-.527-.075-.15-.678-1.633-.929-2.238-.244-.588-.493-.509-.678-.518-.175-.009-.376-.009-.577-.009-.201 0-.527.075-.803.376s-1.054 1.03-1.054 2.513 1.079 2.915 1.23 3.116c.15.201 2.122 3.24 5.141 4.544.718.31 1.279.495 1.716.634.721.229 1.378.197 1.897.119.579-.087 1.782-.728 2.033-1.431.251-.703.251-1.305.176-1.43-.075-.126-.276-.201-.577-.351z" />
        <path d="M12 2a9.93 9.93 0 0 0-8.58 14.92L2 22l5.24-1.37A9.97 9.97 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm0 18.2c-1.64 0-3.19-.44-4.54-1.22l-.33-.19-3.37.88.9-3.28-.21-.34A8.17 8.17 0 0 1 3.8 12c0-4.52 3.68-8.2 8.2-8.2s8.2 3.68 8.2 8.2-3.68 8.2-8.2 8.2z" />
      </svg>
      <span>{label}</span>
      {showArrow && (
        <ArrowUpRight className="w-3.5 h-3.5 opacity-70 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </a>
  )
}

export default WhatsAppButton
