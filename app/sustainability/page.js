'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { HiLightBulb, HiSun, HiChartBar, HiGlobe } from 'react-icons/hi'

export default function SustainabilityPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/sustainability/renewable-energy.jpg"
            alt="EFTA Sustainability"
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
              <h5 className="text-efta-500 font-medium mb-3 tracking-wider">ECO-FRIENDLY SOLUTIONS</h5>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Powering a <span className="text-efta-500">Sustainable</span> <br />
                <span className="text-efta-500">Future</span> for Tanzania
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl"
            >
              Our commitment to sustainable electrical solutions and renewable energy 
              technologies that protect our planet while powering progress.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#approach" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-efta-500 hover:bg-efta-600 transition duration-300">
                Our Approach
              </a>
              <a href="/contact" className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition duration-300">
                Get Involved
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
              <h3 className="text-3xl font-bold text-efta-500">30%</h3>
              <p className="text-white text-sm">Carbon Reduction</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-efta-500">100+</h3>
              <p className="text-white text-sm">Green Projects</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-efta-500">5MW+</h3>
              <p className="text-white text-sm">Solar Installed</p>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Our Approach */}
      <section id="approach" className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Our Sustainable Approach</h2>
              <p className="text-gray-600 dark:text-gray-400 mb-6">
                At EFTA Investments, sustainability is at the core of everything we do. We believe 
                in implementing electrical solutions that not only meet today's needs but also 
                safeguard tomorrow's resources. Our approach combines innovative technology with 
                environmental responsibility.
              </p>
              <div className="space-y-4">
                {sustainabilityPoints.map((point, index) => (
                  <div key={point.title} className="flex items-start gap-4">
                    <div className="text-efta mt-1">{point.icon}</div>
                    <div>
                      <h3 className="font-semibold mb-1">{point.title}</h3>
                      <p className="text-gray-600 dark:text-gray-400">{point.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="relative h-[400px] rounded-lg overflow-hidden">
                <Image
                  src="/images/sustainability/renewable-energy.jpg"
                  alt="Sustainable Energy Solutions"
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Environmental Impact</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Through our sustainable electrical solutions and renewable energy initiatives, 
              we've made significant strides in reducing environmental impact.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {impactStats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-8 rounded-lg text-center"
              >
                <div className="text-4xl font-bold text-efta mb-4">{stat.value}</div>
                <div className="text-xl font-semibold mb-2">{stat.title}</div>
                <p className="text-gray-600 dark:text-gray-400">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Initiatives */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Green Initiatives</h2>
          <div className="grid md:grid-cols-2 gap-8">
            {initiatives.map((initiative, index) => (
              <motion.div
                key={initiative.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="relative h-[300px] group overflow-hidden rounded-lg"
              >
                <Image
                  src={initiative.image}
                  alt={initiative.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <div className="absolute bottom-0 p-6 text-white">
                  <h3 className="text-xl font-bold mb-2">{initiative.title}</h3>
                  <p className="text-gray-200">{initiative.description}</p>
                  <ul className="mt-4 space-y-1">
                    {initiative.stats?.map((stat, idx) => (
                      <li key={idx} className="text-sm">
                        <span className="font-bold">{stat.value}</span> {stat.label}
                      </li>
                    ))}
                  </ul>
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
            <h2 className="text-3xl font-bold mb-6">Join Us in Creating a Sustainable Future</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Learn how our sustainable electrical solutions can help your business reduce its 
              environmental impact while improving efficiency.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-green-300 text-efta px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Get Started Today
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const sustainabilityPoints = [
  {
    title: "Energy Efficiency Solutions",
    description: "Implementation of smart electrical systems and energy-efficient technologies to reduce consumption.",
    icon: <HiLightBulb className="h-6 w-6" />
  },
  {
    title: "Renewable Energy Focus",
    description: "Commitment to solar power and other renewable energy solutions for a cleaner future.",
    icon: <HiSun className="h-6 w-6" />
  },
  {
    title: "Energy Management",
    description: "Advanced monitoring and control systems to optimize energy usage and reduce waste.",
    icon: <HiChartBar className="h-6 w-6" />
  },
  {
    title: "Environmental Responsibility",
    description: "Sustainable practices in all our operations and promotion of eco-friendly solutions.",
    icon: <HiGlobe className="h-6 w-6" />
  }
]

const impactStats = [
  {
    value: "500+",
    title: "Solar Installations",
    description: "Renewable energy systems installed across Tanzania"
  },
  {
    value: "40%",
    title: "Energy Reduction",
    description: "Average energy savings for our clients"
  },
  {
    value: "10,000+",
    title: "CO₂ Reduction",
    description: "Metric tons of CO₂ emissions prevented annually"
  }
]

const initiatives = [
  {
    title: "Renewable Energy Solutions",
    description: "Leading Tanzania's transition to clean energy through solar power installations and energy storage solutions.",
    stats: [
      { value: "50+", label: "MW Solar Installed" },
      { value: "30%", label: "Carbon Reduction" },
      { value: "1000+", label: "Homes Powered" }
    ],
    image: "/images/sustainability/solar-panels.jpg"
  },
  {
    title: "Energy Efficiency",
    description: "Implementing smart building solutions and energy management systems to optimize power consumption.",
    stats: [
      { value: "40%", label: "Energy Savings" },
      { value: "100+", label: "Buildings Optimized" },
      { value: "25%", label: "Cost Reduction" }
    ],
    image: "/images/sustainability/smart-building.webp"
  },
  {
    title: "Community Impact",
    description: "Empowering rural communities through electrification projects and technical training programs.",
    stats: [
      { value: "20+", label: "Communities Served" },
      { value: "500+", label: "Jobs Created" },
      { value: "10K+", label: "Lives Impacted" }
    ],
    image: "/images/sustainability/community.jpg"
  }
]

const sustainabilityInitiatives = [
  {
    title: "Renewable Energy Solutions",
    description: "Leading the transition to clean energy through solar power installations and smart grid technologies",
    metrics: {
      installationsCompleted: 200,
      mwInstalled: 50,
      co2Reduced: "1000 tonnes annually"
    },
    icon: "☀️"
  },
  {
    title: "Energy Efficiency",
    description: "Implementing energy-efficient systems and smart building solutions to reduce power consumption",
    metrics: {
      projectsCompleted: 150,
      energySaved: "30% average reduction",
      buildingsOptimized: 75
    },
    icon: "⚡"
  },
  {
    title: "Waste Management",
    description: "Responsible disposal and recycling of electrical equipment and materials",
    metrics: {
      materialsRecycled: "95%",
      wasteReduced: "70%",
      programsImplemented: 10
    },
    icon: "♻️"
  }
]

const environmentalGoals = [
  {
    year: 2025,
    goals: [
      "100MW of renewable energy installations",
      "50% reduction in operational carbon footprint",
      "Zero waste to landfill from operations"
    ]
  },
  {
    year: 2030,
    goals: [
      "250MW of renewable energy installations",
      "Carbon neutral operations",
      "100% renewable energy use in facilities"
    ]
  }
]

const sustainabilityPrograms = {
  communityEngagement: [
    "Solar power for schools program",
    "Renewable energy education initiatives",
    "Community energy access projects"
  ],
  environmentalProtection: [
    "E-waste recycling program",
    "Green building certifications",
    "Biodiversity protection initiatives"
  ],
  sustainableOperations: [
    "Electric vehicle fleet transition",
    "Energy-efficient facilities",
    "Sustainable supply chain management"
  ]
}

const impactMetrics = {
  renewable: {
    solarInstallations: 200,
    renewableEnergyGenerated: "50,000 MWh",
    co2Emissions: "25,000 tonnes reduced"
  },
  efficiency: {
    buildingsOptimized: 75,
    energySavings: "30%",
    clientCostReduction: "25%"
  },
  social: {
    jobsCreated: 150,
    communitiesBenefited: 25,
    trainingPrograms: 10
  }
}