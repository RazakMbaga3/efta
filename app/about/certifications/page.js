'use client';

import Image from 'next/image';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef, useState } from 'react';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1, 
    transition: { duration: 0.5 } 
  }
};

const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1, 
    transition: { duration: 0.4, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.07
    }
  }
};

const cardVariant = {
  hidden: { opacity: 0, y: 15 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.4,
      ease: "easeOut" 
    }
  },
  hover: { 
    y: -5, 
    boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)",
    transition: { 
      duration: 0.2 
    }
  }
};

export default function CertificationsPage() {
  const parallaxRef = useRef(null);
  const [hoveredCard, setHoveredCard] = useState(null);
  
  const { scrollYProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  const certifications = [
    {
      title: "ISO 9001:2015",
      description: "Quality Management System certification ensuring consistent delivery of high-quality electrical services.",
      image: "/images/certifications/iso-9001.png",
      issuer: "Bureau Veritas",
      validUntil: "2026"
    },
    {
      title: "ISO 45001:2018",
      description: "Occupational Health and Safety certification for electrical work environments.",
      image: "/images/certifications/iso-45001.png",
      issuer: "Bureau Veritas",
      validUntil: "2026"
    },
    {
      title: "IEC 61215",
      description: "International standard for photovoltaic (PV) module design qualification and type approval.",
      image: "/images/certifications/iec-61215.png",
      issuer: "TÜV SÜD",
      validUntil: "2025"
    },
    {
      title: "TBS Certification",
      description: "Tanzania Bureau of Standards certification for electrical installations.",
      image: "/images/certifications/tbs.png",
      issuer: "TBS",
      validUntil: "2026"
    }
  ];

  const standards = [
    {
      category: "Electrical Safety",
      items: [
        "IEC 60364 - Electrical Installations",
        "IEC 61439 - Low-voltage switchgear",
        "IEC 62305 - Lightning protection",
        "TZS 932 - Electrical safety standards"
      ]
    },
    {
      category: "Renewable Energy",
      items: [
        "IEC 61730 - PV module safety qualification",
        "IEC 62109 - Safety of power converters",
        "IEC 61400 - Wind turbines design requirements",
        "TZS 1438 - Solar PV systems"
      ]
    },
    {
      category: "Building Automation",
      items: [
        "ISO 16484 - Building automation systems",
        "BACnet Standards",
        "KNX Standards",
        "TZS 2095 - Building management systems"
      ]
    }
  ];

  const qualityCommitments = [
    {
      title: "Technical Excellence",
      description: "Our engineers maintain professional certifications and stay updated with the latest industry standards.",
      icon: "🎓"
    },
    {
      title: "Safety Compliance",
      description: "Rigorous adherence to international and local safety standards in all installations.",
      icon: "⚡"
    },
    {
      title: "Quality Assurance",
      description: "Comprehensive testing and validation procedures for all electrical systems.",
      icon: "✓"
    },
    {
      title: "Environmental Standards",
      description: "Commitment to renewable energy and sustainable practices.",
      icon: "🌱"
    }
  ];

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="bg-gray-50"
    >
      {/* Compact Banner with Parallax Effect */}
      <div className="relative h-40 md:h-48 w-full overflow-hidden" ref={parallaxRef}>
      <Image 
      src="/images/certifications/CERTIMG.jpg" 
      alt="Certification Quality Assurance" 
      fill
      className="object-cover"
    />
        <div className="absolute inset-0 bg-black/40"></div>
        {/* Page title */}
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-white mx-auto mt-12 px-4 relative z-10 text-center">
              <h1 className="text-4xl font-bold text-white">
                CERTIFICATIONS
              </h1>
            </div>
          </motion.div>
        </div>
        
        {/* Abstract shapes for visual interest */}
        <motion.div 
          className="absolute bottom-0 right-0 w-64 h-64" 
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 0.7, scale: 1 }}
          transition={{ duration: 0.8 }}
        >
          <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" className="w-full h-full text-white/10 fill-current">
            <path d="M37.5,-48.1C49.3,-40.9,60.1,-30.8,65.3,-18.1C70.4,-5.3,69.9,10.1,63.5,22.1C57.1,34.1,44.8,42.8,31.7,48.9C18.5,55,4.6,58.4,-10.2,58.8C-24.9,59.1,-40.5,56.3,-48.2,46.8C-55.9,37.2,-55.7,20.9,-57.4,4.7C-59,-11.5,-62.4,-27.7,-56.5,-38.7C-50.6,-49.7,-35.3,-55.5,-21.5,-61.5C-7.7,-67.4,4.6,-73.6,15.4,-69.5C26.2,-65.4,25.7,-55.2,37.5,-48.1Z" transform="translate(100 100)" />
          </svg>
        </motion.div>
      </div>

      <div className="container mx-auto px-4 max-w-6xl py-6">
        {/* Certifications Accordion Sections */}
        <motion.div variants={staggerContainer} className="space-y-6">
          {certifications.map((certification, index) => (
            <motion.div 
              key={index} 
              variants={cardVariant}
              whileHover="hover"
              className="bg-white rounded-sm shadow-sm overflow-hidden p-4 flex items-center"
            >
              <div className="relative h-16 w-16 mr-4 flex-shrink-0">
                <Image 
                  src={certification.image} 
                  alt={certification.title}
                  width={64}
                  height={64}
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="text-lg font-bold text-nyati-navy">{certification.title}</h3>
                <p className="text-sm text-gray-600">{certification.description}</p>
                <p className="text-xs text-gray-500">Issued by: {certification.issuer} | Valid until: {certification.validUntil}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Standards Section */}
        <motion.div variants={staggerContainer} className="space-y-6 mt-8">
          {standards.map((standard, index) => (
            <motion.section 
              key={index} 
              variants={fadeIn}
              className="bg-white rounded-sm shadow-sm overflow-hidden"
            >
              <motion.h2 
                variants={slideUp} 
                className="text-lg font-bold text-white bg-nyati-navy p-3 md:p-4"
              >
                {standard.category}
              </motion.h2>
              <motion.ul 
                variants={staggerContainer}
                className="p-3 md:p-4 space-y-2"
              >
                {standard.items.map((item, itemIndex) => (
                  <motion.li 
                    key={itemIndex} 
                    variants={slideUp}
                    className="text-sm text-gray-600"
                  >
                    {item}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.section>
          ))}
        </motion.div>

        {/* Quality Commitments Section */}
        <motion.div variants={staggerContainer} className="space-y-6 mt-8">
          {qualityCommitments.map((commitment, index) => (
            <motion.div 
              key={index} 
              variants={cardVariant}
              whileHover="hover"
              className="bg-white rounded-sm shadow-sm overflow-hidden p-4 flex items-center"
            >
              <div className="text-3xl mr-4">{commitment.icon}</div>
              <div>
                <h3 className="text-lg font-bold text-nyati-navy">{commitment.title}</h3>
                <p className="text-sm text-gray-600">{commitment.description}</p>
              </div>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Banner Image */}
        <motion.section 
          variants={fadeIn}
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
        >
          <div className="relative w-full h-32 md:h-48 rounded-sm overflow-hidden">
            <Image 
              src="/images/certifications/CERTIMG.jpg" 
              alt="Certification Quality Assurance" 
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-nyati-navy/50 to-transparent flex items-center">
              <div className="p-6 md:p-8">
                <h3 className="text-white font-bold text-xl md:text-2xl mb-2">Quality Assurance</h3>
                <p className="text-white/90 text-sm md:text-base max-w-md">Our certifications demonstrate our commitment to maintaining the highest standards in all our operations.</p>
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </motion.div>
  );
}