'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { HiLightningBolt, HiSun, HiChip, HiOfficeBuilding } from 'react-icons/hi'

export default function ProjectsPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/electrical-contracting.png"
            alt="EFTA Projects"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h5 className="text-efta-500 font-medium mb-3 tracking-wider">FEATURED WORK</h5>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Our <span className="text-efta-500">Innovative</span> <br />
                <span className="text-efta-500">Projects</span> Portfolio
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl"
            >
              Discover how we're powering Tanzania's future through innovative electrical 
              solutions and sustainable energy projects.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#project-categories" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-efta-500 hover:bg-efta-600 transition duration-300">
                View Projects
              </a>
              <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition duration-300">
                Work With Us
              </a>
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
              <h3 className="text-3xl font-bold text-efta-500">200+</h3>
              <p className="text-white text-sm">Projects Completed</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-efta-500">15+</h3>
              <p className="text-white text-sm">Years Experience</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-efta-500">95%</h3>
              <p className="text-white text-sm">Repeat Clients</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Project Categories */}
      <section id="project-categories" className="py-24 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Our Expertise</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Explore our diverse range of electrical and renewable energy solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto">
            {categories.map((category, index) => (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 border border-gray-100"
              >
                <div className="text-efta-500 mb-6">{category.icon}</div>
                <h3 className="text-xl font-bold mb-3">{category.name}</h3>
                <p className="text-gray-600 dark:text-gray-400">
                  {category.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Projects</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Showcasing our most impactful electrical and renewable energy implementations
            </p>
          </div>
          <div className="grid gap-16 max-w-7xl mx-auto">
            {featuredProjects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid md:grid-cols-2 gap-12 items-center bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-lg"
              >
                <div className={index % 2 === 0 ? 'order-1' : 'order-1 md:order-2'}>
                  <div className="relative h-[400px] rounded-lg overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 0 ? 'order-2' : 'order-2 md:order-1'}>
                  <div className="space-y-4">
                    <div className="flex items-center gap-2">
                      <span className="px-3 py-1 text-sm font-medium bg-efta/10 text-efta rounded-full">
                        {project.category}
                      </span>
                      <span className="text-sm text-gray-500">{project.location}</span>
                    </div>
                    <h3 className="text-2xl font-bold">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400">
                      {project.description}
                    </p>
                    <ul className="space-y-2">
                      {project.highlights.map((highlight, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <svg className="w-5 h-5 text-efta mt-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                          </svg>
                          <span className="text-gray-600 dark:text-gray-400">{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">More Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-gray-50 dark:bg-gray-800 rounded-lg overflow-hidden"
              >
                <div className="relative h-48">
                  <Image
                    src={project.imageUrl}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center gap-2 mb-3">
                    <span className="px-3 py-1 text-sm font-medium bg-efta/10 text-efta rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    {project.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-gray-500">{project.completion}</span>
                  </div>
                </div>
              </motion.div>
            ))}
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
            <h2 className="text-3xl font-bold mb-6">Start Your Project with Us</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Whether you need industrial power solutions or sustainable energy systems, 
              we have the expertise to bring your project to life.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-efta px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Discuss Your Project
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const categories = [
  {
    name: "Industrial Solutions",
    description: "Power systems and electrical infrastructure for industrial facilities",
    icon: <HiLightningBolt className="h-8 w-8 mx-auto" />
  },
  {
    name: "Renewable Energy",
    description: "Solar power and sustainable energy solutions",
    icon: <HiSun className="h-8 w-8 mx-auto" />
  },
  {
    name: "Building Automation",
    description: "Smart building systems and controls",
    icon: <HiChip className="h-8 w-8 mx-auto" />
  },
  {
    name: "Commercial",
    description: "Electrical solutions for commercial properties",
    icon: <HiOfficeBuilding className="h-8 w-8 mx-auto" />
  }
]

const featuredProjects = [
  {
    title: "Dar es Salaam Industrial Park Power Infrastructure",
    category: "Industrial Solutions",
    location: "Dar es Salaam",
    description: "Complete electrical infrastructure implementation for a new industrial park, including power distribution systems, substations, and emergency backup solutions.",
    image: "/images/projects/industrial-park.jpg",
    highlights: [
      "High-capacity power distribution network",
      "Smart grid integration",
      "24/7 monitoring systems",
      "Emergency backup solutions"
    ]
  },
  {
    title: "Community Solar Mini-Grid Project",
    category: "Renewable Energy",
    location: "Dodoma Region",
    description: "Implementation of a solar mini-grid system providing reliable electricity to rural communities, including storage solutions and distribution network.",
    image: "/images/projects/project1.jpg",
    highlights: [
      "500kW solar installation",
      "Battery storage system",
      "Smart metering implementation",
      "Community training program"
    ]
  },
  {
    title: "Smart Office Complex Automation",
    category: "Building Automation",
    location: "Arusha",
    description: "Comprehensive building automation system implementation for a modern office complex, featuring energy management and smart controls.",
    image: "/images/projects/smartoffice.jpg",
    highlights: [
      "Intelligent lighting controls",
      "HVAC automation",
      "Energy monitoring system",
      "Security integration"
    ]
  }
]

const projects = [
  {
    title: "Solar Farm Installation - Tanzania",
    description: "50MW solar farm installation with advanced monitoring and control systems",
    category: "Renewable Energy",
    imageUrl: "/images/projects/solarfarm.jpg",
    completion: "2024"
  },
  {
    title: "Industrial Automation System - Manufacturing Plant",
    description: "Complete automation solution for a large manufacturing facility, including SCADA implementation",
    category: "Industrial Automation",
    imageUrl: "/images/projects/industrial.webp",
    completion: "2024"
  },
  {
    title: "Smart Grid Implementation - Urban District",
    description: "Smart grid technology deployment for improved power distribution and management",
    category: "Power Distribution",
    imageUrl: "/images/projects/smartgrid.jpg",
    completion: "2023"
  },
  {
    title: "Wind Farm Control Systems",
    description: "Advanced control and monitoring systems for offshore wind farm",
    category: "Renewable Energy",
    imageUrl: "/images/projects/wind.webp",
    completion: "2023"
  },
  {
    title: "Hospital Power Quality Enhancement",
    description: "Power quality improvement and backup power systems for major hospital",
    category: "Power Quality",
    imageUrl: "/images/projects/hospital.jpg",
    completion: "2023"
  }
]

const showcaseProjects = [
  {
    title: "Industrial Power Distribution",
    location: "Dar es Salaam Industrial Park",
    description: "Complete electrical infrastructure installation for a new industrial complex",
    scope: [
      "11KV substation installation",
      "Power distribution network",
      "Industrial lighting systems",
      "Emergency power backup"
    ],
    metrics: {
      completion: "2024",
      value: "$2.5M",
      area: "50,000 sq.m"
    },
    image: "/images/projects/industrial.webp"
  },
  {
    title: "Commercial Solar Installation",
    location: "Tanzanite Mall",
    description: "Large-scale solar power system for retail complex",
    scope: [
      "500kW rooftop solar installation",
      "Battery storage system",
      "Energy management system",
      "Grid integration"
    ],
    metrics: {
      completion: "2023",
      capacity: "500kW",
      savings: "40% energy cost reduction"
    },
    image: "/images/projects/solar.jpg"
  },
  {
    title: "Smart Building Implementation",
    location: "EFTA Tower",
    description: "Comprehensive building automation and energy management",
    scope: [
      "Building management system",
      "Smart lighting controls",
      "HVAC automation",
      "Energy monitoring"
    ],
    metrics: {
      completion: "2024",
      efficiency: "35% energy savings",
      coverage: "25 floors"
    },
    image: "/images/projects/smart.webp"
  }
];

const projectCategories = [
  {
    title: "Industrial",
    projects: [
      {
        name: "Manufacturing Plant Upgrade",
        location: "Mwanza",
        type: "Power Distribution",
        year: "2024"
      },
      {
        name: "Factory Automation",
        location: "Arusha",
        type: "Industrial Controls",
        year: "2023"
      }
    ]
  },
  {
    title: "Renewable Energy",
    projects: [
      {
        name: "Solar Farm Development",
        location: "Dodoma",
        type: "Solar Power",
        year: "2024"
      },
      {
        name: "Hybrid Power System",
        location: "Mtwara",
        type: "Solar + Storage",
        year: "2023"
      }
    ]
  },
  {
    title: "Commercial",
    projects: [
      {
        name: "Office Complex",
        location: "Dar es Salaam",
        type: "Building Automation",
        year: "2024"
      },
      {
        name: "Shopping Center",
        location: "Zanzibar",
        type: "Power + Automation",
        year: "2023"
      }
    ]
  }
];

const testimonials = [
  {
    client: "Tanzania Industrial Park",
    quote: "EFTA delivered a robust power distribution system that meets our complex industrial needs.",
    representative: "Operations Director",
    image: "/images/testimonials/industrial-park.jpg"
  },
  {
    client: "Tanzanite Mall",
    quote: "The solar installation has significantly reduced our energy costs and carbon footprint.",
    representative: "Facility Manager",
    image: "/images/testimonials/mall.jpg"
  }
];

const projectStats = {
  completed: "50+",
  ongoing: "15",
  countries: "5",
  satisfaction: "98%"
};

const features = [
  {
    icon: "🔋",
    title: "Renewable Energy",
    description: "Leading Tanzania's transition to sustainable energy with innovative solar and storage solutions."
  },
  {
    icon: "🏢",
    title: "Building Systems",
    description: "Smart building technologies that enhance efficiency, comfort, and security."
  },
  {
    icon: "⚡",
    title: "Electrical Excellence",
    description: "Expert electrical engineering services for commercial and industrial projects."
  },
  {
    icon: "🌱",
    title: "Sustainability Focus",
    description: "Committed to environmental stewardship through green energy solutions."
  }
]

const projectHighlights = [
  {
    title: "Renewable Energy Impact",
    metrics: [
      "15MW+ total solar capacity installed",
      "30,000+ homes powered by clean energy",
      "50,000+ tons CO2 emissions avoided",
      "100+ green jobs created"
    ]
  },
  {
    title: "Building Efficiency",
    metrics: [
      "40% average energy savings",
      "50+ buildings automated",
      "1 million+ sq ft smart space",
      "24/7 monitoring capability"
    ]
  },
  {
    title: "Industrial Solutions",
    metrics: [
      "100+ industrial sites upgraded",
      "99.9% power reliability achieved",
      "30% power cost reduction",
      "Zero major incidents"
    ]
  }
];

const projectPartners = [
  {
    name: "Tanzania Electric Supply Company",
    role: "Grid integration partner",
    projects: ["Solar farms", "Industrial power"]
  },
  {
    name: "Rural Energy Agency",
    role: "Rural electrification partner",
    projects: ["Mini-grids", "Community solar"]
  },
  {
    name: "Tanzania Investment Centre",
    role: "Development partner",
    projects: ["Industrial parks", "Commercial complexes"]
  }
];