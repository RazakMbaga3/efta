'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'

// Assume these components are properly implemented in your project
import NewsSlider from './components/NewsSlider'
import NewsGallery from './components/NewsGallery'
import Newsletter from '@/app/components/ui/Newsletter'

export default function NewsPage() {
  // State for parallax scrolling effect
  const [scrollY, setScrollY] = useState(0)
  // State for news category filtering
  const [activeCategory, setActiveCategory] = useState('all')
  // State for search functionality
  const [searchQuery, setSearchQuery] = useState('')
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

  // Mock data for the news (would be replaced with actual data in production)
  const newsCategories = [
    {
      name: "Company News",
      slug: "company",
      description: "Latest updates from EFTA Investments"
    },
    {
      name: "Renewable Energy",
      slug: "renewable-energy",
      description: "Solar power and sustainable energy developments"
    },
    {
      name: "Smart Buildings",
      slug: "smart-buildings",
      description: "Building automation and energy efficiency"
    },
    {
      name: "Industry Updates",
      slug: "industry",
      description: "Electrical engineering sector news"
    }
  ];

  const featuredNews = [
    {
      title: "EFTA Completes 5MW Solar Farm Installation",
      category: "Company News",
      date: "2025-05-01",
      description: "Major milestone achieved in renewable energy development with completion of industrial solar farm",
      image: "/images/news/solar-farm.jpg"
    },
    {
      title: "Smart Building Solutions Transform Office Efficiency",
      category: "Smart Buildings",
      date: "2025-04-15",
      description: "How building automation is revolutionizing workplace productivity and sustainability",
      image: "/images/news/smart-building.jpg"
    },
    {
      title: "Tanzania's Green Energy Future",
      category: "Industry Updates",
      date: "2025-04-01",
      description: "Government initiatives boost renewable energy adoption across industrial sector",
      image: "/images/news/green-energy.jpg"
    }
  ];

  const recentNews = [
    {
      title: "Rural Electrification Project Lights Up Communities",
      category: "Renewable Energy",
      date: "2025-03-20",
      description: "Solar mini-grid project brings reliable power to remote villages",
      image: "/images/news/rural-power.jpg"
    },
    {
      title: "EFTA Partners with International Energy Firms",
      category: "Company News",
      date: "2025-03-15",
      description: "Strategic partnerships to enhance renewable energy capabilities",
      image: "/images/news/partnership.jpg"
    },
    {
      title: "Energy Efficiency Standards Update",
      category: "Industry Updates",
      date: "2025-03-01",
      description: "New regulations drive adoption of energy-efficient technologies",
      image: "/images/news/standards.jpg"
    }
  ];

  const industryUpdates = [
    {
      title: "Electrical Engineering Sector Growth",
      category: "Industry",
      date: "2025-02-15",
      summary: "Analysis of Tanzania's expanding electrical engineering market",
      trends: [
        "Rising demand for renewable energy",
        "Smart building technology adoption",
        "Industrial automation growth",
        "Skilled workforce development"
      ]
    },
    {
      title: "Sustainable Energy Investment",
      category: "Industry",
      date: "2025-02-01", 
      summary: "Investment opportunities in Tanzania's green energy sector",
      trends: [
        "Solar power projects",
        "Energy storage solutions",
        "Grid modernization",
        "Rural electrification"
      ]
    }
  ];

  const newsArticles = [
    {
      id: 1,
      title: "Dar es Salaam Regional Commissioner Visits Lake Cement on Workers' Day",
      excerpt: "The Dar es Salaam Regional Commissioner, Hon. Chalamila, has announced upcoming inspections of workplaces, including factories, to assess employee relations and working conditions. Lake Cement welcomed this initiative as part of our commitment to maintaining excellent labor standards.",
      date: "2024-06-15",
      image: "/images/news/RC-Chalamila.png",
      category: "company",
      featured: true,
      tag: "Recent",
      link: "https://www.mwananchi.co.tz/mw/habari/kitaifa/ukaguzi-wa-haki-za-wafanyakazi-viwandani-waja--4659252"
    },
    {
      id: 2,
      title: "RC Chalamila Conducts Tour of Kigamboni District",
      excerpt: "Dar es Salaam Regional Commissioner Albert John Chalamila conducted an extensive tour of Kigamboni District to inspect various development projects and engage with community members. During his visit, he emphasized the government's commitment to infrastructure development and public service improvement.",
      date: "2024-05-15",
      image: "/images/news/chalamila.jpg",
      category: "company",
      featured: true,
      link: "https://dsm.go.tz/new/rc-chalamila-afanya-ziara-kigamboni"
    },
    {
      id: 3,
      title: "Nyati Cement Donates Cement Bags for School Construction",
      excerpt: "Nyati Cement Donates 400 bags to the Bagamoyo District Commissioner for the construction of School. Showing our commitment to CSR and support for education infrastructure development in local communities.",
      date: "2016-11-25",
      image: "/images/news/5.jpg",
      category: "csr",
      featured: true
    },    {
      id: 4,
      title: "Lake Cement Plants Trees in the Annual Ceremony",
      excerpt: "Lake Cement demonstrated its commitment to environmental sustainability through planting tress in the annual ceremony, which also featured employee recognition awards and team-building activities at the company's factory at Kimbiji.",
      date: "2022-07-26",
      image: "/images/news/env.webp",
      category: "company"
    },
    {
      id: 5,
      title: "Lake Cement Leads Blood Donation Drive to Save Lives",
      excerpt: "Lake Cement has demonstrated corporate social responsibility through an impactful blood donation drive at our factory. The initiative aims to address the critical shortage of blood supplies in Tanzania's healthcare system and highlights our dedication to community health and wellbeing.",
      date: "2017-05-17",
      image: "/images/news/damu4.jpg",
      category: "csr",
      link: "https://www.michuzi.co.tz/2017/05/lake-cement-yachangia-damu-katika.html"
    },
    {
      id: 6,
      title: "Prime Minister Majaliwa Assures Lake Cement of Government Support",
      excerpt: "During his visit to Lake Cement's state-of-the-art factory, Prime Minister Kassim Majaliwa praised our production quality and affirmed the government's commitment to supporting local manufacturers. The PM emphasized the importance of private sector investment in strengthening Tanzania's industrial capacity.",
      date: "2021-03-27",
      image: "/images/news/PM-Majaliwa.png",
      category: "company",
      link: "https://www.thecitizen.co.tz/tanzania/business/majaliwa-assures-investors-of-government-cooperation-2596696"
    },
    {
      id: 7,
      title: "Nyati Cement Hands Over Kigamboni Bus Terminal, Citizens Urged to Embrace Opportunities",
      excerpt: "Nyati Cement has officially handed over the newly constructed Kigamboni Bus Terminal to the District Commissioner. The company invested 46 million shillings in this infrastructure project, demonstrating its commitment to supporting President Samia Suluhu Hassan's efforts to bring essential services closer to citizens.",
      date: "2022-11-08",
      image: "/images/news/bs3.jpg",
      category: "csr",
      featured: true,
      tag: "Community Development",
      link: "https://www.michuzi.co.tz/2022/11/nyati-cement-wakabidhi-stendi-ya-kigamboni.html"
    }
  ];

  // Sort articles by date (newest first)
  const sortedArticles = [...newsArticles].sort((a, b) => 
    new Date(b.date) - new Date(a.date)
  );

  // Filter articles based on active category and search query
  const filteredArticles = sortedArticles.filter(article => {
    const matchesCategory = activeCategory === 'all' || article.category === activeCategory;
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                         article.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
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
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/news/RC-Chalamila.png"
            alt="EFTA News"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
          
          {/* Decorative Elements */}
          <motion.div 
            className="absolute top-1/3 right-10 w-64 h-64 bg-nyati-orange/10 rounded-sm blur-xl"
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
          
          <motion.div 
            className="absolute bottom-0 left-1/4 w-40 h-40 bg-nyati-green/10 rounded-sm blur-xl"
            animate={{ 
              scale: [1, 1.15, 1],
              y: [0, -10, 0],
            }}
            transition={{ 
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse" 
            }}
          />
        </div>
        
        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h5 className="text-efta-500 font-medium mb-3 tracking-wider">LATEST UPDATES</h5>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Industry <span className="text-efta-500">News</span> & <br />
                <span className="text-efta-500">Company</span> Updates
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl"
            >
              Stay informed about the latest developments in electrical engineering, 
              renewable energy, and company achievements.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#latest-news" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-efta-500 hover:bg-efta-600 transition duration-300">
                Latest News
              </a>
              <a href="/blog" className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition duration-300">
                Visit Our Blog
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
          <div className="grid grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-3xl font-bold text-efta-500">50+</h3>
              <p className="text-white text-sm">Press Releases</p>
            </div>
            <div className="text-center">
              <h3 className="text-3xl font-bold text-efta-500">24/7</h3>
              <p className="text-white text-sm">Industry Coverage</p>
            </div>
          </div>
        </motion.div>
      </section>

      <main className="pt-10 pb-20">
        <div className="container mx-auto px-4 max-w-7xl">
          {/* Introduction Section */}
          <motion.div
            id="latest-news"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="mb-10 text-center max-w-3xl mx-auto"
          >
            <h2 className="text-nyati-navy text-2xl md:text-3xl font-bold mb-4 font-futura">BUILDING STRONGER COMMUNITIES</h2>
            <p className="text-gray-700">
              Discover how Lake Cement is leading the industry with innovative technology, superior products, and meaningful community initiatives. Our news section showcases our commitment to excellence in everything we do.
            </p>
          </motion.div>
          
         
          {/* Featured News (Larger Cards) */}
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
                <h2 className="text-2xl font-bold text-nyati-navy px-6 flex items-center font-futura">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5h14M5 12h14m-7-7v14" />
                  </svg>
                  FEATURED NEWS
                </h2>
                <div className="h-px flex-grow bg-gradient-to-l from-transparent to-gray-200"></div>
              </div>
              
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {featuredArticles.slice(0, 2).map((article) => (
                  <motion.div 
                    key={article.id}
                    variants={itemVariants}
                    className="bg-white rounded-sm shadow-soft overflow-hidden hover:shadow-md transition-all duration-300 group"
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
                      {article.tag && (
                        <div className="absolute top-0 left-0 m-4">
                          <span className="bg-nyati-orange text-white text-xs px-3 py-1 rounded-sm uppercase font-semibold tracking-wide">
                            {article.tag}
                          </span>
                        </div>
                      )}
                      <div className="absolute top-0 right-0 m-4">
                        <span className={`text-white text-xs px-3 py-1 rounded-sm uppercase font-semibold tracking-wide ${
                          article.category === 'company' ? 'bg-nyati-navy' :
                          article.category === 'csr' ? 'bg-nyati-green' :
                          'bg-nyati-orange'
                        }`}>
                          {article.category === 'company' ? 'Company' :
                           article.category === 'csr' ? 'CSR' :
                           'Product'}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <div className="text-sm text-gray-500 mb-2">
                        {formatDate(article.date)}
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-nyati-navy group-hover:text-nyati-orange transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {article.excerpt}
                      </p>
                      {article.link ? (
                        <a 
                          href={article.link} 
                          target="_blank" 
                          rel="noopener noreferrer" 
                          className="inline-flex items-center text-nyati-orange font-medium hover:text-nyati-orange/80 transition-colors"
                        >
                          Read More
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                          </svg>
                        </a>
                      ) : (
                        <Link 
                          href={`/news/${article.id}`} 
                          className="inline-flex items-center text-nyati-orange font-medium hover:text-nyati-orange/80 transition-colors"
                        >
                          Read More
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                          </svg>
                        </Link>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.section>
          )}
          
          {/* All News Grid */}
          <motion.section
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center mb-8">
              <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gray-200"></div>
              <h2 className="text-2xl font-bold text-nyati-navy px-6 flex items-center font-futura">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2 text-nyati-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
                </svg>
                ALL NEWS
              </h2>
              <div className="h-px flex-grow bg-gradient-to-l from-transparent to-gray-200"></div>
            </div>
            
            {filteredArticles.length > 0 ? (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredArticles.map((article) => (
                  <motion.div 
                    key={article.id}
                    variants={itemVariants}
                    className="bg-white rounded-sm shadow-soft overflow-hidden hover:shadow-md transition-all duration-300 group"
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
                        <span className={`text-white text-xs px-2 py-1 rounded-sm uppercase font-semibold tracking-wide ${
                          article.category === 'company' ? 'bg-nyati-navy' :
                          article.category === 'csr' ? 'bg-nyati-green' :
                          'bg-nyati-orange'
                        }`}>
                          {article.category === 'company' ? 'Company' :
                           article.category === 'csr' ? 'CSR' :
                           'Product'}
                        </span>
                      </div>
                    </div>
                    <div className="p-5">
                      <div className="text-xs text-gray-500 mb-2">
                        {formatDate(article.date)}
                      </div>
                      <h3 className="text-lg font-bold mb-2 text-nyati-navy group-hover:text-nyati-orange transition-colors">
                        {article.title}
                      </h3>
                      <p className="text-gray-700 text-sm mb-4 line-clamp-3">
                        {article.excerpt}
                      </p>
                      <Link href={`/news/${article.id}`} className="inline-flex items-center text-nyati-orange font-medium hover:text-nyati-orange/80 text-sm transition-colors">
                        Read More
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      </Link>
                    </div>
                  </motion.div>
                ))}
              </div>
            ) : (
              <div className="text-center p-10 bg-gray-50 rounded-sm">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-12 w-12 mx-auto text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <h3 className="text-xl font-bold text-gray-700 mb-2">No news articles found</h3>
                <p className="text-gray-500">Try adjusting your search or filter criteria</p>
              </div>
            )}
          </motion.section>
          
          {/* Our Impact Section */}
          <motion.section 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mb-16"
          >
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
            <div className="w-32 h-1 bg-gradient-to-r from-nyati-navy via-nyati-orange to-nyati-green rounded-sm"></div>
          </div>
        </div>
      </main>
    </div>
  )
}