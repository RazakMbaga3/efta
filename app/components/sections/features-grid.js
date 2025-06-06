// app/components/sections/features-grid.js
'use client'

import { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'

const features = [
  {
    id: 1,
    title: 'ELECTRICAL CONTRACTING',
    image: '/images/services/electrical-contracting.jpg',
    text: 'CRB-certified electrical contractors providing comprehensive power installations, street lighting, and building electrification services for residential and commercial projects.',
    link: '/services#electrical-contracting'
  },
  {
    id: 2,
    title: 'RENEWABLE ENERGY',
    image: '/images/services/renewable-energy.jpg',
    text: 'Leading provider of solar mini-grids and renewable energy solutions, helping businesses and communities transition to clean, sustainable power sources.',
    link: '/services#renewable-energy'
  },
  {
    id: 3,
    title: 'EQUIPMENT SUPPLY',
    image: '/images/services/equipment.jpg',
    text: 'Supplying high-efficiency electrical equipment and components, backed by expert technical support and quality assurance for optimal performance.',
    link: '/services#equipment-supply'
  }
]

export default function FeaturesGrid() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold: 0.1 })
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  }
  
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  }
  
  return (
    <section ref={ref} className="py-8 bg-gray-50">
      <div className="container py-2 mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="text-center max-w-4xl mx-auto mb-6"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-nyati-navy mb-2">
            Our Strengths
          </h2>

           <p> These core strengths drive our business forward and help us serve our customers better.
          </p>
        </motion.div>

        <motion.div 
          className="grid md:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? 'visible' : 'hidden'}
        >
          {features.map((feature, index) => (
            <motion.div 
              key={feature.id}
              variants={itemVariants}
              className="bg-white rounded-sm shadow-xl overflow-hidden transform transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
            >
              <div className="relative h-64 overflow-hidden group">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-nyati-navy/80 to-transparent opacity-80"></div>
                <h3 className="absolute bottom-0 left-0 w-full text-xl font-bold text-white p-6 bg-gradient-to-t from-nyati-navy to-transparent">
                  {feature.title}
                </h3>
              </div>
              <div className="p-6">
                <p className="text-gray-600 mb-4">
                  {feature.text}
                </p>
                <Link 
                  href={feature.link} 
                  className="text-nyati-orange font-semibold inline-flex items-center group"
                >
                  <span>Read More</span>
                  <svg 
                    xmlns="http://www.w3.org/2000/svg" 
                    className="h-5 w-5 ml-2 transform transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="square" strokeLinejoin="square" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                  </svg>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}