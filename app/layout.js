import { Inter, Merriweather } from 'next/font/google'
import './globals.css'
import ModernNavbar from './components/ui/ModernNavbar.jsx'
import ModernFooter from './components/ui/ModernFooter.jsx'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
  preload: true,
  fallback: ['system-ui', 'arial'],
})

const merriweather = Merriweather({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
  preload: true,
  fallback: ['georgia', 'serif'],
})

export const metadata = {
  title: 'EFTA Investments - Powering Progress, Sustaining the Future',
  description: 'Leading provider of electrical engineering, renewable energy solutions, and sustainable power systems in Tanzania. CRB-certified electrical contractors.',
  openGraph: {
    title: 'EFTA Investments - Clean Energy Solutions',
    description: 'Your trusted partner for electrical contracting, renewable energy solutions, and sustainable power systems in Tanzania.',
    url: 'https://efta.co.tz',
    siteName: 'EFTA Investments',
    images: [
      {
        url: '/images/hero.webp',
        width: 1200,
        height: 630,
        alt: 'EFTA Investments - Sustainable Energy Solutions'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EFTA Investments - Clean Energy Solutions',
    description: 'Your trusted partner for electrical contracting, renewable energy solutions, and sustainable power systems in Tanzania.',
    images: ['/images/hero.webp']
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 5,
  },
  other: {
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'format-detection': 'telephone=no',
  },
  themeColor: '#ffffff',
}

export const runtime = 'edge' // Use edge runtime for better performance

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable} scroll-smooth`}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#ffffff" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=no" />
        {/* PWA meta tags for better mobile experience */}
        <meta name="application-name" content="EFTA Investments" />
        <meta name="apple-mobile-web-app-title" content="EFTA Investments" />
        <link rel="manifest" href="/manifest.json" />
      </head>
      <body className="flex flex-col min-h-screen antialiased dark:bg-gray-900 dark:text-white">
        <ModernNavbar />
        <main className="flex-grow w-full">
          {children}
        </main>
        <ModernFooter />
      </body>
    </html>
  )
}