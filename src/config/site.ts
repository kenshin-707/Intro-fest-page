/**
 * Central Site Configuration for INTERO FEST ’26
 * All links, symposium metadata, contact coordinates, and joining codes are configured here.
 */

// Central external links (Authoritative values from event details)
export const GOOGLE_FORM_URL = 'https://forms.gle/1Kxyaemseu7Tz1iu7'
export const WHATSAPP_GROUP_URL = 'https://chat.whatsapp.com/LoxIvyuSC7B6h6R6oIs26I'

// Required joining code specified for all participants
export const JOINING_CODE = 'SSEC101'

export const siteConfig = {
  name: 'INTERO FEST ’26',
  shortName: 'INTERO ’26',
  tagline: 'One-Day National-Level Technical Symposium',
  creativeHeadline: 'THINK BEYOND. BUILD WHAT’S NEXT.',
  date: 'October 31, 2026',
  dateISO: '2026-10-31',
  registrationFee: '₹250 / Person',
  benefits: [
    'National-Level Certificate for all participants',
    'Attractive Prize Pool for top performers',
    'Hands-on technical & strategic exposure',
    'Autonomous Technical Campus infrastructure'
  ],
  institution: {
    name: 'Sree Sakthi Engineering College',
    campus: 'Autonomous Technical Campus — Karamadai',
    address: 'Ooty Main Road, Karamadai, Coimbatore - 641 104, Tamil Nadu, India',
    location: 'Karamadai, Coimbatore',
    affiliation: 'Autonomous Institution • Affiliated to Anna University & Approved by AICTE • Accredited by NAAC',
    reputation: "Coimbatore's No. 1 Industry Integrated Campus • 39 Years of Excellence",
    website: 'https://www.sreesakthi.edu.in',
    phone: '+91 92445 04444',
    altPhone: '+91 92445 02222',
    email: 'info@sreesakthi.edu.in'
  },
  department: {
    name: 'AIML & Cyber',
    fullName: 'Department of Artificial Intelligence & Machine Learning and Cybersecurity',
    communities: ['CYRA Community', 'EMTRON Association'],
    presentationText: 'The AIML & Cyber Department presents three featured events at INTERO FEST ’26, bringing together artificial intelligence problem-solving, digital forensic investigation, and tactical valuation under one editorial arena.',
    role: 'Organizing Department'
  },
  navigation: [
    { label: 'Home', href: '/' },
    { label: 'Our Events', href: '/#events' },
    { label: 'About', href: '/#about' },
    { label: 'Symposium Info', href: '/#symposium-info' },
    { label: 'Helpdesk', href: '/#contact' }
  ]
}

/**
 * Validates whether a provided URL is a valid external HTTPS URL
 */
export function isValidUrl(url: string | null | undefined): boolean {
  if (!url || typeof url !== 'string') return false
  const trimmed = url.trim()
  if (trimmed === '' || trimmed.includes('REPLACE_WITH') || trimmed.includes('EXAMPLE')) {
    return false
  }
  try {
    const parsed = new URL(trimmed)
    return parsed.protocol === 'https:' || parsed.protocol === 'http:'
  } catch {
    return false
  }
}

export function isFormConfigured(): boolean {
  return isValidUrl(GOOGLE_FORM_URL)
}

export function isWhatsAppConfigured(): boolean {
  return isValidUrl(WHATSAPP_GROUP_URL)
}
