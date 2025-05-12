import { Inter, Merriweather } from 'next/font/google'
import './globals.css'
import Navbar from './components/ui/navbar'
import Footer from './components/ui/footer'

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
  title: 'EFTA Investments - Electrical Engineering & Renewable Energy Solutions',
  description: 'Leading provider of electrical engineering, renewable energy, and building automation solutions in Tanzania.',
  openGraph: {
    title: 'EFTA Investments',
    description: 'Powering Tanzania\'s sustainable future through innovative electrical and renewable energy solutions.',
    url: 'https://efta.co.tz',
    siteName: 'EFTA Investments',
    images: [
      {
        url: '/images/efta-og.jpg',
        width: 1200,
        height: 630,
        alt: 'EFTA Investments'
      }
    ],
    locale: 'en_US',
    type: 'website'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'EFTA Investments',
    description: 'Powering Tanzania\'s sustainable future through innovative electrical and renewable energy solutions.',
    images: ['/images/efta-og.jpg']
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