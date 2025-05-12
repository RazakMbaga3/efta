'use client'

import { motion } from 'framer-motion'

export default function SlideIn({ 
  children, 
  direction = 'left', 
  delay = 0, 
  duration = 0.5,
  ...props 
}) {
  const directions = {
    left: { x: -50 },
    right: { x: 50 },
    up: { y: 50 },
    down: { y: -50 }
  }

  return (
    <motion.div
      initial={{ opacity: 0, ...directions[direction] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ 
        duration,
        delay,
        ease: "easeOut"
      }}
      {...props}
    >
      {children}
    </motion.div>
  )
}