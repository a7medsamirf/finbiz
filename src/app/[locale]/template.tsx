'use client'

import { motion } from 'framer-motion'

export default function template({
   children
   }: {
     children: React.ReactNode 
    }) {
      
  return (
    <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -10, opacity: 0 }}
          transition={{ ease: 'easeInOut', duration: .75 }}
  >
    {children}
  </motion.div>
  )
}