'use client'

import { motion } from 'framer-motion'
import { HiLightningBolt, HiSun, HiChip } from 'react-icons/hi'
import Image from 'next/image'
import Link from 'next/link'
import { FadeIn } from './components/animations/FadeIn'
import PageTransition from './components/animations/PageTransition'
import ScrollReveal from './components/animations/ScrollReveal'
import SlideIn from './components/animations/SlideIn'
import Scale from './components/animations/Scale'

export default function Home() {
  return (
    <PageTransition>
      {/* Hero Section */}
      <SlideIn>
        <section className="relative mt-20 min-h-[85vh] flex items-center">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/6.jpg"
              alt="EFTA Cement Factory"
              fill
              priority
              className="object-cover object-center brightness-[0.85]"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-efta-800/80 to-transparent" />
          </div>

          <div className="container mx-auto px-6 lg:px-8 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-4xl"
            >
              <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
                Powering Progress,{' '}
                <span className="text-efta-400">Sustaining</span>{' '}
                the Future
              </h1>
              <p className="text-xl md:text-2xl mb-8 text-gray-100">
Your Trusted Partner for Comprehensive Electrical Solutions and Renewable Energy Technologies in Tanzania.              </p>
              <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                <Link 
                  href="/products" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-efta-400 hover:bg-efta-300 text-white rounded-full transition-colors duration-300 text-lg group"
                >
                  Explore Our Solutions
                  <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                </Link>
                <Link 
                  href="/about" 
                  className="inline-flex items-center justify-center px-8 py-3 bg-white/10 hover:bg-white/20 text-white rounded-full transition-colors duration-300 text-lg backdrop-blur-sm"
                >
                  Learn More
                </Link>
              </div>
            </motion.div>
          </div>

          {/* Decorative Element */}
          <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-efta-800/50 to-transparent z-[1]" />
        </section>
      </SlideIn>

      {/* About Snippet */}
      <ScrollReveal>
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12">
              <div className="md:w-1/2">
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <h2 className="text-3xl font-bold mb-6 text-efta-dark dark:text-white">
                    Tanzania's Premier Electrical Solutions Provider
                  </h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-8 text-lg">
                    EFTA Investments Company is a CRB-certified firm specializing in comprehensive electrical solutions, 
                    from power installations and renewable energy to high-efficiency equipment supply. With our expertise 
                    in electrical contracting and sustainable energy solutions, we're powering Tanzania's progress while 
                    protecting its future.
                  </p>
                  <div className="flex items-center gap-6">
                    <div className="p-4 bg-white rounded-lg shadow-md dark:bg-gray-800">
                      <Image
                        src="/images/partners/CRB.png"
                        alt="CRB Certification"
                        width={80}
                        height={80}
                        className="h-16 w-auto"
                      />
                    </div>
                    <Link 
                      href="/about"
                      className="group inline-flex items-center text-efta hover:text-efta-dark dark:hover:text-efta-light font-semibold"
                    >
                      Learn More About Us
                      <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                    </Link>
                  </div>
                </motion.div>
              </div>
              <motion.div 
                className="md:w-1/2"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <div className="relative h-[400px] rounded-xl overflow-hidden shadow-xl">
                  <Image
                    src="/images/services/electrical-work.webp"
                    alt="EFTA Electrical Solutions"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Services Overview */}
      <Scale>
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-efta-dark dark:text-white">
              Our Services
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              <ServiceCard
                icon={<HiLightningBolt className="h-12 w-12" />}
                title="Electrical Contracting"
                description="Complete electrical solutions for industrial and commercial projects, from power installations to building electrification."
              />
              <ServiceCard
                icon={<HiSun className="h-12 w-12" />}
                title="Renewable Energy"
                description="Solar mini-grids, equipment supply, and sustainable energy solutions for a greener Tanzania."
              />
              <ServiceCard
                icon={<HiChip className="h-12 w-12" />}
                title="High-Efficiency Equipment"
                description="Premium electrical equipment and energy-efficient solutions for optimal performance."
              />
            </div>
          </div>
        </section>
      </Scale>

      {/* Project Highlights */}
      <ScrollReveal>
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-efta-dark dark:text-white">
              Featured Projects
            </h2>
            <div className="grid md:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="group relative overflow-hidden rounded-xl shadow-lg"
                >
                  <div className="relative h-64">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                  </div>
                  <div className="absolute bottom-0 p-6">
                    <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-200">{project.category}</p>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center inline-block bg-green-300 mt-12 text-efta px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold">
              <Link href="/projects">
                View All Projects
              </Link>
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* Sustainability CTA */}
      <Scale>
        <section className="py-20 bg-efta text-white">
          <div className="container mx-auto px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">
                Committed to Sustainable Development
              </h2>
              <p className="max-w-2xl mx-auto mb-8 text-lg">
                We're dedicated to promoting clean energy solutions and supporting Tanzania's
                transition to a sustainable future through innovative electrical solutions.
              </p>
              <Link
                href="/sustainability"
                className="inline-block bg-green-500 text-efta px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
              >
                Learn About Our Green Initiative
              </Link>
            </motion.div>
          </div>
        </section>
      </Scale>

      {/* Partners Section */}
      <ScrollReveal>
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="container mx-auto px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center mb-12 text-efta-dark dark:text-white">
              Our Partners & Certifications
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              {partners.map((partner, index) => (
                <motion.div
                  key={partner.name}
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="flex items-center justify-center p-6"
                >
                  <Image
                    src={partner.logo}
                    alt={partner.name}
                    width={160}
                    height={80}
                    className="max-h-16 w-auto grayscale hover:grayscale-0 transition-all"
                  />
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </ScrollReveal>
    </PageTransition>
  )
}

const ServiceCard = ({ icon, title, description, index = 0 }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{
        duration: 0.5,
        delay: index * 0.2,
        type: "spring",
        stiffness: 100,
        damping: 15
      }}
      whileHover={{ 
        scale: 1.02,
        transition: { type: "spring", stiffness: 400 }
      }}
      className="bg-white dark:bg-gray-900 p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow"
    >
      <motion.div 
        initial={{ scale: 0.8 }} 
        animate={{ scale: 1 }}
        transition={{ delay: (index * 0.2) + 0.3 }}
        className="text-efta mb-6"
      >
        {icon}
      </motion.div>
      <h3 className="text-xl font-semibold mb-4 text-efta-dark dark:text-white">{title}</h3>
      <p className="text-gray-600 dark:text-gray-400">{description}</p>
    </motion.div>
  )
}

const projects = [
  {
    title: "Industrial Power Installation",
    image: "/images/projects/industrial.webp",
    category: "Electrical Infrastructure"
  },
  {
    title: "Solar Mini-Grid Project",
    image: "/images/projects/solar.jpg",
    category: "Renewable Energy"
  },
  {
    title: "Smart Building Integration",
    image: "/images/projects/smart.webp",
    category: "Building Automation"
  }
]

const partners = [
  {
    name: "CRB Tanzania",
    logo: "/images/partners/crb.png"
  },
  {
    name: "TANESCO",
    logo: "/images/partners/tanesco.png"
  },
  {
    name: "REA Tanzania",
    logo: "/images/partners/rea.gif"
  },
  {
    name: "EWURA",
    logo: "/images/partners/ewura.jpg"
  }
]