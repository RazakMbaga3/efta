'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'
import { HiLocationMarker, HiPhone, HiMail, HiClock } from 'react-icons/hi'
import Button from '../components/ui/Button'

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
    emergencyService: "+255 789 123 456"
  },
  departments: [
    {
      name: "Electrical Engineering Services",
      email: "engineering@eftainvestments.co.tz",
      phone: "+255 456 789 123"
    },
    {
      name: "Renewable Energy Solutions",
      email: "renewable@eftainvestments.co.tz",
      phone: "+255 789 456 123"
    },
    {
      name: "Business Development",
      email: "business@eftainvestments.co.tz",
      phone: "+255 321 654 987"
    }
  ],
  services: [
    {
      title: "Electrical Engineering",
      description: "Professional electrical engineering services for industrial and commercial projects",
      contact: "engineering@eftainvestments.co.tz"
    },
    {
      title: "Renewable Energy",
      description: "Solar, wind, and sustainable energy solutions",
      contact: "renewable@eftainvestments.co.tz"
    },
    {
      title: "Power Systems",
      description: "Power distribution and management systems",
      contact: "power@eftainvestments.co.tz"
    },
    {
      title: "Consultation",
      description: "Expert consultation for electrical and renewable energy projects",
      contact: "consult@eftainvestments.co.tz"
    }
  ],
  businessHours: {
    weekdays: "Monday - Friday: 8:00 AM - 5:00 PM",
    weekend: "Saturday: 9:00 AM - 1:00 PM",
    emergency: "24/7 Emergency Service Available"
  },
  socialMedia: {
    linkedin: "linkedin.com/company/efta-investments",
    twitter: "twitter.com/EFTAInvestments",
    facebook: "facebook.com/EFTAInvestments"
  }
};

const emergencyServices = {
  title: "24/7 Emergency Services",
  description: "Available round the clock for critical electrical system issues",
  hotline: "+255 789 123 456",
  services: [
    "Power outage response",
    "Critical system failures",
    "Industrial emergency support",
    "Safety system malfunctions"
  ]
};

const consultationProcess = {
  steps: [
    "Initial consultation request",
    "Project requirements assessment",
    "Technical proposal submission",
    "Project planning and execution",
    "Quality assurance and monitoring"
  ],
  booking: {
    phone: "+255 123 456 789",
    email: "consult@eftainvestments.co.tz",
    online: "eftainvestments.co.tz/book-consultation"
  }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: '',
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Add form submission logic here
  }

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
                Let's Power Your Project
              </h1>
              <p className="text-xl text-gray-600 dark:text-gray-400">
                Get in touch with our electrical engineering experts to discuss your needs
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-gray-50 dark:bg-gray-800 p-8 rounded-lg"
            >
              <h2 className="text-2xl font-bold mb-6">Request a Quote</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium mb-2">Name</label>
                  <input
                    type="text"
                    required
                    className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Email</label>
                  <input
                    type="email"
                    required
                    className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Phone</label>
                  <input
                    type="tel"
                    className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Project Type</label>
                  <select
                    className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                    value={formData.projectType}
                    onChange={(e) => setFormData({...formData, projectType: e.target.value})}
                  >
                    <option value="">Select a project type</option>
                    {contactInfo.services.map((service, index) => (
                      <option key={index} value={service.title}>
                        {service.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                  ></textarea>
                </div>
                <Button
                  type="submit"
                  intent="primary"
                  fullWidth
                >
                  Send Message
                </Button>
              </form>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <HiLocationMarker className="text-efta h-6 w-6 mt-1" />
                    <div>
                      <h3 className="font-semibold">{contactInfo.company}</h3>
                      <p className="text-gray-600 dark:text-gray-400">
                        {contactInfo.headquarters.address}, {contactInfo.headquarters.city}, {contactInfo.headquarters.country}<br />
                        Phone: {contactInfo.contact.phone}<br />
                        Email: {contactInfo.contact.email}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Emergency Support */}
              <div className="bg-efta/5 dark:bg-efta/10 p-6 rounded-lg">
                <h3 className="text-xl font-bold mb-4">{emergencyServices.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {emergencyServices.description}
                </p>
                <div className="flex items-center gap-2">
                  <HiPhone className="text-efta h-5 w-5" />
                  <span className="font-semibold">Emergency Hotline: {emergencyServices.hotline}</span>
                </div>
              </div>

              {/* Map */}
              <div className="h-[300px] rounded-lg overflow-hidden">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.7444557698087!2d39.2682893!3d-6.8161944!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNsKwNDknMDEuOSJTIDM5wrAxNicwNS44IkU!5e0!3m2!1sen!2stz!4v1620834345678!5m2!1sen!2stz"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen=""
                  loading="lazy"
                ></iframe>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}