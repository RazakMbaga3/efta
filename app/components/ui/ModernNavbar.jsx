'use client'

import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { HiSearch, HiOutlineSun, HiMoon, HiMenuAlt3, HiX, HiChevronDown } from 'react-icons/hi'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'

const mainNavLinks = [
  {
    name: 'About',
    href: '/about',
    submenu: [
      { name: 'Our Story', href: '/about#story' },
      { name: 'Leadership', href: '/about#leadership' },
      { name: 'Certifications', href: '/about#certifications' }
    ]
  },
  {
    name: 'Services',
    href: '/services',
    submenu: [
      { name: 'Electrical Contracting', href: '/services#electrical-contracting' },
      { name: 'Renewable Energy', href: '/services#renewable-energy' },
      { name: 'Equipment Supply', href: '/services/equipment-supply' },
      { name: 'Energy Audits', href: '/services#energy-audits' },
      { name: 'Maintenance', href: '/services#maintenance' }
    ]
  },
  {
    name: 'Projects',
    href: '/projects',
    submenu: [
      { name: 'Commercial', href: '/projects#commercial' },
      { name: 'Industrial', href: '/projects#industrial' },
      { name: 'Residential', href: '/projects#residential' }
    ]
  },
  {
    name: 'Sustainability',
    href: '/sustainability'
  },
  {
    name: 'Resources',
    href: '/blog',
    submenu: [
      { name: 'Blog', href: '/blog' },
      { name: 'News', href: '/news' },
      { name: 'Downloads', href: '/resources#downloads' }
    ]
  }
]

export default function ModernNavbar() {
  const pathname = usePathname()
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState(null)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchActive, setSearchActive] = useState(false)
  const [searchQuery, setSearchQuery] = useState('')

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Handle dark mode toggle and persistence
  useEffect(() => {
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      setDarkMode(true)
      document.documentElement.classList.add('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    setDarkMode(!darkMode)
    if (!darkMode) {
      document.documentElement.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  // Handle submenu interactions
  const toggleSubmenu = (index) => {
    if (activeSubmenu === index) {
      setActiveSubmenu(null)
    } else {
      setActiveSubmenu(index)
    }
  }

  // Handle search functionality
  const handleSearch = (e) => {
    e.preventDefault()
    // Implement search functionality here
    console.log('Searching for:', searchQuery)
    // Reset search
    setSearchActive(false)
    setSearchQuery('')
  }

  return (
    <header className={`fixed w-full top-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white dark:bg-gray-900 shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="relative z-10">
            <div className="flex items-center">
              <Image 
                src="/images/logo.png" 
                alt="EFTA Investments" 
                width={160} 
                height={40} 
                className="h-12 w-auto"
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {mainNavLinks.map((link, index) => (
              <div key={link.name} className="relative group">
                <button 
                  className={`px-4 py-2 rounded-md flex items-center text-sm font-medium transition-colors ${
                    pathname === link.href 
                      ? 'text-efta-500 dark:text-efta-400' 
                      : 'text-gray-700 hover:text-efta-600 dark:text-gray-300 dark:hover:text-efta-400'
                  }`}
                  onClick={() => link.submenu && toggleSubmenu(index)}
                  onMouseEnter={() => link.submenu && setActiveSubmenu(index)}
                  onMouseLeave={() => link.submenu && setActiveSubmenu(null)}
                >
                  {link.name}
                  {link.submenu && (
                    <HiChevronDown className={`ml-1 transform transition-transform ${activeSubmenu === index ? 'rotate-180' : ''}`} />
                  )}
                </button>
                
                {/* Dropdown for desktop */}
                {link.submenu && (
                  <div 
                    className={`absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white dark:bg-gray-800 ring-1 ring-black ring-opacity-5 transition-all duration-200 ease-in-out origin-top-left
                    ${activeSubmenu === index ? 'opacity-100 scale-100' : 'opacity-0 scale-95 pointer-events-none'}`}
                    onMouseEnter={() => setActiveSubmenu(index)}
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    <div className="py-1">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-efta-500 dark:text-gray-300 dark:hover:bg-gray-700 dark:hover:text-efta-400"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Right side elements */}
          <div className="hidden lg:flex items-center space-x-4">
            {/* Search button */}
            <button 
              onClick={() => setSearchActive(!searchActive)}
              className="p-2 rounded-full text-gray-600 hover:text-efta-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
            >
              <HiSearch className="h-5 w-5" />
            </button>

            {/* Dark mode toggle */}
            <button 
              onClick={toggleDarkMode}
              className="p-2 rounded-full text-gray-600 hover:text-efta-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
            >
              {darkMode ? (
                <HiOutlineSun className="h-5 w-5" />
              ) : (
                <HiMoon className="h-5 w-5" />
              )}
            </button>

            {/* Contact button */}
            <Link 
              href="/contact"
              className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-efta-500 hover:bg-efta-600 transition duration-150"
            >
              Contact Us
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-efta-500 hover:bg-gray-100 dark:text-gray-300 dark:hover:text-white dark:hover:bg-gray-700"
            >
              {isMenuOpen ? (
                <HiX className="block h-6 w-6" />
              ) : (
                <HiMenuAlt3 className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Search overlay */}
      <AnimatePresence>
        {searchActive && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="absolute top-full left-0 right-0 bg-white dark:bg-gray-900 shadow-md py-4 px-4"
          >
            <form onSubmit={handleSearch} className="max-w-3xl mx-auto relative">
              <input
                type="text"
                placeholder="Search for services, products, or information..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-3 pl-10 rounded-md border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-efta-500"
              />
              <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <button 
                type="button" 
                onClick={() => setSearchActive(false)}
                className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200"
              >
                <HiX className="h-5 w-5" />
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white dark:bg-gray-900 shadow-lg overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 divide-y divide-gray-200 dark:divide-gray-700">
              {mainNavLinks.map((link, index) => (
                <div key={link.name} className="py-2">
                  <button
                    onClick={() => link.submenu ? toggleSubmenu(index) : window.location.href = link.href}
                    className={`w-full text-left px-3 py-2 rounded-md text-base font-medium flex items-center justify-between ${
                      pathname === link.href 
                        ? 'text-efta-500 bg-gray-100 dark:bg-gray-800' 
                        : 'text-gray-700 hover:bg-gray-50 dark:text-gray-300 dark:hover:bg-gray-800'
                    }`}
                  >
                    {link.name}
                    {link.submenu && (
                      <HiChevronDown className={`transform transition-transform ${activeSubmenu === index ? 'rotate-180' : ''}`} />
                    )}
                  </button>
                  
                  {/* Mobile submenu */}
                  {link.submenu && activeSubmenu === index && (
                    <div className="mt-2 space-y-1 pl-4">
                      {link.submenu.map((sublink) => (
                        <Link
                          key={sublink.name}
                          href={sublink.href}
                          className="block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-efta-500 hover:bg-gray-50 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
                        >
                          {sublink.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              
              {/* Mobile Contact button */}
              <div className="pt-4 pb-2">
                <Link
                  href="/contact"
                  className="block w-full text-center px-4 py-3 rounded-md shadow bg-efta-500 text-white font-medium hover:bg-efta-600"
                >
                  Contact Us
                </Link>
              </div>
              
              {/* Mobile dark mode toggle */}
              <div className="flex items-center justify-between pt-4 px-3">
                <span className="text-gray-700 dark:text-gray-300">Dark Mode</span>
                <button 
                  onClick={toggleDarkMode}
                  className="p-2 rounded-full text-gray-600 hover:text-efta-500 hover:bg-gray-100 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-700"
                >
                  {darkMode ? (
                    <HiOutlineSun className="h-5 w-5" />
                  ) : (
                    <HiMoon className="h-5 w-5" />
                  )}
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
