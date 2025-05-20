'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import Newsletter from '@/app/components/ui/Newsletter'
import Button from '@/app/components/ui/Button'

export default function ExternalNewsArticlePage({ params }) {
  // Get article ID from route parameters
  const articleId = parseInt(params.id)
  
  // Ref for scroll animations
  const contentRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "end start"]
  })

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

  // Mock database for articles with external links
  const externalNewsArticles = [
    {
      id: 1,
      title: "Dar es Salaam Regional Commissioner Visits Lake Cement on Workers' Day",
      excerpt: "The Dar es Salaam Regional Commissioner, Hon. Chalamila, has announced upcoming inspections of workplaces, including factories, to assess employee relations and working conditions. Lake Cement welcomed this initiative as part of our commitment to maintaining excellent labor standards.",
      date: "2024-06-15",
      image: "/images/news/RC-Chalamila.png",
      category: "company",
      externalLink: "https://www.mwananchi.co.tz/mw/habari/kitaifa/ukaguzi-wa-haki-za-wafanyakazi-viwandani-waja--4659252",
      source: "Mwananchi",
      relatedLinks: [
        {
          title: "Government Workplace Inspection Initiative",
          url: "https://www.example.com/workplace-inspections",
        },
        {
          title: "Tanzania Labor Standards Overview",
          url: "https://www.example.com/labor-standards",
        }
      ]
    },
    {
      id: 2,
      title: "RC Chalamila Conducts Tour of Kigamboni District",
      excerpt: "Dar es Salaam Regional Commissioner Albert John Chalamila conducted an extensive tour of Kigamboni District to inspect various development projects and engage with community members. During his visit, he emphasized the government's commitment to infrastructure development and public service improvement.",
      date: "2024-05-15",
      image: "/images/news/chalamila.jpg",
      category: "company",
      externalLink: "https://dsm.go.tz/new/rc-chalamila-afanya-ziara-kigamboni",
      source: "Dar es Salaam Regional Office",
      relatedLinks: [
        {
          title: "Kigamboni Development Plan",
          url: "https://www.example.com/kigamboni-development",
        },
        {
          title: "Tanzania Infrastructure Projects",
          url: "https://www.example.com/infrastructure-projects",
        }
      ]
    },
    {
      id: 5,
      title: "Lake Cement Leads Blood Donation Drive to Save Lives",
      excerpt: "Lake Cement has demonstrated corporate social responsibility through an impactful blood donation drive at our factory. The initiative aims to address the critical shortage of blood supplies in Tanzania's healthcare system and highlights our dedication to community health and wellbeing.",
      date: "2017-05-17",
      image: "/images/news/damu4.jpg",
      category: "csr",
      externalLink: "https://www.michuzi.co.tz/2017/05/lake-cement-yachangia-damu-katika.html",
      source: "Michuzi Blog",
      relatedLinks: [
        {
          title: "Tanzania Blood Donation Guidelines",
          url: "https://www.example.com/blood-donation",
        },
        {
          title: "Corporate Social Responsibility in Tanzania",
          url: "https://www.example.com/csr-tanzania",
        }
      ]
    },
    {
      id: 6,
      title: "Prime Minister Majaliwa Assures Lake Cement of Government Support",
      excerpt: "During his visit to Lake Cement's state-of-the-art factory, Prime Minister Kassim Majaliwa praised our production quality and affirmed the government's commitment to supporting local manufacturers. The PM emphasized the importance of private sector investment in strengthening Tanzania's industrial capacity.",
      date: "2021-03-27",
      image: "/images/news/PM-Majaliwa.png",
      category: "company",
      externalLink: "https://www.thecitizen.co.tz/tanzania/business/majaliwa-assures-investors-of-government-cooperation-2596696",
      source: "The Citizen",
      relatedLinks: [
        {
          title: "Tanzania Industrial Development Strategy",
          url: "https://www.example.com/industrial-strategy",
        },
        {
          title: "Government Support for Local Manufacturing",
          url: "https://www.example.com/local-manufacturing",
        }
      ]
    }
  ];

  // Get current article based on ID
  const article = externalNewsArticles.find(article => article.id === articleId);

  // Format date for consistency
  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', options);
  };

  // If article not found
  if (!article) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center p-8 max-w-md">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-16 w-16 mx-auto text-nyati-orange mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h1 className="text-2xl font-bold text-nyati-navy mb-4">External Article Not Found</h1>
          <p className="text-gray-600 mb-6">The article you're looking for doesn't exist or has been removed.</p>
          <Link href="/news" className="inline-flex items-center px-4 py-2 bg-nyati-orange text-white rounded-sm hover:bg-nyati-orange/90 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to News
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div ref={contentRef} className="min-h-screen bg-gray-50">
      {/* Hero section */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-nyati-navy/90 to-nyati-navy/70 opacity-80 z-10"></div>
        <div className="absolute inset-0 z-0">
          <Image 
            src={article.image}
            alt={article.title}
            fill
            priority
            className="object-cover"
          />
        </div>
        
        {/* Content overlay */}
        <div className="absolute inset-0 flex items-center z-20">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }} 
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <div className="flex items-center space-x-3 mb-6">
                <span className={`text-white text-xs px-3 py-1 rounded-sm uppercase font-semibold tracking-wide ${
                  article.category === 'company' ? 'bg-nyati-navy' :
                  article.category === 'csr' ? 'bg-nyati-green' :
                  'bg-nyati-orange'
                }`}>
                  {article.category === 'company' ? 'Company' :
                   article.category === 'csr' ? 'CSR' :
                   'Product'}
                </span>
                <span className="text-white/80 text-sm">
                  {formatDate(article.date)}
                </span>
                <span className="text-white/80 text-sm">
                  Source: {article.source}
                </span>
              </div>

              <h1 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold mb-6 font-futura">
                {article.title}
              </h1>
              <div className="h-1 w-32 bg-nyati-orange mb-4"></div>
              <p className="text-white/90 text-base md:text-lg max-w-3xl">
                {article.excerpt}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="relative mt-6 z-30">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-sm shadow-soft p-8 md:p-12 mb-12">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="prose max-w-none prose-lg"
            >
              
              {/* Lake Cement's Perspective */}
              <motion.div variants={itemVariants}>
                <h2 className="text-2xl font-bold mb-4 text-nyati-navy font-futura">Lake Cement's Perspective</h2>
                <p className="text-gray-700 mb-4">
                  At Lake Cement, we value our relationship with government stakeholders and the broader community. The article highlights our commitment to maintaining excellent standards across our operations while contributing to Tanzania's industrial development.
                </p>
                <p className="text-gray-700 mb-4">
                  We continue to invest in our facilities, workforce, and community initiatives as part of our mission to be a responsible corporate citizen and a leader in Tanzania's manufacturing sector.
                </p>
              </motion.div>
              
              {/* Image */}
              <motion.div 
                variants={itemVariants}
                className="my-10"
              >
                <div className="relative h-80 rounded-sm overflow-hidden shadow-soft">
                  <Image
                    src={article.image}
                    alt={article.title}
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
              
              {/* Related Resources */}
              {article.relatedLinks && article.relatedLinks.length > 0 && (
                <motion.div 
                  variants={itemVariants}
                  className="mt-10 bg-gray-50 p-6 rounded-sm border border-gray-200"
                >
                  <h3 className="text-lg font-semibold text-nyati-navy mb-4">Related Resources</h3>
                  <ul className="space-y-3">
                    {article.relatedLinks.map((link, index) => (
                      <li key={index}>
                        <a 
                          href={link.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-nyati-orange hover:text-nyati-orange/80 transition-colors"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                          </svg>
                          {link.title}
                        </a>
                      </li>
                    ))}
                  </ul>
                </motion.div>
              )}
              
              {/* Share Section */}
              <motion.div 
                variants={itemVariants}
                className="mt-12 pt-8 border-t border-gray-200"
              >
                <div className="flex items-center space-x-4">
                  <span className="text-sm text-gray-500">Share:</span>
                  <div className="flex space-x-2">
                    <Button
                      intent="ghost"
                      size="xs"
                      className="text-nyati-navy hover:text-nyati-orange"
                      aria-label="Share on Facebook"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/>
                      </svg>
                    </Button>
                    
                    <Button
                      intent="ghost"
                      size="xs"
                      className="text-nyati-navy hover:text-nyati-orange"
                      aria-label="Share on Twitter"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                      </svg>
                    </Button>
                    
                    <Button
                      intent="ghost"
                      size="xs"
                      className="text-nyati-navy hover:text-nyati-orange"
                      aria-label="Share on LinkedIn"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
                      </svg>
                    </Button>
                    
                    <Button
                      intent="ghost"
                      size="xs"
                      className="text-nyati-navy hover:text-nyati-orange"
                      aria-label="Share on WhatsApp"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                      </svg>
                    </Button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </div>
          
          {/* Back to News Button */}
          <div className="flex justify-center mb-12">
            <Link 
              href="/news" 
              className="inline-flex items-center px-5 py-3 bg-nyati-navy text-white rounded-sm hover:bg-nyati-navy/90 transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to All News
            </Link>
          </div>
          
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