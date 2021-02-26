import React from 'react'
import { motion } from 'framer-motion'
import styles from '../LogoIconMotion/icon-motion.module.css'

export const IconMotionContainer = ({ children }) => (
  <motion.div
    className={styles.icon_motion__container}
    animate={{ scale: 1.2 }}
    transition={{
      duration: 0.2,
      ease: 'easeInOut',
      times: [0, 0.2, 0.5, 0.8, 1]
    }}
    whileHover={{ translateY: -10 }}
    whileTap={{ scale: 1 }}
  >
    {children}
  </motion.div>
);

export default IconMotionContainer;
