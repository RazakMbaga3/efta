'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { HiLightningBolt, HiSun, HiChip, HiCog } from 'react-icons/hi'

const services = [
  {
    id: 'electrical-contracting',
    icon: <HiLightningBolt className="w-8 h-8 text-efta-500" />,
    title: 'Electrical Contracting',
    description: 'CRB-certified electrical contractors providing comprehensive power installations and solutions.',
    features: [
      'Power installations for commercial and industrial facilities',
      'Street lighting and urban electrical infrastructure',
      'Residential and commercial building electrification',
      'Electrical system maintenance and upgrades',
      'Emergency power systems and backup solutions'
    ]
  },
  {
    id: 'renewable-energy',
    icon: <HiSun className="w-8 h-8 text-efta-500" />,
    title: 'Renewable Energy Solutions',
    description: 'Sustainable power solutions for a cleaner, greener future.',
    features: [
      'Solar mini-grid design and installation',
      'Solar PV system integration',
      'Energy storage solutions',
      'Renewable energy project consulting',
      'System monitoring and maintenance'
    ]
  },
  {
    id: 'equipment-supply',
    icon: <HiChip className="w-8 h-8 text-efta-500" />,
    title: 'Equipment Supply',
    description: 'High-quality electrical and renewable energy equipment.',
    features: [
      'High-efficiency electrical components',
      'Solar panels and inverters',
      'Power distribution equipment',
      'Energy monitoring systems',
      'Safety and protection devices'
    ]
  },
  {
    id: 'energy-solutions',
    icon: <HiCog className="w-8 h-8 text-efta-500" />,
    title: 'Energy Management',
    description: 'Optimize your power consumption and reduce energy costs.',
    features: [
      'Energy audits and assessments',
      'Power factor correction',
      'Load management systems',
      'Smart metering solutions',
      'Energy efficiency consulting'
    ]
  }
]

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-efta-light/10 to-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Our Services
              </h1>
              <p className="text-xl text-gray-600">
                Comprehensive electrical and renewable energy solutions for residential, 
                commercial, and industrial applications.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {services.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-lg shadow-lg p-8"
              >
                <div className="flex items-center gap-4 mb-6">
                  {service.icon}
                  <h3 className="text-2xl font-bold">{service.title}</h3>
                </div>
                <p className="text-gray-600 mb-6">{service.description}</p>
                <ul className="space-y-3">
                  {service.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-efta-500"></span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-efta-900 text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Ready to Power Your Success?
          </h2>
          <p className="text-xl mb-8">
            Contact us today to discuss your electrical and renewable energy needs.
          </p>
          <Link 
            href="/contact"
            className="inline-block bg-efta-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-efta-600 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </div>
  )
}
