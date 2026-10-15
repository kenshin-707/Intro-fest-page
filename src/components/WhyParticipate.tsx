import React from 'react'
import { Trophy, Award, Users2, Lightbulb } from 'lucide-react'

export const WhyParticipate: React.FC = () => {
  const points = [
    {
      number: '01',
      title: 'Challenge Your Thinking',
      description:
        'Engage with real problems across artificial intelligence, incident forensics, and tactical decision-making designed to stretch analytical boundaries.',
      icon: Lightbulb
    },
    {
      number: '02',
      title: 'National-Level Competition',
      description:
        'Benchmark your technical agility and strategic intuition alongside passionate students from colleges and technical universities across India.',
      icon: Users2
    },
    {
      number: '03',
      title: 'Verified Participation Certificate',
      description:
        'Every registered attendee receives an official symposium certificate validating their participation in an Autonomous Technical Campus symposium.',
      icon: Award
    },
    {
      number: '04',
      title: 'Attractive Prize Pool',
      description:
        'Top performers across technical and non-technical arenas will be recognized with official symposium trophies, cash awards, and campus honors.',
      icon: Trophy
    }
  ]

  return (
    <section className="py-20 sm:py-28 border-b border-[var(--theme-border)] bg-[var(--theme-surface)] transition-colors duration-250">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Heading */}
        <div className="max-w-2xl space-y-2 pb-12 border-b border-[var(--theme-border)]">
          <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-wider text-[#C62828]">
            <span className="w-2 h-2 rounded-full bg-[#C62828]" />
            <span>Symposium Experience</span>
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-5xl tracking-tight text-[var(--theme-text-main)] leading-[1.05]">
            WHY PARTICIPATE AT INTERO FEST ’26?
          </h2>
          <p className="text-sm sm:text-base text-[var(--theme-text-secondary)] leading-relaxed pt-1">
            General participation value across technical depth, inter-collegiate peer exchange, and competitive rigor.
          </p>
        </div>

        {/* 4 Cards Grid */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {points.map((pt) => {
            const Icon = pt.icon
            return (
              <div
                key={pt.number}
                className="group p-6 bg-[var(--theme-subtle)] border border-[var(--theme-border)] hover:border-[var(--theme-text-main)] rounded-xs transition-all duration-200 flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#C62828] bg-[var(--theme-surface)] px-2.5 py-1 border border-[var(--theme-border)] rounded-xs">
                      {pt.number}
                    </span>
                    <Icon className="w-5 h-5 text-[var(--theme-text-secondary)] group-hover:text-[var(--theme-text-main)] transition-colors" />
                  </div>

                  <h3 className="font-display font-bold text-xl text-[var(--theme-text-main)] leading-snug">
                    {pt.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[var(--theme-text-secondary)] leading-relaxed">
                    {pt.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-[var(--theme-border)] font-mono text-[10px] text-[var(--theme-text-secondary)] uppercase tracking-wider flex items-center justify-between">
                  <span>INTERO ’26 VALUE</span>
                  <span className="text-[#C62828] font-bold">OCT 31</span>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}

export default WhyParticipate
