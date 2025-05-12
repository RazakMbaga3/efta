'use client'

import { motion, useScroll, useTransform } from 'framer-motion'
import { useRef, useState } from 'react'
import Image from 'next/image'
import ProductCard from '@/app/components/ui/ProductCard'
import KeyFeatureCard from '@/app/components/ui/KeyFeatureCard'
import PackagingOption from '@/app/components/sections/PackagingOption'
import Link from 'next/link'
import { 
  HiLightningBolt, 
  HiSun, 
  HiChip, 
  HiOfficeBuilding,
  HiLightBulb,
  HiScale,
  HiCube,
  HiSupport,
  HiDocumentReport
} from 'react-icons/hi'

// Product data
const products = {
  categories: [
    {
      name: "Power Distribution",
      products: [
        {
          title: "High Voltage Switchgear",
          description: "Industrial-grade switchgear for reliable power distribution",
          features: [
            "Voltage ratings up to 36kV",
            "Smart monitoring capabilities",
            "Arc-resistant design",
            "Remote operation ready"
          ]
        },
        {
          title: "Transformers",
          description: "Energy-efficient transformers for various applications",
          features: [
            "Distribution transformers",
            "Power transformers",
            "Smart grid compatible",
            "Low-loss design"
          ]
        }
      ]
    },
    {
      name: "Renewable Energy",
      products: [
        {
          title: "Solar Power Systems",
          description: "Complete solar energy solutions for residential and commercial use",
          features: [
            "High-efficiency panels",
            "Smart inverters",
            "Battery storage options",
            "Monitoring systems"
          ]
        },
        {
          title: "Wind Energy Solutions",
          description: "Wind power systems for sustainable energy generation",
          features: [
            "Wind turbines",
            "Grid integration systems",
            "Power conversion units",
            "Remote monitoring"
          ]
        }
      ]
    },
    {
      name: "Industrial Automation",
      products: [
        {
          title: "Control Systems",
          description: "Advanced control and automation solutions",
          features: [
            "PLC systems",
            "SCADA integration",
            "Process automation",
            "Safety systems"
          ]
        },
        {
          title: "Motor Control Centers",
          description: "Efficient motor control and protection systems",
          features: [
            "Variable frequency drives",
            "Soft starters",
            "Protection relays",
            "Energy monitoring"
          ]
        }
      ]
    },
    {
      name: "Energy Management",
      products: [
        {
          title: "Smart Metering",
          description: "Intelligent energy monitoring and management solutions",
          features: [
            "Advanced metering infrastructure",
            "Real-time monitoring",
            "Data analytics",
            "Remote management"
          ]
        },
        {
          title: "Power Quality Solutions",
          description: "Equipment for maintaining power quality standards",
          features: [
            "Harmonic filters",
            "Power factor correction",
            "Surge protection",
            "UPS systems"
          ]
        }
      ]
    }
  ],
  services: {
    installation: {
      title: "Professional Installation",
      description: "Expert installation services by certified technicians",
      includes: [
        "Site assessment",
        "System design",
        "Installation",
        "Testing and commissioning"
      ]
    },
    maintenance: {
      title: "Maintenance Programs",
      description: "Comprehensive maintenance and support services",
      includes: [
        "Preventive maintenance",
        "Emergency repairs",
        "Performance monitoring",
        "System upgrades"
      ]
    },
    training: {
      title: "Technical Training",
      description: "Training programs for operation and maintenance",
      includes: [
        "System operation",
        "Safety procedures",
        "Troubleshooting",
        "Maintenance protocols"
      ]
    }
  },
  certifications: [
    "IEC Certified",
    "ISO 9001:2015",
    "CE Marking",
    "Energy Star Partner"
  ],
  warranty: {
    standard: "2-year standard warranty",
    extended: "Optional extended warranty up to 5 years",
    coverage: [
      "Manufacturing defects",
      "Material defects",
      "Technical support",
      "Replacement parts"
    ]
  }
};

const specifications = {
  standards: [
    "IEC Standards",
    "IEEE Standards",
    "National Electrical Code",
    "Local regulations compliance"
  ],
  testing: [
    "Factory acceptance testing",
    "Site acceptance testing",
    "Performance verification",
    "Safety certification"
  ],
  quality: {
    processes: [
      "Quality control inspections",
      "Performance testing",
      "Documentation",
      "Traceability"
    ],
    certifications: [
      "ISO 9001:2015",
      "ISO 14001:2015",
      "OHSAS 18001",
      "Product-specific certifications"
    ]
  }
};

// Key features data
const keyFeatures = [
  {
    icon: '/images/products/Superior.png',
    title: 'Superior Performance'
  },
  {
    icon: '/images/products/workability.png',
    title: 'Enhanced Workability'
  },
  {
    icon: '/images/products/compressive.png',
    title: 'High Final Compressive Strength'
  },
  {
    icon: '/images/products/mechanical.png',
    title: 'High Mechanical Strength'
  },
  {
    icon: '/images/products/adhesion.png',
    title: 'Superior Adhesion'
  }
];

// Applications data updated to match the blog card layout
const applications = [
  {
    title: 'Electrical Contracting',
    description: 'EFTA provides comprehensive electrical contracting services for commercial, industrial, and residential projects, ensuring safe and efficient electrical installations.',
    image: '/images/products/electrical.jpg',
  },
  {
    title: 'Solar Solutions',
    description: 'Our renewable energy division delivers cutting-edge solar power solutions, from rooftop installations to large-scale solar farms.',
    image: '/images/products/solar.jpg'
  },
  {
    title: 'Building Automation',
    description: 'State-of-the-art building automation systems that enhance efficiency, comfort, and security in modern buildings.',
    image: '/images/products/automation.jpg',
  },
  {
    title: 'Energy Management',
    description: 'Comprehensive energy management solutions that optimize consumption and reduce operational costs.',
    image: '/images/products/energy.jpg',
  },
  {
    title: 'System Integration',
    description: 'Seamless integration of various building systems for enhanced control and efficiency.',
    image: '/images/products/integration.jpg'
  },
  {
    title: 'Smart Solutions',
    description: 'Innovative smart building solutions that leverage IoT and automation for improved building performance.',
    image: '/images/products/smart.jpg',
  },
];

// Packaging options data
const packagingOptions = [
  {
    image: '/images/ALLNYATIBAGS.webp',
    title: '50 Kg Bags',
    description: 'Standard packaging ideal for small to medium projects. Easy to handle, transport, and store on any construction site.'
  },
  {
    image: '/images/products/jumbo.png',
    title: '1.5 Ton Jumbo Bags',
    description: 'Efficient solution for medium to large projects, reducing handling time and packaging waste while increasing productivity.'
  },
  {
    image: '/images/products/bulker1.png',
    title: 'Bulk Tankers',
    description: 'Perfect for large-scale projects, providing maximum efficiency with direct delivery to silos, eliminating packaging completely.'
  }
];

// Service packages data
const servicePackages = [
  {
    image: '/images/services/electrical.webp',
    title: 'Electrical Services',
    description: 'Complete electrical contracting services from design to implementation and maintenance.'
  },
  {
    image: '/images/services/renewable.webp',
    title: 'Renewable Energy',
    description: 'Solar power solutions including design, installation, and maintenance of PV systems.'
  },
  {
    image: '/images/services/automation.webp',
    title: 'Building Automation',
    description: 'Smart building solutions incorporating advanced control and monitoring systems.'
  }
];

// Product categories data
const productCategories = [
  {
    title: "Industrial Electrical Solutions",
    products: [
      {
        name: "Power Distribution Systems",
        description: "Complete power distribution solutions for industrial facilities",
        features: [
          "Switchgear and control panels",
          "Transformers and substations",
          "Circuit breakers and protection devices",
          "Power factor correction systems"
        ],
        applications: "Manufacturing plants, warehouses, commercial buildings"
      },
      {
        name: "Motor Control Centers",
        description: "Advanced motor control and automation systems",
        features: [
          "Variable frequency drives",
          "Soft starters",
          "Protection relays",
          "Remote monitoring capabilities"
        ],
        applications: "Industrial processes, HVAC systems, water treatment"
      }
    ],
    icon: "⚡"
  },
  {
    title: "Renewable Energy Systems",
    products: [
      {
        name: "Solar Power Solutions",
        description: "Complete solar power systems for commercial and industrial use",
        features: [
          "High-efficiency solar panels",
          "Grid-tie inverters",
          "Battery storage systems",
          "Monitoring and control systems"
        ],
        applications: "Commercial buildings, industrial facilities, solar farms"
      },
      {
        name: "Energy Storage Systems",
        description: "Advanced battery storage solutions for renewable energy",
        features: [
          "Lithium-ion battery banks",
          "Power conversion systems",
          "Energy management software",
          "Grid integration capabilities"
        ],
        applications: "Peak shaving, backup power, grid stabilization"
      }
    ],
    icon: "☀️"
  },
  {
    title: "Building Automation",
    products: [
      {
        name: "Smart Building Systems",
        description: "Integrated building management and automation solutions",
        features: [
          "Lighting control systems",
          "HVAC automation",
          "Access control integration",
          "Energy monitoring"
        ],
        applications: "Office buildings, hotels, shopping centers"
      },
      {
        name: "Energy Management Solutions",
        description: "Systems for monitoring and optimizing energy usage",
        features: [
          "Real-time energy monitoring",
          "Demand response capabilities",
          "Analytics and reporting",
          "Remote management"
        ],
        applications: "Commercial buildings, industrial facilities"
      }
    ],
    icon: "🏢"
  }
];

const services = {
  consulting: [
    "Energy audits and assessments",
    "System design and engineering",
    "Project feasibility studies",
    "ROI analysis"
  ],
  installation: [
    "Professional system installation",
    "Testing and commissioning",
    "Quality assurance",
    "Safety compliance"
  ],
  maintenance: [
    "Preventive maintenance",
    "Emergency repairs",
    "System upgrades",
    "Performance monitoring"
  ]
};

const certifications = [
  {
    name: "IEC Compliance",
    description: "All products meet International Electrotechnical Commission standards"
  },
  {
    name: "ISO 9001:2015",
    description: "Quality management system certification"
  },
  {
    name: "TBS Approved",
    description: "Tanzania Bureau of Standards certified products"
  }
];

const warrantyInfo = {
  standard: {
    duration: "2 years",
    coverage: [
      "Manufacturing defects",
      "Material quality",
      "System performance"
    ]
  },
  extended: {
    duration: "5 years",
    coverage: [
      "All standard warranty coverage",
      "Preventive maintenance",
      "System optimization",
      "Priority support"
    ]
  }
};

const technicalSpecs = {
  solar: {
    panels: "Tier-1 manufacturers, 400W-600W range",
    inverters: "String and central inverters, 98%+ efficiency",
    monitoring: "Web-based platform with mobile app",
    warranty: "25-year performance warranty"
  },
  automation: {
    protocols: "BACnet, KNX, Modbus compatible",
    controllers: "Industrial-grade PLCs",
    software: "Cloud-based management platform",
    support: "24/7 technical assistance"
  },
  power: {
    voltage: "Low and medium voltage solutions",
    protection: "IEC 61439 compliant switchgear",
    monitoring: "SCADA integration ready",
    certification: "TBS and IEC certified"
  }
};

const qualityStandards = [
  {
    category: "Product Quality",
    standards: [
      "IEC 61215 - Solar PV modules",
      "IEC 62109 - Power converters",
      "IEC 61439 - Switchgear",
      "ISO 9001:2015 - Quality management"
    ]
  },
  {
    category: "Safety Standards",
    standards: [
      "IEC 60364 - Electrical installations",
      "IEC 62305 - Lightning protection",
      "ISO 45001:2018 - Occupational safety",
      "Local electrical codes compliance"
    ]
  }
];

// Application card component redesigned to match the blog post format
const ApplicationCard = ({ application, index }) => {
  const [imageError, setImageError] = useState(false);
  
  return (
    <motion.div 
      className="bg-white rounded-sm shadow-md overflow-hidden h-full"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
      whileHover={{ y: -5, boxShadow: '0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.05)' }}
    >
      {/* Image Container with Category Overlay */}
      <div className="relative h-52 w-full overflow-hidden">
        {!imageError ? (
          <Image
            src={application.image}
            alt={application.title}
            fill
            className="object-cover"
            onError={() => {
              console.log(`Error loading image: ${application.image}`);
              setImageError(true);
            }}
          />
        ) : (
          <Image
            src={application.fallbackImage || '/images/products/fallback.jpg'}
            alt={application.title}
            fill
            className="object-cover"
            onError={() => {
              console.log(`Error loading fallback image`);
            }}
          />
        )}
      </div>
      
      {/* Content */}
      <div className="p-5">
        <h3 className="text-xl font-bold text-nyati-navy mb-2">{application.title}</h3>
        <p className="text-gray-600 text-sm mb-4">{application.description}</p>
      </div>
    </motion.div>
  );
};

export default function ServicesPage() {
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
                Comprehensive Electrical Solutions
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                From industrial power systems to renewable energy solutions, we deliver excellence 
                in every electrical project we undertake.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid gap-12">
            {mainServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="grid md:grid-cols-2 gap-8 items-center"
              >
                <div className={index % 2 === 0 ? 'order-1 md:order-1' : 'order-1 md:order-2'}>
                  <div className="relative h-[300px] rounded-lg overflow-hidden">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 0 ? 'order-2 md:order-2' : 'order-2 md:order-1'}>
                  <h2 className="text-3xl font-bold mb-4">{service.title}</h2>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <div className="text-efta mt-1">{feature.icon}</div>
                        <span className="text-gray-600 dark:text-gray-400">{feature.text}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Grid */}
      <section className="py-20 bg-gray-50 dark:bg-gray-800">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <h2 className="text-3xl font-bold mb-6">Additional Services</h2>
            <p className="text-gray-600 dark:text-gray-400">
              Supporting your electrical needs with comprehensive solutions
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-lg"
              >
                <div className="text-efta mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                <p className="text-gray-600 dark:text-gray-400">{service.description}</p>
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
            <h2 className="text-3xl font-bold mb-6">Ready to Start Your Project?</h2>
            <p className="max-w-2xl mx-auto mb-8">
              Contact us today to discuss your electrical needs and get a customized solution.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-efta px-8 py-3 rounded-lg hover:bg-gray-100 transition-colors font-semibold"
            >
              Request a Quote
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

const mainServices = [
  {
    title: "Electrical Contracting",
    description: "Comprehensive electrical solutions for industrial and commercial projects, ensuring safety, efficiency, and reliability in every installation.",
    image: "/images/services/electrical-contracting.jpg",
    features: [
      { icon: <HiLightningBolt className="h-5 w-5" />, text: "Power Installation & Distribution" },
      { icon: <HiOfficeBuilding className="h-5 w-5" />, text: "Commercial & Industrial Wiring" },
      { icon: <HiLightBulb className="h-5 w-5" />, text: "Lighting Systems & Controls" },
      { icon: <HiScale className="h-5 w-5" />, text: "Load Analysis & Power Factor Correction" }
    ]
  },
  {
    title: "Renewable Energy Solutions",
    description: "Sustainable energy solutions that help reduce your carbon footprint while ensuring reliable power supply for your operations.",
    image: "/images/services/renewable-energy.jpg",
    features: [
      { icon: <HiSun className="h-5 w-5" />, text: "Solar Mini-Grid Design & Installation" },
      { icon: <HiCube className="h-5 w-5" />, text: "Battery Storage Systems" },
      { icon: <HiChip className="h-5 w-5" />, text: "Smart Energy Management" },
      { icon: <HiDocumentReport className="h-5 w-5" />, text: "Energy Efficiency Audits" }
    ]
  }
]

const additionalServices = [
  {
    title: "Maintenance & Support",
    description: "Regular maintenance and 24/7 emergency support to keep your electrical systems running efficiently.",
    icon: <HiSupport className="h-8 w-8" />
  },
  {
    title: "Energy Auditing",
    description: "Comprehensive analysis of your energy usage patterns to identify optimization opportunities.",
    icon: <HiDocumentReport className="h-8 w-8" />
  },
  {
    title: "Equipment Supply",
    description: "High-quality electrical equipment and components from trusted manufacturers.",
    icon: <HiCube className="h-8 w-8" />
  }
]