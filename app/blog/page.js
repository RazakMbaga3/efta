'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../components/ui/Button'

const blogPosts = [
  {
    title: "The Future of Smart Grid Technology",
    slug: "smart-grid-technology",
    excerpt: "Exploring how smart grid technology is revolutionizing power distribution and management in East Africa.",
    date: "2025-04-15",
    author: "John Smith",
    category: "Power Distribution"
  },
  {
    title: "Renewable Energy Solutions for Industrial Applications",
    slug: "renewable-energy-industrial",
    excerpt: "How businesses can benefit from implementing renewable energy solutions in their industrial operations.",
    date: "2025-04-01",
    author: "Sarah Johnson",
    category: "Renewable Energy"
  },
  {
    title: "Industrial Automation Best Practices",
    slug: "industrial-automation-practices",
    excerpt: "Key considerations and best practices for implementing industrial automation systems.",
    date: "2025-03-20",
    author: "Michael Chen",
    category: "Industrial Automation"
  },
  {
    title: "Energy Efficiency in Manufacturing",
    slug: "energy-efficiency-manufacturing",
    excerpt: "Strategies for optimizing energy consumption in manufacturing facilities through modern electrical systems.",
    date: "2025-03-10",
    author: "Emma Williams",
    category: "Energy Efficiency"
  },
  {
    title: "The Rise of Solar Power in Tanzania",
    slug: "solar-power-tanzania",
    excerpt: "Analysis of Tanzania's growing solar power sector and its impact on industrial development.",
    date: "2025-02-28",
    author: "David Mkony",
    category: "Renewable Energy"
  }
];

const categories = [
  { name: "Renewable Energy", slug: "renewable-energy" },
  { name: "Building Automation", slug: "building-automation" },
  { name: "Electrical Engineering", slug: "electrical-engineering" },
  { name: "Energy Storage", slug: "energy-storage" }
];

const featuredPost = {
  title: "The Future of Green Energy in Tanzania",
  excerpt: "Discover how EFTA Investments is leading Tanzania's transition to renewable energy through innovative solar solutions and smart grid technologies.",
  category: "Featured",
  date: "2025-05-10",
  author: "James Mbwambo",
  image: "/images/blog/green-energy.jpg",
  slug: "future-green-energy-tanzania",
  readTime: "10 min read"
};

export default function BlogPage() {
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
                Insights & Updates
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Stay informed about the latest trends and developments in electrical engineering 
                and sustainable energy solutions.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <motion.div
                key={post.slug}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link href={`/blog/${post.slug}`}>
                  <article className="bg-white dark:bg-gray-800 rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                    <div className="relative h-48">
                      <Image
                        src={post.image || "/images/default.jpg"}
                        alt={post.title}
                        fill
                        className="object-cover"
                      />
                      <div className="absolute top-4 left-4">
                        <span className="px-3 py-1 text-sm font-medium bg-efta text-white rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>
                    <div className="p-6">
                      <h2 className="text-xl font-bold mt-2 mb-3 text-gray-900 dark:text-white">
                        {post.title}
                      </h2>
                      <p className="text-gray-600 dark:text-gray-400">
                        {post.excerpt}
                      </p>
                      <div className="mt-4 flex items-center text-efta">
                        <span className="text-sm font-medium">Read More</span>
                        <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 bg-efta text-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold mb-6">Stay Updated</h2>
              <p className="text-lg mb-8">
                Subscribe to our newsletter for the latest insights in electrical engineering 
                and sustainable energy solutions.
              </p>
              <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-2 rounded-lg text-gray-900"
                />
                <Button
                  type="submit"
                  intent="white"
                  size="md"
                >
                  Subscribe
                </Button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}