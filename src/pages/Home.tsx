import React, { useState } from 'react'
import { Hero } from '../components/Hero'
import { DepartmentSection } from '../components/DepartmentSection'
import { FeaturedEvents } from '../components/FeaturedEvents'
import { WhyParticipate } from '../components/WhyParticipate'
import { SymposiumInfo } from '../components/SymposiumInfo'
import { ContactSection } from '../components/ContactSection'
import { RegistrationCallout } from '../components/RegistrationCallout'
import { PosterModal } from '../components/PosterModal'

export const Home: React.FC = () => {
  const [modalOpen, setModalOpen] = useState(false)
  const [modalImage, setModalImage] = useState('/images/intero-fest-poster.jpg')
  const [modalTitle, setModalTitle] = useState('Official INTERO FEST ’26 Poster')

  const handleOpenPoster = (
    src = '/images/intero-fest-poster.jpg',
    title = 'Official INTERO FEST ’26 Poster'
  ) => {
    setModalImage(src)
    setModalTitle(title)
    setModalOpen(true)
  }

  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero */}
      <Hero onOpenPoster={() => handleOpenPoster('/images/intero-fest-poster.jpg', 'Official INTERO FEST ’26 Poster')} />

      {/* 2. Department Introduction */}
      <DepartmentSection />

      {/* 3. Featured Events (Exactly Three) */}
      <FeaturedEvents onOpenPoster={handleOpenPoster} />

      {/* 4. Why Participate? */}
      <WhyParticipate />

      {/* 5. Symposium Information */}
      <SymposiumInfo />

      {/* 6. Contact and Help */}
      <ContactSection />

      {/* 7. Registration Final Callout */}
      <RegistrationCallout />

      {/* Modal for full poster viewer */}
      <PosterModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        imageSrc={modalImage}
        title={modalTitle}
        caption="Authoritative branding document for INTERO FEST ’26 — Sree Sakthi Engineering College"
      />
    </div>
  )
}

export default Home
