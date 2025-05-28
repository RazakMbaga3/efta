'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { HiChip, HiShoppingCart, HiStar, HiFilter, HiSearch, HiOutlineX } from 'react-icons/hi'

// Define the equipment categories and products
const categories = [
  { id: 'electrical', name: 'High-efficiency Electrical Components' },
  { id: 'solar', name: 'Solar Panels and Inverters' },
  { id: 'distribution', name: 'Power Distribution Equipment' },
  { id: 'monitoring', name: 'Energy Monitoring Systems' },
  { id: 'safety', name: 'Safety and Protection Devices' }
]

const products = [
  // High-efficiency Electrical Components
  {
    id: 'ec1',
    name: 'Premium Circuit Breaker',
    price: 1250,
    category: 'electrical',
    image: '/images/equipments/IS4032_512x512.jpg.jpeg',
    rating: 4.8,
    inStock: true,
    description: 'High-quality circuit breaker for commercial and residential applications. Provides reliable protection against electrical overloads.'
  },
  {
    id: 'ec2',
    name: 'Industrial Switch Panel',
    price: 3200,
    category: 'electrical',
    image: '/images/equipments/VSTV13_512x512.jpg.jpeg',
    rating: 4.7,
    inStock: true,
    description: 'Heavy-duty industrial switch panel designed for demanding environments and continuous operation.'
  },
  {
    id: 'ec3',
    name: 'High-Performance Connectors',
    price: 580,
    category: 'electrical',
    image: '/images/equipments/TR5120_512x512.jpg.jpeg',
    rating: 4.5,
    inStock: true,
    description: 'Premium-grade electrical connectors for efficient power transmission and minimal energy loss.'
  },
  {
    id: 'ec4',
    name: 'Power Distribution Unit',
    price: 2100,
    category: 'electrical',
    image: '/images/equipments/MC-6K32_512x512.jpg.jpeg',
    rating: 4.9,
    inStock: true,
    description: 'Advanced power distribution unit for efficient energy management in commercial settings.'
  },
  // Solar Panels and Inverters
  {
    id: 'sp1',
    name: 'Monocrystalline Solar Panel 400W',
    price: 4500,
    category: 'solar',
    image: '/images/solar/400w-monocrystalline-solar-module-800x600_be8cc1cd-9b55-4d74-a60b-c609dbfba2ee.jpg',
    rating: 4.9,
    inStock: true,
    description: 'High-efficiency 400W monocrystalline solar panel with excellent performance in all light conditions.'
  },
  {
    id: 'sp2',
    name: 'ATESS Hybrid Inverter',
    price: 7800,
    category: 'solar',
    image: '/images/solar/ATESS-Hibrid-inverter-HPS3050100120150-768x768.jpg',
    rating: 4.8,
    inStock: true,
    description: 'Advanced hybrid inverter system supporting both on-grid and off-grid operations with seamless switching.'
  },
  {
    id: 'sp3',
    name: 'GOODWE Smart Energy Controller',
    price: 8500,
    category: 'solar',
    image: '/images/solar/GOODWE-Smart-Energy-Controller-SEC1000-min-768x768.jpg',
    rating: 4.7,
    inStock: true,
    description: 'Intelligent energy management system for optimizing solar energy utilization and storage.'
  },
  {
    id: 'sp4',
    name: 'LiFePO4 Battery Storage System',
    price: 12000,
    category: 'solar',
    image: '/images/solar/LiFePO4.png',
    rating: 4.9,
    inStock: true,
    description: 'Long-lasting lithium iron phosphate battery storage system with high cycle life and safety features.'
  },
  {
    id: 'sp5',
    name: 'EcoFlow Solar Panel 160W',
    price: 3200,
    category: 'solar',
    image: '/images/solar/ECOFLOW-SOLAR-PANELS-160W-min-768x768.jpg',
    rating: 4.6,
    inStock: true,
    description: 'Portable and lightweight 160W solar panel ideal for camping, remote work, and emergency power needs.'
  },
  {
    id: 'sp6',
    name: 'Adjustable Solar Mounting Frame',
    price: 2800,
    category: 'solar',
    image: '/images/solar/Adjustable-Mounting-Frames-768x768.jpg',
    rating: 4.5,
    inStock: true,
    description: 'Heavy-duty adjustable mounting system for optimal solar panel positioning and installation flexibility.'
  },

  // Power Distribution Equipment
  {
    id: 'pd1',
    name: 'Main Distribution Panel',
    price: 8900,
    category: 'distribution',
    image: '/images/equipments/EC7393_512x512.jpg.jpeg',
    rating: 4.8,
    inStock: true,
    description: 'Commercial-grade main distribution panel for efficient power management and distribution.'
  },
  {
    id: 'pd2',
    name: 'Industrial Bus Bar System',
    price: 5600,
    category: 'distribution',
    image: '/images/equipments/TR5345N_512x512.jpg.jpeg',
    rating: 4.6,
    inStock: true,
    description: 'High-current bus bar system for industrial applications requiring reliable power distribution.'
  },
  {
    id: 'pd3',
    name: 'Smart Distribution Board',
    price: 4300,
    category: 'distribution',
    image: '/images/equipments/TR5111_512x512.jpg.jpeg',
    rating: 4.7,
    inStock: true,
    description: 'Next-generation distribution board with smart monitoring and control capabilities.'
  },

  // Energy Monitoring Systems
  {
    id: 'em1',
    name: 'Power Quality Analyzer',
    price: 6700,
    category: 'monitoring',
    image: '/images/equipments/TS5213-UN-GO_512x512.jpg.jpeg',
    rating: 4.9,
    inStock: true,
    description: 'Professional-grade power quality analyzer for comprehensive electrical system monitoring.'
  },
  {
    id: 'em2',
    name: 'Smart Energy Meter',
    price: 1800,
    category: 'monitoring',
    image: '/images/equipments/CLYSRD-15-DL_512x512.jpg.jpeg',
    rating: 4.7,
    inStock: true,
    description: 'Advanced smart meter for real-time energy consumption monitoring and analysis.'
  },
  {
    id: 'em3',
    name: 'Building Energy Management System',
    price: 15000,
    category: 'monitoring',
    image: '/images/equipments/ILUDLSR-18-DL_512x512.png',
    rating: 4.8,
    inStock: true,
    description: 'Comprehensive building energy management system for commercial and industrial applications.'
  },

  // Safety and Protection Devices
  {
    id: 'sp1',
    name: 'Surge Protector',
    price: 1200,
    category: 'safety',
    image: '/images/equipments/IS4016_512x512.jpg.jpeg',
    rating: 4.9,
    inStock: true,
    description: 'High-capacity surge protector for safeguarding sensitive electronic equipment and systems.'
  },
  {
    id: 'sp2',
    name: 'Earth Leakage Circuit Breaker',
    price: 980,
    category: 'safety',
    image: '/images/equipments/MCIS4P-125_512x512.jpg.jpeg',
    rating: 4.8,
    inStock: true,
    description: 'Safety-critical ELCB for protection against electrical shock and fire hazards.'
  },
  {
    id: 'sp3',
    name: 'Lightning Arrestor',
    price: 3500,
    category: 'safety',
    image: '/images/equipments/EC7233_1_512x512.png',
    rating: 4.7,
    inStock: true,
    description: 'Industrial-grade lightning protection system for buildings and electrical installations.'
  }
]

export default function EquipmentSupplyPage() {
  const [cart, setCart] = useState([])
  const [activeCategory, setActiveCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')
  const [showCart, setShowCart] = useState(false)
  
  // Filter products based on category and search query
  const filteredProducts = products.filter(product => {
    const matchesCategory = activeCategory === 'all' || product.category === activeCategory
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchQuery.toLowerCase())
    
    return matchesCategory && matchesSearch
  })
  
  // Add to cart function
  const addToCart = (product) => {
    const existingItem = cart.find(item => item.id === product.id)
    
    if (existingItem) {
      setCart(cart.map(item => 
        item.id === product.id 
          ? { ...item, quantity: item.quantity + 1 } 
          : item
      ))
    } else {
      setCart([...cart, { ...product, quantity: 1 }])
    }
  }
  
  // Remove from cart function
  const removeFromCart = (productId) => {
    const existingItem = cart.find(item => item.id === productId)
    
    if (existingItem.quantity === 1) {
      setCart(cart.filter(item => item.id !== productId))
    } else {
      setCart(cart.map(item => 
        item.id === productId 
          ? { ...item, quantity: item.quantity - 1 } 
          : item
      ))
    }
  }
  
  // Calculate total price
  const totalPrice = cart.reduce((total, item) => total + (item.price * item.quantity), 0)

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/equipments/Switch-Gear-1_512x512.png"
            alt="EFTA Equipment Supply"
            fill
            priority
            className="object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
        </div>

        {/* Content */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h5 className="text-efta-500 font-medium mb-3 tracking-wider">EQUIPMENT SUPPLY</h5>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                High-Quality <span className="text-efta-500">Electrical</span> & <br />
                <span className="text-efta-500">Renewable</span> Equipment
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl"
            >
              Browse our extensive catalog of premium electrical components, renewable energy equipment, and safety devices.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#products" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-efta-500 hover:bg-efta-600 transition duration-300">
                Browse Products
              </a>
              <button 
                onClick={() => setShowCart(true)}
                className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition duration-300"
              >
                <HiShoppingCart className="mr-2" /> View Cart ({cart.length})
              </button>
            </motion.div>
          </div>
        </div>

        {/* Floating badge */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 hidden lg:block"
        >
          <div className="text-center">
            <HiChip className="h-12 w-12 text-efta-500 mx-auto mb-2" />
            <h3 className="text-xl font-bold text-white">Premium Quality</h3>
            <p className="text-white/80 text-sm mt-1">All products certified & tested</p>
          </div>
        </motion.div>
      </section>

      {/* Products Section */}
      <section id="products" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          {/* Search and Filter */}
          <div className="mb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
            <div className="relative w-full md:w-72">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full px-4 py-2 pl-10 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-efta-500"
              />
              <HiSearch className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
            </div>
            
            <div className="flex flex-wrap gap-2">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                  activeCategory === 'all'
                    ? 'bg-efta-500 text-white'
                    : 'bg-white text-gray-700 hover:bg-gray-100'
                }`}
              >
                All Products
              </button>
              
              {categories.map(category => (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-efta-500 text-white'
                      : 'bg-white text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
          
          {/* Products Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProducts.map(product => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="bg-white rounded-lg shadow-md overflow-hidden"
              >
                <div className="relative h-64 bg-gray-100">
                  <Image
                    src={product.image}
                    alt={product.name}
                    fill
                    className="object-contain p-4"
                  />
                </div>
                <div className="p-6">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-gray-800">{product.name}</h3>
                    <div className="flex items-center">
                      <HiStar className="text-yellow-500 h-5 w-5" />
                      <span className="ml-1 text-sm text-gray-600">{product.rating}</span>
                    </div>
                  </div>
                  <p className="text-gray-600 mb-4 text-sm h-12 overflow-hidden">{product.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-xl font-bold text-efta-500">TZS {product.price.toLocaleString()}</span>
                    <button
                      onClick={() => addToCart(product)}
                      disabled={!product.inStock}
                      className={`px-4 py-2 rounded-md text-white font-medium flex items-center gap-2 ${
                        product.inStock 
                          ? 'bg-efta-500 hover:bg-efta-600' 
                          : 'bg-gray-400 cursor-not-allowed'
                      }`}
                    >
                      <HiShoppingCart /> 
                      {product.inStock ? 'Add to Cart' : 'Out of Stock'}
                    </button>
                  </div>
                  {!product.inStock && (
                    <p className="text-red-500 text-sm mt-2">Currently unavailable. Contact us for more information.</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
          
          {filteredProducts.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-600">No products found. Try a different search or category.</p>
            </div>
          )}
        </div>
      </section>
      
      {/* Shopping Cart Sidebar */}
      {showCart && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end">
          <motion.div
            initial={{ x: 400 }}
            animate={{ x: 0 }}
            exit={{ x: 400 }}
            className="bg-white w-full max-w-md h-full overflow-y-auto"
          >
            <div className="p-6 border-b border-gray-200">
              <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold">Your Cart</h2>
                <button 
                  onClick={() => setShowCart(false)}
                  className="text-gray-500 hover:text-gray-700"
                >
                  <HiOutlineX className="h-6 w-6" />
                </button>
              </div>
            </div>
            
            {cart.length === 0 ? (
              <div className="p-6 text-center">
                <p className="text-gray-600">Your cart is empty.</p>
                <button
                  onClick={() => setShowCart(false)}
                  className="mt-4 px-6 py-2 bg-efta-500 text-white rounded-md hover:bg-efta-600"
                >
                  Start Shopping
                </button>
              </div>
            ) : (
              <>
                <div className="p-6 flex-1">
                  {cart.map(item => (
                    <div key={item.id} className="flex gap-4 py-4 border-b border-gray-200">
                      <div className="relative h-16 w-16 bg-gray-100 rounded-md">
                        <Image
                          src={item.image}
                          alt={item.name}
                          fill
                          className="object-contain p-2"
                        />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-gray-600 text-sm">TZS {item.price.toLocaleString()} x {item.quantity}</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => removeFromCart(item.id)}
                          className="p-1 rounded-full hover:bg-gray-100"
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          onClick={() => addToCart(item)}
                          className="p-1 rounded-full hover:bg-gray-100"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="p-6 border-t border-gray-200">
                  <div className="flex justify-between items-center mb-4">
                    <span className="font-medium">Total:</span>
                    <span className="text-xl font-bold">TZS {totalPrice.toLocaleString()}</span>
                  </div>
                  <Link
                    href="/contact"
                    className="block w-full py-3 bg-efta-500 text-white text-center rounded-md hover:bg-efta-600"
                  >
                    Proceed to Checkout
                  </Link>
                  <button
                    onClick={() => setShowCart(false)}
                    className="block w-full py-3 mt-2 text-efta-500 text-center hover:underline"
                  >
                    Continue Shopping
                  </button>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
      
      {/* CTA Section */}
      <section className="py-16 bg-efta-500 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Need Custom Equipment?</h2>
          <p className="max-w-2xl mx-auto mb-8">
            Can't find what you're looking for? We offer customized equipment solutions tailored to your specific needs and requirements.
          </p>
          <Link 
            href="/contact" 
            className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-efta-500 bg-white hover:bg-gray-100 transition duration-300"
          >
            Request a Quote
          </Link>
        </div>
      </section>
    </div>
  )
}
