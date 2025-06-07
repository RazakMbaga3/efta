'use client'

import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { HiPhone, HiMail, HiExternalLink, HiChevronUp } from 'react-icons/hi'
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

export default function ModernFooter() {
  const [showScrollToTop, setShowScrollToTop] = useState(false)
  
  // Show scroll to top button when scrolled down
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setShowScrollToTop(window.scrollY > 300)
    })
  }
  
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    })
  }
    return (
    <footer className="bg-gray-900 dark:bg-gray-900 text-gray-800 dark:text-white relative">
      {/* Scroll to top button */}
      <button 
        onClick={scrollToTop}
        className={`fixed bottom-6 right-6 bg-efta-500 hover:bg-efta-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 z-50 ${
          showScrollToTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
        }`}
      >
        <HiChevronUp className="h-6 w-6" />
      </button>
      
      {/* Newsletter Section */}
      <div className="bg-efta-600 py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="text-center md:text-left">
              <h3 className="text-2xl font-bold mb-2 text-white">Stay Updated</h3>
              <p className="text-white/80">
                Subscribe to our newsletter for the latest energy solutions and innovations.
              </p>
            </div>
            <form className="flex w-full md:w-auto">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="px-4 py-3 rounded-l-md w-full md:w-64 text-gray-900 focus:outline-none"
                required
              />
              <button 
                type="submit" 
                className="bg-gray-900 hover:bg-black px-5 py-3 rounded-r-md font-medium transition-colors text-white"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
        {/* Main Footer */}
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Company Info */}
          <div>
            <div className="mb-6">
              <Image 
                src="/images/logo.png" 
                alt="EFTA Investments" 
                width={180} 
                height={50}
                className="h-auto w-40"
              />
            </div>
            <p className="text-gray-600 dark:text-gray-400 mb-6">
              Your trusted partner for comprehensive electrical solutions and renewable energy technologies in Tanzania.
            </p>
            <div className="flex space-x-4 mb-6">
              <a href="https://facebook.com" className="text-gray-600 dark:text-gray-400 hover:text-efta-400 transition-colors">
                <FaFacebook className="h-5 w-5" />
              </a>
              <a href="https://twitter.com" className="text-gray-600 dark:text-gray-400 hover:text-efta-400 transition-colors">
                <FaTwitter className="h-5 w-5" />
              </a>
              <a href="https://instagram.com" className="text-gray-600 dark:text-gray-400 hover:text-efta-400 transition-colors">
                <FaInstagram className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-600 dark:text-gray-400 hover:text-efta-400 transition-colors">
                <FaLinkedin className="h-5 w-5" />
              </a>
              <a href="https://youtube.com" className="text-gray-600 dark:text-gray-400 hover:text-efta-400 transition-colors">
                <FaYoutube className="h-5 w-5" />
              </a>
            </div>
            <div className="flex flex-col space-y-2">
              <div className="flex items-center">
                <HiPhone className="h-5 w-5 text-efta-400 mr-3" />
                <a href="tel:+255769801084" className="text-gray-600 dark:text-gray-400 hover:text-efta-500 dark:hover:text-white transition-colors">
                  +255 769 801 084
                </a>
              </div>
              <div className="flex items-center">
                <HiMail className="h-5 w-5 text-efta-400 mr-3" />
                <a href="mailto:eftainvestments@gmail.com" className="text-gray-600 dark:text-gray-400 hover:text-efta-500 dark:hover:text-white transition-colors">
                eftainvestments@gmail.com
                </a>
              </div>
            </div>
          </div>
            {/* Services Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative text-gray-800 dark:text-white">
              Our Services
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-efta-500 mt-1"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/services#electrical-contracting" className="text-gray-600 dark:text-gray-400 hover:text-efta-600 dark:hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-efta-500 rounded-full mr-2"></span>
                  Electrical Contracting
                </Link>
              </li>
              <li>
                <Link href="/services#renewable-energy" className="text-gray-600 dark:text-gray-400 hover:text-efta-600 dark:hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-efta-500 rounded-full mr-2"></span>
                  Renewable Energy Solutions
                </Link>
              </li>
              <li>
                <Link href="/services/equipment-supply" className="text-gray-600 dark:text-gray-400 hover:text-efta-600 dark:hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-efta-500 rounded-full mr-2"></span>
                  Equipment Supply
                </Link>
              </li>
              <li>
                <Link href="/services#energy-audits" className="text-gray-600 dark:text-gray-400 hover:text-efta-600 dark:hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-efta-500 rounded-full mr-2"></span>
                  Energy Audits & Consulting
                </Link>
              </li>
              <li>
                <Link href="/services#maintenance" className="text-gray-600 dark:text-gray-400 hover:text-efta-600 dark:hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-efta-500 rounded-full mr-2"></span>
                  Maintenance & Support
                </Link>
              </li>
            </ul>
          </div>
            {/* Quick Links */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative text-gray-800 dark:text-white">
              Quick Links
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-efta-500 mt-1"></span>
            </h3>
            <ul className="space-y-3">
              <li>
                <Link href="/about" className="text-gray-600 dark:text-gray-400 hover:text-efta-600 dark:hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-efta-500 rounded-full mr-2"></span>
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/projects" className="text-gray-600 dark:text-gray-400 hover:text-efta-600 dark:hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-efta-500 rounded-full mr-2"></span>
                  Projects
                </Link>
              </li>
              <li>
                <Link href="/blog" className="text-gray-600 dark:text-gray-400 hover:text-efta-600 dark:hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-efta-500 rounded-full mr-2"></span>
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/careers" className="text-gray-600 dark:text-gray-400 hover:text-efta-600 dark:hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-efta-500 rounded-full mr-2"></span>
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-600 dark:text-gray-400 hover:text-efta-600 dark:hover:text-white transition-colors flex items-center">
                  <span className="w-1.5 h-1.5 bg-efta-500 rounded-full mr-2"></span>
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
            {/* Working Hours & Certifications */}
          <div>
            <h3 className="text-xl font-bold mb-6 relative text-gray-800 dark:text-white">
              Business Hours
              <span className="absolute bottom-0 left-0 w-12 h-1 bg-efta-500 mt-1"></span>
            </h3>
            <ul className="space-y-3 mb-8">
              <li className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Monday - Friday:</span>
                <span>8:00 AM - 5:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Saturday:</span>
                <span>9:00 AM - 1:00 PM</span>
              </li>
              <li className="flex justify-between text-gray-600 dark:text-gray-400">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>
            
            <h3 className="text-xl font-bold mb-4 text-gray-800 dark:text-white">Certifications</h3>
            <div className="flex flex-wrap gap-4">
              <div className="bg-white/10 p-3 rounded-md">
                <Image 
                  src="/images/partners/CRB.png" 
                  alt="CRB Certification" 
                  width={60} 
                  height={60}
                  className="h-10 w-auto"
                />
              </div>
              {/* Add other certification logos as needed */}
            </div>
          </div>
        </div>
      </div>
        {/* Bottom Footer */}
      <div className="border-t border-gray-800 dark:border-gray-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-600 dark:text-gray-500 text-sm">
              © {new Date().getFullYear()} EFTA Investments. All rights reserved.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link href="/privacy-policy" className="text-gray-600 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-400 text-sm">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-gray-600 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-400 text-sm">
                Terms of Service
              </Link>
              <Link href="/sitemap" className="text-gray-600 dark:text-gray-500 hover:text-gray-800 dark:hover:text-gray-400 text-sm">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
