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
    transition: { duration: 0.5, ease: "easeOut" }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1
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

// Component for compact info cards
const CompactInfoCard = ({ title, imageSrc, description, linkPath, index }) => {
  return (
    <motion.div
      variants={cardVariant}
      whileHover="hover"
      className="bg-white rounded-sm overflow-hidden shadow-md flex flex-col h-full"
    >
      <div className="relative h-32 overflow-hidden">
        <Image 
          src={imageSrc} 
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-nyati-navy/80 to-transparent">
          <div className="absolute bottom-3 left-3">
            <h3 className="text-white font-bold text-lg">{title}</h3>
          </div>
        </div>
      </div>
      <div className="p-3 flex-grow">
        <p className="text-sm text-gray-700">{description}</p>
        <motion.a 
          href={linkPath}
          className="mt-2 text-nyati-orange text-sm font-medium inline-block"
          whileHover={{ x: 5 }}
        >
          Learn more &rarr;
        </motion.a>
      </div>
    </motion.div>
  );
};

// Core Values Card Component
const CoreValueCard = ({ icon, title, description }) => {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div
      variants={cardVariant}
      whileHover="hover"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="bg-white rounded-sm overflow-hidden shadow-md relative group"
    >
      <div className={`p-5 transition-all duration-300 ${isHovered ? 'bg-nyati-light-orange bg-opacity-5' : ''}`}>
        <div className="flex mb-3">
          <div className="w-12 h-12 bg-nyati-orange/10 rounded-sm flex items-center justify-center mr-3">
            <span className="text-nyati-orange text-xl">{icon}</span>
          </div>
          <h3 className="text-lg font-bold text-nyati-navy self-center">{title}</h3>
        </div>
        
        <div className={`transition-all duration-300 ${isHovered ? 'max-h-60 opacity-100' : 'max-h-0 opacity-0'} overflow-hidden`}>
          <p className="text-sm text-nyati-navy">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

// Advantage Item Component
const AdvantageItem = ({ title, description, index }) => {
  return (
    <motion.div
      variants={cardVariant}
      whileHover="hover"
      className="bg-white rounded-sm overflow-hidden shadow-sm"
    >
      <div className="flex items-center">
        <div className="bg-nyati-orange w-2 self-stretch"></div>
        <div className="w-12 h-12 flex items-center justify-center">
          <span className="text-nyati-orange text-lg font-bold">{index + 1}</span>
        </div>
        <div className="p-3">
          <h3 className="text-nyati-navy font-bold">{title}</h3>
          <p className="text-xs text-gray-600">{description}</p>
        </div>
      </div>
    </motion.div>
  );
};

export default function AboutPage() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 150]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0.5]);
  
  const [activeVisionMission, setActiveVisionMission] = useState(null);

  const advantages = [
    {
      title: "Integrated Manufacturing",
      description: "Full control over production process ensures consistent quality and reliability."
    },
    {
      title: "Own Power for Uninterrupted Production",
      description: "10MW thermal power plant guarantees continuous operations independent of grid issues."
    },
    {
      title: "Own Clinker",
      description: "In-house clinker production maintains quality control from raw materials to final product."
    },
    {
      title: "Consistent Quality",
      description: "Rigorous testing at every stage ensures our cement meets the highest standards every time."
    },
    {
      title: "Better Energy-Efficiency",
      description: "Modern equipment and processes minimize energy consumption and reduce environmental impact."
    },
    {
      title: "Enhanced Sustainability",
      description: "Commitment to sustainable practices in production and community engagement."
    }
  ];

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="bg-gray-50"
    >
      {/* Compact Banner with Parallax Effect */}
      <div className="relative h-52 md:h-64 w-auto overflow-hidden" ref={ref}>
        <motion.div
          style={{ y, opacity }}
          className="absolute inset-0 w-full h-full"
        >
          <Image 
            src="/images/aboutus/m.webp" 
            alt="About-us Banner"
            fill 
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-nyati-navy/80 via-nyati-navy/40 to-transparent flex items-center">
            <div className="container mx-auto px-4">
              <h1 className="text-white text-3xl md:text-4xl font-bold max-w-lg">Building Tanzania with Excellence</h1>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Main Content */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            variants={fadeIn}
            className="mb-8"
          >
            <motion.div className="flex items-center mb-4">
              <motion.h1 
                variants={slideUp}
                className="text-nyati-orange text-2xl md:text-3xl font-bold"
              >
                ABOUT US
              </motion.h1>
              <div className="h-px flex-grow bg-gray-200 ml-4"></div>
            </motion.div>
            
            <motion.div 
              variants={staggerContainer}
              className="space-y-2 mb-8 bg-white p-6 rounded-sm shadow-sm"
            >
              <motion.p 
                variants={slideUp}
                className="text-sm md:text-base"
              >
                EFTA Investments is a specialist in electrical engineering and renewable energy solutions with state-of-the-art facilities and expertise. Our operations are located in the Dar es Salaam region, serving clients throughout Tanzania and East Africa.
              </motion.p>
              <motion.p 
                variants={slideUp}
                className="text-sm md:text-base"
              >
                EFTA Investments is a leading electrical engineering and renewable energy solutions provider in Tanzania, specializing in comprehensive electrical installations, solar power solutions, and building automation systems. Our state-of-the-art operations and experienced team enable us to deliver cutting-edge electrical solutions that power progress while protecting our planet.
              </motion.p>
            </motion.div>

            {/* Enhanced Mission & Vision Section */}
            <motion.div 
              variants={fadeIn}
              className="mb-12"
            >
              <div className="grid md:grid-cols-2 gap-6">
                <motion.div 
                  variants={cardVariant}
                  whileHover="hover"
                  onMouseEnter={() => setActiveVisionMission('mission')}
                  onMouseLeave={() => setActiveVisionMission(null)}
                  className={`transition-all duration-300 rounded-sm overflow-hidden shadow-md ${activeVisionMission === 'mission' ? 'bg-nyati-navy' : 'bg-white'}`}
                >
                  <div className="p-6">
                    <h2 className={`font-bold text-xl mb-1 ${activeVisionMission === 'mission' ? 'text-nyati-orange' : 'text-nyati-orange'}`}>
                      OUR MISSION
                    </h2>
                    <p className={`text-sm transition-colors duration-300 ${activeVisionMission === 'mission' ? 'text-white' : 'text-gray-700'}`}> 
                      To deliver innovative electrical and renewable energy solutions that power progress while protecting our planet, through excellence in engineering, sustainable practices, and exceptional service.
                    </p>
                  </div>
                </motion.div>
                <motion.div 
                  variants={cardVariant}
                  whileHover="hover"
                  onMouseEnter={() => setActiveVisionMission('vision')}
                  onMouseLeave={() => setActiveVisionMission(null)}
                  className={`transition-all duration-300 rounded-sm overflow-hidden shadow-md ${activeVisionMission === 'vision' ? 'bg-nyati-orange' : 'bg-white'}`}
                >
                  <div className="p-6">
                    <h2 className={`font-bold text-xl mb-1 ${activeVisionMission === 'vision' ? 'text-white' : 'text-nyati-navy'}`}>
                      OUR VISION
                    </h2>
                    <p className={`text-sm transition-colors duration-300 ${activeVisionMission === 'vision' ? 'text-white' : 'text-gray-700'}`}>
                      To become Tanzania's leading provider of sustainable electrical and renewable energy solutions, driving the nation's transition to clean energy while creating lasting value for all stakeholders
                    </p>
                  </div>
                </motion.div>
              </div>
            </motion.div>
            
            {/* Core Values Section */}
            <motion.div
              variants={fadeIn}
              className="mb-12"
            >
              <div className="text-center mb-6">
                <h2 className="text-2xl font-bold text-nyati-navy">Our Core Values</h2>
              </div>
              
              <div className="grid md:grid-cols-4 gap-4">
                <CoreValueCard 
                  icon="⚖️"
                  title="Excellence"
                  description="We strive for excellence in every project, maintaining the highest standards of quality and professionalism in our work."
                />
                <CoreValueCard 
                  icon="🤝"
                  title="Innovation"
                  description="We embrace innovative technologies and solutions to address modern energy challenges and drive sustainable development."
                />
                <CoreValueCard 
                  icon="🔒"
                  title="Reliability"
                  description="We are committed to being a reliable partner, delivering consistent quality service that our clients can depend on."
                />
                <CoreValueCard 
                  icon="👥"
                  title="Sustainability"
                  description="We are dedicated to promoting sustainable energy solutions that benefit both our clients and the environment."
                />
              </div>
            </motion.div>
            
            {/* EFTA Advantage Section */}
            <motion.div
              variants={fadeIn}
              className="mb-12"
            >
              <div className="bg-nyati-navy p-6 rounded-sm shadow-md mb-6">
                <h2 className="text-xl font-bold text-white mb-1">THE EFTA ADVANTAGE</h2>
              </div>
              
              <div className="grid md:grid-cols-3 gap-3">
                {advantages.map((advantage, index) => (
                  <AdvantageItem 
                    key={index}
                    title={advantage.title}
                    description={advantage.description}
                    index={index}
                  />
                ))}
              </div>
            </motion.div>

            {/* Info Cards Section */}
            <motion.div 
              variants={staggerContainer}
              className="grid md:grid-cols-3 gap-4"
            >
              <CompactInfoCard 
                title="OUR FACILITIES"
                imageSrc="/images/aboutus/facilities.jpg"
                description="State-of-the-art electrical engineering facilities equipped with advanced testing and implementation capabilities."
                linkPath="/about/facilities"
                index={0}
              />
              
              <CompactInfoCard 
                title="CSR"
                imageSrc="/images/aboutus/csr.jpg"
                description="Our commitment to community development through sustainable energy initiatives and technical education programs."
                linkPath="/about/csr"
                index={1}
              />
              
              <CompactInfoCard 
                title="CODE OF CONDUCT"
                imageSrc="/images/aboutus/conduct.jpg"
                description="Our commitment to ethical business practices and professional standards in all our operations."
                linkPath="/about/code-of-conduct"
                index={2}
              />
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}