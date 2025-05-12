'use client'

import { useState, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import Newsletter from '@/app/components/ui/Newsletter'
import Button from '../../components/ui/Button'

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

const bulletPoint = {
  hidden: { opacity: 0, x: -10 },
  visible: { 
    opacity: 1, 
    x: 0,
    transition: { duration: 0.3, ease: "easeOut" }
  }
};

export default function EnhancedCSRPage() {
  // Refs for scroll animations
  const contentRef = useRef(null);
  const parallaxRef = useRef(null);

  // Scroll progress for parallax effect
  const { scrollYProgress: parallaxProgress } = useScroll({
    target: parallaxRef,
    offset: ["start start", "end start"]
  });
  
  // Transform for parallax movement
  const y = useTransform(parallaxProgress, [0, 1], [0, 100]);

  const csrInitiatives = [
    {
      title: "RURAL ELECTRIFICATION",
      description: "We bring sustainable power solutions to underserved communities through innovative solar mini-grid installations and renewable energy projects.",
      bullets: [
        { icon: "🌞", text: "Installation of solar mini-grids in rural areas" },
        { icon: "💡", text: "LED lighting programs for schools and healthcare facilities" },
        { icon: "🏥", text: "Power solutions for rural healthcare centers" }
      ],
      image: "/images/aboutus/rural.png",
      altText: "Rural electrification project"
    },
    {
      title: "ENVIRONMENT",
      description: "Our commitment to environmental sustainability is demonstrated through:",
      bullets: [
        { icon: "♻️", text: "Promoting renewable energy adoption" },
        { icon: "💡", text: "Energy efficiency programs and consulting" },
        { icon: "🌱", text: "Green energy education initiatives" }
      ],
      image: "/images/aboutus/environment.png",
      altText: "Environmental sustainability"
    },
    {
      title: "COMMUNITY DEVELOPMENT",
      description: "We support local communities through:",
      bullets: [
        { icon: "📚", text: "Technical training programs for youth" },
        { icon: "🤝", text: "Local business energy solutions" },
        { icon: "👥", text: "Community energy awareness programs" }
      ],
      image: "/images/aboutus/community.png",
      altText: "Community development"
    }
  ];

  // News articles data
  const newsArticles = [
    {
      id: 1,
      title: "EFTA Launches Solar Initiative for Rural Schools",
      excerpt: "EFTA Investments provides solar power systems to rural schools, improving access to education through reliable electricity.",
      date: "2024-03-25",
      image: "/images/news/solar-school.jpg",
      category: "csr",
      pillar: "education",
      featured: true
    },
    {
      id: 2,
      title: "Technical Training Program Empowers Youth",
      excerpt: "EFTA's technical training program provides practical skills in electrical engineering and renewable energy to young Tanzanians.",
      date: "2024-02-15",
      image: "/images/news/training.jpg",
      category: "csr",
      pillar: "education"
    },
    {
      id: 3,
      title: "EFTA Supports Healthcare with Clean Energy",
      excerpt: "Rural healthcare facilities receive reliable power through EFTA's solar energy solutions program.",
      date: "2024-01-20",
      image: "/images/news/healthcare.jpg",
      category: "csr",
      pillar: "health",
      featured: true
    }
  ];

  // Impact metrics
  const impactMetrics = [
    {
      number: "50+",
      label: "Rural Communities Powered",
      description: "Communities benefiting from our sustainable energy solutions"
    },
    {
      number: "1000+",
      label: "Students Trained",
      description: "Youth trained in electrical and renewable energy technologies"
    },
    {
      number: "25+",
      label: "Healthcare Facilities",
      description: "Medical centers equipped with reliable power solutions"
    },
    {
      number: "500+",
      label: "Green Energy Projects",
      description: "Sustainable energy installations completed"
    }
  ];

  // Sort articles by date (newest first)
  const sortedArticles = [...newsArticles].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  // Format date for consistency
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div ref={contentRef} className="min-h-screen bg-gray-50">
      {/* Parallax Banner */}
      <div className="relative h-40 w-full overflow-hidden" ref={parallaxRef}>
        <motion.div 
          style={{ y }}
          className="absolute inset-0 w-full h-full"
        >
          <Image 
            src="/images/aboutus/csr.jpg" 
            alt="CSR Banner" 
            fill
            priority
            className="object-cover"
          />
          <div className="absolute inset-0 bg-black/40"></div>
        </motion.div>
        
        {/* Page title on banner */}
        <div className="relative ">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="container text-white mx-auto py-12 text-centre  z-10 relative px-4">
              <h1 className="text-3xl relative  font-bold text-white">
                <span>CSR</span> INITIATIVES
              </h1>
            </div>
          </motion.div>
        </div>
      </div>

      {/* CSR Initiatives Section */}
      <div className="container mx-auto px-4 max-w-6xl py-16">
        <motion.div
          variants={fadeIn}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-nyati-green mb-4">
            Our Approach to Corporate Social Responsibility
          </h2>
          <p className="text-gray-700 max-w-4xl mx-auto">
            We believe that our success is intrinsically linked to the well-being of the communities 
            we serve. Our CSR initiatives are designed to create sustainable, meaningful impact 
            across multiple dimensions of social and environmental development.
          </p>
        </motion.div>

        {/* Initiatives Grid */}
        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {csrInitiatives.map((initiative, index) => (
            <motion.div 
              key={index}
              variants={cardVariant}
              whileHover="hover"
              className="bg-white rounded-xl shadow-soft overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-xl font-bold text-nyati-navy mb-4">{initiative.title}</h3>
                <p className="text-gray-700 mb-6">{initiative.description}</p>
                
                <ul className="space-y-3 mb-6">
                  {initiative.bullets.map((bullet, i) => (
                    <li key={i} className="flex items-start">
                      <span className="mr-3 text-2xl text-nyati-orange">{bullet.icon}</span>
                      <span 
                        className="text-gray-700" 
                        dangerouslySetInnerHTML={{ __html: bullet.text }}
                      />
                    </li>
                  ))}
                </ul>

                <div className="relative h-40 w-full">
                  <Image 
                    src={initiative.image}
                    alt={initiative.altText}
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Impact Stories Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-gray-50 py-4"
      >
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-6">
            <h2 className="text-3xl font-bold text-nyati-green mb-4">
              Our Recent Impact Stories
            </h2>
            <p className="text-gray-700 max-w-3xl mx-auto">
              Discover how we're making a difference through our ongoing corporate social 
              responsibility initiatives across education, healthcare, environment, and community development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {sortedArticles.slice(0, 3).map((article) => (
              <motion.div 
                key={article.id}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-soft overflow-hidden"
              >
                <div className="relative h-52 overflow-hidden">
                  <Image 
                    src={article.image} 
                    alt={article.title} 
                    fill
                    className="object-cover group-hover:scale-105 transition-transform"
                  />
                  <div className="absolute top-0 right-0 m-3">
                    <span className="bg-nyati-green text-white text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                      {article.pillar}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <div className="text-xs text-gray-500 mb-2">
                    {formatDate(article.date)}
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-nyati-green line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <Link 
                    href={`/news/${article.id}`}
                    className="inline-flex items-center text-nyati-orange font-medium hover:text-nyati-orange/80 text-sm transition-colors"
                  >
                    Read More
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              href="/news/csr"
              intent="green"
              size="md"
            >
              View All Impact Stories
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
              </svg>
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Get Involved Section */}
      <motion.section
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="bg-white py-6"
      >
        <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-2">
          <h2 className="text-3xl font-bold text-nyati-green mb-4">
            Get Involved
          </h2>
          <p className="text-gray-700 max-w-3xl mx-auto">
            We believe in the power of collective action. Join us in our mission to create 
            sustainable impact and meaningful change in the communities we serve.
          </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-gray-50 rounded-xl shadow-soft p-8"
          >
            <div className="w-16 h-16 bg-nyati-green/10 rounded-full flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nyati-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-nyati-navy mb-2">
              Partnership Opportunities
            </h3>
            <p className="text-gray-700 mb-2">
              Explore ways to collaborate with us on meaningful CSR projects. 
              We welcome partnerships that drive sustainable development and create lasting community impact.
            </p>
            <Button 
              href="/contact"
              intent="primary"
              size="md"
            >
              Become a Partner
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </Button>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            className="bg-gray-50 rounded-xl shadow-soft p-8"
          >
            <div className="w-16 h-16 bg-nyati-green/10 rounded-full flex items-center justify-center mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nyati-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold text-nyati-navy mb-2">
              Support Our Initiatives
            </h3>
            <p className="text-gray-700 mb-2">
              Stay informed about our ongoing CSR projects and discover how you can contribute 
              to our mission of creating positive change in education, healthcare, and community development.
            </p>
            <Button 
              href="/news"
              intent="green"
              size="md"
            >
              Subscribe to Updates
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Button>
          </motion.div>
        </div>
      </motion.section>

      {/* Newsletter Section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="mb-12"
      >
        <Newsletter />
      </motion.div>

      {/* Bottom decorative element */}
      <div className="flex justify-center mb-8">
        <div className="w-32 h-1 bg-gradient-to-r from-nyati-green via-nyati-orange to-nyati-navy rounded-full"></div>
      </div>
    </div>
  )
}