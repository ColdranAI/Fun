import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { SidebarClient } from './components/sidebar'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'Fun by Coldran',
    template: '%s | Fun by Coldran',
  },
  description: 'Fun by Coldran is an initiative to create fun for the customer & startup.',
  openGraph: {
    title: 'Fun by Coldran',
    description: 'Fun by Coldran is an initiative to create fun for the customer & startup.',
    url: baseUrl,
    
    siteName: 'Fun by Coldran',
    locale: 'en_US',
    type: 'website',
  },
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
    apple: "/favicon.png",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased">
        <SidebarClient />
        <main className="lg:ml-64 min-h-screen">
          <div className="max-w-4xl mx-auto px-4 py-8">
            {children}
            <Footer />
          </div>
        </main>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
