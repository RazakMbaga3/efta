// app/blog/monsoon-construction/page.js
import React from 'react'
import BlogPost from '../../components/BlogPost'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Weather-Resistant Electrical Installations Guide | EFTA Investments Blog',
  description: 'Learn essential techniques and best practices for successful electrical installations during Tanzania\'s rainy seasons, from site preparation to waterproofing.',
}

// Related posts for this article
const relatedPosts = [
  {
    title: 'Maximizing Energy Efficiency in Industrial Applications',
    excerpt: 'Learn best practices for optimizing energy consumption in industrial settings.',
    category: 'Technical Knowledge',
    date: 'Coming Soon',
    readTime: '6 min read',
    slug: '#'
  },
  {
    title: 'Building Automation Systems: A Comprehensive Guide',
    excerpt: 'Understanding modern building automation systems and their implementation.',
    category: 'Application Guides',
    date: 'Coming Soon',
    readTime: '7 min read',
    slug: '#'
  }
];

export default function WeatherResistantInstallationsPage() {
  return (
    <BlogPost 
      title="Weather-Resistant Electrical Installations: A Guide for Rainy Seasons"
      date="April 25, 2025"
      author="EFTA Technical Team"
      category="Technical Knowledge"
      readTime="9 min read"
      relatedPosts={relatedPosts}
    >
      <p className="lead text-xl mb-6">
        Tanzania's rainy seasons present unique challenges for electrical installations. Excess moisture can significantly impact system performance, safety, and longevity. However, with proper planning and technique, reliable electrical installations are absolutely possible during the monsoon. This comprehensive guide provides essential strategies for successful electrical work during rainy conditions.
      </p>

      <div className="my-8 rounded-sm overflow-hidden relative aspect-w-16 aspect-h-9">
        <Image
          src="/images/blog/weather-resistant-installation.jpg"
          alt="Electrical installation with weather protection measures"
          width={1200}
          height={675}
          className="object-cover rounded-sm"
        />
      </div>

      <h2 className="text-2xl font-bold text-efta-navy mb-4">Pre-Installation Planning</h2>

      <div className="grid md:grid-cols-2 gap-6">
        <div className="bg-white rounded-sm shadow-sm overflow-hidden border-t-4 border-efta-blue h-full">
          <div className="p-6 h-full flex flex-col">
            <h3 className="text-xl font-bold text-efta-navy mb-3">Project Scheduling</h3>
            <ul className="list-disc pl-6 space-y-2 flex-grow">
              <li>Schedule sensitive electrical work during drier periods when possible</li>
              <li>Plan indoor installations during peak rainy periods</li>
              <li>Consider extended timelines for outdoor installations</li>
              <li>Reserve additional time for testing and verification</li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-sm shadow-sm overflow-hidden border-t-4 border-efta-blue h-full">
          <div className="p-6 h-full flex flex-col">
            <h3 className="text-xl font-bold text-efta-navy mb-3">Material Selection</h3>
            <ul className="list-disc pl-6 space-y-2 flex-grow">
              <li>Use weather-resistant components rated for outdoor use</li>
              <li>Select IP65 or higher rated enclosures for outdoor installations</li>
              <li>Choose marine-grade materials for coastal applications</li>
              <li>Stock additional weatherproofing materials</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-efta-navy mt-10 mb-4">Weather Protection Measures</h2>
      
      <div className="grid md:grid-cols-2 gap-6">
        <div className="relative h-64 md:h-auto rounded-sm overflow-hidden bg-gray-100 md:order-1">
          <div className="absolute inset-0 flex items-center justify-center">
            <Image
              src="/images/blog/weather-protection.jpg"
              alt="Weather protection measures for electrical installations"
              fill
              className="object-cover rounded-sm"
            />
          </div>
        </div>
        <div className="md:order-2">
          <p className="text-efta-dark-grey mb-4">
            Creating appropriate protection systems safeguards both workers and equipment, allowing installation work to continue during light to moderate rainfall.
          </p>
          <ul className="list-disc text-sm pl-6 space-y-2">
            <li>Install temporary protective coverings over work areas</li>
            <li>Use weatherproof temporary power distribution systems</li>
            <li>Create proper drainage around installation sites</li>
            <li>Set up adequate lighting for darker conditions</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-efta-navy mt-10 mb-4">Installation Best Practices</h2>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white rounded-sm shadow-sm p-6">
          <h3 className="text-xl font-bold text-efta-navy mb-3">Cable Protection</h3>
          <p className="text-efta-dark-grey mb-4">
            Proper cable protection is essential during rainy seasons to prevent water ingress and ensure long-term reliability.
          </p>
          <ul className="list-disc text-sm pl-6 space-y-2">
            <li>Use weatherproof cable glands and connectors</li>
            <li>Install proper cable support systems</li>
            <li>Implement appropriate sealing methods</li>
            <li>Ensure proper cable routing to prevent water accumulation</li>
          </ul>
        </div>
        
        <div className="bg-white rounded-sm shadow-sm p-6">
          <h3 className="text-xl font-bold text-efta-navy mb-3">Enclosure Installation</h3>
          <p className="text-efta-dark-grey mb-4">
            Proper enclosure installation is critical for protecting electrical components from moisture damage.
          </p>
          <ul className="list-disc text-sm pl-6 space-y-2">
            <li>Mount enclosures at appropriate heights</li>
            <li>Install proper drainage and ventilation</li>
            <li>Use appropriate sealing methods</li>
            <li>Implement condensation prevention measures</li>
          </ul>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-efta-navy mt-10 mb-4">Quality Control Measures</h2>
      
      <ol className="list-decimal pl-6 space-y-4">
        <li>
          <strong className="text-efta-navy">Increased Testing Frequency:</strong> 
          <p>Double the frequency of insulation resistance tests during rainy seasons to ensure system integrity.</p>
        </li>
        <li>
          <strong className="text-efta-navy">Moisture Monitoring:</strong> 
          <p>Regularly check for moisture ingress and condensation in enclosures and equipment.</p>
        </li>
        <li>
          <strong className="text-efta-navy">Sealing Verification:</strong> 
          <p>Perform regular checks of seals and weatherproofing measures.</p>
        </li>
        <li>
          <strong className="text-efta-navy">Documentation:</strong>
          <p>Maintain detailed records of weather conditions and additional measures implemented.</p>
        </li>
      </ol>

      <h2 className="text-2xl font-bold text-efta-navy mt-10 mb-4">Recommended EFTA Solutions for Weather Resistance</h2>
      
      <p>
        Selecting the right components and systems is crucial for successful installations during rainy seasons. EFTA offers several specialized solutions:
      </p>

      <div className="grid md:grid-cols-2 gap-6 my-8">
        <div className="bg-white rounded-sm shadow-sm overflow-hidden border-l-4 border-efta-orange">
          <div className="p-6">
            <h3 className="text-xl font-bold text-efta-navy mb-3">WeatherShield Series</h3>
            <p className="text-efta-dark-grey mb-4">
              Our premium weather-resistant components, ideal for outdoor installations in challenging conditions.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>IP66 rated enclosures</li>
              <li>UV-resistant materials</li>
              <li>Enhanced corrosion protection</li>
              <li>Integrated drainage systems</li>
              <li>Superior sealing technology</li>
            </ul>
            <p className="mt-4 text-sm font-medium text-efta-orange">
              Recommended for: Critical outdoor installations and coastal applications.
            </p>
          </div>
        </div>
        
        <div className="bg-white rounded-sm shadow-sm overflow-hidden border-l-4 border-efta-navy">
          <div className="p-6">
            <h3 className="text-xl font-bold text-efta-navy mb-3">DuraProtect Range</h3>
            <p className="text-efta-dark-grey mb-4">
              Our versatile protection solutions suitable for most outdoor applications.
            </p>
            <ul className="list-disc pl-6 space-y-1">
              <li>IP65 rated components</li>
              <li>Reliable moisture protection</li>
              <li>Flexible installation options</li>
              <li>Cost-effective solutions</li>
              <li>Compatible with standard systems</li>
            </ul>
            <p className="mt-4 text-sm font-medium text-efta-navy">
              Recommended for: General outdoor installations requiring reliable weather protection.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-efta-navy mt-8 mb-4">Conclusion</h2>
      <p>
        While monsoon conditions present significant challenges, with proper planning, appropriate materials, and specialized techniques, reliable electrical installations are absolutely achievable during Tanzania's rainy seasons. Rather than viewing rain as a reason to halt work, consider it an opportunity to implement best practices that can enhance the long-term reliability of your installations.
      </p>
      <p className="mt-4">
        By following the guidelines outlined in this article and selecting quality components like EFTA's weather-resistant solutions, contractors and installers can maintain productivity throughout the year while ensuring excellent installation quality.
      </p>
      <p className="mt-4">
        Remember that the key to successful installations during rainy seasons lies in proactive planning rather than reactive measures. By anticipating challenges and implementing appropriate strategies from the outset, you can navigate Tanzania's rainy seasons successfully and deliver installations that stand the test of time—and weather.
      </p>

      <div className="bg-efta-orange/10 p-6 rounded-sm my-8 border-l-4 border-efta-orange">
        <h3 className="text-xl font-bold text-efta-navy mb-3">Need Technical Support?</h3>
        <p className="mb-4">
          EFTA's technical team is available to provide specialized guidance for your rainy season installations. From component selection to implementation strategies, our experts can help ensure your project's success.
        </p>
        <div className="flex justify-center mt-4">
          <Link 
            href="/contact" 
            className="bg-efta-orange hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-sm transition-colors inline-flex items-center"
          >
            Contact Our Technical Team
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>

      <div className="flex items-center mt-8 border-t border-gray-200 pt-8">
        <div className="mr-4">
          <Link 
            href="/blog" 
            className="flex items-center text-efta-navy hover:text-efta-orange transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Blog
          </Link>
        </div>
        <div className="ml-auto">
          <Link 
            href="/products" 
            className="flex items-center text-efta-navy hover:text-efta-orange transition-colors"
          >
            Explore our products
            <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </BlogPost>
  )
}