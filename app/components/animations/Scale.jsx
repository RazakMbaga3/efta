'use client'

import { motion } from 'framer-motion'

export default function Scale({ 
  children, 
  delay = 0,
  duration = 0.3,
  scale = 1.05,
  ...props 
}) {
  return (
    <motion.div
      initial={{ scale: 1 }}
      whileHover={{ scale }}
      transition={{ 
        duration,
        delay,
        ease: "easeInOut"
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}