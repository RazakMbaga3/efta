'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { HiArrowRight } from 'react-icons/hi'

export default function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero.webp"
          alt="EFTA Hero Background"
          fill
          priority
          className="object-cover object-center brightness-[0.85]"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-efta-800/80 to-transparent" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Powering Progress,{' '}
              <span className="text-efta-400">Sustaining</span>{' '}
              the Future
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl"
          >
            Your trusted partner in electrical contracting, renewable energy solutions, and sustainable power systems for Tanzania's bright future.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link 
              href="/products" 
              className="inline-flex items-center px-8 py-3 bg-efta-400 hover:bg-efta-300 text-white rounded-full transition-colors duration-300 text-lg group"
            >
              Explore Our Products
              <HiArrowRight className="ml-2 group-hover:translate-x-1 transition-transform duration-300" />
            </Link>
            <Link 
              href="/about" 
              className="inline-flex items-center px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-300 text-lg backdrop-blur-sm"
            >
              Learn More
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 0.6 }}
        className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-efta-800/50 to-transparent z-[1]"
      />
    </section>
  )
}