'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { HiUsers, HiLightBulb, HiShieldCheck, HiSparkles } from 'react-icons/hi'

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-b from-efta-light/10 to-white dark:from-efta-dark dark:to-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Pioneering Sustainable Electrical Solutions
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                EFTA Investments Company is Tanzania's leading provider of electrical contracting 
                and renewable energy solutions, committed to powering progress while protecting our planet.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Founded with a vision to transform Tanzania's electrical infrastructure, EFTA Investments 
                Company has grown to become a trusted name in electrical contracting and renewable energy 
                solutions. Our journey began with a commitment to excellence and innovation in electrical 
                services.
              </p>
              <p className="text-gray-600 dark:text-gray-400 mb-4">
                Today, we are proud to be CRB-certified and recognized as a leader in providing comprehensive 
                electrical solutions that power businesses, illuminate communities, and drive sustainable 
                development across Tanzania.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative h-[400px]"
            >
              <Image
                src="/images/hero.webp"
                alt="EFTA Team"
                fill
                className="object-cover rounded-lg"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Core Values</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Our values guide every decision we make and every project we undertake.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <div className="text-efta mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{value.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision & Mission */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-efta/5 dark:bg-efta/10 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Our Vision</h3>
              <p className="text-gray-600 dark:text-gray-400">
                To contribute to a world where energy is efficient, clean, reliable, and sustainable, 
                powering progress while safeguarding our planet for future generations.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-efta/5 dark:bg-efta/10 p-8 rounded-lg"
            >
              <h3 className="text-2xl font-bold mb-4">Our Mission</h3>
              <p className="text-gray-600 dark:text-gray-400">
                To provide comprehensive and high-quality electrical services and renewable energy solutions, 
                fostering a just energy transition and empowering our clients with sustainable energy choices.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-efta text-white">
        <div className="container mx-auto px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold mb-6">Ready to Power Your Project?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Let's discuss how our electrical expertise and sustainable solutions can benefit your business.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-efta px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Get in Touch
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const values = [
  {
    title: "Excellence",
    description: "Delivering superior quality in every electrical solution and service we provide.",
    icon: <HiSparkles className="h-8 w-8" />
  },
  {
    title: "Innovation",
    description: "Embracing cutting-edge technology and sustainable practices in electrical engineering.",
    icon: <HiLightBulb className="h-8 w-8" />
  },
  {
    title: "Safety",
    description: "Ensuring the highest standards of safety in all our electrical installations and operations.",
    icon: <HiShieldCheck className="h-8 w-8" />
  },
  {
    title: "Customer Focus",
    description: "Understanding and exceeding our clients' electrical needs and expectations.",
    icon: <HiUsers className="h-8 w-8" />
  }
]

const companyProfile = {
  established: 2015,
  headquarters: "Dar es Salaam, Tanzania",
  employees: "100+",
  expertise: [
    "Industrial Electrical Systems",
    "Renewable Energy Solutions",
    "Building Automation",
    "Power Distribution",
    "Energy Management"
  ],
  certifications: [
    "ISO 9001:2015",
    "ISO 14001:2015",
    "OSHA Certified",
    "TBS Approved"
  ]
};

const milestones = [
  {
    year: 2015,
    title: "Company Founded",
    description: "EFTA Investments established as an electrical engineering solutions provider"
  },
  {
    year: 2017,
    title: "Renewable Energy Division",
    description: "Launched solar power solutions division"
  },
  {
    year: 2019,
    title: "ISO Certification",
    description: "Achieved ISO 9001:2015 certification for quality management"
  },
  {
    year: 2021,
    title: "Smart Building Solutions",
    description: "Introduced building automation and energy management systems"
  },
  {
    year: 2023,
    title: "Regional Expansion",
    description: "Extended operations to cover East African region"
  }
];

const expertise = [
  {
    area: "Industrial Solutions",
    capabilities: [
      "Power distribution systems",
      "Industrial automation",
      "Motor control centers",
      "Switchgear installation"
    ],
    icon: "⚡"
  },
  {
    area: "Renewable Energy",
    capabilities: [
      "Solar PV systems",
      "Energy storage solutions",
      "Grid integration",
      "Hybrid power systems"
    ],
    icon: "☀️"
  },
  {
    area: "Building Systems",
    capabilities: [
      "Building automation",
      "Smart lighting",
      "HVAC control",
      "Energy monitoring"
    ],
    icon: "🏢"
  }
];

const leadership = [
  {
    name: "John Smith",
    position: "Chief Executive Officer",
    expertise: "20+ years in electrical engineering",
    image: "/images/team/ceo.jpg"
  },
  {
    name: "Sarah Johnson",
    position: "Technical Director",
    expertise: "15+ years in renewable energy",
    image: "/images/team/technical-director.jpg"
  },
  {
    name: "Michael Chen",
    position: "Operations Manager",
    expertise: "12+ years in project management",
    image: "/images/team/operations-manager.jpg"
  }
];

const qualityCommitment = {
  title: "Quality & Excellence",
  description: "Our commitment to quality is reflected in every project we undertake",
  principles: [
    "Best-in-class engineering practices",
    "Rigorous quality control",
    "Continuous improvement",
    "Customer satisfaction focus"
  ]
};