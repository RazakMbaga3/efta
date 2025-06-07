'use client'

import { useState, useRef, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion } from 'framer-motion'
import { 
  HiOutlineClock, 
  HiOutlineLightningBolt, 
  HiOutlineSun, 
  HiOutlineChartBar, 
  HiOutlineShieldCheck,
  HiArrowRight,
  HiX,
  HiCheck,
  HiPlay,
  HiOutlinePhone,
  HiOutlineMail
} from 'react-icons/hi'

// Component for the Energy Metrics Banner that can be used on the homepage
export function EnergyMetricsBanner() {
  return (
    <div className="bg-gradient-to-r from-efta-800 to-efta-600 py-8 text-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-3 rounded-full">
              <HiOutlineSun className="h-6 w-6 text-efta-300" />
            </div>
            <div>
              <div className="text-2xl font-bold">50+ MW</div>
              <div className="text-white/70">Solar Capacity Installed</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-3 rounded-full">
              <HiOutlineLightningBolt className="h-6 w-6 text-efta-300" />
            </div>
            <div>
              <div className="text-2xl font-bold">200+</div>
              <div className="text-white/70">Projects Completed</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-3 rounded-full">
              <HiOutlineChartBar className="h-6 w-6 text-efta-300" />
            </div>
            <div>
              <div className="text-2xl font-bold">30%</div>
              <div className="text-white/70">Average Energy Savings</div>
            </div>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="bg-white/20 p-3 rounded-full">
              <HiOutlineClock className="h-6 w-6 text-efta-300" />
            </div>
            <div>
              <div className="text-2xl font-bold">15+ Years</div>
              <div className="text-white/70">Industry Experience</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Component for the Featured Project Card that can be used on the homepage or projects page
export function FeaturedProjectCard({ image, title, category, description, href }) {
  return (
    <motion.div 
      whileHover={{ y: -10 }}
      className="group relative bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden"
    >
      <div className="relative h-60 sm:h-72">
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
        <div className="absolute top-4 left-4">
          <span className="px-3 py-1 text-xs font-medium bg-efta-500 text-white rounded-full">
            {category}
          </span>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 line-clamp-2">{description}</p>
        <Link 
          href={href} 
          className="inline-flex items-center text-efta-600 dark:text-efta-400 font-medium hover:underline"
        >
          View Project <HiArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )
}

// Component for the Service Feature Card that can be used on the services page
export function ServiceFeatureCard({ icon, title, description, href }) {
  const Icon = icon
  
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 transition-all hover:shadow-xl"
    >
      <div className="flex flex-col h-full">
        <div className="bg-efta-50 dark:bg-efta-900/20 p-3 rounded-lg w-fit mb-4">
          <Icon className="h-7 w-7 text-efta-500 dark:text-efta-400" />
        </div>
        
        <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{title}</h3>
        <p className="text-gray-600 dark:text-gray-400 mb-6 flex-grow">{description}</p>
        
        <Link 
          href={href} 
          className="inline-flex items-center text-efta-600 dark:text-efta-400 font-medium hover:underline mt-auto"
        >
          Learn More <HiArrowRight className="ml-1 h-4 w-4" />
        </Link>
      </div>
    </motion.div>
  )
}

// Component for the Energy Efficient Product Card that can be used on the products page
export function EnergyEfficientProductCard({ image, title, efficiency, price, features, href }) {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden group">
      <div className="relative h-64">
        <Image
          src={image}
          alt={title}
          fill
          className="object-contain p-4 transition-all duration-300 group-hover:scale-105"
        />
        
        {efficiency && (
          <div className="absolute top-4 right-4 bg-green-500 text-white text-xs font-bold px-2 py-1 rounded-full">
            {efficiency} Efficient
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="text-lg font-bold mb-2 text-gray-900 dark:text-white">{title}</h3>
        
        {price && (
          <p className="text-efta-600 dark:text-efta-400 font-medium text-xl mb-4">
            TZS {price.toLocaleString()}
          </p>
        )}
        
        <ul className="mb-5 space-y-2">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <HiCheck className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
              <span className="text-gray-600 dark:text-gray-400 text-sm">{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link
          href={href}
          className="block w-full py-2 px-4 bg-efta-500 hover:bg-efta-600 text-white text-center rounded-md font-medium transition-colors"
        >
          View Details
        </Link>
      </div>
    </div>
  )
}

// Component for the Video Showcase Modal that can be used on various pages
export function VideoShowcase({ thumbnailSrc, videoSrc, title }) {
  const [isOpen, setIsOpen] = useState(false)
  const videoRef = useRef(null)
  
  // Handle closing of modal and stopping video
  useEffect(() => {
    if (!isOpen && videoRef.current) {
      videoRef.current.pause()
    }
  }, [isOpen])
  
  return (
    <>
      <div className="relative overflow-hidden rounded-xl cursor-pointer group" onClick={() => setIsOpen(true)}>
        <div className="aspect-w-16 aspect-h-9 relative">
          <Image
            src={thumbnailSrc}
            alt={title}
            fill
            className="object-cover rounded-xl transition-transform duration-500 group-hover:scale-105"
          />
          
          <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-all flex items-center justify-center">
            <div className="bg-white/90 p-5 rounded-full group-hover:scale-110 transition-transform">
              <HiPlay className="h-10 w-10 text-efta-600" />
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent">
          <h3 className="text-white text-lg font-bold">{title}</h3>
          <p className="text-white/80 text-sm">Click to watch video</p>
        </div>
      </div>
      
      {isOpen && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="relative w-full max-w-4xl">
            <button
              onClick={() => setIsOpen(false)}
              className="absolute -top-12 right-0 text-white hover:text-efta-400"
            >
              <HiX className="h-8 w-8" />
            </button>
            
            <div className="aspect-w-16 aspect-h-9">
              <video
                ref={videoRef}
                src={videoSrc}
                controls
                autoPlay
                className="w-full rounded-lg"
              >
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

// Component for the Call To Action section that can be used across various pages
export function ModernCTA({ 
  title = "Ready to Transform Your Energy Systems?",
  description = "Contact our experts today to discuss your energy needs and discover custom solutions tailored to your requirements.",
  primaryButtonText = "Contact Us",
  primaryButtonLink = "/contact",
  secondaryButtonText = "Learn More",
  secondaryButtonLink = "/services",
  bgImage = "/images/10.webp"
}) {
  return (
    <section className="relative py-20">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src={bgImage}
          alt="Call to Action Background"
          fill
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-efta-900/80"></div>
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">{title}</h2>
          <p className="text-lg text-white/80 mb-10 max-w-2xl mx-auto">
            {description}
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href={primaryButtonLink}
              className="px-8 py-3 bg-efta-500 hover:bg-efta-600 text-white font-medium rounded-md transition-colors"
            >
              {primaryButtonText}
            </Link>
            
            <Link
              href={secondaryButtonLink}
              className="px-8 py-3 bg-white/10 hover:bg-white/20 text-white font-medium rounded-md transition-colors"
            >
              {secondaryButtonText}
            </Link>
          </div>
          
          <div className="mt-12 flex flex-col sm:flex-row justify-center gap-8">
            <div className="flex items-center justify-center">
              <div className="bg-white/10 p-3 rounded-full">
                <HiOutlinePhone className="h-6 w-6 text-efta-300" />
              </div>
              <div className="ml-3 text-left">
                <p className="text-white/70 text-sm">Call Us</p>
                <a href="tel:+255769801084" className="text-white font-medium">
                    +255 769 801 084 <br />
                    +255 699 707 397 <br />
                    +255 762 066 198

                </a>
              </div>
            </div>
            
            <div className="flex items-center justify-center">
              <div className="bg-white/10 p-3 rounded-full">
                <HiOutlineMail className="h-6 w-6 text-efta-300" />
              </div>
              <div className="ml-3 text-left">
                <p className="text-white/70 text-sm">Email Us</p>
                <a href="mailto:info@efta.co.tz" className="text-white font-medium">
                  info@efta.co.tz
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// Export happens per-component above, no need for a grouped export
