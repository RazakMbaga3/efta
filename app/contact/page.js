'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import Image from 'next/image'
import { HiLocationMarker, HiPhone, HiMail, HiClock } from 'react-icons/hi'

const services = [
  { value: 'electrical', label: 'Electrical Contracting' },
  { value: 'renewable', label: 'Renewable Energy Solutions' },
  { value: 'automation', label: 'Building Automation' },
  { value: 'equipment', label: 'Equipment Supply' },
  { value: 'other', label: 'Other Services' }
]

const contactInfo = {
  company: "EFTA Investments",
  headquarters: {
    address: "Plot No. 1234, Mandela Road",
    city: "Dar es Salaam",
    country: "Tanzania",
    postalCode: "14111"
  },
  contact: {
    phone: "+255 123 456 789",
    email: "info@eftainvestments.co.tz",
    emergency: "+255 789 123 456"
  },
  hours: {
    weekdays: "Monday - Friday: 8:00 AM - 5:00 PM",
    saturday: "Saturday: 9:00 AM - 1:00 PM",
    sunday: "Sunday: Closed"
  }
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Add form submission logic here
    setTimeout(() => {
      setIsSubmitting(false)
      // Add success message handling
    }, 1000)
  }

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/contactus/contact-hero.jpg"
            alt="Contact EFTA Investments"
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
              <h5 className="text-efta-500 font-medium mb-3 tracking-wider">GET IN TOUCH</h5>
              <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                Let's <span className="text-efta-500">Power</span> Your <br />
                <span className="text-efta-500">Project</span> Together
              </h1>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl text-gray-100 mb-8 max-w-2xl"
            >
              Connect with our team of electrical engineering experts to discuss your energy needs
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <a href="#contact-form" className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-efta-500 hover:bg-efta-600 transition duration-300">
                Send Message
              </a>
              <a href="tel:+255123456789" className="inline-flex items-center justify-center px-6 py-3 border border-white text-base font-medium rounded-md text-white hover:bg-white/10 transition duration-300">
                Call Us Now
              </a>
            </motion.div>
          </div>
        </div>

        {/* Floating contact info */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-10 right-10 bg-white/10 backdrop-blur-md p-6 rounded-lg border border-white/20 hidden lg:flex flex-col gap-4"
        >
          <div className="flex items-center gap-3">
            <HiPhone className="text-efta-500 h-5 w-5" />
            <p className="text-white text-sm">{contactInfo.contact.phone}</p>
          </div>
          <div className="flex items-center gap-3">
            <HiMail className="text-efta-500 h-5 w-5" />
            <p className="text-white text-sm">{contactInfo.contact.email}</p>
          </div>
          <div className="flex items-center gap-3">
            <HiLocationMarker className="text-efta-500 h-5 w-5" />
            <p className="text-white text-sm">{contactInfo.headquarters.city}, Tanzania</p>
          </div>
        </motion.div>
      </section>

      {/* Contact Content */}
      <section id="contact-form" className="py-24 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-7xl mx-auto">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-white shadow-xl rounded-2xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold mb-6">Send us a Message</h2>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="name">
                      Full Name
                    </label>
                    <input
                      id="name"
                      type="text"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-efta-500 focus:border-transparent transition-all"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="email">
                        Email Address
                      </label>
                      <input
                        id="email"
                        type="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-efta-500 focus:border-transparent transition-all"
                        value={formData.email}
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                        placeholder="Enter your email"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2" htmlFor="phone">
                        Phone Number
                      </label>
                      <input
                        id="phone"
                        type="tel"
                        className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-efta-500 focus:border-transparent transition-all"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="Enter your phone number"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="service">
                      Service Interest
                    </label>
                    <select
                      id="service"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-efta-500 focus:border-transparent transition-all"
                      value={formData.service}
                      onChange={(e) => setFormData({...formData, service: e.target.value})}
                    >
                      <option value="">Select a service</option>
                      {services.map((service) => (
                        <option key={service.value} value={service.value}>
                          {service.label}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2" htmlFor="message">
                      Message
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-efta-500 focus:border-transparent transition-all"
                      value={formData.message}
                      onChange={(e) => setFormData({...formData, message: e.target.value})}
                      placeholder="Tell us about your project"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-efta-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-efta-700 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    {isSubmitting ? 'Sending...' : 'Send Message'}
                  </button>
                </form>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="space-y-8"
            >
              {/* Company Info */}
              <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <HiLocationMarker className="text-efta-600 h-6 w-6 mt-1" />
                    <div>
                      <h3 className="font-semibold text-lg">{contactInfo.company}</h3>
                      <p className="text-gray-600">
                        {contactInfo.headquarters.address}<br />
                        {contactInfo.headquarters.city}, {contactInfo.headquarters.country}
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <HiPhone className="text-efta-600 h-6 w-6 mt-1" />
                    <div>
                      <h3 className="font-semibold">Phone</h3>
                      <p className="text-gray-600">{contactInfo.contact.phone}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <HiMail className="text-efta-600 h-6 w-6 mt-1" />
                    <div>
                      <h3 className="font-semibold">Email</h3>
                      <p className="text-gray-600">{contactInfo.contact.email}</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <HiClock className="text-efta-600 h-6 w-6 mt-1" />
                    <div>
                      <h3 className="font-semibold">Business Hours</h3>
                      <p className="text-gray-600">
                        {contactInfo.hours.weekdays}<br />
                        {contactInfo.hours.saturday}<br />
                        {contactInfo.hours.sunday}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Support */}
              <div className="bg-red-50 rounded-2xl p-8 border border-red-100">
                <h3 className="text-xl font-bold mb-4 flex items-center gap-2">
                  <HiPhone className="text-red-600 h-5 w-5" />
                  24/7 Emergency Support
                </h3>
                <p className="text-gray-600 mb-4">
                  Available round the clock for critical electrical system issues
                </p>
                <div className="font-semibold text-red-600">
                  Emergency Hotline: {contactInfo.contact.emergency}
                </div>
              </div>

              {/* Map */}
              <div className="bg-white rounded-2xl overflow-hidden shadow-lg h-[400px]">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.7444557698087!2d39.2682893!3d-6.8161944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDknMDEuOSJTIDM5wrAxNicwNS44IkU!5e0!3m2!1sen!2stz!4v1620834345678!5m2!1sen!2stz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}