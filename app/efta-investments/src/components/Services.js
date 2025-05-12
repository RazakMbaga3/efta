import React from 'react';
import { motion } from 'framer-motion';

const services = [
  {
    title: 'Investment Consulting',
    description: 'Expert advice on investment strategies to maximize returns.',
    icon: '/assets/investment-icon.svg',
  },
  {
    title: 'Portfolio Management',
    description: 'Comprehensive management of your investment portfolio.',
    icon: '/assets/portfolio-icon.svg',
  },
  {
    title: 'Market Analysis',
    description: 'In-depth analysis of market trends and opportunities.',
    icon: '/assets/market-icon.svg',
  },
];

const Services = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <h2 className="text-3xl font-bold mb-10">Our Services</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <img src={service.icon} alt={service.title} className="mb-4 w-16 h-16 mx-auto" />
              <h3 className="text-xl font-semibold">{service.title}</h3>
              <p className="mt-2 text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;