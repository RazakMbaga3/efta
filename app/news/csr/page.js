'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import Newsletter from '@/app/components/ui/Newsletter'
import Button from '@/app/components/ui/Button'

export default function CSRNewsPage() {
  // State for parallax scrolling effect
  const [scrollY, setScrollY] = useState(0)
  // State for search functionality
  const [searchQuery, setSearchQuery] = useState('')
  // State for active CSR category
  const [activeCategory, setActiveCategory] = useState('all')
  // Ref for scroll animations
  const contentRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "end start"]
  })

  // Parallax and animation effects
  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.6, 1, 1])

  // Handle scroll for parallax effect
  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }
    
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Animation variants
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
    hidden: { y: 30, opacity: 0 },
    visible: { 
      y: 0, 
      opacity: 1,
      transition: { type: 'spring', stiffness: 300, damping: 25 }
    }
  }

  // CSR pillars for the category filter
  const csrPillars = [
    { id: 'all', name: 'All Initiatives', icon: 'M4 6h16M4 12h16M4 18h16' },
    { id: 'education', name: 'Education', icon: 'M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z M12 14l-6.16-3.422a12.083 12.083 0 00-.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 016.824-2.998 12.078 12.078 0 00-.665-6.479L12 14z' },
    { id: 'health', name: 'Healthcare', icon: 'M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z' },
    { id: 'environment', name: 'Environment', icon: 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z' },
    { id: 'community', name: 'Community', icon: 'M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4' }
  ];

  // Mock data for CSR news (filtered from main news data)
  const csrNewsArticles = [
    {
      id: 3,
      title: "EFTA Donates Cement for School Construction in Bagamoyo",
      excerpt: "EFTA demonstrates its commitment to education by donating 400 cement bags to the Bagamoyo District Commissioner for school construction, supporting local education infrastructure development.",
      date: "2024-01-25",
      image: "/images/news/5.jpg",
      category: "csr",
      pillar: "education",
      featured: true
    },
    {
      id: 5,
      title: "EFTA Organizes Successful Blood Donation Drive",
      excerpt: "EFTA demonstrates corporate social responsibility through an impactful blood donation drive at our factory. The initiative addresses critical blood supply shortages in Tanzania's healthcare system, highlighting our dedication to community health and wellbeing.",
      date: "2023-05-17",
      image: "/images/news/damu4.jpg",
      category: "csr",
      pillar: "health",
      link: "https://www.michuzi.co.tz/2017/05/efta-yachangia-damu-katika.html"
    },
    {
      id: 7,
      title: "EFTA Enhances Local School Infrastructure",
      excerpt: "As part of our ongoing commitment to education, EFTA has completed improvements to classrooms and sanitation facilities in three local schools, benefiting over 1,200 students in the community.",
      date: "2023-09-12",
      image: "/images/news/school-support.jpg",
      category: "csr",
      pillar: "education"
    },
    {
      id: 8,
      title: "Environmental Conservation Program Launched by Lake Cement",
      excerpt: "Lake Cement has launched a comprehensive environmental conservation program that includes tree planting, waste management initiatives, and environmental education for local communities.",
      date: "2023-08-05",
      image: "/images/news/environmental-program.jpg",
      category: "csr",
      pillar: "environment",
      featured: true
    },
    {
      id: 9,
      title: "Nyati Cement Hands Over Kigamboni Bus Terminal",
      excerpt: "Nyati Cement has officially handed over the newly constructed Kigamboni Bus Terminal to the District Commissioner. The company invested 46 million shillings in this infrastructure project, demonstrating its commitment to supporting community development.",
      date: "2022-11-08",
      image: "/images/news/kigamboni-terminal.jpg",
      category: "csr",
      pillar: "community",
      featured: true,
      link: "https://www.michuzi.co.tz/2022/11/nyati-cement-wakabidhi-stendi-ya-kigamboni.html"
    }
  ];

  // Sort articles by date (newest first)
  const sortedArticles = [...csrNewsArticles].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  // Filter articles based on search query and category
  const filteredArticles = sortedArticles.filter(article => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = activeCategory === 'all' || article.pillar === activeCategory;
    return matchesSearch && matchesCategory;
  });

  // Get featured articles
  const featuredArticles = filteredArticles.filter(article => article.featured);

  // Format date for consistency
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

  return (
    <div ref={contentRef} className="min-h-screen bg-gray-50">
      {/* Hero section with parallax effect */}
      <section className="relative h-60 md:h-72 lg:h-80 overflow-hidden">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ y, opacity }}
        >
          <div className="absolute inset-0 bg-efta-green opacity-90 z-10"></div>
          <div className="absolute inset-0 bg-[url('/images/news/csr-banner.jpg')] bg-cover bg-center z-0"></div>
          
          <motion.div 
            className="absolute top-1/3 right-10 w-64 h-64 bg-efta-navy/10 rounded-full blur-xl"
            animate={{ 
              scale: [1, 1.1, 1],
              x: [0, 10, 0],
            }}
            transition={{ 
              duration: 6,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
        </motion.div>
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <h1 className="text-white text-4xl md:text-5xl font-bold mb-3 font-futura">
                CSR INITIATIVES
              </h1>
              <div className="h-1 w-32 bg-white mb-4"></div>
              <p className="text-white/90 text-sm md:text-base max-w-xl">
                Discover how EFTA is making a positive impact in our communities through sustainable development and social responsibility programs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="pt-10 pb-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-efta-green text-2xl md:text-3xl font-bold mb-4 font-futura">COMMUNITY IMPACT</h2>
            <p className="text-gray-700">
              At EFTA, we believe in giving back to our communities. Our CSR initiatives focus on education, healthcare, environmental conservation, and sustainable development across Tanzania.
            </p>
          </motion.div>
          
          {/* Rest of the CSR news content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-efta-green text-2xl md:text-3xl font-bold mb-4 font-futura">BUILDING STRONGER COMMUNITIES</h2>
            <p className="text-gray-700">
              At EFTA, we believe in giving back to the communities where we operate. Our corporate social responsibility initiatives focus on education, healthcare, environmental conservation, and community development. Through strategic partnerships and targeted programs, we strive to create meaningful and lasting positive impact.
            </p>
          </motion.div>
          
          {/* Search and Filter Bar - NEW SECTION */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-white rounded-xl shadow-soft p-4 mb-10 flex flex-col md:flex-row justify-between items-center gap-4"
          >
            {/* Search Input */}
            <div className="relative w-full md:w-auto flex-grow max-w-md">
              <input
                type="text"
                placeholder="Search CSR initiatives..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-nyati-green/50"
              />
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </div>
            
            {/* Category Filters */}
            <div className="flex flex-wrap justify-center gap-2">
              {csrPillars.map((pillar) => (
                <Button 
                  key={pillar.id}
                  onClick={() => setActiveCategory(pillar.id)}
                  intent={activeCategory === pillar.id ? "green" : "white"}
                  size="sm"
                  className="flex items-center"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={pillar.icon} />
                  </svg>
                  {pillar.name}
                </Button>
              ))}
            </div>
            
            {/* Link to All News */}
            <Button 
              href="/news" 
              intent="dark"
              size="sm"
              className="shrink-0"
            >
              <span className="flex items-center">
                All News
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                </svg>
              </span>
            </Button>
          </motion.div>
          
          {/* Featured CSR Initiatives */}
          {featuredArticles.length > 0 && (
            <motion.section
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="mb-16"
            >
              <div className="flex items-center mb-8">
                <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gray-200"></div>
                <h2 className="text-2xl font-bold text-nyati-green px-6 flex items-center font-futura">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5h14M5 12h14m-7-7v14" />
                  </svg>
                  FEATURED INITIATIVES
                </h2>
                <div className="h-px flex-grow bg-gradient-to-l from-transparent to-gray-200"></div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredArticles.slice(0, 2).map((article) => (
                  <motion.div 
                    key={article.id}
                    variants={itemVariants}
                    className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-md transition-all duration-300 group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative h-64 overflow-hidden">
                      <motion.div 
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.4 }}
                        className="w-full h-full"
                      >
                        <Image 
                          src={article.image} 
                          alt={article.title} 
                          fill
                          className="object-cover transition-transform group-hover:scale-105"
                        />
                      </motion.div>
                      <div className="absolute top-0 right-0 m-4">
                        <span className="bg-nyati-green text-white text-xs px-3 py-1 rounded-full uppercase font-semibold tracking-wide">
                          {article.pillar}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-gray-500 mb-2">
                        {formatDate(article.date)}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-nyati-green group-hover:text-nyati-orange transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {article.excerpt}
                      </p>
                      {article.link ? (
                        <Button
                          as="a" 
                          href={article.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          intent="text"
                          size="sm"
                          className="group"
                        >
                          Read More
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Button>
                      ) : (
                        <Button
                          href={`/news/${article.id}`}
                          intent="text"
                          size="sm"
                          className="group"
                        >
                          Read More
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
          
          {/* All CSR Initiatives Grid */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gray-200"></div>
              <h2 className="text-2xl font-bold text-nyati-green px-6 flex items-center font-futura">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                {activeCategory === 'all' ? 'ALL CSR INITIATIVES' : `${csrPillars.find(p => p.id === activeCategory)?.name.toUpperCase()} INITIATIVES`}
              </h2>
              <div className="h-px flex-grow bg-gradient-to-l from-transparent to-gray-200"></div>
            </div>
            
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <motion.div 
                    key={article.id}
                    variants={itemVariants}
                    className="bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-md transition-all duration-300 group"
                    whileHover={{ y: -5 }}
                  >
                    <div className="relative h-52 overflow-hidden">
                      <Image 
                        src={article.image} 
                        alt={article.title} 
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <div className="absolute top-0 right-0 m-3">
                        <span className="bg-nyati-green text-white text-xs px-2 py-1 rounded-full uppercase font-semibold tracking-wide">
                          {article.pillar}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="text-xs text-gray-500 mb-2">
                        {formatDate(article.date)}
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-nyati-green group-hover:text-nyati-orange transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      {article.link ? (
                        <Button
                          as="a" 
                          href={article.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          intent="text"
                          size="sm"
                          className="group"
                        >
                          Read More
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </Button>
                      ) : (
                        <Button
                          href={`/news/${article.id}`}
                          intent="text"
                          size="sm"
                          className="group"
                        >
                          Read More
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Button>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center p-10 bg-gray-50 rounded-lg">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-700 mb-2">No CSR initiatives found</h3>
                <p className="text-gray-500">Try adjusting your search criteria</p>
              </div>
            )}
          </motion.section>
          
          {/* Our Impact Stats Section */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gray-200"></div>
              <h2 className="text-2xl font-bold text-nyati-green px-6 flex items-center font-futura">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                OUR IMPACT
              </h2>
              <div className="h-px flex-grow bg-gradient-to-l from-transparent to-gray-200"></div>
            </div>
            
            <div className="bg-white rounded-xl shadow-soft overflow-hidden p-6">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                <div className="text-center p-4">
                  <div className="bg-nyati-green/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nyati-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-nyati-green mb-2">15+</h3>
                  <p className="text-gray-600">Schools Supported</p>
                </div>
                
                <div className="text-center p-4">
                  <div className="bg-nyati-green/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nyati-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-nyati-green mb-2">5,000+</h3>
                  <p className="text-gray-600">Community Members Impacted</p>
                </div>
                
                <div className="text-center p-4">
                  <div className="bg-nyati-green/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nyati-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-nyati-green mb-2">500+</h3>
                  <p className="text-gray-600">Blood Donations</p>
                </div>
                
                <div className="text-center p-4">
                  <div className="bg-nyati-green/10 w-16 h-16 mx-auto rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-nyati-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z" />
                    </svg>
                  </div>
                  <h3 className="text-3xl font-bold text-nyati-green mb-2">10,000+</h3>
                  <p className="text-gray-600">Trees Planted</p>
                </div>
              </div>
            </div>
          </motion.section>
          
          {/* Get Involved - NEW SECTION */}
          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gray-200"></div>
              <h2 className="text-2xl font-bold text-nyati-green px-6 flex items-center font-futura">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 4a2 2 0 114 0v1a1 1 0 001 1h3a1 1 0 011 1v3a1 1 0 01-1 1h-1a2 2 0 100 4h1a1 1 0 011 1v3a1 1 0 01-1 1h-3a1 1 0 01-1-1v-1a2 2 0 10-4 0v1a1 1 0 01-1 1H7a1 1 0 01-1-1v-3a1 1 0 00-1-1H4a2 2 0 110-4h1a1 1 0 001-1V7a1 1 0 011-1h3a1 1 0 001-1V4z" />
                </svg>
                GET INVOLVED
              </h2>
              <div className="h-px flex-grow bg-gradient-to-l from-transparent to-gray-200"></div>
            </div>
            
            <div className="bg-white rounded-xl shadow-soft overflow-hidden">
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-8">
                  <h3 className="text-xl font-bold mb-4 text-nyati-green">Education & Healthcare</h3>
                  <p className="text-gray-700 mb-4">
                    Join us in making a difference through education and healthcare initiatives. Together, we can create lasting positive change in our communities.
                  </p>
                  <Button 
                    onClick={() => setActiveCategory('education')}
                    intent="primary"
                    size="md"
                  >
                    Join Our Mission
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </Button>
                </div>
                <div className="bg-nyati-green/5 p-8">
                  <h3 className="text-xl font-bold mb-4 text-nyati-green">Stay Connected</h3>
                  <p className="text-gray-700 mb-4">
                    Keep up with our latest CSR initiatives, events, and opportunities to get involved.
                  </p>
                  <Button 
                    href="/contact"
                    intent="green"
                    size="md"
                  >
                    Contact Us
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </Button>
                </div>
              </div>
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
            <div className="w-32 h-1 bg-gradient-to-r from-nyati-green to-nyati-orange rounded-full"></div>
          </div>
        </div>
      </main>
    </div>
  )
}