'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import { HiLightningBolt, HiAcademicCap, HiUserGroup, HiSparkles } from 'react-icons/hi'

export default function CareersPage() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.4, 0.0, 0.2, 1]
      }
    }
  }

  // Job openings data
  const currentOpenings = [
    {
      title: "Electrical Engineer",
      location: "Dar es Salaam",
      type: "Full-Time",
      requirements: [
        "Bachelor's degree in Electrical Engineering",
        "5+ years of experience in power systems",
        "Strong knowledge of electrical codes and standards",
        "Project management experience"
      ]
    },
    {
      title: "Solar Installation Technician",
      location: "Arusha",
      type: "Contract",
      requirements: [
        "Technical certification in solar installation",
        "3+ years hands-on experience",
        "Valid driver's license",
        "Safety certifications"
      ]
    },
    {
      title: "Procurement Officer",
      location: "Mwanza",
      type: "Full-Time",
      requirements: [
        "Bachelor's degree in Supply Chain or related field",
        "3+ years procurement experience",
        "Experience with renewable energy equipment",
        "Strong negotiation skills"
      ]
    }
  ]

  const benefits = [
    {
      icon: HiLightningBolt,
      title: "Impact-Driven Work",
      description: "Your contributions help build a greener, more reliable energy future for Tanzania"
    },
    {
      icon: HiAcademicCap,
      title: "Growth Opportunities",
      description: "We invest in training, mentorship, and continuous professional development"
    },
    {
      icon: HiUserGroup,
      title: "Inclusive Culture",
      description: "We foster a workplace of collaboration, integrity, and mutual respect"
    },
    {
      icon: HiSparkles,
      title: "Innovation & Excellence",
      description: "Be part of a team that values creativity and technical mastery"
    }
  ]

  return (
    <div className="min-h-screen my-20 bg-gray-50">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-auto">
          <Image 
            src="/images/hero.webp"
            alt="EFTA Careers"
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-black/60" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-6xl font-bold text-white mb-6"
            >
              Empower Your Future. Power Tanzania.
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-lg md:text-xl text-gray-200 mb-8 leading-relaxed"
            >
              At EFTA Investments Company, we don't just offer jobs — we offer purpose. 
              We are on a mission to drive sustainable energy solutions and revolutionize Tanzania's electrical landscape. 
              Join a team where your expertise lights up homes, energizes communities, and empowers the country's future.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              <a 
                href="#opportunities"
                className="inline-block bg-green-300 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-green-950 transition-all duration-300 hover:scale-105"
              >
                View Open Positions
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Why Work With Us
              </h2>
              <div className="w-20 h-1 bg-green-300 mx-auto"></div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={benefit.title}
                  variants={itemVariants}
                  className="bg-white rounded-lg p-6 shadow-soft hover:shadow-md transition-shadow duration-300"
                >
                  <div className="w-12 h-12 bg-green-300/10 rounded-lg flex items-center justify-center mb-4">
                    <benefit.icon className="w-6 h-6 text-green-bg-green-300" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Current Openings Section */}
      <section id="opportunities" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
            className="max-w-7xl mx-auto"
          >
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Current Openings
              </h2>
              <div className="w-20 h-1 bg-green-300 mx-auto mb-6"></div>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Join our team of passionate professionals working to transform Tanzania's energy sector
              </p>
            </div>

            <div className="grid gap-6">
              {currentOpenings.map((job, index) => (
                <motion.div
                  key={job.title}
                  variants={itemVariants}
                  className="bg-white rounded-lg p-6 shadow-soft hover:shadow-md transition-all duration-300"
                >
                  <div className="md:flex md:items-center md:justify-between">
                    <div className="mb-4 md:mb-0">
                      <h3 className="text-xl font-semibold text-gray-900 mb-1">
                        {job.title}
                      </h3>
                      <div className="flex items-center gap-4 text-gray-600">
                        <span>{job.location}</span>
                        <span>•</span>
                        <span>{job.type}</span>
                      </div>
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-flex items-center px-6 py-3 bg-green-300 text-white rounded-md hover:bg-green-950 transition-colors duration-300"
                      onClick={() => window.location.href = `mailto:careers@efta.co.tz?subject=Application for ${job.title}`}
                    >
                      Apply Now
                    </motion.button>
                  </div>

                  <div className="mt-4">
                    <h4 className="text-sm font-semibold text-gray-700 mb-2">Requirements:</h4>
                    <ul className="list-disc list-inside space-y-1 text-gray-600">
                      {job.requirements.map((req, idx) => (
                        <li key={idx}>{req}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-green-950 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-green-300">
              We're building the future of energy.
              <br />
              Come build it with us.
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Didn't find your role? We're always looking for passionate individuals.
              Send your CV and let us know how you can contribute.
            </p>
            <motion.a
              href="mailto:careers@efta.co.tz"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-block bg-green-300 text-white px-8 py-4 rounded-md text-lg font-semibold hover:bg-green-950 transition-all duration-300"
            >
              Join Our Team
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}