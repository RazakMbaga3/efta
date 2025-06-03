'use client'

import { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import { HiLightningBolt, HiSun, HiChip, HiArrowRight, HiChevronLeft, HiChevronRight } from 'react-icons/hi'
import Image from 'next/image'
import Link from 'next/link'
import FadeIn from './components/animations/FadeIn'
import PageTransition from './components/animations/PageTransition'
import ScrollReveal from './components/animations/ScrollReveal'
import SlideIn from './components/animations/SlideIn'
import Scale from './components/animations/Scale'
import { 
  EnergyMetricsBanner,
  FeaturedProjectCard,
  ServiceFeatureCard,
  EnergyEfficientProductCard,
  VideoShowcase,
  ModernCTA
} from './components/ui/ModernComponents'

// AOS Animation Library
import AOS from 'aos'
import 'aos/dist/aos.css'

export default function ModernHome() {
  // Initialize AOS animation
  useEffect(() => {
    AOS.init({
      duration: 800,
      once: true,
      easing: 'ease-out'
    })
  }, [])

  // Hero slideshow state and images
  const [currentSlide, setCurrentSlide] = useState(0)
  
  // Array of hero images from /public/images
  const heroImages = [
    '/images/6.jpg',
    '/images/5.jpg',
    '/images/9.jpg',
    '/images/10.webp',
    '/images/solar2.jpg'
  ]

  // Auto-advance slideshow
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1))
    }, 5000) // Change slide every 5 seconds
    
    return () => clearInterval(interval)
  }, [heroImages.length])

  // Functions to navigate slides
  const prevSlide = () => {
    setCurrentSlide((prev) => (prev === 0 ? heroImages.length - 1 : prev - 1))
  }
  
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev === heroImages.length - 1 ? 0 : prev + 1))
  }

  return (
    <PageTransition>      {/* Modern Hero Section with Image Slideshow */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Hero Image Slideshow */}
        <div className="absolute inset-0 z-0">
          {heroImages.map((image, index) => (
            <div 
              key={index}
              className={`absolute inset-0 transition-opacity duration-1000 ${
                index === currentSlide ? 'opacity-100' : 'opacity-0'
              }`}
            >
              <Image
                src={image}
                alt={`EFTA Hero Slide ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover object-center"
              />
            </div>
          ))}
          
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-efta-900/90 via-efta-800/70 to-transparent" />
        </div>
        
        {/* Navigation arrows */}
        <button 
          onClick={prevSlide}
          className="absolute left-4 z-20 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
          aria-label="Previous slide"
        >
          <HiChevronLeft className="h-6 w-6" />
        </button>
        
        <button 
          onClick={nextSlide}
          className="absolute right-4 z-20 p-2 rounded-full bg-black/20 text-white hover:bg-black/40 transition-colors"
          aria-label="Next slide"
        >
          <HiChevronRight className="h-6 w-6" />
        </button>

        {/* Navigation dots */}
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 z-20 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                index === currentSlide ? 'bg-white' : 'bg-white/40 hover:bg-white/60'
              } transition-colors`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h5 className="text-efta-400 font-medium mb-3 tracking-wider">INNOVATIVE ENERGY SOLUTIONS</h5>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Powering Progress, <br />
                <span className="text-efta-400">Sustaining</span> the Future
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl"
            >
              Your trusted partner for comprehensive electrical solutions and renewable energy technologies in Tanzania.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-efta-500 hover:bg-efta-600 transition duration-300"
              >
                Explore Our Solutions
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-8 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition duration-300"
              >
                Get in Touch
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
          <span className="text-white text-sm mb-2">Scroll to explore</span>
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 1.5 }}
            className="w-1 h-8 bg-white/30 rounded-full relative overflow-hidden"
          >
            <motion.div
              animate={{ y: [40, -10, 40] }}
              transition={{ repeat: Infinity, duration: 1.5, ease: "linear" }}
              className="absolute top-0 left-0 right-0 h-full bg-efta-400 rounded-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Energy Metrics Banner */}
      <EnergyMetricsBanner />

      {/* About Section with Modern Design */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2" data-aos="fade-right">
              <div className="relative">
                <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/electrical-contracting.jpg"
                    alt="EFTA Electrical Services"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-efta-500 rounded-lg z-0" />
                <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-efta-400 rounded-lg z-0" />
              </div>
            </div>
            
            <div className="lg:w-1/2" data-aos="fade-left">
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Tanzania's Premier Electrical Solutions Provider
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                EFTA Investments Company is a CRB-certified firm specializing in comprehensive electrical solutions, 
                from power installations and renewable energy to high-efficiency equipment supply. With our expertise 
                in electrical contracting and sustainable energy solutions, we're powering Tanzania's progress while 
                protecting its future.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                Our team of experienced engineers and technicians delivers high-quality services that meet international 
                standards, ensuring reliability, efficiency, and safety for all your electrical and renewable energy needs.
              </p>
              
              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-efta-50 dark:bg-efta-900/30 flex items-center justify-center mr-4">
                    <HiLightningBolt className="h-6 w-6 text-efta-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Certified Experts</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">CRB-certified professionals</p>
                  </div>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-efta-50 dark:bg-efta-900/30 flex items-center justify-center mr-4">
                    <HiSun className="h-6 w-6 text-efta-500" />
                  </div>
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white">Renewable Focus</h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Sustainable energy solutions</p>
                  </div>
                </div>
              </div>
              
              <Link 
                href="/about" 
                className="inline-flex items-center font-medium text-efta-600 dark:text-efta-400 hover:underline"
              >
                Learn more about our company <HiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Comprehensive Services</h2>
            <p className="text-gray-600 dark:text-gray-400">
              From electrical contracting to renewable energy solutions, we provide end-to-end services designed to meet your specific energy needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-delay="100">
              <ServiceFeatureCard 
                icon={HiLightningBolt}
                title="Electrical Contracting"
                description="Complete electrical services for commercial, industrial, and residential projects, including installations, upgrades, and maintenance."
                href="/services#electrical-contracting"
              />
            </div>
            
            <div data-aos="fade-up" data-aos-delay="200">
              <ServiceFeatureCard 
                icon={HiSun}
                title="Renewable Energy Solutions"
                description="Solar power systems, energy storage solutions, and integration services for sustainable and reliable clean energy."
                href="/services#renewable-energy"
              />
            </div>
            
            <div data-aos="fade-up" data-aos-delay="300">
              <ServiceFeatureCard 
                icon={HiChip}
                title="Equipment Supply"
                description="High-quality electrical components, solar equipment, and energy-efficient products from leading manufacturers."
                href="/services/equipment-supply"
              />
            </div>
          </div>
          
          <div className="text-center mt-12">
            <Link 
              href="/services" 
              className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-efta-500 hover:bg-efta-600 transition duration-300"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Projects Showcase */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Featured Projects</h2>
              <p className="text-gray-600 dark:text-gray-400 max-w-2xl">
                Explore our showcase of successful implementations, from commercial installations to renewable energy systems.
              </p>
            </div>
            <Link 
              href="/projects" 
              className="inline-flex items-center mt-4 md:mt-0 font-medium text-efta-600 dark:text-efta-400 hover:underline"
            >
              View all projects <HiArrowRight className="ml-2" />
            </Link>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-delay="100">
              <FeaturedProjectCard 
                image="/images/9.jpg"
                title="Commercial Solar Installation"
                category="Renewable Energy"
                description="A 200kW solar installation for a commercial facility in Dar es Salaam, reducing energy costs by 40%."
                href="/projects#commercial"
              />
            </div>
            
            <div data-aos="fade-up" data-aos-delay="200">
              <FeaturedProjectCard 
                image="/images/project3.jpg"
                title="Industrial Power Distribution"
                category="Electrical Contracting"
                description="Complete electrical infrastructure upgrade for a manufacturing plant in Arusha."
                href="/projects#industrial"
              />
            </div>
            
            <div data-aos="fade-up" data-aos-delay="300">
              <FeaturedProjectCard 
                image="/images/project5.jpg"
                title="Energy Storage System"
                category="Smart Energy"
                description="Battery storage solution integrated with renewable sources for reliable backup power."
                href="/projects#smart-energy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">See Our Expertise in Action</h2>
            <p className="text-gray-400">
              Watch how we transform energy systems and deliver sustainable solutions for our clients.
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto" data-aos="zoom-in">
            <VideoShowcase 
              thumbnailSrc="/images/solar2.jpg"
              videoSrc="/videos/company-showcase.mp4"
              title="EFTA Renewable Energy Solutions"
            />
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">What Our Clients Say</h2>
            <p className="text-gray-600 dark:text-gray-400">
              We take pride in our work and the positive impact we've made for businesses and homeowners across Tanzania.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div data-aos="fade-up" data-aos-delay="100">
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/5.jpg"
                      alt="Client"
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">Michael Johnson</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Operations Director, TZ Manufacturing</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "EFTA Investments transformed our energy consumption with their solar installation. The system paid for itself within 18 months, and we've seen a 45% reduction in our electricity costs."
                </p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <HiSun key={star} className="h-5 w-5 text-yellow-500" />
                  ))}
                </div>
              </div>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="200">
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/11.jpg"
                      alt="Client"
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">Sarah Kimathi</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Hotel Owner, Zanzibar Beach Resort</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "The team at EFTA was professional from start to finish. Their energy audit identified several areas for improvement, and their implementation was flawless. Highly recommend!"
                </p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <HiSun key={star} className="h-5 w-5 text-yellow-500" />
                  ))}
                </div>
              </div>
            </div>
            
            <div data-aos="fade-up" data-aos-delay="300">
              <div className="bg-white dark:bg-gray-700 p-8 rounded-xl shadow-md">
                <div className="flex items-center mb-4">
                  <div className="flex-shrink-0">
                    <Image
                      src="/images/8.jpg"
                      alt="Client"
                      width={56}
                      height={56}
                      className="h-14 w-14 rounded-full object-cover"
                    />
                  </div>
                  <div className="ml-4">
                    <h4 className="text-lg font-bold text-gray-900 dark:text-white">David Mwanza</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">Facility Manager, Dar Tech Hub</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300 italic">
                  "EFTA's electrical contracting services were outstanding. They completed our complex office rewiring on time and within budget, with minimal disruption to our operations."
                </p>
                <div className="flex mt-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <HiSun key={star} className="h-5 w-5 text-yellow-500" />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <ModernCTA />
    </PageTransition>
  )
}
