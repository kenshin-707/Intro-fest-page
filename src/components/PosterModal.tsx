import React, { useEffect } from 'react'
import { X, ExternalLink, Download } from 'lucide-react'

interface PosterModalProps {
  isOpen: boolean
  onClose: () => void
  imageSrc: string
  title: string
  caption?: string
}

export const PosterModal: React.FC<PosterModalProps> = ({
  isOpen,
  onClose,
  imageSrc,
  title,
  caption
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.body.style.overflow = 'hidden'
      window.addEventListener('keydown', handleKeyDown)
    }
    return () => {
      document.body.style.overflow = 'unset'
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [isOpen, onClose])

  if (!isOpen) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-labelledby="poster-modal-title"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-xs animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="relative max-w-4xl max-h-[92vh] w-full bg-[#171717] border border-white/20 rounded-xs overflow-hidden flex flex-col shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-center justify-between p-4 border-b border-white/10 bg-[#171717]">
          <div>
            <h3 id="poster-modal-title" className="font-display font-bold text-white text-base">
              {title}
            </h3>
            {caption && <p className="text-xs font-mono text-[#A0A09C]">{caption}</p>}
          </div>

          <div className="flex items-center gap-2">
            <a
              href={imageSrc}
              target="_blank"
              rel="noopener noreferrer"
              className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded transition-colors"
              title="Open full resolution in new tab"
            >
              <ExternalLink className="w-4 h-4" />
            </a>
            <button
              onClick={onClose}
              type="button"
              className="p-1.5 text-white/70 hover:text-white hover:bg-white/10 rounded transition-colors cursor-pointer"
              aria-label="Close dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Modal Image Body */}
        <div className="flex-1 overflow-auto p-4 flex items-center justify-center bg-black/40">
          <img
            src={imageSrc}
            alt={title}
            className="max-h-[75vh] w-auto object-contain rounded-xs border border-white/10 shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Modal Footer */}
        <div className="p-3 bg-[#111113] border-t border-white/10 flex items-center justify-between font-mono text-xs text-white/60">
          <span>Authoritative Event Document</span>
          <a
            href={imageSrc}
            download
            className="inline-flex items-center gap-1.5 text-[#F2C94C] hover:underline"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Save Poster</span>
          </a>
        </div>
      </div>
    </div>
  )
}

export default PosterModal
