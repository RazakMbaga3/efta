// app/components/ui/Button.jsx
'use client'

import { motion } from 'framer-motion'
import { cva } from 'class-variance-authority'
import { twMerge } from 'tailwind-merge'

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-md font-medium transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-60 disabled:cursor-not-allowed",
  {
    variants: {
      intent: {
        primary: "bg-nyati-orange text-white hover:bg-orange-600 focus:ring-orange-500 shadow-sm hover:shadow-md",
        secondary: "bg-nyati-navy text-white hover:bg-navy-700 focus:ring-navy-600 shadow-sm hover:shadow-md",
        green: "bg-nyati-green text-white hover:bg-green-600 focus:ring-green-500 shadow-sm hover:shadow-md",
        outline: "bg-transparent border-2 border-nyati-orange text-nyati-orange hover:bg-orange-50 hover:border-orange-600 hover:text-orange-600 focus:ring-orange-500",
        ghost: "bg-transparent text-nyati-orange hover:bg-orange-50 hover:text-orange-600 focus:ring-orange-500",
        white: "bg-white text-nyati-navy hover:bg-gray-50 focus:ring-nyati-orange shadow-sm hover:shadow-md",
        dark: "bg-nyati-navy text-white hover:bg-gray-900 focus:ring-nyati-orange shadow-sm hover:shadow-md",
      },
      size: {
        xs: "text-xs px-2.5 py-1.5",
        sm: "text-sm px-3 py-2",
        md: "text-base px-4 py-2.5",
        lg: "text-lg px-6 py-3",
        xl: "text-xl px-8 py-4",
      },
      fullWidth: {
        true: "w-full",
      },
    },
    defaultVariants: {
      intent: "primary",
      size: "md",
      fullWidth: false,
    },
  }
);

export default function Button({
  children,
  className,
  intent,
  size,
  fullWidth,
  animate = true,
  ...props
}) {
  const ButtonComponent = animate ? motion.button : 'button';
  
  return (
    <ButtonComponent
      className={twMerge(buttonVariants({ intent, size, fullWidth }), className)}
      whileHover={animate ? { scale: 1.02 } : undefined}
      whileTap={animate ? { scale: 0.98 } : undefined}
      {...props}
    >
      {children}
    </ButtonComponent>
  );
}