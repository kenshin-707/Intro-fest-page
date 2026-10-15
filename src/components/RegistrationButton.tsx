import React from 'react'
import { ArrowUpRight } from 'lucide-react'
import { GOOGLE_FORM_URL, isFormConfigured } from '../config/site'

interface RegistrationButtonProps {
  variant?: 'primary' | 'secondary' | 'dark' | 'outline' | 'compact'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  showArrow?: boolean
  label?: string
}

export const RegistrationButton: React.FC<RegistrationButtonProps> = ({
  variant = 'primary',
  size = 'md',
  className = '',
  showArrow = true,
  label = 'Register Now'
}) => {
  const configured = isFormConfigured()

  const sizeStyles = {
    sm: 'px-3 py-1.5 text-xs',
    md: 'px-5 py-2.5 text-sm',
    lg: 'px-7 py-3.5 text-base font-semibold'
  }

  const variantStyles = {
    primary:
      'bg-[#C62828] text-white hover:bg-[#8F1717] border border-[#C62828] hover:border-[#8F1717] shadow-xs',
    secondary:
      'bg-[#171717] dark:bg-white text-[#F7F7F5] dark:text-[#171717] hover:bg-[#C62828] dark:hover:bg-[#C62828] dark:hover:text-white border border-[#171717] dark:border-white',
    dark:
      'bg-[#F7F7F5] text-[#171717] hover:bg-[#F2C94C] hover:text-[#171717] border border-[#F7F7F5]',
    outline:
      'bg-transparent text-[var(--theme-text-main)] hover:bg-[#171717] dark:hover:bg-white hover:text-[#F7F7F5] dark:hover:text-[#171717] border border-[var(--theme-border)] hover:border-[var(--theme-text-main)]',
    compact:
      'bg-[#C62828] text-white hover:bg-[#8F1717] border border-[#C62828] px-3.5 py-1.5 text-xs'
  }

  if (!configured) {
    return (
      <button
        type="button"
        disabled
        className={`inline-flex items-center justify-center gap-2 font-mono uppercase tracking-wider rounded-xs cursor-not-allowed opacity-60 border border-[var(--theme-border)] bg-[var(--theme-subtle)] text-[var(--theme-text-secondary)] ${sizeStyles[size]} ${className}`}
        title="Registration link will be announced soon"
      >
        <span>Registration Coming Soon</span>
      </button>
    )
  }

  return (
    <a
      href={GOOGLE_FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center gap-2 font-mono uppercase tracking-wider rounded-xs transition-all duration-200 active:scale-[0.98] cursor-pointer ${sizeStyles[size]} ${variantStyles[variant]} ${className}`}
      title="Open Official Google Registration Form (New Tab)"
    >
      <span>{label}</span>
      {showArrow && (
        <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      )}
    </a>
  )
}

export default RegistrationButton
