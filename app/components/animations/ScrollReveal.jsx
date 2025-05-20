'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function ScrollReveal({ 
  children, 
  threshold = 0.1,
  duration = 0.5,
  ...props 
}) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, threshold })

  return (
    <div ref={ref}>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
        transition={{ 
          duration,
          ease: "easeOut"
        }}
        {...props}
      >
        {children}
      </motion.div>
    </div>
  )
}