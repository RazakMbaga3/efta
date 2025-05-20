'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Button from '../components/ui/button'

// Blog posts data
const blogPosts = [
  {
    title: "The Future of Smart Grid Technology",
    slug: "smart-grid-technology",
    excerpt: "Exploring how smart grid technology is revolutionizing power distribution and management in East Africa.",
    date: "2025-04-15",
    author: "John Smith",
    category: "Power Distribution",
    image: "/images/projects/smartgrid.jpg"
  },
  {
    title: "Renewable Energy Solutions for Industrial Applications",
    slug: "renewable-energy-industrial",
    excerpt: "How businesses can benefit from implementing renewable energy solutions in their industrial operations.",
    date: "2025-04-01",
    author: "Sarah Johnson",
    category: "Renewable Energy",
    image: "/images/projects/solar.jpg"
  },
  {
    title: "Industrial Automation Best Practices",
    slug: "industrial-automation-practices",
    excerpt: "Key considerations and best practices for implementing industrial automation systems.",
    date: "2025-03-20",
    author: "Michael Chen",
    category: "Industrial Automation",
    image: "/images/projects/industrial.webp"
  },
  {
    title: "Energy Efficiency in Manufacturing",
    slug: "energy-efficiency-manufacturing",
    excerpt: "Strategies for optimizing energy consumption in manufacturing facilities through modern electrical systems.",
    date: "2025-03-10",
    author: "Emma Williams",
    category: "Energy Efficiency",
    image: "/images/projects/efficiency.jpg"
  },
  {
    title: "The Rise of Solar Power in Tanzania",
    slug: "solar-power-tanzania",
    excerpt: "Analysis of Tanzania's growing solar power sector and its impact on industrial development.",
    date: "2025-02-28",
    author: "David Mkony",
    category: "Renewable Energy",
    image: "/images/projects/tanzania.jpg"
  }
];

const categories = [
  { name: "Renewable Energy", slug: "renewable-energy" },
  { name: "Building Automation", slug: "building-automation" },
  { name: "Electrical Engineering", slug: "electrical-engineering" },
  { name: "Energy Storage", slug: "energy-storage" },
  { name: "Power Distribution", slug: "power-distribution" },
  { name: "Industrial Automation", slug: "industrial-automation" },
  { name: "Energy Efficiency", slug: "energy-efficiency" }
];

export default function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [filteredPosts, setFilteredPosts] = useState(blogPosts);
  
  const handleCategoryClick = (categoryName) => {
    if (selectedCategory === categoryName) {
      setSelectedCategory(null);
      setFilteredPosts(blogPosts);
    } else {
      setSelectedCategory(categoryName);
      setFilteredPosts(blogPosts.filter(post => 
        post.category.toLowerCase() === categoryName.toLowerCase()
      ));
    }
  };

  return (
    <div className="container mx-auto my-20 px-4 py-12">
      <h1 className="text-4xl font-bold mb-8">Our Blog</h1>
      
      {/* Categories */}
      <div className="flex flex-wrap gap-4 mb-8">
        {categories.map((category) => (
          <button
            key={category.slug}
            onClick={() => handleCategoryClick(category.name)}
            className={`px-4 py-2 rounded-full transition-colors ${
              selectedCategory === category.name
                ? 'bg-blue-600 text-white'
                : 'bg-gray-200 hover:bg-gray-300'
            }`}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Blog Posts Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredPosts.map((post) => (
          <motion.div
            key={post.slug}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <Link href={`/blog/${post.slug}`}>
              <div className="relative h-48">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <span className="text-blue-600 text-sm font-semibold">
                  {post.category}
                </span>
                <h2 className="text-xl font-bold mt-2 mb-3">{post.title}</h2>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <span>{post.author}</span>
                  <span>{post.date}</span>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}