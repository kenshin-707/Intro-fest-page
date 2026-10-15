import React, { useState } from 'react'
import { Copy, Check, KeyRound } from 'lucide-react'
import { JOINING_CODE } from '../config/site'

interface JoiningCodeBadgeProps {
  variant?: 'navbar' | 'hero' | 'callout' | 'inline'
  className?: string
}

export const JoiningCodeBadge: React.FC<JoiningCodeBadgeProps> = ({
  variant = 'navbar',
  className = ''
}) => {
  const [copied, setCopied] = useState(false)

  const handleCopy = async (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    try {
      await navigator.clipboard.writeText(JOINING_CODE)
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    } catch {
      setCopied(true)
      setTimeout(() => setCopied(false), 2200)
    }
  }

  if (variant === 'hero') {
    return (
      <div
        className={`inline-flex flex-col sm:flex-row items-start sm:items-center gap-3 p-3.5 sm:px-4 sm:py-3 bg-[var(--theme-surface)] border border-[var(--theme-border)] shadow-xs rounded-sm transition-all hover:border-[var(--theme-text-main)] ${className}`}
      >
        <div className="flex items-center gap-2">
          <span className="flex h-2 w-2 rounded-full bg-[#C62828] animate-pulse" />
          <span className="font-mono text-xs uppercase tracking-wider text-[var(--theme-text-secondary)]">
            Official Joining Code
          </span>
        </div>
        <div className="flex items-center gap-2 w-full sm:w-auto justify-between sm:justify-start">
          <div className="px-2.5 py-1 bg-[var(--theme-subtle)] border border-[var(--theme-border)] font-mono font-bold text-sm text-[var(--theme-text-main)] tracking-widest select-all">
            {JOINING_CODE}
          </div>
          <button
            onClick={handleCopy}
            type="button"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium transition-colors border rounded-sm cursor-pointer border-[#171717] dark:border-white/20 bg-[#171717] dark:bg-white dark:text-[#171717] text-[#F7F7F5] hover:bg-[#C62828] dark:hover:bg-[#C62828] dark:hover:text-white hover:border-[#C62828] active:scale-95"
            title="Click to copy joining code"
            aria-label="Copy joining code SSEC101"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-[#F2C94C] dark:text-[#C62828]" />
                <span className="text-[#F2C94C] dark:text-[#C62828]">Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy Code</span>
              </>
            )}
          </button>
        </div>
      </div>
    )
  }

  if (variant === 'callout') {
    return (
      <div
        className={`p-4 bg-[var(--theme-surface)] border-l-4 border-l-[#C62828] border border-[var(--theme-border)] rounded-xs flex flex-col sm:flex-row sm:items-center justify-between gap-3 ${className}`}
      >
        <div className="space-y-1">
          <div className="flex items-center gap-2">
            <KeyRound className="w-4 h-4 text-[#C62828]" />
            <span className="font-mono text-xs uppercase tracking-wider font-semibold text-[var(--theme-text-main)]">
              Joining Code Required: <strong className="text-[#C62828]">{JOINING_CODE}</strong>
            </span>
          </div>
          <p className="text-xs text-[var(--theme-text-secondary)]">
            Please enter this code while submitting your registration or joining the official symposium channel.
          </p>
        </div>
        <button
          onClick={handleCopy}
          type="button"
          className="self-start sm:self-center inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-medium transition-colors border border-[var(--theme-border)] dark:border-white/20 text-[var(--theme-text-main)] hover:bg-[#171717] hover:text-[#F7F7F5] dark:hover:bg-white dark:hover:text-[#171717] rounded-xs cursor-pointer"
        >
          {copied ? (
            <>
              <Check className="w-3.5 h-3.5 text-emerald-500" />
              <span>Copied!</span>
            </>
          ) : (
            <>
              <Copy className="w-3.5 h-3.5" />
              <span>Copy SSEC101</span>
            </>
          )}
        </button>
      </div>
    )
  }

  // Navbar compact variant
  return (
    <button
      onClick={handleCopy}
      type="button"
      title="Click to copy joining code"
      aria-label="Copy joining code SSEC101"
      className={`group relative inline-flex items-center gap-1.5 px-2.5 py-1 text-xs font-mono border border-[var(--theme-border)] hover:border-[var(--theme-text-main)] bg-[var(--theme-surface)] rounded-xs transition-colors cursor-pointer ${className}`}
    >
      <span className="text-[var(--theme-text-secondary)] text-[10px] uppercase font-semibold hidden md:inline">Code:</span>
      <span className="font-bold text-[var(--theme-text-main)] tracking-wider">{JOINING_CODE}</span>
      {copied ? (
        <Check className="w-3 h-3 text-[#C62828]" />
      ) : (
        <Copy className="w-3 h-3 text-[var(--theme-text-secondary)] group-hover:text-[var(--theme-text-main)]" />
      )}
      {copied && (
        <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-0.5 bg-[#171717] text-[#F7F7F5] dark:bg-white dark:text-[#171717] text-[10px] font-mono rounded shadow-xs whitespace-nowrap z-50">
          Copied to clipboard!
        </span>
      )}
    </button>
  )
}
