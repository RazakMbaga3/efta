// components/sections/blog-highlights.js
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

// Importing only the latest 3 posts for the homepage
const featuredPosts = [
  {
    id: 'smart-grid-technology',
    title: 'The Future of Smart Grid Technology in Tanzania',
    excerpt: 'Discover how smart grid technology is revolutionizing power distribution across Tanzania.',
    image: '/images/blog/smart-grid.jpg',
    date: 'May 10, 2025',
    category: 'Technical Knowledge',
    slug: '/blog/smart-grid-technology',
    readTime: '3 Minute Read'
  },
  {
    id: 'weather-resistant-installations',
    title: 'Weather-Resistant Electrical Installations Guide',
    excerpt: 'Essential tips for ensuring reliable electrical installations during Tanzania\'s rainy seasons.',
    image: '/images/blog/weather-resistant-installation.jpg',
    date: 'April 25, 2025',
    category: 'Technical Knowledge',
    slug: '/blog/weather-resistant-installations',
    readTime: '4 Minute Read'
  },
  {
    id: 'infrastructure-boom',
    title: 'Tanzania\'s Infrastructure Boom: Powering Development',
    excerpt: 'Explore how electrical and automation solutions are driving infrastructure development across Tanzania.',
    image: '/images/blog/modern-infrastructure.jpg',
    date: 'March 20, 2025',
    category: 'Industry Insights',
    slug: '/blog/tanzania-infrastructure-boom',
    readTime: '3 Minute Read'
  }
];

// Blog post categories with their respective colors
const categories = [
  { 
    id: 'technical-knowledge', 
    name: 'Technical Knowledge', 
    color: 'bg-blue-100 text-blue-800',
  },
  { 
    id: 'industry-insights', 
    name: 'Industry Insights', 
    color: 'bg-amber-100 text-amber-800',
  },
  { 
    id: 'automation', 
    name: 'Automation', 
    color: 'bg-green-100 text-green-800',
  },
  { 
    id: 'energy-efficiency', 
    name: 'Energy Efficiency', 
    color: 'bg-teal-100 text-teal-800',
  },
  { 
    id: 'industrial-solutions', 
    name: 'Industrial Solutions', 
    color: 'bg-violet-100 text-violet-800',
  },
  { 
    id: 'renewable-energy', 
    name: 'Renewable Energy', 
    color: 'bg-orange-100 text-orange-800',
  }
];

const BlogHighlights = () => {
  // Helper function to get category color
  const getCategoryColor = (categoryName) => {
    const category = categories.find(cat => cat.name === categoryName);
    return category ? category.color : 'bg-gray-100 text-gray-800';
  };

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12">
          <div>
            <h2 className="text-3xl font-bold text-efta-navy mb-2">Knowledge Hub</h2>
            <p className="text-lg text-gray-600 max-w-2xl">
              Stay informed about the latest in electrical engineering and automation
            </p>
          </div>
          <Link 
            href="/blog" 
            className="mt-4 md:mt-0 flex items-center group text-efta-orange font-medium"
          >
            View All Articles
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              className="h-5 w-5 ml-1 transform transition-transform group-hover:translate-x-1" 
              viewBox="0 0 20 20" 
              fill="currentColor"
            >
              <path 
                fillRule="evenodd" 
                d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" 
                clipRule="evenodd" 
              />
            </svg>
          </Link>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {featuredPosts.map((post, index) => (
            <div 
              key={post.id} 
              className="bg-white rounded-sm overflow-hidden shadow-md transition-all duration-300 hover:shadow-lg flex flex-col h-full"
            >
              {/* Image Container */}
              <Link href={post.slug} className="block relative h-56 w-full overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover transition-transform duration-500 hover:scale-105"
                  priority={index === 0}
                />
              </Link>
              
              {/* Content */}
              <div className="p-5 flex flex-col flex-grow">
                {/* Category & Date */}
                <div className="flex justify-between items-center mb-3">
                  <span className={`text-xs font-medium py-1 px-3 rounded-sm ${getCategoryColor(post.category)}`}>
                    {post.category}
                  </span>
                  <span className="text-gray-500 text-xs">{post.date}</span>
                </div>
                
                {/* Title */}
                <h3 className="text-xl font-bold text-gray-800 mb-2 line-clamp-2">
                  <Link href={post.slug} className="hover:text-efta-orange transition-colors">
                    {post.title}
                  </Link>
                </h3>
                
                {/* Excerpt */}
                <p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-grow">{post.excerpt}</p>
                
                {/* Read Time & Read More */}
                <div className="flex items-center justify-between mt-auto pt-3 border-t border-gray-100">
                  <span className="text-xs text-gray-500">{post.readTime}</span>
                  <Link 
                    href={post.slug} 
                    className="text-efta-orange text-sm font-medium hover:underline flex items-center"
                  >
                    Read Article
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-4 w-4 ml-1" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogHighlights;