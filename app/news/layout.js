// News section layout
export default function NewsLayout({ children }) {
    return (
      <section>
        <div className="flex items-center mb-8">
          <div className="h-px flex-grow bg-gradient-to-r from-transparent to-gray-200"></div>
          <h2 className="text-2xl font-bold text-efta-green px-6 flex items-center font-futura">
            EFTA NEWS & MEDIA
          </h2>
          <div className="h-px flex-grow bg-gradient-to-l from-transparent to-gray-200"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Link href="/news/company" className="bg-white p-6 rounded-lg shadow-soft hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-efta-navy" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              <h3 className="text-xl font-bold ml-3 text-efta-navy">Company News</h3>
            </div>
            <p className="text-gray-600">Stay updated with EFTA's latest corporate developments, achievements, and milestones.</p>
          </Link>
          
          <Link href="/news/csr" className="bg-white p-6 rounded-lg shadow-soft hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-efta-green" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9-3-9m-9 9a9 9 0 019-9" />
              </svg>
              <h3 className="text-xl font-bold ml-3 text-efta-green">CSR Initiatives</h3>
            </div>
            <p className="text-gray-600">Learn about EFTA's community engagement and social responsibility programs.</p>
          </Link>
          
          <Link href="/news/products" className="bg-white p-6 rounded-lg shadow-soft hover:shadow-md transition-shadow">
            <div className="flex items-center mb-4">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-efta-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
              <h3 className="text-xl font-bold ml-3 text-efta-orange">Product News</h3>
            </div>
            <p className="text-gray-600">Discover EFTA's latest product innovations, improvements, and certifications.</p>
          </Link>
        </div>

        {children}
      </section>
    )
  }