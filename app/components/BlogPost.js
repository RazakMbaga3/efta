// components/BlogPost.js
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import Button from './ui/Button'

const BlogPost = ({ 
  title, 
  date,  
  category,
  readTime = "5 min read",
  children,
  relatedPosts = []
}) => {
  // Helper function to get category color
  const getCategoryColor = (categoryName) => {
    const categories = {
      'Technical Knowledge': 'bg-blue-100 text-blue-800',
      'Industry Insights': 'bg-amber-100 text-amber-800',
      'Automation': 'bg-green-100 text-green-800',
      'Energy Efficiency': 'bg-teal-100 text-teal-800',
      'Industrial Solutions': 'bg-violet-100 text-violet-800',
      'Renewable Energy': 'bg-orange-100 text-orange-800'
    };
    
    return categories[categoryName] || 'bg-gray-100 text-gray-800';
  };

  return (
    <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      {/* Breadcrumbs */}
      <div className="mb-8">
        <nav className="flex text-sm">
          <Link href="/" className="text-gray-500 hover:text-efta-orange transition-colors">
            Home
          </Link>
          <span className="mx-2 text-gray-400">/</span>
          <Link href="/blog" className="text-gray-500 hover:text-efta-orange transition-colors">
            Blog
          </Link>
          {category && (
            <>
              <span className="mx-2 text-gray-400">/</span>
              <Link 
                href={`/blog?category=${category.toLowerCase().replace(/\s+/g, '-')}`} 
                className="text-gray-500 hover:text-efta-orange transition-colors"
              >
                {category}
              </Link>
            </>
          )}
        </nav>
      </div>
      
      {/* Article Header */}
      <header className="mb-10">
        {category && (
          <div className="mb-4">
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium ${getCategoryColor(category)}`}>
              {category}
            </span>
          </div>
        )}
        
        <h1 className="text-3xl md:text-4xl font-bold text-efta-navy mb-4 leading-tight">
          {title}
        </h1>
        
        <div className="flex flex-wrap items-center text-gray-500 text-sm gap-4">
          
          {date && (
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-efta-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span>{date}</span>
            </div>
          )}
          
          {readTime && (
            <div className="flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1 text-efta-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>{readTime}</span>
            </div>
          )}
        </div>
      </header>
      
      {/* Social Sharing */}
      <div className="border-t border-b border-gray-200 py-4 mb-8 flex justify-between items-center">
        <div className="text-sm text-gray-500">
          Share this article:
        </div>
        <div className="flex space-x-2">
          <Button
            intent="white"
            size="xs"
            className="!rounded-full !p-2 bg-[#3b5998] text-white hover:opacity-90"
            aria-label="Share on Facebook"
            onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M9 8H6v4h3v12h5V12h3.642L18 8h-4V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z"/>
            </svg>
          </Button>
          
          <Button
            intent="white"
            size="xs"
            className="!rounded-full !p-2 bg-[#1da1f2] text-white hover:opacity-90"
            aria-label="Share on Twitter"
            onClick={() => window.open(`https://twitter.com/intent/tweet?url=${encodeURIComponent(window.location.href)}`, '_blank')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
            </svg>
          </Button>
          
          <Button
            intent="white"
            size="xs"
            className="!rounded-full !p-2 bg-[#0077b5] text-white hover:opacity-90"
            aria-label="Share on LinkedIn"
            onClick={() => window.open(`https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(window.location.href)}`, '_blank')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </Button>
          
          <Button
            intent="white"
            size="xs"
            className="!rounded-full !p-2 bg-[#25D366] text-white hover:opacity-90"
            aria-label="Share on WhatsApp"
            onClick={() => window.open(`https://wa.me/?text=${encodeURIComponent(window.location.href)}`, '_blank')}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
            </svg>
          </Button>
          
          <Button
            intent="white"
            size="xs"
            className="!rounded-full !p-2"
            aria-label="Copy link"
            onClick={() => {
              navigator.clipboard.writeText(window.location.href);
              // You could add a toast notification here
            }}
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" />
            </svg>
          </Button>
        </div>
      </div>
      
      {/* Article Content */}
      <div className="prose prose-lg max-w-none text-gray-600">
        {children}
      </div>
      
      {/* CTA Section */}
      <div className="mt-16 bg-efta-navy rounded-xl p-8 text-center">
        <h3 className="text-2xl font-bold text-white mb-4">Have Questions About Your Project?</h3>
        <p className="text-efta-orange mb-6 max-w-2xl mx-auto">
          Our team of experienced engineers and technical advisors is here to provide professional guidance for your industrial automation needs.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            href="/contact" 
            intent="primary"
          >
            Contact Our Technical Team
          </Button>
          <Button 
            href="/products" 
            intent="white"
          >
            Explore Our Products
          </Button>
        </div>
      </div>
    </article>
  )
}

export default BlogPost