'use client'

import { useState, useEffect, useRef } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { motion, AnimatePresence } from 'framer-motion'

const navLinks = [
  {
    name: 'ABOUT US',
    href: '/about'
  },
  {
    name: 'SERVICES',
    href: '/services'
  },
  {
    name: 'PROJECTS',
    href: '/projects',
  },
  {
    name: 'SUSTAINABILITY',
    href: '/sustainability'
  },
  {
    name: 'BLOG',
    href: '/blog'
  },
  {
    name: 'CAREERS',
    href: '/careers'
  },
  {
    name: 'CONTACT',
    href: '/contact'
  }
]

export default function Navbar() {
  const pathname = usePathname()
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const lastScrollY = useRef(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY
      setScrolled(currentScrollY > 50)
      lastScrollY.current = currentScrollY
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleMenuClick = () => {
    setIsOpen(!isOpen)
    document.body.style.overflow = !isOpen ? 'hidden' : 'unset'
  }

  return (
    <>
      <header 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? 'bg-white/90 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-4">
          <nav className="flex items-center justify-between h-20">
            <Link href="/" className="relative z-50">
              <Image 
                src="/images/logo.png" 
                alt="EFTA Logo" 
                width={45} 
                height={45} 
                className="w-auto h-12 transition-transform duration-300 hover:scale-105"
                priority
              />
            </Link>

            <button
              onClick={handleMenuClick}
              className="relative z-50 w-10 h-10 flex items-center justify-center focus:outline-none"
              aria-label="Toggle Menu"
            >
              <div className="flex flex-col items-center justify-center w-6 h-6">
                <motion.span
                  animate={isOpen ? { rotate: 45, y: 6 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-efta-900 block transition-transform origin-center"
                />
                <motion.span
                  animate={isOpen ? { opacity: 0 } : { opacity: 1 }}
                  className="w-full h-0.5 bg-efta-900 block my-1"
                />
                <motion.span
                  animate={isOpen ? { rotate: -45, y: -6 } : { rotate: 0, y: 0 }}
                  className="w-full h-0.5 bg-efta-900 block transition-transform origin-center"
                />
              </div>
            </button>
          </nav>
        </div>
      </header>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: '100vh' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-white/95 backdrop-blur-md overflow-hidden"
          >
            <div className="container mx-auto px-4 pt-32 pb-20 h-full">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 h-full">
                <div className="flex flex-col justify-center">
                  <nav className="space-y-6">
                    {navLinks.map((link, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="overflow-hidden"
                      >
                        <Link
                          href={link.href}
                          onClick={handleMenuClick}
                          className={`text-3xl lg:text-4xl font-bold transition-colors duration-300 ${
                            pathname === link.href ? 'text-efta-500' : 'text-efta-900 hover:text-efta-500'
                          } block`}
                        >
                          {link.name}
                        </Link>
                      </motion.div>
                    ))}
                  </nav>
                </div>

                <div className="hidden lg:flex flex-col justify-center items-center">
                  <div className="relative w-full aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/images/13.jpg"
                      alt="EFTA Visual"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="mt-8 text-center">
                    <h3 className="text-2xl font-bold text-efta-900 mb-2">Get in Touch</h3>
                    <p className="text-efta-900/60">info@efta.co.tz</p>
                    <p className="text-efta-900/60">+255 (0) 222 926 384</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}