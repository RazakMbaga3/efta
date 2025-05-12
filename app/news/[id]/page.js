'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { motion, useScroll, useTransform } from 'framer-motion'
import { formatDistance } from 'date-fns'
import Newsletter from '@/app/components/ui/Newsletter'

export default function NewsArticlePage({ params }) {
  const contentRef = useRef(null)
  const { scrollYProgress } = useScroll({
    target: contentRef,
    offset: ["start end", "end start"]
  })

  const y = useTransform(scrollYProgress, [0, 1], [0, -50])
  const opacity = useTransform(scrollYProgress, [0, 0.3, 1], [0.6, 1, 1])

  // Mock article data - In production, this would be fetched from an API
  const article = {
    id: params.id,
    title: "EFTA Launches Major Environmental Conservation Initiative",
    date: "2024-02-15",
    author: "EFTA Communications Team",
    category: "csr",
    image: "/images/news/environmental-program.jpg",
    content: `
      <p>EFTA is proud to announce the launch of a comprehensive environmental conservation program that demonstrates our commitment to sustainability and environmental stewardship. This initiative encompasses multiple projects aimed at preserving our natural resources and promoting sustainable practices within our communities.</p>
      
      <h2>Program Objectives</h2>
      <p>The program focuses on three key areas:</p>
      <ul>
        <li>Tree planting and forest conservation</li>
        <li>Waste management and recycling</li>
        <li>Environmental education and awareness</li>
      </ul>

      <h2>Community Impact</h2>
      <p>Through this initiative, EFTA aims to:</p>
      <ul>
        <li>Plant over 10,000 trees in the next year</li>
        <li>Establish recycling programs in local schools</li>
        <li>Conduct environmental workshops for community members</li>
      </ul>

      <h2>Sustainable Future</h2>
      <p>As a leading cement manufacturer in Tanzania, we recognize our responsibility to protect the environment and promote sustainable development. This program represents a significant step in our ongoing commitment to environmental stewardship.</p>
    `,
    tags: ['Environment', 'Sustainability', 'Community', 'CSR'],
    relatedArticles: [
      {
        id: 2,
        title: "EFTA School Support Program Reaches New Milestone",
        image: "/images/news/school-support.jpg",
        excerpt: "Our education support initiative has now benefited over 1,000 students across Tanzania.",
        date: "2024-01-20"
      },
      {
        id: 3,
        title: "EFTA Healthcare Initiative Expands to Rural Areas",
        image: "/images/news/healthcare.jpg",
        excerpt: "New medical outreach program brings essential healthcare services to remote communities.",
        date: "2024-01-10"
      }
    ]
  }

  const formatDate = (dateString) => {
    const date = new Date(dateString)
    return date.toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    })
  }

  const timeAgo = (dateString) => {
    return formatDistance(new Date(dateString), new Date(), { addSuffix: true })
  }

  return (
    <div ref={contentRef} className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="relative h-[60vh] overflow-hidden">
        <motion.div 
          className="absolute inset-0 w-full h-full"
          style={{ y, opacity }}
        >
          <div className="absolute inset-0 bg-efta-green/80 mix-blend-multiply z-10"></div>
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-transparent z-20"></div>
          <Image 
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
        </motion.div>
        
        <div className="absolute inset-0 flex items-center z-30">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="max-w-4xl"
            >
              <div className="flex items-center space-x-4 mb-4">
                <Link 
                  href="/news"
                  className="text-white/90 hover:text-white flex items-center transition-colors"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                  </svg>
                  Back to News
                </Link>
                <span className="text-white/30">|</span>
                <span className="text-white/90">{article.category.toUpperCase()}</span>
              </div>
              
              <h1 className="text-white text-4xl md:text-5xl lg:text-6xl font-bold mb-4 font-futura">
                {article.title}
              </h1>
              
              <div className="flex items-center text-white/90 space-x-4 text-sm">
                <span>{formatDate(article.date)}</span>
                <span className="text-white/30">•</span>
                <span>{timeAgo(article.date)}</span>
                <span className="text-white/30">•</span>
                <span>{article.author}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <main className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <motion.article
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-xl shadow-soft overflow-hidden mb-12"
            >
              <div className="p-8 md:p-12">
                <div 
                  className="prose prose-lg prose-efta max-w-none"
                  dangerouslySetInnerHTML={{ __html: article.content }}
                />
                
                <div className="mt-8 pt-8 border-t border-gray-100">
                  <div className="flex flex-wrap gap-2">
                    {article.tags.map((tag, index) => (
                      <span 
                        key={index}
                        className="bg-efta-green/10 text-efta-green px-3 py-1 rounded-full text-sm font-medium"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.article>

            {/* Related Articles */}
            <motion.section
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="mb-12"
            >
              <h2 className="text-2xl font-bold text-efta-green mb-6 font-futura flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z" />
                </svg>
                Related Articles
              </h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {article.relatedArticles.map((related) => (
                  <Link
                    key={related.id}
                    href={`/news/${related.id}`}
                    className="group bg-white rounded-xl shadow-soft overflow-hidden hover:shadow-md transition-all duration-300"
                  >
                    <div className="relative h-48">
                      <Image 
                        src={related.image}
                        alt={related.title}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                    </div>
                    <div className="p-6">
                      <h3 className="text-lg font-bold mb-2 text-efta-green group-hover:text-efta-orange transition-colors">
                        {related.title}
                      </h3>
                      <p className="text-gray-600 text-sm mb-3">
                        {related.excerpt}
                      </p>
                      <div className="text-sm text-gray-500">
                        {formatDate(related.date)}
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </motion.section>

            {/* Newsletter */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Newsletter />
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  )
}