Sure, here's the proposed content for the file `/efta-investments/src/components/animations/index.js`:

import { motion } from "framer-motion";

export const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

export const slideIn = {
  hidden: { x: "-100%" },
  visible: { x: 0 },
};

export const scaleUp = {
  hidden: { scale: 0 },
  visible: { scale: 1 },
};

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
    },
  },
};

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};