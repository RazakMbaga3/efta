// app/blog/tanzania-infrastructure-boom/page.js
import React from 'react'
import BlogPost from '../../components/BlogPost'
import Image from 'next/image'
import Link from 'next/link'

export const metadata = {
  title: 'Tanzania\'s Infrastructure Boom: Powering Development | EFTA Investments Blog',
  description: 'Explore Tanzania\'s infrastructure development and how modern electrical and automation solutions contribute to building sustainable projects.',
}

// Related posts for this article
const relatedPosts = [
  {
    title: 'The Economics of Smart Grid Technology',
    excerpt: 'Why investing in smart grid infrastructure delivers better value for sustainable development.',
    category: 'Industry Insights',
    date: 'Coming Soon',
    readTime: '8 min read',
    slug: '#'
  },
  {
    title: 'Renewable Energy Integration in Tanzania',
    excerpt: 'How renewable energy is transforming Tanzania\'s power infrastructure.',
    category: 'Industry Insights',
    date: 'Coming Soon',
    readTime: '7 min read',
    slug: '#'
  }
];

export default function TanzaniaInfrastructurePage() {
  return (
    <BlogPost 
      title="Tanzania's Infrastructure Boom: Powering Development Through Innovation"
      date="April 3, 2025"
      author="EFTA Industry Analysis Team"
      category="Industry Insights"
      readTime="5 min read"
      relatedPosts={relatedPosts}
    >
      <p className="lead text-xl mb-6">
        Tanzania is experiencing significant infrastructure development that is transforming the nation's economic landscape. From railways to ports and hydropower stations, the country is investing in foundations for future growth. At the heart of these developments lies a critical component: reliable electrical and automation solutions.
      </p>

      <div className="my-6 rounded-sm overflow-hidden relative aspect-w-16 aspect-h-9">
        <Image
          src="/images/blog/modern-infrastructure.jpg"
          alt="Tanzania's modern infrastructure development"
          width={1200}
          height={675}
          className="object-cover rounded-sm"
        />
      </div>

      <div className="bg-efta-cream p-6 rounded-sm my-6">
        <h3 className="text-xl font-bold text-efta-navy mb-3">Infrastructure Development in Tanzania</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="text-center bg-white p-4 rounded-sm shadow-sm">
            <div className="text-base font-bold text-efta-orange mb-1">Major</div>
            <div className="text-sm text-efta-dark-grey">Infrastructure investments</div>
          </div>
          <div className="text-center bg-white p-4 rounded-sm shadow-sm">
            <div className="text-base font-bold text-efta-orange mb-1">Multiple</div>
            <div className="text-sm text-efta-dark-grey">Large-scale projects</div>
          </div>
          <div className="text-center bg-white p-4 rounded-sm shadow-sm">
            <div className="text-base font-bold text-efta-orange mb-1">Thousands</div>
            <div className="text-sm text-efta-dark-grey">Jobs created</div>
          </div>
          <div className="text-center bg-white p-4 rounded-sm shadow-sm">
            <div className="text-base font-bold text-efta-orange mb-1">Growing</div>
            <div className="text-sm text-efta-dark-grey">Energy demand</div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-efta-navy mt-8 mb-4">Key Infrastructure Projects</h2>
      
      <div className="my-6 space-y-6">
        <div className="bg-white rounded-sm shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-3">
            <div className="md:col-span-1 bg-gray-100 flex items-center justify-center p-4">
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/blog/sgr-railway.jpg"
                    alt="Standard Gauge Railway"
                    width={1200}
                    height={675}
                    className="object-cover rounded-sm"
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-2 p-6">
              <h3 className="text-xl font-bold text-efta-navy mb-2">Standard Gauge Railway (SGR)</h3>
              <p className="text-efta-dark-grey mb-3">
                The Standard Gauge Railway project aims to connect the port of Dar es Salaam to inland regions, enhancing transportation infrastructure and economic connectivity within Tanzania and with neighboring countries.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-efta-navy text-sm">Project Type:</h4>
                  <p className="text-sm">Transportation Infrastructure</p>
                </div>
                <div>
                  <h4 className="font-bold text-efta-navy text-sm">EFTA's Role:</h4>
                  <p className="text-sm">Power systems, automation, signaling</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-sm shadow-sm overflow-hidden">
          <div className="grid md:grid-cols-3">
            <div className="md:col-span-1 bg-gray-100 flex items-center justify-center p-4">
              <div className="relative h-48 w-full">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Image
                    src="/images/blog/nyereredam.jpg"
                    alt="Julius Nyerere Hydropower Plant"
                    width={1200}
                    height={675}
                    className="object-cover rounded-sm"
                  />
                </div>
              </div>
            </div>
            <div className="md:col-span-2 p-6">
              <h3 className="text-xl font-bold text-efta-navy mb-2">Julius Nyerere Hydropower Station</h3>
              <p className="text-efta-dark-grey mb-3">
                This hydropower project on the Rufiji River represents a significant investment in Tanzania's power generation capacity, aiming to provide electricity to support the country's industrialization efforts.
              </p>
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <h4 className="font-bold text-efta-navy text-sm">Project Type:</h4>
                  <p className="text-sm">Energy Infrastructure</p>
                </div>
                <div>
                  <h4 className="font-bold text-efta-navy text-sm">EFTA's Role:</h4>
                  <p className="text-sm">Power distribution, automation systems</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-efta-navy mt-8 mb-4">Why Quality Electrical Systems Matter in Infrastructure</h2>
      
      <div className="grid md:grid-cols-3 gap-6 my-6">
        <div className="bg-white rounded-sm shadow-sm p-6">
          <div className="w-12 h-12 rounded-full bg-efta-orange/20 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-efta-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-efta-navy mb-3">Infrastructure Longevity</h3>
          <p className="text-efta-dark-grey">
            Quality electrical and automation systems ensure longer-lasting infrastructure. High-grade components may increase initial costs but result in more reliable operations with less maintenance over time.
          </p>
        </div>
        
        <div className="bg-white rounded-sm shadow-sm p-6">
          <div className="w-12 h-12 rounded-full bg-efta-orange/20 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-efta-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-efta-navy mb-3">Safety and Reliability</h3>
          <p className="text-efta-dark-grey">
            High-quality electrical systems provide the necessary safety features and reliability needed to ensure infrastructure safety. This is particularly important for systems that must operate continuously in challenging conditions.
          </p>
        </div>
        
        <div className="bg-white rounded-sm shadow-sm p-6">
          <div className="w-12 h-12 rounded-full bg-efta-orange/20 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-efta-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-bold text-efta-navy mb-3">Economic Efficiency</h3>
          <p className="text-efta-dark-grey">
            Infrastructure projects represent significant investments. Using quality electrical and automation systems helps ensure these investments deliver their intended benefits through reliable operation and reduced downtime.
          </p>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-efta-navy mt-8 mb-4">Technical Requirements for Infrastructure Systems</h2>
      
      <div className="bg-white p-6 rounded-sm shadow-sm my-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h4 className="font-bold text-efta-navy mb-2">Performance Requirements</h4>
            <p className="text-efta-dark-grey">
              Infrastructure projects typically require electrical systems that deliver both reliable operation and high performance. Different applications may have specific requirements based on their intended use and expected loads.
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-efta-navy mb-2">Durability Factors</h4>
            <p className="text-efta-dark-grey mb-3">
              Key durability considerations include:
            </p>
            <ul className="list-disc pl-6 text-sm space-y-1">
              <li>Environmental protection ratings</li>
              <li>Surge protection capabilities</li>
              <li>EMI/RFI resistance</li>
              <li>Protection against corrosion</li>
              <li>Heat dissipation management</li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-efta-navy mt-8 mb-4">EFTA's Infrastructure Solutions</h2>
      
      <div className="grid md:grid-cols-2 gap-6 my-6">
        <div className="bg-white rounded-sm shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-bold text-efta-navy mb-3">Our Infrastructure-Grade Products</h3>
            <p className="text-efta-dark-grey mb-4">
              EFTA offers solutions engineered for infrastructure applications:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>PowerPro Series:</strong> High-performance power distribution systems with superior reliability for critical infrastructure
              </li>
              <li>
                <strong>AutoMax Controls:</strong> Premium automation solutions ensuring precise control and monitoring of infrastructure systems
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-white rounded-sm shadow-sm overflow-hidden">
          <div className="p-6">
            <h3 className="text-xl font-bold text-efta-navy mb-3">Infrastructure Applications</h3>
            <p className="text-efta-dark-grey mb-4">
              Our solutions are suitable for various infrastructure components:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Transportation:</strong> Railways, highways, bridges, and airport facilities
              </li>
              <li>
                <strong>Energy:</strong> Power generation structures and distribution networks
              </li>
              <li>
                <strong>Water:</strong> Water supply systems and management facilities
              </li>
              <li>
                <strong>Public Facilities:</strong> Schools, hospitals, and government buildings
              </li>
            </ul>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-efta-navy mt-8 mb-4">The Value of Quality Systems</h2>
      
      <div className="bg-white rounded-sm shadow-sm overflow-hidden my-6">
        <div className="p-6">
          <h3 className="text-xl font-bold text-efta-navy mb-4">Understanding Life-Cycle Benefits</h3>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-bold text-efta-navy mb-2">Standard-Grade Approach</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Lower initial material costs</li>
                <li>Potential for earlier degradation</li>
                <li>More frequent maintenance requirements</li>
                <li>Shorter expected service life</li>
                <li>Higher lifetime maintenance expenses</li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-bold text-efta-navy mb-2">Premium-Grade Approach</h4>
              <ul className="list-disc pl-6 space-y-1">
                <li>Higher initial investment</li>
                <li>Greater resistance to deterioration</li>
                <li>Reduced maintenance frequency</li>
                <li>Extended service life expectancy</li>
                <li>Lower lifetime maintenance costs</li>
              </ul>
            </div>
          </div>
          
          <div className="mt-4">
            <p className="text-efta-dark-grey">
              When calculating the total cost of ownership over the entire life of an infrastructure project, premium-grade systems often provide a more economical solution despite the higher initial investment.
            </p>
          </div>
        </div>
      </div>

      <h2 className="text-2xl font-bold text-efta-navy mt-8 mb-4">Conclusion: Supporting Tanzania's Development</h2>
      <p>
        Tanzania's infrastructure development represents an important investment in the nation's future prosperity. The quality of electrical and automation systems plays a pivotal role in determining how well these investments will serve their intended purposes over time.
      </p>
      <p className="mt-4">
        By providing high-quality solutions engineered specifically for infrastructure applications, EFTA Investments contributes to Tanzania's development efforts and helps ensure that today's infrastructure investments deliver lasting value.
      </p>

      <div className="bg-efta-orange/10 p-6 rounded-sm my-6 border-l-4 border-efta-orange">
        <h3 className="text-xl font-bold text-efta-navy mb-3">EFTA: Supporting Tanzania's Infrastructure</h3>
        <p>
          EFTA Investments is committed to providing high-quality electrical and automation solutions for Tanzania's infrastructure development. Our specialized products are engineered to meet the demanding requirements of construction projects throughout the country.
        </p>
        <div className="flex justify-center mt-4">
          <Link 
            href="/products" 
            className="bg-efta-orange hover:bg-orange-600 text-white font-medium px-6 py-3 rounded-sm transition-colors inline-flex items-center"
          >
            Explore Our Products
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
              <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
            </svg>
          </Link>
        </div>
      </div>
    </BlogPost>
  )
}