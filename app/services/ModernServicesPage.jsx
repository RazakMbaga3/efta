'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { HiLightningBolt, HiSun, HiChip, HiCog, HiArrowRight } from 'react-icons/hi'
import { ModernCTA } from '../components/ui/ModernComponents'

const services = [
  {
    id: 'electrical-contracting',
    icon: <HiLightningBolt className="w-10 h-10 text-efta-500" />,
    title: 'Electrical Contracting',
    description: 'CRB-certified electrical contractors providing comprehensive power installations and solutions.',
    features: [
      'Power installations for commercial and industrial facilities',
      'Street lighting and urban electrical infrastructure',
      'Residential and commercial building electrification',
      'Electrical system maintenance and upgrades',
      'Emergency power systems and backup solutions'
    ],
    image: '/images/electrical-contracting.jpg'
  },
  {
    id: 'renewable-energy',
    icon: <HiSun className="w-10 h-10 text-efta-500" />,
    title: 'Renewable Energy Solutions',
    description: 'Sustainable power solutions for a cleaner, greener future.',
    features: [
      'Solar mini-grid design and installation',
      'Solar PV system integration',
      'Energy storage solutions',
      'Renewable energy project consulting',
      'System monitoring and maintenance'
    ],
    image: '/images/solar2.jpg'
  },  
  {
    id: 'equipment-supply',
    icon: <HiChip className="w-10 h-10 text-efta-500" />,
    title: 'Equipment Supply',
    description: 'High-quality electrical and renewable energy equipment.',
    features: [
      'High-efficiency electrical components',
      'Solar panels and inverters',
      'Power distribution equipment',
      'Energy monitoring systems',
      'Safety and protection devices'
    ],
    link: '/services/equipment-supply',
    image: '/images/equipments/Switch-Gear-1_512x512.png'
  },
  {
    id: 'energy-solutions',
    icon: <HiCog className="w-10 h-10 text-efta-500" />,
    title: 'Energy Management',
    description: 'Optimize your power consumption and reduce energy costs.',
    features: [
      'Energy audits and assessments',
      'Power factor correction',
      'Load management systems',
      'Smart metering solutions',
      'Energy efficiency consulting'
    ],
    image: '/images/8.jpg'
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/electrical-contracting.webp"
            alt="EFTA Services"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h5 className="text-efta-400 font-medium mb-3 tracking-wider">PROFESSIONAL SOLUTIONS</h5>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Innovative <span className="text-efta-400">Electrical</span> & <br />
                <span className="text-efta-400">Energy</span> Services
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl"
            >
              Comprehensive electrical contracting and renewable energy solutions for residential, 
              commercial, and industrial applications.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link 
                href="#services-grid" 
                scroll={false} 
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-efta-500 hover:bg-efta-600 transition duration-300"
              >
                Explore Services
              </Link>
              <Link 
                href="/contact" 
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition duration-300"
              >
                Contact Us
              </Link>
            </motion.div>
          </div>
        </div>

        {/* Floating stats */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 hidden lg:block"
        >
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-efta-400">10+</h3>
              <p className="text-white text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-efta-400">100+</h3>
              <p className="text-white text-sm">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-efta-400">99%</h3>
              <p className="text-white text-sm">Client Satisfaction</p>
            </div>
          </div>
        </motion.div>
      </section>
      
      {/* Services Overview */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800" id="services-grid">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Comprehensive Services</h2>
            <p className="text-gray-600 dark:text-gray-400">
              From electrical contracting to renewable energy solutions, we provide end-to-end services designed to meet your specific energy needs.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-700 rounded-xl shadow-lg overflow-hidden flex flex-col"
              >
                <div className="relative h-48">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <div className="bg-efta-500 text-white p-2 rounded-lg inline-flex items-center justify-center">
                      {service.icon}
                    </div>
                  </div>
                </div>
                
                <div className="p-6 flex-grow">
                  <h3 className="text-xl font-bold mb-3 text-gray-900 dark:text-white">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">{service.description}</p>
                  
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-gray-700 dark:text-gray-300">
                        <span className="text-efta-500 mt-1">•</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div className="px-6 pb-6 mt-auto">
                  {service.link ? (
                    <Link 
                      href={service.link}
                      className="inline-flex items-center justify-center w-full px-4 py-2 bg-efta-500 text-white rounded-md hover:bg-efta-600 transition-colors"
                    >
                      View Details
                      <HiArrowRight className="ml-2" />
                    </Link>
                  ) : (
                    <Link 
                      href={`/contact?service=${service.id}`}
                      className="inline-flex items-center justify-center w-full px-4 py-2 border border-efta-500 text-efta-500 rounded-md hover:bg-efta-500 hover:text-white transition-colors"
                    >
                      Request Information
                      <HiArrowRight className="ml-2" />
                    </Link>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solution Section */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="lg:w-1/2">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                <div className="relative z-10 rounded-lg overflow-hidden shadow-2xl">
                  <Image
                    src="/images/electrical-contracting.jpg"
                    alt="Custom Electrical Solutions"
                    width={600}
                    height={400}
                    className="w-full h-auto"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-efta-500 rounded-lg z-0" />
                <div className="absolute -top-6 -left-6 w-32 h-32 border-2 border-efta-400 rounded-lg z-0" />
              </motion.div>
            </div>
            
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="lg:w-1/2"
            >
              <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
                Need a Custom Solution?
              </h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                We understand that every project has unique requirements. Our team of experienced engineers and technicians can design and implement custom electrical and energy solutions tailored to your specific needs.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-8">
                From specialized industrial power systems to custom renewable energy setups, we have the expertise to handle projects of any complexity and scale.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link 
                  href="/contact" 
                  className="inline-flex items-center justify-center px-6 py-3 bg-efta-500 hover:bg-efta-600 text-white rounded-md transition-colors"
                >
                  Request Consultation
                </Link>
                <Link 
                  href="/projects" 
                  className="inline-flex items-center justify-center px-6 py-3 border border-efta-500 text-efta-500 hover:bg-efta-500 hover:text-white rounded-md transition-colors"
                >
                  View Our Projects
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <ModernCTA
        title="Ready to Power Your Success?"
        description="Contact us today to discuss your electrical and renewable energy needs and discover how we can help you achieve your goals."
        primaryButtonText="Get in Touch"
        primaryButtonLink="/contact"        secondaryButtonText="Explore Equipment"
        secondaryButtonLink="/services/equipment-supply"
        bgImage="/images/10.webp"
      />
    </div>
  )
}
