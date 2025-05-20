import { Inter, Merriweather } from 'next/font/google'
import './globals.css'
import Navbar from './components/ui/navbar.js'
import Footer from './components/ui/footer.js'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const merriweather = Merriweather({ 
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-merriweather',
  display: 'swap',
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
  }
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${inter.variable} ${merriweather.variable}`}>
      <body className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow w-full">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  )
}