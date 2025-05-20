// app/components/sections/products-slider.js
'use client'

import { useState, useRef } from 'react'
import { motion, useInView, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const products = [
  {
    id: 1,
    name: 'Electrical Contracting',
    image: '/images/electrical-contracting.png',
    description: 'Comprehensive electrical installation services',
    specs: [
      'Industrial & Commercial',
      'Infrastructure Projects',
      'Maintenance Services',
    ]
  },
  {
    id: 2,
    name: 'Renewable Energy',
    image: '/images/products/renewable-energy.jpg',
    description: 'Sustainable power solutions',
    specs: [
      'Solar PV Systems',
      'Hybrid Solutions',
      'Energy Storage',
    ]
  },
  {
    id: 3,
    name: 'Building Automation',
    image: '/images/products/building-automation.jpg',
    description: 'Smart building management systems',
    specs: [
      'BMS Integration',
      'Energy Management',
      'Smart Controls',
    ]
  },
  {
    id: 4,
    name: 'Energy Management',
    image: '/images/products/energy-management.jpg',
    description: 'Optimize energy consumption and costs',
    specs: [
      'Energy Audits',
      'Efficiency Solutions',
      'Monitoring Systems',
    ]
  }
]

export default function ProductsSlider() {
  const [activeIndex, setActiveIndex] = useState(0)
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  
  const nextSlide = () => {
    setActiveIndex((current) => (current === products.length - 1 ? 0 : current + 1))
  }

  const prevSlide = () => {
    setActiveIndex((current) => (current === 0 ? products.length - 1 : current - 1))
  }

  // Slide animation variants
  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? '100%' : '-100%',
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction) => ({
      x: direction < 0 ? '100%' : '-100%',
      opacity: 0
    })
  }

  return (
    <section ref={ref} className="py-8 px-4 relative bg-nyati-pattern bg-fixed bg-cover before:content-[''] before:absolute before:inset-0 before:bg-nyati-navy/5">
      <div className="container mx-auto relative z-10 max-w-7xl">
        <div className="flex flex-col md:flex-row items-center gap-6 md:gap-16">
          {/* Text and CTA - Full width on mobile, half width on desktop */}
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            className="w-full md:w-1/2 text-left mb-6 md:mb-0"
          >
            <h2 className="text-2xl md:text-4xl font-bold text-nyati-navy mb-3">
              EFTA Solutions Portfolio
            </h2>
            <p className="text-nyati-navy text-base md:text-lg mb-6">
              We offer a comprehensive range of electrical engineering and renewable energy solutions designed to meet the diverse needs of commercial, industrial, and infrastructure projects. Explore our services to find the perfect solution for your energy needs.
            </p>
            
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="mt-4"
            >
              <Link 
                href="/products" 
                className="bg-nyati-orange hover:bg-orange-600 text-white px-6 py-2.5 rounded-lg font-medium transition-colors duration-300 inline-flex items-center uppercase tracking-wider text-sm md:text-base"
              >
                <span>Explore</span>
                <svg 
                  xmlns="http://www.w3.org/2000/svg" 
                  className="h-4 w-4 ml-2" 
                  fill="none" 
                  viewBox="0 0 24 24" 
                  stroke="currentColor"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
            </motion.div>
          </motion.div>
          
          {/* Product Display - Full width on mobile, half width on desktop */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="w-full md:w-1/2 relative"
          >
            <div className="relative h-[350px] md:h-[500px] overflow-hidden bg-white/50 rounded-lg shadow-xl">
              <AnimatePresence initial={false} custom={activeIndex}>
                <motion.div 
                  key={activeIndex}
                  custom={activeIndex}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 flex"
                >
                  <div className="w-full h-full relative p-4 md:p-8 flex flex-col justify-center items-center">
                    <div className="relative h-[200px] md:h-[350px] w-full">
                      <Image
                        src={products[activeIndex].image}
                        alt={products[activeIndex].name}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        priority
                        className="object-contain drop-shadow-xl"
                      />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-nyati-navy mt-3 md:mt-4 mb-1 md:mb-2 text-center">
                      {products[activeIndex].name}
                    </h3>
                    <p className="text-center text-gray-600 text-sm md:text-base px-2">
                      {products[activeIndex].description}
                    </p>
                  </div>
                </motion.div>
              </AnimatePresence>
              
              {/* Navigation dots */}
              <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
                {products.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                      activeIndex === index 
                        ? 'bg-nyati-orange w-6 md:w-8' 
                        : 'bg-gray-300 hover:bg-gray-400'
                    }`}
                    aria-label={`Go to slide ${index + 1}`}
                  />
                ))}
              </div>
            </div>
            
            {/* Arrow Controls - Made more touch-friendly */}
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#F7941D" }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-nyati-navy/80 text-white p-2 md:p-3 rounded-full transition-colors duration-300 z-10 shadow-md"
              onClick={prevSlide}
              aria-label="Previous product"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1, backgroundColor: "#F7941D" }}
              whileTap={{ scale: 0.95 }}
              className="absolute top-1/2 right-2 md:right-4 transform -translate-y-1/2 bg-nyati-navy/80 text-white p-2 md:p-3 rounded-full transition-colors duration-300 z-10 shadow-md"
              onClick={nextSlide}
              aria-label="Next product"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 md:h-6 md:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </motion.button>
          </motion.div>
        </div>
      </div>
    </section>
  )
}