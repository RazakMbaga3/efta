import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 1 } },
  };

  return (
    <section className="hero bg-gray-100 flex flex-col items-center justify-center min-h-screen text-center">
      <motion.h1
        className="text-4xl font-bold mb-4"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
      >
        Welcome to EFTA Investments
      </motion.h1>
      <motion.p
        className="text-lg mb-8"
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        transition={{ duration: 1, delay: 0.5 }}
      >
        Empowering your financial future with innovative solutions.
      </motion.p>
      <div className="flex space-x-4">
        <motion.a
          href="#services"
          className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1 }}
        >
          Our Services
        </motion.a>
        <motion.a
          href="#contact"
          className="bg-gray-800 text-white py-2 px-4 rounded hover:bg-gray-700 transition"
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          transition={{ duration: 1, delay: 1.5 }}
        >
          Contact Us
        </motion.a>
      </div>
    </section>
  );
};

export default Hero;