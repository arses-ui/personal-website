import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Arses Prasai - ML Researcher & Engineer',
  description: 'Thoughtful research & machine learning craftsmanship. Building intelligent systems with care and precision.',
  keywords: ['Machine Learning', 'AI Research', 'Computer Vision', 'Deep Learning', 'Dartmouth'],
  authors: [{ name: 'Arses Prasai' }],
  openGraph: {
    title: 'Arses Prasai - ML Researcher & Engineer',
    description: 'Thoughtful research & machine learning craftsmanship.',
    type: 'website',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  )
}
