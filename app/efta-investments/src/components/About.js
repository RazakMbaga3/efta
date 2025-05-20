import { motion } from "framer-motion";

const About = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="container mx-auto text-center">
        <motion.h2
          className="text-4xl font-bold mb-6"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          About EFTA Investments
        </motion.h2>
        <motion.p
          className="text-lg mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          EFTA Investments is dedicated to empowering businesses and individuals through innovative investment solutions. Our mission is to create sustainable value and foster growth in the communities we serve.
        </motion.p>
        <motion.div
          className="flex flex-col items-center"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <h3 className="text-2xl font-semibold mb-4">Our Vision</h3>
          <p className="text-md mb-4">
            To be a leading investment firm recognized for our commitment to excellence and integrity.
          </p>
          <h3 className="text-2xl font-semibold mb-4">Our Values</h3>
          <p className="text-md">
            Integrity, Innovation, and Impact are at the core of everything we do.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;